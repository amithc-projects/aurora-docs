---
title: "Dashboard Patterns"
description: "Guidelines and best practices for composing Aurora ECharts into coherent, high-density product dashboards."
menu:
  main:
    parent: "data-visualisation"
    weight: 30
---

# Dashboard Patterns

A successful dashboard is much more than a collection of isolated charts. Aurora approaches Data Visualisation as a structured architectural system, ensuring elements feel cohesive.

This page explores the core composition patterns required to build a product-grade interface.

## Components & Wrappers

To avoid "dropping ECharts randomly into screens", Aurora relies on a unified wrapper system. Each wrapper enforces token-driven theming, consistent margin rules, and accessibility.

### AuroraChartCard
The standard container for a visualisation. It provides consistent padding, header typography, and optional action menus (export, refresh).

### AuroraDashboardGrid
A CSS subgrid layout utility designed specifically for mixing high-density cards, large time-series panels, and vertical lists seamlessly without breaking alignment.

### AuroraKPI
Micro-visualisations tailored for the top row of a dashboard. Features large typography for the primary metric, an `AuroraMetricDelta` indicator (e.g. +14% vs last week), and an inline `AuroraSparkline`.

### AuroraDataTable
While not strictly a chart, tables are the backbone of most analytical dashboards. `AuroraDataTable` supports embedded sparklines, progress bars, and status badges directly within cells.

### AuroraTimeRangePicker
A standardized mechanism for controlling the chronological scope of an entire dashboard layout simultaneously rather than configuring dates per chart.

## Creating a Coherent Experience

Aurora ECharts enforces specific patterns:
1. **Unified Tooltips**: Tooltips across all panels within a `AuroraDashboardGrid` share the exact same UI theme (`var(--ds-surface)` and `var(--ds-border)`) and typographic weights.
2. **Small / Medium / Large Density Modes**: Axis tick counts and legend verbosity automatically scale based on the physical pixel width of the `AuroraChartCard`.
3. **Empty / Loading / Error States**: Skeletons replace raw data during fetching phases, preventing abrupt layout shifts.

See the [SaaS Analytics Dashboard](/archetypes/saas/dashboard) for a real-world example of these components working in synergy.
