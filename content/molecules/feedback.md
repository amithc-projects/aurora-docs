---
title: "Feedback"
category: "Molecules"
description: "Toasts, alerts, and notifications."
menu:
  main:
    parent: "molecules"
---

## Toast Notifications
Triggers a toast message in the dock.

{{< demo >}}
<div class="l-cluster">
 <section class="card" style="padding: 2rem;">
      <h3>1. Toast Positioning</h3>
      <p>Select a position for the toast dock:</p>
      
      <div class="l-grid" >
        <button class="secondary" onclick="setPos('top-left')">Top Left</button>
        <button class="secondary" onclick="setPos('top-center')">Top Center</button>
        <button class="secondary" onclick="setPos('top-right')">Top Right</button>
        
        <button class="secondary" onclick="setPos('middle-left')">Mid Left</button>
        <button class="secondary" onclick="setPos('middle-center')">Mid Center</button>
        <button class="secondary" onclick="setPos('middle-right')">Mid Right</button>
        
        <button class="secondary" onclick="setPos('bottom-left')">Bot Left</button>
        <button class="secondary" onclick="setPos('bottom-center')">Bot Center</button>
        <button class="secondary" onclick="setPos('bottom-right')">Bot Right</button>
      </div>
    </section>

    <section class="card" >
      <h3>2. Triggers & Persistence</h3>
      
      <div class="l-cluster" >
        <button class="primary" onclick="showToast('success', 'Saved', 'Auto-dismiss in 5s (Hover to pause).')">
          Auto Dismiss (5s)
        </button>
        
        <button class="secondary" onclick="showToast('info', 'Update Available', 'I will stay until you close me.', true)">
          Persistent Toast
        </button>
        
        <button class="secondary" onclick="showToast('error', 'Error', 'Something went wrong!')">
          Error Toast
        </button>
      </div>
    </section>
    <section>
      <section class="card" >
      <h3>3. Native Popover (Minimal JS)</h3>
      <p>
        Uses the browser's <code>popover</code> API. Great for single, static messages (like "You are offline") 
        that don't need to stack.
      </p>
      
      <div class="l-cluster" >
        <button class="primary" popovertarget="offline-toast">
          Toggle Offline Alerts
        </button>
      </div>
      <div id="offline-toast" popover="manual" class="toast toast--popover toast--warning">
  <span class="material-symbols-outlined toast__icon">wifi_off</span>
  <div class="toast__content">
    <div class="toast__title">Connection Lost</div>
    <div class="toast__message">We are trying to reconnect...</div>
  </div>
  <button class="toast__close" onclick="this.closest('[popover]').hidePopover()">
    <span class="material-symbols-outlined">close</span>
  </button>
</div>
    </section>

</div>

<div id="toast-dock" class="toast-container"></div>

<script>
    (function() {
        const storedTheme = localStorage.getItem('aurora-theme') || 'corporate';
        document.body.setAttribute('data-theme', storedTheme);
    })();

    // 1. POSITIONING LOGIC
    function setPos(pos) {
      const dock = document.getElementById('toast-dock');
      // Reset classes
      dock.className = 'toast-container';
      // Add new position
      dock.classList.add(`toast-container--${pos}`);
      
      showToast('info', 'Position Changed', `Dock moved to ${pos}`);
    }

    // 2. TOAST LOGIC
    function showToast(type, title, message, persist = false) {
      const dock = document.getElementById('toast-dock');
      const el = document.createElement('div');
      
      const icons = { success: 'check_circle', error: 'error', warning: 'warning', info: 'info' };

      // Base Classes
      el.className = `toast toast--${type}`;
      
      // Persistence Logic (CSS Class)
      if (persist) {
        el.classList.add('toast--persist');
      }

      el.innerHTML = `
        <span class="material-symbols-outlined toast__icon">${icons[type]}</span>
        <div class="toast__content">
          <div class="toast__title">${title}</div>
          <div class="toast__message">${message}</div>
        </div>
        <button class="toast__close">
          <span class="material-symbols-outlined">close</span>
        </button>
      `;

      // MANUAL CLOSE HANDLER
      const closeBtn = el.querySelector('.toast__close');
      closeBtn.onclick = () => {
        el.classList.add('is-leaving'); // Trigger Exit Animation
        el.addEventListener('animationend', () => el.remove());
      };

      // AUTO DISMISS HANDLER (Listen for CSS Animation End)
      // This allows CSS variables to control the duration entirely!
      if (!persist) {
        el.addEventListener('animationend', (e) => {
          // Only remove if it was the lifecycle animation that finished
          if (e.animationName === 'toast-lifecycle') {
            el.remove();
          }
        });
      }

      dock.appendChild(el);
    }
  </script>

{{< /demo >}}
