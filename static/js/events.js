/**
 * Aurora Unified Event Bus
 * Handles inter-component communication (UI) and resilient analytics tracking (Analytics).
 */

class AuroraEvents {
  constructor() {
    this.queueKey = 'aurora_event_queue';
    this.analyticsEndpoint = '/api/analytics'; // Placeholder endpoint
    this.history = []; // Session history for debugging
    this.init();
  }

  init() {
    // 1. Global Click Observer
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-aurora-id]');
      if (target) {
        this.handleAutoTrack(target);
      }
    });

    // 2. Online Sync
    window.addEventListener('online', () => this.syncQueue());
    if (navigator.onLine) this.syncQueue();

    // 3. Accessibility: Create aria-live region if not exists
    if (!document.getElementById('aurora-live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'aurora-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.style.position = 'absolute';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.padding = '0';
      liveRegion.style.margin = '-1px';
      liveRegion.style.overflow = 'hidden';
      liveRegion.style.clip = 'rect(0, 0, 0, 0)';
      liveRegion.style.whiteSpace = 'nowrap';
      liveRegion.style.border = '0';
      document.body.appendChild(liveRegion);
    }
  }

  /**
   * Automations for elements with data-aurora-id
   */
  handleAutoTrack(el) {
    const detail = {
      id: el.getAttribute('data-aurora-id'),
      component: el.getAttribute('data-aurora-component'),
      action: el.getAttribute('data-aurora-action') || 'click',
      metadata: this.parseMetadata(el.getAttribute('data-aurora-metadata'))
    };

    this.emitAnalytics('interaction', detail);
  }

  parseMetadata(str) {
    try {
      return str ? JSON.parse(str) : {};
    } catch (e) {
      console.warn('AuroraEvents: Failed to parse metadata', str);
      return { raw: str };
    }
  }

  /**
   * Intra-page communication (e.g. Chart -> Info Tile)
   */
  emitUI(eventName, detail = {}) {
    console.group(`%cAurora UI Event: ${eventName}`, 'color: #3b82f6; font-weight: bold;');
    console.log('Detail:', detail);
    console.groupEnd();

    this.history.push({ type: 'ui', event: eventName, detail, timestamp: new Date().toISOString() });

    const event = new CustomEvent(`aurora:ui:${eventName}`, { detail });
    window.dispatchEvent(event);

    // Update aria-live region if needed
    if (detail.message) {
      const region = document.getElementById('aurora-live-region');
      if (region) region.textContent = detail.message;
    }
  }

  /**
   * Analytics tracking with offline resilience
   */
  emitAnalytics(eventName, detail = {}) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...detail
    };

    console.group(`%cAurora Analytics Event: ${eventName}`, 'color: #10b981; font-weight: bold;');
    console.log('Payload:', payload);
    console.log('Status:', navigator.onLine ? 'Online (Sending...)' : 'Offline (Queuing...)');
    console.groupEnd();

    this.history.push({ type: 'analytics', event: eventName, payload, timestamp: payload.timestamp });

    if (navigator.onLine) {
      this.send(payload);
    } else {
      this.enqueue(payload);
    }
  }

  send(payload) {
    // navigator.sendBeacon is preferred for unloads and better reliability
    const success = navigator.sendBeacon(
      this.analyticsEndpoint,
      JSON.stringify(payload)
    );

    if (!success) {
      // Fallback or retry logic if beacon fails
      console.error('AuroraEvents: sendBeacon failed');
    }
  }

  enqueue(payload) {
    const queue = this.getQueue();
    queue.push(payload);
    localStorage.setItem(this.queueKey, JSON.stringify(queue));
    console.log('AuroraEvents: Event queued (offline)');
  }

  getQueue() {
    const data = localStorage.getItem(this.queueKey);
    return data ? JSON.parse(data) : [];
  }

  syncQueue() {
    const queue = this.getQueue();
    if (queue.length === 0) return;

    console.log(`AuroraEvents: Syncing ${queue.length} queued events...`);
    queue.forEach(payload => this.send(payload));
    localStorage.removeItem(this.queueKey);
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}

// Export as Singleton
export const events = new AuroraEvents();
window.AuroraEvents = events; // Global access for non-module scripts
