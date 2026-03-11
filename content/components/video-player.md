---
title: "Video Player"
description: "A highly customizable HTML5 video wrapper providing flexible overlay and external UI controls, decoupled from browser-specific shadow DOMs."
category: "Media"
menu:
  main:
    parent: "components-simple"
---

The Aurora Video Player abstracts away native browser controls, offering a unified, theme-compliant aesthetic. It utilizes the standard `<video>` tag under the hood, enabling all expected functionalities like `poster`, `loop`, `muted`, and `autoplay` configurations.

The primary capability of the Video Player is its absolute layout freedom. By providing `data-controls-position="overlay"` or `"external"`, you dictate whether the controls float transparently *above* the video pane, or stack politely underneath it.

---

## Configuration Options

**Layout Configurations:**
- `data-controls-position="overlay | external"`
- `data-controls-align="center | top | bottom | left | right"`
- `data-controls-orientation="horizontal | vertical"`

**Media Configurations:**
- `data-start-time="15"` (Skips exactly 15 seconds into the video on load)
- Standard HTML `<video>` attributes are fully supported gracefully:
  - `poster="/images/thumbnail.jpg"` (Shows an image before playing)
  - `loop` (Repeats automatically)
  - `autoplay` & `muted`

---

## 1. Floating Center Controls & Posters
By setting `data-controls-position="overlay"` and `data-controls-align="center"`, the player assumes a smart auto-hiding state. 

- This example also features a `poster="..."` image, and utilizes `data-start-time="30"` on the `<video>` tag to skip the intro instantly!

- **Tapping the Video** pauses playback and cleanly fades the controls in.
- **Tapping Play** resumes the video and smoothly fades the controls out, providing an unobstructed viewport.

{{< demo >}}
<div style="max-width: 600px; margin: 0 auto;">
    <div class="video-player" data-controls-position="overlay" data-controls-align="center">
        <!-- Native attributes still work, alongside our custom JS utilities! -->
        <video poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" data-start-time="15" preload="metadata">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        </video>

        <div class="video-controls" style="flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; width: 100%; align-items: center; gap: 0.5rem; order: 1;">
                 <span class="video-controls__time js-time-current">00:00</span>
                 <input type="range" class="video-controls__slider js-progress-bar" min="0" max="100" value="0" aria-label="Playback timeline">
                 <span class="video-controls__time js-time-total">00:00</span>
            </div>
            
            <div style="display: flex; gap: 0.25rem; align-items: center; order: 2; flex-grow: 1;">
                <button class="video-controls__btn" data-action="restart" aria-label="Restart">
                    <span class="material-symbols-outlined">first_page</span>
                </button>
                <button class="video-controls__btn" data-action="rewind" aria-label="Rewind 10s">
                    <span class="material-symbols-outlined">fast_rewind</span>
                </button>
                <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" aria-label="Play/Pause">
                    <span class="material-symbols-outlined">play_arrow</span>
                </button>
                <button class="video-controls__btn" data-action="forward" aria-label="Forward 10s">
                    <span class="material-symbols-outlined">fast_forward</span>
                </button>
            </div>
            
            <div style="display: flex; gap: 0.25rem; align-items: center; order: 3; position: relative;">
                <button class="video-controls__btn js-mute-btn" aria-label="Mute">
                    <span class="material-symbols-outlined">volume_up</span>
                </button>
                <button class="video-controls__btn js-settings-btn" aria-label="Settings">
                    <span class="material-symbols-outlined">settings</span>
                </button>
                
                <!-- Settings Popover -->
                <div class="video-settings-menu js-settings-menu">
                    <button data-action="speed">
                        <span>Speed</span>
                        <span class="js-val" style="opacity:0.7">1x</span>
                    </button>
                    <button data-action="pip">
                        <span>Picture-in-Picture</span>
                        <span class="material-symbols-outlined">picture_in_picture_alt</span>
                    </button>
                    <button data-action="fullscreen">
                        <span>Fullscreen</span>
                        <span class="material-symbols-outlined">fullscreen</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /demo >}}

---

## 2. External Bottom Controls (Podcast Style)
Often you don't want controls to hide. Setting `data-controls-position="external"` extracts the controls and cleanly stacks them directly beneath the media without obscuring the content. 

This model does *not* utilize smart auto-hiding logic.

{{< demo >}}
<div style="max-width: 600px; margin: 0 auto;">
    <div class="video-player" data-controls-position="external" data-controls-align="bottom">
        <!-- External Bottom Layout -->
        <video poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg" loop preload="metadata">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
        </video>

        <div class="video-controls" style="flex-direction: column; background: #111; gap: 0.5rem; padding: 1rem;">
            <!-- Timeline -->
            <div style="display: flex; width: 100%; align-items: center; gap: 0.5rem;">
                 <span class="video-controls__time js-time-current">00:00</span>
                 <input type="range" class="video-controls__slider js-progress-bar" min="0" max="100" value="0" aria-label="Playback timeline">
                 <span class="video-controls__time js-time-total">00:00</span>
            </div>
            
            <!-- Controls row -->
            <div style="display: flex; width: 100%; justify-content: center; align-items: center; position: relative;">
                <button class="video-controls__btn" data-action="rewind" aria-label="Rewind 10s">
                    <span class="material-symbols-outlined">fast_rewind</span>
                </button>
                <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" aria-label="Play/Pause">
                    <span class="material-symbols-outlined">play_arrow</span>
                </button>
                <button class="video-controls__btn" data-action="forward" aria-label="Forward 10s">
                    <span class="material-symbols-outlined">fast_forward</span>
                </button>
                
                <div style="position: absolute; right: 0; display:flex;">
                     <button class="video-controls__btn js-settings-btn" aria-label="Settings">
                        <span class="material-symbols-outlined">settings</span>
                    </button>
                    <!-- Settings Popover -->
                    <div class="video-settings-menu js-settings-menu">
                        <button data-action="fullscreen">
                            <span>Fullscreen</span>
                            <span class="material-symbols-outlined">fullscreen</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /demo >}}

