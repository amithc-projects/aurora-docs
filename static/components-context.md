# Aurora Full Component Context

This file is the exhaustive technical dictionary for the Aurora Design System. Use these HTML structures exactly as written. Do not hallucinate class names.

## Atoms

### Buttons
**Source**: `atoms/buttons.md`
```html
<div class="l-cluster">
  <button class="primary">Submit</button>
  <button class="secondary">Cancel</button>
</div>
```

### Badges
**Source**: `atoms/badges.md`
```html
<div class="l-cluster">
  <span class="badge badge--solid">Default</span>
  <span class="badge badge--solid badge--primary">Primary</span>
  <span class="badge badge--solid badge--success">Success</span>
  <span class="badge badge--solid badge--warning">Warning</span>
  <span class="badge badge--solid badge--error">Error</span>
</div>
```

### Avatars
**Source**: `atoms/avatars.md`
```html
<div class="avatar-group">
  <img src="https://i.pravatar.cc/150?img=5" class="avatar" alt="">
  <img src="https://i.pravatar.cc/150?img=6" class="avatar" alt="">
  <img src="https://i.pravatar.cc/150?img=7" class="avatar" alt="">
  <span class="avatar avatar--placeholder">+5</span>
</div>
```

### Lists
**Source**: `atoms/lists.md`
```html
<ul>
  <li>Apples and fresh fruits</li>
  <li>
    Oats, grains, and cereals
    <ul>
      <li>Steel-cut oats</li>
      <li>Rolled oats</li>
    </ul>
  </li>
  <li>Dairy and milk alternatives</li>
</ul>
```

### Links
**Source**: `atoms/links.md`
```html
<p style="margin:0;">
  This is a standard paragraph of text that contains a <a href="#">standard hyperlink embedded inside</a>. Notice how it seamlessly integrates with the text flow.
</p>
```

## Molecules

### Tables
**Source**: `molecules/tables.md`
```html
<div class="table-container">
  <table class="table table--bordered">
    <thead>
      <tr><th>Status</th><th>User</th><th>Actions</th></tr>
    </thead>
    <tbody>
      <tr class="table-row--success">
        <td><span class="badge badge--soft badge--success">Active</span></td>
        <td>Jane Doe</td>
        <td><button class="secondary" >Edit</button></td>
      </tr>
      <tr>
        <td><span class="badge badge--soft badge--neutral">Offline</span></td>
        <td>Bob Smith</td>
        <td><button class="secondary" >Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Tooltips
**Source**: `molecules/tooltips.md`
```html
<div style="padding: 2rem; text-align: center;">
  
<section class="card" >
      <h3>Rich Tooltips</h3>
      <p>Using <code>anchor()</code> positioning and the <code>popover</code> API.</p>
      
      <div class="l-cluster" >
        
        <button class="secondary tooltip-trigger" 
                id="btn-basic" 
                style="anchor-name: --anchor-basic">
          Hover for Basic Info
        </button>

        <div class="tooltip" 
             id="tip-basic" 
             popover="manual" 
             style="position-anchor: --anchor-basic"> Simple text tooltip.
        </div>


        <button class="primary tooltip-trigger" 
                id="btn-rich" 
                style="anchor-name: --anchor-rich">
          Hover for Rich HTML
        </button>

        <div class="tooltip tooltip--rich" 
             id="tip-rich" 
             popover="manual" 
             style="position-anchor: --anchor-rich">
          
          <span class="tooltip__title">User Profile</span>
          <div >
            <div class="avatar avatar--sm"><img src="https://i.pravatar.cc/150?u=rich" alt=""></div>
            <div>
              <div >Jane Doe</div>
              <div >Full Stack Dev</div>
            </div>
          </div>
  <!-- Content truncated for brevity -->
```

### Feedback
**Source**: `molecules/feedback.md`
```html
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
  <!-- Content truncated for brevity -->
```

### Toast
**Source**: `molecules/feedback/toast.md`
```html
<div class="toast-container toast-container--bottom-left" style="position: relative; inset: auto; pointer-events: auto; padding: 0;">
  <div class="toast toast--success toast--persist">
    <span class="toast__icon material-symbols-outlined">check_circle</span>
    <div class="toast__body">
      <div class="toast__title">Changes saved</div>
      <div class="toast__message">Your profile has been updated successfully.</div>
    </div>
  </div>
</div>
```

## Components

### Accordion
**Source**: `components/accordion.md`
```html
<div class="accordion">
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="true" aria-controls="p1" id="t1">
        What is a design token?
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel is-open" id="p1" role="region" aria-labelledby="t1">
      <div class="accordion-body">
        <div class="accordion-inner">A design token is a named value that stores a design decision — a colour, spacing value, border radius, or shadow. Tokens allow design and code to share a single source of truth.</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p2" id="t2">
        How does theme switching work?
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p2" role="region" aria-labelledby="t2">
      <div class="accordion-body">
        <div class="accordion-inner">Aurora uses <code>data-theme</code> and <code>data-mode</code> attributes on the <code>&lt;html&gt;</code> element. Each theme overrides a set of semantic CSS tokens without touching component markup.</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p3" id="t3">
        Can I create a custom theme?
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p3" role="region" aria-labelledby="t3">
      <div class="accordion-body">
        <div class="accordion-inner">Yes. See the <strong>Theming Guide</strong> for step-by-step instructions. You need to define a brand colour ramp, wire semantic tokens, and optionally override typography and radius defaults. Light and dark mode variants of your brand colours are both required.</div>
      </div>
    </div>
  </div>
  <!-- Content truncated for brevity -->
```

### Blockquote
**Source**: `components/blockquote.md`
```html
<blockquote class="blockquote">
  <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
  <cite class="blockquote__footer">Flowbite Docs</cite>
</blockquote>
```

### Aurora Charts
**Source**: `components/aurora-charts.md`
```html
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "axis" },
        "xAxis": {
          "type": "category",
          "boundaryGap": false,
          "data": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        "yAxis": { "type": "value" },
        "series": [
          {
            "name": "Revenue",
            "type": "line",
            "data": [65, 120, 250, 480, 800, 1400, 2000],
            "areaStyle": { "opacity": 0.5 },
            "itemStyle": { "color": "var(--ds-chart-1)" },
            "lineStyle": { "width": 3 }
          }
        ]
      }
    </script>
  </div>
</div>
```

### Map
**Source**: `components/map.md`
```html
<div class="aurora-map" 
     data-component="map" 
     data-lat="40.7128" 
     data-lng="-74.0060" 
     data-zoom="11">
</div>
```

### Image
**Source**: `components/image.md`
```html
<div style="width: 50%; border: 1px dashed var(--ds-sys-color-border);">
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" alt="Sneaker at 50% width" style="max-width: 100%; height: auto; display: block;">
</div>
```

### Identity
**Source**: `components/identity.md`
```html
<div class="l-stack">
  <div class="l-cluster">
    <span class="badge badge--soft">Default</span>
    <span class="badge badge--soft badge--primary">Primary</span>
    <span class="badge badge--soft badge--success">Success</span>
    <span class="badge badge--soft badge--warning">Warning</span>
    <span class="badge badge--soft badge--error">Error</span>
  </div>
  <div class="l-cluster">
    <span class="badge badge--solid badge--primary">New</span>
    <span class="badge badge--outline badge--success">Verified</span>
  </div>
</div>
```

### Countdown Timer
**Source**: `components/countdown.md`
```html
<div style="display: flex; justify-content: center; padding: 2rem;">
    <div data-countdown 
         data-duration="30" 
         data-shape="rectangle">
    </div>
</div>
```

### Timeline Line Chart
**Source**: `components/timeline-line-chart.md`
```html
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div 
      data-component="timeline-line-chart" 
      data-src="/aurora-docs/data/pl_chart_race.json" 
      data-title="Season Path 24/25"
      data-desc="Track team journeys through the standings"
      data-is-rank>
        <div class="skeleton-placeholder" style="height: 600px; width: 100%;">
          Loading chart...
        </div>
    </div>
  </div>
</div>
```

### Breadcrumbs
**Source**: `components/breadcrumbs.md`
```html
<label class="field__label">Standard (/)</label>
      <div>
          <ul class="list list--breadcrumbs">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Electronics</a></li>
            <li>Headphones</li>
          </ul>
        </div>
