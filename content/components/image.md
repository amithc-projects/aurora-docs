---
title: "Image"
description: "Guidelines for responsive images, fallbacks, and aspect ratios."
menu:
  main:
    parent: "components-simple"
---

## Overview

Images communicate brand, provide product context, and assist in structural layouts. In modern web development, an image is rarely a static dimension. It typically needs to bend to its container, maintain specific intrinsic proportions, and load gracefully.

## Fluid Images

To ensure an image never breaks out of its parent flex or grid container, Aurora treats images as block-level elements that default to a maximum width of 100%.

If you are building custom components and need an image to stretch dynamically, use a straightforward `max-width: 100%` and `height: auto` rule, or apply our global utility class (if applicable).

{{< demo >}}
<div style="width: 50%; border: 1px dashed var(--ds-sys-color-border);">
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" alt="Sneaker at 50% width" style="max-width: 100%; height: auto; display: block;">
</div>
{{< /demo >}}

## Controlling Aspect Ratio

In layouts like [Collection Showcases](/aurora-docs/archetypes/ecommerce/collection-showcase/) or Article grids, preventing layout shifts is critical. Do not crop the image on an image editor; instead, wrap the image and use CSS `aspect-ratio` combined with `object-fit: cover`.

{{< demo >}}
<div style="display: flex; gap: 1rem;">
  
  <div style="flex: 1;">
    <strong>Square (1/1)</strong>
    <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80" alt="Square sneaker" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 8px;">
  </div>
  
  <div style="flex: 1;">
    <strong>Landscape (16/9)</strong>
    <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80" alt="Landscape sneaker" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 8px;">
  </div>
  
  <div style="flex: 1;">
    <strong>Portrait (4/5)</strong>
    <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80" alt="Portrait sneaker" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 8px;">
  </div>

</div>
{{< /demo >}}

## Fallbacks and Alt Text

### Alt Text Accessibility
Every standard HTML `<img>` must feature an `alt` attribute. 
*   **Informative Images (Products, Graphs)**: Provide concise, highly descriptive text (`alt="Red Nike Air Max turning to the left"`).
*   **Decorative Images (Abstract background)**: Provide an empty string (`alt=""`) so screen readers safely ignore the node. **Do not omit the attribute.**

### Loading / Error Fallbacks
When dynamically loading images from external APIs (like our use of DummyJSON), network failures happen. Ensure containers have a sensible background color (`var(--ds-sys-color-surface-container-low)`) so that if the image URL fails, the empty block retains the structural layout of the card.
