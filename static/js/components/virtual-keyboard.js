/**
 * Aurora Virtual Keyboard Controller
 * Handles layout generation, multi-mode entry, input binding, state management, and the SpeechRecognition API.
 */
export class AuroraKeyboard {
    constructor(element, options = {}) {
        this.container = element;
        this.options = Object.assign({
            layout: 'full', // 'full', 'letters', 'digits', 'punctuation'
            enterLabel: 'Enter',
            targetInput: null, // CSS Selector or DOM Element
            enableVoice: true
        }, options);

        // Parse target input if provided via data attributes or options
        const attrTarget = this.container.getAttribute('data-target-input');
        if (attrTarget) this.options.targetInput = attrTarget;

        const attrLayout = this.container.getAttribute('data-layout');
        if (attrLayout) this.options.layout = attrLayout;

        const attrEnter = this.container.getAttribute('data-enter-label');
        if (attrEnter) this.options.enterLabel = attrEnter;

        const attrVoice = this.container.getAttribute('data-voice');
        if (attrVoice === 'false') this.options.enableVoice = false;

        this.targetEl = null;
        if (typeof this.options.targetInput === 'string') {
            this.targetEl = document.querySelector(this.options.targetInput);
        } else if (this.options.targetInput instanceof HTMLElement) {
            this.targetEl = this.options.targetInput;
        }

        // Layout Definitions
        this.layouts = {
            'letters': [
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
                ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
            ],
            'digits': [
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9'],
                ['0']
            ],
            'full': [ // Merged Letters + Digits row 1
                ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
                ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
            ],
            'punctuation': [
                ['!', '@', '#', '$', '%', '^', '&', '*'],
                ['(', ')', '-', '_', '=', '+', '[', ']'],
                ['{', '}', ';', ':', ',', '.', '/', '?']
            ]
        };

        // State maps for key disabling/coloration
        this.keyStates = new Map(); // key -> 'disabled' | 'positive'

        // Speech Recognition Setup
        this.recognition = null;
        this.isListening = false;
        this.initSpeechRecognition();

        this.render();
        this.bindEvents();
    }

    initSpeechRecognition() {
        if (!this.options.enableVoice) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateVoiceKeyVisuals();
            };

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleVoiceInput(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                this.isListening = false;
                this.updateVoiceKeyVisuals();
            };

