export function initDropdowns() {
    let openMenuId = null;

    function toggleMenu(id, trigger) {
        if (openMenuId === id) { closeAll(); return; }
        closeAll();
        const menu = document.getElementById(id);
        if (!menu) return;
        menu.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        openMenuId = id;

        // Keyboard nav
        const items = getFocusable(menu);
        if (items.length) items[0].focus();

        setTimeout(() => document.addEventListener('click', outsideClick), 0);
        menu.addEventListener('keydown', menuKeydown);
    }

    function closeAll() {
        if (!openMenuId) return;
        const menu = document.getElementById(openMenuId);
        if (menu) {
            menu.classList.remove('is-open');
            menu.removeEventListener('keydown', menuKeydown);
        }
        const trigger = document.querySelector(`[aria-controls="${openMenuId}"]`);
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
            trigger.focus();
        }
        openMenuId = null;
        document.removeEventListener('click', outsideClick);
    }

    function outsideClick(e) {
        if (openMenuId) {
            const menu = document.getElementById(openMenuId);
            const wrapper = menu ? menu.closest('.menu-wrapper, .dropdown-wrapper') : null;
            if (wrapper && !wrapper.contains(e.target)) {
                closeAll();
            } else if (!wrapper && menu && !menu.contains(e.target)) {
                closeAll();
            }
        }
    }

    function getFocusable(menu) {
        return [...menu.querySelectorAll('.menu-item:not([aria-disabled="true"])')];
    }

    function menuKeydown(e) {
        const menu = document.getElementById(openMenuId);
        if (!menu) return;
        const items = getFocusable(menu);
        const idx = items.indexOf(document.activeElement);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            items[(idx + 1) % items.length].focus();
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            items[(idx - 1 + items.length) % items.length].focus();
        }
        else if (e.key === 'Home') {
            e.preventDefault();
            items[0].focus();
        }
        else if (e.key === 'End') {
            e.preventDefault();
            items[items.length - 1].focus();
        }
        else if (e.key === 'Escape' || e.key === 'Tab') {
            closeAll();
        }
        else if (e.key.length === 1) {
            const match = items.find(i => {
                const labelNode = i.querySelector('.item-label');
                return labelNode && labelNode.textContent.toLowerCase().startsWith(e.key.toLowerCase());
            });
            if (match) match.focus();
        }
    }

    // Handle standard interaction items
    document.addEventListener('click', (e) => {
        // Check if clicked inside a menu item
        const menuItem = e.target.closest('.menu-item');
        if (menuItem && openMenuId) {
            if (menuItem.hasAttribute('aria-disabled') && menuItem.getAttribute('aria-disabled') === 'true') {
                return; // do nothing
            }

            const isRadio = menuItem.getAttribute('role') === 'menuitemradio';
            const isCheck = menuItem.getAttribute('role') === 'menuitemcheckbox';

            if (isRadio) {
                const group = menuItem.closest('[role="menu"]');
                group.querySelectorAll('[role="menuitemradio"]').forEach(i => i.setAttribute('aria-checked', 'false'));
                menuItem.setAttribute('aria-checked', 'true');
            } else if (isCheck) {
                menuItem.setAttribute('aria-checked', menuItem.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
            } else {
                closeAll();
            }
            return;
        }

        // Check if clicked a trigger button
        const trigger = e.target.closest('[aria-haspopup="menu"]');
        if (trigger) {
            e.preventDefault();
            const controls = trigger.getAttribute('aria-controls');
            if (controls) toggleMenu(controls, trigger);
        }
    });

    // Global escape handler (backup)
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAll();
    });
}