```

### Cookie Consent
**Source**: `components/cookie-consent.md`
```html
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <button class="btn" onclick="triggerCookie('banner-bottom')">Test: Bottom Banner</button>
  <button class="btn" onclick="triggerCookie('banner-top')">Test: Top Banner</button>
  <button class="btn" onclick="triggerCookie('toast')">Test: Corner Toast</button>
  <button class="btn" onclick="triggerCookie('modal')">Test: Center Modal</button>
  <button class="btn" style="background: var(--ds-sys-color-primary); color: white;" onclick="triggerCookie('banner-bottom', true)">Test: Blur Banner</button>
</div>

<script type="text/plain" data-category="analytics">
  console.log("🚀 ANALYTICS SCRIPT FIRED! (Consent Granted)");
  alert("Analytics Script Executed!");
</script>

<script type="module">
  import { initCookieConsent } from "/aurora-docs/js/components/cookie-consent.js";

  // Expose for demo buttons
  window.triggerCookie = (mode, blur = false) => {
    localStorage.removeItem('aurora_cookie_consent'); // Reset
    document.querySelectorAll('.cookie-consent, .cookie-backdrop, .cookie-prefs').forEach(e => e.remove()); // Cleanup DOM
    
    initCookieConsent({
      mode: mode,
      backdropBlur: blur,
      policyUrl: '/privacy-policy',
      version: '1.2'
    });
  };
</script>
```

### Tag / Chip
**Source**: `components/tag.md`
```html
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 1rem;">
  <span class="tag tag-neutral">Neutral</span>
  <span class="tag tag-brand">Brand</span>
  <span class="tag tag-success"><span class="tag-dot"></span>Active</span>
  <span class="tag tag-warning"><span class="tag-dot"></span>Pending</span>
  <span class="tag tag-danger"><span class="tag-dot"></span>Blocked</span>
  <span class="tag tag-info">Info</span>
</div>
```

### Charts (SVG)
**Source**: `components/charts-svg.md`
```html
<table class="chart" data-type="pie" data-table-pos="right">
  <caption>Browser Market Share</caption>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td data-value="65">65%</td>
    </tr>
    <tr>
      <th>Safari</th>
      <td data-value="20">20%</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td data-value="10">10%</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td data-value="5">5%</td>
    </tr>
  </tbody>
</table>
```

### Progress Bar
**Source**: `components/progress.md`
```html
<div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
  <div class="progress-wrap">
    <div class="progress-label-row"><span>xs — page loading</span><span>72%</span></div>
    <div class="progress-track progress-track-xs"><div class="progress-fill" style="width:72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="Page loading"></div></div>
  </div>
  
  <div class="progress-wrap">
    <div class="progress-label-row"><span>sm — default</span><span>45%</span></div>
    <div class="progress-track progress-track-sm"><div class="progress-fill" style="width:45%" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="Progress"></div></div>
  </div>
  
  <div class="progress-wrap">
    <div class="progress-label-row"><span>md — file upload</span><span>83%</span></div>
    <div class="progress-track progress-track-md"><div class="progress-fill" style="width:83%" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"></div></div>
  </div>
  
  <div class="progress-wrap">
    <div class="progress-label-row"><span>lg — storage meter</span><span>91% used</span></div>
    <div class="progress-track progress-track-lg"><div class="progress-fill progress-fill-danger" style="width:91%" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" aria-label="Storage: 91% used"></div></div>
  </div>
</div>
```

### Segmented Control
**Source**: `components/segmented-control.md`
```html
<div style="display: flex; justify-content: center; padding: 2rem 0;">
    <div class="segmented-control">
        <div class="segmented-control__indicator"></div>
        
        <input type="radio" id="seg-today" name="timeframe" value="today" checked>
        <label for="seg-today">Today</label>
        
        <input type="radio" id="seg-week" name="timeframe" value="week">
        <label for="seg-week">This Week</label>
        
        <input type="radio" id="seg-month" name="timeframe" value="month">
        <label for="seg-month">Month</label>
    </div>
</div>
```

### Hierarchical Charts
**Source**: `components/hierarchical-charts.md`
```html
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "item" },
        "series": [
          {
            "type": "treemap",
            "data": [
              {
                "name": "Frontend",
                "value": 40,
                "itemStyle": { "color": "var(--ds-chart-1)" },
                "children": [
                  { "name": "React", "value": 25 },
                  { "name": "Vue", "value": 15 }
                ]
              },
              {
                "name": "Backend",
                "value": 30,
                "itemStyle": { "color": "var(--ds-chart-2)" },
                "children": [
                  { "name": "Node.js", "value": 20 },
                  { "name": "Python", "value": 10 }
                ]
              },
              {
                "name": "DevOps",
                "value": 20,
                "itemStyle": { "color": "var(--ds-chart-3)" }
              }
            ]
          }
        ]
      }
    </script>
  </div>
</div>
```

### Ultimate Gallery
**Source**: `components/gallery.md`
```html
<div class="gallery" data-mode="grid" style="--gallery-item-min: 220px;">
  <ul>
    
    <li>
      <a href="https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4" 
         data-caption="Ocean Waves (MP4)">
        <div class="gallery__play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <img src="https://images.pexels.com/videos/855564/free-video-855564.jpg?auto=compress&cs=tinysrgb&w=600" loading="lazy">
      </a>
    </li>

    <li>
      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" 
         data-caption="Costa Rica (YouTube)">
        <div class="gallery__play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <img src="https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg" loading="lazy">
      </a>
    </li>

    <li>
      <a href="https://picsum.photos/id/1015/1200/800" data-caption="Standard Image">
        <img src="https://picsum.photos/id/1015/300/300" loading="lazy">
      </a>
    </li>

    <li>
      <a href="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" 
         data-caption="Forest Walk (MP4)">
        <div class="gallery__play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <img src="https://images.pexels.com/videos/3209828/free-video-3209828.jpg?auto=compress&cs=tinysrgb&w=600" loading="lazy">
      </a>
    </li>

  </ul>
</div>
```

### Spinner
**Source**: `components/spinner.md`
```html
<div class="demo-wrapper">
  <!-- ── SPINNER ── -->
  <div class="demo-section">
    <h2>Spinner</h2>

    <h3>Sizes</h3>
    <div class="spinner-row" role="status" aria-label="Loading">
      <div title="xs — 12px"><svg class="spinner spinner-xs" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg></div>
      <div title="sm — 16px"><svg class="spinner spinner-sm" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg></div>
      <div title="md — 24px (default)"><svg class="spinner spinner-md" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg></div>
      <div title="lg — 40px"><svg class="spinner spinner-lg" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2"/></svg></div>
      <div title="xl — 64px"><svg class="spinner spinner-xl" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="1.75"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="1.75"/></svg></div>
    </div>

    <h3>Variants</h3>
    <div class="spinner-row">
      <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:var(--text-xs);color:var(--color-text-secondary)">
        <svg class="spinner spinner-md" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Brand (default)
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:var(--text-xs);color:var(--color-text-secondary)">
        <svg class="spinner spinner-md spinner-muted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Muted
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:var(--text-xs);color:var(--color-text-secondary)">
        <div style="background:var(--color-brand);padding:.75rem;border-radius:var(--radius-md);">
          <svg class="spinner spinner-md spinner-inverted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        </div>
        Inverted
      </div>
    </div>

    <h3>In context — button loading state</h3>
    <div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center">
      <button class="btn btn-primary" disabled>
        <svg class="spinner spinner-sm spinner-inverted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Saving…
      </button>
      <button class="btn btn-ghost" disabled>
        <svg class="spinner spinner-sm spinner-muted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
  <!-- Content truncated for brevity -->
