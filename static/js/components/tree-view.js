/**
 * Aurora Tree View Controller
 * Handles expansion animations, keyboard navigation, and JSON vs HTML structure parsing.
 */
export class AuroraTreeView {
    constructor(element) {
        this.container = element;
        this.container.classList.add('tree-view');

        // Configuration
        this.initialState = this.container.getAttribute('data-initial-state') || 'collapsed'; // 'expanded', 'collapsed'

        // Mode detection: If there is JSON data in the script tag, use JSON mode.
        // Otherwise, assume the HTML is already written out.
        const scriptData = this.container.querySelector('script[type="application/json"]');

        if (scriptData) {
            this.buildFromJson(scriptData.textContent);
        } else {
            this.enhanceHtmlTree();
        }

        this.bindEvents();
    }

    /**
     * MODE 1: PARSING EXISTING HTML
     * Enhances a pre-existing <ul><li> structure with semantic wrappers and icons.
     */
    enhanceHtmlTree() {
        const rootUl = this.container.querySelector('ul');
        if (!rootUl) return;

        this.traverseHtmlNode(rootUl, true);
    }

    traverseHtmlNode(ul, isRoot = false) {
        // Enclose children in a transitioning div so the `grid-template-rows: 0fr/1fr` trick works instantly
        if (!isRoot && ul.children.length > 0 && ul.firstElementChild.tagName !== 'DIV') {
            const wrapper = document.createElement('div');
            while (ul.children.length > 0) {
                wrapper.appendChild(ul.children[0]);
            }
            ul.appendChild(wrapper);

            // Re-map the children array to look inside the wrapper
            Array.from(wrapper.children).forEach(li => {
                if (li.tagName === 'LI') this.processLi(li);
            });
        } else {
            Array.from(ul.children).forEach(li => {
                if (li.tagName === 'LI') this.processLi(li);
            });
        }
    }

