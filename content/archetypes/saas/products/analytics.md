---
title: "Analytics Reporting"
description: "A deep dive Product Details page within the SaaS archetype."
---

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-bg-app); font-family: var(--ds-sys-font-family-base);">
  
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border); position: sticky; top: 0; z-index: 10;">
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div style="font-weight: 800; font-size: 1.2rem; letter-spacing: -0.5px; color: var(--ds-sys-color-primary);"><a href="/aurora-docs/archetypes/saas/" style="color: inherit; text-decoration: none;">ACME UI</a></div>
      <nav style="display: flex; gap: 1.5rem; font-size: 0.9rem; font-weight: 500;">
        <span style="color: var(--ds-sys-color-on-surface);"><a href="/aurora-docs/archetypes/saas/products/" style="color: inherit; text-decoration: none;">Products</a></span>
        <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Solutions</span>
        <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Pricing</span>
      </nav>
    </div>
    <div style="display: flex; gap: 1rem;">
      <button class="btn btn-primary btn-sm" style="border-radius: 999px;">Get Started</button>
    </div>
  </header>

  <main style="padding: 6rem 2rem; background: var(--ds-sys-color-surface);">
    
    <div style="max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
      
      <div>
        <div style="color: #4338ca; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem;">Acme Analytics</div>
        <h1 style="font-size: 3rem; font-weight: 800; line-height: 1.1; margin: 0 0 1.5rem 0; letter-spacing: -1.5px;">Turn your data into immediate action.</h1>
        <p style="font-size: 1.15rem; color: var(--ds-sys-color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">
          Stop wrestling with messy data pipelines. Our unified reporting dashboard automatically synthesizes your payment volume, churn rates, and customer lifetime value in real-time.
        </p>
        <button class="btn btn-primary btn-lg" style="border-radius: 6px; background: #4338ca;">View Demo Dashboard</button>
      </div>

      <!-- Feature Graphic Mock -->
      <div style="background: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-border); border-radius: 12px; padding: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.05); transform: perspective(1000px) rotateY(-5deg);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);">Revenue Growth</h3>
          <span style="background: #e0e7ff; color: #4338ca; padding: 2px 8px; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">+24.5% YTD</span>
        </div>

        <!-- Custom Chart UI Mock -->
        <div style="height: 150px; display: flex; align-items: flex-end; gap: 0.5rem; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <div style="flex: 1; background: #818cf8; height: 30%; border-radius: 4px 4px 0 0;"></div>
          <div style="flex: 1; background: #818cf8; height: 45%; border-radius: 4px 4px 0 0;"></div>
          <div style="flex: 1; background: #818cf8; height: 40%; border-radius: 4px 4px 0 0;"></div>
          <div style="flex: 1; background: #818cf8; height: 65%; border-radius: 4px 4px 0 0;"></div>
          <div style="flex: 1; background: #818cf8; height: 80%; border-radius: 4px 4px 0 0;"></div>
          <div style="flex: 1; background: #4338ca; height: 100%; border-radius: 4px 4px 0 0;"></div>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant); font-weight: 600;">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span style="color: #4338ca;">Jun</span>
        </div>

      </div>

    </div>

  </main>

</div>
{{< /demo >}}
