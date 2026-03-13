---
title: "Event Handling & Analytics"
description: "Learn how Aurora tracks components and manages interaction data."
category: "System"
---

# Event Handling & Analytics

The Aurora Design System features a unified event bus that standardizes how components communicate and how user interactions are tracked for analytics.

## Live Event Logger

Interact with the components below to see the events being captured in real-time.

{{< demo >}}
<div class="ds-grid ds-grid-cols-12 ds-gap-lg">
  
  <!-- LEFT: Components -->
  <div class="ds-col-span-7 ds-flex ds-flex-col ds-gap-lg">
    <div class="card">
      <h3>Inter-component Sync</h3>
      <p class="ds-mb-md">Click a segment to emit a UI event.</p>
      <table class="chart" data-type="donut" data-aurora-id="demo-donut" data-aurora-component="chart">
        <thead>
          <tr><th>Metric</th><th>Value</th></tr>
        </thead>
        <tbody>
          <tr><th>Direct</th><td data-value="40">40%</td></tr>
          <tr><th>Social</th><td data-value="30">30%</td></tr>
          <tr><th>Referral</th><td data-value="30">30%</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card">
      <h3>Analytics Tracker</h3>
      <p class="ds-mb-md">Buttons with <code>data-aurora-id</code> are automatically tracked.</p>
      <div class="ds-flex ds-flex-col ds-gap-sm">
        <button class="btn btn--primary" 
                data-aurora-id="download-report" 
                data-aurora-component="button"
                data-aurora-action="download"
                data-aurora-metadata='{"format": "pdf"}'>
          <span class="icon icon-upload ds-mr-xs"></span>
          Download Report
        </button>
        
        <button class="btn btn--sec" 
                data-aurora-id="save-draft" 
                data-aurora-component="button"
                data-aurora-action="save">
          <span class="icon icon-save ds-mr-xs"></span>
          Save Draft
        </button>
      </div>
    </div>
  </div>

  <!-- RIGHT: Logger -->
  <div class="ds-col-span-5">
    <div id="event-logger" class="ds-p-lg" style="background: var(--ds-sys-color-surface-container); border-radius: 8px; font-family: monospace; height: 100%; display: flex; flex-direction: column;">
      <div class="ds-flex ds-justify-between ds-mb-md">
        <h3 style="margin:0">Live Event Feed</h3>
        <button class="btn btn--sm js-clear-events">Clear</button>
      </div>
      <div class="js-event-list ds-flex ds-flex-col ds-gap-sm" style="flex-grow: 1; max-height: 600px; overflow-y: auto;">
        <p class="ds-color-on-surface-variant">Waiting for events...</p>
      </div>
    </div>
  </div>

</div>

<script type="module">
  import { events } from '/aurora-docs/js/events.js';

  const list = document.querySelector('.js-event-list');
  const clearBtn = document.querySelector('.js-clear-events');

  function logEvent(type, name, data) {
    if (list.querySelector('p')) list.innerHTML = '';
    
    const item = document.createElement('div');
    item.className = 'ds-p-sm';
    item.style.borderLeft = `4px solid ${type === 'ui' ? '#3b82f6' : '#10b981'}`;
    item.style.background = 'var(--ds-sys-color-surface)';
    item.style.borderRadius = '4px';
    item.style.marginBottom = '8px';
    
    const time = new Date().toLocaleTimeString();
    
    item.innerHTML = `
      <div class="ds-flex ds-justify-between ds-mb-xs">
        <strong style="color: ${type === 'ui' ? '#3b82f6' : '#10b981'}; font-size: 13px;">${type.toUpperCase()}: ${name}</strong>
        <small class="ds-color-on-surface-variant">${time}</small>
      </div>
      <pre style="margin:0; font-size: 11px; white-space: pre-wrap; word-break: break-all;">${JSON.stringify(data, null, 2)}</pre>
    `;
    
    list.prepend(item);
  }

  // Listen for all clicks on documented tracking IDs
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-aurora-id]');
    if (target) {
      logEvent('analytics', 'interaction', {
        id: target.getAttribute('data-aurora-id'),
        component: target.getAttribute('data-aurora-component'),
        action: target.getAttribute('data-aurora-action') || 'click',
        metadata: target.getAttribute('data-aurora-metadata')
      });
    }
  });

  // Specifically catch the UI sync event from the chart
  window.addEventListener('aurora:ui:chart_select', (e) => {
    logEvent('ui', 'chart_select', e.detail);
  });

  clearBtn.addEventListener('click', () => {
    list.innerHTML = '<p class="ds-color-on-surface-variant">Waiting for events...</p>';
  });
</script>
{{< /demo >}}

## Identification Schema

The system relies on a declarative schema using `data-aurora-*` attributes:

| Attribute | Purpose |
|-----------|---------|
| `data-aurora-id` | Globally unique identifier for the instance. |
| `data-aurora-component` | System-level component name (e.g., `chart`, `gallery`). |
| `data-aurora-action` | The intended interaction to track (defaults to `click`). |
| `data-aurora-metadata` | JSON string for supplementary context. |
