---
title: "Popover"
menu:
  main:
    parent: "components-simple"
---

{{< demo >}}
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
              </div>
            </div>
            <div class="popover-footer">
              <button class="btn btn-ghost btn-sm" data-close-popover>Message</button>
              <button class="btn btn-brand btn-sm" data-close-popover>View profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Form popover -->
  <div class="section" style="margin-bottom: 2.75rem;">
    <h3 style="font-family:var(--font-display);font-size:.6875rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:1.25rem;padding-bottom:.5rem;border-bottom:1px solid var(--color-border-subtle);">Form popover</h3>
    <div class="demo-row" style="display:flex; flex-wrap:wrap; gap:1.5rem; align-items:flex-end;">
      <div>
        <div class="demo-label" style="font-size: .75rem; color: var(--color-text-secondary); text-transform: uppercase; margin-bottom: .5rem; font-weight:500;">Quick add</div>
        <div class="pop-anchor">
          <button class="btn btn-brand" id="trig-form" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop-form">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Add tag
          </button>
          <div class="popover" id="pop-form" role="dialog" aria-modal="false" aria-labelledby="pop-form-title" data-side="bottom" data-align="start">
            <div class="popover-header">
              <p class="popover-title" id="pop-form-title">New tag</p>
              <p class="popover-subtitle">Add a label to this item</p>
            </div>
            <div class="popover-body">
              <div class="form-group" style="margin-bottom:.875rem;">
                <label class="form-label" style="display:block;font-size:.8rem;font-weight:500;color:var(--color-text-primary);margin-bottom:.3rem;">Tag name</label>
                <input class="form-input" id="tag-name" type="text" placeholder="e.g. urgent, blocked…" style="width:100%;padding:.4375rem .625rem;font-family:var(--font-sans);font-size:.875rem;color:var(--color-text-primary);background:var(--color-surface-sunken);border:1.5px solid var(--color-border-default);border-radius:var(--radius-md);" />
              </div>
              <div class="form-group">
                <label class="form-label" style="display:block;font-size:.8rem;font-weight:500;color:var(--color-text-primary);margin-bottom:.3rem;">Colour</label>
                <div class="color-grid">
                  <span class="color-swatch" style="background:#ef4444"></span>
                  <span class="color-swatch" style="background:#f59e0b"></span>
                  <span class="color-swatch" style="background:#22c55e"></span>
                  <span class="color-swatch selected" style="background:#3b82f6; border-color:var(--color-neutral-900);"></span>
                  <span class="color-swatch" style="background:#8b5cf6"></span>
                  <span class="color-swatch" style="background:#ec4899"></span>
                  <span class="color-swatch" style="background:#6b7280"></span>
                </div>
              </div>
            </div>
            <div class="popover-footer">
              <button class="btn btn-ghost btn-sm" data-close-popover>Cancel</button>
              <button class="btn btn-brand btn-sm" data-close-popover>Create tag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Confirmation popover -->
  <div class="section" style="margin-bottom: 2.75rem;">
    <h3 style="font-family:var(--font-display);font-size:.6875rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:1.25rem;padding-bottom:.5rem;border-bottom:1px solid var(--color-border-subtle);">Confirmation popover</h3>
    <div class="demo-row" style="display:flex; flex-wrap:wrap; gap:1.5rem; align-items:flex-end;">
      <div>
        <div class="demo-label" style="font-size: .75rem; color: var(--color-text-secondary); text-transform: uppercase; margin-bottom: .5rem; font-weight:500;">Destructive action</div>
        <div class="pop-anchor">
          <button class="btn btn-danger" id="trig-confirm" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop-confirm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M6 4V3h4v1M7 7v5M9 7v5M5 4l.5 8h5L11 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Delete workspace
          </button>
          <div class="popover" id="pop-confirm" role="dialog" aria-modal="false" aria-labelledby="pop-confirm-title" data-side="bottom" data-align="start" style="min-width:260px">
            <div class="popover-arrow" aria-hidden="true"></div>
            <div class="confirm-body">
              <div class="confirm-icon">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clip-rule="evenodd"/></svg>
              </div>
              <p id="pop-confirm-title" style="font-weight:600;font-size:.875rem;color:var(--color-text-primary);">Delete workspace?</p>
              <p style="font-size:var(--text-sm);color:var(--color-text-secondary);line-height:1.5;margin-top:.375rem;">This will permanently delete all projects and data. This action cannot be undone.</p>
            </div>
            <div class="popover-footer">
              <button class="btn btn-ghost btn-sm" data-close-popover>Cancel</button>
              <button class="btn btn-danger btn-sm" data-close-popover>Delete</button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div class="demo-label" style="font-size: .75rem; color: var(--color-text-secondary); text-transform: uppercase; margin-bottom: .5rem; font-weight:500;">Colour picker</div>
        <div class="pop-anchor">
          <button class="btn btn-ghost" id="trig-color" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop-color" style="gap:.625rem">
            <span id="colorPreview" style="width:16px;height:16px;border-radius:3px;background:#3b82f6;display:inline-block;border:1px solid rgba(0,0,0,.12)"></span>
            Label colour
          </button>
          <div class="popover" id="pop-color" role="dialog" aria-modal="false" aria-label="Colour picker" data-side="bottom">
            <div class="popover-arrow" aria-hidden="true"></div>
            <div class="color-grid">
              <span class="color-swatch" style="background:#ef4444"></span>
              <span class="color-swatch" style="background:#f97316"></span>
              <span class="color-swatch" style="background:#f59e0b"></span>
              <span class="color-swatch" style="background:#eab308"></span>
              <span class="color-swatch" style="background:#84cc16"></span>
              <span class="color-swatch" style="background:#22c55e"></span>
              <span class="color-swatch" style="background:#10b981"></span>
              <span class="color-swatch" style="background:#14b8a6"></span>
              <span class="color-swatch" style="background:#06b6d4"></span>
              <span class="color-swatch selected" style="background:#3b82f6; border-color:var(--color-neutral-900);"></span>
              <span class="color-swatch" style="background:#6366f1"></span>
              <span class="color-swatch" style="background:#8b5cf6"></span>
              <span class="color-swatch" style="background:#a855f7"></span>
              <span class="color-swatch" style="background:#ec4899"></span>
              <span class="color-swatch" style="background:#f43f5e"></span>
              <span class="color-swatch" style="background:#78716c"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}


