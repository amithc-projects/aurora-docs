/**
 * ACCORDION COMPONENT
 * Manages the ARIA states and single/multiple open logic for the new button+div accordion structure.
 * Because the actual open/close animation is handled entirely by CSS Grid (grid-template-rows),
 * this JavaScript only needs to toggle the `aria-expanded` and `is-open` attributes.
 */

export function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    // Check if the accordion is in single or multiple mode. Default to multiple if not specified.
    const mode = acc.dataset.mode || 'multiple';
    const triggers = acc.querySelectorAll('.accordion-trigger');

    triggers.forEach(trigger => {
      // Respect disabled triggers
      if (trigger.getAttribute('aria-disabled') === 'true') return;

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        // If in 'single' mode and we are opening a NEW panel, close all others first.
        if (mode === 'single' && !isOpen) {
          triggers.forEach(t => {
            t.setAttribute('aria-expanded', 'false');
            const otherPanelId = t.getAttribute('aria-controls');
            if (otherPanelId) {
              const otherPanel = document.getElementById(otherPanelId);
              if (otherPanel) otherPanel.classList.remove('is-open');
            }
          });
        }

        // Toggle the clicked panel's state
        trigger.setAttribute('aria-expanded', !isOpen);
        if (panel) {
          panel.classList.toggle('is-open', !isOpen);
        }
      });
    });
  });
}
