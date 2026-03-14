---
title: "Everyday Charts Showcase"
description: "Aurora ECharts covers the core visualisations used in product analytics every day including bars, lines, pies, funnels, and gauges."
menu:
  main:
    parent: "data-visualisation"
    weight: 10
---

# Everyday Charts

This showcase proves that Aurora ECharts gracefully covers the charts people actually use in products every day: **bar, line, area, stacked bar, pie, donut, scatter, calendar heatmap, gauges, funnels, and small maps.**

These charts emphasize **clarity, legibility, restrained motion, dashboard realism, and fully accessible colours.**

## Basic Bar
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "title": {
    "text": "Bar Chart",
    "subtext": "Basic bar chart example",
    "left": "center",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" },
    "subtextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "toolbox": {
    "show": true,
    "feature": {
      "dataView": { "show": true, "readOnly": false },
      "magicType": { "show": true, "type": ["line", "bar"] },
      "restore": { "show": true },
      "saveAsImage": { "show": true }
    },
    "iconStyle": { "borderColor": "var(--ds-sys-color-on-surface-variant)" }
  },
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "xAxis": {
    "type": "category",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } }
  },
  "series": [
    {
      "name": "Series 1",
      "data": [
        120,
        200,
        150,
        80,
        70,
        110,
        130
      ],
      "type": "bar",
      "itemStyle": {
        "color": "var(--ds-chart-1)"
      },
      "markPoint": {
        "data": [
          { "type": "max", "name": "Max" },
          { "type": "min", "name": "Min" }
        ],
        "label": { "color": "var(--ds-sys-color-bg-app)" }
      },
      "markLine": {
        "data": [
          { "type": "average", "name": "Avg" }
        ],
        "label": { "color": "var(--ds-sys-color-on-surface)" },
        "lineStyle": { "color": "var(--ds-sys-color-primary)" }
      }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Grouped Bar
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "title": {
    "text": "Stacked Bar Chart",
    "subtext": "Stacked bar chart example",
    "left": "center",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" },
    "subtextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "toolbox": {
    "show": true,
    "feature": {
      "dataView": { "show": true, "readOnly": false },
      "magicType": { "show": true, "type": ["line", "bar", "stack"] },
      "restore": { "show": true },
      "saveAsImage": { "show": true }
    },
    "iconStyle": { "borderColor": "var(--ds-sys-color-on-surface-variant)" }
  },
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "legend": {
    "bottom": 0,
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "xAxis": {
    "type": "category",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": [
      "2018",
      "2019",
      "2020",
      "2021"
    ]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } }
  },
  "series": [
    {
      "name": "Forest",
      "type": "bar",
      "stack": "Ad",
      "data": [
        320,
        332,
        301,
        334
      ],
      "itemStyle": {
        "color": "var(--ds-chart-1)"
      }
    },
    {
      "name": "Steppe",
      "type": "bar",
      "stack": "Ad",
      "data": [
        220,
        182,
        191,
        234
      ],
      "itemStyle": {
        "color": "var(--ds-chart-2)"
      }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Stacked Bar
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "legend": {
    "bottom": 0,
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "xAxis": {
    "type": "category",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": [
      "Mon",
      "Tue",
      "Wed"
    ]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } }
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
      ],
      "itemStyle": {
        "color": "var(--ds-chart-3)"
      }
    },
    {
      "name": "Video Ads",
      "type": "bar",
      "stack": "Ad",
      "data": [
        150,
        232,
        201
      ],
      "itemStyle": {
        "color": "var(--ds-chart-4)"
      }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Basic Line
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "title": {
    "text": "Line Chart",
    "subtext": "Basic line chart example",
    "left": "center",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" },
    "subtextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "toolbox": {
    "show": true,
    "feature": {
      "dataView": { "show": true, "readOnly": false },
      "magicType": { "show": true, "type": ["line", "bar"] },
      "restore": { "show": true },
      "saveAsImage": { "show": true }
    },
    "iconStyle": { "borderColor": "var(--ds-sys-color-on-surface-variant)" }
  },
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "xAxis": {
    "type": "category",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri"
    ]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } }
  },
  "series": [
    {
      "name": "Series 1",
      "data": [
        150,
        230,
        224,
        218,
        135
      ],
      "type": "line",
      "itemStyle": {
        "color": "var(--ds-chart-1)"
      },
      "lineStyle": {
        "width": 3
      },
      "markPoint": {
        "data": [
          { "type": "max", "name": "Max" },
          { "type": "min", "name": "Min" }
        ],
        "label": { "color": "var(--ds-sys-color-bg-app)" }
      },
      "markLine": {
        "data": [
          { "type": "average", "name": "Avg" }
        ],
        "label": { "color": "var(--ds-sys-color-on-surface)" },
        "lineStyle": { "color": "var(--ds-sys-color-primary)" }
      }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Area Line
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "title": {
    "text": "Stacked Area Chart",
    "subtext": "Stacked area chart example",
    "left": "center",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" },
    "subtextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "toolbox": {
    "show": true,
    "feature": {
      "dataView": { "show": true, "readOnly": false },
      "magicType": { "show": true, "type": ["line", "bar", "stack"] },
      "restore": { "show": true },
      "saveAsImage": { "show": true }
    },
    "iconStyle": { "borderColor": "var(--ds-sys-color-on-surface-variant)" }
  },
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "legend": {
    "bottom": 0,
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } }
  },
  "series": [
    {
      "name": "Series 1",
      "type": "line",
      "stack": "Total",
      "areaStyle": {
        "opacity": 0.5
      },
      "itemStyle": {
        "color": "var(--ds-chart-1)"
      },
      "data": [120, 132, 101, 134, 90, 230, 210]
    },
    {
      "name": "Series 2",
      "type": "line",
      "stack": "Total",
      "areaStyle": {
        "opacity": 0.5
      },
      "itemStyle": {
        "color": "var(--ds-chart-2)"
      },
      "data": [220, 182, 191, 234, 290, 330, 310]
    },
    {
      "name": "Series 3",
      "type": "line",
      "stack": "Total",
      "areaStyle": {
        "opacity": 0.5
      },
      "itemStyle": {
        "color": "var(--ds-chart-4)"
      },
      "data": [150, 232, 201, 154, 190, 330, 410]
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Waterfall Bar
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "axis",
    "axisPointer": { "type": "shadow" },
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" },
    "formatter": "{b}<br/>{a1}: {c1}<br/>{a2}: {c2}"
  },
  "legend": {
    "bottom": 0,
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "xAxis": {
    "type": "category",
    "splitLine": { "show": false },
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "data": ["Base", "Q1", "Q2", "Q3", "Q4", "Total"]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } }
  },
  "series": [
    {
      "name": "Placeholder",
      "type": "bar",
      "stack": "Total",
      "itemStyle": { "borderColor": "transparent", "color": "transparent" },
      "emphasis": { "itemStyle": { "borderColor": "transparent", "color": "transparent" } },
      "data": [0, 900, 1245, 1530, 1376, 0]
    },
    {
      "name": "Income",
      "type": "bar",
      "stack": "Total",
      "itemStyle": { "color": "var(--ds-sys-color-success)" },
      "data": [900, 345, 393, "-", "-", 1709]
    },
    {
      "name": "Expense",
      "type": "bar",
      "stack": "Total",
      "itemStyle": { "color": "var(--ds-sys-color-error)" },
      "data": ["-", "-", "-", 108, 154, "-"]
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Step Line
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "xAxis": {
    "type": "category",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": ["Mon", "Tue", "Wed", "Thu", "Fri"]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } }
  },
  "series": [
    {
      "type": "line",
      "step": "start",
      "data": [120, 132, 101, 134, 90],
      "itemStyle": { "color": "var(--ds-chart-1)" }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Multi-series Line
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "legend": {
    "bottom": 0,
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false },
    "data": [
      "Mon",
      "Tue",
      "Wed"
    ]
  },
  "yAxis": {
    "type": "value",
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } }
  },
  "series": [
    {
      "name": "Search",
      "type": "line",
      "data": [
        120,
        132,
        101
      ],
      "itemStyle": {
        "color": "var(--ds-chart-3)"
      }
    },
    {
      "name": "Direct",
      "type": "line",
      "data": [
        220,
        182,
        191
      ],
      "itemStyle": {
        "color": "var(--ds-chart-4)"
      }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Pie
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "legend": {
    "orient": "vertical",
    "left": "left",
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "series": [
    {
      "name": "Access From",
      "type": "pie",
      "radius": "50%",
      "label": { "color": "var(--ds-sys-color-on-surface-variant)" },
      "data": [
        {
          "value": 1048,
          "name": "Search",
          "itemStyle": {
            "color": "var(--ds-chart-1)"
          }
        },
        {
          "value": 735,
          "name": "Direct",
          "itemStyle": {
            "color": "var(--ds-chart-2)"
          }
        },
        {
          "value": 580,
          "name": "Email",
          "itemStyle": {
            "color": "var(--ds-chart-3)"
          }
        }
      ]
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Donut
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "legend": {
    "top": "5%",
    "left": "center",
    "textStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "series": [
    {
      "name": "Access From",
      "type": "pie",
      "radius": [
        "40%",
        "70%"
      ],
      "avoidLabelOverlap": false,
      "label": { "color": "var(--ds-sys-color-on-surface-variant)" },
      "itemStyle": {
        "borderRadius": 10,
        "borderColor": "var(--ds-sys-color-bg-app)",
        "borderWidth": 2
      },
      "data": [
        {
          "value": 1048,
          "name": "Search",
          "itemStyle": {
            "color": "var(--ds-chart-1)"
          }
        },
        {
          "value": 735,
          "name": "Direct",
          "itemStyle": {
            "color": "var(--ds-chart-4)"
          }
        }
      ]
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Scatter
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "xAxis": {
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "show": false }
  },
  "yAxis": {
    "axisLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" }, "show": true },
    "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "splitLine": { "lineStyle": { "color": "var(--ds-sys-color-border)" } }
  },
  "series": [
    {
      "symbolSize": 20,
      "data": [
        [
          10,
          8.04
        ],
        [
          8,
          6.95
        ],
        [
          13,
          7.58
        ],
        [
          9,
          8.81
        ],
        [
          11,
          8.33
        ]
      ],
      "type": "scatter",
      "itemStyle": {
        "color": "var(--ds-chart-1)"
      }
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Calendar Heatmap
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "tooltip": {
    "backgroundColor": "var(--ds-sys-color-surface)",
    "borderColor": "var(--ds-sys-color-border)",
    "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
  },
  "visualMap": {
    "show": false,
    "min": 0,
    "max": 1000
  },
  "calendar": {
    "range": "2024",
    "itemStyle": {
      "color": "var(--ds-sys-color-surface)",
      "borderColor": "var(--ds-sys-color-border)",
      "borderWidth": 1
    },
    "dayLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "monthLabel": { "color": "var(--ds-sys-color-on-surface-variant)" },
    "yearLabel": { "color": "var(--ds-sys-color-on-surface-variant)" }
  },
  "series": {
    "type": "heatmap",
    "coordinateSystem": "calendar",
    "data": [
      [
        "2024-01-01",
        500
      ],
      [
        "2024-01-02",
        800
      ]
    ]
  }
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Gauge / KPI Dial
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
  "series": [
    {
      "type": "gauge",
      "progress": {
        "show": true,
        "width": 18,
        "itemStyle": { "color": "var(--ds-sys-color-primary)" }
      },
      "axisLine": {
        "lineStyle": {
          "width": 18,
          "color": [
            [1, "var(--ds-sys-color-surface-container)"]
          ]
        }
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "length": 15,
        "lineStyle": {
          "width": 2,
          "color": "var(--ds-sys-color-border)"
        }
      },
      "axisLabel": {
        "distance": 25,
        "fontSize": 14,
        "color": "var(--ds-sys-color-on-surface-variant)"
      },
      "anchor": {
        "show": true,
        "showAbove": true,
        "size": 25,
        "itemStyle": {
          "borderWidth": 10,
          "borderColor": "var(--ds-sys-color-primary)",
          "color": "var(--ds-sys-color-bg-app)"
        }
      },
      "title": {
        "show": false
      },
      "detail": {
        "valueAnimation": true,
        "fontSize": 40,
        "offsetCenter": [0, "70%"],
        "color": "var(--ds-sys-color-on-surface)"
      },
      "data": [
        {
          "value": 70
        }
      ]
    }
  ]
}
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}
