---
title: "Step Line Chart"
description: "A demonstration of the Step Line Chart from Apache ECharts."
image: "/images/charts/echarts-line-step.png"
tags: ["Line"]
---
# Step Line Chart

This is an automatically generated example of the **Step Line Chart** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "axis"
  },
  "xAxis": {
    "type": "category",
    "data": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri"
    ]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "type": "line",
      "step": "start",
      "data": [
        120,
        132,
        101,
        134,
        90
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
