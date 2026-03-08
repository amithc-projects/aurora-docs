# Accessibility Guidelines

> **Category:** Governance · **Status:** Approved · **Last updated:** 2026-03-07

Aurora targets **WCAG 2.2 Level AA** conformance across all components. This document defines the standards, patterns, and testing processes that every Aurora component must meet before shipping.

---

## Contents

1. [Standards target](#standards-target)
2. [Colour & contrast](#colour--contrast)
3. [Keyboard navigation](#keyboard-navigation)
4. [Focus management](#focus-management)
5. [ARIA patterns](#aria-patterns)
6. [Motion & animation](#motion--animation)
7. [Touch & pointer](#touch--pointer)
8. [Screen reader support](#screen-reader-support)
9. [Testing checklist](#testing-checklist)
10. [Tools & resources](#tools--resources)

---

## Standards target

| Standard | Level | Notes |
|---|---|---|
| WCAG 2.2 | AA | Minimum bar for all components |
| WCAG 2.2 | AAA | Target for text contrast where feasible |
| ARIA 1.2 | — | Authoring practices for all interactive patterns |
| EN 301 549 | — | European accessibility standard (maps closely to WCAG 2.2 AA) |

Aurora does **not** target WCAG 2.2 AAA in full — some criteria (such as 7:1 contrast for all text) conflict with the visual identity of the Kids theme. Where AAA is not met, the deviation is documented in the component spec.

---

## Colour & contrast

### Minimum ratios

| Text type | Minimum ratio | Target |
|---|---|---|
| Normal text (< 18pt / < 14pt bold) | **4.5:1** | 7:1 |
| Large text (≥ 18pt or ≥ 14pt bold) | **3:1** | 4.5:1 |
| UI components (borders, icons, controls) | **3:1** | 4.5:1 |
| Decorative elements | No requirement | — |
| Disabled text | No requirement | — |

> Use `--color-text-primary` on `--color-surface-base` for body text. This combination is verified at both themes and in both light and dark modes.

### Never convey meaning by colour alone

Every state that uses colour must also use one of:
- A text label (e.g. "Error" alongside a red border)
- An icon (e.g. a checkmark alongside green)
- A pattern or shape change

This applies to: form validation states, toast variants, tag colours, status indicators, chart series.

### Checked combinations

The following token pairs have been verified to meet 4.5:1:

| Foreground | Background | Ratio (light) | Ratio (dark) |
|---|---|---|---|
| `--color-text-primary` | `--color-surface-base` | 16.2:1 | 15.1:1 |
| `--color-text-primary` | `--color-surface-raised` | 16.2:1 | 12.4:1 |
| `--color-text-secondary` | `--color-surface-base` | 5.3:1 | 4.6:1 |
| `--color-brand-on` | `--color-brand` | 5.1:1 | 5.1:1 |
| `--color-success-text` | `--color-success-bg` | 5.8:1 | 4.7:1 |
| `--color-warning-text` | `--color-warning-bg` | 4.6:1 | 4.5:1 |
| `--color-danger-text` | `--color-danger-bg` | 5.2:1 | 4.9:1 |

> **Note:** `--color-text-secondary` on `--color-surface-sunken` in the Kids theme light mode approaches the 4.5:1 threshold. Do not use this combination for body text — use `--color-text-primary` instead.

---

## Keyboard navigation

### Global rules

- All interactive elements must be reachable and operable via keyboard alone.
- Tab order must follow the visual reading order of the page (left-to-right, top-to-bottom in LTR layouts).
- No keyboard trap — focus must never be permanently stuck inside a component (exception: modal dialogs during open state, which use a deliberate hard trap).
- `Tab` / `Shift+Tab` moves between interactive elements.
- `Enter` / `Space` activates buttons and checkboxes.
- `Enter` follows links and submits forms.
- `Escape` dismisses overlays (modals, drawers, popovers, toasts, command palette).
- Arrow keys navigate within composite widgets (menus, listboxes, tabs, radio groups).

### Composite widget keyboard patterns

| Widget | Keys |
|---|---|
| **Menu / Dropdown** | `↑↓` navigate items, `Enter` activates, `Esc` closes, `Home`/`End` first/last |
| **Tabs** | `←→` navigate tabs (horizontal), `↑↓` navigate tabs (vertical), `Home`/`End` |
| **Accordion** | `Enter`/`Space` toggles panel, `Tab` moves between triggers |
| **Listbox / Select** | `↑↓` navigate options, `Enter`/`Space` selects, `Home`/`End` |
| **Combobox / Command palette** | `↑↓` navigate results, `Enter` activates, `Esc` closes |
| **Slider / Drag** | `←→` or `↑↓` adjust value, `Home`/`End` min/max |
| **Dialog / Modal** | Hard focus trap, `Esc` closes |
| **Tooltip** | Appears on focus and hover, dismisses on `Esc` |
| **Date picker** | `←→↑↓` navigate calendar, `Enter` selects, `Page Up/Down` prev/next month |

---

## Focus management

### Visible focus indicator

All interactive elements must have a visible focus indicator that meets **3:1 contrast** against its adjacent colours.

Aurora's default focus ring:
```css
:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, var(--color-brand));
  outline-offset: var(--focus-ring-offset, 2px);
}
```

- Never suppress `:focus-visible` with `outline: none` without providing an equally visible custom indicator.
- Do not use `:focus` to show indicators — use `:focus-visible` to avoid showing rings on mouse clicks.
- Focus rings must be visible on both light and dark backgrounds. The default brand blue ring meets 3:1 on `--color-surface-raised` and `--color-surface-base` in both themes.

### Focus flow in overlays

| Overlay type | On open | On close |
|---|---|---|
| Modal / Drawer | Focus moves to first interactive element (or close button) | Focus returns to trigger |
| Popover | Focus moves to first interactive element | Focus returns to trigger |
| Toast | No focus movement (non-blocking) | — |
| Bottom Sheet | Focus moves to first interactive element | Focus returns to trigger |
| Dropdown / Menu | Focus moves to first menu item | Focus returns to trigger |
| Command palette | Focus moves to search input | Focus returns to trigger |

### Skip links

Every page using Aurora must include a visible skip link as the first focusable element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

The skip link should be visually hidden until focused:
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
}
.skip-link:focus {
  top: 1rem;
}
```

---

## ARIA patterns

### Rules for ARIA use

1. **Use semantic HTML first.** `<button>` is better than `<div role="button">`. Native elements have built-in semantics, keyboard support, and browser/AT compatibility that ARIA cannot fully replicate.
2. **No ARIA is better than bad ARIA.** An incorrect role or attribute actively harms screen reader users.
3. **Don't change native semantics.** Do not add `role="button"` to an `<a>` or `role="heading"` to a `<span>` that has other semantic meaning.

### Required ARIA for Aurora components

| Component | Key ARIA |
|---|---|
| **Button (loading state)** | `aria-busy="true"`, `aria-label` overrides visible text if needed |
| **Toggle / Switch** | `role="switch"`, `aria-checked` |
| **Checkbox** | Native `<input type="checkbox">` preferred; `aria-checked` for custom |
| **Accordion** | `aria-expanded` on trigger, `aria-controls` → panel, `role="region"` + `aria-labelledby` on panel |
| **Tabs** | `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby` |
| **Modal / Drawer** | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| **Popover** | `role="dialog"`, `aria-modal="false"`, `aria-labelledby` |
| **Tooltip** | `role="tooltip"`, trigger has `aria-describedby` pointing to tooltip |
| **Menu** | `role="menu"`, `role="menuitem"`, trigger has `aria-haspopup="menu"` + `aria-expanded` |
| **Listbox** | `role="listbox"`, `role="option"`, `aria-selected`, `aria-activedescendant` |
| **Combobox** | `role="combobox"`, `aria-expanded`, `aria-autocomplete`, `aria-controls` → listbox |
| **Progress bar** | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label` |
| **Alert / Toast (urgent)** | `role="alert"` (assertive live region) |
| **Status / Toast (polite)** | `role="status"` (polite live region) |
| **Pagination** | `<nav aria-label>`, `aria-current="page"`, `aria-disabled` on Prev/Next |
| **Stepper** | `<nav aria-label="Progress">`, `aria-current="step"` |

### Live regions

Use live regions to announce dynamic content changes to screen readers:

```html
<!-- Polite: announces after current speech finishes -->
<div aria-live="polite" aria-atomic="true">
  Changes saved successfully.
</div>

<!-- Assertive: interrupts immediately (use sparingly) -->
<div aria-live="assertive" role="alert">
  Error: Upload failed.
</div>
```

**Use assertive (`role="alert"`) only for:** errors, critical warnings, and destructive confirmations. Everything else should be polite.

---

## Motion & animation

All Aurora animations must respect the `prefers-reduced-motion` media query.

### Rules

- **Never remove information** — if an animation communicates state change (e.g. toast sliding in), provide an alternative (fade or instant).
- **Duration** — reduce or eliminate durations. Do not use 0ms universally; 1ms ensures transitions still fire for JS listeners.
- **No infinite animations** — auto-playing carousels, looping animations, and spinners must pause or use a static indicator.

### Implementation pattern

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Components that need custom reduced-motion behaviour (spinners, skeleton, progress) override this in their own rule blocks.

---

## Touch & pointer

### Touch target size

All interactive elements must meet a minimum touch target of **44×44px** on mobile (WCAG 2.5.5 Target Size — AAA, but Aurora enforces it at AA level given the fitness-app context).

For small visual elements (icons, checkboxes), use padding or pseudo-elements to extend the hit area without changing the visual size.

```css
.small-btn {
  position: relative;
}
.small-btn::after {
  content: '';
  position: absolute;
  inset: -8px; /* extend hit area */
}
```

### Pointer types

- **Touch:** minimum 44×44px, no hover-only interactions.
- **Mouse:** hover states permitted, smaller targets acceptable where context allows.
- **Stylus:** treat as touch.

Use `@media (hover: hover) and (pointer: fine)` to scope hover-only enhancements to mouse users.

### Gesture alternatives

Every gesture-based interaction must have a non-gesture alternative:
- Drag to sort → up/down arrow buttons
- Swipe to dismiss → close button
- Pinch to zoom → zoom controls

---

## Screen reader support

### Tested combinations

Aurora is tested against the following AT/browser combinations:

| Screen reader | Browser | Platform | Priority |
|---|---|---|---|
| NVDA 2024.x | Chrome (latest) | Windows | P1 |
| NVDA 2024.x | Firefox (latest) | Windows | P2 |
| JAWS 2024 | Chrome (latest) | Windows | P1 |
| VoiceOver | Safari (latest) | macOS | P1 |
| VoiceOver | Safari (latest) | iOS | P1 |
| TalkBack | Chrome | Android | P2 |
| Narrator | Edge (latest) | Windows | P3 |

### Announcements to verify

For every interactive component, verify that the screen reader announces:
1. The element's **role** (button, tab, checkbox, etc.)
2. The element's **name** (label, aria-label, or aria-labelledby)
3. The element's **state** (expanded, selected, checked, disabled, busy)
4. Any **value** (slider position, progress percentage)
5. **Changes** when state updates (live regions for dynamic content)

---

## Testing checklist

Use this checklist before merging any new component or significant change.

### Automated

- [ ] axe-core / axe DevTools — zero violations at AA level
- [ ] Lighthouse accessibility score ≥ 95
- [ ] Color contrast analyser — all text/UI combinations pass
- [ ] HTML validator — no semantic errors

### Keyboard

- [ ] All interactive elements reachable by `Tab`
- [ ] Tab order is logical (matches visual reading order)
- [ ] No keyboard trap (except deliberate modal traps)
- [ ] Composite widgets respond to arrow keys correctly
- [ ] `Escape` dismisses all overlays
- [ ] All interactions completable without a mouse

### Focus

- [ ] `:focus-visible` ring visible on all interactive elements
- [ ] Focus ring meets 3:1 contrast against background
- [ ] Focus moves correctly on overlay open/close
- [ ] Skip link present and functional

### Screen reader (P1 combos minimum)

- [ ] Role announced correctly
- [ ] Name announced correctly
- [ ] State changes announced (expanded, selected, error, loading)
- [ ] Live regions fire appropriately
- [ ] No redundant or confusing announcements

### Visual

- [ ] Passes at 200% browser zoom without horizontal scroll
- [ ] Passes at 400% zoom (WCAG 1.4.10 Reflow)
- [ ] All states visible without colour (Windows High Contrast / Forced Colours mode)
- [ ] `prefers-reduced-motion` respected

### Touch

- [ ] All touch targets ≥ 44×44px on mobile viewport
- [ ] Gesture interactions have non-gesture alternatives

---

## Tools & resources

| Tool | Use |
|---|---|
| [axe DevTools](https://www.deque.com/axe/) | Automated accessibility testing in browser |
| [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) | Desktop app for contrast checking |
| [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) | Reference for ARIA patterns and keyboard behaviour |
| [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) | Full criteria reference |
| [Stark (Figma plugin)](https://www.getstark.co/) | Contrast and a11y checks in design |
| [Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey/) | AT usage statistics for prioritisation |
