---
title: "Mega Menu"
description: "A full-width semantic dropdown panel that accommodates complex multi-column layouts and rich content."
category: "Navigation"
menu:
  main:
    parent: "navigation"
    weight: 50
---

The `nav-mega` component is designed for expansive top-tier navigation. Instead of cascading standard lists like the Flyout Menu, it deploys a `100%` width panel driven by native CSS Grid.

This allows you to organize extensive site architecture into categorical groups, incorporate promotional cards, or embed rich media—all triggered immediately on `:hover` via pure CSS architecture.

## Creating a Mega Panel

By applying `position: static` to the hovered `<li>` and wrapping the navigation within a `.nav-mega-wrapper` containing `position: relative`, the absolutely positioned `.nav-mega-panel` mathematically expands to fill the entire horizontal width of the container header.

{{< demo >}}
<div style="min-height: 400px; padding-bottom: 2rem;">

<div class="nav-mega-wrapper" style="position: relative;">
  <nav class="nav-mega" aria-label="Mega Navigation">
    <ul>
      
      <li>
        <a href="#" class="nav-link">Home</a>
      </li>

      <!-- MEGA TRIGGER ITEM -->
      <li>
        <a href="#" class="nav-link" aria-haspopup="true" aria-expanded="false">
          Departments
          <span class="cascader"></span>
        </a>
        
        <!-- MEGA PANEL -->
        <div class="nav-mega-panel">
          <div class="nav-mega-grid cols-4">
            
            <!-- Column 1 -->
            <div class="nav-mega-column">
              <h4>Electronics</h4>
              <ul>
                <li><a href="#">Laptops & Desktops</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Audio & Headphones</a></li>
                <li><a href="#">Wearables</a></li>
              </ul>
            </div>

            <!-- Column 2 -->
            <div class="nav-mega-column">
              <h4>Home & Kitchen</h4>
              <ul>
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Decor</a></li>
                <li><a href="#">Appliances</a></li>
                <li><a href="#">Cookware</a></li>
              </ul>
            </div>

            <!-- Column 3 -->
            <div class="nav-mega-column">
              <h4>Apparel</h4>
              <ul>
                <li><a href="#">Men's Clothing</a></li>
                <li><a href="#">Women's Clothing</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            
            <!-- Column 4 (Promo) -->
            <div class="nav-mega-column">
               <div class="nav-mega-promo" style="background: url('https://picsum.photos/400/300') center/cover; position: relative; overflow: hidden; min-height: 180px;">
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); border-radius: inherit;"></div>
                  <div style="position: relative; z-index: 10; color: white;">
                    <h3>Holiday Sale!</h3>
                    <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Up to 50% off clearout electronics and accessories.</p>
                    <a href="#" style="display: inline-block; margin-top: 1rem; color: var(--ds-sys-color-primary, #60A5FA); font-weight: bold; text-decoration: none;">Shop Now &rarr;</a>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </li>

      <li>
        <a href="#" class="nav-link">Special Offers</a>
      </li>

    </ul>
  </nav>
</div>
<main style="padding: 2rem; text-align: center; color: var(--ds-sys-color-on-surface-variant); background: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card); margin-top: 1rem; height: 100%;">
  Hover over "Departments" to deploy the Mega Menu!
</main>
</div>
{{< /demo >}}
