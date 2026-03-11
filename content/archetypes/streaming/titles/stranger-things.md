---
title: "Stranger Things"
description: "An immersive Video Player page within the Streaming archetype."
---

{{< demo >}}
<div data-theme="dark" style="width: 100%; min-height: 800px; border: 1px solid #333; border-radius: 8px; background: #141414; color: #ffffff; font-family: var(--ds-sys-font-family-base); display: flex; flex-direction: column;">
  
  <!-- Transparent Global Navigation -->
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2.5rem; position: sticky; top: 0; z-index: 50; background: linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0) 100%);">
    <div style="display: flex; align-items: center; gap: 3rem;">
      <div style="font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; color: #e50914;"><a href="/aurora-docs/archetypes/streaming/" style="color: inherit; text-decoration: none;">STREAM</a></div>
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

  <!-- Aurora Video Player Component -->
  <div style="width: 100%; max-width: 1200px; margin: -85px auto 4rem auto; position: relative; z-index: 10;">
    
    <div class="video-player" data-controls-position="overlay" data-controls-align="bottom" style="box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);">
        <!-- Native attributes still work, alongside our custom JS utilities! -->
        <video poster="/aurora-docs/images/archetypes/horror.png" data-start-time="0" preload="metadata" style="max-height: 700px; object-fit: cover; border-radius: 12px; border: 1px solid #333;">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
        </video>

        <div class="video-controls" style="flex-wrap: wrap; gap: 0.5rem; background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%); padding: 2rem 1rem 1rem 1rem;">
            <div style="display: flex; width: 100%; align-items: center; gap: 0.5rem; order: 1;">
                 <span class="video-controls__time js-time-current" style="color: #fff;">00:00</span>
                 <input type="range" class="video-controls__slider js-progress-bar" min="0" max="100" value="0" aria-label="Playback timeline" style="accent-color: #e50914;">
                 <span class="video-controls__time js-time-total" style="color: #fff;">00:00</span>
            </div>
            
            <div style="display: flex; gap: 0.25rem; align-items: center; order: 2; flex-grow: 1;">
                <button class="video-controls__btn" data-action="restart" aria-label="Restart" style="color: #fff;">
                    <span class="material-symbols-outlined">first_page</span>
                </button>
                <button class="video-controls__btn" data-action="rewind" aria-label="Rewind 10s" style="color: #fff;">
                    <span class="material-symbols-outlined">fast_rewind</span>
                </button>
                <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" aria-label="Play/Pause" style="color: #fff;">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                </button>
                <button class="video-controls__btn" data-action="forward" aria-label="Forward 10s" style="color: #fff;">
                    <span class="material-symbols-outlined">fast_forward</span>
                </button>
            </div>
            
            <div style="display: flex; gap: 0.25rem; align-items: center; order: 3; position: relative;">
                <button class="video-controls__btn js-mute-btn" aria-label="Mute" style="color: #fff;">
                    <span class="material-symbols-outlined">volume_up</span>
                </button>
                <button class="video-controls__btn js-settings-btn" aria-label="Settings" style="color: #fff;">
                    <span class="material-symbols-outlined">settings</span>
                </button>
                <button class="video-controls__btn" data-action="fullscreen" aria-label="Fullscreen" style="color: #fff;">
                  <span class="material-symbols-outlined">fullscreen</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Metadata overlay directly under video player -->
    <div style="padding: 2rem;">
      <h1 style="font-family: 'Times New Roman', Times, serif; font-size: 3.5rem; font-weight: 900; letter-spacing: -2px; margin: 0 0 0.5rem 0; text-transform: uppercase;">Stranger Things</h1>
      
      <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1.5rem; font-weight: 500; font-size: 0.95rem;">
        <span style="color: #46d369; font-weight: 700;">85% Match</span>
        <span style="color: #bcbcbc;">2024</span>
        <span style="border: 1px solid #777; padding: 0 0.4rem; border-radius: 3px; color: #bcbcbc; font-size: 0.8rem;">TV-MA</span>
        <span style="color: #bcbcbc;">1 Season</span>
        <span style="border: 1px solid rgba(255,255,255,0.2); padding: 0 0.4rem; border-radius: 3px; color: #bcbcbc; font-size: 0.6rem; font-weight: 700;">HD</span>
      </div>

      <p style="font-size: 1.25rem; line-height: 1.5; color: #e5e5e5; max-width: 800px; margin-bottom: 2rem;">
        When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
      </p>

      <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
        <button class="btn btn-outline" style="background: rgba(109, 109, 110, 0.7); color: white; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 700; font-size: 1.1rem; border: none; display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-symbols-outlined">add</span> My List
        </button>
        <button class="btn btn-outline" style="background: rgba(109, 109, 110, 0.7); color: white; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 700; font-size: 1.1rem; border: none; display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-symbols-outlined">thumb_up</span> Rate
        </button>
      </div>

    </div>
  </div>

  <!-- Related Content Carousels -->
  <div style="padding: 0 3rem 4rem 3rem;">
    
    <div style="margin-bottom: 3rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Similar Titles</h2>
      <!-- Aurora Carousel Component -->
      <div class="carousel carousel--multi" role="region" aria-label="Similar Titles">
        <div><a href="/aurora-docs/archetypes/streaming/titles/neon-streets/"><div style="width: 100%; height: 140px; background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; border-radius: 4px; border: 1px solid transparent; transition: border-color 0.2s;" onmouseover="this.style.borderColor='white'" onmouseout="this.style.borderColor='transparent'"></div></a></div>
        <div><a href="#"><div style="width: 100%; height: 140px; background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; border-radius: 4px;"></div></a></div>
        <div><a href="#"><div style="width: 100%; height: 140px; background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; border-radius: 4px;"></div></a></div>
        <div><a href="#"><div style="width: 100%; height: 140px; background: url('/aurora-docs/images/archetypes/horror.png') center/cover; border-radius: 4px;"></div></a></div>
      </div>
    </div>
  </div>

</div>
{{< /demo >}}
