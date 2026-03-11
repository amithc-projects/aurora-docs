---
title: "Charts (SVG)"
description: "True Pie, Donut, and Smooth Line charts using Progressive Enhancement."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

## True Pie Chart (Auto-Themed)
Colors are automatically assigned from `--ds-chart-1` to `--ds-chart-6`.

{{< demo >}}
<table class="chart" data-type="pie" data-table-pos="right">
  <caption>Browser Market Share</caption>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td data-value="65">65%</td>
    </tr>
    <tr>
      <th>Safari</th>
      <td data-value="20">20%</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td data-value="10">10%</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td data-value="5">5%</td>
    </tr>
  </tbody>
</table>
{{< /demo >}}

## Donut Chart (Themed)
Uses the same logic. Try switching to "Casual" theme or "Dark" mode!

{{< demo >}}
<table class="chart" data-type="donut">
  <caption>Revenue Source</caption>
  <tbody>
    <tr>
      <th>Direct</th>
      <td data-value="40">40%</td>
    </tr>
    <tr>
      <th>Social</th>
      <td data-value="25">25%</td>
    </tr>
    <tr>
      <th>Organic</th>
      <td data-value="35">35%</td>
    </tr>
  </tbody>
</table>
{{< /demo >}}

## Sequential Colors (Manual Override)
For heatmaps or intensity, override with `--ds-chart-seq-*`.

{{< demo >}}
<table class="chart" data-type="donut" data-table-pos="bottom">
  <caption>Intensity Levels</caption>
  <tbody>
    <tr>
      <th>Low</th>
      <td data-value="10" style="--color: var(--ds-chart-seq-1)">10%</td>
    </tr>
    <tr>
      <th>Medium</th>
      <td data-value="30" style="--color: var(--ds-chart-seq-3)">30%</td>
    </tr>
    <tr>
      <th>High</th>
      <td data-value="60" style="--color: var(--ds-chart-seq-5)">60%</td>
    </tr>
  </tbody>
</table>
{{< /demo >}}

## Smooth Line Chart
{{< demo >}}
<table class="chart" data-type="line">
  <caption>Monthly Traffic</caption>
  <tbody>
    <tr><th>Jan</th><td data-value="10">10k</td></tr>
    <tr><th>Feb</th><td data-value="45">45k</td></tr>
    <tr><th>Mar</th><td data-value="30">30k</td></tr>
    <tr><th>Apr</th><td data-value="70">70k</td></tr>
    <tr><th>May</th><td data-value="50">50k</td></tr>
    <tr><th>Jun</th><td data-value="90">90k</td></tr>
  </tbody>
</table>
{{< /demo >}}
