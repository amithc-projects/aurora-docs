---
title: "News / Editorial Site"
description: "A dual-view archetype demonstrating a dense Editorial Homepage and a typography-driven Article Page, inspired by The Verge and NY Times."
menu:
  main:
    parent: "archetypes"
---

The News archetype proves the system's ability to handle extreme content density, irregular grid layouts (Masonry/Bento boxes), and rich, long-form typography rendering.

## 1. Editorial Homepage
A complex, multi-column layout that prioritizes a "Hero" breaking news story surrounded by secondary and tertiary bento-box article feeds.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-surface); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Alert Banner -->
  <div style="background: #ef4444; color: white; padding: 0.75rem 2rem; display: flex; align-items: center; gap: 1rem; font-weight: 500; font-size: 0.9rem;">
    <span style="background: white; color: #ef4444; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px;">Breaking</span>
    Global markets rally as inflation drops below target rates.
  </div>

  <!-- Editorial Header -->
  <header style="padding: 2rem 2rem 1rem 2rem; border-bottom: 3px solid var(--ds-sys-color-on-surface); text-align: center;">
    <div style="font-family: 'Times New Roman', Times, serif; font-size: 3.5rem; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; color: var(--ds-sys-color-on-surface); line-height: 1;">THE DAILY CHRONICLE</div>
    <div style="display: flex; justify-content: space-between; align-items: center; mt-2; padding-top: 1rem; border-top: 1px solid var(--ds-sys-color-border); margin-top: 1.5rem; font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">
      <div>Tuesday, October 24, 2026</div>
      <div style="display: flex; gap: 2rem;">
        <span style="cursor: pointer;">World</span>
        <span style="cursor: pointer;">Politics</span>
        <span style="cursor: pointer;">Business</span>
        <span style="cursor: pointer;">Tech</span>
        <span style="cursor: pointer;">Science</span>
      </div>
      <div>Today's Paper</div>
    </div>
  </header>

  <!-- Masonry News Grid -->
  <main style="padding: 2rem; background: var(--ds-sys-color-surface-container-lowest);">
    <div class="l-grid" style="grid-template-columns: repeat(12, 1fr); gap: 2rem;">
      
      <!-- Primary Hero Article (Spans 8 columns) -->
      <article style="grid-column: span 8; cursor: pointer; border-right: 1px solid var(--ds-sys-color-border); padding-right: 2rem;">
        <div style="width: 100%; height: 400px; background: url('/aurora-docs/images/archetypes/summit.png') center/cover; margin-bottom: 1rem; position: relative;">
          <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; font-size: 0.75rem; border-radius: 4px; display: flex; align-items: center; gap: 4px;">
            <span class="material-symbols-outlined" style="font-size: 1rem;">photo_camera</span> 12 Photos
          </div>
        </div>
        <h2 style="font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; line-height: 1.1; margin: 0 0 1rem 0; color: var(--ds-sys-color-on-surface);">Historic Summit Concludes with Sweeping Climate Accords</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; color: var(--ds-sys-color-on-surface-variant); margin-bottom: 1rem;">Leaders from 40 nations agreed to triple renewable energy capacity by 2030, marking the most significant commitment since the Paris Agreement. Critics, however, point to a lack of binding enforcement mechanisms.</p>
        <div style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; color: var(--ds-sys-color-primary);">By Jonathan Mercer • 2 Hours Ago</div>
      </article>

      <!-- Secondary Feed (Spans 4 columns) -->
      <aside style="grid-column: span 4; display: flex; flex-direction: column; gap: 2rem;">
        
        <article style="cursor: pointer; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 1.5rem;">
          <div style="width: 100%; height: 180px; background: url('/aurora-docs/images/archetypes/chip.png') center/cover; margin-bottom: 0.75rem;"></div>
          <h3 style="font-size: 1.5rem; font-weight: 700; line-height: 1.2; margin: 0 0 0.5rem 0; color: var(--ds-sys-color-on-surface);">AI Chip Giant Unveils Next-Gen Silicon</h3>
          <p style="font-size: 0.95rem; color: var(--ds-sys-color-on-surface-variant); margin-bottom: 0.5rem; line-height: 1.5;">The new architecture promises a 4x leap in training speeds for large language models, sending tech stocks soaring.</p>
          <div style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-variant); text-transform: uppercase; font-weight: 600;">Technology</div>
        </article>

        <article style="cursor: pointer; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 1.5rem;">
          <div style="width: 100%; height: 180px; background: url('/aurora-docs/images/archetypes/bank.png') center/cover; margin-bottom: 0.75rem;"></div>
          <h3 style="font-size: 1.5rem; font-weight: 700; line-height: 1.2; margin: 0 0 0.5rem 0; color: var(--ds-sys-color-on-surface);">Central Bank Holds Rates Steady</h3>
          <p style="font-size: 0.95rem; color: var(--ds-sys-color-on-surface-variant); margin-bottom: 0.5rem; line-height: 1.5;">Officials signaled that borrowing costs will remain elevated throughout the summer as inflation cools slower than anticipated.</p>
          <div style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-variant); text-transform: uppercase; font-weight: 600;">Economy</div>
        </article>

        <article style="cursor: pointer;">
          <div style="width: 100%; height: 180px; background: url('/aurora-docs/images/archetypes/fashion.png') center/cover; margin-bottom: 0.75rem;"></div>
          <h3 style="font-size: 1.25rem; font-weight: 700; line-height: 1.2; margin: 0; color: var(--ds-sys-color-on-surface);">The Hidden Cost of Fast Fashion</h3>
        </article>

      </aside>

    </div>
  </main>
</div>
{{< /demo >}}

---

