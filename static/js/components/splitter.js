export class AuroraSplitter {
    constructor(element) {
        this.container = element;
        this.handle = this.container.querySelector('.splitter__handle');
        if (!this.handle) return;

        this.orientation = this.container.getAttribute('data-orientation') || 'horizontal';
        this.mode = this.container.getAttribute('data-mode') || 'resize';

        // Ensure handle is keyboard focusable
        this.handle.setAttribute('tabindex', '0');
        this.handle.setAttribute('role', 'separator');
        this.handle.setAttribute('aria-orientation', this.orientation);

        // State tracking
        this.isDragging = false;
        this.dragOffset = 0; // offset within the handle itself
        this.currentPosPercent = 50;

        // Bounding constraints
        this.minPercent = 5;
        this.maxPercent = 95;

        // Read initial state
        const initialPos = this.container.getAttribute('data-initial-pos');
        if (initialPos) {
            this.setSplitPosition(parseFloat(initialPos));
        }

        this.bindEvents();
    }

    bindEvents() {
        // Pointer Events (Mouse, Touch, Pen)
        this.handle.addEventListener('pointerdown', this.onPointerDown.bind(this));

        // Keyboard arrow nudging
        this.handle.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    onPointerDown(e) {
        if (e.button !== 0 && e.pointerType === 'mouse') return; // Left click only

        this.isDragging = true;
        this.container.classList.add('is-dragging');
        this.handle.classList.add('is-dragging');

        // Capture pointer to track dragging across the entire screen reliably 
        // Handles if cursor moves faster than DOM updates
        this.handle.setPointerCapture(e.pointerId);

        // Determine click offset within the handle so it doesn't jump
        const rect = this.handle.getBoundingClientRect();
        if (this.orientation === 'horizontal') {
            this.dragOffset = e.clientX - rect.left;
        } else {
            this.dragOffset = e.clientY - rect.top;
        }

        this.onMoveHandler = this.onPointerMove.bind(this);
        this.onUpHandler = this.onPointerUp.bind(this);

        this.handle.addEventListener('pointermove', this.onMoveHandler);
        this.handle.addEventListener('pointerup', this.onUpHandler);
        this.handle.addEventListener('pointercancel', this.onUpHandler); // e.g., screen off

        // Prevent default touch behaviors like scrolling
        e.preventDefault();
    }

    onPointerMove(e) {
        if (!this.isDragging) return;

        const containerRect = this.container.getBoundingClientRect();
        let newPercent = Number(this.currentPosPercent);

        if (this.orientation === 'horizontal') {
            // Calculate absolute pixel position of the desired split (accounting for exact drag offset)
            const targetX = e.clientX - containerRect.left - this.dragOffset + (this.handle.offsetWidth / 2);
            newPercent = (targetX / containerRect.width) * 100;
        } else {
            const targetY = e.clientY - containerRect.top - this.dragOffset + (this.handle.offsetHeight / 2);
            newPercent = (targetY / containerRect.height) * 100;
        }

        this.setSplitPosition(newPercent);
    }

    onPointerUp(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.container.classList.remove('is-dragging');
        this.handle.classList.remove('is-dragging');

        this.handle.releasePointerCapture(e.pointerId);
        this.handle.removeEventListener('pointermove', this.onMoveHandler);
        this.handle.removeEventListener('pointerup', this.onUpHandler);
        this.handle.removeEventListener('pointercancel', this.onUpHandler);
    }

    onKeyDown(e) {
        const step = 2; // Move 2% per keystroke
        let changed = false;

        if (this.orientation === 'horizontal') {
            if (e.key === 'ArrowLeft') {
                this.setSplitPosition(this.currentPosPercent - step);
                changed = true;
            } else if (e.key === 'ArrowRight') {
                this.setSplitPosition(this.currentPosPercent + step);
                changed = true;
            }
        } else {
            // Vertical
            if (e.key === 'ArrowUp') {
                this.setSplitPosition(this.currentPosPercent - step);
                changed = true;
            } else if (e.key === 'ArrowDown') {
                this.setSplitPosition(this.currentPosPercent + step);
                changed = true;
            }
        }

        if (changed) {
            e.preventDefault(); // Stop page scrolling
        }
    }

    setSplitPosition(percentage) {
        // Enforce bounds
        percentage = Math.max(this.minPercent, Math.min(this.maxPercent, percentage));
        this.currentPosPercent = percentage;

        // CSS Variable performs the layout engine heavy lifting instantly
        this.container.style.setProperty('--splitter-pos', `${percentage}%`);
        this.handle.setAttribute('aria-valuenow', Math.round(percentage));
    }
}

// Auto-initialize components found in DOM
export function initSplitters() {
    const splitters = document.querySelectorAll('[data-splitter]');
    splitters.forEach(splitter => {
        new AuroraSplitter(splitter);
    });
}
