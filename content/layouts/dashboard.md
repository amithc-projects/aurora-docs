---
title: "Dashboard Layout"
description: "Standard application shell with sidebar and topbar."
menu:
  main:
    parent: "layouts"
---


## Application Shell
Structure for SaaS applications.

{{< demo >}}
<div style="display: grid; grid-template-columns: 60px 1fr; width: 100%; height: 400px; border: 1px solid #ccc; overflow: hidden; border-radius: 4px;">
  
  <aside style="background: #1e1e1e; color: white; display: flex; flex-direction: column; align-items: center; padding: 1rem 0;">
    <div style="width: 32px; height: 32px; background: var(--ds-sys-color-primary); border-radius: 4px; margin-bottom: 2rem;"></div>
    <span class="material-symbols-outlined" style="margin-bottom: 1.5rem; opacity: 0.8;">dashboard</span>
    <span class="material-symbols-outlined" style="margin-bottom: 1.5rem; opacity: 0.5;">folder</span>
    <span class="material-symbols-outlined" style="margin-bottom: 1.5rem; opacity: 0.5;">settings</span>
  </aside>

  <div style="display: flex; flex-direction: column; background: #f9f9f9;">
    
    <header style="background: white; border-bottom: 1px solid #eee; padding: 0.75rem 1.5rem; display: flex; justify-content: space-between; align-items: center;">
      <h3 style="margin: 0; font-size: 1rem;">Overview</h3>
      <div class="avatar avatar--sm" style="background: #ccc; border-radius: 50%; width: 32px; height: 32px;"></div>
    </header>

    <main style="padding: 1.5rem; overflow-y: auto;">
      <div class="l-grid" style="gap: 1rem;">
        <div class="card" style="padding: 1.5rem;">Stat 1</div>
        <div class="card" style="padding: 1.5rem;">Stat 2</div>
        <div class="card" style="padding: 1.5rem;">Stat 3</div>
      </div>
    </main>

  </div>
</div>
{{< /demo >}}
