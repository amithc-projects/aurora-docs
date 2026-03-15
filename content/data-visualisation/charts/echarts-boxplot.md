---
title: "Boxplot Light Velocity"
description: "A demonstration of the Boxplot Light Velocity from Apache ECharts."
image: "/images/charts/echarts-boxplot.png"
tags: ["Advanced"]
---
# Boxplot Light Velocity

This is an automatically generated example of the **Boxplot Light Velocity** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "item"
  },
  "dataset": [
    {
      "source": [
        [
          850,
          740,
          900,
          1070,
          930,
          850,
          950,
          980,
          980,
          880,
          1000,
          980
        ],
        [
          960,
          940,
          960,
          940,
          880,
          800,
          850,
          880,
          900,
          840,
          830,
          790
        ]
      ]
    },
    {
      "transform": {
        "type": "boxplot"
      }
    }
  ],
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "type": "boxplot",
      "datasetIndex": 1
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
