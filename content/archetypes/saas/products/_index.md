---
title: "Product Suite"
description: "A hub page listing all available SaaS products."
menu:
  main:
    parent: "saas"
---

{{< demo >}}
<div style="padding: 4rem 2rem; background: var(--ds-sys-color-surface-container-lowest); font-family: var(--ds-sys-font-family-base); text-align: center;">

  <div style="max-width: 800px; margin: 0 auto 4rem auto;">
    <h1 style="font-size: 3.5rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface);">A Complete Product Suite</h1>
    <p style="font-size: 1.25rem; color: var(--ds-sys-color-on-surface-variant); line-height: 1.6;">Everything you need to build, manage, and scale your business online. Fully integrated and designed to work perfectly together.</p>
  </div>

  <div class="l-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; text-align: left;">
    
    <!-- Product Card 1 -->
    <a href="/aurora-docs/archetypes/saas/products/payments/" style="text-decoration: none; color: inherit; display: block;">
      <div class="card" style="padding: 3rem 2.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: 12px; background: var(--ds-sys-color-surface); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: var(--ds-sys-color-primary-container); color: var(--ds-sys-color-on-primary-container); display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
          <span class="material-symbols-outlined" style="font-size: 1.5rem;">payments</span>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface);">Payments</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">Accept payments globally across all channels with flexible routing, fraud prevention, and optimized checkout flows.</p>
        <div style="color: var(--ds-sys-color-primary); font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
          Explore Payments <span class="material-symbols-outlined" style="font-size: 1rem;">arrow_forward</span>
        </div>
      </div>
    </a>

    <!-- Product Card 2 -->
    <a href="/aurora-docs/archetypes/saas/products/analytics/" style="text-decoration: none; color: inherit; display: block;">
      <div class="card" style="padding: 3rem 2.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: 12px; background: var(--ds-sys-color-surface); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: #e0e7ff; color: #4338ca; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
          <span class="material-symbols-outlined" style="font-size: 1.5rem;">insights</span>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface);">Analytics Reporting</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">Uncover deep business insights with advanced SQL querying, AI-powered predictive models, and custom charting.</p>
        <div style="color: #4338ca; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
          Explore Analytics <span class="material-symbols-outlined" style="font-size: 1rem;">arrow_forward</span>
        </div>
      </div>
    </a>

    <!-- Product Card 3 (Fraud Prevention) -->
    <a href="/aurora-docs/archetypes/saas/products/fraud/" style="text-decoration: none; color: inherit; display: block;">
      <div class="card" style="padding: 3rem 2.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: 12px; background: var(--ds-sys-color-surface); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: #fef2f2; color: #ef4444; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
          <span class="material-symbols-outlined" style="font-size: 1.5rem;">security</span>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface);">Fraud Prevention</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">Protect your business from chargebacks with machine learning algorithms trained on billions of data points.</p>
        <div style="color: #ef4444; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
          Explore Fraud Prevention <span class="material-symbols-outlined" style="font-size: 1rem;">arrow_forward</span>
        </div>
      </div>
    </a>

  </div>

</div>
{{< /demo >}}
