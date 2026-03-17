---
title: "Magnetic Buttons"
description: "A delightful micro-interaction that physically pulls UI elements toward the user's cursor."
category: "Animations"
menu:
  main:
    parent: "animations"
---

A core component of Aurora's *Micro-Interactions* architecture are physics-based UI elements. 

The `Magnetic Button` binds to the user's `mousemove` event when hovering nearby, mathematically calculating the cursor's velocity and distance to apply a dynamic CSS `translate()` vector to the button, pulling it toward the mouse.

When the mouse leaves, the button snaps back to absolute center using a soft CSS spring-easing transition.

> [!IMPORTANT]
> **Accessibility First:** Aurora places immense focus on inclusive motion environments. The physics logic proactively queries `window.matchMedia('(prefers-reduced-motion: reduce)')`. If a user has motion reduction enabled in macOS or Windows, the calculations automatically abort and the buttons will act as static standard inputs.

## Standard Magnetic Button

Simply add the `.magnetic` class to any existing actionable element, like a `.btn`. The javascript automatically identifies and attaches the physics listener!

{{< demo >}}
<div style="display: flex; gap: 2rem; padding: 2rem; justify-content: center; align-items: center; background: var(--ds-sys-color-surface-variant); border-radius: 8px;">
  
  <button class="btn btn--primary magnetic">
    Hover Me
  </button>

  <button class="btn btn--secondary magnetic">
    Secondary Magnet
  </button>
  
</div>
{{< /demo >}}

## Variable Strength & Icon Buttons

You can control the physical "weight" of the pull by appending `data-magnetic-strength="0.X"` to your element. The default is `0.3`, meaning for every `10px` your mouse deviates from the absolute center, the button translates `3px`.

A high-strength icon button (like the one below) is fantastic for prominent "Close" or "Add" Floating Action Buttons.

{{< demo >}}
<div style="display: flex; gap: 2rem; padding: 3rem; justify-content: center; align-items: center;">

  <button class="btn btn--icon magnetic" data-magnetic-strength="0.7" style="width: 64px; height: 64px; border-radius: 50%; background: var(--ds-sys-color-primary); color: white;">
    <span class="material-symbols-outlined" style="font-size: 32px">add</span>
  </button>
  
  <p style="flex: 1; max-width: 300px; font-size: 0.9rem; color: var(--ds-sys-color-on-surface-subtle)">
    Watch the "Add" FAB button pull aggressively toward your mouse. It has an immense strength modifier of <strong>0.7</strong>!
  </p>

</div>
{{< /demo >}}
