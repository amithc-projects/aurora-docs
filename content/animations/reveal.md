---
title: "Scroll Reveal"
description: "Gracefully fade and slide elements precisely when they scroll into the viewport."
category: "Animations"
menu:
  main:
    parent: "animations"
---

A core component of Aurora's *Micro-Interactions* architecture are scroll-triggered animations. 

Instead of listening for the excruciatingly performance-heavy `window.addEventListener('scroll')` event, the system leans exclusively on the native `IntersectionObserver` API! 

By simply tagging an element with `.reveal`, the browser intrinsically alerts Javascript the moment the element breaches the screen coordinates, firing a brilliant CSS CSS cubic-bezier animation.

> [!IMPORTANT]
> **Accessibility Fallbacks:** If a user has `reduce motion` enabled in their OS, Aurora automatically injects `--prefers-reduced-motion: reduce` overrides. The Javascript observer instantly aborts binding to save massive CPU overhead, and the CSS forces all elements to static `opacity: 1` instantly, preventing vestibular nausea.

## Standard Bottom-Up Reveal

Simply add the `.reveal` class to your container. Watch closely as you scroll down this page!

{{< demo >}}
<!-- To demonstrate the effect, we wrap it in a scrollable pane in this demo -->
<div style="height: 300px; overflow-y: auto; padding: 1rem; border: 1px dashed var(--ds-sys-color-border); border-radius: 8px;">
  
  <p style="margin-bottom: 250px; text-align: center; color: var(--ds-sys-color-on-surface-subtle);">
    Scroll down exactly like a standard webpage! 👇
  </p>

  <div class="reveal" style="padding: 2rem; background: var(--ds-sys-color-primary-container); border-radius: 8px; text-align: center;">
    <h3 style="margin-top: 0">Hello, I reveal naturally!</h3>
    <p style="margin-bottom: 0;">I waited patiently off-screen until you reached me!</p>
  </div>

  <p style="margin-top: 250px; text-align: center; color: var(--ds-sys-color-on-surface-subtle);">
    Keep scrolling! 👇
  </p>

</div>
{{< /demo >}}

## Directional Vectors

By default, `.reveal` fades elements directly upward. You can modify the origin vector of the physics slide by appending direction modifiers!

{{< demo >}}
<div style="height: 400px; overflow-y: auto; padding: 1rem; border: 1px dashed var(--ds-sys-color-border); border-radius: 8px;">
  
  <p style="margin-bottom: 300px; text-align: center; color: var(--ds-sys-color-on-surface-subtle);">Scroll to see directional reveals! 👇</p>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <!-- LEFT -->
    <div class="reveal reveal--left" style="padding: 2rem; background: var(--ds-sys-color-surface-variant); border-radius: 8px; border-left: 4px solid var(--ds-sys-color-primary);">
      <h3 style="margin-top: 0">From the Left!</h3>
      <p style="margin-bottom: 0;">The `.reveal--left` modifier shifts the transform axis negatively along the X-plane.</p>
    </div>

    <!-- RIGHT -->
    <div class="reveal reveal--right" style="padding: 2rem; background: var(--ds-sys-color-surface-variant); border-radius: 8px; border-right: 4px solid var(--ds-sys-color-primary);">
      <h3 style="margin-top: 0">From the Right!</h3>
      <p style="margin-bottom: 0;">The `.reveal--right` modifier shifts the transform axis positively along the X-plane.</p>
    </div>
  </div>

  <!-- SCALE -->
  <div class="reveal reveal--scale" style="margin-top: 1rem; padding: 2rem; background: var(--ds-sys-color-surface-variant); border-radius: 8px; border-bottom: 4px solid var(--ds-sys-color-primary);">
      <h3 style="margin-top: 0; text-align:center;">From the Z-Axis!</h3>
      <p style="margin-bottom: 0; text-align:center;">The `.reveal--scale` modifier shifts the transform axis positively along the Z-plane, starting the element slightly smaller.</p>
  </div>
  
  <p style="margin-top: 250px; text-align: center; color: transparent;">Spacing buffer</p>

</div>
{{< /demo >}}