    processLi(li) {
        li.classList.add('tree-item');

        // 1. Isolate the text node vs child ULs
        let textContent = '';
        let childUl = null;

        Array.from(li.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                textContent = node.textContent.trim();
                node.textContent = ''; // Clear raw text
            } else if (node.tagName === 'A' || node.tagName === 'SPAN') {
                if (!node.classList.contains('tree-node__text')) {
                    textContent = node.outerHTML; // Preserve links
                    node.remove();
                }
            } else if (node.tagName === 'UL') {
                childUl = node;
            }
        });

        const isFolder = childUl !== null;

        // 2. Build the visual Row Header
        const row = document.createElement('div');
        row.className = 'tree-node';
        row.setAttribute('tabindex', '0');

        // Toggle Caret
        const caret = document.createElement('span');
        caret.className = `tree-node__toggle material-symbols-outlined ${!isFolder ? 'tree-node__toggle--hidden' : ''}`;
        caret.textContent = 'chevron_right';
        row.appendChild(caret);

        // Icon
        const iconSpan = document.createElement('span');
        iconSpan.className = 'tree-node__icon material-symbols-outlined';
        // Allow user to define custom icon via data-icon on the LI, otherwise default
        const customIcon = li.getAttribute('data-icon');
        iconSpan.textContent = customIcon ? customIcon : (isFolder ? 'folder' : 'description');
        // Folders with explicit icons often prefer 'folder_open' logic, but we'll stick to a simple mapping for now
        row.appendChild(iconSpan);

        // Text
        const textSpan = document.createElement('span');
        textSpan.className = 'tree-node__text';
        textSpan.innerHTML = textContent;
        row.appendChild(textSpan);

        // Insert row at top of LI
        li.insertBefore(row, li.firstChild);

        // Set initial state for folders
        if (isFolder) {
            if (this.initialState === 'expanded') {
                li.classList.add('is-expanded');
                if (!customIcon) iconSpan.textContent = 'folder_open';
            }
            this.traverseHtmlNode(childUl);
        }
    }

    /**
     * MODE 2: GENERATING FROM JSON
     */
    buildFromJson(jsonString) {
        try {
            const data = JSON.parse(jsonString);

            // Remove the script tag so it doesn't clutter the dom
            const scriptData = this.container.querySelector('script[type="application/json"]');
            if (scriptData) scriptData.remove();

            const rootUl = document.createElement('ul');
            this.container.appendChild(rootUl);

            data.forEach(nodeData => {
                rootUl.appendChild(this.createJsonNode(nodeData));
            });

        } catch (e) {
            console.error("AuroraTreeView: Failed to parse JSON data", e);
        }
    }

    createJsonNode(nodeData) {
        const li = document.createElement('li');
        li.className = 'tree-item';

        const isFolder = nodeData.children && nodeData.children.length > 0;

        // 1. Row Header
        const row = document.createElement('div');
        row.className = 'tree-node';
        row.setAttribute('tabindex', '0');
        if (nodeData.id) row.setAttribute('data-id', nodeData.id);

        // Caret
        const caret = document.createElement('span');
        caret.className = `tree-node__toggle material-symbols-outlined ${!isFolder ? 'tree-node__toggle--hidden' : ''}`;
        caret.textContent = 'chevron_right';
        row.appendChild(caret);

        // Icon
        const iconSpan = document.createElement('span');
        iconSpan.className = 'tree-node__icon material-symbols-outlined';
        iconSpan.textContent = nodeData.icon ? nodeData.icon : (isFolder ? 'folder' : 'description');
        row.appendChild(iconSpan);

        // Text
        const textSpan = document.createElement('span');
        textSpan.className = 'tree-node__text';
        // Handle markdown/HTML links natively if provided in JSON
        textSpan.innerHTML = nodeData.label;
        row.appendChild(textSpan);

        li.appendChild(row);

        // 2. Children
        if (isFolder) {
            const ul = document.createElement('ul');
            const wrapper = document.createElement('div'); // For grid animation
            ul.appendChild(wrapper);

            nodeData.children.forEach(childData => {
                wrapper.appendChild(this.createJsonNode(childData));
            });

            li.appendChild(ul);

            if (this.initialState === 'expanded') {
                li.classList.add('is-expanded');
                if (!nodeData.icon) iconSpan.textContent = 'folder_open';
            }
        }

        return li;
    }

    bindEvents() {
        this.container.addEventListener('click', (e) => {
            const row = e.target.closest('.tree-node');
            if (!row) return;

            const li = row.closest('.tree-item');

            // Event emission for selection (useful for single page apps or split panes)
            this.container.dispatchEvent(new CustomEvent('tree:select', {
                detail: { node: li, id: row.getAttribute('data-id') },
                bubbles: true
            }));

            // Toggle expansion if it's a folder
            const childUl = li.querySelector('ul');
            if (childUl) {
                this.toggleNode(li, row);
            } else {
                // If it's a leaf node, we might want to mark it active visually
                const currentlyActive = this.container.querySelector('.tree-node.is-active');
                if (currentlyActive) currentlyActive.classList.remove('is-active');
                row.classList.add('is-active');
            }
        });

        // Keyboard Navigation (Basic)
        this.container.addEventListener('keydown', (e) => {
            const row = e.target.closest('.tree-node');
            if (!row) return;

            const li = row.closest('.tree-item');
            const isFolder = li.querySelector('ul') !== null;
            const isExpanded = li.classList.contains('is-expanded');

            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                row.click();
            } else if (e.key === 'ArrowRight' && isFolder && !isExpanded) {
                e.preventDefault();
                this.toggleNode(li, row);
            } else if (e.key === 'ArrowLeft' && isFolder && isExpanded) {
                e.preventDefault();
                this.toggleNode(li, row);
            } else if (e.key === 'ArrowDown') {
                // Basic next-node jumping (could be improved with rigorous DOM traversal)
                const items = Array.from(this.container.querySelectorAll('.tree-node'));
                const currentIndex = items.indexOf(row);
                if (currentIndex < items.length - 1) {
                    items[currentIndex + 1].focus();
                    e.preventDefault();
                }
            } else if (e.key === 'ArrowUp') {
                const items = Array.from(this.container.querySelectorAll('.tree-node'));
                const currentIndex = items.indexOf(row);
                if (currentIndex > 0) {
                    items[currentIndex - 1].focus();
                    e.preventDefault();
                }
            }
        });
    }

    toggleNode(li, row) {
        const isExpanded = li.classList.toggle('is-expanded');

        // Dynamically toggle default folder icon if custom one isn't provided
        const LI__CUSTOM_ICON = li.getAttribute('data-icon');
        const iconSpan = row.querySelector('.tree-node__icon');

        if (!LI__CUSTOM_ICON && iconSpan) {
            // Note: In JSON mode we don't have the data-icon attr, we'd need to check if the current
            // icon is strictly folder/folder_open before toggling
            if (iconSpan.textContent === 'folder' || iconSpan.textContent === 'folder_open') {
                iconSpan.textContent = isExpanded ? 'folder_open' : 'folder';
            }
        }
    }
}

export function initTreeViews() {
    const trees = document.querySelectorAll('[data-tree-view]');
    trees.forEach(tree => {
        new AuroraTreeView(tree);
    });
}
