---
title: "Text Image Mask"
description: "High-impact typographic modifiers for hero banners and structural headers."
weight: 40
---

## Visual Concept
For powerful hero banners and editorial magazine-style headers, we offer two distinct CSS utilities that allow rich imagery to interact dynamically with typography. 

<div class="callout warning mt-3 mb-5">
  <strong>Note:</strong> These mask utilities are designed specifically for large, heavyweight structural typography (e.g. <code>.text-4xl</code> and above) to maximize legibility.
</div>

---

### Variant A: Text Fill (`.text-mask-fill`)
This utility clips a background image precisely to the boundaries of the text strokes, essentially "painting" the text with the image.

{{< demo >}}
<div class="p-5 d-flex flex-column align-items-center justify-content-center" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); height: 400px; overflow: hidden;">
    <!-- Small subhead animate-fade-in immediately -->
    <span class="text-uppercase text-variant fw-600 mb-2 animate-fade-in" style="letter-spacing: 0.1em;">Destination</span>
    <!-- The background image must be placed on the exact same node that receives the text-mask-fill class -->
    <h1 class="text-mask-fill m-0 fw-900 animate-fade-up animate-delay-200" style="font-size: 8rem; line-height: 1; letter-spacing: -0.05em; background-image: url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop');">LONDON</h1>
</div>
{{< /demo >}}

---

### Variant B: Knockout Mask (`.text-mask-knockout-container`)
This utility reverses the effect. The text physically punches a transparent hollow "hole" through a solid background plate, revealing the underlying image layer stacked behind the container.

{{< demo >}}
<div class="animate-zoom-in" style="border-radius: var(--ds-sys-radius-card); height: 400px; overflow: hidden;">
    <!-- The outer container holds the background image -->
    <div class="text-mask-knockout-container" style="background-image: url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop'); width: 100%; height: 100%;">
        <!-- The inner child is the actual punch cut -->
        <h1 class="text-mask-knockout-text fw-900 animate-slide-right animate-delay-400" style="font-size: 8rem; letter-spacing: -0.05em;">LONDON</h1>
    </div>
</div>
{{< /demo >}}

---

### Variant C: Edge-to-Edge Fluid Typography (`.text-mask-fit-width`)
When we combine the background clipping masks with modern CSS Container Queries (`cqi`), we can force the typography to stretch perfectly to the 100% horizontal edge of its parent container, scaling seamlessly across mobile and desktop breakpoints without media queries.

{{< demo >}}
<div class="p-4 text-mask-fit-width" style="background-color: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card); height: 500px; display: flex; align-items:flex-end;">
    <!-- 
      The surrounding container activates `container-type: inline-size;`.
      The h1 child calculates its font-size using `21cqi`. 
      Because "LONDON" is a 6-letter word, 21% of the container width per letter perfectly spans 100vw!
    -->
    <h1 class="text-mask-fill m-0 fw-900" style="background-image: url('https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop');">LONDON</h1>
</div>
{{< /demo >}}

---

### Variant D: Edge-to-Edge Knockout Mask
We can apply the exact same CSS Container Queries (`.text-mask-fit-width`) to the Knockout variant to create a massive edge-to-edge transparent cutout.

{{< demo >}}
<div style="border-radius: var(--ds-sys-radius-card); height: 500px; overflow: hidden;">
    <div class="text-mask-knockout-container text-mask-fit-width" style="background-image: url('https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop'); width: 100%; height: 100%; display: flex; align-items:flex-end;">
        <!-- The inner child is the actual punch cut, now scaled with cqi -->
        <h1 class="text-mask-knockout-text fw-900" style="font-size: 21cqi; line-height: 0.8 !important;">LONDON</h1>
    </div>
</div>
{{< /demo >}}

---

<div class="mt-5">
    <h3>Why Two Variants?</h3>
    <p class="text-variant">
        If you are overlaying text onto an extremely dark or extremely light background section of an app, having access to both <code>Fill</code> and <code>Knockout</code> ensures you can always achieve high contrast readability without sacrificing the editorial aesthetic.
    </p>
</div>
