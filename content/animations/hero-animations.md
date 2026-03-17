---
title: "Hero Animations"
description: "High-impact, zero-dependency entrance animations designed for hero banners and critical typography."
weight: 30
category: "Animations"
menu:
  main:
    parent: "animations"
---

## Overview
These zero-dependency CSS utilities provide luxurious, editorial-grade entrance animations for your Hero components. Rather than importing a heavy external library, these customized keyframes deliver maximum visual impact with minimal weight.

To use them, simply add the relevant `.animate-*` class to your HTML element.

---

### 1. Fade Up (`.animate-fade-up`)
Fades the element in while smoothly sliding it upwards into its final resting position. Ideal for main Hero headlines.

{{< demo >}}
<div class="p-5 d-flex align-items-center justify-content-center" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); min-height: 200px;">
    <h2 class="animate-fade-up fw-900 m-0 text-center" style="font-size: 3rem;">Smooth Fade Up</h2>
</div>
{{< /demo >}}

---

### 2. Fade In (`.animate-fade-in`)
A simple, luxurious crossfade from transparent to solid. Perfect for sub-headings or descriptive paragraphs underneath highly active headers.

{{< demo >}}
<div class="p-5 d-flex align-items-center justify-content-center" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); min-height: 200px;">
    <h2 class="animate-fade-in fw-900 m-0 text-center" style="font-size: 3rem;">Classic Fade In</h2>
</div>
{{< /demo >}}

---

### 3. Zoom In (`.animate-zoom-in`)
Fades the element in while scaling it up from 92% to 100%. This is excellent for background images or knockout masks that need structural emphasis.

{{< demo >}}
<div class="p-5 d-flex align-items-center justify-content-center" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); min-height: 200px;">
    <h2 class="animate-zoom-in fw-900 m-0 text-center" style="font-size: 3rem;">Dramatic Zoom In</h2>
</div>
{{< /demo >}}

---

### 4. Slide Right (`.animate-slide-right`)
Fades the element in while sliding it from the left edge towards the right. Great for side-aligned typographic layouts.

{{< demo >}}
<div class="p-5 d-flex align-items-center justify-content-center" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); min-height: 200px;">
    <h2 class="animate-slide-right fw-900 m-0 text-center" style="font-size: 3rem;">Slide Right Entrance</h2>
</div>
{{< /demo >}}

---

### Combining with Delays
The true power of these utilities is choreography. You can apply standard `.animate-delay-*` classes to stagger these entrances.

{{< demo >}}
<div class="p-5 d-flex flex-column align-items-center justify-content-center" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); min-height: 300px;">
    <span class="text-variant text-uppercase fw-900 mb-2 animate-fade-in" style="letter-spacing: 0.1em;">Chapter 1</span>
    <h2 class="animate-fade-up animate-delay-200 fw-900 m-0 text-center mb-3" style="font-size: 4rem; line-height: 1;">The Animation</h2>
    <p class="text-variant text-center m-0 animate-slide-right animate-delay-500" style="max-width: 400px;">
        This paragraph slides in from the left a full half-second after the sequence begins.
    </p>
</div>
{{< /demo >}}

---

## Complex Hero Composition
By combining our new array of utilities, we can recreate a cinematic, multi-layered Hero entrance complete with a slow-panning background image (Ken Burns effect), a dropping headline, staggered sub-headlines, and staggered Call-To-Action buttons.

{{< demo >}}
<!-- To make it full width in the documentation, we wrap it in an edge-to-edge utility -->
<div style="position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; overflow: hidden; height: 600px; display: flex; align-items: center; justify-content: center;">
    
    <!-- ISOLATED BACKGROUND LAYER (Takes the Ken Burns scaling without affecting children) -->
    <div class="animate-ken-burns" style="position: absolute; inset: -20px; background-image: url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center; z-index: 1;"></div>
    
    <!-- STATIC GRADIENT OVERLAY -->
    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)); z-index: 2;"></div>

    <!-- FOREGROUND CONTENT: Safe from scaling distortion -->
    <div class="d-flex flex-column align-items-center justify-content-center p-4 text-center" style="position: relative; z-index: 3; color: white;">
        
        <!-- Headline falls down -->
        <h1 class="animate-fall-down fw-900 m-0 mb-3" style="font-size: 5rem; line-height: 1; letter-spacing: -0.05em; text-shadow: 0 4px 12px rgba(0,0,0,0.3); display: block;">LONDON</h1>
        
        <!-- Subheadline fades in 300ms later -->
        <p class="animate-fade-in animate-delay-300 m-0 mb-4" style="font-size: 1.25rem; max-width: 500px; text-shadow: 0 2px 8px rgba(0,0,0,0.5); display: block;">
            Discover the historic capital. A global hub of culture, finance, and unparalleled architectural heritage standing the test of time.
        </p>
        
        <!-- Buttons fade up further down the timeline -->
        <div class="d-flex gap-3 justify-content-center">
            <button class="btn btn--primary animate-fade-up animate-delay-600">Explore Flights</button>
            <button class="btn btn--secondary animate-fade-up animate-delay-800" style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.4); color: white;">View Hotels</button>
        </div>

    </div>
</div>
{{< /demo >}}
