---
title: "Smoothed Line Chart"
description: "A demonstration of the Smoothed Line Chart from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Smoothed Line Chart

This is an automatically generated example of the **Smoothed Line Chart** type, extending the `[data-component="aurora-chart"]` wrapper.

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
      "data": [
        820,
        932,
        901,
        934,
        1200
      ],
      "type": "line",
      "smooth": true
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
