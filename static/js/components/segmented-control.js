/**
 * Aurora Segmented Control
 * Tracks the bounds of radio button labels and dynamically adjusts CSS Variables
 * to fuel the smooth, GPU-accelerated background slider animation.
 */

export class AuroraSegmentedControl {
    constructor(element) {
        this.container = element;
        this.indicator = this.container.querySelector('.segmented-control__indicator');
        this.radios = Array.from(this.container.querySelectorAll('input[type="radio"]'));

        if (!this.indicator || this.radios.length === 0) return;

        // Briefly disable transitions to prevent the indicator from flying in from 0px on initial page load
        this.container.classList.add('is-initializing');

        this.updateIndicatorPosition = this.updateIndicatorPosition.bind(this);

        this.bindEvents();

        // Use requestAnimationFrame to let the browser paint the labels first, then measure them
        requestAnimationFrame(() => {
            this.updateIndicatorPosition();

            // Re-enable transitions slightly after the initial snap
            setTimeout(() => {
                this.container.classList.remove('is-initializing');
            }, 50);
        });
    }

    bindEvents() {
        // Listen for internal changes
        this.container.addEventListener('change', (e) => {
            if (e.target.type === 'radio') {
                this.updateIndicatorPosition();

                // Dispatch a custom bubbling event for easier framework integration
                this.container.dispatchEvent(new CustomEvent('segmented:change', {
                    detail: { value: e.target.value },
                    bubbles: true
                }));
            }
        });

        // Use ResizeObserver to automatically snap the indicator back to the correct label 
        // if the browser window changes size (or mobile device rotates)
        this.resizeObserver = new ResizeObserver(() => {
            // Briefly disable transition to prevent wobbly scaling while dragging the browser window
            this.container.classList.add('is-initializing');
            this.updateIndicatorPosition();
            requestAnimationFrame(() => {
                this.container.classList.remove('is-initializing');
            });
        });

        this.resizeObserver.observe(this.container);
    }

    updateIndicatorPosition() {
        // Find the currently selected radio button
        const activeRadio = this.radios.find(r => r.checked);
        if (!activeRadio) return;

        // The label immediately following the input is our visible bounding box
        const activeLabel = activeRadio.nextElementSibling;
        if (!activeLabel || activeLabel.tagName !== 'LABEL') return;

        const containerRect = this.container.getBoundingClientRect();
        const labelRect = activeLabel.getBoundingClientRect();

        // Calculate offset relative to the container, isolating external margins/padding
        // The container already has internal padding (--ds-cmp-seg-padding) that the 
        // label naturally bounds within, so `offsetLeft` from the parent works perfectly.
        const leftPos = activeLabel.offsetLeft;
        const width = activeLabel.offsetWidth;
        const topPos = activeLabel.offsetTop;
        const height = activeLabel.offsetHeight;

        // Inject the CSS Variables directly into the container's inline styles
        this.container.style.setProperty('--indicator-x', `${leftPos}px`);
        this.container.style.setProperty('--indicator-y', `${topPos}px`);
        this.container.style.setProperty('--indicator-width', `${width}px`);
        this.container.style.setProperty('--indicator-height', `${height}px`);
    }

    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
}

// Auto-initialize components found in DOM
export function initSegmentedControls() {
    const controls = document.querySelectorAll('.segmented-control:not(.is-initialized)');
    controls.forEach(control => {
        new AuroraSegmentedControl(control);
        control.classList.add('is-initialized');
    });
}