```

### PIN Input
**Source**: `components/pin-input.md`
```html
<div style="max-width: 400px; margin: 0 auto; padding: 2rem 0;">
    <div style="text-align: center; margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Enter Verification Code</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.875rem;">
            We've sent a 6-digit code to your device.
        </p>
    </div>

    <div data-pin-input data-length="6" data-type="numeric" id="demo-pin-1"></div>

    <div style="text-align: center; margin-top: 2rem; color: var(--ds-sys-color-success); font-weight: 600; opacity: 0; transition: opacity 0.3s ease;" id="demo-pin-success-1">
        ✓ Code Accepted: <span id="demo-pin-val-1"></span>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('demo-pin-1');
    const successMsg = document.getElementById('demo-pin-success-1');
    const valDisplay = document.getElementById('demo-pin-val-1');

    container.addEventListener('pin:complete', (e) => {
        // Emitted the moment the 6th box is filled!
        valDisplay.textContent = e.detail.value;
        successMsg.style.opacity = '1';

        // Example: Optional programmatic hook
        console.log("Submitting PIN to API:", e.detail.value);
    });
});
</script>
```

### Video Player
**Source**: `components/video-player.md`
```html
<div style="max-width: 600px; margin: 0 auto;">
    <div class="video-player" data-controls-position="overlay" data-controls-align="center">
        <!-- Native attributes still work, alongside our custom JS utilities! -->
        <video poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" data-start-time="15" preload="metadata">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        </video>

        <div class="video-controls" style="flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; width: 100%; align-items: center; gap: 0.5rem; order: 1;">
                 <span class="video-controls__time js-time-current">00:00</span>
                 <input type="range" class="video-controls__slider js-progress-bar" min="0" max="100" value="0" aria-label="Playback timeline">
                 <span class="video-controls__time js-time-total">00:00</span>
            </div>
            
            <div style="display: flex; gap: 0.25rem; align-items: center; order: 2; flex-grow: 1;">
                <button class="video-controls__btn" data-action="restart" aria-label="Restart">
                    <span class="material-symbols-outlined">first_page</span>
                </button>
                <button class="video-controls__btn" data-action="rewind" aria-label="Rewind 10s">
                    <span class="material-symbols-outlined">fast_rewind</span>
                </button>
                <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" aria-label="Play/Pause">
                    <span class="material-symbols-outlined">play_arrow</span>
                </button>
                <button class="video-controls__btn" data-action="forward" aria-label="Forward 10s">
                    <span class="material-symbols-outlined">fast_forward</span>
                </button>
            </div>
            
            <div style="display: flex; gap: 0.25rem; align-items: center; order: 3; position: relative;">
                <button class="video-controls__btn js-mute-btn" aria-label="Mute">
                    <span class="material-symbols-outlined">volume_up</span>
                </button>
                <button class="video-controls__btn js-settings-btn" aria-label="Settings">
                    <span class="material-symbols-outlined">settings</span>
                </button>
                
                <!-- Settings Popover -->
                <div class="video-settings-menu js-settings-menu">
                    <button data-action="speed">
  <!-- Content truncated for brevity -->
```

### Timeline
**Source**: `components/timeline.md`
```html
<div class="demo-wrapper">
  <!-- Feed variant -->
  <div class="section">
    <div class="section-label">Feed — workout activity log</div>

    <div class="timeline-date-group">
      <div class="timeline-date-label">Today</div>
      <div class="timeline">
        <!-- Expandable strength session -->
        <div class="timeline-item">
          <div class="timeline-dot dot-brand">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 8h2m8 0h2M4 8a1 1 0 0 1 1-1h1V5.5a.5.5 0 0 1 1 0V7h2V5.5a.5.5 0 0 1 1 0V7h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1v1.5a.5.5 0 0 1-1 0V9H9v1.5a.5.5 0 0 1-1 0V9H7a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.25"/></svg>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div><div class="timeline-title">Upper Body Strength</div><div class="timeline-subtitle">Push day · Gym</div></div>
              <time class="timeline-time">6:15 AM</time>
            </div>
            <div class="timeline-stats">
              <div class="timeline-stat"><div class="stat-val">52 min</div><div class="stat-label">Duration</div></div>
              <div class="timeline-stat"><div class="stat-val">6</div><div class="stat-label">Exercises</div></div>
              <div class="timeline-stat"><div class="stat-val">18,400</div><div class="stat-label">Volume (kg)</div></div>
              <div class="timeline-stat"><div class="stat-val">💪 PR</div><div class="stat-label">Bench press</div></div>
            </div>
            <button class="timeline-expand" aria-expanded="false" aria-controls="exp1" onclick="toggleExpand(this,'exp1')">
              Show exercises
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="timeline-expanded-body" id="exp1"><div class="timeline-expanded-inner"><div class="timeline-expanded-content">
              <div class="exercise-list">
                <div class="exercise-row"><span class="exercise-name">Bench Press 🏆</span><span class="exercise-sets">4 × 5 @ 100 kg — PR!</span></div>
                <div class="exercise-row"><span class="exercise-name">Incline DB Press</span><span class="exercise-sets">3 × 10 @ 32 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Cable Fly</span><span class="exercise-sets">3 × 15 @ 15 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Overhead Press</span><span class="exercise-sets">4 × 6 @ 65 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Tricep Pushdown</span><span class="exercise-sets">3 × 12 @ 25 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Lateral Raises</span><span class="exercise-sets">4 × 15 @ 10 kg</span></div>
              </div>
            </div></div></div>
          </div>
        </div>
  <!-- Content truncated for brevity -->
```

### Tree View
**Source**: `components/tree-view.md`
```html
<div style="max-width: 300px; padding: 1rem; border-right: 1px solid var(--ds-sys-color-border);">
    <div data-tree-view data-initial-state="expanded">
        <ul>
            <li data-icon="dashboard"><a href="#">Dashboard</a></li>
            <li>Marketing
                <ul>
                    <li data-icon="campaign">Campaigns</li>
                    <li data-icon="mail">Newsletters</li>
                    <li data-icon="bar_chart">Analytics</li>
                </ul>
            </li>
            <li>System Settings
                <ul>
                    <li data-icon="group">Users</li>
                    <li data-icon="security" class="is-active">Security Roles</li>
                    <li data-icon="database">Database Mappings</li>
                </ul>
            </li>
            <li data-icon="logout"><a href="#" style="color: var(--ds-sys-color-error)">Log Out</a></li>
        </ul>
    </div>
</div>
```

### Virtual Keyboard
**Source**: `components/virtual-keyboard.md`
```html
<div style="max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem;">
    <!-- Bound Input -->
    <div>
        <label for="guessInput" class="label">Your Guess</label>
        <input type="text" id="guessInput" class="input" placeholder="Tap letters below or use mic..." readonly>
    </div>

    <!-- The Keyboard -->
    <div data-virtual-keyboard 
         data-target-input="#guessInput" 
         data-layout="full" 
         data-enter-label="Guess">
    </div>

    <!-- Demo Event Logs -->
    <div style="font-size: 0.8rem; height: 100px; overflow-y: auto; background: var(--ds-sys-color-surface-container-highest); padding: 0.5rem; border-radius: var(--ds-sys-radius-card);" id="vkLog">
        <em>Interaction logs will appear here...</em><br>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const kbContainer = document.querySelector('[data-virtual-keyboard][data-layout="full"]');
    const logArea = document.getElementById('vkLog');

    function log(msg) {
        logArea.innerHTML += `${msg}<br>`;
        logArea.scrollTop = logArea.scrollHeight;
    }

    kbContainer.addEventListener('keyboard:press', e => log(`Typed: <strong>${e.detail.key}</strong>`));
    kbContainer.addEventListener('keyboard:delete', () => log(`Deleted Character`));
    kbContainer.addEventListener('keyboard:enter', e => log(`Submitted: <strong style="color:var(--ds-sys-color-primary)">${e.detail.value}</strong>`));
    kbContainer.addEventListener('keyboard:voice', e => log(`Voice Dictation: <strong>${e.detail.filtered}</strong>`));
});
</script>
```

### QR Code
**Source**: `components/qrcode.md`
```html
<div class="qr-container">
    <div class="qr-code" 
            data-qr-value="https://aurora.design/system" 
            data-qr-width="200">
    </div>
    <p class="qr-caption">Scan to view Design System</p>
