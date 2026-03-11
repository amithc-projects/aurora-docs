---
title: "Incident Alerts"
description: "A child page demonstrating a critical alert feed for a System Monitoring dashboard."
---

This is a demonstration of a child page within the **System Monitoring** archetype.

{{< demo >}}
<div data-theme="dark" style="padding: 2rem; background: #0b0c10; font-family: var(--ds-sys-font-family-base); border: 1px solid #333; border-radius: 8px; color: #c5c6c7;">
  
  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 1.5rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; color: #fff; margin: 0;">Active Incidents</h2>
    <div style="background: rgba(231, 76, 60, 0.1); border: 1px solid rgba(231, 76, 60, 0.3); color: #e74c3c; padding: 4px 12px; border-radius: 4px; font-weight: bold; font-size: 0.85rem;">2 Critical</div>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1rem;">
    
    <!-- Alert Card -->
    <div style="background: #1f2833; border-left: 4px solid #e74c3c; padding: 1.25rem; border-radius: 4px; display: flex; align-items: flex-start; gap: 1rem;">
      <span class="material-symbols-outlined" style="color: #e74c3c; font-size: 1.5rem;">error</span>
      <div>
        <h3 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; color: #fff;">Database Connection Pool Exhausted</h3>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #7f8c8d;">Service: `payments-db-primary` • Zone: `us-east-1`</p>
        <div style="font-family: monospace; background: #0b0c10; padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; color: #e74c3c;">FATAL: remaining connection slots are reserved for non-replication superuser connections</div>
      </div>
      <div style="margin-left: auto; font-size: 0.8rem; color: #7f8c8d;">4m ago</div>
    </div>

    <!-- Alert Card -->
    <div style="background: #1f2833; border-left: 4px solid #f39c12; padding: 1.25rem; border-radius: 4px; display: flex; align-items: flex-start; gap: 1rem;">
      <span class="material-symbols-outlined" style="color: #f39c12; font-size: 1.5rem;">warning</span>
      <div>
        <h3 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; color: #fff;">High Latency Detected</h3>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #7f8c8d;">Service: `auth-api-gateway` • Zone: `eu-central-1`</p>
        <div style="font-family: monospace; background: #0b0c10; border: 1px solid #333; padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; color: #f39c12;">p99 Latency: 4.8s (Threshold: 2.0s)</div>
      </div>
      <div style="margin-left: auto; font-size: 0.8rem; color: #7f8c8d;">12m ago</div>
    </div>

  </div>
</div>
{{< /demo >}}
