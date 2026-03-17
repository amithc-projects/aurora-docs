---
title: "Animations Overview"
description: "A comprehensive guide to the Aurora Design System's zero-dependency micro-interactions and cinematic entrance utilities."
weight: 10
layout: "single"
menu:
  main:
    parent: "animations"
---

## Core Philosophy
Aurora believes that motion should be **meaningful**, **performant**, and deeply respectful of **user accessibility**. We completely avoid heavyweight, external animation libraries (like `animate.css`) that force users to download dozens of complex keyframes they will never see. 

Instead, our animation suite consists of highly-optimized, purpose-built CSS utilities that leverage native browser capabilities like Intersection Observers and hardware-accelerated transforms.

---

## Animation Modules

### 1. [Hero Animations](/animations/hero-animations/)
Cinematic, editorial-grade entrance animations specifically calibrated for massive Hero banners and critical typography. 
* Contains `.animate-fade-up`, `.animate-fade-in`, `.animate-zoom-in`, and `.animate-slide-right`.
* Features an extensive `.animate-delay-*` system for staggering complex, multi-node UI entrances.

### 2. [Scroll Reveal](/animations/reveal/)
A highly-performant, zero-dependency engine that orchestrates entrance animations exactly as items enter the viewport.
* Bypasses slow `window.scroll` listeners in favor of native `IntersectionObserver` physics.
* Supports multi-directional triggers including `.reveal--left`, `.reveal--right`, and `.reveal--scale`.

### 3. [Magnetic Buttons](/animations/magnetic/)
A delightful micro-interaction that binds UI elements to the cursor upon approach, physically pulling the button towards the user to create a tactile sense of depth and weight.
* Completely CSS physics-driven. Snap-backs utilize raw spring easing.
* Configurable "strength" via `data-magnetic-strength` attributes.

---

## Accessibility Commitment (`prefers-reduced-motion`)

Every single animation utility inside the Aurora toolkit proactively listens to the operating system's `prefers-reduced-motion` flag. 

If a user has declared that motion causes them discomfort or vestibular nausea (e.g. via Windows Settings, macOS Preferences, or iOS Accessibility menus), Aurora will **instantaneously abort** all CSS transforms, zeroes out all animation durations, and destructs active Javascript physics engines. Elements will render cleanly and solidly on screen to ensure an entirely static, safe browsing experience.
