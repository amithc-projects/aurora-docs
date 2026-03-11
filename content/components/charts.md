---
title: "Charts"
description: "Data visualization using typed HTML attributes."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

## 1. Column Charts (Vertical)

### Theme: Primary (Sequential)
Uses `chart-theme-primary`. Each bar gets a deeper shade of the primary color.

{{< demo >}}
<table class="chart chart-theme-primary" data-type="column">
  <caption>Sequential Revenue</caption>
  <tbody>
    <tr><td data-value="0.3">30k</td><th>Q1</th></tr>
    <tr><td data-value="0.5">50k</td><th>Q2</th></tr>
    <tr><td data-value="0.7">70k</td><th>Q3</th></tr>
    <tr><td data-value="0.9">90k</td><th>Q4</th></tr>
    <tr><td data-value="0.3">30k</td><th>Q1</th></tr>
    <tr><td data-value="0.5">50k</td><th>Q2</th></tr>
    <tr><td data-value="0.7">70k</td><th>Q3</th></tr>
    <tr><td data-value="0.9">90k</td><th>Q4</th></tr>
  </tbody>
</table>
{{< /demo >}}

### Theme: Wheel (Categorical)
Uses `chart-theme-wheel`. Each bar gets a distinct, high-contrast color.

{{< demo >}}
<table class="chart chart-theme-wheel" data-type="column">
  <caption>Department Budgets</caption>
  <tbody>
    <tr><td data-value="0.8">IT</td><th>IT</th></tr>
    <tr><td data-value="0.6">HR</td><th>HR</th></tr>
    <tr><td data-value="0.4">Sales</td><th>Sales</th></tr>
    <tr><td data-value="0.7">Ops</td><th>Ops</th></tr>
    <tr><td data-value="0.8">IT</td><th>IT</th></tr>
    <tr><td data-value="0.6">HR</td><th>HR</th></tr>
    <tr><td data-value="0.4">Sales</td><th>Sales</th></tr>
    <tr><td data-value="0.7">Ops</td><th>Ops</th></tr>
  </tbody>
</table>
{{< /demo >}}

---

## 2. Donut Charts (Two Methods)

### Method A: CSS-Driven (New)
Uses `class="chart-donut"`. This uses `conic-gradients` and uses a tiny bit of JS to automatically calculate the start positions of the slices.

{{< demo >}}
<table class="chart-donut chart-theme-wheel" data-type="donut">
  <caption>Budget (CSS-Driven)</caption>
  <tbody>
    <tr><td data-value="0.5">50%</td><th>Essentials</th></tr>
    <tr><td data-value="0.3">30%</td><th>Savings</th></tr>
    <tr><td data-value="0.2">20%</td><th>Lifestyle</th></tr>
  </tbody>
</table>
{{< /demo >}}

### Method B: SVG-Driven (Classic)
Uses `class="chart"`. This generates an accessible SVG element and legend.

{{< demo >}}
<table class="chart chart-theme-wheel" data-type="donut">
  <caption>Budget (SVG-Driven)</caption>
  <tbody>
    <tr><td data-value="0.5">50%</td><th>Essentials</th></tr>
    <tr><td data-value="0.3">30%</td><th>Savings</th></tr>
    <tr><td data-value="0.2">20%</td><th>Lifestyle</th></tr>
  </tbody>
</table>
{{< /demo >}}

---

## 3. Bar Charts (Horizontal)

### Theme: Secondary (Sequential)
Uses `chart-theme-secondary` (Teal/Emerald). Ideal for progress or growth tracking.

{{< demo >}}
<table class="chart chart-theme-secondary" data-type="bar">
  <caption>Project Completion</caption>
  <tbody>
    <tr><th>Design</th><td data-value="0.9">90%</td></tr>
    <tr><th>Dev</th><td data-value="0.7">70%</td></tr>
    <tr><th>QA</th><td data-value="0.3">30%</td></tr>
    <tr><th>Design</th><td data-value="0.9">90%</td></tr>
    <tr><th>Dev</th><td data-value="0.7">70%</td></tr>
    <tr><th>QA</th><td data-value="0.3">30%</td></tr>
  </tbody>
</table>
{{< /demo >}}

---

## 4. Stacked Charts

### Stacked Column (Wheel Theme)
Uses `chart-theme-wheel`.

{{< demo >}}
<table class="chart chart-theme-wheel" data-type="column" data-stacked>
  <caption>Market Share</caption>
  <tbody>
    <tr>
      <td data-value="0.2">20%</td>
      <td data-value="0.3">30%</td>
      <td data-value="0.1">10%</td>
      <th>2022</th>
    </tr>
    <tr>
      <td data-value="0.25">25%</td>
      <td data-value="0.25">25%</td>
      <td data-value="0.2">20%</td>
      <th>2023</th>
    </tr>
  </tbody>
</table>
{{< /demo >}}

### Stacked Bar (Primary Theme)
Uses `chart-theme-primary`.

{{< demo >}}
<table class="chart chart-theme-primary" data-type="bar" data-stacked>
  <caption>Session Duration</caption>
  <tbody>
    <tr>
      <th>Mobile</th>
      <td data-value="0.5">5m</td>
      <td data-value="0.3">3m</td>
    </tr>
    <tr>
      <th>Desktop</th>
      <td data-value="0.6">6m</td>
      <td data-value="0.2">2m</td>
    </tr>
  </tbody>
</table>
{{< /demo >}}

