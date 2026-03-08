# Icon Usage Guidelines

> **Category:** Governance · **Status:** Approved · **Last updated:** 2026-03-07

Aurora uses icons to communicate meaning at a glance, reinforce labels, and improve scannability. This guide covers which icon library Aurora uses, how to size and colour icons correctly, and accessibility requirements.

---

## Contents

1. [Icon library](#icon-library)
2. [Sizes](#sizes)
3. [Colour](#colour)
4. [Usage rules](#usage-rules)
5. [Accessibility](#accessibility)
6. [Do / Don't](#do--dont)

---

## Icon library

Aurora uses **Heroicons v2** (MIT licence) as its primary icon set. Heroicons is maintained by Tailwind Labs and provides two styles:

| Style | `stroke-width` | When to use |
|---|---|---|
| **Outline** | 1.5px | Default for all UI — body text, labels, buttons |
| **Solid** | Filled | Active states, selected indicators, status icons |

### Rationale for Heroicons
- MIT licensed — no attribution required in product
- Consistent 24×24 grid with clean optical balance
- Outline and solid variants for every icon — maps cleanly to Aurora's default/active state pattern
- Maintained and updated regularly
- SVG inline — no icon font dependency, no CORS issues, no render blocking

### Using icons outside the Heroicons set

When Heroicons does not have a needed icon:
1. Check [Lucide](https://lucide.dev/) — visually compatible, MIT licensed
2. Commission a custom icon matching the Heroicons outline style: 24×24 grid, 1.5px stroke, rounded line caps and joins
3. Do not use icons from multiple libraries in the same view — mixing visual styles (e.g. Heroicons + Material Icons) is not permitted

---

## Sizes

Icons always scale relative to their context. Aurora maps icon sizes to the text scale:

| Context | Icon size | CSS |
|---|---|---|
| Inline with `--text-xs` labels | 12px | `width: 12px; height: 12px` |
| Inline with `--text-sm` body text | 14px | `width: 14px; height: 14px` |
| Inline with `--text-base` body text | 16px | `width: 16px; height: 16px` |
| Button icons (sm button) | 14px | — |
| Button icons (md button, default) | 16px | — |
| Button icons (lg button) | 18px | — |
| Standalone / feature icons | 20–24px | Use Heroicons at native 24px |
| Empty state icons | 40–64px | Scale up — use `stroke-width: 1.5` |
| Hero / illustration icons | 80–120px | Use `stroke-width: 1px` at large sizes |

### Stroke width at large sizes

Heroicons are designed at 24px with `stroke-width: 1.5`. At larger sizes:
- 32–48px: reduce to `stroke-width: 1.25`
- 64–80px: reduce to `stroke-width: 1`
- 80px+: reduce to `stroke-width: 0.75`

Keeping the native stroke width at large sizes produces icons that look too heavy.

---

## Colour

Icons use `currentColor` — they inherit their colour from the parent element's `color` property. **Do not hardcode icon fill or stroke colours.**

```html
<!-- Correct — inherits context colour -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
  <path stroke="currentColor" stroke-width="1.5" .../>
</svg>

<!-- Wrong — hardcoded colour won't adapt to dark mode or themes -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
  <path stroke="#6b7280" stroke-width="1.5" .../>
</svg>
```

### Semantic icon colours

| Context | Token | Use |
|---|---|---|
| Default / decorative | `--color-text-secondary` | Trailing icons, input prefix/suffix |
| Primary / interactive | `--color-text-primary` | Active icons, clickable standalone icons |
| Brand action | `--color-brand` | Primary action icons |
| Success | `--color-success-500` | Confirmation, complete state |
| Warning | `--color-warning-500` | Alert, needs attention |
| Danger | `--color-danger-500` | Error, destructive action |
| On brand | `--color-brand-on` (`#fff`) | Icons inside brand-coloured elements |
| Disabled | Inherit + `--opacity-disabled` on parent | — |

---

## Usage rules

### Icons must reinforce labels, not replace them

**Default rule:** icons should almost always accompany a text label. Standalone icon-only controls are only permitted when:
- The icon is universally understood (×, ✓, ☰, ⋯, ←, →)
- An `aria-label` is provided
- The control is not the primary action on a page

**Never use a standalone icon as the sole primary action in a form or workflow.**

### Icons in buttons

- Icon + label: icon left of label (LTR), 6–8px gap
- Icon only: use `aria-label` on the button, add a tooltip
- Trailing icon: use for directional actions (→ for "next", ↗ for "external link", ▾ for dropdowns)

### Consistency within a view

All icons in a single view must use the same style (outline OR solid). Do not mix outline and solid icons in the same navigation bar, list, or group.

### Animated icons

Avoid animating icons unless the animation communicates meaningful state change:
- ✅ Spinner for loading state
- ✅ Chevron rotating on accordion expand
- ✅ Checkmark drawing in on completion
- ❌ Icons bouncing or pulsing for decoration
- ❌ Icons animating on hover with no state change

All icon animations must respect `prefers-reduced-motion`.

---

## Accessibility

### Decorative icons

Icons that are purely decorative (beside a visible text label) must be hidden from assistive technology:

```html
<button>
  <svg aria-hidden="true" focusable="false" width="16" height="16" ...>
    ...
  </svg>
  Save changes
</button>
```

`aria-hidden="true"` removes the icon from the accessibility tree.
`focusable="false"` is required for IE11 compatibility (SVG elements are focusable by default in IE).

### Meaningful icons (standalone)

Icons that convey meaning without a visible label must have an accessible name:

```html
<!-- Option 1: aria-label on the button -->
<button aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" ...>...</svg>
</button>

<!-- Option 2: visually-hidden text -->
<button>
  <svg aria-hidden="true" focusable="false" ...>...</svg>
  <span class="sr-only">Close dialog</span>
</button>
```

### Status icons (colour + icon)

When using an icon to communicate status (e.g. a red × for error), the icon itself does not need an accessible name if the surrounding text provides context. The combination of icon + text label meets the "not colour alone" requirement.

### Touch target size

Icon-only buttons must meet the 44×44px touch target requirement. Extend the hit area with padding or a pseudo-element, not by making the icon itself larger.

---

## Do / Don't

### ✅ Do

- Use `currentColor` for all icon stroke and fill
- Match icon size to adjacent text size
- Include `aria-hidden="true"` on decorative icons
- Reduce `stroke-width` when using icons above 48px
- Keep icon styles consistent within a view (all outline or all solid)

### ❌ Don't

- Don't use icon fonts — use inline SVG or sprite
- Don't hardcode icon colours
- Don't use icons as the only indicator of meaning (always pair with text or aria-label)
- Don't mix icon libraries in the same view
- Don't use animated icons purely for decoration
- Don't scale icons outside their designed range without adjusting stroke weight
