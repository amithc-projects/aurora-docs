/**
 * Aurora Drawer Controller
 * Handles opening, closing, focus trapping, and scroll locking for Drawer panels.
 */

export function initDrawers() {
    let activeDrawer = null;

    // 1. Setup backdrop singleton if it doesn't exist
    let backdrop = document.getElementById('drawer-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'drawer-backdrop';
        backdrop.className = 'drawer-backdrop';
        document.body.appendChild(backdrop);
    }

    // 2. Delegate click events for trigger buttons
    document.addEventListener('click', (e) => {
        // Open trigger
        const trigger = e.target.closest('[data-drawer-target]');
        if (trigger) {
            e.preventDefault();
            const drawerId = trigger.getAttribute('data-drawer-target');
            openDrawer(drawerId);
            return;
        }

        // Close trigger (close buttons inside drawer)
        const closeBtn = e.target.closest('.drawer-close');
        if (closeBtn || e.target === backdrop) {
            e.preventDefault();
            closeActive();
            return;
        }
    });

    // 3. Logic: Open Drawer
    function openDrawer(id) {
        if (activeDrawer) closeActive(true);

        const panel = document.getElementById(id);
        if (!panel) return;

        panel.classList.remove('is-closing');
        backdrop.classList.remove('is-closing');
        panel.classList.add('is-open');
        backdrop.classList.add('is-open');

        // Lock body scroll
        document.body.style.overflow = 'hidden';
        activeDrawer = id;

        // Focus first focusable element inside drawer
        requestAnimationFrame(() => {
            const focusable = panel.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable) focusable.focus();
        });

        // Setup global listeners mapping to this specific panel instance
        panel.addEventListener('keydown', trapFocus);
        document.addEventListener('keydown', handleEscape);
    }

    // 4. Logic: Close Drawer
    window.closeDrawer = closeActive; // Expose globally for manual calls
    function closeActive(immediate = false) {
        if (!activeDrawer) return;

        const panel = document.getElementById(activeDrawer);
        if (!panel) return;

        panel.classList.add('is-closing');
        backdrop.classList.add('is-closing');

        const duration = immediate ? 0 : 300;

        setTimeout(() => {
            panel.classList.remove('is-open', 'is-closing');
            backdrop.classList.remove('is-open', 'is-closing');
            document.body.style.overflow = '';
        }, duration);

        panel.removeEventListener('keydown', trapFocus);
        document.removeEventListener('keydown', handleEscape);
        activeDrawer = null;
    }

    // 5. Logic: Focus Trap & Escape Hooks
    function handleEscape(e) {
        if (e.key === 'Escape') closeActive();
    }

    function trapFocus(e) {
        if (e.key !== 'Tab') return;
        const panel = document.getElementById(activeDrawer);
        if (!panel) return;

        const focusables = [...panel.querySelectorAll('button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')];
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
}
