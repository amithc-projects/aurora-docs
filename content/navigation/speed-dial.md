---
title: "Speed Dial"
description: "A floating action button that unfolds into a menu of related actions."
category: "Navigation"
menu:
  main:
    parent: "nav-site"
---

The Speed Dial component (also known as a Floating Action Button Menu) provides access to 3-6 related actions. It is typically anchored to the bottom-right of the screen and expands when triggered.

---

## Live Demo

{{< demo >}}
<style>
  .demo-speed-dial-viewport {
    position: relative;
    height: 400px;
    width: 100%;
    background: var(--ds-sys-color-surface-container-low);
    border: 1px dashed var(--ds-sys-color-border);
    border-radius: var(--ds-sys-radius-card);
    overflow: hidden; /* Clips the menu for demo purposes */
  }
</style>

<div class="demo-speed-dial-viewport">
  <div class="speed-dial speed-dial--absolute">
    <div id="dial-demo" class="speed-dial__menu popover">
      <a class="speed-dial__item" href="#" aria-label="Share" style="--delay: 210ms; --delay-out: 0ms;">
        <span class="speed-dial__label">Share</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 16a3 3 0 0 0-2.4 1.2l-6.2-3.1a3.4 3.4 0 0 0 0-2.2l6.2-3.1A3 3 0 1 0 15 7a3.4 3.4 0 0 0 .1.8L9 10.9a3 3 0 1 0 0 2.2l6.1 3.1A3 3 0 1 0 18 16Z"/>
        </svg>
      </a>

      <a class="speed-dial__item" href="#" aria-label="Print" style="--delay: 140ms; --delay-out: 70ms;">
        <span class="speed-dial__label">Print</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9V3h12v6H6Zm10-4H8v2h8V5ZM6 19v2h12v-2H6Zm13-9a3 3 0 0 1 3 3v4h-4v-3H6v3H2v-4a3 3 0 0 1 3-3h14Z"/>
        </svg>
      </a>

      <a class="speed-dial__item" href="#" aria-label="Download" style="--delay: 70ms; --delay-out: 140ms;">
        <span class="speed-dial__label">Download</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 3h2v9.2l2.6-2.6 1.4 1.4-5 5-5-5 1.4-1.4 2.6 2.6V3Zm-7 14h16v4H4v-4Z"/>
        </svg>
      </a>

      <a class="speed-dial__item" href="#" aria-label="Copy" style="--delay: 0ms; --delay-out: 210ms;">
        <span class="speed-dial__label">Copy</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 7V3h11v14h-4v4H4V7h4Zm2 0h5v8h2V5h-7v2Zm-4 2v10h7V9H6Z"/>
        </svg>
      </a>
    </div>

    <button
      class="speed-dial__toggle"
      type="button"
      aria-haspopup="dialog"
      aria-controls="dial-demo"
      aria-label="Toggle actions"
    >
      <span class="speed-dial__glyph speed-dial__glyph--plus" aria-hidden="true">+</span>
      <span class="speed-dial__glyph speed-dial__glyph--close" aria-hidden="true">×</span>
    </button>
  </div>
</div>
{{< /demo >}}

> [!TIP]
> By default, the Speed Dial is fixed to the viewport. To contain it within a specific parent element, add the `.speed-dial--absolute` class and ensure the parent has `position: relative`.

> [!NOTE]
> This component uses the native `popover` API. The `popovertarget` attribute on the button automatically handles the show/hide behavior without any custom JavaScript.

---

## Anatomy

```
   ( Item 1 )  ← .speed-dial__item
       |
   ( Item 2 )
       |
   ( Item 3 )
       |
   [   +    ]  ← .speed-dial__toggle
```

| Part | Element | Token |
|---|---|---|
| Toggle Button | `.speed-dial__toggle` | `--ds-sys-color-primary` |
| Close Icon | `.speed-dial__glyph--close` | `--ds-sys-color-on-primary` |
| Menu Container | `.speed-dial__menu` | `popover` |
| Menu Item | `.speed-dial__item` | `--ds-sys-color-surface-container-high` |
| Item Icon | `.icon` | `--ds-sys-color-on-surface` |

---

## Behavior

- **Trigger:** Clicking the toggle button opens the menu. Clicking it again, or clicking outside the menu (light dismiss), closes it.
- **Animation:** Items slide in from the bottom with a staggered delay using `--delay` (opening) and `--delay-out` (closing) CSS variables. This ensures the items fall back in the reverse order they appeared.
- **Theme Support:** In the **Casual** theme, the items and toggle receive thicker borders and hard shadows to match the "sticker" aesthetic.
- **Reduced Motion:** All animations are disabled if the user has requested reduced motion.

---

## Accessibility

The Speed Dial uses the native `popover` API, which provides several accessibility benefits:
- **Focus Management:** Focus is moved into the popover when it opens if specified, or handled naturally by the browser.
- **Light Dismiss:** Pressing `Esc` or clicking outside automatically closes the menu.
- **ARIA States:** The browser handles the `expanded` state mapping internally via the popover attributes.

| Requirement | Implementation |
|---|---|
| Trigger Role | `button[popovertarget="id"]` |
| Menu Role | `[popover]` |
| Item Labels | `aria-label` on each action link |
| Icon Hiding | `aria-hidden="true"` on decorative glyphs and icons |

---

## Usage guidelines

### Do
- Limit the number of actions to 3-6.
- Use distinct icons for each action.
- Place the Speed Dial in a consistent location, usually the bottom-right.
- Ensure the primary toggle icon has high contrast.

### Don't
- Use Speed Dial for the only primary action on a page (use a standard FAB instead).
- Include complex forms or large amounts of text in the menu items.
- Overlap other critical UI elements or content.
