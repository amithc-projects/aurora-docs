---
title: "Streaming / Media UI"
description: "A dark-mode forced archetype demonstrating horizontal media carousels and an immersive details modal, inspired by Netflix and Spotify."
menu:
  main:
    parent: "archetypes"
    identifier: "streaming"
---

The Streaming Media archetype forces dark-mode tokens globally to ensure high contrast against rich video thumbnails. It showcases infinite horizontal scrolling containers and a dense, visually arresting details overlay.

## 1. Browse Interface
A classic "hero billboard" layout layered above multiple cascading rows of horizontally scrolling media cards.

{{< demo >}}
<!-- Force Dark Mode on the parent container -->
<div data-theme="dark" style="width: 100%; height: 850px; border: 1px solid #333; border-radius: 8px; overflow-y: auto; overflow-x: hidden; background: #141414; color: #ffffff; font-family: var(--ds-sys-font-family-base);">
  
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
      <div class="avatar avatar--sm" style="cursor: pointer;"><img src="https://i.pravatar.cc/150?u=a" alt="User" style="border-radius: 4px;"></div>
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
        <a href="/aurora-docs/archetypes/streaming/titles/neon-streets/" style="text-decoration: none;"><button class="btn btn-primary" style="background: white; color: black; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 700; font-size: 1.1rem; border: none; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span> Play
        </button></a>
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
      <div class="carousel carousel--multi" role="region" aria-label="Trending Now">
        
        <!-- Trending Card 1 -->
        <div style="padding: 20px 0;">
          <div class="carousel__item--plain" style="position: relative; width: 220px; height: 160px; margin-left: 60px;">
            <span style="position: absolute; left: -60px; bottom: -10px; font-size: 10rem; font-family: 'Arial Black', sans-serif; font-weight: 900; -webkit-text-stroke: 1px rgba(255,255,255,0.7); color: #000; z-index: 12; pointer-events: none; line-height: 1;">1</span>
            <a href="/aurora-docs/archetypes/streaming/titles/stranger-things/" class="card" style="width: 100%; height: 100%; position: relative; z-index: 10;">
               <div class="card__media" style="background: url('/aurora-docs/images/archetypes/horror.png') center/cover; height: 100%;">
                  <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Top 10</div>
               </div>
            </a>
          </div>
        </div>

        <!-- Trending Card 2 -->
        <div style="padding: 20px 0;">
          <div class="carousel__item--plain" style="position: relative; width: 220px; height: 160px; margin-left: 60px;">
            <span style="position: absolute; left: -60px; bottom: -10px; font-size: 10rem; font-family: 'Arial Black', sans-serif; font-weight: 900; -webkit-text-stroke: 1px rgba(255,255,255,0.7); color: #000; z-index: 12; pointer-events: none; line-height: 1;">2</span>
            <a href="#" class="card" style="width: 100%; height: 100%; position: relative; z-index: 10;">
               <div class="card__media" style="background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; height: 100%;"></div>
            </a>
          </div>
        </div>

        <!-- Trending Card 3 -->
        <div style="padding: 20px 0;">
          <div class="carousel__item--plain" style="position: relative; width: 220px; height: 160px; margin-left: 60px;">
            <span style="position: absolute; left: -60px; bottom: -10px; font-size: 10rem; font-family: 'Arial Black', sans-serif; font-weight: 900; -webkit-text-stroke: 1px rgba(255,255,255,0.7); color: #000; z-index: 12; pointer-events: none; line-height: 1;">3</span>
            <a href="#" class="card" style="width: 100%; height: 100%; position: relative; z-index: 10;">
               <div class="card__media" style="background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; height: 100%;"></div>
            </a>
          </div>
        </div>

        <!-- Trending Card 4 -->
        <div style="padding: 20px 0;">
          <div class="carousel__item--plain" style="position: relative; width: 220px; height: 160px; margin-left: 60px;">
            <span style="position: absolute; left: -60px; bottom: -10px; font-size: 10rem; font-family: 'Arial Black', sans-serif; font-weight: 900; -webkit-text-stroke: 1px rgba(255,255,255,0.7); color: #000; z-index: 12; pointer-events: none; line-height: 1;">4</span>
            <a href="#" class="card" style="width: 100%; height: 100%; position: relative; z-index: 10;">
               <div class="card__media" style="background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; height: 100%;"></div>
            </a>
          </div>
        </div>

        <!-- Trending Card 5 -->
        <div style="padding: 20px 0;">
          <div class="carousel__item--plain" style="position: relative; width: 220px; height: 160px; margin-left: 60px;">
            <span style="position: absolute; left: -60px; bottom: -10px; font-size: 10rem; font-family: 'Arial Black', sans-serif; font-weight: 900; -webkit-text-stroke: 1px rgba(255,255,255,0.7); color: #000; z-index: 12; pointer-events: none; line-height: 1;">5</span>
            <a href="#" class="card" style="width: 100%; height: 100%; position: relative; z-index: 10;">
               <div class="card__media" style="background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; height: 100%;"></div>
            </a>
          </div>
        </div>
        
      </div>
    </div>

    <!-- Row 2 -->
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Sci-Fi & Fantasy</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Sci-Fi & Fantasy">
        
        <div style="padding: 20px 0;"><a href="/aurora-docs/archetypes/streaming/titles/neon-streets/" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/horror.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/horror.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; height: 140px;"></div></a></div>
        
      </div>
    </div>

    <!-- Row 3 -->
    <div style="margin-bottom: 0;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Action & Adventure</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Action & Adventure">
        
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/scifi.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/cyberpunk.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/horror.png') center/cover; height: 140px;"></div></a></div>
        <div style="padding: 20px 0;"><a href="#" class="card"><div class="card__media" style="background: url('/aurora-docs/images/archetypes/fantasy.png') center/cover; height: 140px;"></div></a></div>
        
      </div>
    </div>

    <!-- More Reasons to Join (Aurora Cards) -->
    <div style="margin-top: 5rem; margin-bottom: 4rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: 1.5rem;">More reasons to join</h2>
      <div class="l-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        
        <article class="card" style="background: linear-gradient(135deg, #201a35 0%, #171124 100%); border: none;">
          <div class="card__content" style="padding: 1.5rem; position: relative; min-height: 180px;">
            <h3 style="color: #ffffff; font-size: 1.25rem; margin-bottom: 0.75rem;">Enjoy on your TV</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.4; margin: 0;">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            <div style="position: absolute; bottom: 1.5rem; right: 1.5rem;">
              <span class="material-symbols-outlined" style="color: #bc3e9f; font-size: 2.5rem;">live_tv</span>
            </div>
          </div>
        </article>

        <article class="card" style="background: linear-gradient(135deg, #201a35 0%, #171124 100%); border: none;">
          <div class="card__content" style="padding: 1.5rem; position: relative; min-height: 180px;">
            <h3 style="color: #ffffff; font-size: 1.25rem; margin-bottom: 0.75rem;">Download your series to watch offline</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.4; margin: 0;">Save your favourites easily and always have something to watch.</p>
            <div style="position: absolute; bottom: 1.5rem; right: 1.5rem;">
              <span class="material-symbols-outlined" style="color: #e50914; font-size: 2.5rem;">download_for_offline</span>
            </div>
          </div>
        </article>

        <article class="card" style="background: linear-gradient(135deg, #201a35 0%, #171124 100%); border: none;">
          <div class="card__content" style="padding: 1.5rem; position: relative; min-height: 180px;">
            <h3 style="color: #ffffff; font-size: 1.25rem; margin-bottom: 0.75rem;">Watch everywhere</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.4; margin: 0;">Stream unlimited films and series on your phone, tablet, laptop and TV.</p>
            <div style="position: absolute; bottom: 1.5rem; right: 1.5rem;">
              <span class="material-symbols-outlined" style="color: #bc3e9f; font-size: 2.5rem;">devices</span>
            </div>
          </div>
        </article>

        <article class="card" style="background: linear-gradient(135deg, #201a35 0%, #171124 100%); border: none;">
          <div class="card__content" style="padding: 1.5rem; position: relative; min-height: 180px;">
            <h3 style="color: #ffffff; font-size: 1.25rem; margin-bottom: 0.75rem;">Create profiles for children</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.4; margin: 0;">Send children on adventures with their favourite characters in a space made just for them.</p>
            <div style="position: absolute; bottom: 1.5rem; right: 1.5rem;">
              <span class="material-symbols-outlined" style="color: #e50914; font-size: 2.5rem;">family_restroom</span>
            </div>
          </div>
        </article>

      </div>
    </div>

    <!-- FAQ Accordion -->
    <div style="margin-top: 4rem; max-width: 1000px; margin-inline: auto;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: 1.5rem;">Frequently Asked Questions</h2>
      
      <div class="accordion accordion-flush" data-mode="single">
        
        <div class="accordion-item" style="background: #2d2d2d; margin-bottom: 0.5rem; border: none;">
          <h3 style="margin: 0;">
            <button class="accordion-trigger" aria-expanded="false" aria-controls="faq1" id="tf1" style="color: white; font-size: 1.2rem; padding: 1.5rem;">
              What is Netflix?
              <span class="material-symbols-outlined accordion-icon" style="font-size: 2rem;">add</span>
            </button>
          </h3>
          <div class="accordion-panel" id="faq1" role="region" aria-labelledby="tf1">
            <div class="accordion-body">
              <div class="accordion-inner" style="padding: 1.5rem; font-size: 1.1rem; line-height: 1.5; color: white;">Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more.</div>
            </div>
          </div>
        </div>

        <div class="accordion-item" style="background: #2d2d2d; margin-bottom: 0.5rem; border: none;">
          <h3 style="margin: 0;">
            <button class="accordion-trigger" aria-expanded="false" aria-controls="faq2" id="tf2" style="color: white; font-size: 1.2rem; padding: 1.5rem;">
              How much does Netflix cost?
              <span class="material-symbols-outlined accordion-icon" style="font-size: 2rem;">add</span>
            </button>
          </h3>
          <div class="accordion-panel" id="faq2" role="region" aria-labelledby="tf2">
            <div class="accordion-body">
              <div class="accordion-inner" style="padding: 1.5rem; font-size: 1.1rem; line-height: 1.5; color: white;">Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £4.99 to £17.99 a month.</div>
            </div>
          </div>
        </div>

        <div class="accordion-item" style="background: #2d2d2d; margin-bottom: 0.5rem; border: none;">
          <h3 style="margin: 0;">
            <button class="accordion-trigger" aria-expanded="false" aria-controls="faq3" id="tf3" style="color: white; font-size: 1.2rem; padding: 1.5rem;">
              Where can I watch?
              <span class="material-symbols-outlined accordion-icon" style="font-size: 2rem;">add</span>
            </button>
          </h3>
          <div class="accordion-panel" id="faq3" role="region" aria-labelledby="tf3">
            <div class="accordion-body">
              <div class="accordion-inner" style="padding: 1.5rem; font-size: 1.1rem; line-height: 1.5; color: white;">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.</div>
            </div>
          </div>
        </div>

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
