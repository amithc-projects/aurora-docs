---
title: "Image Hotspot"
description: "Interactive overlaid markers providing contextual popups over images using the CSS Anchor Positioning API."
category: "Components"
menu:
  main:
    parent: "components"
    weight: 130
---

The `Image Hotspot` component places interactive animated dots over a coordinate space on an image. When clicked, native HTML Popovers expand to provide contextual contextual overlay details. 

By leveraging the modern **CSS Anchor Positioning API**, the popovers automatically tether themselves to the dots dynamically without requiring complex Javascript `getBoundingClientRect` coordinate tracking or scroll listeners.

## Living Room Demo

To map the coordinates natively, wrap your image in an `.image-hotspot-container` and position the `.hotspot-dot` buttons using percentage-based `top` and `left` inline styles. 

The Javascript controller automatically inspects the `popovertarget` ID strings and dynamically bridges them together using unique CSS `--anchor-name` linkages!

> [!TIP]
> Make sure to add `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000` to simulate the demo, or save your attached local image to `static/images/living-room.jpg`. 

{{< demo >}}
<!-- Replace the src with your local image if you saved it to static/images/living-room.jpg -->
<div class="image-hotspot-container">
    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" alt="Interior living room">
    
    <!-- 1. Sofa Hotspot -->
    <button class="hotspot-dot" style="top: 65%; left: 45%;" popovertarget="hotspot-sofa" aria-label="View Sofa Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-sofa" class="hotspot-overlay" popover="auto" style="position-area: top;">
        <header>Mid-Century Sofa</header>
        <p>A beautiful green textured fabric sofa providing ample seating and natural tones to the living space.</p>
    </div>

    <!-- 2. Lamp Hotspot -->
    <button class="hotspot-dot" style="top: 35%; left: 65%;" popovertarget="hotspot-lamp" aria-label="View Lamp Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-lamp" class="hotspot-overlay" popover="auto" style="position-area: left;">
        <header>Arched Floor Lamp</header>
        <p>Matte black arched floor lamp providing directional reading light over the sofa area.</p>
    </div>

    <!-- 3. Coffee Table Hotspot -->
    <button class="hotspot-dot" style="top: 75%; left: 75%;" popovertarget="hotspot-table" aria-label="View Coffee Table Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-table" class="hotspot-overlay" popover="auto" style="position-area: top;">
        <header>Walnut Coffee Table</header>
        <p>Solid walnut wood coffee table with tapered legs and decorative centerpiece elements.</p>
    </div>

    <!-- 4. Wall Hanging Hotspot -->
    <button class="hotspot-dot" style="top: 35%; left: 85%;" popovertarget="hotspot-hanging" aria-label="View Wall Hanging Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-hanging" class="hotspot-overlay" popover="auto" style="position-area: bottom;">
        <header>Macrame Wall Hanging</header>
        <p>Hand-woven macrame textile art introducing organic textures to the gallery wall.</p>
    </div>

    <!-- 5. Posters Hotspot -->
    <button class="hotspot-dot" style="top: 25%; left: 35%;" popovertarget="hotspot-posters" aria-label="View Poster Details">
        <span class="material-symbols-outlined">add</span>
    </button>
    <div id="hotspot-posters" class="hotspot-overlay" popover="auto" style="position-area: right;">
        <header>Monochrome Gallery Wall</header>
        <p>A curated collection of minimalist line-art and abstract shapes framed in black.</p>
    </div>
</div>
{{< /demo >}}

## Anchor Positioning Control

Because the component natively utilizes CSS Anchor Positioning, you can dictate exactly where the popover expands by passing the `position-area` inline property to the overlay div. 

Valid alignments include `top`, `bottom`, `left`, `right`, `top left`, `bottom right`, etc. The browser's native collision detection (`position-try-options`) will automatically flip the popover if there is no room on the screen!
