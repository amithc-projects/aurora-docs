---
title: "Stacked Column Chart"
description: "A demonstration of the Stacked Column Chart from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Stacked Column Chart

This is an automatically generated example of the **Stacked Column Chart** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {},
  "xAxis": {
    "type": "category",
    "data": [
      "Mon",
      "Tue",
      "Wed"
    ]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "Email",
      "type": "bar",
      "stack": "Ad",
      "data": [
        120,
        132,
        101
      ]
    },
    {
      "name": "Video Ads",
      "type": "bar",
      "stack": "Ad",
      "data": [
        150,
        232,
        201
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
