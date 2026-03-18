---
title: "Lists"
description: "Styling and spacing for ordered, unordered, and unstyled list primitives."
menu:
  main:
    parent: "components-simple"
---

## Overview

Lists are the primary semantic tool for grouping related items. Aurora standardizes the spacing, margins, and bullet styles of standard HTML lists to ensure they integrate perfectly into typography and complex components.

## Unordered Lists (`<ul>`)

Use unordered lists when the sequence of items is irrelevant. By default, Aurora uses standard disc bullets.

{{< demo >}}
<ul>
  <li>Apples and fresh fruits</li>
  <li>
    Oats, grains, and cereals
    <ul>
      <li>Steel-cut oats</li>
      <li>Rolled oats</li>
    </ul>
  </li>
  <li>Dairy and milk alternatives</li>
</ul>
{{< /demo >}}

## Ordered Lists (`<ol>`)

Use ordered lists when items follow a specific sequence (like recipes, tutorials, or ranked results).

{{< demo >}}
<ol>
  <li>Preheat the oven to 180°C.</li>
  <li>Mix the dry ingredients in a large bowl.</li>
  <li>
    Slowly fold in the wet ingredients.
    <ol>
      <li>Milk</li>
      <li>Eggs</li>
      <li>Melted butter</li>
    </ol>
  </li>
  <li>Bake for 45 minutes or until golden brown.</li>
</ol>
{{< /demo >}}

## Unstyled Lists

In many complex components (like Navigation Menus, Tab strips, or the [Super List](/aurora-docs/patterns/super-list/)), you need the semantic wrapping of a `<ul>` without the default indentation and bullets. 

Use `.list-unstyled` utility classes (or write custom resets in your component CSS) to clear the padding and `list-style-type`.

{{< demo >}}
<ul style="list-style: none; padding-left: 0; margin-bottom: 0;">
  <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--ds-sys-color-border);">Dashboard</li>
  <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--ds-sys-color-border);">Settings</li>
  <li style="padding: 0.5rem 0;">Log Out</li>
</ul>
{{< /demo >}}

## Spacing and Rhythm

Lists inherit the baseline text size (`var(--text-base)`) and line height (`var(--leading-loose)`) of standard body copy. 

Nested lists automatically receive adjusted margins to ensure vertical rhythm remains consistent without feeling cramped or overly airy. Avoid manually injecting `<br>` tags between `<li>` elements.
