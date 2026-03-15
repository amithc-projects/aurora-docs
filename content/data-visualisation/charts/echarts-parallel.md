---
title: "Parallel Coordinates (AQI)"
description: "A demonstration of the Parallel Coordinates (AQI) from Apache ECharts."
image: "/images/charts/echarts-parallel.png"
tags: ["Advanced"]
---
# Parallel Coordinates (AQI)

This is an automatically generated example of the **Parallel Coordinates (AQI)** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "item"
  },
  "parallelAxis": [
    {
      "dim": 0,
      "name": "Price"
    },
    {
      "dim": 1,
      "name": "Net Weight"
    },
    {
      "dim": 2,
      "name": "Amount"
    }
  ],
  "parallel": {
    "left": "5%",
    "right": "13%",
    "bottom": "10%",
    "top": "20%"
  },
  "series": [
    {
      "type": "parallel",
      "lineStyle": {
        "width": 4
      },
      "data": [
        [
          12.99,
          100,
          82
        ],
        [
          9.99,
          80,
          77
        ],
        [
          20,
          120,
          60
        ]
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
