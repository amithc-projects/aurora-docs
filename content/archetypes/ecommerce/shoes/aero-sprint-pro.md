---
title: "Aero Sprint Pro"
description: "Product details page for the Aero Sprint Pro racing shoe."
menu:
  main:
    parent: "ecommerce"

price: 220
ecommerce_category: "racing"
subtitle: "Men's Racing Shoes"
image: "/images/archetypes/aero-sprint-pro-side.png"
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
    
        <!-- Left Column: Image Gallery -->
    <div style="padding: 2rem; display: flex; gap: 1rem;">
      
      <!-- Thumbnail Strip -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="gallery-aero-sprint-pro">
         <div onclick="document.getElementById('main-img-aero-sprint-pro').style.backgroundImage = this.style.backgroundImage; Array.from(this.parentElement.children).forEach(c => { c.style.opacity = '0.5'; c.style.filter = 'grayscale(100%)'; c.style.borderColor = 'transparent'; }); this.style.opacity = '1'; this.style.filter = 'none'; this.style.borderColor = 'var(--ds-sys-color-on-surface)';" 
              style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/aero-sprint-pro-side.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 2px solid var(--ds-sys-color-on-surface); cursor: pointer; transition: all 0.2s;"></div>
         
         <div onclick="document.getElementById('main-img-aero-sprint-pro').style.backgroundImage = this.style.backgroundImage; Array.from(this.parentElement.children).forEach(c => { c.style.opacity = '0.5'; c.style.filter = 'grayscale(100%)'; c.style.borderColor = 'transparent'; }); this.style.opacity = '1'; this.style.filter = 'none'; this.style.borderColor = 'var(--ds-sys-color-on-surface)';" 
              style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/aero-sprint-pro-top.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 2px solid transparent; opacity: 0.5; filter: grayscale(100%); cursor: pointer; transition: all 0.2s;"></div>
              
         <div onclick="document.getElementById('main-img-aero-sprint-pro').style.backgroundImage = this.style.backgroundImage; Array.from(this.parentElement.children).forEach(c => { c.style.opacity = '0.5'; c.style.filter = 'grayscale(100%)'; c.style.borderColor = 'transparent'; }); this.style.opacity = '1'; this.style.filter = 'none'; this.style.borderColor = 'var(--ds-sys-color-on-surface)';" 
              style="width: 80px; height: 80px; background: url('/aurora-docs/images/archetypes/aero-sprint-pro-angle.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); border: 2px solid transparent; opacity: 0.5; filter: grayscale(100%); cursor: pointer; transition: all 0.2s;"></div>
      </div>

      <!-- Main Image -->
      <div id="main-img-aero-sprint-pro" style="flex: 1; background: url('/aurora-docs/images/archetypes/aero-sprint-pro-side.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-lowest); border-radius: 8px; transition: background-image 0.2s ease-in-out;"></div>
    </div>

    <!-- Right Column: Product Details -->
    <div style="padding: 3rem 4rem 3rem 2rem; background: var(--ds-sys-color-surface-container-lowest); border-left: 1px solid var(--ds-sys-color-border);">
      
      <div style="margin-bottom: 2rem;">
        <div style="font-weight: 600; color: var(--ds-sys-color-on-surface-variant); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 0.5rem;">Men's Racing Shoes</div>
        <h1 style="font-size: 2.75rem; font-weight: 800; line-height: 1; letter-spacing: -1px; margin: 0 0 1rem 0; text-transform: uppercase;">Aero Sprint Pro</h1>
        <div style="font-size: 1.5rem; font-weight: 500;">$220</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 3rem;">
        <a href="/aurora-docs/archetypes/ecommerce/checkout/" style="text-decoration: none; display: block;">
            <button style="width: 100%; padding: 1.25rem; border-radius: 999px; background: var(--ds-sys-color-on-surface); color: var(--ds-sys-color-surface); border: none; font-weight: 600; font-size: 1rem; cursor: pointer;">Add to Bag</button>
        </a>
      </div>

      <div style="font-size: 1rem; line-height: 1.6; color: var(--ds-sys-color-on-surface-variant);">
        Built for race day, the Sprint Pro utilizes a full-length carbon fiber plate coupled with our lightest, most responsive foam to propel you forward with every stride.
      </div>

    </div>
  </main>
</div>
{{< /demo >}}
