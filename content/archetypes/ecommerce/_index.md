---
title: "E-commerce Store"
description: "A dual-view archetype demonstrating a Storefront Homepage and a feature-rich Product Detail Page, inspired by Nike and Apple."
menu:
  main:
    parent: "archetypes"
    identifier: "ecommerce"
---

The E-commerce archetype demonstrates handling large visual assets and complex form-input density. It features a promotional Storefront and a high-conversion Product Details Page (PDP) packed with galleries, steppers, and interactive variant selectors.

## 1. Storefront Homepage
A heavily visual layout prioritizing promotional banners, seasonal collections, and horizontally scrolling product carousels to drive discovery.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-surface); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Promotional Banner -->
  <div style="background: var(--ds-sys-color-on-surface); color: var(--ds-sys-color-surface); text-align: center; padding: 0.5rem; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.5px;">
    Free shipping on all orders over $150. <span style="text-decoration: underline; cursor: pointer; margin-left: 0.5rem;">Shop now</span>
  </div>

  <!-- Global Navigation -->
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--ds-sys-color-border);">
    <div style="font-weight: 800; font-size: 1.5rem; letter-spacing: -1px; text-transform: uppercase;">Aero</div>
    <nav style="display: flex; gap: 2rem; font-size: 0.95rem; font-weight: 600;">
      <span style="color: var(--ds-sys-color-on-surface); border-bottom: 2px solid var(--ds-sys-color-on-surface); padding-bottom: 0.2rem; cursor: pointer;">New Arrivals</span>
      <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Men</span>
      <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Women</span>
      <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Accessories</span>
    </nav>
    <div style="display: flex; align-items: center; gap: 1.5rem;">
      <span class="material-symbols-outlined" style="cursor: pointer; font-variation-settings: 'FILL' 0, 'wght' 300;">search</span>
      <span class="material-symbols-outlined" style="cursor: pointer; font-variation-settings: 'FILL' 0, 'wght' 300;">favorite</span>
      <div style="position: relative; cursor: pointer;">
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0, 'wght' 300;">shopping_bag</span>
        <div style="position: absolute; top: -5px; right: -5px; background: #ef4444; color: white; border-radius: 50%; width: 16px; height: 16px; font-size: 0.65rem; display: flex; justify-content: center; align-items: center; font-weight: 700;">2</div>
      </div>
    </div>
  </header>

  <!-- Hero Campaign -->
  <section style="height: 400px; background: #f3f4f6; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; overflow: hidden;">
    <!-- Floating Sneaker Asset -->
    <div style="position: absolute; width: 600px; height: 600px; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; bottom: -100px; left: 50%; transform: translateX(-50%); z-index: 5;"></div>
    
    <div style="position: relative; z-index: 10;">
      <div style="font-weight: 700; font-size: 0.9rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1rem; color: #4b5563;">Spring Collection</div>
      <h1 style="font-size: 4rem; font-weight: 900; letter-spacing: -2px; text-transform: uppercase; margin: 0 0 1.5rem 0; line-height: 1; color: #111827;">Engineered<br>For Flight.</h1>
      <a href="/aurora-docs/archetypes/ecommerce/shoes/" style="text-decoration: none;"><button class="btn btn-primary btn-lg" style="border-radius: 999px; padding: 0 2.5rem; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; cursor: pointer;">Shop The Drop</button></a>
    </div>
  </section>

  <!-- Product Carousel Section -->
  <section style="padding: 4rem 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 800; text-transform: uppercase; margin: 0; letter-spacing: -0.5px;">Trending Now</h2>
      <div style="display: flex; gap: 0.5rem;">
        <button style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); display: flex; justify-content: center; align-items: center; cursor: pointer;"><span class="material-symbols-outlined">chevron_left</span></button>
        <button style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); display: flex; justify-content: center; align-items: center; cursor: pointer;"><span class="material-symbols-outlined">chevron_right</span></button>
      </div>
    </div>
    
    <!-- Super List Carousel Override -->
    <ul class="super-list super-list--carousel" style="margin-left: -2rem; margin-right: -2rem; padding: 0 2rem;">
      
      <!-- Product Card 1 -->
      <li class="sl-item" style="flex: 0 0 280px; height: 400px; border-radius: 0; border: none; flex-direction: column; cursor: pointer;" onclick="window.location.href='/aurora-docs/archetypes/ecommerce/shoes/aero-sprint-pro/'">
         <div class="sl-item__bg" style="position: relative; height: 300px; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;">
            <div style="position: absolute; top: 10px; left: 10px; background: white; color: black; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; text-transform: uppercase;">Just In</div>
         </div>
         <div class="sl-item__content" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 0; color: inherit;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Sprint Pro</h3>
              <div style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant);">Men's Road Racing</div>
            </div>
            <div style="font-weight: 600;">$130</div>
         </div>
      </li>

      <!-- Product Card 2 -->
      <li class="sl-item" style="flex: 0 0 280px; height: 400px; border-radius: 0; border: none; flex-direction: column; cursor: pointer;" onclick="window.location.href='/aurora-docs/archetypes/ecommerce/shoes/aero-invincible-3/'">
         <div class="sl-item__bg" style="position: relative; height: 300px; background: url('/aurora-docs/images/archetypes/sneaker2.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;"></div>
         <div class="sl-item__content" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 0; color: inherit;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Invincible 3</h3>
              <div style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant);">Women's Lifestyle</div>
            </div>
            <div style="font-weight: 600;">$180</div>
         </div>
      </li>

      <!-- Product Card 3 -->
      <li class="sl-item" style="flex: 0 0 280px; height: 400px; border-radius: 0; border: none; flex-direction: column; cursor: pointer;" onclick="window.location.href='/aurora-docs/archetypes/ecommerce/shoes/aero-street-x/'">
         <div class="sl-item__bg" style="position: relative; height: 300px; background: url('/aurora-docs/images/archetypes/sneaker3.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;">
            <div style="position: absolute; top: 10px; left: 10px; background: #ef4444; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; text-transform: uppercase;">Sale</div>
         </div>
         <div class="sl-item__content" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 0; color: inherit;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Street X</h3>
              <div style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant);">Unisex Basketball</div>
            </div>
            <div style="font-weight: 600; display: flex; gap: 0.5rem;">
              <span style="color: #ef4444;">$109</span>
              <span style="text-decoration: line-through; color: var(--ds-sys-color-on-surface-variant);">$160</span>
            </div>
         </div>
      </li>

      <!-- Product Card 4 -->
      <li class="sl-item" style="flex: 0 0 280px; height: 400px; border-radius: 0; border: none; flex-direction: column; cursor: pointer;" onclick="window.location.href='/aurora-docs/archetypes/ecommerce/shoes/aero-air-max-pulse/'">
         <div class="sl-item__bg" style="position: relative; height: 300px; background: url('/aurora-docs/images/archetypes/sneaker4.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;"></div>
         <div class="sl-item__content" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 0; color: inherit;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Air Max Pulse</h3>
              <div style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant);">Men's Training</div>
            </div>
            <div style="font-weight: 600;">$150</div>
         </div>
      </li>

    </ul>
  </section>
