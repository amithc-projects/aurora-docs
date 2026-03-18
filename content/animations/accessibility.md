---
title: "Accessible Motion"
description: "Guidelines and mechanisms for respecting user motion preferences."
menu:
  main:
    parent: "animations"
---

## Overview

Animation and motion can vastly improve the user experience by defining relationships, state changes, and spatial structure. However, for a significant portion of users, excessive or rapid motion can trigger vestibular disorders, leading to nausea, dizziness, or migraines.

Aurora is built on an accessible-first animation architecture that automatically respects the device-level **Reduce Motion** setting.

## How it Works Native to Aurora

Whenever a user enables "Reduce Motion" in their operating system (e.g., macOS / iOS Accessibility settings, Windows Display settings), Aurora automatically suppresses structural and decorative CSS animations.

This is achieved globally in our design system via a powerful media query override:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: var(--ds-motion-duration-instant) !important;
    transition-duration: var(--ds-motion-duration-instant) !important;
    animation-iteration-count: 1 !important;
  }
}
```

By instantly mapping all transitions to `--ds-motion-duration-instant` (which evaluates to `0ms`), logic-based state changes (like hovers on buttons, or modal openings) still happen successfully on screen, but without the sliding, bouncing, or fading.

## Designing Custom Animations

If you are developing a custom component that utilizes Javascript-based animations or complex keyframes not covered by standard CSS transition properties, you **must** manually evaluate the `prefers-reduced-motion` media query.

### In JavaScript

To safely build JS-driven animations (e.g., using Canvas, WebGL, or complex DOM charting), check the user's preference first:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Jump straight to the end state, or use a vastly simplified cross-fade.
  chart.renderImmediately();
} else {
  // Safe to play the full physics-based animation.
  chart.playComplexAnimation();
}
```

## Types of Motion to Avoid (Even When Not Reduced)

Regardless of the user's OS preference, you should **never** include the following types of motion:

- **Flashing/Strobing**: Any element flashing more than 3 times per second violates WCAG standards and can induce seizures.
- **Uncontrolled Infinite Loops**: Carousels or background videos that continuously pan without an obvious "Pause" button.
- **Aggressive Parallax**: Multi-layered backgrounds moving at vastly different speeds, which often causes vertigo.

Opt for **purposeful motion** (like a subtle button press, a clear lateral slide into view) rather than decorative motion.