## 2. Article Page
The long-form reading experience. Centers around a narrow, highly constrained typography column optimized for legibility (65-75 characters per line), punctuated by rich media blockquotes, drop-caps, and image captions.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; background: var(--ds-sys-color-surface-container-lowest); font-family: var(--ds-sys-font-family-base); color: var(--ds-sys-color-on-surface);">
  
  <!-- Minimal Header -->
  <header style="padding: 1rem 2rem; border-bottom: 1px solid var(--ds-sys-color-border); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); z-index: 10;">
    <div style="font-family: 'Times New Roman', Times, serif; font-weight: 900; font-size: 1.5rem; letter-spacing: -0.5px;">TDC</div>
    <div style="display: flex; gap: 1rem;">
      <button class="btn btn-outline btn-sm" style="border-radius: 999px;">Log In</button>
      <button class="btn btn-primary btn-sm" style="border-radius: 999px;">Subscribe</button>
    </div>
  </header>

  <!-- Article Container -->
  <article style="max-width: 680px; margin: 0 auto; padding: 4rem 2rem 6rem 2rem;">
    
    <!-- Header/Meta -->
    <div style="margin-bottom: 3rem; text-align: center;">
      <div style="font-weight: 700; color: var(--ds-sys-color-primary); text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 1rem;">Architecture & Design</div>
      <h1 style="font-size: 3rem; font-weight: 900; line-height: 1.1; letter-spacing: -1px; margin: 0 0 1.5rem 0; font-family: 'Times New Roman', Times, serif;">The Brutalist Revival Hiding in Plain Sight.</h1>
      <p style="font-size: 1.4rem; color: var(--ds-sys-color-on-surface-variant); line-height: 1.4; margin: 0 0 2rem 0; font-weight: 300;">Across the globe, concrete monoliths are being rescued from the wrecking ball and transformed into luxury cultural hubs.</p>
      
      <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
        <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--ds-sys-color-surface-container-high);"></div>
        <div style="text-align: left;">
          <div style="font-weight: 700; font-size: 1rem;">Elena Rostova</div>
          <div style="font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant);">Published Oct 24, 2026</div>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <div style="font-size: 1.15rem; line-height: 1.8; color: #374151;">
      
      <!-- Dropcap -->
      <p style="margin-bottom: 1.5rem;">
        <span style="float: left; font-size: 4.5rem; line-height: 0.8; font-weight: 900; font-family: 'Times New Roman', Times, serif; margin-right: 0.5rem; color: var(--ds-sys-color-primary);">F</span>or decades, the imposing concrete skeletons of the 1970s Brutalist movement were seen as urban blights. They were associated with dystopian bureaucracy, imposing conformity, and structural decay. Cities from London to Boston raced to quietly demolish these structures, replacing them with inoffensive glass-and-steel towers that reflected the sky rather than anchoring the earth.
      </p>

      <p style="margin-bottom: 2.5rem;">
        But a quiet revolution has been brewing among Gen-Z architects and historical preservationists. Rather than erasing this polarizing aesthetic, they are embracing the raw authenticity of poured concrete, arguing that its unparalleled thermal mass and cavernous proportions offer a sustainable canvas for modern reimagining.
      </p>

      <!-- Full-bleed Image Breakout Mock -->
      <figure style="margin: 3rem -4rem; position: relative;">
        <div style="width: 100%; height: 450px; background: url('/aurora-docs/images/archetypes/brutalist.png') center/cover; border-radius: 8px;"></div>
        <figcaption style="font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant); margin-top: 0.75rem; text-align: right; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 0.75rem;">
          The newly renovated Geisel Library interior, retaining its exposed concrete ribs while introducing warm acoustic timber ceilings. (Photo: Getty)
        </figcaption>
      </figure>

      <h3 style="font-family: var(--ds-sys-font-family-base); font-size: 1.75rem; font-weight: 800; margin: 3rem 0 1rem 0; color: var(--ds-sys-color-on-surface);">A Sustainable Canvas</h3>

      <p style="margin-bottom: 1.5rem;">
        The environmental argument for saving Brutalist structures is ironically one of the strongest driving forces behind their gentrification. Tearing down a massive concrete superstructure releases immense amounts of trapped carbon. Retrofitting them, however, yields spectacular results.
      </p>

      <!-- Editorial Pullquote -->
      <blockquote style="font-family: 'Times New Roman', Times, serif; font-size: 1.8rem; font-style: italic; line-height: 1.4; color: var(--ds-sys-color-primary); margin: 3rem -2rem; padding-left: 2rem; border-left: 4px solid var(--ds-sys-color-primary);">
        "We aren't just saving buildings; we are preserving a specific philosophy of robust, democratic civic gathering that modern glass boxes simply cannot replicate."
      </blockquote>

      <p style="margin-bottom: 1.5rem;">
        As the movement gains momentum, the question is no longer whether Brutalism will survive the decade, but rather who gets to inhabit these newly minted luxury fortresses. What was once the aesthetic of the working class has, inevitably, become the playground of the elite.
      </p>

    </div>

    <!-- Article Footer / Share Actions -->
    <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--ds-sys-color-border); display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; gap: 0.5rem;">
        <span style="background: var(--ds-sys-color-surface-container-high); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; cursor: pointer;">#Architecture</span>
        <span style="background: var(--ds-sys-color-surface-container-high); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; cursor: pointer;">#Design</span>
      </div>
      <div style="display: flex; gap: 1rem; color: var(--ds-sys-color-on-surface-variant);">
        <span class="material-symbols-outlined" style="cursor: pointer;">share</span>
        <span class="material-symbols-outlined" style="cursor: pointer;">bookmark_add</span>
      </div>
    </div>

  </article>
</div>
{{< /demo >}}
