---
title: "Component Checklist"
description: "A comprehensive QA checklist for developing components in the Aurora Design System."
weight: 2
menu:
  main:
    parent: "overview"
---

Here is the comprehensive QA checklist for developing and reviewing components within the Aurora Design System. It aligns with our core philosophy of Atomic Design, semantic HTML, theming flexibility, modern CSS capabilities, and minimal client-side JavaScript.

### 1. Architecture & Atomic Design
- [ ] **Granularity Check:** Does the component fit logically into our Atomic structure (Atom, Molecule, Organism)? Cannot be broken down further (Atom), or combines existing Atoms (Molecule)?
- [ ] **Single Responsibility:** Does the component do *one* thing well? (e.g., A button should trigger actions; a link should navigate).
- [ ] **Reusability:** Is the component generic enough to be reused across different contexts (e.g., E-commerce, Dashboards) without heavy overriding?

### 2. Semantic HTML & Accessibility (A11y)
- [ ] **Native Elements First:** Does it use the correct HTML tags instead of `<div>` or `<span>` constructs? (e.g., `<button>` for actions, `<nav>` for navigation, `<ul>`/`<li>` for lists, `<dialog>` for modals, `<details>` for accordions).
- [ ] **Clean HTML (Minimal Classes):** Is the HTML markup kept exceptionally clean and free of class-clutter? Whenever possible, are you relying on CSS combinators (`>`, `+`, `~`, `:nth-child`) to target inner elements rather than applying a specific class to every single node?
- [ ] **Keyboard Navigation:** Can a user naturally navigate, focus, and operate the component using only the `Tab`, `Arrow`, `Enter`, and `Space` keys?
- [ ] **Focus States:** Are `:focus` and `:focus-visible` styles explicitly defined and visibly clear against the background?
- [ ] **ARIA & Labels:** Are the correct `role`, `aria-hidden`, and `aria-expanded` attributes dynamically managed? Are all inputs explicitly linked to a `<label>` via `for`/`id` combinations?

### 3. Modern CSS, Theming & Semantic Tokens
- [ ] **Strict Semantic Colors:** Are all color variables strictly semantic? (e.g., using `var(--color-primary)`, `var(--color-secondary)`, `var(--color-tertiary)`, or `var(--color-error)` instead of literal names like `var(--color-blue)` or hardcoded hex codes).
- [ ] **No Hardcoded Values:** Are spacing, typography, and radii utilizing our CSS Custom Properties instead of hardcoded pixel values?
- [ ] **Themability:** Does the component respect both Light and Dark modes seamlessly? 
- [ ] **Minimal Selectors:** Are CSS rules kept relatively flat to avoid deep nesting and specificity wars, while still utilizing advanced combinator targeting to maintain clean HTML?

### 4. Page Layouts & CSS Grid
- [ ] **Grid-First Page Layouts:** For macro page structures, is CSS Grid being utilized over Flexbox or floats?
- [ ] **Named Grid Areas:** Are complex layouts organized using `grid-template-areas`? (e.g., defining `"header header" "nav main" "footer footer"`) to decouple the visual presentation from the source order and make media query overrides trivial.
- [ ] **Fluid Adaptation:** Does the layout expand and contract gracefully based on its container's width (using tools like `minmax()` and `repeat(auto-fit, ...)`), reducing the strict dependency on rigid `@media` breakpoints?

### 5. Minimal JavaScript & Progressive Enhancement
- [ ] **CSS over JS:** Have you exhausted all CSS capabilities before reaching for JavaScript? (e.g., Using `:target`, `:has()`, `:focus-within`, or `<details>` for toggles instead of JS event listeners).
- [ ] **Graceful Degradation:** If JavaScript fails to load or is disabled, is the content still readable and logically structured? 
- [ ] **Performance:** Is the JS logic lean, event-delegated (where applicable), and strictly scoped to avoid memory leaks?

### 6. Documentation & Integration
- [ ] **Code Demonstration:** Does the component have exactly one interactive `{{</* demo */>}}` block in the documentation showcasing its primary state?
- [ ] **Variants Outlined:** Are edge-cases or variations (e.g., primary, error, disabled, loading states) documented?
- [ ] **Copy/Paste Ready:** Is the source code easily accessible via the "View Code" bar, allowing other engineers to copy the raw, un-cluttered HTML and CSS seamlessly?
