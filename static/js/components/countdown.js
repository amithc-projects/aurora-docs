/**
 * countdown.js
 *
 * Auto-initialises every <div data-countdown> found in the document.
 * Multiple independent instances are fully supported on the same page.
 */

export function initCountdowns() {
    'use strict';

    // ─── Parse data attributes with defaults ────────────────────────────────
    function parseConfig(el) {
        const d = el.dataset;
        const bool = (val, def) => val === undefined ? def : val !== 'false';
        return {
            durationSeconds: parseInt(d.duration, 10) || 30,
            shape: d.shape || 'rectangle',
            customPathData: d.customPath || '',
            baseColor: d.borderColor || '#38bdf8',
            warningColor: d.warningColor || '#ef4444',
            bgStartColor: d.bgStartColor || '#38bdf8',
            bgEndColor: d.bgEndColor || '#1d4ed8',
            bgColor: d.bgColor || 'transparent',
            timeFormat: d.timeFormat || 'MM:SS',
            completeText: d.completeText || '',
            borderStyle: d.borderStyle || 'empty',
            backgroundStyle: d.backgroundStyle || 'none',
            direction: d.direction || 'clockwise',
            warningStyle: d.warningStyle || 'none',
            warningThresholdSeconds: parseInt(d.warningThreshold, 10) || 5,
            enableWarningBeep: bool(d.warningBeep, true),
            intervalSeconds: parseFloat(d.interval) || 5,
            enableIntervalTicks: bool(d.intervalTicks, true),
            enableIntervalBeeps: bool(d.intervalBeeps, true),
            tickColor: d.tickColor || '#ffffff',
            markerColor: d.markerColor || 'rgba(255,255,255,0.5)',
            markerPosition: d.markerPosition || 'both',
            width: d.width || null,
            height: d.height || null,
        };
    }

    // ─── Build the component DOM inside host element ─────────────────────────
    function buildDOM(host, uid) {
        // The SVG defs that use url(#id) refs need unique IDs per instance
        host.innerHTML = `
            <div class="cd-frame" data-cd-frame>
                <svg class="cd-svg" data-cd-svg>
                    <defs>
                        <clipPath id="cd-shape-clip-${uid}">
                            <path data-cd-clip-path />
                        </clipPath>
                        <clipPath id="cd-progress-clip-${uid}">
                            <rect data-cd-reveal-rect x="0" y="0" width="100%" height="100%" />
                        </clipPath>
                        <linearGradient id="cd-grad-${uid}" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="var(--cd-grad-start)" />
                            <stop offset="100%" stop-color="var(--cd-grad-end)" />
                        </linearGradient>
                    </defs>

                    <path data-cd-track class="cd-track" />

                    <g clip-path="url(#cd-shape-clip-${uid})">
                        <rect data-cd-liquid-fill
                              x="0" y="0" width="100%" height="100%"
                              clip-path="url(#cd-progress-clip-${uid})"
                              class="cd-bg-fill"
                              style="fill:url(#cd-grad-${uid}); display:none;" />
                    </g>

                    <path data-cd-progress class="cd-progress" />
                    <line data-cd-marker  class="cd-marker"   />
                    <g    data-cd-ticks></g>
                    <circle data-cd-ripple class="cd-ripple" r="12" />
                </svg>

                <div data-cd-conic-wrapper style="
                    position:absolute; inset:0;
                    overflow:hidden;
                    display:none;
                    pointer-events:none;
                ">
                    <div data-cd-conic-mask style="
                        position:absolute; inset:0;
                        transform-origin:center;
                    ">
                        <div data-cd-conic-div style="
                            width:100%; height:100%;
                            transform-origin:center;
                        "></div>
                    </div>
                </div>

                <div data-cd-display class="cd-display"></div>
            </div>

            <div class="cd-controls">
                <button data-cd-start class="cd-btn">START</button>
                <button data-cd-pause class="cd-btn cd-btn-secondary" disabled>PAUSE</button>
                <button data-cd-reset class="cd-btn">RESET</button>
            </div>
        `;

        const bgFill = host.querySelector('[data-cd-liquid-fill]');
        bgFill.style.fill = `url(#cd-grad-${uid})`;
    }

    // ─── Main instance factory ───────────────────────────────────────────────
    function createInstance(host, uid) {
        const cfg = parseConfig(host);

        buildDOM(host, uid);
        host.classList.add('cd-host');

        // Scoped element refs — all queried within this host only
        const frame = host.querySelector('[data-cd-frame]');
        const svg = host.querySelector('[data-cd-svg]');
        const clipPathEl = host.querySelector('[data-cd-clip-path]');
        const revealRect = host.querySelector('[data-cd-reveal-rect]');
        const gradient = host.querySelector('#cd-grad-' + uid);
        const trackPath = host.querySelector('[data-cd-track]');
        const progressPath = host.querySelector('[data-cd-progress]');
        const liquidFill = host.querySelector('[data-cd-liquid-fill]');
        const conicWrapper = host.querySelector('[data-cd-conic-wrapper]');
        const conicMask = host.querySelector('[data-cd-conic-mask]');
        const conicDiv = host.querySelector('[data-cd-conic-div]');
        const startMarker = host.querySelector('[data-cd-marker]');
        const ticksContainer = host.querySelector('[data-cd-ticks]');
        const ripple = host.querySelector('[data-cd-ripple]');
        const display = host.querySelector('[data-cd-display]');
        const startBtn = host.querySelector('[data-cd-start]');
        const pauseBtn = host.querySelector('[data-cd-pause]');
        const resetBtn = host.querySelector('[data-cd-reset]');

        function setVar(name, value) {
            host.style.setProperty(name, value);
        }

        // Seed initial CSS vars from config
        setVar('--cd-base-accent', cfg.baseColor);
        setVar('--cd-accent', cfg.baseColor);
        setVar('--cd-tick-color', cfg.tickColor);
        setVar('--cd-marker-color', cfg.markerColor);
        setVar('--cd-grad-start', cfg.bgStartColor);
        setVar('--cd-grad-end', cfg.bgEndColor);
        setVar('--cd-card-bg', cfg.bgColor);
        setVar('--cd-fill-opacity', '0');

        if (cfg.width) frame.style.width = cfg.width + (isNaN(cfg.width) ? '' : 'px');
        if (cfg.height) frame.style.height = cfg.height + (isNaN(cfg.height) ? '' : 'px');

        if (cfg.width || cfg.height || cfg.shape !== 'rectangle') {
            const currentH = cfg.height ? parseInt(cfg.height) : (cfg.shape !== 'rectangle' ? 260 : 140);
            const scale = Math.max(0.4, currentH / 140);
            setVar('--cd-font-size', (cfg.shape !== 'rectangle' ? 3.2 * (currentH / 260) : 4.5 * scale) + 'rem');
        }

        let timeLeft, totalTime;
        let isRunning = false, isPaused = false, lastTick;
        let lastSecondBeeped = -1, lastIntervalBeeped = -1;
        let audioCtx = null;

        function playBeep(frequency) {
            try {
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
                gain.gain.setValueAtTime(0, audioCtx.currentTime);
                gain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.1);
            } catch (e) { }
        }

        function triggerRipple() {
            const pLen = trackPath.getTotalLength();
            const point = trackPath.getPointAtLength(pLen * (1 - timeLeft / totalTime));
            ripple.setAttribute('cx', point.x);
            ripple.setAttribute('cy', point.y);
            ripple.classList.remove('cd-ripple-animate');
            void ripple.offsetWidth;
            ripple.classList.add('cd-ripple-animate');
        }

        function generatePathData(w, h, r, shape) {
            const cx = w / 2, cy = h / 2;
            switch (shape) {
                case 'circle': {
                    const cr = Math.min(w, h) / 2 - 4;
                    return `M ${cx} ${cy - cr} A ${cr} ${cr} 0 1 1 ${cx} ${cy + cr} A ${cr} ${cr} 0 1 1 ${cx} ${cy - cr} Z`;
                }
                case 'triangle': {
                    const tr = Math.min(w, h) / 2 - 8;
                    return `M ${cx} ${cy - tr + 15} L ${cx + tr * 0.866} ${cy + tr * 0.5 + 15} L ${cx - tr * 0.866} ${cy + tr * 0.5 + 15} Z`;
                }
                case 'star': {
                    const rOut = Math.min(w, h) / 2 - 10;
                    const rIn = rOut * 0.5;
                    const offset = h * 0.05;
                    let pathData = '';
                    for (let i = 0; i < 10; i++) {
                        const angle = i * Math.PI / 5 - Math.PI / 2;
                        const rad = (i % 2 === 0) ? rOut : rIn;
                        pathData += (i === 0 ? 'M ' : 'L ') + (cx + rad * Math.cos(angle)) + ' ' + (cy + rad * Math.sin(angle) + offset) + ' ';
                    }
                    return pathData + 'Z';
                }
                case 'heart': {
                    const sz = Math.min(w, h) - 40, s = sz / 100;
                    const ox = cx - 50 * s, oy = cy - 50 * s;
                    return `M ${ox + 50 * s} ${oy + 20 * s} C ${ox + 60 * s} ${oy} ${ox + 100 * s} ${oy} ${ox + 100 * s} ${oy + 40 * s} `
                        + `C ${ox + 100 * s} ${oy + 75 * s} ${ox + 50 * s} ${oy + 100 * s} ${ox + 50 * s} ${oy + 100 * s} `
                        + `C ${ox + 50 * s} ${oy + 100 * s} ${ox} ${oy + 75 * s} ${ox} ${oy + 40 * s} `
                        + `C ${ox} ${oy} ${ox + 40 * s} ${oy} ${ox + 50 * s} ${oy + 20 * s} Z`;
                }
                case 'custom':
                    return cfg.customPathData || `M ${w / 2} 0 L ${w} ${h} L 0 ${h} Z`;
                default: {
                    const b = 4;
                    return `M ${w / 2} ${b} L ${w - r} ${b} A ${r - b} ${r - b} 0 0 1 ${w - b} ${r} `
                        + `L ${w - b} ${h - r} A ${r - b} ${r - b} 0 0 1 ${w - r} ${h - b} `
                        + `L ${r} ${h - b} A ${r - b} ${r - b} 0 0 1 ${b} ${h - r} `
                        + `L ${b} ${r} A ${r - b} ${r - b} 0 0 1 ${r} ${b} L ${w / 2} ${b} Z`;
                }
            }
        }

        function updatePath() {
            const shape = cfg.shape;
            const bgStyle = cfg.backgroundStyle;

            frame.className = 'cd-frame'
                + (shape !== 'rectangle' ? ' cd-alt' : '')
                + (shape === 'circle' ? ' cd-circle' : '')
                + (shape === 'triangle' ? ' cd-triangle' : '')
                + (shape === 'heart' ? ' cd-heart' : '')
                + (shape === 'star' ? ' cd-star' : '');

            const w = frame.offsetWidth, h = frame.offsetHeight;
            svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

            const d = generatePathData(w, h, 24, shape);
            trackPath.setAttribute('d', d);
            progressPath.setAttribute('d', d);
            clipPathEl.setAttribute('d', d);

            const top = trackPath.getPointAtLength(0);
            if (cfg.markerPosition === 'none') {
                startMarker.style.display = 'none';
            } else {
                startMarker.style.display = 'inline';
                let y1 = top.y, y2 = top.y;
                if (cfg.markerPosition === 'inside') { y2 = top.y + 12; }
                else if (cfg.markerPosition === 'outside') { y1 = top.y - 12; }
                else { y1 = top.y - 12; y2 = top.y + 12; }
                startMarker.setAttribute('x1', top.x); startMarker.setAttribute('y1', y1);
                startMarker.setAttribute('x2', top.x); startMarker.setAttribute('y2', y2);
            }

            svg.style.transform = cfg.direction === 'clockwise' ? 'scaleX(-1)' : 'none';

            if (bgStyle.includes('-h')) {
                gradient.setAttribute('x1', '0'); gradient.setAttribute('y1', '0');
                gradient.setAttribute('x2', String(w)); gradient.setAttribute('y2', '0');
            } else {
                gradient.setAttribute('x1', '0'); gradient.setAttribute('y1', '0');
                gradient.setAttribute('x2', '0'); gradient.setAttribute('y2', String(h));
            }

            const pLen = trackPath.getTotalLength();
            progressPath.style.strokeDasharray = pLen;

            conicWrapper.style.clipPath = `path('${d}')`;

            setVar('--cd-tick-color', cfg.tickColor);
            ticksContainer.innerHTML = '';
            if (cfg.enableIntervalTicks && cfg.intervalSeconds > 0) {
                const numIntervals = Math.floor(cfg.durationSeconds / cfg.intervalSeconds);
                for (let i = 1; i <= numIntervals; i++) {
                    const tickRatio = (i * cfg.intervalSeconds) / cfg.durationSeconds;
                    if (tickRatio > 0.01 && tickRatio < 0.99) {
                        const tickLen = pLen * tickRatio;
                        const p = trackPath.getPointAtLength(tickLen);
                        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        circle.setAttribute('cx', p.x);
                        circle.setAttribute('cy', p.y);
                        circle.setAttribute('r', '3');
                        circle.setAttribute('data-length', tickLen);
                        circle.classList.add('cd-tick');
                        ticksContainer.appendChild(circle);
                    }
                }
            }
            return pLen;
        }

        function setProgress(pLen) {
            const ratio = timeLeft / totalTime;
            const cleanRatio = Math.max(0, Math.min(1, ratio));
            const bStyle = cfg.borderStyle;
            const bgStyle = cfg.backgroundStyle;
            const warnStyle = cfg.warningStyle;
            const w = frame.offsetWidth, h = frame.offsetHeight;

            const isCritical = (timeLeft / 1000) <= cfg.warningThresholdSeconds;
            const useWarningVisuals = warnStyle !== 'none';
            const isFlashWarning = isCritical && warnStyle === 'fill-warn' && timeLeft > 0 && !isPaused;

            const bgS = (isCritical && useWarningVisuals) ? cfg.warningColor : cfg.bgStartColor;
            const bgE = (isCritical && useWarningVisuals) ? cfg.warningColor : cfg.bgEndColor;
            setVar('--cd-grad-start', bgS);
            setVar('--cd-grad-end', bgE);

            if (bgStyle !== 'none' || isFlashWarning) {
                const isConic = bgStyle.startsWith('conic');
                if (isConic && !isFlashWarning) {
                    liquidFill.style.display = 'none';
                    conicWrapper.style.display = 'block';

                    const isClockwise = cfg.direction === 'clockwise';
                    const conicFlip = !isClockwise;
                    conicMask.style.transform = conicFlip ? 'scaleX(-1)' : 'none';

                    conicDiv.style.background = `conic-gradient(from 0deg, var(--cd-grad-start), var(--cd-grad-end))`;

                    const sweepPercent = (1 - cleanRatio) * 100;
                    let mask;
                    if (bgStyle === 'conic-f') {
                        mask = `conic-gradient(from 0deg, black ${sweepPercent}%, transparent 0)`;
                    } else {
                        mask = `conic-gradient(from 0deg, transparent ${sweepPercent}%, black 0)`;
                    }
                    conicDiv.style.webkitMaskImage = mask;
                    conicDiv.style.maskImage = mask;
                } else {
                    conicWrapper.style.display = 'none';
                    liquidFill.style.display = 'block';
                    liquidFill.classList.toggle('cd-flash', isFlashWarning);
                    const revealRatio = bgStyle.startsWith('fill') ? (1 - cleanRatio) : cleanRatio;
                    if (bgStyle.endsWith('-v')) {
                        const fillH = h * revealRatio;
                        revealRect.setAttribute('y', h - fillH); revealRect.setAttribute('height', fillH);
                        revealRect.setAttribute('x', 0); revealRect.setAttribute('width', '100%');
                    } else if (bgStyle.endsWith('-h')) {
                        const fillW = w * revealRatio;
                        revealRect.setAttribute('x', 0); revealRect.setAttribute('width', fillW);
                        revealRect.setAttribute('y', 0); revealRect.setAttribute('height', '100%');
                    } else if (isFlashWarning) {
                        revealRect.setAttribute('x', 0); revealRect.setAttribute('y', 0);
                        revealRect.setAttribute('width', '100%'); revealRect.setAttribute('height', '100%');
                    }
                }
            } else {
                liquidFill.style.display = 'none';
                conicWrapper.style.display = 'none';
            }

            if (bStyle === 'none') {
                progressPath.style.display = 'none';
            } else {
                progressPath.style.display = 'block';
                progressPath.style.strokeDashoffset =
                    (bStyle === 'fill') ? (-pLen * cleanRatio) : (pLen * (1 - cleanRatio));
            }

            const targetAccent = (isCritical && useWarningVisuals && timeLeft > 0)
                ? cfg.warningColor : cfg.baseColor;
            const finalAccent = timeLeft <= 0
                ? (useWarningVisuals ? cfg.warningColor : cfg.baseColor)
                : targetAccent;
            setVar('--cd-base-accent', cfg.baseColor);
            setVar('--cd-accent', finalAccent);

            display.classList.toggle('cd-pulse', isCritical && warnStyle === 'pulse' && timeLeft > 0 && !isPaused);
            display.classList.toggle('cd-glow', isCritical && warnStyle === 'glow' && timeLeft > 0 && !isPaused);

            setVar('--cd-fill-opacity', bgStyle !== 'none' ? '0.4' : isFlashWarning ? '0.2' : '0');

            const currentTipS = pLen * cleanRatio;
            ticksContainer.querySelectorAll('.cd-tick').forEach(tick => {
                const tl = parseFloat(tick.getAttribute('data-length'));
                if (tl > currentTipS + 2) {
                    tick.style.opacity = '0.15'; tick.style.transform = 'scale(1)';
                } else {
                    tick.style.opacity = '0.9';
                    tick.style.transform = (currentTipS - tl < 30 && currentTipS - tl >= -2) ? 'scale(1.8)' : 'scale(1)';
                }
            });

            if (isPaused) return;

            let warningBeepPlayed = false;
            if (isCritical) {
                const currentSecond = Math.ceil(timeLeft / 1000);
                if (currentSecond !== lastSecondBeeped && cfg.enableWarningBeep) {
                    playBeep(880);
                    lastSecondBeeped = currentSecond;
                    warningBeepPlayed = true;
                }
            }

            if (cfg.enableIntervalBeeps && cfg.intervalSeconds > 0) {
                const step = Math.floor((totalTime - timeLeft) / (cfg.intervalSeconds * 1000));
                if (step > lastIntervalBeeped && step > 0) {
                    if (!warningBeepPlayed) playBeep(440);
                    triggerRipple();
                    lastIntervalBeeped = step;
                }
            }
        }

        function formatTime(ms) {
            if (ms <= 0 && cfg.completeText) return cfg.completeText;
            const s = Math.ceil(ms / 1000);
            const m = Math.floor(s / 60);
            const rs = s % 60;
            if (cfg.timeFormat === 'M:SS') return `${m}:${String(rs).padStart(2, '0')}`;
            if (cfg.timeFormat === 'S') return `${s}`;
            return `${String(m).padStart(2, '0')}:${String(rs).padStart(2, '0')}`;
        }

        function tick() {
            if (!isRunning || isPaused) return;
            const now = Date.now(), delta = now - lastTick;
            lastTick = now;
            timeLeft -= delta;
            if (timeLeft <= 0) {
                timeLeft = 0;
                if (cfg.enableWarningBeep) playBeep(880);
                stopTimer();
            }
            display.textContent = formatTime(timeLeft);
            setProgress(updatePath());
            if (isRunning && !isPaused) requestAnimationFrame(tick);
        }

        function startTimer() {
            if (isRunning && !isPaused) return;
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (isPaused) {
                isPaused = false; lastTick = Date.now();
                pauseBtn.textContent = 'PAUSE';
                requestAnimationFrame(tick);
                return;
            }
            totalTime = cfg.durationSeconds * 1000;
            timeLeft = totalTime;
            isRunning = true; isPaused = false;
            lastTick = Date.now();
            lastSecondBeeped = -1; lastIntervalBeeped = 0;
            startBtn.disabled = true; pauseBtn.disabled = false;
            progressPath.style.transition = 'none';
            setProgress(updatePath());
            requestAnimationFrame(tick);
        }

        function pauseTimer() {
            if (!isRunning) return;
            if (isPaused) { startTimer(); return; }
            isPaused = true;
            pauseBtn.textContent = 'RESUME';
            display.classList.remove('cd-pulse', 'cd-glow');
        }

        function stopTimer() {
            isRunning = false; isPaused = false;
            startBtn.disabled = false; pauseBtn.disabled = true;
            display.classList.remove('cd-pulse', 'cd-glow');
            lastSecondBeeped = lastIntervalBeeped = -1;
        }

        function resetTimer() {
            stopTimer();
            totalTime = cfg.durationSeconds * 1000;
            timeLeft = totalTime;
            display.textContent = formatTime(timeLeft);
            setVar('--cd-accent', cfg.baseColor);
            pauseBtn.textContent = 'PAUSE';
            const pLen = updatePath();
            const bStyle = cfg.borderStyle;
            progressPath.style.transition = 'stroke-dashoffset 0.3s ease';
            progressPath.style.strokeDashoffset = bStyle === 'fill' ? 0 : pLen;
            liquidFill.style.display = 'none';
            conicWrapper.style.display = 'none';
            ripple.classList.remove('cd-ripple-animate');
        }

        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);
        window.addEventListener('resize', updatePath);

        // Initial render
        totalTime = cfg.durationSeconds * 1000;
        timeLeft = totalTime;
        display.textContent = formatTime(timeLeft);
        updatePath();
    }

    let uidCounter = 0;

    document.querySelectorAll('[data-countdown]').forEach(el => {
        if (el.dataset.cdInit) return;
        el.dataset.cdInit = 'true';
        createInstance(el, ++uidCounter);
    });

    window.initCountdowns = initCountdowns;
}
