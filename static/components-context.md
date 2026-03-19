# Aurora Component Registry

This file acts as the strict Technical Source of Truth for AIs generating code with Aurora.

## Atoms

### Buttons
- **Wrapper**: `<button class="...">`
- **Primary**: `.primary` or `.btn.primary`
- **Secondary**: `.secondary`
- **Ghost**: `.btn-ghost`
- **Modifiers**: `.btn-sm`, `.btn-lg`

## Molecules

### Cards
- **Structure**: 
  ```html
  <div class="card">
    <div class="card__media">...image or video...</div>
    <div class="card__content">...text, headings, buttons...</div>
  </div>
  ```
- **Usage**: Used for displaying discrete pieces of content like products, blog posts, or profile views.

## Layout Primitives
Always use structural layout classes to align items.
- `.l-stack`: Vertical flexbox (gap: var(--space-md))
- `.l-grid`: Auto-fit css grid (gap: var(--space-lg))
- `.l-center`: Max-width container, margins auto.
- `.l-cluster`: Flex-wrap horizontal cluster for buttons/tags.
