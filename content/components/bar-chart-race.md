---
title: "Bar Chart Race"
description: "An animated horizontal bar chart component that displays changes in data over time."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

The `Bar Chart Race` displays ranking and points data over multiple time periods. It's configurable via data attributes and fetches a standard JSON payload.

## Anatomy

- **Container Data Attributes**: Use `data-component="bar-chart-race"` and define `data-src` to point to a valid JSON data source.
- **Title and Max Scale**: Set `data-title` and `data-max-score` (to calculate width proportions correctly).
- **Time Prefix**: Set `data-label-prefix` to override the prefix before the time index (e.g. `data-label-prefix="Matchweek "`).
- **Update Interval**: Determine the speed with `data-interval` (in ms).

## JSON Data Format

The Bar Chart Race expects JSON data in an array, progressing sequentially by time component. An optional `_meta` configuration can bind colors and logos dynamically.

```json
[
  {
    "_meta": {
      "colors": {
        "Team A": "#FF0000",
        "Team B": "#0000FF"
      },
      "logos": {
        "Team A": "/images/icons/team-a.svg",
        "Team B": "/images/icons/team-b.svg"
      }
    }
  },
  {
    "week": 1,
    "standings": [
      { "team": "Team A", "points": 3 },
      { "team": "Team B", "points": 0 }
    ]
  },
  {
    "week": 2,
    "standings": [
      { "team": "Team A", "points": 6 },
      { "team": "Team B", "points": 3 }
    ]
  }
]
```

## Example (Premier League Simulation)

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div 
      data-component="bar-chart-race" 
      data-src="/aurora-docs/data/pl_chart_race.json" 
      data-title="Premier League 24/25 Race"
      data-max-score="100"
      data-interval="1200"
      data-label-prefix="Matchweek ">
      <div class="skeleton-placeholder" style="height: 600px; width: 100%;">
        Loading chart...
      </div>
    </div>
  </div>
</div>
{{< /demo >}}
