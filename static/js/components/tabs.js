/**
 * Aurora Tabs Controller
 * Handles changing active tabs and keyboard navigation for aria-compliant tablists.
 */

export function initTabs() {
    function setupTabs(container) {
        const tablist = container.querySelector('[role="tablist"]');
        if (!tablist) return;

        const tabs = [...tablist.querySelectorAll('[role="tab"]')];
        const isVertical = tablist.getAttribute('aria-orientation') === 'vertical';

        tabs.forEach(tab => {
            // 1. Click Activation
            tab.addEventListener('click', () => activate(tab, tabs));

            // 2. Keyboard Navigation
            tab.addEventListener('keydown', e => {
                const idx = tabs.indexOf(e.target);
                const prev = isVertical ? 'ArrowUp' : 'ArrowLeft';
                const next = isVertical ? 'ArrowDown' : 'ArrowRight';

                if (e.key === next) {
                    e.preventDefault();
                    focus(tabs, (idx + 1) % tabs.length);
                } else if (e.key === prev) {
                    e.preventDefault();
                    focus(tabs, (idx - 1 + tabs.length) % tabs.length);
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    focus(tabs, 0);
                } else if (e.key === 'End') {
                    e.preventDefault();
                    focus(tabs, tabs.length - 1);
                }
            });
        });
    }

    function focus(tabs, idx) {
        tabs[idx].focus();
        activate(tabs[idx], tabs);
    }

    function activate(tab, tabs) {
        if (tab.getAttribute('aria-disabled') === 'true') return;

        tabs.forEach(t => {
            const isSelected = t === tab;

            // Update ARIA and focus-ability
            t.setAttribute('aria-selected', isSelected.toString());
            t.setAttribute('tabindex', isSelected ? '0' : '-1');

            // Toggle associated panel
            const panelId = t.getAttribute('aria-controls');
            if (panelId) {
                const panel = document.getElementById(panelId);
                if (panel) {
                    if (isSelected) {
                        panel.removeAttribute('hidden');
                    } else {
                        panel.setAttribute('hidden', '');
                    }
                }
            }
        });
    }

    // Initialize all elements with class 'tabs' on the page
    document.querySelectorAll('.tabs').forEach(setupTabs);
}
