---
title: "ThemeRiver / Streamgraph"
description: "A demonstration of the ThemeRiver / Streamgraph from Apache ECharts."
menu:
  main:
    parent: "components"
---
# ThemeRiver / Streamgraph

This is an automatically generated example of the **ThemeRiver / Streamgraph** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "axis"
  },
  "singleAxis": {
    "top": 50,
    "bottom": 50,
    "axisTick": {},
    "axisLabel": {},
    "type": "time"
  },
  "series": [
    {
      "type": "themeRiver",
      "data": [
        [
          "2015/11/08",
          10,
          "DQ"
        ],
        [
          "2015/11/09",
          15,
          "DQ"
        ],
        [
          "2015/11/10",
          35,
          "DQ"
        ],
        [
          "2015/11/08",
          15,
          "TY"
        ],
        [
          "2015/11/09",
          20,
          "TY"
        ],
        [
          "2015/11/10",
          10,
          "TY"
        ]
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
