---
title: "Hero"
category: "Patterns"
description: "Prominent banner for page introductions."
menu:
  main:
    parent: "components-patterns"
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

## Video Background Hero
A full-bleed hero section with an immersive, autoplaying background video. It uses `object-fit: cover` to ensure the video always fills the container without distortion.

{{< demo >}}
<header class="hero hero--video" style="position: relative; color: white; padding: 8rem 2rem; border-radius: var(--ds-sys-radius-card); overflow: hidden; display: flex; align-items: center; justify-content: center; min-height: 500px;">
  
  <!-- Autoplaying Background Video -->
  <video autoplay loop muted playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; object-fit: cover;">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
  </video>
  
  <!-- Overlay to ensure text readability -->
  <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 1;"></div>
  
  <!-- Content -->
  <div style="position: relative; z-index: 2; text-align: center; max-width: 800px;">
    <h1 style="font-size: 4rem; font-weight: 900; margin-bottom: 1.5rem; letter-spacing: -0.02em; text-shadow: 0 4px 12px rgba(0,0,0,0.4); line-height: 1.1;">Cinematic Experience</h1>
    <p style="font-size: 1.25rem; opacity: 0.9; margin-bottom: 2rem; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">
      Engage your audience immediately with continuous, high-quality motion. Background videos should always be muted, looped, and set to autoplay.
    </p>
    <div class="l-cluster" style="justify-content: center;">
      <button class="btn btn--primary">Watch Trailer</button>
      <button class="btn btn--secondary" style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.4); color: white;">More Info</button>
    </div>
  </div>
</header>
{{< /demo >}}
