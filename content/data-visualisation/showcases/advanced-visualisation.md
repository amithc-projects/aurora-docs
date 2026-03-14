---
title: "Advanced Visualisation"
description: "Aurora ECharts — high-density, spatial, and immersive visualisation."
menu:
  main:
    parent: "data-visualisation"
    weight: 20
---

# Advanced Visualisation

While our [Everyday Charts](/data-visualisation/showcases/everyday-charts/) cover 90% of standard product use cases, Aurora's underlying ECharts engine is uniquely capable of handling **high-density, spatial, and immersive data visualisation** without browser performance locking.

This showcase highlights Aurora's capacity for progressive rendering and structural analysis.

---

## 1. Density & Heatmaps

When dealing with massive coordinate tracking over time, scatter plots and high-density Cartesian heatmaps ensure the UI thread doesn't freeze.

### Cartesian High-Density Heatmap

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {"position": "top", "backgroundColor": "var(--ds-sys-color-surface)", "borderColor": "var(--ds-sys-color-border)", "textStyle": { "color": "var(--ds-sys-color-on-surface)" }},
          "grid": {"height": "50%", "top": "10%"},
          "xAxis": {"type": "category", "data": ["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"], "splitArea": {"show": true, "areaStyle": {"color": ["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}, "axisLabel": {"color": "var(--ds-sys-color-on-surface-variant)"}, "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}}},
          "yAxis": {"type": "category", "data": ["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday","Sunday"], "splitArea": {"show": true, "areaStyle": {"color": ["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}, "axisLabel": {"color": "var(--ds-sys-color-on-surface-variant)"}, "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}}},
          "visualMap": {"min": 0, "max": 10, "calculable": true, "orient": "horizontal", "left": "center", "bottom": "15%", "textStyle": {"color": "var(--ds-sys-color-on-surface-variant)"}},
          "series": [{
            "name": "Punch Card",
            "type": "heatmap",
            "data": [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4]],
            "label": {"show": true, "color": "var(--ds-sys-color-on-surface)"},
            "emphasis": {"itemStyle": {"shadowBlur": 10,"shadowColor": "rgba(0, 0, 0, 0.5)", "borderColor": "var(--ds-sys-color-on-surface)"}}
          }]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

---

## 2. Hierarchies & Flows

For security threat mapping, file-system analysis, or financial ledgers, directed graphs and Sankeys trace thousands of relationships beautifully without visually overwhelming the user.

### Sankey Diagram (Flows)

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 500px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {"trigger":"item","triggerOn":"mousemove", "backgroundColor": "var(--ds-sys-color-surface)", "borderColor": "var(--ds-sys-color-border)", "textStyle": { "color": "var(--ds-sys-color-on-surface)" }},
          "series": [{
            "type": "sankey",
            "data": [{"name":"Revenue","itemStyle":{"color":"var(--ds-chart-1)"}},{"name":"Product A","itemStyle":{"color":"var(--ds-chart-2)"}},{"name":"Product B","itemStyle":{"color":"var(--ds-chart-3)"}},{"name":"Taxes","itemStyle":{"color":"var(--ds-chart-4)"}},{"name":"Net Profit","itemStyle":{"color":"var(--ds-sys-color-success)"}}],
            "links": [{"source":"Revenue","target":"Product A","value":5},{"source":"Revenue","target":"Product B","value":3},{"source":"Product A","target":"Taxes","value":1},{"source":"Product A","target":"Net Profit","value":4},{"source":"Product B","target":"Taxes","value":1},{"source":"Product B","target":"Net Profit","value":2}],
            "label": { "color": "var(--ds-sys-color-on-surface-variant)" },
            "emphasis": {"focus": "adjacency"}
          }]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

### Force Graph (Networks)

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 500px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {"backgroundColor": "var(--ds-sys-color-surface)", "borderColor": "var(--ds-sys-color-border)", "textStyle": { "color": "var(--ds-sys-color-on-surface)" }},
          "animationDurationUpdate": 1500,
          "animationEasingUpdate": "quinticInOut",
          "series": [{
            "type": "graph",
            "layout": "force",
            "symbolSize": 30,
            "roam": true,
            "label": {"show": true, "color": "var(--ds-sys-color-on-surface)"},
            "edgeSymbol": ["circle", "arrow"],
            "edgeSymbolSize": [4, 10],
            "data": [
              {"name": "Core 1", "symbolSize": 50, "itemStyle": {"color": "var(--ds-chart-1)"}},
              {"name": "Node A", "itemStyle": {"color": "var(--ds-chart-2)"}},
              {"name": "Node B", "itemStyle": {"color": "var(--ds-chart-2)"}},
              {"name": "Node C", "itemStyle": {"color": "var(--ds-chart-2)"}},
              {"name": "Core 2", "symbolSize": 50, "itemStyle": {"color": "var(--ds-chart-3)"}},
              {"name": "Node X", "itemStyle": {"color": "var(--ds-chart-4)"}},
              {"name": "Node Y", "itemStyle": {"color": "var(--ds-chart-4)"}},
              {"name": "Node Z", "itemStyle": {"color": "var(--ds-chart-4)"}},
              {"name": "Satellite", "itemStyle": {"color": "var(--ds-sys-color-success)"}},
              {"name": "Agent 1", "itemStyle": {"color": "var(--ds-sys-color-warning)"}},
              {"name": "Agent 2", "itemStyle": {"color": "var(--ds-sys-color-warning)"}},
              {"name": "Data Sync", "itemStyle": {"color": "var(--ds-sys-color-error)"}}
            ],
            "links": [
              {"source": "Core 1", "target": "Node A"}, {"source": "Core 1", "target": "Node B"}, {"source": "Core 1", "target": "Node C"},
              {"source": "Core 2", "target": "Node X"}, {"source": "Core 2", "target": "Node Y"}, {"source": "Core 2", "target": "Node Z"},
              {"source": "Core 1", "target": "Core 2", "lineStyle": {"width": 3, "color": "var(--ds-sys-color-on-surface-variant)"}},
              {"source": "Node A", "target": "Node B"}, {"source": "Node X", "target": "Node B"},
              {"source": "Core 2", "target": "Satellite"}, {"source": "Satellite", "target": "Agent 1"}, {"source": "Satellite", "target": "Agent 2"},
              {"source": "Agent 1", "target": "Data Sync"}, {"source": "Data Sync", "target": "Core 1"}
            ],
            "force": {"repulsion": 500, "edgeLength": [30, 80]}
          }]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

---

## 3. Financial Analysis

### Candlestick (OHLC)

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {"trigger":"axis","axisPointer":{"type":"cross"}, "backgroundColor": "var(--ds-sys-color-surface)", "borderColor": "var(--ds-sys-color-border)", "textStyle": { "color": "var(--ds-sys-color-on-surface)" }},
          "xAxis": {"data": ["2017-10-24","2017-10-25","2017-10-26","2017-10-27","2017-10-28","2017-10-29","2017-10-30","2017-10-31","2017-11-01","2017-11-02"], "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}}, "axisLabel": {"color": "var(--ds-sys-color-on-surface-variant)"}, "splitLine": {"show": false}},
          "yAxis": {"axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}, "show": true}, "axisLabel": {"color": "var(--ds-sys-color-on-surface-variant)"}, "splitLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}}},
          "series": [{
            "type": "candlestick",
            "data": [
              [20,34,10,38],
              [40,35,30,50],
              [31,38,33,44],
              [38,15,5,42],
              [16,28,10,32],
              [29,35,27,42],
              [36,45,34,50],
              [48,55,40,62],
              [52,40,30,58],
              [41,52,38,60]
            ],
            "itemStyle": {"color": "var(--ds-sys-color-success)", "color0": "var(--ds-sys-color-error)", "borderColor": "var(--ds-sys-color-success)", "borderColor0": "var(--ds-sys-color-error)"}
          }]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

