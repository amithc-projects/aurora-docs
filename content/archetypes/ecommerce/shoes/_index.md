---
title: "Men's Running Shoes"
description: "A category listing page demonstrating product grid layouts."
---

{{< demo >}}
<div style="padding: 2rem 3rem; background: var(--ds-sys-color-surface-container-lowest); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Breadcrumbs & Title -->
  <div style="margin-bottom: 2rem;">
    <div style="font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant); margin-bottom: 0.5rem; text-transform: uppercase; font-weight: 600;">
      <a href="/aurora-docs/archetypes/ecommerce/" style="color: inherit; text-decoration: none;">Home</a> / Shoes / Men
    </div>
    <h1 style="font-size: 2.5rem; font-weight: 900; margin: 0; letter-spacing: -1px; text-transform: uppercase;">Men's Running (4)</h1>
  </div>

  <div style="display: grid; grid-template-columns: 250px 1fr; gap: 3rem;">
    
    <!-- Filters Sidebar -->
    <aside style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="font-size: 1rem; font-weight: 700; margin: 0 0 1rem 0; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 0.5rem;">Categories</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem; color: var(--ds-sys-color-on-surface-variant);">
          <label style="cursor: pointer;"><input type="checkbox" checked style="margin-right: 0.5rem;"> Road Running (3)</label>
          <label style="cursor: pointer;"><input type="checkbox" style="margin-right: 0.5rem;"> Trail Running (1)</label>
          <label style="cursor: pointer;"><input type="checkbox" style="margin-right: 0.5rem;"> Track & Field (0)</label>
        </div>
      </div>

      <div>
        <h4 style="font-size: 1rem; font-weight: 700; margin: 0 0 1rem 0; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 0.5rem;">Price</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem; color: var(--ds-sys-color-on-surface-variant);">
          <label style="cursor: pointer;"><input type="checkbox" style="margin-right: 0.5rem;"> Under $100</label>
          <label style="cursor: pointer;"><input type="checkbox" checked style="margin-right: 0.5rem;"> $100 - $150</label>
          <label style="cursor: pointer;"><input type="checkbox" checked style="margin-right: 0.5rem;"> Over $150</label>
        </div>
      </div>
    </aside>

    <!-- Product Grid -->
    <main class="l-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
      
      <!-- Card 1 -->
      <a href="/aurora-docs/archetypes/ecommerce/shoes/aero-invincible-3/" style="text-decoration: none; color: inherit; display: block; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="height: 300px; background: url('/aurora-docs/images/archetypes/sneaker.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;"></div>
        <div>
          <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Invincible 3</h3>
          <p style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant); margin: 0 0 0.5rem 0;">Men's Road Running Shoes</p>
          <div style="font-weight: 700;">$180.00</div>
        </div>
      </a>

      <!-- Card 2 -->
      <a href="/aurora-docs/archetypes/ecommerce/shoes/aero-sprint-pro/" style="text-decoration: none; color: inherit; display: block; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="height: 300px; background: url('/aurora-docs/images/archetypes/sneaker2.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;"></div>
        <div>
          <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Sprint Pro</h3>
          <p style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant); margin: 0 0 0.5rem 0;">Men's Racing Shoes</p>
          <div style="font-weight: 700;">$220.00</div>
        </div>
      </a>

      <!-- Card 3 -->
      <a href="/aurora-docs/archetypes/ecommerce/shoes/aero-street-x/" style="text-decoration: none; color: inherit; display: block; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="height: 300px; background: url('/aurora-docs/images/archetypes/sneaker3.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem; position: relative;">
          <div style="position: absolute; top: 10px; left: 10px; background: #ef4444; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; text-transform: uppercase;">Sale</div>
        </div>
        <div>
          <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Street X</h3>
          <p style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant); margin: 0 0 0.5rem 0;">Men's Lifestyle Shoes</p>
          <div style="font-weight: 700; display: flex; gap: 0.5rem;">
            <span style="color: #ef4444;">$95.00</span>
            <span style="text-decoration: line-through; color: var(--ds-sys-color-on-surface-variant); font-weight: 500;">$130.00</span>
          </div>
        </div>
      </a>

      <!-- Card 4 -->
      <a href="/aurora-docs/archetypes/ecommerce/shoes/aero-air-max-pulse/" style="text-decoration: none; color: inherit; display: block; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="height: 300px; background: url('/aurora-docs/images/archetypes/sneaker4.png') center/contain no-repeat; background-color: var(--ds-sys-color-surface-container-low); margin-bottom: 1rem;"></div>
        <div>
          <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--ds-sys-color-on-surface);">Aero Air Max Pulse</h3>
          <p style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant); margin: 0 0 0.5rem 0;">Men's Trail Running</p>
          <div style="font-weight: 700;">$150.00</div>
        </div>
      </a>

    </main>
  </div>
</div>
{{< /demo >}}
