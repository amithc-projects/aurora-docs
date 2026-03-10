---
title: "Cards"
category: "Molecules"
description: "Flexible containers for grouping related content."
menu:
  main:
    parent: "components"
---

## Vertical Card
The standard stacked layout.

{{< demo >}}
<article class="card" style="max-width: 300px;">
  <img src="https://picsum.photos/id/10/600/400" class="card__media" alt="Nature">
  <div class="card__content">
    <h3>Card Title</h3>
    <p>A flexible content container that can hold images, text, and actions.</p>
    <div style="margin-top: 1rem;">
      <button class="btn primary btn-sm">Read More</button>
    </div>
  </div>
</article>
{{< /demo >}}

## Horizontal (Media Object)
Great for news lists or search results.

{{< demo >}}
<article class="card card--horizontal">
  <img src="https://picsum.photos/id/20/300/300" class="card__media" alt="Work">
  <div class="card__content">
    <h3>Horizontal Card</h3>
    <p>The image sits to the left (on desktop) and stacks on mobile.</p>
  </div>
</article>
{{< /demo >}}

## Metric / Stat Cards
Designed specifically for SaaS Dashboards. Features large typography, built-in trend indicators, and structural support for mini-charts (sparklines).

{{< demo >}}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; padding: 1rem;">
  
  <!-- Example 1: Basic Revenue Metric -->
  <article class="card card-metric">
    <div class="card__content">
      <span class="card-metric__label">Monthly Revenue</span>
      <span class="card-metric__value">$45,231.89</span>
      <span class="card-metric__trend card-metric__trend--positive">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 10l4-4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        +12.5% from last month
      </span>
    </div>
    <div class="card-metric__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </article>

  <!-- Example 2: Users with Sparkline chart -->
  <article class="card card-metric">
    <div class="card__content">
      <span class="card-metric__label">Active Users</span>
      <span class="card-metric__value">2,845</span>
      <span class="card-metric__trend card-metric__trend--negative">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        -3.2% from last week
      </span>
    </div>
    <div class="card-metric__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <!-- Simple CSS bar chart -->
    <div class="card-metric__chart">
      <div class="card-metric__chart-bar" style="height: 40%"></div>
      <div class="card-metric__chart-bar" style="height: 60%"></div>
      <div class="card-metric__chart-bar" style="height: 80%"></div>
      <div class="card-metric__chart-bar" style="height: 50%"></div>
      <div class="card-metric__chart-bar" style="height: 90%"></div>
      <div class="card-metric__chart-bar" style="height: 100%; background: var(--ds-sys-color-primary);"></div>
    </div>
  </article>

  <!-- Example 3: Server Load (Neutral) -->
  <article class="card card-metric">
    <div class="card__content">
      <span class="card-metric__label">Avg. Server Load</span>
      <span class="card-metric__value">42%</span>
      <span class="card-metric__trend card-metric__trend--neutral">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Maintaining stable threshold
      </span>
    </div>
    <div class="card-metric__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 6h.01M6 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </div>
  </article>

</div>
{{< /demo >}}

## Pricing Cards
Structured for SaaS subscriptions and feature tiers. The middle tier uses `.card-pricing--highlighted` to draw attention.

{{< demo >}}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; padding: 2rem 1rem; align-items: start;">
  
  <!-- Tier 1: Basic -->
  <article class="card card-pricing">
    <div class="card-pricing__header">
      <h3 class="card-pricing__title">Basic</h3>
      <span class="card-pricing__desc">For individuals just getting started.</span>
    </div>
    <div class="card-pricing__price">
      $0<span>/mo</span>
    </div>
    <ul class="card-pricing__features">
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> 1 project</li>
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Basic analytics</li>
      <li style="opacity:0.5"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l8-8M4 4l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Custom domain</li>
    </ul>
    <button class="btn secondary">Get Started</button>
  </article>

  <!-- Tier 2: Pro (Highlighted) -->
  <article class="card card-pricing card-pricing--highlighted">
    <div class="card-pricing__badge">Most Popular</div>
    <div class="card-pricing__header">
      <h3 class="card-pricing__title">Pro</h3>
      <span class="card-pricing__desc">For growing teams and professionals.</span>
    </div>
    <div class="card-pricing__price">
      $29<span>/mo</span>
    </div>
    <ul class="card-pricing__features">
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Unlimited projects</li>
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Advanced analytics</li>
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Custom domain</li>
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Priority support</li>
    </ul>
    <button class="btn primary">Start Free Trial</button>
  </article>

  <!-- Tier 3: Enterprise -->
  <article class="card card-pricing">
    <div class="card-pricing__header">
      <h3 class="card-pricing__title">Enterprise</h3>
      <span class="card-pricing__desc">For large companies with specific needs.</span>
    </div>
    <div class="card-pricing__price">
      $99<span>/mo</span>
    </div>
    <ul class="card-pricing__features">
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Everything in Pro</li>
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> 24/7 Phone support</li>
      <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Custom SLA</li>
    </ul>
    <button class="btn secondary">Contact Sales</button>
  </article>

</div>
{{< /demo >}}
