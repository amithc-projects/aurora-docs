---
title: "Finance Analytics Dashboard"
description: "A financial dashboard focused on MRR, revenue breakdown, and categorical performance."
layout: "single"
menu:
  main:
    parent: "saas"
---

# Finance Analytics Dashboard

This archetype illustrates Aurora's capability for presenting critical financial data. It uses strong typographic hierarchies, specific success/error color bindings for positive/negative deltas, and waterfall charts for revenue analysis.

{{< demo >}}
<style>
  .l-dashboard-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--ds-sys-spacing-4); width: 100%; margin-top: var(--ds-sys-spacing-4); }
  .panel { background: var(--ds-sys-color-surface); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-shape-corner-medium); padding: var(--ds-sys-spacing-4); }
  .panel-kpi { grid-column: span 4; }
  .panel-main { grid-column: span 12; height: 400px; }
  .panel-half { grid-column: span 6; height: 380px; }
  .panel h3 { margin-top: 0; font-size: 1rem; color: var(--ds-sys-color-on-surface-variant); }
  .kpi-value { font-size: 2.5rem; font-weight: bold; margin: var(--ds-sys-spacing-2) 0; }
  .kpi-delta.positive { color: var(--ds-sys-color-success); }
  .kpi-delta.negative { color: var(--ds-sys-color-error); }
</style>

<div class="l-dashboard-grid">
  <!-- KPIs -->
  <div class="panel panel-kpi">
    <h3>Monthly Recurring Revenue (MRR)</h3>
    <div class="kpi-value">$1,245,000</div>
    <div class="kpi-delta positive">▲ $45,000 (+3.8%) m/m</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Net Retention Rate</h3>
    <div class="kpi-value">118%</div>
    <div class="kpi-delta positive">▲ 2% m/m</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Customer Acquisition Cost</h3>
    <div class="kpi-value">$4,200</div>
    <div class="kpi-delta negative">▲ $300 (+7.6%) m/m</div>
  </div>

  <!-- MRR Waterfall -->
  <div class="panel panel-main">
    <h3>MRR Movements (Q1)</h3>
    <div class="aurora-chart-container" style="height: 350px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": { "trigger": "axis", "axisPointer": { "type": "shadow" } },
            "grid": { "top": "10%", "bottom": "15%", "left": "5%", "right": "5%" },
            "xAxis": { "type": "category", "data": ["Starting MRR", "New Business", "Expansion", "Contraction", "Churn", "Ending MRR"] },
            "yAxis": { "type": "value" },
            "series": [
              {
                "name": "Placeholder", "type": "bar", "stack": "Total",
                "itemStyle": { "borderColor": "transparent", "color": "transparent" },
                "emphasis": { "itemStyle": { "borderColor": "transparent", "color": "transparent" } },
                "data": [0, 1000, 1150, 1100, 1050, 0]
              },
              {
                "name": "Positive", "type": "bar", "stack": "Total", "label": { "show": true, "position": "top" },
                "itemStyle": {"color": "var(--ds-sys-color-success)"},
                "data": [1000, 150, 50, "-", "-", 1050]
              },
              {
                "name": "Negative", "type": "bar", "stack": "Total", "label": { "show": true, "position": "bottom" },
                "itemStyle": {"color": "var(--ds-sys-color-error)"},
                "data": ["-", "-", "-", -50, -50, "-"]
              }
            ]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Revenue by Product Segment -->
  <div class="panel panel-half">
    <h3>Revenue by Product</h3>
    <div class="aurora-chart-container" style="height: 330px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger": "item"},
            "legend": {"top": "5%", "left": "center"},
            "series": [{
              "type": "pie", "radius": ["40%", "70%"], "avoidLabelOverlap": false,
              "itemStyle": {"borderRadius": 5, "borderColor": "#fff", "borderWidth": 2},
              "data": [
                {"value": 450000, "name": "Core Platform", "itemStyle": {"color": "var(--ds-chart-1)"}},
                {"value": 320000, "name": "Add-on: Analytics", "itemStyle": {"color": "var(--ds-chart-2)"}},
                {"value": 280000, "name": "Services", "itemStyle": {"color": "var(--ds-chart-3)"}}
              ]
            }]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Operating Margins -->
  <div class="panel panel-half">
    <h3>Operating Margins</h3>
    <div class="aurora-chart-container" style="height: 330px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger": "axis"},
            "grid": {"top": "15%", "bottom": "15%", "left": "10%", "right": "5%"},
            "xAxis": {"type": "category", "data": ["Q1", "Q2", "Q3", "Q4"]},
            "yAxis": {"type": "value", "axisLabel": {"formatter": "{value}%"}},
            "series": [
              {"name": "Target", "type": "line", "symbol": "none", "lineStyle": {"type": "dashed", "color": "var(--ds-sys-color-on-surface-variant)"}, "data": [25, 25, 25, 25]},
              {"name": "Actual", "type": "bar", "barWidth": "40%", "itemStyle": {"color": "var(--ds-chart-4)"}, "data": [22, 24, 28, 30]}
            ]
          }
        </script>
      </div>
    </div>
  </div>

</div>
{{< /demo >}}
