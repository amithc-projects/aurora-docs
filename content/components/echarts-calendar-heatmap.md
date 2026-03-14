---
title: "Calendar Heatmap"
description: "A demonstration of the Calendar Heatmap from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Calendar Heatmap

This is an automatically generated example of the **Calendar Heatmap** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "visualMap": {
    "show": false,
    "min": 0,
    "max": 10
  },
  "calendar": {
    "range": "2024"
  },
  "series": {
    "type": "heatmap",
    "coordinateSystem": "calendar",
    "data": [
      [
        "2024-01-01",
        5
      ],
      [
        "2024-01-02",
        10
      ]
    ]
  }
}
    </script>
  </div>
</div>
{{< /demo >}}