---

## 3. Sidebar Alignment
You can even switch the orientation to `vertical` and snap the controls to floating sidebars natively! This example also features a **freely positioned Settings Menu** placed independently from the main control bar.

{{< demo >}}
<div style="width: 100%;">
    <div class="video-player" data-controls-position="overlay" data-controls-align="right" data-controls-orientation="vertical">
        <video poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg" preload="metadata">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
        </video>

        <!-- Detached Settings Menu (Top Left) -->
        <div style="position: absolute; top: 1rem; left: 1rem; z-index: 20;">
            <button class="video-controls__btn js-settings-btn" aria-label="Settings" style="background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); border-radius: 50%;">
                <span class="material-symbols-outlined">settings</span>
            </button>
            <div class="video-settings-menu js-settings-menu" style="left: 0; right: auto; bottom: auto; top: 100%; margin-top: 0.5rem;">
                <button data-action="speed">
                    <span>Speed</span>
                    <span class="js-val" style="opacity:0.7">1x</span>
                </button>
                <button data-action="pip">
                    <span>Picture-in-Picture</span>
                    <span class="material-symbols-outlined">picture_in_picture_alt</span>
                </button>
                <button data-action="fullscreen">
                    <span>Fullscreen</span>
                    <span class="material-symbols-outlined">fullscreen</span>
                </button>
            </div>
        </div>

        <div class="video-controls">
            <button class="video-controls__btn" data-action="restart" aria-label="Restart">
                <span class="material-symbols-outlined">first_page</span>
            </button>
            <button class="video-controls__btn" data-action="rewind" aria-label="Rewind 10s">
                <span class="material-symbols-outlined">fast_rewind</span>
            </button>
            <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" aria-label="Play/Pause">
                <span class="material-symbols-outlined">play_arrow</span>
            </button>
             <button class="video-controls__btn" data-action="forward" aria-label="Forward 10s">
                <span class="material-symbols-outlined">fast_forward</span>
            </button>
            <button class="video-controls__btn" data-action="end" aria-label="End">
                <span class="material-symbols-outlined">last_page</span>
            </button>
        </div>
    </div>
</div>
{{< /demo >}}

---

## 4. Audio Player & Advanced Metrics
Since the core engine simply binds to the `HTMLMediaElement` interface, you can pass an standard `<audio>` tag into the `.video-player` container. 

This demo showcases the new scrubbable timeline `<input type="range" class="js-progress-bar">`, timecode readouts (`.js-time-current`, `.js-time-total`), and volume controls!

{{< demo >}}
<div style="max-width: 600px; margin: 0 auto;">
    <div class="video-player" data-controls-position="external" style="background: var(--ds-sys-color-surface-container); padding: 1rem; border: 1px solid var(--ds-sys-color-border);">
        <audio preload="metadata" crossorigin="anonymous">
            <source src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3" type="audio/mpeg">
        </audio>

        <canvas class="audio-canvas js-audio-canvas"></canvas>

        <div class="video-controls" style="background: transparent; padding: 0; backdrop-filter: none; gap: 1rem;">
            
            <!-- Play/Pause -->
            <button class="video-controls__btn video-controls__btn--primary" data-action="play-pause" style="color: var(--ds-sys-color-primary); background: var(--ds-sys-color-surface); box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <span class="material-symbols-outlined">play_arrow</span>
            </button>
            
            <!-- Timeline Scrubbing -->
            <div style="display:flex; flex-direction: column; flex-grow: 1; gap: 0.25rem;">
                <div style="display:flex; justify-content: space-between;">
                   <span class="video-controls__time js-time-current" style="color: var(--ds-sys-color-on-surface); font-weight: bold;">00:00</span>
                   <span class="video-controls__time js-time-total" style="color: var(--ds-sys-color-on-surface); font-weight: bold;">00:00</span>
                </div>
                <input type="range" class="video-controls__slider js-progress-bar" min="0" max="100" value="0" aria-label="Playback timeline">
            </div>

            <!-- Volume Control -->
            <div style="display:flex; align-items: center; gap: 0.5rem; width: 120px;">
                <button class="video-controls__btn js-mute-btn" aria-label="Mute" style="color: var(--ds-sys-color-on-surface); width: 2rem; height: 2rem;">
                    <span class="material-symbols-outlined" style="font-size: 1.25rem;">volume_up</span>
                </button>
                <input type="range" class="video-controls__slider js-volume-slider" min="0" max="100" value="100" aria-label="Volume" style="background: var(--ds-sys-color-surface-variant); accent-color: var(--ds-sys-color-on-surface);">
            </div>
            
        </div>
    </div>
</div>
{{< /demo >}}