## Contents

1. [Anatomy](#anatomy)
2. [Variants](#variants)
3. [Positioning](#positioning)
4. [Behaviour](#behaviour)
5. [Accessibility](#accessibility)
6. [Tokens](#tokens)
7. [Usage guidelines](#usage-guidelines)

---

## Anatomy

```
         [Trigger button]
                │
       ┌────────▼────────────┐
       │ ▲                   │  ← Arrow (optional)
       │  Title (optional)   │
       │                     │
       │  Content area       │
       │  (interactive)      │
       │                     │
       │  [Cancel] [Confirm] │  ← Actions (optional)
       └─────────────────────┘
```

| Part | Element | Token |
|---|---|---|
| Panel | `div[role="dialog"]` | `--color-surface-raised`, `--shadow-xl`, `--radius-lg` |
| Arrow | `span.popover-arrow` | Matches `--color-surface-raised`, bordered |
| Header | `div.popover-header` | Optional, `--color-border-subtle` bottom border |
| Title | `p.popover-title` | `--color-text-primary`, `--font-weight-semibold` |
| Body | `div.popover-body` | Padding `--spacing-component-md` |
| Footer | `div.popover-footer` | Optional, `--color-border-subtle` top border |
| Close | `button.popover-close` | Optional, `--color-text-secondary` |

---

## Variants

| Variant | Description | Example use |
|---|---|---|
| **Default** | Triggered by click, contains interactive content | Edit form, confirmation |
| **Info** | Static rich content, no interactive elements (but user-dismissable) | Feature explanation, help text |
| **Form** | Contains a small form with submit/cancel actions | Quick-add, inline edit |
| **Confirmation** | Compact confirm/cancel for destructive actions | Delete confirmation |
| **Menu** | Contains a custom action list (richer than Dropdown) | Colour picker, emoji selector |

---

## Positioning

The popover positions itself relative to its trigger using a priority cascade. The side and alignment can be set explicitly or left to auto-detect.

### Sides (preferred order)
`bottom` → `top` → `right` → `left`

The popover flips to the opposite side if there is insufficient space.

### Alignment
```
data-side="bottom"   data-align="start|center|end"
data-side="top"
data-side="right"    data-align="start|center|end"  (top/bottom of trigger)
data-side="left"
```

### Arrow
The arrow always points toward the trigger element. If the popover shifts to avoid viewport edges, the arrow shifts accordingly along the panel edge.

### Offset
Default offset between trigger and panel: `8px` (configurable via `--popover-offset`).

---

## Behaviour

- **Opening:** Click on the trigger. The popover appears with a fade + slight scale animation (`0.95 → 1`), `--duration-fast`, `--ease-out`.
- **Closing:**
  - Click outside the popover (click-away)
  - Press `Escape`
  - Activate a closing action button inside the popover
  - Trigger re-click (toggle)
- **Focus management:** On open, focus moves to the first interactive element inside the popover (or the close button if one exists and nothing else is focusable). On close, focus returns to the trigger.
- **Scroll:** The popover repositions itself when the page scrolls to remain anchored to its trigger. If the trigger scrolls off screen, the popover closes.
- **One at a time:** Only one popover can be open at a time. Opening a second popover closes the first.
- **Animation exit:** Reverse of entry — fade + scale out, `--duration-fast`, `--ease-in`.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Role | `role="dialog"` on the panel |
| Label | `aria-label` or `aria-labelledby` pointing to the title |
| Modal flag | `aria-modal="false"` — popovers are non-modal (click-away dismisses) |
| Trigger | `aria-haspopup="dialog"` and `aria-expanded` on trigger |
| Controlled by | `aria-controls` on trigger pointing to panel `id` |
| Focus trap | **Soft** — Tab cycles within the popover, but Shift+Tab from the first element returns to the trigger (not a hard trap) |
| Escape | Closes popover and returns focus to trigger |
| Arrow | Decorative — `aria-hidden="true"` |
| No colour alone | Title + content communicates intent |

> **Popover vs Dialog:** Popovers use `aria-modal="false"` and a soft focus trap. If content requires a hard focus trap and backdrop, use a Modal instead.

---

## Tokens

| Token | Default | Description |
|---|---|---|
| `--popover-bg` | `var(--color-surface-raised)` | Panel background |
| `--popover-border` | `var(--color-border-subtle)` | Panel border |
| `--popover-shadow` | `var(--shadow-xl)` | Panel shadow |
| `--popover-radius` | `var(--radius-lg)` | Panel corner radius |
| `--popover-min-width` | `200px` | Minimum panel width |
| `--popover-max-width` | `320px` | Maximum panel width |
| `--popover-padding` | `var(--space-4)` | Body padding |
| `--popover-offset` | `8px` | Distance between trigger and panel |
| `--popover-arrow-size` | `8px` | Arrow dimensions |
| `--popover-z-index` | `var(--z-popover)` | Stack level (500) |
| `--popover-duration-open` | `var(--duration-fast)` | Open animation duration |
| `--popover-duration-close` | `var(--duration-fast)` | Close animation duration |

---

## Usage guidelines

### Do
- Use a Popover for lightweight tasks that benefit from staying in context — quick edits, short forms, confirmations.
- Always give the popover a title when its content isn't self-evident from the trigger.
- Use the Confirmation variant for irreversible actions (delete, revoke, disconnect) instead of a full Modal.
- Keep popovers compact — if the content needs scrolling, use a Drawer instead.

### Don't
- Don't use a Popover for content that must be read before the user can continue — use a Modal.
- Don't trigger popovers on hover — they are interactive and must be click-triggered.
- Don't put a popover inside a popover.
- Don't use a popover for non-interactive information — use a [Tooltip](/aurora-docs/molecules/tooltips/) instead.

### Popover vs Tooltip vs Dropdown Menu vs Modal

| | Popover | Tooltip | Dropdown Menu | Modal |
|---|---|---|---|---|
| Interactive content | Yes | No | Actions only | Yes |
| Trigger | Click | Hover / focus | Click | Click |
| ARIA role | `dialog` | `tooltip` | `menu` | `dialog` |
| Focus trapping | Soft | None | Within menu | Hard |
| Backdrop | No | No | No | Yes |
| Blocks page | No | No | No | Yes |
