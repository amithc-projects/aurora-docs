---
title: "Fraud Prevention"
description: "A deep dive Product Details page for a Fraud Prevention SaaS module within the SaaS archetype."
menu:
  main:
    parent: "saas"
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
        <div style="color: #ef4444; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem;">Acme Fraud Prevention</div>
        <h1 style="font-size: 3rem; font-weight: 800; line-height: 1.1; margin: 0 0 1.5rem 0; letter-spacing: -1.5px;">Defeat fraud with machine learning.</h1>
        <p style="font-size: 1.15rem; color: var(--ds-sys-color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">
          Our models learn from billions of data points to detect complex fraud patterns before they impact your margins, maximizing conversion for legitimate customers.
        </p>
        <button class="btn btn-primary btn-lg" style="border-radius: 6px; background: #ef4444;">Explore Radar</button>
      </div>

      <!-- Feature Graphic Mock -->
      <div style="background: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-border); border-radius: 12px; padding: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.05); transform: perspective(1000px) rotateY(-5deg);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);">Risk Assessment</h3>
          <span style="background: #fef2f2; color: #ef4444; padding: 2px 8px; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">Blocked</span>
        </div>

        <div style="background: #ffffff; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid var(--ds-sys-color-border);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
             <span style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem;">Risk Score:</span>
             <span style="color: #ef4444; font-weight: 700; font-size: 1.1rem;">89 / 100</span>
          </div>
          <!-- Progress bar -->
          <div style="width: 100%; height: 8px; background: #fee2e2; border-radius: 4px; overflow: hidden; margin-bottom: 1.5rem;">
            <div style="width: 89%; height: 100%; background: #ef4444;"></div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--ds-sys-color-on-surface);">
             <div style="display: flex; gap: 0.5rem; align-items: center;"><span class="material-symbols-outlined" style="color: #ef4444; font-size: 1.2rem;">warning</span> High velocity zip code</div>
             <div style="display: flex; gap: 0.5rem; align-items: center;"><span class="material-symbols-outlined" style="color: #ef4444; font-size: 1.2rem;">warning</span> IP mismatch with issuing country</div>
          </div>

        </div>

      </div>

    </div>

  </main>

</div>
{{< /demo >}}
