/**
 * Component: Scrollspy
 * 
 * Uses an IntersectionObserver to watch headings in the main content area
 * and highlights the corresponding link in the Table of Contents sidebar.
 * Designed to be lightweight and performant.
 */

export function initScrollspy() {
    const toc = document.querySelector('.docs-page-toc');
    if (!toc) return;

    const tocLinks = Array.from(toc.querySelectorAll('a'));
    const headings = Array.from(document.querySelectorAll('.docs-page-content h2, .docs-page-content h3, .docs-page-content h4, .docs-page-content h5, .docs-page-content h6'))
        .filter(h => h.id); // Only track headings with IDs

    if (headings.length === 0 || tocLinks.length === 0) return;

    // Track the currently active heading to avoid unnecessary DOM updates
    let activeId = null;

    // IntersectionObserver callback
    const observerCallback = (entries) => {
        // Determine the most visible or highest interesting heading
        let intersectingEntry = null;

        for (const entry of entries) {
            if (entry.isIntersecting) {
                intersectingEntry = entry;
                break; // Take the first intersecting one (closest to top)
            }
        }

        if (intersectingEntry && intersectingEntry.target.id !== activeId) {
            activeId = intersectingEntry.target.id;

            // Remove active class from all links
            tocLinks.forEach(link => {
                link.classList.remove('is-active');
            });

            // Add active class to the currently active link
            const activeLink = tocLinks.find(link => {
                const url = new URL(link.href);
                return url.hash === `#${activeId}`;
            });

            if (activeLink) {
                activeLink.classList.add('is-active');
            }
        }
    };

    // Configure observer to trigger when headings cross the top quarter of the viewport
    const observerOptions = {
        root: null, // viewport
        rootMargin: '-10% 0px -80% 0px', // Trigger area: just below the header
        threshold: 1.0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headings.forEach(heading => {
        observer.observe(heading);
    });
}