</div>
```

### Image Hotspot
**Source**: `components/image-hotspot.md`
```html
<!-- Replace the src with your local image if you saved it to static/images/living-room.jpg -->
<div class="image-hotspot-container">
    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" alt="Interior living room">
    
    <!-- 1. Sofa Hotspot -->
    <button class="hotspot-dot" style="top: 65%; left: 45%;" popovertarget="hotspot-sofa" aria-label="View Sofa Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-sofa" class="hotspot-overlay" popover="auto" style="position-area: top;">
        <header>Mid-Century Sofa</header>
        <p>A beautiful green textured fabric sofa providing ample seating and natural tones to the living space.</p>
    </div>

    <!-- 2. Lamp Hotspot -->
    <button class="hotspot-dot" style="top: 35%; left: 65%;" popovertarget="hotspot-lamp" aria-label="View Lamp Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-lamp" class="hotspot-overlay" popover="auto" style="position-area: left;">
        <header>Arched Floor Lamp</header>
        <p>Matte black arched floor lamp providing directional reading light over the sofa area.</p>
    </div>

    <!-- 3. Coffee Table Hotspot -->
    <button class="hotspot-dot" style="top: 75%; left: 75%;" popovertarget="hotspot-table" aria-label="View Coffee Table Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-table" class="hotspot-overlay" popover="auto" style="position-area: top;">
        <header>Walnut Coffee Table</header>
        <p>Solid walnut wood coffee table with tapered legs and decorative centerpiece elements.</p>
    </div>

    <!-- 4. Wall Hanging Hotspot -->
    <button class="hotspot-dot" style="top: 35%; left: 85%;" popovertarget="hotspot-hanging" aria-label="View Wall Hanging Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-hanging" class="hotspot-overlay" popover="auto" style="position-area: bottom;">
        <header>Macrame Wall Hanging</header>
        <p>Hand-woven macrame textile art introducing organic textures to the gallery wall.</p>
    </div>

  <!-- Content truncated for brevity -->
```

### Star Rating
**Source**: `components/rating.md`
```html
<div class="rating-group">
  <div class="rating-display" style="--rating-fill: 86%;" aria-label="Rating: 4.3 out of 5"></div>
  <span class="rating-group__text">4.3 (128 reviews)</span>
</div>

<div class="rating-group" style="margin-top: 1rem;">
  <div class="rating-display" style="--rating-fill: 30%;" aria-label="Rating: 1.5 out of 5"></div>
  <span class="rating-group__text">1.5 (12 reviews)</span>
</div>

<div class="rating-group" style="margin-top: 1rem;">
  <div class="rating-display" style="--rating-fill: 100%;" aria-label="Rating: 5 out of 5"></div>
  <span class="rating-group__text">5.0 (1 review)</span>
</div>
```

### Skeleton
**Source**: `components/skeleton.md`
```html
<div class="demo-wrapper">
  <div class="demo-section">
    <h2>Skeleton</h2>

    <h3>Card skeleton</h3>
    <div class="skeleton-grid">
      <div class="skeleton-card" aria-busy="true" aria-label="Loading content">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-heading"></div>
        <div class="skeleton-card-body">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text-short"></div>
        </div>
        <div style="display:flex;gap:.5rem">
          <div class="skeleton skeleton-badge"></div>
          <div class="skeleton skeleton-button" style="width:80px;height:22px;border-radius:var(--radius-full)"></div>
        </div>
      </div>
      <div class="skeleton-card" aria-busy="true" aria-label="Loading content">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-heading" style="width:85%"></div>
        <div class="skeleton-card-body">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width:90%"></div>
          <div class="skeleton skeleton-text-short"></div>
        </div>
        <div style="display:flex;gap:.5rem">
          <div class="skeleton skeleton-badge"></div>
        </div>
      </div>
      <div class="skeleton-card" aria-busy="true" aria-label="Loading content">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-heading" style="width:60%"></div>
        <div class="skeleton-card-body">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text-short"></div>
        </div>
        <div style="display:flex;gap:.5rem">
          <div class="skeleton skeleton-badge"></div>
  <!-- Content truncated for brevity -->
```

### Bar Chart Race
**Source**: `components/bar-chart-race.md`
```html
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div 
      data-component="bar-chart-race" 
      data-src="/aurora-docs/data/pl_chart_race.json" 
      data-title="Premier League 24/25 Race"
      data-max-score="100"
      data-interval="1200"
      data-label-prefix="Matchweek ">
      <div class="skeleton-placeholder" style="height: 600px; width: 100%;">
        Loading chart...
      </div>
    </div>
  </div>
</div>
```

### Cards
**Source**: `components/cards.md`
```html
<article class="card" style="max-width: 300px;">
  <img src="https://picsum.photos/id/10/600/400" class="card__media" alt="Nature">
  <div class="card__content">
    <h3>Card Title</h3>
    <p>A flexible content container that can hold images, text, and actions.</p>
    <div style="margin-top: 1rem;">
      <button class="btn primary btn-sm">Read More</button>
    </div>
  </div>
</article>
```

### Splitter
**Source**: `components/splitter.md`
```html
<!-- Horizontal Split Overlay -->
<div class="splitter-container" data-splitter data-mode="reveal" data-orientation="horizontal" data-initial-pos="40" style="height: 400px; border-radius: var(--ds-sys-radius-card); background: #eee;">
  
  <div class="splitter__panel">
    <!-- Top Image (After) -->
    <img src="https://picsum.photos/id/111/1000/600" alt="New Car" loading="lazy">
    <span class="badge badge--solid badge--primary" style="position: absolute; top: 1rem; left: 1rem;">After</span>
  </div>

  <div class="splitter__handle" aria-label="Resize overlay">
    <div class="splitter__knob">
      <span class="material-symbols-outlined">drag_indicator</span>
    </div>
  </div>

  <div class="splitter__panel">
    <!-- Bottom Image (Before) -->
    <img src="https://picsum.photos/id/107/1000/600" alt="Old Car" style="filter: grayscale(100%);" loading="lazy">
    <span class="badge" style="position: absolute; top: 1rem; right: 1rem;">Before</span>
  </div>

</div>
```

### QR Scanner
**Source**: `components/qrscanner.md`
```html
<div class="qr-scanner-card">
    <div class="qr-scanner-container" 
         data-qr-fps="10" 
         data-qr-box="250">
    </div>
    
    <div class="qr-scanner-result">
        <!-- Javascript injects the decoded text here -->
    </div>
</div>
```

### Divider
**Source**: `components/divider.md`
```html
<div class="demo-wrapper">
  <div class="demo-section">
    <h2>Divider</h2>

    <h3>Horizontal (default)</h3>
    <div class="card-demo">
      <p class="section-content">This section contains introductory content about the topic.</p>
      <hr class="divider" role="separator" />
      <p class="section-content">This section contains supplementary information below the divider.</p>
      <hr class="divider divider-subtle" role="separator" />
      <p class="section-content" style="margin-bottom:0">Subtle variant — lower contrast for denser layouts.</p>
    </div>

    <h3>With label</h3>
    <div class="card-demo" style="display:flex;flex-direction:column;gap:0">
      <p class="section-content">Content above</p>
      <div class="divider-labeled" role="separator"><span class="divider-labeled-text" aria-hidden="true">OR</span></div>
      <p class="section-content">Alternative content below</p>
      <div class="divider-labeled" role="separator"><span class="divider-labeled-text" aria-hidden="true">This week</span></div>
      <p class="section-content" style="margin-bottom:0">Date-grouped list content</p>
    </div>

    <h3>Vertical</h3>
    <div class="card-demo">
      <div class="inline-row" style="gap:0">
        <span style="font-size:var(--text-sm);color:var(--color-text-secondary)">12 items</span>
        <span class="divider-vertical" role="separator" aria-orientation="vertical"></span>
        <span style="font-size:var(--text-sm);color:var(--color-text-secondary)">3 selected</span>
        <span class="divider-vertical" role="separator" aria-orientation="vertical"></span>
        <span style="font-size:var(--text-sm);color:var(--color-brand);font-weight:500;cursor:pointer">Clear all</span>
      </div>
    </div>
  </div>

</div>
```

## Forms

### Slider
**Source**: `forms/slider.md`
```html
<div class="field">
  <label class="field__label">Volume</label>
  <input type="range" class="range" min="0" max="100">
</div>
```

### Forms & Inputs
**Source**: `forms/forms.md`
```html
<section class="section">
      <h2 class="section-title">2. Fieldset Grouping</h2>
      
      <fieldset class="form-group">
        <legend>Shipping Address</legend>
        
        <div class="l-grid" style="--col-min: 200px; gap: 1rem;">
          <div class="field">
            <label class="field__label">Street</label>
            <input class="input" type="text" required>
          </div>
          <div class="field">
            <label class="field__label">City</label>
            <input class="input" type="text" required>
          </div>
        </div>
        
        <div class="l-grid" style="--col-min: 150px; gap: 1rem;">
          <div class="field">
            <label class="field__label">State</label>
            <input class="input" type="text" required>
          </div>
          <div class="field">
            <label class="field__label">Zip Code</label>
            <input class="input" type="text" inputmode="numeric" pattern="[0-9]*" required>
            <div class="field__error"><span>Numeric only.</span></div>
          </div>
        </div>
      </fieldset>
    </section>
