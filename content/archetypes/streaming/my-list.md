---
title: "My Watchlist"
description: "A child page demonstrating an individualized user library grid in a Streaming interface."
menu:
  main:
    parent: "streaming"
---

This is a demonstration of a child page within the **Streaming / Media** archetype.

{{< demo >}}
<div data-theme="dark" style="padding: 3rem; background: #141414; color: white; font-family: var(--ds-sys-font-family-base); border: 1px solid #333; border-radius: 8px; min-height: 500px;">
  
  <h2 style="font-size: 2rem; font-weight: 700; margin: 0 0 2rem 0; color: #e5e5e5;">My List</h2>

  <div class="l-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
    
    <div style="height: 124px; background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; border-radius: 4px; cursor: pointer; position: relative;">
       <div style="position: absolute; bottom: 0; width: 100%; height: 4px; background: #333;"><div style="width: 45%; height: 100%; background: #e50914;"></div></div>
    </div>
    <div style="height: 124px; background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; border-radius: 4px; cursor: pointer;"></div>
    <div style="height: 124px; background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; border-radius: 4px; cursor: pointer;"></div>
    <div style="height: 124px; background: url('/aurora-docs/images/archetypes/horror.png') center/cover; border-radius: 4px; cursor: pointer;"></div>
    
  </div>

</div>
{{< /demo >}}
