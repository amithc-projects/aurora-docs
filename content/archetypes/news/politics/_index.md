---
title: "Politics Feed"
description: "A child page demonstrating filtered category feeds for the News archetype."
menu:
  main:
    parent: "news"
---

This is a demonstration of a child page within the **News / Editorial Site** archetype.

{{< demo >}}
<div style="padding: 2rem; background: var(--ds-sys-color-surface-container-lowest); font-family: var(--ds-sys-font-family-base); border: 1px solid var(--ds-sys-color-border); border-radius: 8px;">
  
  <h2 style="font-family: 'Times New Roman', Times, serif; font-size: 3rem; font-weight: 900; margin: 0 0 2rem 0; border-bottom: 4px solid var(--ds-sys-color-on-surface); padding-bottom: 1rem;">POLITICS</h2>

  <div style="display: grid; gap: 2rem;">
    <!-- Stub Article -->
    <article style="display: flex; gap: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--ds-sys-color-border);">
      <div style="width: 250px; height: 160px; background: url('/aurora-docs/images/archetypes/brutalist.png') center/cover; flex-shrink: 0;"></div>
      <div>
        <h3 style="font-size: 1.75rem; font-weight: 800; line-height: 1.1; margin: 0 0 0.5rem 0;"><a href="/aurora-docs/archetypes/news/politics/election-results/" style="color: inherit; text-decoration: none;">Midterm Election Results Shake Up Parliament</a></h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.5; margin-bottom: 0.5rem;">Voter turnout reached unprecedented highs in urban centers, leading to a significant shift in legislative power.</p>
        <div style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; color: var(--ds-sys-color-primary);">1 Hour Ago</div>
      </div>
    </article>

    <!-- Stub Article 2 -->
    <article style="display: flex; gap: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--ds-sys-color-border);">
      <div style="width: 250px; height: 160px; background: url('/aurora-docs/images/archetypes/summit.png') center/cover; flex-shrink: 0; background-color: var(--ds-sys-color-surface-container-high);"></div>
      <div>
        <h3 style="font-size: 1.75rem; font-weight: 800; line-height: 1.1; margin: 0 0 0.5rem 0;"><a href="#" style="color: inherit; text-decoration: none;">New Infrastructure Bill Proposes Major Transit Upgrades</a></h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.5; margin-bottom: 0.5rem;">The ambitious $400B spending package aims to revitalize the rail network and expand green energy initiatives over the next decade.</p>
        <div style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; color: var(--ds-sys-color-primary);">4 Hours Ago</div>
      </div>
    </article>

    <!-- Stub Article 3 -->
    <article style="display: flex; gap: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--ds-sys-color-border);">
      <div style="width: 250px; height: 160px; background: url('/aurora-docs/images/archetypes/bank.png') center/cover; flex-shrink: 0; background-color: var(--ds-sys-color-surface-container-high);"></div>
      <div>
        <h3 style="font-size: 1.75rem; font-weight: 800; line-height: 1.1; margin: 0 0 0.5rem 0;"><a href="#" style="color: inherit; text-decoration: none;">Mayor Announces City-Wide Broadband Initiative</a></h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.5; margin-bottom: 0.5rem;">Aiming to close the digital divide, city officials launched a pilot program offering free high-speed internet to thousands of low-income households.</p>
        <div style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; color: var(--ds-sys-color-primary);">Yesterday</div>
      </div>
    </article>
  </div>

</div>
{{< /demo >}}
