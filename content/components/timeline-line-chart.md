---
title: "Timeline Line Chart"
description: "A data-driven interactive line chart leveraging Chart.js to map scores or rank history."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

The `Timeline Line Chart` reads identical JSON data to the Bar Chart Race but uses Chart.js to draw intersecting or rank-based history over an entire period.

## Anatomy

- **Container Data Attributes**: Use `data-component="timeline-line-chart"` and `data-src` to trigger standard initialization.
- **Rank Toggle**: Add `data-is-rank` to auto-invert the Y-axis and calculate ranks dynamically from points/score values.
- **Chart Details**: Use `data-title` and `data-desc` string attributes to present chart data context to the user.
- **Filtering**: By default, toggles are provided underneath to filter out single lines.

## JSON Data Format

The Line Chart parses the exact identical data format as the **Bar Chart Race**, allowing them to share API endpoints or local files. It maps each item through time and compares their points (or ranking) for a given week/period. See the `Bar Chart Race` component for the data format definition.

## Example (Rank History)

The following example reads the Premier League race JSON file but uses the `data-is-rank` option to dynamically sort them and calculate ranking week-over-week.

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div 
      data-component="timeline-line-chart" 
      data-src="/aurora-docs/data/pl_chart_race.json" 
      data-title="Season Path 24/25"
      data-desc="Track team journeys through the standings"
      data-is-rank>
        <div class="skeleton-placeholder" style="height: 600px; width: 100%;">
          Loading chart...
        </div>
    </div>
  </div>
</div>
{{< /demo >}}
