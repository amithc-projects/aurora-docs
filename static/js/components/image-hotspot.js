/**
 * Aurora Image Hotspot Controller
 * 
 * Automatically progressive-enhances `.hotspot-dot` buttons by reading their 
 * `popovertarget` attributes and dynamically generating mathematical 
 * CSS Anchor Positioning linkages (`anchor-name` & `position-anchor`).
 */

window.auroraHotspotInit = function () {
    const triggers = document.querySelectorAll('.hotspot-dot, .hotspot-drawer-btn');

    triggers.forEach((trigger, index) => {
        const targetId = trigger.getAttribute('popovertarget');
        if (!targetId) return;

        const popover = document.getElementById(targetId);
        if (!popover) return;

        // 1. Generate unique Anchor Names automatically 
        // to save the developer from writing manual inline CSS
        const anchorName = `--aurora-hotspot-${index}-${Math.random().toString(36).substr(2, 5)}`;

        if (!trigger.style.anchorName) {
            trigger.style.anchorName = anchorName;
        }

        if (!popover.style.positionAnchor) {
            popover.style.positionAnchor = trigger.style.anchorName;
        }

        // 2. Ensure the popover attribute is set natively
        if (!popover.hasAttribute('popover')) {
            popover.setAttribute('popover', 'auto');
        }

        // --- DRAWER MODE ENHANCEMENTS ---
        // If this button controls a remote anchor (drawer mode), link its anchor
        // instead of itself so the popover physically attaches to the picture coordinates.
        const remoteTargetId = trigger.getAttribute('data-anchor-target');
        if (remoteTargetId) {
            const remoteAnchor = document.getElementById(remoteTargetId);
            if (remoteAnchor) {
                if (!remoteAnchor.style.anchorName) {
                    remoteAnchor.style.anchorName = anchorName;
                }
                popover.style.positionAnchor = remoteAnchor.style.anchorName;

                // Listen for Popover Toggle to illuminate the remote anchor and highlight the button
                // The popover spec fires 'toggle' events on the popover element itself.
                popover.addEventListener('toggle', (event) => {
                    if (event.newState === 'open') {
                        remoteAnchor.classList.add('is-active');
                        trigger.classList.add('is-active');
                    } else {
                        remoteAnchor.classList.remove('is-active');
                        trigger.classList.remove('is-active');
                    }
                });
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', window.auroraHotspotInit);