> **WebGL Capabilities:** The advanced visualisations like *Iron Globe* and *LinesGL* require the `echarts-gl` library extension. As WebGL Canvas rendering relies on raw rasterization rather than SVG manipulation, please ensure your design tokens are explicitly mapped inside `aurora-charts.js` before painting globes.

---

## 4. Multi-Dimensional Data

### Parallel Coordinates
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {"backgroundColor": "var(--ds-sys-color-surface)", "borderColor": "var(--ds-sys-color-border)", "textStyle": { "color": "var(--ds-sys-color-on-surface)" }},
          "parallelAxis": [
            { "dim": 0, "name": "Price", "nameTextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}} },
            { "dim": 1, "name": "Net Weight", "nameTextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}} },
            { "dim": 2, "name": "Amount", "nameTextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}} },
            { "dim": 3, "name": "Score", "nameTextStyle": { "color": "var(--ds-sys-color-on-surface-variant)" }, "type": "category", "data": ["Excellent", "Good", "OK", "Bad"], "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)" }, "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}} }
          ],
          "series": {
            "type": "parallel",
            "lineStyle": { "width": 4 },
            "data": [
              [12.99, 100, 82, "Good"],
              [9.99, 80, 77, "OK"],
              [20, 120, 60, "Excellent"]
            ],
            "itemStyle": { "color": "var(--ds-chart-2)" }
          }
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

### Boxplot
{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 400px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {"trigger": "item", "axisPointer": { "type": "shadow" }, "backgroundColor": "var(--ds-sys-color-surface)", "borderColor": "var(--ds-sys-color-border)", "textStyle": { "color": "var(--ds-sys-color-on-surface)" }},
          "xAxis": { "type": "category", "data": ["Group A", "Group B", "Group C"], "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}}, "axisLabel": {"color": "var(--ds-sys-color-on-surface-variant)"}, "splitLine": {"show": false} },
          "yAxis": { "type": "value", "axisLine": {"lineStyle": {"color": "var(--ds-sys-color-border)"}, "show": true}, "axisLabel": {"color": "var(--ds-sys-color-on-surface-variant)"}, "splitLine": {"lineStyle": {"color": "var(--ds-sys-color-border)", "type": "dashed"}} },
          "series": [
            {
              "name": "boxplot",
              "type": "boxplot",
              "data": [
                [850, 860, 880, 920, 960],
                [730, 800, 830, 850, 890],
                [680, 710, 740, 790, 830]
              ],
              "itemStyle": { "color": "var(--ds-chart-3)", "borderColor": "var(--ds-sys-color-on-surface)" }
            }
          ]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}
