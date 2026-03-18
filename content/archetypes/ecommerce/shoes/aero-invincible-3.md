---
title: "Aero Invincible 3"
description: "Product details page for the Aero Invincible 3 running shoe."
menu:
  main:
    parent: "ecommerce"
---

{{< demo >}}
<!-- Inherits the PDP layout we have built, localized for this specific shoe -->
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-surface); font-family: var(--ds-sys-font-family-base);">
  
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; border-bottom: 1px solid var(--ds-sys-color-border);">
    <div style="font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; text-transform: uppercase;"><a href="/aurora-docs/archetypes/ecommerce/" style="color: inherit; text-decoration: none;">AERO</a></div>
    <nav style="display: flex; gap: 2rem; font-size: 0.9rem; font-weight: 600; text-transform: uppercase;">
      <span style="color: var(--ds-sys-color-on-surface); cursor: pointer; border-bottom: 2px solid var(--ds-sys-color-on-surface); padding-bottom: 4px;">New Releases</span>
      <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Men</span>
      <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Women</span>
      <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Kids</span>
    </nav>
    <div style="display: flex; gap: 1.5rem;">
      <span class="material-symbols-outlined" style="cursor: pointer;">search</span>
      <span class="material-symbols-outlined" style="cursor: pointer;">shopping_bag</span>
    </div>
  </header>

  <main class="l-grid" style="grid-template-columns: 1fr 400px; min-height: 800px;">
    
    <!-- Left Column: Image Gallery (Replacing the monolithic demo block) -->
    <div style="padding: 2rem; display: flex; gap: 1rem;">
      
      <!-- Thumbnail Strip -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
         <div style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-on-surface); cursor: pointer;"></div>
         <div style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 1px solid transparent; opacity: 0.5; filter: grayscale(100%); cursor: pointer;"></div>
      </div>

      <!-- Main Image -->
      <div style="flex: 1; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-lowest); border-radius: 8px;"></div>
    </div>

    <!-- Right Column: Product Details -->
    <div style="padding: 3rem 4rem 3rem 2rem; background: var(--ds-sys-color-surface-container-lowest); border-left: 1px solid var(--ds-sys-color-border);">
      
      <!-- Typography Hierarchy -->
      <div style="margin-bottom: 2rem;">
        <div style="font-weight: 600; color: var(--ds-sys-color-on-surface-variant); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 0.5rem;">Men's Road Running Shoes</div>
        <h1 style="font-size: 2.75rem; font-weight: 800; line-height: 1; letter-spacing: -1px; margin: 0 0 1rem 0; text-transform: uppercase;">Aero Invincible 3</h1>
        <div style="font-size: 1.5rem; font-weight: 500;">$180</div>
      </div>

      <!-- Size Selection -->
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
          <h3 style="font-size: 1rem; font-weight: 600; margin: 0;">Select Size</h3>
          <span style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant); cursor: pointer; text-decoration: underline;">Size Guide</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
          <button style="border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); padding: 1rem; border-radius: 4px; font-weight: 500; cursor: pointer;">M 7 / W 8.5</button>
          <button style="border: 1px solid var(--ds-sys-color-on-surface); background: var(--ds-sys-color-surface); padding: 1rem; border-radius: 4px; font-weight: 700; box-shadow: 0 0 0 1px var(--ds-sys-color-on-surface); cursor: pointer;">M 7.5 / W 9</button>
          <button style="border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); padding: 1rem; border-radius: 4px; font-weight: 500; cursor: pointer;">M 8 / W 9.5</button>
          <button style="border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); padding: 1rem; border-radius: 4px; font-weight: 500; cursor: pointer;">M 8.5 / W 10</button>
          <button style="border: 1px solid var(--ds-sys-color-border); background: rgba(0,0,0,0.05); color: var(--ds-sys-color-on-surface-variant); padding: 1rem; border-radius: 4px; font-weight: 500; cursor: not-allowed; text-decoration: line-through;">M 9 / W 10.5</button>
          <button style="border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); padding: 1rem; border-radius: 4px; font-weight: 500; cursor: pointer;">M 9.5 / W 11</button>
        </div>
      </div>

      <!-- Actions -->
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 3rem;">
        <a href="/aurora-docs/archetypes/ecommerce/checkout/" style="text-decoration: none; display: block;">
            <button style="width: 100%; padding: 1.25rem; border-radius: 999px; background: var(--ds-sys-color-on-surface); color: var(--ds-sys-color-surface); border: none; font-weight: 600; font-size: 1rem; cursor: pointer;">Add to Bag</button>
        </a>
        <button style="width: 100%; padding: 1.25rem; border-radius: 999px; background: var(--ds-sys-color-surface); color: var(--ds-sys-color-on-surface); border: 1px solid var(--ds-sys-color-border); font-weight: 600; font-size: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer;">
          Favorite <span class="material-symbols-outlined" style="font-size: 1.25rem;">favorite_border</span>
        </button>
      </div>

      <!-- Description Context -->
      <div style="font-size: 1rem; line-height: 1.6; color: var(--ds-sys-color-on-surface-variant);">
        With maximum cushioning to support every mile, the Invincible 3 gives you our highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond. Designed to help keep you on the run, it's super springy and bouncy.
      </div>

    </div>
  </main>

</div>
{{< /demo >}}
