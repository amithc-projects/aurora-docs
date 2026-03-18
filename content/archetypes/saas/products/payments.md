---
title: "Payments Infrastructure"
description: "A deep dive Product Details page within the SaaS archetype."
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
        <div style="color: var(--ds-sys-color-primary); font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem;">Acme Payments</div>
        <h1 style="font-size: 3rem; font-weight: 800; line-height: 1.1; margin: 0 0 1.5rem 0; letter-spacing: -1.5px;">A fully integrated suite of payment products.</h1>
        <p style="font-size: 1.15rem; color: var(--ds-sys-color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">
          We bring together everything that's required to build websites and apps that accept payments and send payouts globally. Acme's products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces.
        </p>
        <button class="btn btn-primary btn-lg" style="border-radius: 6px;">Explore the Docs</button>
      </div>

      <!-- Feature Graphic Mock -->
      <div style="background: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-border); border-radius: 12px; padding: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.05); transform: perspective(1000px) rotateY(-5deg);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);">Checkout API</h3>
          <span style="background: #10b981; color: white; padding: 2px 8px; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">Live</span>
        </div>

        <div style="background: #1e1e1e; border-radius: 8px; padding: 1.5rem; color: #a3a3a3; font-family: monospace; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
          <span style="color: #c678dd;">const</span> <span style="color: #61afef;">session</span> = <span style="color: #c678dd;">await</span> acme.checkout.sessions.<span style="color: #61afef;">create</span>({<br>
            &nbsp;&nbsp;payment_method_types: [<span style="color: #98c379;">'card'</span>],<br>
            &nbsp;&nbsp;line_items: [{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;price: <span style="color: #98c379;">'price_1234'</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;quantity: <span style="color: #d19a66;">1</span>,<br>
            &nbsp;&nbsp;}],<br>
            &nbsp;&nbsp;mode: <span style="color: #98c379;">'payment'</span>,<br>
          });
        </div>

        <button style="width: 100%; border: none; background: #6366f1; color: white; padding: 1rem; border-radius: 6px; font-weight: 600; font-size: 1rem; cursor: pointer;">Pay $29.00</button>

      </div>

    </div>

  </main>

</div>
{{< /demo >}}