```

### Selects
**Source**: `forms/selects.md`
```html
<div class="field">
  <label class="field__label">Choose Country</label>
  <select class="input">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>
```

### Inputs
**Source**: `forms/inputs.md`
```html
<section class="card" style="padding: 2rem;">
        <h3 style="margin-bottom: 1rem;">Checkboxes</h3>
        <div class="l-stack" style="gap: 1rem;">
          
          <label class="field--checkbox">
            <input type="checkbox" name="opt1">
            <span>Standard Checkbox</span>
          </label>

          <label class="field--checkbox">
            <input type="checkbox" name="opt2" checked>
            <span>Pre-selected</span>
          </label>

          <label class="field--checkbox">
            <input type="checkbox" disabled>
            <span>Disabled State</span>
          </label>
          
        </div>
      </section>
```

### Smart Date Range
**Source**: `forms/smart-date-range.md`
```html
<div class="l-stack gap-2">
    <!-- The Natural Language Input -->
    <div class="smart-input-container">
        <input type="text" 
               class="smart-date-range" 
               placeholder="e.g., 'last 2 days' or 'since monday'"
               data-hint-id="dt-hint-1"
               data-start-abs="demo1-start"
               data-end-abs="demo1-end">
               
        <button class="info-icon" onclick="window.showRangeHelp()" title="Help">
            <span class="material-symbols-outlined">help</span>
        </button>
    </div>
    
    <!-- The Live Validation Hint -->
    <div id="dt-hint-1" class="smart-date-range-hint">Type a phrase to calculate timestamps!</div>
    
    <div style="margin-top: 1rem; padding: 1rem; border: 1px dashed var(--ds-sys-color-border);">
        <strong>Resulting Hidden Submissions:</strong>
        <div class="l-cluster gap-4 mt-2">
            <div>
                <label>Start (ISO)</label>
                <input class="ds-input" type="text" id="demo1-start" readonly>
            </div>
            <div>
                <label>End (ISO)</label>
                <input class="ds-input" type="text" id="demo1-end" readonly>
            </div>
        </div>
    </div>
</div>
```

### Rich Text Editor
**Source**: `forms/editor.md`
```html
<div class="editor-wrapper">
  <!-- The Toolbar -->
  <div class="editor-toolbar">
    
    <!-- Text Styles -->
    <button class="editor-btn" data-command="bold" title="Bold (Cmd+B)">
      <span class="material-symbols-outlined">format_bold</span>
    </button>
    <button class="editor-btn" data-command="italic" title="Italic (Cmd+I)">
      <span class="material-symbols-outlined">format_italic</span>
    </button>
    <button class="editor-btn" data-command="underline" title="Underline (Cmd+U)">
      <span class="material-symbols-outlined">format_underlined</span>
    </button>
    
    <div class="editor-divider"></div>
    
    <!-- Heading Select -->
    <select class="editor-select" data-command="formatBlock">
      <option value="P">Paragraph</option>
      <option value="H1">Heading 1</option>
      <option value="H2">Heading 2</option>
      <option value="H3">Heading 3</option>
      <option value="BLOCKQUOTE">Quote</option>
    </select>
    
    <div class="editor-divider"></div>
    
    <!-- Lists -->
    <button class="editor-btn" data-command="insertUnorderedList" title="Bulleted List">
      <span class="material-symbols-outlined">format_list_bulleted</span>
    </button>
    <button class="editor-btn" data-command="insertOrderedList" title="Numbered List">
      <span class="material-symbols-outlined">format_list_numbered</span>
    </button>
    
    <div class="editor-divider"></div>
    
    <!-- Links -->
    <button class="editor-btn" data-command="createLink" title="Insert Link">
  <!-- Content truncated for brevity -->
```

### Range & Date
**Source**: `forms/range-date.md`
```html
<div class="field">
  <label class="field__label">Price Range ($)</label>
  <div class="range-slider">
    <div class="slider-track"></div>
    
    <input type="range" min="0" max="1000" value="250" id="slider-1" oninput="slideOne()">
    <input type="range" min="0" max="1000" value="750" id="slider-2" oninput="slideTwo()">
    
    <div class="slider-val" id="val-1">250</div>
    <div class="slider-val" id="val-2">750</div>
  </div>
</div>



<script>
  function slideOne() {
    const s1 = document.getElementById("slider-1");
    const s2 = document.getElementById("slider-2");
    const track = document.querySelector(".slider-track");
    const minGap = 50; // Minimum distance between handles

    if (parseInt(s2.value) - parseInt(s1.value) <= minGap) {
      s1.value = parseInt(s2.value) - minGap;
    }
    updateTrack(s1, s2, track);
  }

  function slideTwo() {
    const s1 = document.getElementById("slider-1");
    const s2 = document.getElementById("slider-2");
    const track = document.querySelector(".slider-track");
    const minGap = 50;

    if (parseInt(s2.value) - parseInt(s1.value) <= minGap) {
      s2.value = parseInt(s1.value) + minGap;
    }
    updateTrack(s1, s2, track);
  }

  <!-- Content truncated for brevity -->
```

### Media & Capture
**Source**: `forms/media-capture.md`
```html
<div class="field">
  <label class="field__label">Project Assets</label>
  
  <div class="drop-zone" id="drop-zone" onclick="document.getElementById('file-input').click()">
    <input type="file" id="file-input" hidden accept="image/*">
    
    <div class="dz-content" id="dz-content">
      <span class="material-symbols-outlined" style="font-size: 3rem; color: var(--ds-sys-color-primary);">cloud_upload</span>
      <p style="margin:0;"><strong>Click to upload</strong> or drag and drop</p>
      <p style="font-size: 0.85rem; opacity: 0.7;">SVG, PNG, JPG (max 2MB)</p>
    </div>

    <div class="dz-preview" id="dz-preview" style="display:none;">
      <img id="dz-img" src="" alt="Preview">
      <div class="dz-remove" onclick="event.stopPropagation(); removeFile()">
        <span class="material-symbols-outlined">delete</span>
      </div>
    </div>
  </div>
</div>



