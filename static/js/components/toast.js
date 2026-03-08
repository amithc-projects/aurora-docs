/**
 * Aurora Toast Controller
 * Programmatic API for spawning, managing, and dismissing toast notifications.
 */

// ICONS
const ICONS = {
    success: 'check_circle',
    warning: 'warning',
    error: 'error',
    info: 'info',
    loading: 'refresh'
};

const DURATIONS = {
    success: 4000,
    warning: 5000,
    error: 6000,
    info: 4000
};

const MAX_TOASTS = 3;
let counter = 0;
const timers = {};
const toasts = {};

/**
 * Ensures the global Toast Portal exists in the DOM.
 */
function getPortal(position = 'bottom-right') {
    let portal = document.getElementById('toast-portal');
    if (!portal) {
        portal = document.createElement('div');
        portal.id = 'toast-portal';
        // ARIA role for the container
        portal.setAttribute('role', 'region');
        portal.setAttribute('aria-label', 'Notifications');
        document.body.appendChild(portal);
    }

    // Update class based on requested position
    portal.className = `toast-container toast-container--${position}`;
    return portal;
}

/**
 * Ensures the ARIA live region exists for screen readers.
 */
function getAnnouncer() {
    let announcer = document.getElementById('toast-announce');
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'toast-announce';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';

        // Hide visually but keep screen reader accessible
        announcer.style.position = 'absolute';
        announcer.style.width = '1px';
        announcer.style.height = '1px';
        announcer.style.overflow = 'hidden';
        announcer.style.clip = 'rect(0,0,0,0)';
        announcer.style.whiteSpace = 'nowrap';

        document.body.appendChild(announcer);
    }
    return announcer;
}

/**
 * Dismisses a specific toast by ID.
 * @param {string} tid - The Toast ID to dismiss.
 * @param {boolean} immediate - If true, skips the exit animation.
 */
export function dismissToast(tid, immediate = false) {
    const el = toasts[tid];
    if (!el) return;

    // Clear any existing timeout
    if (timers[tid]) {
        clearTimeout(timers[tid]);
        delete timers[tid];
    }

    if (immediate) {
        el.remove();
        delete toasts[tid];
        return;
    }

    // Trigger exit animation
    el.classList.add('is-leaving');
    el.addEventListener('animationend', () => {
        el.remove();
        delete toasts[tid];
    }, { once: true });
}

/**
 * Dismisses all currently visible toasts.
 */
export function dismissAllToasts() {
    Object.keys(toasts).forEach(id => dismissToast(id));
}

/**
 * Spawns a new Toast notification.
 * 
 * @param {Object} options Configuration options for the toast
 * @param {string} options.variant 'success', 'error', 'warning', 'info', or 'loading'
 * @param {string} options.title Primary text
 * @param {string} [options.description] Secondary text
 * @param {boolean} [options.isAlert=false] If true, uses role="alert" instead of "status"
 * @param {string} [options.position='bottom-right'] Location of the portal
 * @param {Function} [options.action] Optional interactive callback function
 * @param {string} [options.actionLabel] Label for the interactive callback
 * @param {number} [options.duration] Override the default timeout duration (in ms). Set to 0 to disable auto-dismiss.
 * @returns {string} The ID of the generated toast
 */
export function showToast(options = {}) {
    const {
        variant = 'info',
        title = '',
        description = '',
        isAlert = false,
        position = 'bottom-right',
        action = null,
        actionLabel = 'Action',
        duration
    } = options;

    const portal = getPortal(position);
    const tid = `toast-${++counter}`;

    // Enforce Max Stack Limit (dismiss oldest if necessary)
    const existing = [...portal.querySelectorAll('.toast:not(.is-leaving)')];
    if (existing.length >= MAX_TOASTS) {
        dismissToast(existing[0].dataset.id, true);
    }

    // Calculate Duration (Loading toasts don't auto-dismiss by default)
    const isAutoDismiss = duration !== 0 && variant !== 'loading';
    const dur = duration ?? (DURATIONS[variant] || 4000);

    // Build the DOM element
    const el = document.createElement('div');
    el.className = `toast toast--${variant} js-managed`;
    el.dataset.id = tid;
    el.setAttribute('role', isAlert || variant === 'error' ? 'alert' : 'status');
    el.setAttribute('aria-atomic', 'true');

    // Determine Icon
    const iconHtml = variant === 'loading'
        ? `<svg class="toast__spinner" viewBox="0 0 24 24"><circle class="spinner-track" cx="12" cy="12" r="9"/><circle class="spinner-arc" cx="12" cy="12" r="9"/></svg>`
        : `<span class="toast__icon material-symbols-outlined">${ICONS[variant] || ICONS.info}</span>`;

    // Build Inner HTML
    let html = `
    ${iconHtml}
    <div class="toast__body">
      <div class="toast__title">${title}</div>
      ${description ? `<div class="toast__message">${description}</div>` : ''}
    </div>
    <button class="toast__close" aria-label="Dismiss notification" data-dismiss="${tid}">
      <span class="material-symbols-outlined" style="font-size: 16px;">close</span>
    </button>
  `;

    // Append Interactive Action (if provided)
    if (action && actionLabel) {
        const actionBtn = document.createElement('button');
        actionBtn.className = 'toast__action';
        actionBtn.textContent = actionLabel;
        actionBtn.addEventListener('click', () => {
            action(tid);
            dismissToast(tid); // Default behavior is to dismiss on action execution
        });

        // Inject action button into body safely
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        tempDiv.querySelector('.toast__body').appendChild(actionBtn);
        html = tempDiv.innerHTML;
    }

    // Append Progress Bar (if auto-dismissing)
    if (isAutoDismiss) {
        html += `
      <div class="toast__progress">
        <div class="toast__progress-bar" style="animation-duration: ${dur}ms;"></div>
      </div>
    `;
    }

    el.innerHTML = html;

    // Bind Close Button properly
    el.querySelector('.toast__close').addEventListener('click', () => dismissToast(tid));

    // Pause on hover
    el.addEventListener('mouseenter', () => {
        if (timers[tid]) {
            clearTimeout(timers[tid]);
            const bar = el.querySelector('.toast__progress-bar');
            if (bar) bar.style.animationPlayState = 'paused';
        }
    });

    el.addEventListener('mouseleave', () => {
        if (isAutoDismiss) {
            const bar = el.querySelector('.toast__progress-bar');
            if (bar) bar.style.animationPlayState = 'running';

            // We extend the timer by 30% of the original duration when mouse leaves to give them time to read it
            timers[tid] = setTimeout(() => dismissToast(tid), dur * 0.3);
        }
    });

    // Mount
    portal.appendChild(el);
    toasts[tid] = el;

    // ARIA Announcement
    const announcer = getAnnouncer();
    announcer.textContent = `${title}${description ? '. ' + description : ''}`;

    // Start Timer
    if (isAutoDismiss) {
        timers[tid] = setTimeout(() => dismissToast(tid), dur);
    }

    return tid;
}

// Make globally available on the window object so it can be called seamlessly from onclick handlers in the HTML
if (typeof window !== 'undefined') {
    window.AuroraToast = {
        show: showToast,
        dismiss: dismissToast,
        dismissAll: dismissAllToasts
    };
}
