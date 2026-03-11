---
title: "Tabs"
description: "Navigate between related content panels without leaving the page."
category: "Navigation"
menu:
  main:
    parent: "nav-page"
---

Tabs organise related content into discrete panels, allowing the user to switch between views without leaving the page. Only one panel is visible at a time.

---

## Live Demos

*Note: The `tabs.js` controller automatically binds any container with the `.tabs` class. Ensure you utilize the proper ARIA roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`) as shown below.*

### 1. Line Tabs (Default)
The standard tab style. An underline indicator marks the active tab. Used in most contexts: detail views, settings pages, data tables.

{{< demo >}}
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
  
  <div class="tabpanel" id="demo-panel-l5" role="tabpanel" aria-labelledby="demo-tab-l5" tabindex="0" hidden>
    <div style="padding: 1.5rem 0;">Billing content</div>
  </div>
</div>
{{< /demo >}}

### 2. Pill Tabs
Tabs rendered as filled pill buttons. Used in compact filter contexts (e.g. toggling between chart views), or where tabs need to float without a structural boundary below them.

{{< demo >}}
<div class="tabs tabs-pill" id="demo-tabs-pill">
  <div class="tablist" role="tablist" aria-label="Time range">
    <button class="tab" role="tab" id="demo-tab-p1" aria-selected="true" aria-controls="demo-panel-p1" tabindex="0">7 days</button>
    <button class="tab" role="tab" id="demo-tab-p2" aria-selected="false" aria-controls="demo-panel-p2" tabindex="-1">30 days</button>
    <button class="tab" role="tab" id="demo-tab-p3" aria-selected="false" aria-controls="demo-panel-p3" tabindex="-1">90 days</button>
    <button class="tab" role="tab" id="demo-tab-p4" aria-selected="false" aria-controls="demo-panel-p4" tabindex="-1">All time</button>
  </div>
  
  <div class="tabpanel" id="demo-panel-p1" role="tabpanel" aria-labelledby="demo-tab-p1" tabindex="0">
    <div style="color: var(--ds-sys-color-on-surface-variant);">Last 7 days: 1,284 visits, 342 conversions, 26.6% rate.</div>
  </div>
  <div class="tabpanel" id="demo-panel-p2" role="tabpanel" aria-labelledby="demo-tab-p2" tabindex="0" hidden>
    <div style="color: var(--ds-sys-color-on-surface-variant);">Last 30 days: 5,830 visits, 1,203 conversions, 20.6% rate.</div>
  </div>
  <div class="tabpanel" id="demo-panel-p3" role="tabpanel" aria-labelledby="demo-tab-p3" tabindex="0" hidden>
    <div style="color: var(--ds-sys-color-on-surface-variant);">Last 90 days: 16,441 visits, 3,102 conversions, 18.9% rate.</div>
  </div>
  <div class="tabpanel" id="demo-panel-p4" role="tabpanel" aria-labelledby="demo-tab-p4" tabindex="0" hidden>
    <div style="color: var(--ds-sys-color-on-surface-variant);">All time: 84,200 visits, 14,830 conversions, 17.6% rate.</div>
  </div>
</div>
{{< /demo >}}

### 3. Contained Tabs
Tabs with a background container — the active tab has a raised card appearance. Used when tabs are placed on a surface that already has a background (e.g. inside a card or modal).

{{< demo >}}
<div class="tabs tabs-contained" id="demo-tabs-contained">
  <div class="tablist" role="tablist" aria-label="User profile">
    <button class="tab" role="tab" id="demo-tab-c1" aria-selected="true" aria-controls="demo-panel-c1" tabindex="0">Profile</button>
    <button class="tab" role="tab" id="demo-tab-c2" aria-selected="false" aria-controls="demo-panel-c2" tabindex="-1">Security</button>
    <button class="tab" role="tab" id="demo-tab-c3" aria-selected="false" aria-controls="demo-panel-c3" tabindex="-1">Notifications <span class="tab-badge" style="margin-left:8px;">2</span></button>
  </div>
  
  <div class="tabpanel" id="demo-panel-c1" role="tabpanel" aria-labelledby="demo-tab-c1" tabindex="0">
    <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Profile information</h3>
    <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Update your display name, avatar, and public-facing details.</p>
  </div>
  <div class="tabpanel" id="demo-panel-c2" role="tabpanel" aria-labelledby="demo-tab-c2" tabindex="0" hidden>
    <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Security settings</h3>
    <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Manage your password, two-factor authentication, and active sessions.</p>
  </div>
  <div class="tabpanel" id="demo-panel-c3" role="tabpanel" aria-labelledby="demo-tab-c3" tabindex="0" hidden>
    <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Notification preferences</h3>
    <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">2 unread notification settings need your attention.</p>
  </div>
</div>
{{< /demo >}}

### 4. Vertical Tabs
Tablist rendered vertically on the left side. Used in settings pages where there are many tab sections.

{{< demo >}}
<div class="tabs tabs-vertical" id="demo-tabs-vert" style="min-height: 200px;">
  <div class="tablist" role="tablist" aria-label="Settings sections" aria-orientation="vertical">
    <button class="tab" role="tab" id="demo-tab-v1" aria-selected="true" aria-controls="demo-panel-v1" tabindex="0">General</button>
    <button class="tab" role="tab" id="demo-tab-v2" aria-selected="false" aria-controls="demo-panel-v2" tabindex="-1">Appearance</button>
    <button class="tab" role="tab" id="demo-tab-v3" aria-selected="false" aria-controls="demo-panel-v3" tabindex="-1">Integrations</button>
    <button class="tab" role="tab" id="demo-tab-v4" aria-selected="false" aria-controls="demo-panel-v4" tabindex="-1">Team</button>
  </div>
  
  <div class="tabpanel" id="demo-panel-v1" role="tabpanel" aria-labelledby="demo-tab-v1" tabindex="0">
    <div style="padding-left: 1.5rem;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">General settings</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Project name, description, and default language preferences.</p>
    </div>
  </div>
  <div class="tabpanel" id="demo-panel-v2" role="tabpanel" aria-labelledby="demo-tab-v2" tabindex="0" hidden>
    <div style="padding-left: 1.5rem;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Appearance</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Theme selection, density, and visual customisation options.</p>
    </div>
  </div>
  <div class="tabpanel" id="demo-panel-v3" role="tabpanel" aria-labelledby="demo-tab-v3" tabindex="0" hidden>
    <div style="padding-left: 1.5rem;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Integrations</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Connect third-party tools and services to your workspace.</p>
    </div>
  </div>
  <div class="tabpanel" id="demo-panel-v4" role="tabpanel" aria-labelledby="demo-tab-v4" tabindex="0" hidden>
    <div style="padding-left: 1.5rem;">
      <h3 style="margin-bottom: 0.5rem; color: var(--ds-sys-color-on-surface);">Team management</h3>
      <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9375rem;">Invite members, manage roles, and configure permissions.</p>
    </div>
  </div>
</div>
{{< /demo >}}

---

## Anatomy

```
┌─────────┬─────────┬─────────┐
│  Tab 1  │  Tab 2  │  Tab 3  │   ← Tablist
└─────────┴─────────┴─────────┘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ← Active indicator
┌─────────────────────────────┐
│                             │
│  Tab panel content          │   ← Tabpanel
│                             │
└─────────────────────────────┘
```

| Part | Element | Token |
|---|---|---|
| Tablist container | `div[role="tablist"]` | `border-bottom` |
| Tab | `button[role="tab"]` | `--ds-sys-color-on-surface-variant` → `--ds-sys-color-on-surface` when active |
| Active indicator | `::after` pseudo on active tab | `--ds-sys-color-primary` |
| Tab badge | `span.tab-badge` | Primary container colors |
| Tab panel | `div[role="tabpanel"]` | Hidden by default unless active |

---

## Behaviour

- **Activation:** Activating a tab immediately shows its panel and hides the others. There is no pending state.
- **Keyboard:**
    - `ArrowLeft` / `ArrowRight` moves focus and activates tabs within horizontal lists.
    - `ArrowUp` / `ArrowDown` moves focus and activates tabs within vertical lists.
    - `Home` / `End` jumps to the first/last tab.
    - `Tab` moves focus into the active panel.
- **Automatic activation:** Focus moves to a tab → its panel activates immediately. This is the ARIA-recommended pattern for tabs where content loads instantly.

---

## Accessibility

The `.tabs` JavaScript controller handles all of the complex interactive ARIA requirements out of the box, but you must ensure your markup contains the foundational attributes:

| Requirement | Implementation |
|---|---|
| Container role | `role="tablist"` on the tab container |
| Orientation | `aria-orientation="vertical"` on vertical tablists |
| Tab role | `role="tab"` on each tab button |
| Panel role | `role="tabpanel"` on each panel |
| Selected state | `aria-selected="true"` on active tab |
| Panel association | `aria-controls="panel-id"` on each tab pointing to its panel |
| Tab association | `aria-labelledby="tab-id"` on each panel pointing to its tab |
| Panel focusability | Hidden panels receive the `hidden` attribute automatically. |

---

## Usage guidelines

### Do
- Use tabs to organise content at the same level of hierarchy.
- Keep tab labels short — 1–3 words is ideal.
- Show a count badge on tabs that contain enumerable items (e.g. "Messages 3").
- Always ensure the first tab is selected by default — never show an empty panel.

### Don't
- Don't use tabs for sequential steps — use a Stepper Wizard instead.
- Don't use tabs if the user needs to compare content across panels simultaneously — use a split-screen view.
- Don't disable all tabs. If no content is available, show an empty state inside the active panel.
- Don't nest tabs inside tabs.
- Don't use tabs for primary page navigation — use the global Navigation pattern.
