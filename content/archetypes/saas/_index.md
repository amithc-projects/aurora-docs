---
title: "SaaS Product Site"
description: "A dual-view archetype demonstrating a Marketing Homepage and a secure Application Dashboard."
menu:
  main:
    identifier: "saas"
    parent: "archetypes"
---

The SaaS archetype requires two distinct structural layouts: a dynamic, scrolling marketing homepage designed to convert visitors, and a secure, dense application shell designed for productivity.

## 1. Marketing Homepage
The marketing view utilizes an expansive edge-to-edge layout, a Mega Menu for complex product routing, and a large typographic Hero section.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-bg-app); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Global Navigation -->
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border);">
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div style="font-weight: 800; font-size: 1.2rem; letter-spacing: -0.5px; color: var(--ds-sys-color-primary);">ACME UI</div>
      <nav style="display: flex; gap: 1.5rem; font-size: 0.9rem; font-weight: 500;">
        <span style="color: var(--ds-sys-color-on-surface); cursor: pointer;"><a href="/aurora-docs/archetypes/saas/products/" style="color: inherit; text-decoration: none;">Products</a></span>
        <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Solutions</span>
        <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Pricing</span>
      </nav>
    </div>
    <div style="display: flex; gap: 1rem;">
      <button class="btn btn-ghost">Sign In</button>
      <button class="btn btn-primary" style="border-radius: 999px;">Start Free Trial</button>
    </div>
  </header>

  <!-- Hero Section -->
  <section style="padding: 6rem 2rem; text-align: center; background: radial-gradient(circle at top, var(--ds-sys-color-surface-container-highest), var(--ds-sys-color-bg-app));">
    <h1 style="font-size: 3.5rem; font-weight: 800; letter-spacing: -1.5px; margin-bottom: 1.5rem; color: var(--ds-sys-color-on-surface); max-width: 800px; margin-inline: auto; line-height: 1.1;">
      Financial infrastructure for the internet
    </h1>
    <p style="font-size: 1.25rem; color: var(--ds-sys-color-on-surface-variant); max-width: 600px; margin-inline: auto; margin-bottom: 3rem;">
      Join millions of companies of all sizes—from startups to Fortune 500s—who use Acme's software and APIs to accept payments and manage businesses online.
    </p>
    <div style="display: flex; justify-content: center; gap: 1rem;">
      <a href="/aurora-docs/archetypes/saas/products/" style="text-decoration: none;"><button class="btn btn-primary btn-lg" style="border-radius: 999px; padding: 0 2rem; cursor: pointer;">Start now</button></a>
      <button class="btn btn-outline btn-lg" style="border-radius: 999px; padding: 0 2rem;">Contact sales</button>
    </div>
  </section>

  <!-- Feature Grid -->
  <section style="padding: 4rem 2rem; background: var(--ds-sys-color-surface);">
    <div class="l-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
      
      <a href="/aurora-docs/archetypes/saas/products/analytics/" style="text-decoration: none; color: inherit; display: block; cursor: pointer;">
        <div class="card" style="padding: 2rem; border: none; background: var(--ds-sys-color-surface-container-low); height: 100%;">
          <span class="material-symbols-outlined" style="color: var(--ds-sys-color-primary); font-size: 2rem; margin-bottom: 1rem;">insights</span>
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.1rem;">Deep Analytics</h3>
          <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem; line-height: 1.5; margin: 0;">Access real-time business insights with intelligent dashboards and custom reporting tools.</p>
        </div>
      </a>

      <div class="card" style="padding: 2rem; border: none; background: var(--ds-sys-color-surface-container-low);">
        <span class="material-symbols-outlined" style="color: var(--ds-sys-color-primary); font-size: 2rem; margin-bottom: 1rem;">security</span>
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.1rem;">Bank-grade Security</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem; line-height: 1.5; margin: 0;">Our systems are audited by third parties to ensure maximum protection for customer data.</p>
      </div>

      <a href="/aurora-docs/archetypes/saas/products/payments/" style="text-decoration: none; color: inherit; display: block; cursor: pointer;">
        <div class="card" style="padding: 2rem; border: none; background: var(--ds-sys-color-surface-container-low); height: 100%;">
          <span class="material-symbols-outlined" style="color: var(--ds-sys-color-primary); font-size: 2rem; margin-bottom: 1rem;">payments</span>
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.1rem;">Global Payments</h3>
          <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem; line-height: 1.5; margin: 0;">Deploy with confidence using global payment APIs designed for sub-millisecond latency worldwide.</p>
        </div>
      </a>

    </div>
  </section>
</div>
{{< /demo >}}

---

## 2. Application Dashboard
Once logged in, the user interacts with an intricate interface that prioritizes data density (Datagrids, Statistic Cards) utilizing a resilient App Shell layout.

