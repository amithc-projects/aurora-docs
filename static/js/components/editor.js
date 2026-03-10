// static/js/components/editor.js

function initEditors() {
    const editors = document.querySelectorAll('.editor-wrapper');

    editors.forEach(wrapper => {
        if (wrapper.dataset.editorInit === 'true') return;
        wrapper.dataset.editorInit = 'true';

        const contentArea = wrapper.querySelector('.editor-content');
        const toolbar = wrapper.querySelector('.editor-toolbar');

        if (!contentArea || !toolbar) return;

        // Track selections for elements like <select> which inherently steal focus
        let savedRange = null;

        const saveSelection = () => {
            const sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                savedRange = sel.getRangeAt(0);
            }
        };

        const restoreSelection = () => {
            if (savedRange) {
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(savedRange);
            }
        };

        contentArea.addEventListener('blur', saveSelection);
        contentArea.addEventListener('keyup', saveSelection);
        contentArea.addEventListener('mouseup', saveSelection);

        // 1. Handle standard buttons
        const buttons = toolbar.querySelectorAll('.editor-btn');
        buttons.forEach(btn => {
            // Use mousedown instead of click to prevent the browser from removing focus from the text!
            btn.addEventListener('mousedown', (e) => {
                e.preventDefault();

                const command = btn.dataset.command;
                if (!command) return;

                if (command === 'createLink') {
                    const url = prompt('Enter the link here: ', 'http:\/\/');
                    if (url) {
                        document.execCommand(command, false, url);
                    }
                } else if (command === 'removeFormat') {
                    // Clear standard inline formats (bold/italic)
                    document.execCommand('removeFormat', false, null);
                    // Aggressively attempt to clear Headings/Blockquotes back to normal paragraphs
                    document.execCommand('formatBlock', false, 'P');
                } else {
                    // Standard execution (bold, italic, list)
                    document.execCommand(command, false, null);
                }

                contentArea.focus();
                updateActiveStates(toolbar, contentArea);
            });
        });

        // 2. Handle Select Dropdowns (Headings / Formats)
        const selects = toolbar.querySelectorAll('.editor-select');
        selects.forEach(select => {
            select.addEventListener('change', (e) => {
                e.preventDefault();

                const command = select.dataset.command;
                const value = select.value;
                if (!command) return;

                // Restore focus first to ensure formatting applies to the text we had selected
                restoreSelection();
                contentArea.focus();

                document.execCommand(command, false, value);

                // Reset dropdown gracefully
                setTimeout(() => { select.selectedIndex = 0; }, 10);
            });
        });

        contentArea.addEventListener('keyup', () => updateActiveStates(toolbar, contentArea));
        contentArea.addEventListener('mouseup', () => updateActiveStates(toolbar, contentArea));

        contentArea.addEventListener('input', () => {
            if (contentArea.innerHTML.trim() === '') {
                contentArea.innerHTML = '';
            }
        });
    });
}

function updateActiveStates(toolbar, contentArea) {
    const buttons = toolbar.querySelectorAll('.editor-btn');
    buttons.forEach(btn => {
        const command = btn.dataset.command;
        if (!command) return;

        try {
            if (document.queryCommandState(command)) {
                btn.classList.add('is-active');
            } else {
                btn.classList.remove('is-active');
            }
        } catch (e) { }
    });
}

window.initEditors = initEditors;
