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

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Gritty Crime Thrillers</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Gritty Crime Thrillers">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/echoes-of-guilt/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/echoes_of_guilt.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-syndicate/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_syndicate.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/neon-blood/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/neon_blood.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/cold-case-files/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/cold_case_files.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-silhouette/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_silhouette.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/corrupt-streets/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/corrupt_streets.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/midnight-heist/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/midnight_heist.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-informant/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_informant.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Adult Animation</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Adult Animation">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/interdimensional-cable/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/interdimensional_cable.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/galactic-scum/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/galactic_scum.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/neon-knights/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/neon_knights.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/pixelated-realities/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/pixelated_realities.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-existential-toaster/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_existential_toaster.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/mutant-high/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/mutant_high.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-grumpy-wizard/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_grumpy_wizard.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/cyber-city-pd/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/cyber_city_pd.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Casual Gaming</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Casual Gaming">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/rocket/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/tetris-time-warp/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/pictionary-game-night/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/cozy-camp/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/link-twin/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/centipede-recharged/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/word-puzzle-pro/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/underwater-melon/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Kids & Family Favorites</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Kids & Family Favorites">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-magic-treehouse/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_magic_treehouse.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/dinosaur-island/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/dinosaur_island.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-clockwork-boy/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_clockwork_boy.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-secret-garden/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_secret_garden.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-great-gem-heist/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_great_gem_heist.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/starlight-explorers/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/starlight_explorers.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/captain-whiskers/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/captain_whiskers.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/monster-camp/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/monster_camp.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">30-minute comedies</h2>
      <div class="carousel carousel--multi" role="region" aria-label="30-minute comedies">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-coffee-shop-crew/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_coffee_shop_crew.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/awkward-encounters/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/awkward_encounters.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/suburban-life/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/suburban_life.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/workplace-shenanigans/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/workplace_shenanigans.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-office-setup/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_office_setup.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/family-dinners/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/family_dinners.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/dating-in-the-city/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/dating_in_the_city.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/roommate-drama/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/roommate_drama.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Classic Cinema</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Classic Cinema">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-grand-hotel/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_grand_hotel.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/city-lights-romance/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/city_lights_romance.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-maltese-falcon/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_maltese_falcon.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/metropolis-awakens/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/metropolis_awakens.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/midnight-express/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/midnight_express.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-phantom-of-the-opera/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_phantom_of_the_opera.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/shadows-of-the-past/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/shadows_of_the_past.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/casablanca-nights/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/casablanca_nights.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Live Sports & Events</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Live Sports & Events">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/formula-1-monaco-grand-prix/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/formula_1_monaco_grand_prix.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/world-cup-finals/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/world_cup_finals.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/heavyweight-championship-fight/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/heavyweight_championship_fight.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/super-bowl-lviii/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/super_bowl_lviii.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/nba-finals-game-7/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/nba_finals_game_7.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/olympic-100m-sprint-final/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/olympic_100m_sprint_final.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-masters-final-round/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_masters_final_round.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/wimbledon-mens-final/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/wimbledon_mens_final.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="position: absolute; top: 0; left: 0; background: #e50914; color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-bottom-right-radius: 4px; text-transform: uppercase;">Live</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">British Comedy classic</h2>
      <div class="carousel carousel--multi" role="region" aria-label="British Comedy classic">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/blackadders-legacy/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/keep-up-appearances/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/fawlty-towers-return/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-vicars-dilemma/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/yes-prime-minister-today/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-it-crowd-reboot/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/absolutely-fabulous-again/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/monty-pythons-revival/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('https://placehold.co/1024x576/141414/e50914?text=Generating+Visuals...') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Sci-Fi & Fantasy Epics</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Sci-Fi & Fantasy Epics">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/neon-horizon/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/neon_horizon.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-last-centurion/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_last_centurion.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/starbound/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/starbound.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/cybernetic-dawn/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/cybernetic_dawn.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/chronos-paradox/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/chronos_paradox.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-crystal-throne/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_crystal_throne.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/echoes-of-eternity/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/echoes_of_eternity.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/realm-of-shadows/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/realm_of_shadows.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Critically acclaimed emotional series</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Critically acclaimed emotional series">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/ties-that-bind/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/ties_that_bind.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/silent-screams/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/silent_screams.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/echoes-of-the-past/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/echoes_of_the_past.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-long-road-home/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_long_road_home.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-art-of-letting-go/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_art_of_letting_go.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/fractured-souls/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/fractured_souls.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-weight-of-water/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_weight_of_water.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-healing-journey/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_healing_journey.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Awe-Inspiring Nature Documentaries</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Awe-Inspiring Nature Documentaries">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/deep-sea-mysteries/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/deep_sea_mysteries.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/volcanoes-of-ring-of-fire/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/volcanoes_of_ring_of_fire.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-great-migration/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_great_migration.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/life-in-the-canopy/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/life_in_the_canopy.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/microscopic-worlds/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/microscopic_worlds.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-savage-savanna/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_savage_savanna.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/planet-ocean/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/planet_ocean.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/frozen-kingdoms/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/frozen_kingdoms.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Binge-worthy Dramas</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Binge-worthy Dramas">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/shattered-glass/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/shattered_glass.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-crucible-of-power/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_crucible_of_power.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/fading-echoes/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/fading_echoes.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/whispers-in-the-dark/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/whispers_in_the_dark.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-sterling-estate/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_sterling_estate.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/torn-allegiances/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/torn_allegiances.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-final-verdict/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_final_verdict.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/city-of-lies/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/city_of_lies.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Feel-Good Comedies</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Feel-Good Comedies">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/dog-days-of-summer/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/dog_days_of_summer.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/office-escape/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/office_escape.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/sunny-side-up/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/sunny_side_up.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/campus-kings/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/campus_kings.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-bakers-secret/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_bakers_secret.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/love-in-transit/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/love_in_transit.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/vacation-vibes/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/vacation_vibes.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/wedding-crash-course/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/wedding_crash_course.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #e5e5e5; margin-bottom: 1rem;">Horror and Scary Times</h2>
      <div class="carousel carousel--multi" role="region" aria-label="Horror and Scary Times">

        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-haunting-of-blackwood/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_haunting_of_blackwood.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-exorcism-of-emily/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_exorcism_of_emily.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/dont-go-in-the-woods/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/dont_go_in_the_woods.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/blood-moon-rising/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/blood_moon_rising.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-asylum/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_asylum.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/midnight-slaughter/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/midnight_slaughter.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/whispers-in-the-walls/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/whispers_in_the_walls.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
        <div style="padding: 20px 0;">
          <a href="/aurora-docs/archetypes/streaming/titles/the-mirrors-curse/" class="card" style="display: block; position: relative; height: 100%;">
            <div class="card__media" style="background: url('/aurora-docs/archetypes/streaming/the_mirrors_curse.jpg') center/cover; height: 140px; border-radius: 4px; transition: transform 0.2s, box-shadow 0.2s;">
              
            </div>
          </a>
        </div>
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
