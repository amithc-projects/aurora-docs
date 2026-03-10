---
title: "Dynamic Layout Switcher"
description: "Relocate physical UI zones instantly using independent CSS Grid template areas."
category: "Layouts"
menu:
  main:
    parent: "layouts"
    weight: 90
---

A cornerstone of modern SaaS architecture is giving users the ability to customize their workspace.

Rather than relying on Javascript to physically detatch HTML nodes and append them into different `div` wrappers, Aurora encourages utilizing CSS **Grid Template Areas** to effortlessly "teleport" structural zones.

## The Playground

The demo below utilizes a single fixed HTML structure: 
`<header>`, `<aside>`, `<main>`, and `<footer>`. 

Click the control buttons below to watch the `data-layout` attribute change on the parent container. The CSS exclusively handles re-mapping the physical coordinates of the zones!

{{< demo >}}
<!-- Control Mechanism -->
<div class="layout-controls" aria-label="Layout Switcher Controls">
  <label style="display: flex; gap: 4px; align-items: center; cursor: pointer;">
    <input type="radio" name="layoutToggle" value="standard" checked onchange="switchLayout(this.value)"> 
    Standard SaaS
  </label>
  <label style="display: flex; gap: 4px; align-items: center; cursor: pointer;">
    <input type="radio" name="layoutToggle" value="reversed" onchange="switchLayout(this.value)"> 
    Reversed (RTL)
  </label>
  <label style="display: flex; gap: 4px; align-items: center; cursor: pointer;">
    <input type="radio" name="layoutToggle" value="stacked" onchange="switchLayout(this.value)"> 
    Stacked Top-Nav
  </label>
  <label style="display: flex; gap: 4px; align-items: center; cursor: pointer;">
    <input type="radio" name="layoutToggle" value="minimal" onchange="switchLayout(this.value)"> 
    Minimalist (Focus)
  </label>
</div>

<!-- The Live Grid Playground -->
<div class="layout-playground" id="demoPlayground" data-layout="standard">
  <div class="lp-zone lp-header">
    <span class="material-symbols-outlined" style="margin-right: 8px;">space_dashboard</span> Header Bar
  </div>
  <div class="lp-zone lp-sidebar">
    <span class="material-symbols-outlined" style="margin-right: 8px;">format_list_bulleted</span> Sidebar Nav
  </div>
  <div class="lp-zone lp-main">
    <span class="material-symbols-outlined" style="margin-right: 8px;">article</span> Main Content Area
  </div>
  <div class="lp-zone lp-footer">
    <span class="material-symbols-outlined" style="margin-right: 8px;">horizontal_rule</span> Footer
  </div>
</div>

<script>
  function switchLayout(layoutName) {
    const playground = document.getElementById('demoPlayground');
    // We strictly change ONE string on the parent element. 
    // The CSS does ALL the heavy lifting!
    playground.setAttribute('data-layout', layoutName);
  }
</script>
{{< /demo >}}

## How it works

We assign each child node an internal grid-area name:
```css
.lp-header  { grid-area: header; }
.lp-sidebar { grid-area: sidebar; }
.lp-main    { grid-area: main; }
.lp-footer  { grid-area: footer; }
```

Then we map those physical names onto the parent coordinates like a string matrix! Want to move the sidebar to the right? Just swap the strings in the CSS:

```css
  /* Sidebar Left (Standard) */
  .layout-playground[data-layout="standard"] {
    grid-template-areas:
      "header  header"
      "sidebar main"
      "footer  footer";
  }

  /* Sidebar Right (Reversed) */
  .layout-playground[data-layout="reversed"] {
    grid-template-areas:
      "header header"
      "main   sidebar"
      "footer footer";
  }
```