            this.recognition.onend = () => {
                this.isListening = false;
                this.updateVoiceKeyVisuals();
            };
        } else {
            console.warn("Speech recognition is not supported in this browser.");
            this.options.enableVoice = false;
        }
    }

    render() {
        this.container.innerHTML = '';
        this.container.classList.add('virtual-keyboard');
        this.container.classList.add(`virtual-keyboard--${this.options.layout}`);

        const layoutRows = this.layouts[this.options.layout] || this.layouts['full'];

        layoutRows.forEach((rowKeys, rowIndex) => {
            const rowEl = document.createElement('div');
            rowEl.className = 'virtual-keyboard__row';
            rowEl.setAttribute('data-row', rowIndex);

            rowKeys.forEach(keyChar => {
                rowEl.appendChild(this.createKey(keyChar, 'char'));
            });

            // Special additions based on layout row and type
            if (this.options.layout === 'full' && rowIndex === 0 && this.options.enableVoice) {
                rowEl.appendChild(this.createKey('mic', 'voice', '<span class="material-symbols-outlined">mic</span>'));
            }

            if ((this.options.layout === 'full' && rowIndex === 2) || (this.options.layout === 'letters' && rowIndex === 1)) {
                // Add Delete at end of A-L row
                rowEl.appendChild(this.createKey('DEL', 'action', 'DEL', 'virtual-keyboard__key--wide'));
            }

            if ((this.options.layout === 'full' && rowIndex === 3) || (this.options.layout === 'letters' && rowIndex === 2)) {
                // Add Enter at end of Z-M row
                rowEl.appendChild(this.createKey('ENTER', 'action', this.options.enterLabel, 'virtual-keyboard__key--wide'));
            }

            if ((this.options.layout === 'digits' && rowIndex === 3) || (this.options.layout === 'punctuation' && rowIndex === 2)) {
                // Prepend/Append specific keys to last tiny row
                if (this.options.layout === 'digits') {
                    rowEl.insertBefore(this.createKey('DEL', 'action', '<span class="material-symbols-outlined">backspace</span>', 'virtual-keyboard__key--wide'), rowEl.firstChild);
                    rowEl.appendChild(this.createKey('ENTER', 'action', this.options.enterLabel, 'virtual-keyboard__key--wide'));
                } else {
                    rowEl.appendChild(this.createKey('DEL', 'action', '<span class="material-symbols-outlined">backspace</span>', 'virtual-keyboard__key--wide'));
                }
            }

            this.container.appendChild(rowEl);
        });

        this.applySavedStates();
    }

    createKey(value, type, displayHTML = null, extraClass = '') {
        const btn = document.createElement('button');
        btn.className = `virtual-keyboard__key ${extraClass}`;
        btn.setAttribute('data-key', value);
        btn.setAttribute('data-type', type);
        btn.innerHTML = displayHTML || value;
        return btn;
    }

    bindEvents() {
        this.container.addEventListener('click', (e) => {
            const keyBtn = e.target.closest('.virtual-keyboard__key');
            if (!keyBtn) return;
            if (keyBtn.hasAttribute('data-state')) return; // Ignore disabled/positive keys entirely unless we want interactions

            const keyValue = keyBtn.getAttribute('data-key');
            const keyType = keyBtn.getAttribute('data-type');

            if (keyType === 'char') {
                this.handleCharPress(keyValue);
            } else if (keyType === 'action') {
                if (keyValue === 'DEL') this.handleDelete();
                if (keyValue === 'ENTER') this.handleEnter();
            } else if (keyType === 'voice') {
                this.toggleVoice();
            }
        });
    }

    handleCharPress(char) {
        if (this.targetEl) {
            this.targetEl.value += char;
            this.targetEl.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // Dispatch custom event
        this.container.dispatchEvent(new CustomEvent('keyboard:press', {
            detail: { key: char },
            bubbles: true
        }));
    }

    handleDelete() {
        if (this.targetEl && this.targetEl.value.length > 0) {
            this.targetEl.value = this.targetEl.value.slice(0, -1);
            this.targetEl.dispatchEvent(new Event('input', { bubbles: true }));
        }

        this.container.dispatchEvent(new CustomEvent('keyboard:delete', { bubbles: true }));
    }

    handleEnter() {
        this.container.dispatchEvent(new CustomEvent('keyboard:enter', {
            detail: { value: this.targetEl ? this.targetEl.value : null },
            bubbles: true
        }));
    }

    toggleVoice() {
        if (!this.recognition) return;
        if (this.isListening) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }

    handleVoiceInput(text) {
        // Automatically inject the recognized text into the input
        let finalStr = text;
        if (this.options.layout === 'letters') {
            finalStr = text.replace(/[^A-Za-z]/g, '').toUpperCase();
        } else if (this.options.layout === 'digits') {
            finalStr = text.replace(/[^0-9]/g, '');
        }

        if (this.targetEl) {
            // Either append or replace. Common UX implies replacing or appending with space.
            // For games like Wordle, appending raw letters is best.
            this.targetEl.value += (this.targetEl.value.length > 0 ? " " : "") + finalStr;
            this.targetEl.dispatchEvent(new Event('input', { bubbles: true }));
        }

        this.container.dispatchEvent(new CustomEvent('keyboard:voice', {
            detail: { transcript: text, filtered: finalStr },
            bubbles: true
        }));
    }

    updateVoiceKeyVisuals() {
        const micKey = this.container.querySelector('[data-key="mic"]');
        if (micKey) {
            if (this.isListening) {
                micKey.classList.add('is-listening');
            } else {
                micKey.classList.remove('is-listening');
            }
        }
    }

    /**
     * PUBLIC API
     */

    // Mark a key as disabled ('negative' logic usually) or 'positive'
    // state: 'disabled', 'positive', or 'default' (to clear)
    setKeyState(char, state) {
        const upperChar = char.toUpperCase();

        if (state === 'default' || !state) {
            this.keyStates.delete(upperChar);
        } else {
            this.keyStates.set(upperChar, state);
        }

        this.applySavedStates();
    }

    // Maps all current states to the rendered DOM buttons
    applySavedStates() {
        const keys = this.container.querySelectorAll('.virtual-keyboard__key[data-type="char"]');
        keys.forEach(key => {
            const char = key.getAttribute('data-key');
            if (this.keyStates.has(char)) {
                key.setAttribute('data-state', this.keyStates.get(char));
            } else {
                key.removeAttribute('data-state');
            }
        });
    }
}

// Auto-initialize components found in DOM
export function initVirtualKeyboards() {
    const keyboards = document.querySelectorAll('[data-virtual-keyboard]');
    keyboards.forEach(kb => {
        new AuroraKeyboard(kb);
    });
}
