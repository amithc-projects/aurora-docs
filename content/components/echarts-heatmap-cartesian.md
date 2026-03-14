---
title: "Heatmap on Cartesian"
description: "A demonstration of the Heatmap on Cartesian from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Heatmap on Cartesian

This is an automatically generated example of the **Heatmap on Cartesian** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {},
  "xAxis": {
    "type": "category",
    "data": [
      "12a",
      "1a",
      "2a"
    ]
  },
  "yAxis": {
    "type": "category",
    "data": [
      "Sat",
      "Sun"
    ]
  },
  "visualMap": {
    "min": 0,
    "max": 10,
    "calculable": true,
    "orient": "horizontal",
    "left": "center",
    "bottom": "15%"
  },
  "series": [
    {
      "type": "heatmap",
      "data": [
        [
          0,
          0,
          5
        ],
        [
          1,
          0,
          1
        ],
        [
          2,
          0,
          0
        ],
        [
          0,
          1,
          3
        ],
        [
          1,
          1,
          2
        ],
        [
          2,
          1,
          5
        ]
      ],
      "itemStyle": {
        "borderColor": "#fff"
      }
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
