# Browser Support Matrix

> **Category:** Governance · **Status:** Approved · **Last updated:** 2026-03-07

Aurora supports the **latest two stable releases** of all major browsers unless otherwise noted. Internet Explorer is not supported.

---

## Supported browsers

| Browser | Minimum version | Support level | Notes |
|---|---|---|---|
| Chrome | 120+ | ✅ Full | Primary development browser |
| Edge | 120+ | ✅ Full | Chromium-based; mirrors Chrome |
| Firefox | 121+ | ✅ Full | |
| Safari | 17+ | ✅ Full | See Safari-specific caveats |
| Safari iOS | 17+ | ✅ Full | Primary mobile target |
| Chrome Android | 120+ | ✅ Full | |
| Samsung Internet | 23+ | ✅ Full | Chromium-based |
| Opera | 106+ | ⚠️ Best effort | Not actively tested |
| Firefox Android | 121+ | ⚠️ Best effort | Not actively tested |
| Internet Explorer | Any | ❌ Not supported | |

**Support levels:**
- ✅ **Full** — tested in CI, bugs are blocking
- ⚠️ **Best effort** — not tested in CI, bugs accepted but lower priority
- ❌ **Not supported** — no polyfills, no bug fixes

---

## CSS feature support

| Feature | Chrome | Firefox | Safari | Notes |
|---|---|---|---|---|
| CSS Custom Properties | ✅ | ✅ | ✅ | Core system dependency |
| `grid-template-rows: 0fr` (accordion) | ✅ 107+ | ✅ 109+ | ✅ 16+ | Used for height animation |
| Container queries `@container` | ✅ 105+ | ✅ 110+ | ✅ 16+ | Used in responsive components |
| `:focus-visible` | ✅ | ✅ | ✅ 15.4+ | Required for focus rings |
| `@layer` cascade layers | ✅ 99+ | ✅ 97+ | ✅ 15.4+ | Used in token architecture |
| `dvh` / `dvw` / `svh` units | ✅ 108+ | ✅ 110+ | ✅ 15.4+ | Used in Bottom Sheet |
| `has()` selector | ✅ 105+ | ✅ 121+ | ✅ 15.4+ | Used in form validation |
| `color-mix()` | ✅ 111+ | ✅ 113+ | ✅ 16.2+ | Optional — not in critical path |
| `scrollbar-width` | ✅ | ✅ | ⚠️ 18+ | Safari added in 2024 |
| `view-transitions` | ✅ 111+ | ⚠️ Behind flag | ❌ | Not used in core — progressive enhancement only |
| `overscroll-behavior` | ✅ | ✅ | ✅ 16+ | Used in Bottom Sheet scroll |
| `touch-action` | ✅ | ✅ | ✅ | Used in drag & drop |

---

## Safari-specific caveats

Safari has historically lagged on several CSS and Web API features. The following are known Aurora considerations:

| Issue | Workaround |
|---|---|
| `position: sticky` inside `overflow: auto` containers | Restructure markup — sticky does not work in overflow-scroll parents in Safari |
| `gap` in Flexbox (< Safari 14.1) | Not relevant at Safari 17+ minimum, but avoid `margin` fallback pattern for legacy |
| `dvh` units rendering (100dvh may include browser chrome on iOS < 15.4) | Minimum is Safari 17 — not an issue |
| Date input (`<input type="date">`) — non-standard UI | Use a custom date picker component on mobile |
| `ResizeObserver` callbacks fire more aggressively | Debounce all ResizeObserver callbacks |
| Scrolling performance in fixed/sticky elements | Avoid `backdrop-filter` on frequently-scrolled sticky headers — causes jank |

---

## Known component-level caveats

| Component | Browser | Issue |
|---|---|---|
| Bottom Sheet — drag gesture | iOS Safari | `touchmove` events may be blocked by native scroll detection. Ensure `touch-action: none` is set on the drag handle zone. |
| Command Palette | Firefox | `scrollIntoView({block:'nearest'})` behaviour differs slightly — active item may require an extra pixel of margin. |
| Accordion (`grid-template-rows`) | Safari < 16 | Not a concern at Safari 17 minimum. |
| Sticky table headers | Safari | Requires `position: sticky` on `<th>` within a `<table>` — works, but needs explicit `top: 0`. |
| Custom scrollbar styling | Firefox | `scrollbar-width: thin` supported; `::-webkit-scrollbar` pseudo-elements not supported. Aurora uses both. |
| `backdrop-filter` (blur) | Firefox < 103 | Not a concern at Firefox 121 minimum. |

---
---

# Design–Dev Handoff Guide

> **Category:** Governance · **Status:** Approved · **Last updated:** 2026-03-07

This guide defines how Aurora design decisions are communicated from Figma to implementation — naming conventions, annotation standards, and the handoff workflow.

---

## Contents

