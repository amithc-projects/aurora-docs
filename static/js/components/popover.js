export function initPopovers() {
    let activePop = null;
    let activeTrig = null;

    function togglePop(popId, trigEl) {
        if (activePop === popId) { closeAll(); return; }
        closeAll();
        const pop = document.getElementById(popId);
        if (!pop) return;

        pop.classList.add('is-open');
        trigEl.setAttribute('aria-expanded', 'true');
        activePop = popId;
        activeTrig = trigEl;

        // Focus first focusable element inside the popover
        requestAnimationFrame(() => {
            const focusable = pop.querySelector('input, button, a, [tabindex]:not([tabindex="-1"])');
            if (focusable) focusable.focus();
        });

        setTimeout(() => document.addEventListener('click', outsideClick, { capture: true }), 0);
        document.addEventListener('keydown', handleKey);
    }

    function closeAll() {
        if (!activePop) return;
        const pop = document.getElementById(activePop);
        if (pop) pop.classList.remove('is-open');
        if (activeTrig) {
            activeTrig.setAttribute('aria-expanded', 'false');
            activeTrig.focus();
        }
        activePop = null;
        activeTrig = null;
        document.removeEventListener('click', outsideClick, { capture: true });
        document.removeEventListener('keydown', handleKey);
    }

    function outsideClick(e) {
        if (!activePop) return;
        const pop = document.getElementById(activePop);
        if (pop && !pop.contains(e.target) && activeTrig && !activeTrig.contains(e.target)) {
            closeAll();
        }
    }

    function handleKey(e) {
        if (e.key === 'Escape') closeAll();
    }

    // Global event delegation for opening popovers
    document.addEventListener('click', e => {
        // Check if the click is on a trigger button
        const trig = e.target.closest('[aria-haspopup="dialog"][aria-controls]');
        if (trig) {
            e.preventDefault();
            const popId = trig.getAttribute('aria-controls');
            togglePop(popId, trig);
            return;
        }

        // Check if click is on a close button inside the popover
        if (e.target.closest('[data-close-popover]')) {
            e.preventDefault();
            closeAll();
        }

        // Check for color swatch selection
        const swatch = e.target.closest('.color-swatch');
        if (swatch) {
            const grid = swatch.closest('.color-grid');
            if (grid) {
                grid.querySelectorAll('.color-swatch').forEach(x => x.classList.remove('selected'));
                swatch.classList.add('selected');
                const color = swatch.style.background;
                const preview = document.getElementById('colorPreview');
                if (preview) preview.style.background = color;
                setTimeout(closeAll, 300);
            }
        }
    });

    // Expose closeAll for backward compatibility / explicit calls
    window.closeAllPopovers = closeAll;
}
