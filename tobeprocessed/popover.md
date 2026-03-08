# Popover

> **Category:** Overlays · **Status:** Proposed · **Last updated:** 2026-03-07

A Popover is an interactive floating panel anchored to a trigger element. Unlike a Tooltip (which is passive and informational), a Popover contains interactive content — forms, actions, rich text, or selection controls.

---

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
