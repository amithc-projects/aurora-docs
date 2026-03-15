/**
 * Aurora Carousel Keyboard Navigation
 * Enables ArrowLeft/ArrowRight keyboard support for scroll-snap carousels.
 */

export function initCarousels() {
  const carousels = document.querySelectorAll('.carousel, .super-list--carousel');

  carousels.forEach(carousel => {
    // Ensure the carousel can receive focus
    carousel.setAttribute('tabindex', '0');

    carousel.addEventListener('keydown', (e) => {
      // Only handle Left and Right arrows
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

      // Prevent default scrolling via arrow keys which can interact weirdly with scroll-snap
      e.preventDefault();

      // Get all child items
      const items = Array.from(carousel.children).filter(child => {
        // Exclude scroll-markers and shadow DOM pseudo-elements if they creep into NodeList
        return !child.matches('::scroll-marker') && !child.matches('::scroll-button(*)');
      });

      if (items.length === 0) return;

      // Calculate the approximate width of a single item including its gap
      // If varying widths, this gets more complex, but standard Aurora carousels are uniform
      const firstItem = items[0];
      const itemWidth = firstItem.getBoundingClientRect().width;
      
      // Determine direction
      const direction = (e.key === 'ArrowRight') ? 1 : -1;
      
      // Calculate how far to scroll (1 item width at a time)
      const scrollAmount = itemWidth * direction;

      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Optional: Emit a UI event for the jump (for A11y announcer)
      if (window.AuroraEvents) {
        window.AuroraEvents.emitUI('carousel_nav_keyboard', {
          direction: e.key,
          carousel_id: carousel.id || 'unnamed-carousel'
        });
      }
    });
  });
}
