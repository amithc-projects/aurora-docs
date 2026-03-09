export function initThemeBuilder() {
    const root = document.documentElement;

    // DOM References
    const layoutToggle = document.getElementById('layoutToggle');
    const brandPicker = document.getElementById('brandPicker');
    const brandHexVal = document.getElementById('brandHexVal');
    const radiusPicker = document.getElementById('radiusPicker');
    const radiusVal = document.getElementById('radiusVal');
    const strokePicker = document.getElementById('strokePicker');
    const strokeVal = document.getElementById('strokeVal');
    const fontPicker = document.getElementById('fontPicker');
    const bodyFontPicker = document.getElementById('bodyFontPicker');
    const spacingPicker = document.getElementById('spacingPicker');
    const spacingVal = document.getElementById('spacingVal');
    const elevationPicker = document.getElementById('elevationPicker');

    // Export Buttons
    const btnCopy = document.getElementById('btnExportCopy');
    const btnDownload = document.getElementById('btnExportDownload');

    // Display Mirrors
    const targetLight = document.getElementById('content-target-light');
    const targetDark = document.getElementById('content-target-dark');

    // Core Updating Engine (Runs on every stroke/click)
    function applyTokens() {
        const brand = brandPicker.value;
        const radius = radiusPicker.value + 'px';
        const stroke = strokePicker.value + 'px';
        const font = fontPicker.value;
        const bodyFont = bodyFontPicker.value;
        const spacing = spacingPicker.value + 'rem';
        const elevation = elevationPicker.value;

        // --- 1. Update UI Labels ---
        brandHexVal.textContent = brand;
        radiusVal.textContent = radius;
        strokeVal.textContent = stroke;
        spacingVal.textContent = spacing;

        // --- 2. Build the Color Ramp Visually ---
        const ramp = document.getElementById('rampDisplay');
        ramp.innerHTML = '';
        const swatches = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
        swatches.forEach(s => {
            // Rough approximation of material design token tinting logic
            let colorStr = s < 50 ? `color-mix(in srgb, ${brand}, white ${(50 - s) * 2}%)` :
                s > 50 ? `color-mix(in srgb, ${brand}, black ${(s - 50) * 2}%)` : brand;
            const sw = document.createElement('div');
            sw.style.background = colorStr;
            sw.style.width = '100%';
            sw.style.height = '100%';
            ramp.appendChild(sw);
        });

        // --- 3. Rewrite Official Aurora Tokens Natively ---
        // Brand Scale
        root.style.setProperty('--ds-sys-color-primary', brand);
        root.style.setProperty('--ds-sys-color-primary-container', `color-mix(in srgb, ${brand} 15%, transparent)`);
        root.style.setProperty('--ds-sys-color-on-primary-container', `color-mix(in srgb, ${brand} 20%, currentColor)`);
        root.style.setProperty('--ds-sys-color-on-primary', '#ffffff');

        // Borders and Geometry
        root.style.setProperty('--ds-sys-radius-card', radius);
        root.style.setProperty('--ds-sys-radius-btn', `${Math.max(4, parseInt(radius) / 2)}px`);
        root.style.setProperty('--ds-sys-border-width', stroke);

        // Force Border Overrides on Components that hardcode them
        root.style.setProperty('--ds-cmp-btn-sec-border-width', stroke);

        // Subgrid Spacing Engine
        root.style.setProperty('--ds-ref-space-base', spacing);

        // Shadows & Elevation
        root.style.setProperty('--ds-sys-shadow-card', elevation);

        // Typography
        root.style.setProperty('--font-primary', font);
        root.style.setProperty('--font-heading', font);
        root.style.setProperty('--font-body', bodyFont);
    }

    // Template Injector
    function swapLayout() {
        const activeId = `tpl-${layoutToggle.value}`;
        const templateNode = document.getElementById(activeId);

        if (templateNode) {
            const html = templateNode.innerHTML;
            targetLight.innerHTML = html;
            targetDark.innerHTML = html;

            // Because we violently replaced the DOM, we need to ask Aurora to re-initialize 
            // the javascript classes (Segmented Controls, Splitters, Trees, etc)
            if (window.auroraBuilderInit) {
                // Slight delay to ensure DOM parsed
                setTimeout(window.auroraBuilderInit, 50);
            }
        }
    }

    // Export Logic
    function generateCSS() {
        return `/* Aurora Generated Theme Output */
:root {
  /* Brand Mapping */
  --ds-sys-color-primary: ${brandPicker.value};
  --ds-sys-color-primary-container: color-mix(in srgb, ${brandPicker.value} 15%, transparent);
  --ds-sys-color-on-primary-container: color-mix(in srgb, ${brandPicker.value} 20%, currentColor);
  --ds-sys-color-on-primary: #ffffff;

  /* Typography */
  --font-primary: ${fontPicker.value};
  --font-heading: ${fontPicker.value};
  --font-body: ${bodyFontPicker.value};

  /* Structural Geometry */
  --ds-sys-radius-card: ${radiusPicker.value}px;
  --ds-sys-radius-btn: ${Math.max(4, parseInt(radiusPicker.value) / 2)}px;
  --ds-sys-border-width: ${strokePicker.value}px;
  --ds-cmp-btn-sec-border-width: ${strokePicker.value}px;

  /* Spacing Base */
  --ds-ref-space-base: ${spacingPicker.value}rem;

  /* Elevation */
  --ds-sys-shadow-card: ${elevationPicker.value};
}`;
    }

    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(generateCSS()).then(() => {
                if (window.triggerToast) window.triggerToast('success', 'CSS tokens copied to your clipboard!');
            });
        });
    }

    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            const blob = new Blob([generateCSS()], { type: "text/css" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "aurora-custom-theme.css";
            a.click();
            URL.revokeObjectURL(url);
            if (window.triggerToast) window.triggerToast('info', 'File downloading to your system!');
        });
    }

    // Listeners Binding
    const inputs = document.querySelectorAll('input[type="range"], input[type="color"], select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            applyTokens();
            if (input.id === 'layoutToggle') swapLayout();
        });
    });

    // Boot
    applyTokens();
    swapLayout();
}

document.addEventListener('DOMContentLoaded', initThemeBuilder);
