---
title: "App Shell"
description: "A foundational layout engine utilizing CSS Grid Named Areas to physically map and teleport application zones without altering HTML structure."
weight: 15
menu:
  main:
    parent: "layouts"
---

The `l-app-shell` is the most powerful macro-layout system in Aurora. It utilizes CSS `grid-template-areas` to create a visual map of your application layout perfectly decoupled from the structural DOM order.

Need to change from a "Stripe-style dashboard" (where the sidebar spans the full height) to a "Tailwind-style docs site" (where the top-nav spans the full width)? Simply change the wrapper class. The CSS Grid engine organically reshuffles the regions. 

Even more powerfully, on mobile breakpoints, you can magically teleport a desktop left-sidebar to act as a mobile bottom-tab-bar, without writing a single line of JavaScript.

## 1. Standard Dashboard Layout

This is the canonical SaaS dashboard layout. The sidebar occupies the left column for the entire viewport height. The header spans the remaining width at the top, and the main content fills the rest.

Resize your browser to see the layout natively collapse: the Desktop Sidebar will visually drop to the Bottom of the screen!

{{< demo >}}
<div style="height: 500px; transform: scale(1); /* Create containment context */">
  
  <div class="l-app-shell l-app-shell--standard" style="height: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card);">
    
    <!-- HEADER -->
    <header class="app-header" style="background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border); display: flex; align-items: center; padding: 0 1rem;">
      <h3 style="margin: 0;">Dashboard Header</h3>
    </header>

    <!-- SIDEBAR -->
    <nav class="app-sidebar nav-side" style="background: var(--ds-sys-color-surface-container-low); border-right: 1px solid var(--ds-sys-color-border);">
      <div style="padding: 1rem; border-bottom: 1px solid var(--ds-sys-color-border);">
        <h3 style="margin: 0;">Aurora App</h3>
      </div>
      <ul style="padding: 1rem 0;">
        <li>
          <a href="#" class="is-active">
            <span class="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined">analytics</span>
            Analytics
          </a>
        </li>
        <li>
          <details>
            <summary>
              <div class="ds-flex ds-items-center">
                <span class="material-symbols-outlined">settings</span>
                <span style="margin-left: 0.5rem;">Settings</span>
              </div>
            </summary>
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Billing</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="app-main" style="padding: 2rem;">
      <h2>Welcome Back</h2>
      <p style="color: var(--ds-sys-color-on-surface-variant);">
        This is the main scrollable content area. As you fill this with content, it scrolls independently of the static Sidebar and Header wrappers.
      </p>
      <div style="height: 600px; background: repeating-linear-gradient(45deg, var(--ds-sys-color-surface-container), var(--ds-sys-color-surface-container) 10px, transparent 10px, transparent 20px); opacity: 0.5; border-radius: var(--ds-sys-radius-btn);"></div>
    </main>
    
  </div>

</div>
{{< /demo >}}

## 2. Documentation Layout

In a classic documentation portal configuration, the Top Header spans the *entire* horizontal width of the screen. The Left Sidebar starts beneath it. Notice that the HTML code identity tags (`.app-header`, `.app-sidebar`) remain exactly the same as the example above!

{{< demo >}}
<div style="height: 500px; transform: scale(1);">
  
  <div class="l-app-shell l-app-shell--docs" style="height: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card);">
    
    <header class="app-header nav-global" style="background: var(--ds-sys-color-surface-inverse); color: var(--ds-sys-color-on-surface-inverse); padding: 0 1rem;">
      <div class="nav-global__brand">
        <span class="material-symbols-outlined" style="font-size: 24px;">menu_book</span>
        <span style="font-weight: bold; margin-left: 0.5rem; letter-spacing: 0.5px;">AURORA DOCS</span>
      </div>
      <div class="nav-global__search ds-mx-auto" style="min-width: 300px;">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search documentation... (Cmd+K)" />
      </div>
      <ul class="nav-global__menu">
        <li><a href="#" class="nav-link">Components</a></li>
        <li><a href="#" class="nav-link">Layouts</a></li>
        <li><a href="#" class="nav-link">GitHub</a></li>
      </ul>
    </header>

    <nav class="app-sidebar nav-side" style="background: var(--ds-sys-color-surface); border-right: 1px solid var(--ds-sys-color-border);">
      <ul style="padding: 1rem 0;">
        <li>
          <details open>
            <summary>
              <div class="ds-flex ds-items-center">
                <span>Getting Started</span>
              </div>
            </summary>
            <ul>
              <li><a href="#">Installation</a></li>
              <li><a href="#">Theming</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>

    <main class="app-main" style="padding: 2rem; background: var(--ds-sys-color-surface-container-low);">
      <p>Documentation Content</p>
    </main>
    
  </div>

</div>
{{< /demo >}}

## 3. Complex 3-Column Layout

Adding a right-hand sidebar (an `aside`) is trivial. By switching to the `.l-app-shell--rail` variant, the CSS Grid introduces a third column tracked to the `.app-aside` identity tag.

{{< demo >}}
<div style="height: 500px; transform: scale(1);">
  
  <div class="l-app-shell l-app-shell--rail" style="height: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card);">
    
    <header class="app-header" style="background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border); padding: 0 1rem; display: flex; align-items: center;">
      Editor Header
    </header>

    <nav class="app-sidebar nav-rail" style="background: var(--ds-sys-color-surface-container-highest); border-right: 1px solid var(--ds-sys-color-border);">
      <ul>
        <li>
          <a href="#" class="is-active">
             <div class="nav-rail-inner">
               <span class="material-symbols-outlined">edit</span>
               <span class="nav-rail-label">Draw</span>
             </div>
          </a>
        </li>
        <li>
          <a href="#">
             <div class="nav-rail-inner">
               <span class="material-symbols-outlined">text_fields</span>
               <span class="nav-rail-label">Text</span>
             </div>
          </a>
        </li>
        <li>
          <a href="#">
             <div class="nav-rail-inner">
               <span class="material-symbols-outlined">image</span>
               <span class="nav-rail-label">Media</span>
             </div>
          </a>
        </li>
      </ul>
    </nav>

    <main class="app-main" style="padding: 2rem;">
      Canvas Area
    </main>

    <aside class="app-aside" style="background: var(--ds-sys-color-surface-container-highest); border-left: 1px solid var(--ds-sys-color-border); padding: 1rem;">
      Right Properties Panel
    </aside>
    
  </div>

</div>
{{< /demo >}}