<script>
  const dz = document.getElementById('drop-zone');
  const input = document.getElementById('file-input');

  // Drag Events
  dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('is-dragover'); });
  dz.addEventListener('dragleave', () => dz.classList.remove('is-dragover'));
  dz.addEventListener('drop', (e) => {
    e.preventDefault();
    dz.classList.remove('is-dragover');
    if(e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  });

  // Input Change
  input.addEventListener('change', () => { if(input.files.length) handleFile(input.files[0]); });

  function handleFile(file) {
  <!-- Content truncated for brevity -->
```

### Grouping & Layouts
**Source**: `forms/grouping-layouts.md`
```html
<div class="l-stack" style="gap: 2rem;">

  <div class="field">
    <label class="field__label">Top Aligned (Default)</label>
    <input type="text" class="input" placeholder="Standard layout">
  </div>

  <div class="field form-horizontal">
    <label class="field__label">Left Aligned</label>
    <div class="field__body">
      <input type="text" class="input" placeholder="Label is on the left">
      <div class="field__hint">Good for dense data entry forms.</div>
    </div>
  </div>

  <div class="field form-horizontal form-horizontal--right">
    <label class="field__label">Right Aligned</label>
    <div class="field__body">
      <input type="text" class="input" placeholder="Label text aligns right">
    </div>
  </div>

</div>
```

### Text & Value
**Source**: `forms/text-value/_index.md`
```html
<div class="l-grid-text">
  
  <div class="field">
    <label>Full Name</label>
    <input type="text" placeholder="e.g. John Doe">
  </div>

  <div class="field">
    <label>Twitter (Prefix)</label>
    <div class="input-group">
      <span class="input-prefix">@</span>
      <input type="text" placeholder="username">
    </div>
  </div>

  <div class="field">
    <label>Weight (Suffix)</label>
    <div class="input-group">
      <input type="number" placeholder="0">
      <span class="input-suffix">kg</span>
    </div>
  </div>

</div>
```

### Choice & Selection
**Source**: `forms/choice-selection/_index.md`
```html
<div class="l-grid-choice">
  <div class="field">
    <label class="field__label">Native Select</label>
    <select class="input"><option>Option A</option><option>Option B</option></select>
  </div>
  
  <div class="field">
    <label class="field__label">CSS Styled (Custom Arrow)</label>
    <select class="input input--custom-base">
      <button>
        <selectedcontent></selectedcontent>
      </button>
      <option value="custom">Custom Look</option>
      <option value="opt2">Option 2</option>
    </select>
  </div>
</div>
```

## Navigation

### Mega Menu
**Source**: `navigation/mega-menu.md`
```html
<div style="min-height: 400px; padding-bottom: 2rem;">

<div class="nav-mega-wrapper" style="position: relative;">
  <nav class="nav-mega" aria-label="Mega Navigation">
    <ul>
      
      <li>
        <a href="#" class="nav-link">Home</a>
      </li>

      <!-- MEGA TRIGGER ITEM -->
      <li>
        <a href="#" class="nav-link" aria-haspopup="true" aria-expanded="false">
          Departments
          <span class="cascader"></span>
        </a>
        
        <!-- MEGA PANEL -->
        <div class="nav-mega-panel">
          <div class="nav-mega-grid cols-4">
            
            <!-- Column 1 -->
            <div class="nav-mega-column">
              <h4>Electronics</h4>
              <ul>
                <li><a href="#">Laptops & Desktops</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Audio & Headphones</a></li>
                <li><a href="#">Wearables</a></li>
              </ul>
            </div>

            <!-- Column 2 -->
            <div class="nav-mega-column">
              <h4>Home & Kitchen</h4>
              <ul>
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Decor</a></li>
                <li><a href="#">Appliances</a></li>
  <!-- Content truncated for brevity -->
```

### Flyout Hierarchy
**Source**: `navigation/flyout.md`
```html
<div style="min-height: 480px; position: relative;">

<nav class="nav-flyout" aria-label="Flyout Navigation">
  <ul>
    
    <li>
      <a href="#">
        Home
      </a>
    </li>

    <li>
      <a href="#" aria-haspopup="true">
        Products
        <span class="cascader"></span>
      </a>
      <ul>
        <li><a href="#">CRM Software</a></li>
        <li><a href="#">Marketing Hub</a></li>
        <li><a href="#">Sales Suite</a></li>
      </ul>
    </li>

    <li>
      <a href="#" aria-haspopup="true">
        Solutions
        <span class="cascader"></span>
      </a>
      <!-- LEVEL 2 -->
      <ul>
        <li><a href="#">By Industry</a></li>
        <li>
          <a href="#" aria-haspopup="true">
            By Use Case
            <span class="cascader"></span>
          </a>
          <!-- LEVEL 3 -->
          <ul>
            <li><a href="#">Lead Generation</a></li>
            <li><a href="#">Customer Service</a></li>
  <!-- Content truncated for brevity -->
```

### Bottom Navigation
**Source**: `navigation/bottom-navigation.md`
```html
<style>
/* Override just for the demo container */
.demo-nav-bottom-wrapper {
position: relative;
height: 300px;
width: 100%;
max-width: 400px;
min-width: 320px;
background: var(--ds-sys-color-surface-container-highest);
overflow: hidden;
border-radius: var(--ds-sys-radius-card);
}
.demo-nav-bottom-wrapper .nav-bottom {
position: absolute; 
}
</style>

<div class="demo-nav-bottom-wrapper">
<nav class="nav-bottom">
<a href="#home" class="nav-bottom__item is-active">
<span class="material-symbols-outlined">home</span>
<span class="nav-bottom__label">Home</span>
</a>
<a href="#explore" class="nav-bottom__item">
<span class="material-symbols-outlined">explore</span>
<span class="nav-bottom__label">Explore</span>
</a>

<div class="nav-bottom__fab-wrapper">
<button class="nav-bottom__fab" aria-label="Start New Workout">
<span class="material-symbols-outlined" style="font-size: 2rem;">add</span>
</button>
</div>

<a href="#stats" class="nav-bottom__item">
<span class="material-symbols-outlined">bar_chart</span>
<span class="nav-bottom__label">Stats</span>
</a>
<a href="#profile" class="nav-bottom__item">
<span class="material-symbols-outlined">person</span>
  <!-- Content truncated for brevity -->
```

### Pagination
**Source**: `navigation/pagination.md`
```html
<div style="padding: 1rem;">
  <nav aria-label="Search results">
    <ol class="pagination">
      <li>
        <button class="page-btn page-arrow" aria-disabled="true" tabindex="-1" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg> Prev
        </button>
      </li>
      <li><button class="page-btn" aria-current="page" aria-label="Page 1">1</button></li>
      <li><button class="page-btn" aria-label="Page 2">2</button></li>
      <li><button class="page-btn" aria-label="Page 3">3</button></li>
      <li><span class="page-ellipsis" aria-hidden="true">…</span></li>
      <li><button class="page-btn" aria-label="Page 12">12</button></li>
      <li>
        <button class="page-btn page-arrow" aria-label="Go to next page">
          Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </li>
    </ol>
  </nav>
  <p style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-subtle); margin-top: 0.875rem;">Showing 1–20 of 234 results</p>
</div>
```

### Side Navigation
**Source**: `navigation/side-nav.md`
```html
<nav class="nav-side" aria-label="Simple Side Navigation" style="height: auto; padding-bottom: 2rem;">
  <ul>
    <li>
      <a href="#" class="is-active">
        <span class="material-symbols-outlined ds-mr-2">dashboard</span>
        Dashboard
      </a>
    </li>
    <li>
      <a href="#">
        <span class="material-symbols-outlined ds-mr-2">monitoring</span>
        Analytics
      </a>
    </li>
    <li>
      <a href="#">
        <span class="material-symbols-outlined ds-mr-2">settings</span>
        Settings
      </a>
    </li>
  </ul>
</nav>
```

### Navigation Rail
**Source**: `navigation/nav-rail.md`
```html
<div style="height: 500px; display: flex; position: relative;">
  <!-- NAV RAIL COMPONENT -->
  <nav class="nav-rail" aria-label="Application Rail">
    <ul>
      <li>
        <a href="#" class="is-active" aria-current="page">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">dashboard</span>
            <span class="nav-rail-label">Dashboard</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">analytics</span>
            <span class="nav-rail-label">Analytics</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">group</span>
            <span class="nav-rail-label">Audiences</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">campaign</span>
            <span class="nav-rail-label">Campaigns</span>
          </div>
        </a>
      </li>
    </ul>

    <!-- Bottom Pushed Group -->
    <ul class="nav-rail-bottom-group">
  <!-- Content truncated for brevity -->
```

### Main Navigation
**Source**: `navigation/nav-main.md`
```html
<div style="position: relative; overflow: hidden; border-radius: var(--ds-sys-radius-card); border: 1px solid var(--ds-sys-color-border);">
<!-- NAV GLOBAL COMPOENT -->
<header class="nav-global">
  <div class="nav-global__container">
    
    <div class="nav-global__left">
      <a href="#" class="nav-global-brand">
        <span class="material-symbols-outlined">layers</span>
        Aurora
      </a>
      <ul class="nav-global__menu">
        <li><a href="#" class="nav-link is-active">Products</a></li>
        <li><a href="#" class="nav-link">Solutions</a></li>
        <li><a href="#" class="nav-link">Resources</a></li>
      </ul>
    </div>
    
    <div class="nav-global__right">
      <div class="search-group">
         <span class="material-symbols-outlined search-icon">search</span>
         <input type="text" class="search-input" aria-label="Search systems" placeholder="Search systems...">
      </div>
      <a href="#" class="nav-link">
        <span class="material-symbols-outlined">notifications</span>
      </a>
      <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--ds-sys-color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px; cursor: pointer;">AJ</div>
    </div>

  </div>
</header>
<!-- /NAV GLOBAL COMPOENT -->

<main style="padding: 4rem; background: var(--ds-sys-color-surface-container-low); min-height: 200px;">
  <p style="text-align: center; color: var(--ds-sys-color-on-surface-variant);">Main Application Content Area</p>
</main>
</div>
```

### Tabs
**Source**: `navigation/tabs.md`
```html
<div class="tabs" id="demo-tabs-line">
  <div class="tablist" role="tablist" aria-label="Project sections">
    <button class="tab" role="tab" id="demo-tab-l1" aria-selected="true" aria-controls="demo-panel-l1" tabindex="0">Overview</button>
    <button class="tab" role="tab" id="demo-tab-l2" aria-selected="false" aria-controls="demo-panel-l2" tabindex="-1">
      Activity <span class="tab-badge">4</span>
    </button>
    <button class="tab" role="tab" id="demo-tab-l3" aria-selected="false" aria-controls="demo-panel-l3" tabindex="-1">
      History
    </button>
    <button class="tab" role="tab" id="demo-tab-l4" aria-selected="false" aria-controls="demo-panel-l4" tabindex="-1">Settings</button>
    <button class="tab" role="tab" id="demo-tab-l5" aria-selected="false" aria-controls="demo-panel-l5" tabindex="-1" aria-disabled="true">Billing (Disabled)</button>
  </div>
  
  <div class="tabpanel" id="demo-panel-l1" role="tabpanel" aria-labelledby="demo-tab-l1" tabindex="0">
    <div style="padding: 1.5rem 0;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Project overview</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Aurora Design System is a token-driven system where HTML is static, but CSS variables control everything from colour to layout mechanics.</p>
    </div>
  </div>
  
  <div class="tabpanel" id="demo-panel-l2" role="tabpanel" aria-labelledby="demo-tab-l2" tabindex="0" hidden>
    <div style="padding: 1.5rem 0;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Recent activity</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">4 new updates since your last visit. Tokens page updated, Drawer component added, Grid system documented.</p>
    </div>
  </div>
  
  <div class="tabpanel" id="demo-panel-l3" role="tabpanel" aria-labelledby="demo-tab-l3" tabindex="0" hidden>
    <div style="padding: 1.5rem 0;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Version history</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">v1.0.0 — Initial release. Token system, core atoms, form components, and layout templates.</p>
    </div>
  </div>
  
  <div class="tabpanel" id="demo-panel-l4" role="tabpanel" aria-labelledby="demo-tab-l4" tabindex="0" hidden>
    <div style="padding: 1.5rem 0;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Settings</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Configure your default theme, preferred mode, and documentation display options.</p>
    </div>
  </div>
  <!-- Content truncated for brevity -->
```

### Stepper
**Source**: `navigation/stepper.md`
```html
<div class="stepper-wrapper" style="padding: 1rem;">
  <nav aria-label="Checkout progress">
    <ol class="stepper">
      <li class="step">
        <div class="step-row">
          <div class="step-indicator">1</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-labels"><div class="step-label">Cart</div></div>
      </li>
      <li class="step">
        <div class="step-row">
          <div class="step-indicator">2</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-labels"><div class="step-label">Details</div></div>
      </li>
      <li class="step">
        <div class="step-row">
          <div class="step-indicator">3</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-labels"><div class="step-label">Payment</div></div>
      </li>
      <li class="step">
        <div class="step-row">
          <div class="step-indicator">4</div>
        </div>
        <div class="step-labels"><div class="step-label">Review</div></div>
      </li>
    </ol>
  </nav>

  <div class="stepper-panels" style="margin-top: 2rem; background: var(--ds-sys-color-surface-raised); border: 1px solid var(--ds-sys-color-border-subtle); padding: 1.5rem; border-radius: var(--radius-lg);">
    <!-- Panel 1 -->
    <div class="stepper-panel" style="display: block;">
      <h3 style="margin-top: 0; font-size: 1.125rem;">Shopping Cart</h3>
      <p style="font-size: 0.85rem; color: var(--ds-sys-color-on-surface-subtle);">Review the 2 items in your cart.</p>
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1.5rem;">
        <button class="btn primary" data-stepper-next>Next: Details</button>
  <!-- Content truncated for brevity -->
```

## Overlays

### Modals
**Source**: `overlays/modals.md`
```html
<section class="section">
  <div class="l-grid">
    
    <article class="card">
      <div class="card__content">
        <h3>Standard Modal</h3>
        <p>The workhorse for forms and information.</p>
        <button class="btn primary" data-open-modal="modalStandard">Open Standard</button>
      </div>
    </article>

    <article class="card">
      <div class="card__content">
        <h3>Confirmation</h3>
        <p>Small, centered, high-focus for destructive actions.</p>
        <button class="btn primary" data-open-modal="modalAlert">Open Alert</button>
      </div>
    </article>

    <article class="card">
      <div class="card__content">
        <h3>Mobile Sheet</h3>
        <p>Slides from the bottom on mobile, centers on desktop.</p>
        <button class="btn primary" data-open-modal="modalSheet">Open Sheet</button>
      </div>
    </article>

  </div>
</section>
<section>
  <dialog id="modalStandard" class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Edit Profile</h2>
      <form method="dialog">
        <button class="modal__close"><span class="material-symbols-outlined">close</span></button>
      </form>
    </header>  
    <div class="modal__body">
      <p>Make changes to your profile here. Click save when you're done.</p>
      <div class="l-stack" style="margin-top: 1rem;">
  <!-- Content truncated for brevity -->
```

### Popover
**Source**: `overlays/popover.md`
```html
<div class="demo-wrapper">
  <!-- Info / rich content -->
  <div class="section" style="margin-bottom: 2.75rem;">
    <h3 style="font-family:var(--font-display);font-size:.6875rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:1.25rem;padding-bottom:.5rem;border-bottom:1px solid var(--color-border-subtle);">Info popover</h3>
    <div class="demo-row" style="display:flex; flex-wrap:wrap; gap:1.5rem; align-items:flex-end;">
      <div>
        <div class="demo-label" style="font-size: .75rem; color: var(--color-text-secondary); text-transform: uppercase; margin-bottom: .5rem; font-weight:500;">Feature explanation</div>
        <div class="pop-anchor">
          <button class="btn btn-ghost" id="trig-info" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop-info">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9z" clip-rule="evenodd"/></svg>
            What is smart sync?
          </button>
          <div class="popover" id="pop-info" role="dialog" aria-modal="false" aria-labelledby="pop-info-title" data-side="bottom">
            <div class="popover-arrow" aria-hidden="true"></div>
            <div class="info-body">
              <p id="pop-info-title" style="font-weight:600;font-size:.875rem;color:var(--color-text-primary);margin-bottom:.375rem;">Smart Sync</p>
              <p style="font-size:var(--text-sm);color:var(--color-text-secondary);line-height:1.6;">Smart Sync keeps your local files in sync with the cloud. Files marked <kbd class="kbd" style="display:inline-block;font-size:.6875rem;font-family:monospace;background:var(--color-surface-sunken);border:1px solid var(--color-border-default);border-radius:.25rem;padding:.0625rem .375rem;color:var(--color-text-primary);">online-only</kbd> don't take up local disk space until opened.</p>
              <p style="margin-top:.5rem"><a href="#" style="color:var(--color-brand);text-decoration:none;font-weight:500;">Learn more in the docs ↗</a></p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="demo-label" style="font-size: .75rem; color: var(--color-text-secondary); text-transform: uppercase; margin-bottom: .5rem; font-weight:500;">User card</div>
        <div class="pop-anchor">
          <button class="btn btn-ghost" id="trig-user" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop-user">
            <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:.625rem;font-weight:700;">SC</div>
            Sarah Chen
          </button>
          <div class="popover" id="pop-user" role="dialog" aria-modal="false" aria-label="User profile" data-side="bottom">
            <div class="popover-arrow" aria-hidden="true"></div>
            <div class="user-card">
              <div class="user-avatar">SC</div>
              <div class="user-name">Sarah Chen</div>
              <div class="user-role">Senior Designer · Acme Corp</div>
              <div class="user-stats">
                <div class="user-stat"><div class="user-stat-val">142</div><div class="user-stat-label">Components</div></div>
                <div class="user-stat"><div class="user-stat-val">28</div><div class="user-stat-label">Reviews</div></div>
                <div class="user-stat"><div class="user-stat-val">4.9</div><div class="user-stat-label">Rating</div></div>
  <!-- Content truncated for brevity -->
```

### Dropdown Menu
**Source**: `overlays/dropdown.md`
```html
<div style="display: flex; gap: 1rem; flex-wrap: wrap; padding-bottom: 180px;">
  <!-- Basic actions -->
  <div class="dropdown-wrapper">
    <button aria-haspopup="menu" aria-expanded="false" aria-controls="menu-actions" style="display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1rem; border-radius: var(--ds-sys-radius-md); border: 1.5px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); color: var(--ds-sys-color-text); cursor: pointer; font-size: 0.875rem; font-weight: 500;">
      Actions
      <svg style="width: 14px; height: 14px; transition: transform 200ms cubic-bezier(0,0,.2,1);" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <ul class="dropdown-menu" id="menu-actions" role="menu">
      <li class="menu-item" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
        <span class="item-label">New item</span>
        <span class="item-shortcut">⌘N</span>
      </li>
      <li class="menu-item" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M11 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" stroke="currentColor" stroke-width="1.5"/><path d="M9 2V1M7 2V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <span class="item-label">Duplicate</span>
        <span class="item-shortcut">⌘D</span>
      </li>
      <li class="menu-item" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-11 11M13.5 13.5l-11-11" stroke="currentColor" stroke-width="0"/><path d="M3 8h10M8 3v10" stroke="currentColor" stroke-width="0"/><path d="M10 2H6M2 6v4M14 6v4M6 14h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M2 6a4 4 0 0 1 4-4M14 6a4 4 0 0 0-4-4M2 10a4 4 0 0 0 4 4M14 10a4 4 0 0 1-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
        <span class="item-label">Share</span>
      </li>
      <li class="menu-separator" role="separator"></li>
      <li class="menu-item is-destructive" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M6 4V3h4v1M7 7v5M9 7v5M5 4l.5 8h5L11 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Delete</span>
      </li>
    </ul>
  </div>

  <!-- More options (icon trigger) -->
  <div class="dropdown-wrapper">
    <button aria-haspopup="menu" aria-expanded="false" aria-controls="menu-more" aria-label="More options" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: var(--ds-sys-radius-md); border: 1.5px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); color: var(--ds-sys-color-text); cursor: pointer;">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.25"/><circle cx="8" cy="8" r="1.25"/><circle cx="8" cy="13" r="1.25"/></svg>
    </button>
    <ul class="dropdown-menu align-end" id="menu-more" role="menu">
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M2 8s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/></svg><span class="item-label">View</span></li>
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M11 2l3 3-8 8H3v-3L11 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg><span class="item-label">Edit</span><span class="item-shortcut">⌘E</span></li>
      <li class="menu-separator" role="separator"></li>
      <li class="menu-item" role="menuitem" tabindex="-1" aria-disabled="true"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="item-label">Export</span></li>
  <!-- Content truncated for brevity -->