</div>
{{< /demo >}}

<style>
/* Base + Carousel Super List Styles */
.super-list { margin: 0; padding: 0; list-style: none; width: 100%; border-radius: var(--ds-sys-radius-card); transition: all 0.5s ease; }
.sl-item { position: relative; overflow: hidden; display: flex; }
.sl-item__bg { position: absolute; inset: 0; z-index: 1; }
.sl-item__bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.sl-item__overlay { position: absolute; inset: 0; z-index: 2; }
.sl-item__content { position: relative; z-index: 3; }

.super-list--carousel {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  border: none;
  background: transparent;
}
.super-list--carousel::-webkit-scrollbar { display: none; }
.super-list--carousel { -ms-overflow-style: none; scrollbar-width: none; }
.super-list--carousel .sl-item {
  scroll-snap-align: start;
}
</style>

---

## 2. Product Detail Page (PDP)
The critical conversion point of any E-commerce platform. This layout integrates a sticky image gallery with a complex, interactive configuration panel (color radio groups, size selection matrices, nested accordions).

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-surface); font-family: var(--ds-sys-font-family-base);">
  
  <div style="display: grid; grid-template-columns: 3fr 2fr; min-height: 600px;">
    
    <!-- Left Column: Sticky Image Gallery -->
    <div style="border-right: 1px solid var(--ds-sys-color-border); padding: 1.5rem; background: var(--ds-sys-color-surface-container-lowest); position: relative;">
      
      <!-- Breadcrumbs -->
      <div style="font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant); margin-bottom: 2rem;">
        Men / Shoes / Running / <span style="color: var(--ds-sys-color-on-surface); font-weight: 500;">Aero Pegasus 40</span>
      </div>

      <div style="display: grid; grid-template-columns: 80px 1fr; gap: 1rem; position: sticky; top: 1.5rem;">
        
        <!-- Thumbnail Strip -->
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
           <div style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-on-surface); cursor: pointer;"></div>
           <div style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/sneaker2.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 1px solid transparent; opacity: 0.5; cursor: pointer;"></div>
           <div style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/sneaker3.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 1px solid transparent; opacity: 0.5; cursor: pointer;"></div>
           <div style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/sneaker4.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 1px solid transparent; opacity: 0.5; cursor: pointer;"></div>
        </div>

        <!-- Main Hero Image Area -->
        <div style="background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); height: 500px; border-radius: 4px; display: flex; justify-content: center; align-items: center; cursor: zoom-in;">
          <span style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem;">Product Image Canvas</span>
        </div>

      </div>
    </div>

    <!-- Right Column: Interactive Configuration Form -->
    <div style="padding: 3rem; overflow-y: auto;">
      
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <div>
          <h1 style="font-size: 2rem; font-weight: 900; letter-spacing: -1px; margin: 0; text-transform: uppercase;">Aero Pegasus 40</h1>
          <div style="font-size: 1.1rem; color: var(--ds-sys-color-on-surface-variant); margin-top: 0.25rem;">Men's Road Running Shoes</div>
        </div>
        <div style="font-size: 1.5rem; font-weight: 600;">$130</div>
      </div>

      <!-- Star Rating -->
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2.5rem; font-size: 0.9rem; font-weight: 500;">
        <div style="display: flex; color: var(--ds-sys-color-on-surface);">
          <span class="material-symbols-outlined" style="font-size: 1.1rem; font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined" style="font-size: 1.1rem; font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined" style="font-size: 1.1rem; font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined" style="font-size: 1.1rem; font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined" style="font-size: 1.1rem; font-variation-settings: 'FILL' 1; color: var(--ds-sys-color-surface-container-high);">star</span>
        </div>
        <span style="color: var(--ds-sys-color-on-surface-variant); text-decoration: underline; cursor: pointer;">(428 Reviews)</span>
      </div>

      <!-- Color Selection (Radio Group Mock) -->
      <div style="margin-bottom: 2rem;">
        <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem;">Select Color: <span style="color: var(--ds-sys-color-on-surface-variant); font-weight: 400;">White / Metallic Silver / Black</span></div>
        <div style="display: flex; gap: 0.5rem;">
           <div style="width: 48px; height: 48px; border-radius: 50%; background: #f9f9f9; border: 2px solid var(--ds-sys-color-on-surface); cursor: pointer;"></div>
           <div style="width: 48px; height: 48px; border-radius: 50%; background: #1a1a1a; border: 1px solid var(--ds-sys-color-border); cursor: pointer;"></div>
           <div style="width: 48px; height: 48px; border-radius: 50%; background: #ef4444; border: 1px solid var(--ds-sys-color-border); cursor: pointer;"></div>
        </div>
      </div>

      <!-- Size Selection Matrix -->
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <div style="font-weight: 600; font-size: 0.9rem;">Select Size</div>
          <div style="font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant); text-decoration: underline; cursor: pointer;">Size Guide</div>
        </div>
        <div class="l-grid" style="grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
          <div style="border: 1px solid var(--ds-sys-color-border); border-radius: 4px; padding: 0.75rem 0; text-align: center; cursor: pointer; font-weight: 500; font-size: 0.9rem;">M 7 / W 8.5</div>
          <div style="border: 1px solid var(--ds-sys-color-border); border-radius: 4px; padding: 0.75rem 0; text-align: center; cursor: pointer; font-weight: 500; font-size: 0.9rem;">M 7.5 / W 9</div>
          <div style="border: 1px solid var(--ds-sys-color-border); border-radius: 4px; padding: 0.75rem 0; text-align: center; cursor: pointer; font-weight: 500; font-size: 0.9rem;">M 8 / W 9.5</div>
          <div style="border: 1px solid var(--ds-sys-color-on-surface); border-radius: 4px; padding: 0.75rem 0; text-align: center; cursor: pointer; font-weight: 700; font-size: 0.9rem; box-shadow: inset 0 0 0 1px var(--ds-sys-color-on-surface);">M 8.5 / W 10</div>
          <div style="border: 1px solid var(--ds-sys-color-border); border-radius: 4px; padding: 0.75rem 0; text-align: center; cursor: pointer; font-weight: 500; font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant); background: var(--ds-sys-color-surface-container-lowest);">M 9 / W 10.5</div>
          <div style="border: 1px solid var(--ds-sys-color-border); border-radius: 4px; padding: 0.75rem 0; text-align: center; cursor: pointer; font-weight: 500; font-size: 0.9rem;">M 9.5 / W 11</div>
        </div>
      </div>

      <!-- Add to Cart Pipeline -->
      <button class="btn btn-primary btn-lg" style="width: 100%; border-radius: 999px; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem;">Add to Bag</button>
      <button class="btn btn-outline btn-lg" style="width: 100%; border-radius: 999px; font-weight: 700; font-size: 1rem; margin-bottom: 2rem;">Favorite <span class="material-symbols-outlined" style="font-size: 1.2rem; margin-left: 0.5rem; font-variation-settings: 'FILL' 0, 'wght' 300;">favorite</span></button>

      <!-- Description Text -->
      <p style="font-size: 0.95rem; line-height: 1.6; color: var(--ds-sys-color-on-surface); margin-bottom: 2rem;">
        A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love but with improved comfort in those sensitive areas of your foot.
      </p>

      <!-- Accordions for Specifications -->
      <div style="border-top: 1px solid var(--ds-sys-color-border);">
        <div style="padding: 1.5rem 0; border-bottom: 1px solid var(--ds-sys-color-border); display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 1.1rem; cursor: pointer;">
          Shipping & Returns
          <span class="material-symbols-outlined">expand_more</span>
        </div>
        <div style="padding: 1.5rem 0; border-bottom: 1px solid var(--ds-sys-color-border); display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 1.1rem; cursor: pointer;">
          Product Details
          <span class="material-symbols-outlined">expand_more</span>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
{{< /demo >}}

---

## Explore this Archetype

The E-Commerce archetype contains additional demonstration pages showcasing how to map data structures to powerful presentation layouts:

- **[Spring Campaign Landing Page](/aurora-docs/archetypes/ecommerce/spring-campaign/)**: Demonstrates using the Super List `viewport` and `bento` layouts for immersive marketing.
- **[Collection Showcase Page](/aurora-docs/archetypes/ecommerce/collection-showcase/)**: Demonstrates using the Super List `timeline` and `accordion` layouts for interactive product storytelling.
- **[Category Listing (PLP)](/aurora-docs/archetypes/ecommerce/shoes/)**: A standard filterable grid layout with sidebar navigation.
