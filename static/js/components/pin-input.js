/**
 * Aurora PIN / OTP Input Controller
 * Dynamically generates N boxes, handles auto-advance, backspace skipping, and paste distribution.
 */

export class AuroraPinInput {
    constructor(element) {
        this.container = element;
        this.length = parseInt(this.container.getAttribute('data-length') || '6', 10);
        this.type = this.container.getAttribute('data-type') || 'numeric'; // 'numeric', 'alpha', 'alphanumeric'
        this.boxes = [];

        this.render();
        this.bindEvents();
    }

    render() {
        this.container.innerHTML = '';
        this.container.classList.add('pin-input');

        for (let i = 0; i < this.length; i++) {
            const input = document.createElement('input');
            input.type = this.type === 'numeric' ? 'tel' : 'text'; // 'tel' brings up numpad on mobile iOS
            input.inputMode = this.type === 'numeric' ? 'numeric' : 'text';
            input.maxLength = 1;
            input.className = 'pin-input__box';
            input.dataset.index = i;

            // Required for the :placeholder-shown CSS trick to detect if empty
            input.placeholder = " ";

            this.boxes.push(input);
            this.container.appendChild(input);
        }
    }

    bindEvents() {
        this.container.addEventListener('input', (e) => this.handleInput(e));
        this.container.addEventListener('keydown', (e) => this.handleKeydown(e));
        this.container.addEventListener('paste', (e) => this.handlePaste(e));
    }

    handleInput(e) {
        const input = e.target;
        if (!input.classList.contains('pin-input__box')) return;

        let val = input.value;
        const index = parseInt(input.dataset.index, 10);

        // Input Validation
        if (this.type === 'numeric' && /[^0-9]/.test(val)) {
            input.value = '';
            val = '';
        } else if (this.type === 'alpha' && /[^a-zA-Z]/.test(val)) {
            input.value = '';
            val = '';
        } else if (this.type === 'alphanumeric' && /[^a-zA-Z0-9]/.test(val)) {
            input.value = '';
            val = '';
        }

        // Auto-advance if valid
        if (val.length === 1 && index < this.length - 1) {
            this.boxes[index + 1].focus();
        }

        this.checkCompletion();
    }

    handleKeydown(e) {
        const input = e.target;
        if (!input.classList.contains('pin-input__box')) return;

        const index = parseInt(input.dataset.index, 10);

        // Backspace handling
        if (e.key === 'Backspace') {
            // If the current box is empty, jump back one and clear it
            if (input.value === '' && index > 0) {
                this.boxes[index - 1].focus();
                this.boxes[index - 1].value = '';
                e.preventDefault(); // Prevent double backspace bugs
            }
            // If the box is full, the native backspace will empty it, and the next input event handles evaluation
            requestAnimationFrame(() => this.checkCompletion());
        }

        // Arrow Key Traversal
        if (e.key === 'ArrowLeft' && index > 0) {
            this.boxes[index - 1].focus();
        }
        if (e.key === 'ArrowRight' && index < this.length - 1) {
            this.boxes[index + 1].focus();
        }
    }

    handlePaste(e) {
        const input = e.target;
        if (!input.classList.contains('pin-input__box')) return;

        e.preventDefault();

        // Get pasted data
        let paste = (e.clipboardData || window.clipboardData).getData('text');

        // Clean to match type rules
        if (this.type === 'numeric') { paste = paste.replace(/[^0-9]/g, ''); }
        if (this.type === 'alpha') { paste = paste.replace(/[^a-zA-Z]/g, ''); }
        if (this.type === 'alphanumeric') { paste = paste.replace(/[^a-zA-Z0-9]/g, ''); }

        // Take only what fits
        const characters = paste.split('').slice(0, this.length);

        // Distribute
        this.boxes.forEach((box, i) => {
            if (characters[i]) {
                box.value = characters[i];
            }
        });

        // Focus trailing box or the end
        const focusIndex = Math.min(characters.length, this.length - 1);
        this.boxes[focusIndex].focus();

        this.checkCompletion();
    }

    checkCompletion() {
        // Build the string
        const code = this.boxes.map(box => box.value).join('');

        if (code.length === this.length) {
            this.container.classList.add('is-complete');
            this.container.classList.remove('is-error');

            // Dispatch Completion Event
            this.container.dispatchEvent(new CustomEvent('pin:complete', {
                detail: { value: code },
                bubbles: true
            }));
        } else {
            // Revert state if they delete a character
            this.container.classList.remove('is-complete');
        }
    }

    // Public API for external controllers
    getValue() {
        return this.boxes.map(box => box.value).join('');
    }

    setErrorState() {
        this.container.classList.add('is-error');
        this.container.classList.remove('is-complete');
    }

    clear() {
        this.boxes.forEach(box => box.value = '');
        this.container.classList.remove('is-complete', 'is-error');
        this.boxes[0].focus();
    }
}

// Auto-initialize components found in DOM
export function initPinInputs() {
    const pins = document.querySelectorAll('[data-pin-input]');
    pins.forEach(pin => {
        new AuroraPinInput(pin);
    });
}
