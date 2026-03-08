/**
 * Aurora Video Player Controller
 * Maps standard HTML5 Media API capabilities to localized Custom Controls
 * with smart layout-aware fading behaviors.
 */

export class AuroraVideoPlayer {
    constructor(element) {
        this.container = element;
        this.video = this.container.querySelector('video');
        this.controls = this.container.querySelector('.video-controls');

        if (!this.video || !this.controls) return;

        // Ensure native controls are disabled since we are supplying custom ones
        this.video.controls = false;

        // Map Buttons
        this.btnRestart = this.controls.querySelector('[data-action="restart"]');
        this.btnRewind = this.controls.querySelector('[data-action="rewind"]');
        this.btnPlay = this.controls.querySelector('[data-action="play-pause"]');
        this.btnForward = this.controls.querySelector('[data-action="forward"]');
        this.btnEnd = this.controls.querySelector('[data-action="end"]');

        this.isPlaying = false;

        // Is this an overlay layout (auto-hide behavior) or external (always visible)
        this.isOverlay = this.container.getAttribute('data-controls-position') === 'overlay';

        // Initial setup for overlay layouts
        if (this.isOverlay) {
            this.container.classList.add('is-controls-visible'); // Start visible to prompt user
        }

        // Apply custom start time if specified
        const startTime = this.video.getAttribute('data-start-time');
        if (startTime) {
            this.video.addEventListener('loadedmetadata', () => {
                this.video.currentTime = parseFloat(startTime);
            }, { once: true });
        }

        this.bindEvents();
    }

    bindEvents() {
        // --- 1. Video Tapping & Auto-Fading (Overlay Only) ---
        if (this.isOverlay) {
            this.video.addEventListener('click', () => {
                if (this.isPlaying) {
                    this.video.pause();
                    this.container.classList.add('is-controls-visible');
                } else {
                    this.video.play();
                    this.container.classList.remove('is-controls-visible');
                }
            });
        }

        // --- 2. Button Mappings ---
        if (this.btnPlay) {
            this.btnPlay.addEventListener('click', () => {
                if (this.video.paused) {
                    this.video.play();
                    // Auto-hide controls if it's an overlay playing
                    if (this.isOverlay) this.container.classList.remove('is-controls-visible');
                } else {
                    this.video.pause();
                }
            });
        }

        if (this.btnRewind) {
            this.btnRewind.addEventListener('click', () => {
                this.video.currentTime = Math.max(0, this.video.currentTime - 10);
            });
        }

        if (this.btnForward) {
            this.btnForward.addEventListener('click', () => {
                this.video.currentTime = Math.min(this.video.duration, this.video.currentTime + 10);
            });
        }

        if (this.btnRestart) {
            this.btnRestart.addEventListener('click', () => {
                this.video.currentTime = 0;
            });
        }

        if (this.btnEnd) {
            this.btnEnd.addEventListener('click', () => {
                this.video.currentTime = this.video.duration;
            });
        }

        // --- 3. Synchronize UI with Native Video State ---
        // Binding to native events ensures the UI icon updates even if 
        // playback was triggered elsewhere or via looping configurations.
        this.video.addEventListener('play', () => {
            this.isPlaying = true;
            if (this.btnPlay) {
                // Change icon to pause
                const icon = this.btnPlay.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'pause';
            }
        });

        this.video.addEventListener('pause', () => {
            this.isPlaying = false;
            // Always ensure controls are visible when paused
            if (this.isOverlay) this.container.classList.add('is-controls-visible');

            if (this.btnPlay) {
                // Change icon to play
                const icon = this.btnPlay.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'play_arrow';
            }
        });

        this.video.addEventListener('ended', () => {
            this.isPlaying = false;
            // If we're not looping natively, show controls at end
            if (this.isOverlay && !this.video.loop) {
                this.container.classList.add('is-controls-visible');
            }
        });
    }
}

// Auto-initialize
export function initVideoPlayers() {
    const players = document.querySelectorAll('.video-player:not(.is-initialized)');
    players.forEach(player => {
        new AuroraVideoPlayer(player);
        player.classList.add('is-initialized');
    });
}
