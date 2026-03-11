// static/js/components/reveal.js

export function initScrollReveals() {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) return;

    // A11Y GUARD: If motion is disabled natively, we don't even need to run the observer 
    // because the CSS media query overrides the visual state to "always visible" anyway.
    // We save massive JS overhead by just aborting.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log('Scroll Reveal animations aborted: User prefers reduced motion.');
        return;
    }

    const observerOptions = {
        // Top, Right, Bottom, Left. We wait until the element is physically 50px inside 
        // the viewport boundary before triggering so we don't animate off-screen pixels.
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element crosses the boundary into the screen
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');

                // Unbind the observer from this specific element so it only animates ONCE
                // and doesn't incessantly re-trigger if the user scrolls up and down wildly.
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(el => {
        if (el.dataset.revealInit === 'true') return;
        el.dataset.revealInit = 'true';

        observer.observe(el);
    });
}
