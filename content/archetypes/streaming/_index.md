---
title: "Streaming / Media UI"
description: "A dark-mode forced archetype demonstrating horizontal media carousels and an immersive details modal, inspired by Netflix and Spotify."
menu:
  main:
    parent: "archetypes"
---

The Streaming Media archetype forces dark-mode tokens globally to ensure high contrast against rich video thumbnails. It showcases infinite horizontal scrolling containers and a dense, visually arresting details overlay.

## 1. Browse Interface
A classic "hero billboard" layout layered above multiple cascading rows of horizontally scrolling media cards.

{{< demo >}}
<!-- Force Dark Mode on the parent container -->
<div data-theme="dark" style="width: 100%; height: 650px; border: 1px solid #333; border-radius: 8px; overflow-y: auto; overflow-x: hidden; background: #141414; color: #ffffff; font-family: var(--ds-sys-font-family-base);">
  
  <!-- Transparent Global Navigation -->
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2.5rem; position: sticky; top: 0; z-index: 50; background: linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0) 100%);">
    <div style="display: flex; align-items: center; gap: 3rem;">
      <div style="font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; color: #e50914;">STREAM</div>
      <nav style="display: flex; gap: 1.5rem; font-size: 0.9rem; font-weight: 500;">
        <span style="color: #ffffff; cursor: pointer; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Home</span>
        <span style="color: #e5e5e5; cursor: pointer; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">TV Shows</span>
        <span style="color: #e5e5e5; cursor: pointer; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Movies</span>
        <span style="color: #e5e5e5; cursor: pointer; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">My List</span>
      </nav>
    </div>
    <div style="display: flex; align-items: center; gap: 1.5rem; color: #ffffff;">
      <span class="material-symbols-outlined" style="cursor: pointer; font-size: 1.5rem;">search</span>
      <span class="material-symbols-outlined" style="cursor: pointer; font-size: 1.5rem;">notifications</span>
      <div style="width: 32px; height: 32px; border-radius: 4px; background: #333; cursor: pointer; border: 1px solid #444;"></div>
    </div>
  </header>

  <!-- Auto-playing Hero Billboard -->
  <section style="position: relative; height: 500px; margin-top: -85px; background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover no-repeat; display: flex; align-items: flex-end;">
    <!-- Fade overlay to blend hero into the background -->
    <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 250px; background: linear-gradient(0deg, #141414 0%, transparent 100%);"></div>
    
    <div style="padding: 0 3rem 2rem 3rem; width: 50%; position: relative; z-index: 10; text-shadow: 0 2px 4px rgba(0,0,0,0.6);">
      <!-- Fictional Series Title Logo -->
      <div style="font-family: 'Times New Roman', Times, serif; font-size: 4rem; font-weight: 900; letter-spacing: -2px; line-height: 1; margin-bottom: 1rem;">NEON<br>STREETS</div>
      
      <p style="font-size: 1.1rem; line-height: 1.4; color: #ffffff; margin-bottom: 1.5rem; font-weight: 500;">
        In a cyberpunk metropolis controlled by rogue AI, a detective must solve a murder before her own neural implants are permanently shut down.
      </p>
      
      <div style="display: flex; gap: 1rem;">
        <button class="btn btn-primary" style="background: white; color: black; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 700; font-size: 1.1rem; border: none; display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span> Play
        </button>
        <button class="btn btn-outline" style="background: rgba(109, 109, 110, 0.7); color: white; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 700; font-size: 1.1rem; border: none; display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-symbols-outlined">info</span> More Info
        </button>
      </div>
    </div>
  </section>

  <!-- Horizontal Carousels -->
  <main style="padding: 0 3rem 3rem 3rem; position: relative; z-index: 10; margin-top: -2rem;">
    
    <!-- Row 1 -->
    <div style="margin-bottom: 3rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Trending Now</h2>
      <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; margin-inline: -3rem; padding-inline: 3rem; scroll-snap-type: x mandatory; scrollbar-width: none;">
        
        <!-- Hover-expanding Cards -->
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start; transition: transform 0.2s; position: relative;" onmouseover="this.style.transform='scale(1.05)'; this.style.zIndex='10'" onmouseout="this.style.transform='scale(1)'; this.style.zIndex='1'">
          <div style="position: absolute; top: 0; left: 0; background: #e50914; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">Top 10</div>
        </div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/horror.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        
      </div>
    </div>

    <!-- Row 2 -->
    <div style="margin-bottom: 0;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Sci-Fi & Fantasy</h2>
      <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; margin-inline: -3rem; padding-inline: 3rem; scroll-snap-type: x mandatory; scrollbar-width: none;">
        
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start; position: relative;">
          <!-- "Netflix Original" N -->
          <svg style="position: absolute; top: 8px; left: 8px; width: 12px; height: 12px;" viewBox="0 0 100 100" fill="#e50914"><path d="M78,14.6L78,85.4C78,88,75.9,90,73.3,90L26.7,90C24.1,90,22,88,22,85.4L22,14.6C22,12,24.1,10,26.7,10L73.3,10C75.9,10,78,12,78,14.6z M64,36.5L36,75.2L36,25L64,64.8L64,36.5z"/></svg>
        </div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/horror.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        <div style="min-width: 250px; height: 140px; background: url('/aurora-docs/images/archetypes/horror.png') center/cover; border-radius: 4px; cursor: pointer; scroll-snap-align: start;"></div>
        
      </div>
    </div>

  </main>
</div>
{{< /demo >}}

---

## 2. Details Modal
When a user clicks on a thumbnail map, the system spawns an immersive modal container above the UI, rendering a cinematic trailer at the top and metadata below.

{{< demo >}}
<div data-theme="dark" style="width: 100%; height: 600px; border: 1px solid #333; border-radius: 8px; background: #141414; font-family: var(--ds-sys-font-family-base); display: flex; justify-content: center; align-items: center; position: relative;">
  
  <!-- Faded Background to simulate the overlay effect -->
  <div style="position: absolute; width: 100%; height: 100%; background: rgba(0,0,0,0.7);"></div>

  <!-- The Modal Box -->
  <div style="width: 850px; background: #181818; border-radius: 12px; overflow: hidden; position: relative; z-index: 10; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);">
    
    <!-- Close Button -->
    <div style="position: absolute; top: 1.5rem; right: 1.5rem; width: 36px; height: 36px; background: #181818; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 50; border: 1px solid #333;">
      <span class="material-symbols-outlined" style="color: white; font-size: 1.25rem;">close</span>
    </div>

    <!-- Video Trailer Hero Area -->
    <div style="width: 100%; height: 400px; background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; position: relative;">
      <!-- Gradient Fade into Info -->
      <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 150px; background: linear-gradient(0deg, #181818 0%, transparent 100%);"></div>
      
      <!-- Video Controls overlaying the bottom edge -->
      <div style="position: absolute; bottom: 1.5rem; left: 3rem; display: flex; gap: 0.75rem; align-items: center;">
         <button style="background: white; color: black; border: none; border-radius: 4px; padding: 0.4rem 1.75rem; font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span> Resume
        </button>
        <button style="width: 40px; height: 40px; border-radius: 50%; background: transparent; border: 2px solid rgba(255,255,255,0.5); color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;">
          <span class="material-symbols-outlined">add</span>
        </button>
        <button style="width: 40px; height: 40px; border-radius: 50%; background: transparent; border: 2px solid rgba(255,255,255,0.5); color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;">
          <span class="material-symbols-outlined">thumb_up</span>
        </button>
      </div>

       <div style="position: absolute; bottom: 1.5rem; right: 3rem; display: flex; gap: 0.75rem; align-items: center;">
         <button style="width: 40px; height: 40px; border-radius: 50%; background: transparent; border: 2px solid rgba(255,255,255,0.5); color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;">
          <span class="material-symbols-outlined">volume_off</span>
        </button>
       </div>
    </div>

    <!-- Metadata Details Grid -->
    <div class="l-grid" style="grid-template-columns: 2fr 1fr; gap: 3rem; padding: 1.5rem 3rem 3rem 3rem;">
      
      <!-- Left: Synopsis & Meta -->
      <div>
        <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1rem; font-weight: 500; font-size: 0.95rem;">
          <span style="color: #46d369; font-weight: 700;">98% Match</span>
          <span style="color: #bcbcbc;">2026</span>
          <span style="border: 1px solid #777; padding: 0 0.4rem; border-radius: 3px; color: #bcbcbc; font-size: 0.8rem;">TV-MA</span>
          <span style="color: #bcbcbc;">3 Seasons</span>
          <span style="border: 1px solid rgba(255,255,255,0.2); padding: 0 0.4rem; border-radius: 3px; color: #bcbcbc; font-size: 0.6rem; font-weight: 700;">HD</span>
        </div>
        
        <p style="font-size: 1.1rem; line-height: 1.5; color: #ffffff; margin-bottom: 0;">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
      </div>

      <!-- Right: Cast & Tags -->
      <div style="font-size: 0.9rem; line-height: 1.4;">
        <div style="margin-bottom: 0.5rem;">
          <span style="color: #777;">Cast: </span>
          <span style="color: #bcbcbc; cursor: pointer; text-decoration: underline;">Winona Ryder</span>, <span style="color: #bcbcbc; cursor: pointer;">David Harbour</span>, <span style="color: #bcbcbc; cursor: pointer;">Millie Bobby Brown</span>, <span style="font-style: italic; color: #777; cursor: pointer;">more</span>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <span style="color: #777;">Genres: </span>
          <span style="color: #bcbcbc; cursor: pointer;">Sci-Fi TV</span>, <span style="color: #bcbcbc; cursor: pointer;">Teen TV Shows</span>, <span style="color: #bcbcbc; cursor: pointer;">TV Horror</span>
        </div>
        <div style="margin-bottom: 0.5rem;">
          <span style="color: #777;">This show is: </span>
          <span style="color: #bcbcbc; cursor: pointer;">Ominous</span>, <span style="color: #bcbcbc; cursor: pointer;">Scary</span>, <span style="color: #bcbcbc; cursor: pointer;">Dark</span>
        </div>
      </div>

    </div>

  </div>
</div>
{{< /demo >}}
