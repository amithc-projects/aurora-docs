---
title: "Waterfall Chart"
description: "A demonstration of the Waterfall Chart from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Waterfall Chart

This is an automatically generated example of the **Waterfall Chart** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    }
  },
  "xAxis": {
    "type": "category",
    "data": [
      "Start",
      "Up",
      "Down",
      "End"
    ]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "Placeholder",
      "type": "bar",
      "stack": "Total",
      "itemStyle": {
        "borderColor": "transparent",
        "color": "transparent"
      },
      "emphasis": {
        "itemStyle": {
          "borderColor": "transparent",
          "color": "transparent"
        }
      },
      "data": [
        0,
        900,
        1245,
        0
      ]
    },
    {
      "name": "Income",
      "type": "bar",
      "stack": "Total",
      "data": [
        900,
        345,
        "-",
        1080
      ]
    },
    {
      "name": "Expense",
      "type": "bar",
      "stack": "Total",
      "data": [
        "-",
        "-",
        165,
        "-"
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