```

### Drawer / Side Panel
**Source**: `overlays/drawer.md`
```html
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <button class="btn btn-primary" data-drawer-target="demo-drawer-right">Right (default)</button>
  <button class="btn btn-secondary" data-drawer-target="demo-drawer-left">Left navigation</button>
  <button class="btn btn-secondary" data-drawer-target="demo-drawer-bottom">Bottom sheet</button>
</div>

<!-- Right Drawer -->
<div class="drawer-panel" id="demo-drawer-right" data-position="right" role="dialog" aria-modal="true" aria-labelledby="title-right">
  <div class="drawer-header">
    <div>
        <div class="drawer-title" id="title-right">Right Drawer</div>
        <div class="drawer-subtitle">Default position</div>
    </div>
    <button class="drawer-close" aria-label="Close drawer">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="drawer-body">
    <p style="color:var(--ds-sys-color-on-surface-variant); font-size:.9rem; line-height:1.6">This is a right-anchored drawer — the default position. Use it for settings panels, filter configurations, and detail views that keep the main content visible in context.</p>
  </div>
  <div class="drawer-footer">
    <button class="btn btn-secondary btn-sm drawer-close">Cancel</button>
    <button class="btn btn-primary btn-sm drawer-close">Apply</button>
  </div>
</div>

