---
title: "Hero"
category: "Patterns"
description: "Prominent banner for page introductions."
menu:
  main:
    parent: "patterns"
---

## Basic Hero
Standard background with centered content.

{{< demo >}}
<header class="hero" style="background: var(--ds-sys-color-surface-variant); padding: 4rem 2rem; text-align: center; border-radius: var(--ds-sys-radius-card);">
  <h1 style="margin-bottom: 1rem;">Welcome to Aurora</h1>
  <p style="max-width: 600px; margin: 0 auto 2rem auto; opacity: 0.8;">
    A modern design system for building consistent, accessible, and beautiful user interfaces.
  </p>
  <div class="l-cluster" style="justify-content: center;">
    <button class="btn primary">Get Started</button>
    <button class="btn secondary">Documentation</button>
  </div>
</header>
{{< /demo >}}

## Overlay Hero
Text over an image with contrast protection.

{{< demo >}}
<header class="hero hero--overlay" style="position: relative; background-image: url('https://picsum.photos/id/12/800/400'); background-size: cover; color: white; padding: 6rem 2rem; border-radius: var(--ds-sys-radius-card); overflow: hidden;">
  <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
  
  <div style="position: relative; z-index: 1; text-align: center;">
    <h1>Immersive Experience</h1>
    <p>Using a dark overlay ensures text remains readable on dynamic images.</p>
  </div>
</header>
{{< /demo >}}
