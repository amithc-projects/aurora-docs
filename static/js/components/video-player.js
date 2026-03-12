/**
 * Aurora Video Player Controller
 * Maps standard HTML5 Media API capabilities to localized Custom Controls
 * with smart layout-aware fading behaviors.
 */

export class AuroraVideoPlayer {
    constructor(element) {
        this.container = element;
        // Support both video and audio tags
        this.media = this.container.querySelector('video, audio');
        this.controls = this.container.querySelector('.video-controls');

        if (!this.media || !this.controls) return;

        // Ensure native controls are disabled since we are supplying custom ones
        this.media.controls = false;

        // Map Buttons
        this.btnRestart = this.controls.querySelector('[data-action="restart"]');
        this.btnRewind = this.controls.querySelector('[data-action="rewind"]');
        this.btnPlay = this.controls.querySelector('[data-action="play-pause"]');
        this.btnForward = this.controls.querySelector('[data-action="forward"]');
        this.btnEnd = this.controls.querySelector('[data-action="end"]');

        // New Controls
        this.progressBar = this.controls.querySelector('.js-progress-bar');
        this.timeCurrent = this.controls.querySelector('.js-time-current');
        this.timeTotal = this.controls.querySelector('.js-time-total');
        this.volumeSlider = this.controls.querySelector('.js-volume-slider');
        this.btnMute = this.controls.querySelector('.js-mute-btn');

        // Advanced Settings
        this.btnSettings = this.container.querySelector('.js-settings-btn');
        this.settingsMenu = this.container.querySelector('.js-settings-menu');
        this.audioCanvas = this.container.querySelector('.js-audio-canvas');
        this.audioContext = null;

        this.isPlaying = false;

        // Is this an overlay layout (auto-hide behavior) or external (always visible)
        this.isOverlay = this.container.getAttribute('data-controls-position') === 'overlay';

        // Initial setup for overlay layouts
        if (this.isOverlay) {
            this.container.classList.add('is-controls-visible'); // Start visible to prompt user
        }

        // Apply custom start time if specified
        const startTime = this.media.getAttribute('data-start-time');
        if (startTime) {
            this.media.addEventListener('loadedmetadata', () => {
                this.media.currentTime = parseFloat(startTime);
            }, { once: true });
        }

        // Initialize display values if metadata is already loaded (can happen with cached media)
        if (this.media.readyState >= 1) {
            this.updateTotalTime();
            this.updateVolumeUI();
        } else {
            this.media.addEventListener('loadedmetadata', () => {
                this.updateTotalTime();
                this.updateVolumeUI();
            });
        }

        this.bindEvents();
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return "00:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }

    updateTotalTime() {
        if (this.timeTotal) {
            this.timeTotal.textContent = this.formatTime(this.media.duration);
        }
        if (this.progressBar) {
            this.progressBar.max = Math.floor(this.media.duration);
        }
    }

    updateVolumeUI() {
        if (this.volumeSlider) {
            this.volumeSlider.value = this.media.volume * 100;
            this.updateSliderProgress(this.volumeSlider);
        }
    }

    updateSliderProgress(slider) {
        if (!slider) return;
        const progress = (slider.value / slider.max) * 100;
        slider.style.setProperty('--progress', `${progress}%`);
    }

    bindEvents() {
        // --- 1. Media Tapping (Video / Canvas) ---
        const handleMediaClick = () => {
            if (this.media.paused) {
                this.media.play();
                if (this.isOverlay) this.container.classList.remove('is-controls-visible');
            } else {
                this.media.pause();
                if (this.isOverlay) this.container.classList.add('is-controls-visible');
            }
        };

        // Always allow tapping the media element (video) to toggle play/pause
        this.media.addEventListener('click', handleMediaClick);

        // If an audio visualizer canvas is present, also make it tappable
        if (this.audioCanvas) {
            this.audioCanvas.addEventListener('click', handleMediaClick);
            this.audioCanvas.style.cursor = 'pointer';
        }

        // --- 2. Button Mappings ---
        if (this.btnPlay) {
            this.btnPlay.addEventListener('click', () => {
                if (this.media.paused) {
                    this.media.play();
                    // Auto-hide controls if it's an overlay playing
                    if (this.isOverlay) this.container.classList.remove('is-controls-visible');
                } else {
                    this.media.pause();
                }
            });
        }

        if (this.btnRewind) {
            this.btnRewind.addEventListener('click', () => {
                this.media.currentTime = Math.max(0, this.media.currentTime - 10);
            });
        }

        if (this.btnForward) {
            this.btnForward.addEventListener('click', () => {
                this.media.currentTime = Math.min(this.media.duration, this.media.currentTime + 10);
            });
        }

        if (this.btnRestart) {
            this.btnRestart.addEventListener('click', () => {
                this.media.currentTime = 0;
            });
        }

        if (this.btnEnd) {
            this.btnEnd.addEventListener('click', () => {
                this.media.currentTime = this.media.duration;
            });
        }

        // Dedicated Fullscreen Button (if not inside settings menu)
        this.btnFullscreen = this.controls.querySelector('[data-action="fullscreen"]');
        if (this.btnFullscreen) {
            this.btnFullscreen.addEventListener('click', () => {
                if (document.fullscreenElement) document.exitFullscreen();
                else this.container.requestFullscreen();
            });
        }

        // --- 3. Synchronize UI with Native Video State ---
        // Binding to native events ensures the UI icon updates even if 
        // playback was triggered elsewhere or via looping configurations.
        this.media.addEventListener('play', () => {
            this.isPlaying = true;
            if (this.btnPlay) {
                // Change icon to pause
                const icon = this.btnPlay.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'pause';
            }
            if (this.audioCanvas && !this.audioContext) {
                this.initVisualizer();
            }
        });

        this.media.addEventListener('pause', () => {
            this.isPlaying = false;
            // Always ensure controls are visible when paused
            if (this.isOverlay) this.container.classList.add('is-controls-visible');

            if (this.btnPlay) {
                // Change icon to play
                const icon = this.btnPlay.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'play_arrow';
            }
        });

        this.media.addEventListener('ended', () => {
            this.isPlaying = false;
            // If we're not looping natively, show controls at end
            if (this.isOverlay && !this.media.loop) {
                this.container.classList.add('is-controls-visible');
            }
        });

        // --- 4. Progress Bar & Time Tracking ---
        this.media.addEventListener('timeupdate', () => {
            if (this.timeCurrent) {
                this.timeCurrent.textContent = this.formatTime(this.media.currentTime);
            }
            // Only update slider if user isn't currently dragging it
            if (this.progressBar && !this.isScrubbing) {
                this.progressBar.value = this.media.currentTime;
                this.updateSliderProgress(this.progressBar);
            }
        });

        if (this.progressBar) {
            this.progressBar.addEventListener('mousedown', () => this.isScrubbing = true);
            this.progressBar.addEventListener('touchstart', () => this.isScrubbing = true, { passive: true });

            this.progressBar.addEventListener('input', () => {
                this.updateSliderProgress(this.progressBar);
                if (this.timeCurrent) {
                    this.timeCurrent.textContent = this.formatTime(this.progressBar.value);
                }
            });

            const finishScrubbing = () => {
                if (!this.isScrubbing) return;
                this.isScrubbing = false;
                this.media.currentTime = this.progressBar.value;
            };

            this.progressBar.addEventListener('mouseup', finishScrubbing);
            this.progressBar.addEventListener('touchend', finishScrubbing);
        }

        // --- 5. Volume Controls ---
        if (this.volumeSlider) {
            this.volumeSlider.addEventListener('input', () => {
                this.media.volume = this.volumeSlider.value / 100;
                this.media.muted = this.media.volume === 0;
                this.updateSliderProgress(this.volumeSlider);
                this.updateMuteIcon();
            });
        }

        if (this.btnMute) {
            this.btnMute.addEventListener('click', () => {
                this.media.muted = !this.media.muted;
                if (!this.media.muted && this.media.volume === 0) {
                    this.media.volume = 0.5; // restore to 50% if unmuting from 0
                    if (this.volumeSlider) {
                        this.volumeSlider.value = 50;
                        this.updateSliderProgress(this.volumeSlider);
                    }
                }
                this.updateMuteIcon();
            });
        }

        // Catch native volume changes (e.g. from system or keyboard)
        this.media.addEventListener('volumechange', () => {
            if (this.volumeSlider) {
                this.volumeSlider.value = this.media.muted ? 0 : this.media.volume * 100;
                this.updateSliderProgress(this.volumeSlider);
            }
            this.updateMuteIcon();
        });

        // --- 6. Advanced Settings Menu ---
        if (this.btnSettings && this.settingsMenu) {
            this.btnSettings.addEventListener('click', (e) => {
                e.stopPropagation();
                this.settingsMenu.classList.toggle('is-open');
            });
            document.addEventListener('click', (e) => {
                if (!this.settingsMenu.contains(e.target)) {
                    this.settingsMenu.classList.remove('is-open');
                }
            });

            // Bind Actions inside menu
            const actions = {
                'fullscreen': () => {
                    if (document.fullscreenElement) document.exitFullscreen();
                    else this.container.requestFullscreen();
                },
                'pip': async () => {
                    if (document.pictureInPictureElement) await document.exitPictureInPicture();
                    else if (this.media.tagName === 'VIDEO') await this.media.requestPictureInPicture();
                },
                'speed': () => {
                    // Loop 1x -> 1.5x -> 2x -> 0.5x -> 1x
                    let speeds = [1, 1.5, 2, 0.5];
                    let current = speeds.indexOf(this.media.playbackRate);
                    let next = speeds[(current + 1) % speeds.length];
                    this.media.playbackRate = next;
                    const lbl = this.settingsMenu.querySelector('[data-action="speed"] .js-val');
                    if (lbl) lbl.textContent = next + 'x';
                },
                'captions': () => {
                    // Toggle first text track if exists
                    if (this.media.textTracks && this.media.textTracks[0]) {
                        const track = this.media.textTracks[0];
                        track.mode = track.mode === 'showing' ? 'hidden' : 'showing';
                        const lbl = this.settingsMenu.querySelector('[data-action="captions"] .js-val');
                        if (lbl) lbl.textContent = track.mode === 'showing' ? 'On' : 'Off';
                    }
                }
            };

            this.settingsMenu.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-action]');
                if (btn && actions[btn.dataset.action]) {
                    actions[btn.dataset.action]();
                }
            });
        }
    }

    updateMuteIcon() {
        if (!this.btnMute) return;
        const icon = this.btnMute.querySelector('.material-symbols-outlined');
        if (!icon) return;

        if (this.media.muted || this.media.volume === 0) {
            icon.textContent = 'volume_off';
        } else if (this.media.volume < 0.5) {
            icon.textContent = 'volume_down';
        } else {
            icon.textContent = 'volume_up';
        }
    }

    initVisualizer() {
        if (!this.audioCanvas || !window.AudioContext) return;
        try {
            // Note: MediaSource requires CORS headers if cross-origin. 
            // In demo, we rely on properly configured demo URLs.
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = this.audioContext.createAnalyser();
            const source = this.audioContext.createMediaElementSource(this.media);
            source.connect(analyser);
            analyser.connect(this.audioContext.destination);
            analyser.fftSize = 256;

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            const ctx = this.audioCanvas.getContext('2d');

            // Use a temporary element to force the browser to resolve all CSS variables
            // (like `light-dark()` or complex OKLCH) down to a standard RGB string for the Canvas API.
            const tempEl = document.createElement('div');
            tempEl.style.color = 'var(--ds-sys-color-primary)';
            tempEl.style.display = 'none';
            document.body.appendChild(tempEl);
            const resolvedThemeColor = getComputedStyle(tempEl).color || 'rgb(0, 200, 255)';
            document.body.removeChild(tempEl);

            const draw = () => {
                if (!this.isPlaying) return requestAnimationFrame(draw);

                requestAnimationFrame(draw);
                analyser.getByteFrequencyData(dataArray);

                ctx.clearRect(0, 0, this.audioCanvas.width, this.audioCanvas.height);

                const barWidth = (this.audioCanvas.width / bufferLength) * 2.5;
                let barHeight;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    barHeight = dataArray[i] / 2;

                    // Use resolved theme color, manipulating canvas opacity natively 
                    ctx.fillStyle = resolvedThemeColor;
                    ctx.globalAlpha = Math.max(0.1, barHeight / 150);

                    ctx.fillRect(x, this.audioCanvas.height - barHeight, barWidth, barHeight);
                    x += barWidth + 1;
                }
                ctx.globalAlpha = 1.0; // Reset
            };

            // Fix canvas resolution
            this.audioCanvas.width = this.audioCanvas.offsetWidth;
            this.audioCanvas.height = this.audioCanvas.offsetHeight;

            draw();
        } catch (e) {
            console.warn('Audio Visualizer failed to init (Likely CORS):', e);
        }
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
