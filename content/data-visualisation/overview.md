---
title: "Overview"
description: "Core principles, motion strategies, and integration guides for composing Data Visualisation in Aurora."
menu:
  main:
    parent: "data-visualisation"
    weight: 1
---

# Overview

Data visualization in Aurora is powered by a closely integrated wrapper around [Apache ECharts](https://echarts.apache.org/). Rather than treating charts as isolated graphical elements, Aurora treats them as first-class citizens of the design system, enforcing strict rules around typography, spacing, accessibility, and theming.

This overview covers the core principles, motion strategies, and integration components necessary to build highly dense, production-grade SaaS analytics interfaces.

---

## Design Principles & Theme Tokens

### 1. Dashboard Realism
Aurora ECharts is not a "chart gallery." It is a structural architecture designed for high-density SaaS templates. Charts must fit coherently within 12-column `.l-dashboard-grid` grids alongside KPI cards, tables, and sparklines without breaking standard margins or padding.

### 2. Token-Driven Theming
Colors are never hardcoded as hex values inside JSON objects. All charts *must* refer back to global Aurora design tokens to guarantee automatic light/dark mode switching and high-contrast accessibility compliance.

- **Primary Sequences:** \`var(--ds-chart-1)\`, \`var(--ds-chart-2)\`, \`var(--ds-chart-3)\`, \`var(--ds-chart-4)\`
- **Semantic Status:** \`var(--ds-sys-color-success)\`, \`var(--ds-sys-color-warning)\`, \`var(--ds-sys-color-error)\`
- **Backgrounds:** \`var(--ds-sys-color-surface)\`, \`var(--ds-sys-color-surface-variant)\`
- **Text:** \`var(--ds-sys-color-on-surface)\`, \`var(--ds-sys-color-on-surface-variant)\`

### 3. Accessible Layouts
Legends and axes should dynamically collapse based on responsive breakpoints or container sizing. Maintain a contrast ratio of at least 3:1 for all categorical chart colors against their background surface.

---

## Motion & Interaction

### Restrained Animation
Animation should convey data loading or transitions, not flair.
- **Initial Load:** Series should utilize `animationEasing: 'cubicOut'` with a duration mapped to `var(--ds-sys-motion-duration-medium)` (usually 400-600ms).
- **Hover States:** Tooltips and crosshairs must snap instantly without lag to maintain the perception of high performance.
- **Progressive Rendering:** For scatter or map plots exceeding 10,000 nodes, utilize ECharts' `progressive` rendering flags to ensure the main UI thread never freezes.

---

## State Management

Charts rarely exist in perfect conditions. They must gracefully handle network delays and empty datasets.

### Loading States
Instead of an empty canvas or a spinning wheel, wrap complex charts in the standard `AuroraSkeleton` component to reserve the physical bounding box on the screen, preventing abrupt layout shifts when the ECharts instance finally resolves.

### Empty States
If an API returns zero results or a filtered query yields no matches, the `AuroraChartContainer` should transition to a centered `AuroraEmptyState` component featuring an instructional icon and a "Clear Filters" prompt, rather than displaying an empty Cartesian grid.

### Error States
Network failures should replace the chart canvas with a highly visible \`AuroraAlert\` component indicating the exact API failure, equipped with a "Retry" button.

---

## Integration Guide & Components

To prevent inconsistent padding and styling, Aurora provides several semantic HTML wrappers around the core ECharts engine. You should always use these outer containers to structure a dashboard panel rather than injecting `<canvas>` elements globally.

### 1. AuroraChartCard
The standard block container (`.aurora-card`). Enforces a 1px `var(--ds-sys-color-border)`, an explicit border-radius, and consistent inner padding `var(--ds-sys-spacing-4)`. 

### 2. AuroraDashboardGrid
A CSS subgrid layout utility (\`.l-dashboard-grid\`) designed for cleanly mixing 3-column KPI blocks, 6-column pie charts, and massive 12-column time-series lines within a dense viewport.

### 3. AuroraKPI
A micro-visualisation wrapper. Requires a large `<H3>` typographic metric, an inline \`AuroraMetricDelta\` (e.g., '+14%'), and an absolute-positioned \`AuroraSparkline\` canvas acting as a dynamic background texture.

### 4. AuroraDataTable
The backbone of analytics. Use \`.aurora-table\` to align dense textual rows, allowing for inline \`AuroraSparkline\` injection directly inside `<td>` cells to provide instant historical context to tabular rows.
