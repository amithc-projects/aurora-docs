/**
 * Aurora Image Hotspot Controller
 * 
 * Automatically progressive-enhances `.hotspot-dot` buttons by reading their 
 * `popovertarget` attributes and dynamically generating mathematical 
 * CSS Anchor Positioning linkages (`anchor-name` & `position-anchor`).
 */

window.auroraHotspotInit = function () {
    const dots = document.querySelectorAll('.hotspot-dot');

    dots.forEach((dot, index) => {
        const targetId = dot.getAttribute('popovertarget');
        if (!targetId) return;

        const popover = document.getElementById(targetId);
        if (!popover) return;

        // 1. Generate unique Anchor Names automatically 
        // to save the developer from writing manual inline CSS
        const anchorName = `--aurora-hotspot-${index}-${Math.random().toString(36).substr(2, 5)}`;

        if (!dot.style.anchorName) {
            dot.style.anchorName = anchorName;
        }

        if (!popover.style.positionAnchor) {
            popover.style.positionAnchor = dot.style.anchorName;
        }

        // 2. Ensure the popover attribute is set natively
        if (!popover.hasAttribute('popover')) {
            popover.setAttribute('popover', 'auto');
        }

        // 3. Fallback Polyfill logic:
        // Currently, Firefox and Safari lag slightly behind Chromium on `position-anchor`.
        // If we detect the browser doesn't natively support anchor positioning, 
        // we could intercept the click and use getBoundingClientRect() here, 
        // but for modern CSS environments, we let the browser handle it entirely!
    });
};

document.addEventListener('DOMContentLoaded', window.auroraHotspotInit);