1. [Principles](#principles)
2. [Token naming alignment](#token-naming-alignment)
3. [Figma structure](#figma-structure)
4. [Annotation standards](#annotation-standards)
5. [Redline specifications](#redline-specifications)
6. [Handoff workflow](#handoff-workflow)
7. [What developers should NOT need to ask](#what-developers-should-not-need-to-ask)

---

## Principles

1. **Tokens, not values.** Handoff specs reference token names, not raw values. `--color-brand` not `#2563eb`. Engineers look up the current value in the token reference.

2. **Document intent, not just pixels.** A 16px spacing is `--space-4`. Document why that specific token was chosen — is it using component padding or layout gap semantics?

3. **State coverage is mandatory.** Every interactive component in a handoff must include all states: default, hover, focus, active, disabled, loading, error.

4. **Dark mode is not optional.** Every screen handoff must include a dark mode frame alongside the light mode frame.

---

## Token naming alignment

Figma variables and CSS tokens use identical naming to eliminate translation errors.

| Figma variable | CSS token | Notes |
|---|---|---|
| `color/brand` | `--color-brand` | — |
| `color/text/primary` | `--color-text-primary` | Figma uses `/` as separator |
| `color/surface/raised` | `--color-surface-raised` | — |
| `space/4` | `--space-4` | Figma uses numeric labels |
| `radius/lg` | `--radius-lg` | — |
| `shadow/md` | `--shadow-md` | — |
| `text/sm` | `--text-sm` | — |
| `font/weight/medium` | `--font-weight-medium` | — |

### Figma variable groups

Aurora Figma library organises variables into groups matching the token tiers:

```
Primitives/
  Color/
    Neutral/...
    Brand/...
Semantic/
  Color/
    Surface/...
    Text/...
    Border/...
  Space/...
  Radius/...
Components/
  Button/...
  Toast/...
```

---

## Figma structure

### Component organisation

Each Aurora component in Figma:
- Lives in the **Aurora / Components** library page
- Has a **Cover frame** showing all variants at a glance
- Has **individual variant frames** for detailed inspection
- Uses **Auto Layout** matching the CSS flex/grid structure
- Has **variable bindings** on all colour, spacing, and radius properties

### Layer naming conventions

Figma layer names map to CSS class names:

| Figma layer | CSS class / element |
|---|---|
| `Button / Root` | `.btn` |
| `Button / Icon` | `.btn-icon` |
| `Toast / Body` | `.toast-body` |
| `Toast / Progress` | `.toast-progress` |

Use **slash notation** in Figma to match the token/component hierarchy.

---

## Annotation standards

### What to annotate

Annotate anything that is **not obvious from visual inspection**:
- Token names for colours, spacing, and radii where multiple valid tokens could apply
- Interaction states that require documentation (hover colour, focus ring, disabled opacity)
- Animation behaviour (duration, easing, trigger)
- ARIA attributes and roles
- Responsive behaviour (what changes at each breakpoint)
- Content constraints (maximum character count, truncation behaviour)

### Annotation format

Use Figma's native annotation tool or sticky note components from the Aurora Annotation Kit:

```
┌─────────────────────────────────┐
│ bg: --color-surface-raised      │
│ border: --color-border-subtle   │
│ radius: --radius-lg             │
│ padding: --space-4 --space-5    │
└─────────────────────────────────┘
```

For interaction states, use a state annotation table alongside the component:

| State | Change |
|---|---|
| Default | — |
| Hover | `bg → --color-surface-sunken` |
| Focus | `outline: --focus-ring-width solid --focus-ring-color` |
| Disabled | `opacity: --opacity-disabled; cursor: not-allowed` |

---

## Redline specifications

Redlines are **not required** for components that already exist in Aurora. For new components or custom layouts:

- Spacing: show the token name, not the pixel value
- Colour: show the token name
- Typography: show the text style name (maps to `--text-{size}` + `--font-weight-*`)
- Corner radius: show the token name
- Shadow: show the token name
- Animation: show duration (ms) and easing token name

---

## Handoff workflow

### Standard component (already in Aurora)

1. Designer links to the Aurora component spec page
2. Designer specifies which variant and what content
3. Engineer implements directly from the spec — no Figma inspection needed

### New or custom component

1. Designer creates Figma frame with full state coverage (default, hover, focus, active, disabled) + dark mode
2. Designer annotates all tokens
3. Designer adds to the Aurora backlog issue with spec draft
4. Review in design critique
5. Engineer pulls from Figma + spec — asks in the design channel for any ambiguity
6. Implementation reviewed against Figma frames in PR

### Layout screens (not components)

1. Designer delivers: mobile frame + desktop frame + dark mode frames
2. Annotate breakpoint-specific behaviour (what columns change, what components swap)
3. Engineer implements responsive behaviour referencing the Breakpoints & Grid spec
4. Designer reviews implementation in staging — signs off before merge

---

## What developers should NOT need to ask

These questions indicate a handoff gap — the annotation or spec was insufficient:

| Question | What was missing |
|---|---|
| "What colour is this border?" | Token annotation |
| "What's the hover state?" | State coverage in Figma |
| "Does this animate?" | Animation annotation |
| "What happens on mobile?" | Responsive breakpoint annotation |
| "What's the focus style?" | State coverage — focus frame |
| "Can this text truncate?" | Content constraint annotation |
| "What's the dark mode version?" | Dark mode frame |

If these questions come up repeatedly, add them as a checklist item to the handoff review step.
