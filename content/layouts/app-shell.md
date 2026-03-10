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
    <nav class="app-sidebar" style="background: var(--ds-sys-color-surface-container-low); border-right: 1px solid var(--ds-sys-color-border); padding: 1rem;">
      <h4 style="margin-top:0;">Navigation</h4>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 0.5rem 0;">Dashboard</li>
        <li style="padding: 0.5rem 0;">Analytics</li>
        <li style="padding: 0.5rem 0;">Settings</li>
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
    
    <header class="app-header" style="background: var(--ds-sys-color-surface-inverse); color: var(--ds-sys-color-on-surface-inverse); display: flex; align-items: center; padding: 0 1rem;">
      <h3 style="margin: 0;">Full Width Top Nav</h3>
    </header>

    <nav class="app-sidebar" style="background: var(--ds-sys-color-surface); border-right: 1px solid var(--ds-sys-color-border); padding: 1rem;">
      <p>I start below the header!</p>
    </nav>

    <main class="app-main" style="padding: 2rem; background: var(--ds-sys-color-surface-container-low);">
      <p>Documentation Content</p>
    </main>
    
  </div>

</div>
{{< /demo >}}

## 3. Complex 3-Column Layout

Adding a right-hand sidebar (an `aside`) is trivial. By switching to the `.l-app-shell--complex` variant, the CSS Grid introduces a third column tracked to the `.app-aside` identity tag.

{{< demo >}}
<div style="height: 500px; transform: scale(1);">
  
  <div class="l-app-shell l-app-shell--complex" style="height: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card);">
    
    <header class="app-header" style="background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border); padding: 0 1rem; display: flex; align-items: center;">
      Editor Header
    </header>

    <nav class="app-sidebar" style="background: var(--ds-sys-color-surface-container-highest); border-right: 1px solid var(--ds-sys-color-border); padding: 1rem;">
      Left Tools
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
