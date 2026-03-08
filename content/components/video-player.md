---
title: "Video Player"
description: "A highly customizable HTML5 video wrapper providing flexible overlay and external UI controls, decoupled from browser-specific shadow DOMs."
category: "Media"
menu:
  main:
    parent: "components"
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

        <div class="video-controls" style="justify-content: center; background: #111;">
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
    </div>
</div>
{{< /demo >}}

---

## 3. Sidebar Alignment
You can even switch the orientation to `vertical` and snap the controls to floating sidebars natively!

{{< demo >}}
<div style="width: 100%;">
    <div class="video-player" data-controls-position="overlay" data-controls-align="right" data-controls-orientation="vertical">
        <video poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg" preload="metadata">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
        </video>

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