{{< demo >}}
<div style="display: grid; grid-template-columns: 240px 1fr; width: 100%; height: 500px; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-bg-app); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Sidebar Navigation -->
  <aside style="background: var(--ds-sys-color-surface-container); border-right: 1px solid var(--ds-sys-color-border); display: flex; flex-direction: column;">
    <div style="padding: 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid var(--ds-sys-color-border);">
      <div style="width: 28px; height: 28px; background: var(--ds-sys-color-primary); border-radius: 6px;"></div>
      <span style="font-weight: 700; font-size: 1rem; color: var(--ds-sys-color-on-surface);">Acme Corp</span>
    </div>
    
    <nav style="padding: 1rem; flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; background: var(--ds-sys-color-primary-container); color: var(--ds-sys-color-on-primary-container); border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 0.9rem;">
        <span class="material-symbols-outlined" style="font-size: 1.2rem;">home</span>
        Overview
      </a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; color: var(--ds-sys-color-on-surface-variant); text-decoration: none; font-weight: 500; font-size: 0.9rem;">
        <span class="material-symbols-outlined" style="font-size: 1.2rem;">payments</span>
        Payments
      </a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; color: var(--ds-sys-color-on-surface-variant); text-decoration: none; font-weight: 500; font-size: 0.9rem;">
        <span class="material-symbols-outlined" style="font-size: 1.2rem;">people</span>
        Customers
      </a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; color: var(--ds-sys-color-on-surface-variant); text-decoration: none; font-weight: 500; font-size: 0.9rem;">
        <span class="material-symbols-outlined" style="font-size: 1.2rem;">monitoring</span>
        Reports
      </a>
    </nav>
  </aside>

  <!-- Main Content Area -->
  <div style="display: flex; flex-direction: column; overflow: hidden;">
    
    <!-- Topbar -->
    <header style="height: 64px; background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border); display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem;">
      <div style="position: relative; width: 300px;">
        <span class="material-symbols-outlined" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--ds-sys-color-on-surface-variant); font-size: 1.2rem;">search</span>
        <input type="text" placeholder="Search transactions..." style="width: 100%; padding: 0.4rem 1rem 0.4rem 2.2rem; border-radius: 6px; border: 1px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface-container-low); color: var(--ds-sys-color-on-surface); font-family: inherit;">
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span class="material-symbols-outlined" style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">notifications</span>
        <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--ds-sys-color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem; cursor: pointer;">A</div>
      </div>
    </header>

    <!-- Dashboard Content -->
    <main style="flex: 1; padding: 2rem; background: var(--ds-sys-color-bg-app); overflow-y: auto;">
      <h2 style="margin-top: 0; margin-bottom: 1.5rem; font-size: 1.5rem; color: var(--ds-sys-color-on-surface);">Today's Overview</h2>
      
      <!-- KPI Cards -->
      <div class="l-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        <div class="card" style="padding: 1.5rem; background: var(--ds-sys-color-surface);">
          <div style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">Gross Volume</div>
          <div style="font-size: 2rem; font-weight: 700; color: var(--ds-sys-color-on-surface); margin: 0.5rem 0;">$24,050.00</div>
          <div style="color: #10b981; font-size: 0.85rem; font-weight: 500;">+12.5% from yesterday</div>
        </div>
        <div class="card" style="padding: 1.5rem; background: var(--ds-sys-color-surface);">
          <div style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">New Customers</div>
          <div style="font-size: 2rem; font-weight: 700; color: var(--ds-sys-color-on-surface); margin: 0.5rem 0;">142</div>
          <div style="color: #10b981; font-size: 0.85rem; font-weight: 500;">+4.2% from yesterday</div>
        </div>
        <div class="card" style="padding: 1.5rem; background: var(--ds-sys-color-surface);">
          <div style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">Failed Payments</div>
          <div style="font-size: 2rem; font-weight: 700; color: var(--ds-sys-color-on-surface); margin: 0.5rem 0;">12</div>
          <div style="color: #ef4444; font-size: 0.85rem; font-weight: 500;">-1.5% from yesterday</div>
        </div>
      </div>

      <!-- Recent Transactions Table (Structural mockup) -->
      <div class="card" style="background: var(--ds-sys-color-surface); overflow: hidden;">
        <div style="padding: 1.5rem; border-bottom: 1px solid var(--ds-sys-color-border);">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);">Recent Transactions</h3>
        </div>
        <div style="padding: 1rem 1.5rem; display: flex; justify-content: space-between; border-bottom: 1px solid var(--ds-sys-color-border);">
          <span style="color: var(--ds-sys-color-on-surface); font-weight: 500;">Stripe Inc.</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">$4,200.00</span>
          <span style="color: #10b981; font-size: 0.85rem; background: rgba(16, 185, 129, 0.1); padding: 2px 8px; border-radius: 4px;">Succeeded</span>
        </div>
        <div style="padding: 1rem 1.5rem; display: flex; justify-content: space-between; border-bottom: 1px solid var(--ds-sys-color-border);">
          <span style="color: var(--ds-sys-color-on-surface); font-weight: 500;">Apple Store</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">$1,099.00</span>
          <span style="color: #ef4444; font-size: 0.85rem; background: rgba(239, 68, 68, 0.1); padding: 2px 8px; border-radius: 4px;">Failed</span>
        </div>
         <div style="padding: 1rem 1.5rem; display: flex; justify-content: space-between;">
          <span style="color: var(--ds-sys-color-on-surface); font-weight: 500;">Netflix</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">$15.99</span>
          <span style="color: #10b981; font-size: 0.85rem; background: rgba(16, 185, 129, 0.1); padding: 2px 8px; border-radius: 4px;">Succeeded</span>
        </div>
      </div>

    </main>

  </div>
</div>
{{< /demo >}}