<!-- Left Drawer -->
<div class="drawer-panel" id="demo-drawer-left" data-position="left" role="dialog" aria-modal="true" aria-labelledby="title-left">
  <div class="drawer-header">
    <div class="drawer-title" id="title-left">Left Navigation</div>
    <button class="drawer-close" aria-label="Close drawer">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="drawer-body">
    <p style="color:var(--ds-sys-color-on-surface-variant); font-size:.9rem; line-height:1.6">Left drawers are best suited for primary application navigation menus (like hamburger menus) or table of contents features.</p>
  </div>
</div>

<!-- Bottom Drawer -->
  <!-- Content truncated for brevity -->
```

### Command Palette
**Source**: `overlays/command-palette.md`
```html
<div class="demo-wrapper" style="padding: 2rem; border-radius: var(--radius-xl); background: var(--color-surface-base); border: 1px solid var(--color-border-subtle);">
  <div style="margin-bottom: 2rem;">
    <h2 style="margin-top: 0;">Command Palette</h2>
    <p class="lead" style="color: var(--color-text-secondary);">Keyboard-driven universal search for actions, pages, and data. Press <kbd class="cmd-badge">⌘K</kbd> or click below to open.</p>
  </div>

  <div class="open-hint" onclick="openCmd()" role="button" tabindex="0" aria-label="Open command palette" style="display:flex;align-items:center;gap:.75rem;padding:1.25rem 1.5rem;background:var(--color-surface-raised);border:1.5px dashed var(--color-border-default);border-radius:var(--radius-xl);cursor:pointer;transition:border-color 150ms,background 150ms;margin-bottom:2rem;">
    <svg class="cmd-search-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" style="color:var(--color-text-secondary);flex-shrink:0;"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.75"/><path d="M15 15l3 3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
    <span class="open-hint-text" style="flex:1;color:var(--color-text-secondary);font-size:var(--text-sm);">Search commands and pages…</span>
    <div class="open-hint-keys" style="display:flex;gap:.25rem;"><kbd class="cmd-badge" style="font-family:var(--font-mono);font-size:.6875rem;background:var(--color-surface-sunken);border:1px solid var(--color-border-default);border-radius:.25rem;padding:.1875rem .4375rem;color:var(--color-text-secondary);">⌘</kbd><kbd class="cmd-badge" style="font-family:var(--font-mono);font-size:.6875rem;background:var(--color-surface-sunken);border:1px solid var(--color-border-default);border-radius:.25rem;padding:.1875rem .4375rem;color:var(--color-text-secondary);">K</kbd></div>
  </div>

  <div class="feature-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
    <div class="feature-card" style="background:var(--color-surface-raised);border:1px solid var(--color-border-subtle);border-radius:var(--radius-md);padding:1rem;">
      <strong style="display:block;margin-bottom:.25rem;font-size:var(--text-sm);color:var(--color-text-primary);">Fuzzy search</strong>
      <span style="color:var(--color-text-secondary);font-size:var(--text-xs);">Characters don't need to be adjacent — "tb" matches "Token Builder"</span>
    </div>
    <div class="feature-card" style="background:var(--color-surface-raised);border:1px solid var(--color-border-subtle);border-radius:var(--radius-md);padding:1rem;">
      <strong style="display:block;margin-bottom:.25rem;font-size:var(--text-sm);color:var(--color-text-primary);">Match highlighting</strong>
      <span style="color:var(--color-text-secondary);font-size:var(--text-xs);">Matched characters highlighted in results to build trust</span>
    </div>
    <div class="feature-card" style="background:var(--color-surface-raised);border:1px solid var(--color-border-subtle);border-radius:var(--radius-md);padding:1rem;">
      <strong style="display:block;margin-bottom:.25rem;font-size:var(--text-sm);color:var(--color-text-primary);">Grouped results</strong>
      <span style="color:var(--color-text-secondary);font-size:var(--text-xs);">Recent, Pages, Actions, and Data results in labelled sections</span>
    </div>
    <div class="feature-card" style="background:var(--color-surface-raised);border:1px solid var(--color-border-subtle);border-radius:var(--radius-md);padding:1rem;">
      <strong style="display:block;margin-bottom:.25rem;font-size:var(--text-sm);color:var(--color-text-primary);">Full keyboard nav</strong>
      <span style="color:var(--color-text-secondary);font-size:var(--text-xs);">↑↓ to move, Enter to activate, Esc to close</span>
    </div>
  </div>
</div>
```
