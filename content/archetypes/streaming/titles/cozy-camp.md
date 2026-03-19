---
title: "Cozy Camp"
description: "Relax, build a fire, and enjoy the great outdoors."
type: "streaming-title"
categories: ["Casual Gaming"]
duration: "1h 42m"
rating: "PG"
thumbnail: "https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals..."
menu:
  main:
    parent: "streaming"
---

{{< demo >}}
<div data-theme="dark" style="width: 100%; min-height: 800px; border: 1px solid #333; border-radius: 8px; background: #141414; color: #ffffff; font-family: var(--ds-sys-font-family-base); display: flex; flex-direction: column;">
  
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
      <div class="avatar avatar--sm" style="cursor: pointer;"><img src="https://i.pravatar.cc/150?u=a" alt="User" style="border-radius: 4px;"></div>
    </div>
  </header>

  <div style="width: 100%; max-width: 1200px; margin: -85px auto 4rem auto; position: relative; z-index: 10;">
    
    <div class="video-player" data-controls-position="overlay" data-controls-align="bottom" style="box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);">
        <!-- Placeholder Video -->
        <video poster="https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals..." data-start-time="0" preload="metadata" style="max-height: 700px; object-fit: cover; border-radius: 12px; border: 1px solid #333; width: 100%;">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4">
        </video>
        
        <!-- Voiceover Audio -->
        <audio autoplay>
            <source src="/aurora-docs/archetypes/streaming/audio/cozy_camp_voiceover.mp3" type="audio/mpeg">
        </audio>

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
                <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" aria-label="Play/Pause">
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
                <div class="video-settings-menu js-settings-menu" style="bottom: 100%; right: 40px; margin-bottom: 0.5rem; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px); padding: 0.5rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); width: max-content;">
                    <button class="video-controls__btn" data-action="speed" style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 1rem; font-size: 0.85rem; color: #fff; padding: 0.5rem 1rem;">
                        <span style="font-weight: 500;">Playback Speed</span>
                        <span class="js-val" style="color: #ccc;">1x</span>
                    </button>
                </div>
                <button class="video-controls__btn" data-action="fullscreen" aria-label="Fullscreen" style="color: #fff;">
                  <span class="material-symbols-outlined">fullscreen</span>
                </button>
            </div>
        </div>
    </div>

    <div style="padding: 2rem;">
      <h1 style="font-family: 'Times New Roman', Times, serif; font-size: 3.5rem; font-weight: 900; letter-spacing: -2px; margin: 0 0 0.5rem 0; text-transform: uppercase;">Cozy Camp</h1>
      
      <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1.5rem; font-weight: 500; font-size: 0.95rem;">
        <span style="color: #46d369; font-weight: 700;">98% Match</span>
        <span style="border: 1px solid #777; padding: 0 0.4rem; border-radius: 3px; color: #bcbcbc; font-size: 0.8rem;">PG</span>
        <span style="color: #bcbcbc;">1h 42m</span>
        <span style="border: 1px solid rgba(255,255,255,0.2); padding: 0 0.4rem; border-radius: 3px; color: #bcbcbc; font-size: 0.6rem; font-weight: 700;">4K Ultra HD</span>
      </div>

      <p style="font-size: 1.25rem; line-height: 1.5; color: #e5e5e5; max-width: 800px; margin-bottom: 2rem;">
        Relax, build a fire, and enjoy the great outdoors.
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
</div>
{{< /demo >}}
