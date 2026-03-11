// static/js/components/magnetic.js

export function initMagneticButtons() {
    // A11Y CHECK: Explicitly respect user OS motion preferences!
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log('Magnetic animations aborted: User prefers reduced motion.');
        return;
    }

    const magneticElements = document.querySelectorAll('.magnetic');

    magneticElements.forEach(element => {
        // Prevent double-binding if called multiple times natively
        if (element.dataset.magneticInit === 'true') return;
        element.dataset.magneticInit = 'true';

        // Attach physics logic to mouse hover state
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();

            // Calculate exact center of the button
            const xCenter = rect.left + (rect.width / 2);
            const yCenter = rect.top + (rect.height / 2);

            // Calculate cursor distance from the center
            const deltaX = e.clientX - xCenter;
            const deltaY = e.clientY - yCenter;

            // Strength factor (Lower is more subtle pull. 0.3 means moving cursor 10px pulls button 3px)
            const strength = element.dataset.magneticStrength || 0.3;

            const translateX = deltaX * strength;
            const translateY = deltaY * strength;

            // Physically move the button using hardware accelerated transforms
            element.style.transform = `translate(${translateX}px, ${translateY}px)`;

            // Give it a snappy, reactive feel while moving
            element.style.transition = 'transform 0.1s linear';
        });

        // Spring back to absolute center when the cursor leaves the boundary
        element.addEventListener('mouseleave', () => {
            element.style.transform = `translate(0px, 0px)`;
            // Soft, spring-like restorative animation
            element.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}
