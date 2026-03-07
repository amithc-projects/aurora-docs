---
title: "Countdown Configurator"
description: "Interactive tool to visually generate markup for the Countdown Component."
menu:
  main:
    parent: "components"
    weight: 51
---

Use the interactive configurator below to design your countdown timer and automatically generate the HTML markup!

<style>
    .config-wrapper {
        --c-bg-body: var(--ds-sys-color-surface-container-low, #080e1a);
        --c-bg-panel: var(--ds-sys-color-surface, #111827);
        --c-text-main: var(--ds-sys-color-on-surface, #f8fafc);
        --c-text-muted: var(--ds-sys-color-on-surface-variant, #94a3b8);
        --c-border: var(--ds-sys-color-border, #1e293b);
        --c-input-bg: var(--ds-sys-color-surface-container-highest, #0f172a);
        --c-input-border: var(--ds-sys-color-outline, #334155);
        --c-accent: var(--ds-sys-color-primary, #38bdf8);

        display: flex;
        height: 800px;
        margin-top: 2rem;
        border: 1px solid var(--c-border);
        border-radius: var(--ds-sys-radius-card, 16px);
        overflow: hidden;
        background: var(--c-bg-body);
        color: var(--c-text-main);
        font-family: inherit;
    }

    /* ── Header / Sidebar Layout ── */
    .config-sidebar {
        width: 380px;
        background: var(--c-bg-panel);
        border-right: 1px solid var(--c-border);
        padding: 2rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }

    .config-sidebar::-webkit-scrollbar {
        width: 8px;
    }
    .config-sidebar::-webkit-scrollbar-track {
        background: transparent;
    }
    .config-sidebar::-webkit-scrollbar-thumb {
        background: var(--c-border);
        border-radius: 4px;
    }

    .config-section {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--c-border);
    }

    .config-section:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .config-title {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--c-text-muted);
        text-transform: uppercase;
    }

    .config-row {
        display: flex;
        gap: 1rem;
    }

    .config-row > * {
        flex: 1;
        min-width: 0;
    }

    .config-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .config-group.hidden {
        display: none;
    }

    .config-group label {
        font-size: 0.85rem;
        color: var(--c-text-muted);
        margin: 0;
    }

    .config-wrapper input[type="text"],
    .config-wrapper input[type="number"],
    .config-wrapper select {
        width: 100%;
        background: var(--c-input-bg);
        border: 1px solid var(--c-input-border);
        color: var(--c-text-main);
        padding: 0.6rem 0.75rem;
        border-radius: 6px;
        font-family: inherit;
        font-size: 0.9rem;
        outline: none;
        transition: border-color 0.2s;
    }

    .config-wrapper input[type="text"]:focus,
    .config-wrapper input[type="number"]:focus,
    .config-wrapper select:focus {
        border-color: var(--c-accent);
    }

    .config-wrapper input[type="color"] {
        appearance: none;
        -webkit-appearance: none;
        border: none;
        width: 100%;
        height: 38px;
        border-radius: 6px;
        cursor: pointer;
        padding: 0;
        background: var(--c-input-bg);
        border: 1px solid var(--c-input-border);
    }

    .config-wrapper input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
    }

    .config-wrapper input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 4px;
    }

    .config-checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.25rem;
    }

    .config-checkbox-group label {
        cursor: pointer;
        color: var(--c-text-main);
        font-size: 0.9rem;
        user-select: none;
        margin: 0;
    }

    .config-wrapper input[type="checkbox"] {
        accent-color: var(--c-accent);
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    /* ── Main Area ── */
    .config-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: var(--c-bg-body);
    }

    .config-preview {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 2rem;
        overflow: auto;
    }

    .config-export {
        height: 280px;
        background: var(--c-bg-panel);
        border-top: 1px solid var(--c-border);
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .export-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .export-title {
        font-size: 0.75rem;
        color: var(--c-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-weight: 700;
        margin: 0;
    }

    .config-copy-btn {
        background: var(--c-input-border);
        color: var(--c-text-main);
        border: none;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
    }

    .config-copy-btn:hover {
        background: var(--c-text-muted);
    }

    .config-copy-btn:active {
        transform: scale(0.95);
    }

    .config-wrapper textarea {
        flex: 1;
        background: var(--c-input-bg);
        border: 1px solid var(--c-input-border);
        color: var(--c-accent);
        padding: 1.25rem;
        border-radius: 6px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.85rem;
        line-height: 1.5;
        resize: none;
        outline: none;
        white-space: pre;
        overflow: auto;
    }
</style>

<div class="config-wrapper">
    <!-- SIDEBAR -->
    <div class="config-sidebar">
        <!-- CORE -->
        <div class="config-section">
            <div class="config-title">Core Configuration</div>
            <div class="config-row">
                <div class="config-group">
                    <label>Total Seconds</label>
                    <input type="number" id="inDuration" value="10" min="1">
                </div>
                <div class="config-group">
                    <label>Border Shape</label>
                    <select id="inShape">
                        <option value="rectangle">Rectangle</option>
                        <option value="circle">Circle</option>
                        <option value="triangle">Triangle</option>
                        <option value="heart">Heart</option>
                        <option value="star">Star</option>
                        <option value="custom">Custom Path</option>
                    </select>
                </div>
            </div>
            <div class="config-row">
                <div class="config-group">
                    <label>Width (px)</label>
                    <input type="number" id="inWidth" placeholder="Auto" min="50">
                </div>
                <div class="config-group">
                    <label>Height (px)</label>
                    <input type="number" id="inHeight" placeholder="Auto" min="50">
                </div>
            </div>
            <div class="config-group hidden" id="customPathGroup">
                <label>Custom SVG Path (d)</label>
                <input type="text" id="inCustomPath" value="M 130 10 L 174 69 L 244 93 L 201 153 L 200 227 L 130 205 L 60 227 L 59 153 L 16 93 L 86 69 Z">
            </div>
            <div class="config-row">
                <div class="config-group">
                    <label>Time Format</label>
                    <select id="inTimeFormat">
                        <option value="MM:SS">00:00 (MM:SS)</option>
                        <option value="M:SS">0:00 (M:SS)</option>
                        <option value="S">0 (Seconds Only)</option>
                    </select>
                </div>
                <div class="config-group">
                    <label>Completion Text</label>
                    <input type="text" id="inCompleteText" placeholder="e.g. Done!">
                </div>
            </div>
            <div class="config-row" style="margin-top: 0.5rem;">
                <div class="config-group">
                    <label>Border Color</label>
                    <input type="color" id="inBorderColor" value="#38bdf8">
                </div>
            </div>
        </div>

        <!-- BACKGROUND -->
        <div class="config-section">
            <div class="config-title">Background Colors</div>
            <div class="config-row">
                <div class="config-group">
                    <label>Bg Start</label>
                    <input type="color" id="inBgStartColor" value="#38bdf8">
                </div>
                <div class="config-group">
                    <label>Bg End</label>
                    <input type="color" id="inBgEndColor" value="#1d4ed8">
                </div>
                <div class="config-group">
                    <label>Clock Bg</label>
                    <input type="text" id="inBgColor" value="transparent" placeholder="transparent" style="font-size: 0.8rem;">
                </div>
            </div>
        </div>

        <!-- BEHAVIOR & STYLE -->
        <div class="config-section">
            <div class="config-title">Behavior & Style</div>
            <div class="config-row">
                <div class="config-group">
                    <label>Border Anim</label>
                    <select id="inBorderStyle">
                        <option value="empty">Empty Border</option>
                        <option value="fill">Fill Border</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <div class="config-group">
                    <label>Bg Anim</label>
                    <select id="inBackgroundStyle">
                        <option value="none">None</option>
                        <option value="fill-v">Fill Vertical</option>
                        <option value="empty-v">Empty Vertical</option>
                        <option value="fill-h">Fill Horizontal</option>
                        <option value="empty-h">Empty Horizontal</option>
                        <option value="conic-f">Conic Fill</option>
                        <option value="conic-e">Conic Empty</option>
                    </select>
                </div>
            </div>
            <div class="config-group">
                <label>Direction</label>
                <select id="inDirection">
                    <option value="clockwise">Clockwise</option>
                    <option value="counter-clockwise">Counter-Clockwise</option>
                </select>
            </div>
            <div class="config-row" style="margin-top: 0.5rem;">
                <div class="config-group">
                    <label>Marker Pos</label>
                    <select id="inMarkerPosition">
                        <option value="both">Both</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <div class="config-group">
                    <label>Marker</label>
                    <input type="color" id="inMarkerColor" value="#ffffff">
                </div>
            </div>
        </div>

        <!-- WARNING -->
        <div class="config-section">
            <div class="config-title">Warning Settings</div>
            <div class="config-row">
                <div class="config-group">
                    <label>Warning Style</label>
                    <select id="inWarningStyle">
                        <option value="none">None</option>
                        <option value="color-only">Color Change</option>
                        <option value="pulse">Pulse</option>
                        <option value="glow">Glow</option>
                        <option value="fill-warn">Flash Fill</option>
                    </select>
                </div>
                <div class="config-group">
                    <label>Threshold</label>
                    <input type="number" id="inWarningThreshold" value="5" min="1">
                </div>
            </div>
            <div class="config-checkbox-group">
                <input type="checkbox" id="inWarningBeep" checked>
                <label for="inWarningBeep">Warning Beep</label>
            </div>
            <div class="config-group">
                <label>Warning Color</label>
                <input type="color" id="inWarningColor" value="#ef4444">
            </div>
        </div>

        <!-- PACING -->
        <div class="config-section">
            <div class="config-title">Pacing Intervals</div>
            <div class="config-row">
                <div class="config-group">
                    <label>Interval (Sec)</label>
                    <input type="number" id="inInterval" value="2" min="0">
                </div>
                <div class="config-group">
                    <label>Dot Color</label>
                    <input type="color" id="inTickColor" value="#ffffff">
                </div>
            </div>
            <div class="config-row" style="margin-top: 0.5rem;">
                <div class="config-checkbox-group">
                    <input type="checkbox" id="inIntervalTicks" checked>
                    <label for="inIntervalTicks">Dots</label>
                </div>
                <div class="config-checkbox-group">
                    <input type="checkbox" id="inIntervalBeeps" checked>
                    <label for="inIntervalBeeps">Beeps</label>
                </div>
            </div>
        </div>

    </div>

    <!-- MAIN BODY -->
    <div class="config-main">
        <div class="config-preview" id="previewContainer">
            <!-- Dynamically injected via JS -->
        </div>

        <div class="config-export">
            <div class="export-header">
                <h3 class="export-title">Export Markup</h3>
                <button class="config-copy-btn" id="copyBtn">Copy HTML</button>
            </div>
            <textarea id="markupOutput" readonly></textarea>
        </div>
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const els = {
            duration: document.getElementById('inDuration'),
            width: document.getElementById('inWidth'),
            height: document.getElementById('inHeight'),
            shape: document.getElementById('inShape'),
            customPath: document.getElementById('inCustomPath'),
            customPathGroup: document.getElementById('customPathGroup'),
            timeFormat: document.getElementById('inTimeFormat'),
            completeText: document.getElementById('inCompleteText'),
            borderColor: document.getElementById('inBorderColor'),
            bgColor: document.getElementById('inBgColor'),
            warningColor: document.getElementById('inWarningColor'),
            bgStartColor: document.getElementById('inBgStartColor'),
            bgEndColor: document.getElementById('inBgEndColor'),
            borderStyle: document.getElementById('inBorderStyle'),
            backgroundStyle: document.getElementById('inBackgroundStyle'),
            direction: document.getElementById('inDirection'),
            warningStyle: document.getElementById('inWarningStyle'),
            warningThreshold: document.getElementById('inWarningThreshold'),
            warningBeep: document.getElementById('inWarningBeep'),
            markerPosition: document.getElementById('inMarkerPosition'),
            markerColor: document.getElementById('inMarkerColor'),
            interval: document.getElementById('inInterval'),
            tickColor: document.getElementById('inTickColor'),
            intervalTicks: document.getElementById('inIntervalTicks'),
            intervalBeeps: document.getElementById('inIntervalBeeps'),

            previewContainer: document.getElementById('previewContainer'),
            markupOutput: document.getElementById('markupOutput'),
            copyBtn: document.getElementById('copyBtn')
        };

        // Re-generate markup and preview component on any update
        function updatePreview() {
            // Show/hide custom path input depending on shape selected
            if (els.shape.value === 'custom') {
                els.customPathGroup.classList.remove('hidden');
            } else {
                els.customPathGroup.classList.add('hidden');
            }

            // Build the string representation of all properties to output
            let markup = `<div data-countdown\n     data-duration="${els.duration.value}"`;

            if (els.width.value) markup += `\n     data-width="${els.width.value}"`;
            if (els.height.value) markup += `\n     data-height="${els.height.value}"`;

            if (els.shape.value !== 'rectangle') markup += `\n     data-shape="${els.shape.value}"`;
            if (els.shape.value === 'custom') markup += `\n     data-custom-path="${els.customPath.value}"`;

            if (els.borderColor.value !== '#38bdf8') markup += `\n     data-border-color="${els.borderColor.value}"`;
            if (els.warningColor.value !== '#ef4444') markup += `\n     data-warning-color="${els.warningColor.value}"`;
            if (els.bgStartColor.value !== '#38bdf8') markup += `\n     data-bg-start-color="${els.bgStartColor.value}"`;
            if (els.bgEndColor.value !== '#1d4ed8') markup += `\n     data-bg-end-color="${els.bgEndColor.value}"`;
            if (els.bgColor.value && els.bgColor.value !== 'transparent') markup += `\n     data-bg-color="${els.bgColor.value}"`;

            if (els.timeFormat.value !== 'MM:SS') markup += `\n     data-time-format="${els.timeFormat.value}"`;
            if (els.completeText.value !== '') markup += `\n     data-complete-text="${els.completeText.value}"`;

            if (els.borderStyle.value !== 'empty') markup += `\n     data-border-style="${els.borderStyle.value}"`;
            if (els.backgroundStyle.value !== 'none') markup += `\n     data-background-style="${els.backgroundStyle.value}"`;
            if (els.direction.value !== 'clockwise') markup += `\n     data-direction="${els.direction.value}"`;

            if (els.markerPosition.value !== 'both') markup += `\n     data-marker-position="${els.markerPosition.value}"`;
            if (els.markerColor.value !== '#ffffff') markup += `\n     data-marker-color="${els.markerColor.value}"`;

            if (els.warningStyle.value !== 'none') markup += `\n     data-warning-style="${els.warningStyle.value}"`;
            if (els.warningThreshold.value !== '5') markup += `\n     data-warning-threshold="${els.warningThreshold.value}"`;
            if (!els.warningBeep.checked) markup += `\n     data-warning-beep="false"`;

            if (els.interval.value !== '5') markup += `\n     data-interval="${els.interval.value}"`;
            if (!els.intervalTicks.checked) markup += `\n     data-interval-ticks="false"`;
            if (!els.intervalBeeps.checked) markup += `\n     data-interval-beeps="false"`;
            if (els.tickColor.value !== '#ffffff') markup += `\n     data-tick-color="${els.tickColor.value}"`;

            markup += `>\n</div>`;

            // Display raw text in export field
            els.markupOutput.value = markup;

            // Re-render preview HTML
            const temp = document.createElement('div');
            temp.innerHTML = markup;
            const newInstance = temp.firstElementChild;

            els.previewContainer.innerHTML = '';
            els.previewContainer.appendChild(newInstance);

            // Trigger singleton re-initialization manually via the exposed init call
            if (window.initCountdowns) {
                window.initCountdowns();
            }
        }

        // Attach debounced auto-reload to form inputs
        let debounceTimer;
        const triggerUpdate = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(updatePreview, 50);
        };

        Object.values(els).forEach(el => {
            if (el && (el.tagName === 'INPUT' || el.tagName === 'SELECT')) {
                el.addEventListener('input', triggerUpdate);
                el.addEventListener('change', triggerUpdate);
            }
        });

        // Setup copy output logic
        els.copyBtn.addEventListener('click', () => {
            els.markupOutput.select();
            document.execCommand('copy');
            const originalText = els.copyBtn.textContent;
            els.copyBtn.textContent = 'Copied!';
            setTimeout(() => els.copyBtn.textContent = originalText, 2000);
        });

        // Initialize directly when script fires
        setTimeout(updatePreview, 100);
    });
</script>
