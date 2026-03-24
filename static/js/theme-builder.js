import { saveCustomTheme } from './theme-manager.js';

export function initThemeBuilder() {
    // DOM References
    const layoutToggle = document.getElementById('layoutToggle');
    const brandPicker = document.getElementById('brandPicker');
    const secondaryPicker = document.getElementById('secondaryPicker');
    const tertiaryPicker = document.getElementById('tertiaryPicker');
    const bgAppPicker = document.getElementById('bgAppPicker');
    const surfacePicker = document.getElementById('surfacePicker');
    const onSurfacePicker = document.getElementById('onSurfacePicker');
    const onSurfaceVariantPicker = document.getElementById('onSurfaceVariantPicker');
    const successPicker = document.getElementById('successPicker');
    const warningPicker = document.getElementById('warningPicker');
    const errorPicker = document.getElementById('errorPicker');
    
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

    // Font Studio Integration State
    let activeFontConfig = null;
    const btnImportFonts = document.getElementById('btnImportFonts');
    const syncStatus = document.getElementById('fontSyncStatus');

    if (btnImportFonts) {
        btnImportFonts.addEventListener('click', () => {
            const stored = localStorage.getItem('aurora_font_studio_active');
            if (stored) {
                activeFontConfig = JSON.parse(stored);
                if (syncStatus) syncStatus.classList.remove('d-none');
                
                const details = document.getElementById('fontImportDetails');
                const stamp = document.getElementById('syncTimestamp');
                const count = document.getElementById('syncInstanceCount');
                
                if (details) {
                    details.classList.remove('d-none');
                    if (stamp) stamp.innerText = new Date().toLocaleTimeString();
                    if (count) count.innerText = `${activeFontConfig.instances.length} items`;
                }

                applyTokens();
                if (window.triggerToast) {
                    window.triggerToast('success', `Typography Imported: ${activeFontConfig.instances.length} instances mapped.`);
                }
            } else {
                alert("No active font configuration found. Please go to Font Studio and click 'Sync to Theme Builder'.");
            }
        });
    }

    // Export Buttons
    const btnCopy = document.getElementById('btnExportCopy');
    const btnDownload = document.getElementById('btnExportDownload');
    const btnSave = document.getElementById('btnSaveTheme');
    const themeNameInput = document.getElementById('themeNameInput');

    // Display Mirrors
    const targetLight = document.getElementById('content-target-light');
    const targetDark = document.getElementById('content-target-dark');

    // Core Updating Engine (Runs on every stroke/click)
    function applyTokens() {
        const brand = brandPicker.value;
        const secondary = secondaryPicker ? secondaryPicker.value : '#8b5cf6';
        const tertiary = tertiaryPicker ? tertiaryPicker.value : '#06b6d4';
        const bgApp = bgAppPicker ? bgAppPicker.value : '#f8fafc';
        const surface = surfacePicker ? surfacePicker.value : '#ffffff';
        const onSurface = onSurfacePicker ? onSurfacePicker.value : '#0f172a';
        const onSurfaceVariant = onSurfaceVariantPicker ? onSurfaceVariantPicker.value : '#64748b';
        const success = successPicker ? successPicker.value : '#10b981';
        const warning = warningPicker ? warningPicker.value : '#f59e0b';
        const error = errorPicker ? errorPicker.value : '#ef4444';
        
        const radius = radiusPicker.value + 'px';
        const stroke = strokePicker.value + 'px';
        const font = fontPicker.value;
        const bodyFont = bodyFontPicker.value;
        const spacing = spacingPicker.value + 'rem';
        const elevation = elevationPicker.value;

        // --- 0. Update Font Embed if active ---
        if (activeFontConfig && activeFontConfig.embedCode) {
            let fontContainer = document.getElementById('aurora-builder-fonts');
            if (!fontContainer) {
                fontContainer = document.createElement('div');
                fontContainer.id = 'aurora-builder-fonts';
                document.body.appendChild(fontContainer);
            }
            fontContainer.innerHTML = activeFontConfig.embedCode;
        }

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

        // Because data-theme="corporate" is now applied individually to the .pane elements 
        // to fix the light-dark() CSS color-scheme evaluations simultaneously, we MUST 
        // apply our Javascript token overrides directly to the panes so they beat the CSS cascade.
        const panes = document.querySelectorAll('.pane');

        panes.forEach(pane => {
            // Brand Scale
            pane.style.setProperty('--ds-sys-color-primary', brand);
            pane.style.setProperty('--color-primary-500', brand);
            pane.style.setProperty('--color-secondary-500', secondary);
            pane.style.setProperty('--color-tertiary-500', tertiary);
            
            pane.style.setProperty('--ds-sys-color-primary-container', `color-mix(in srgb, ${brand} 15%, transparent)`);
            pane.style.setProperty('--ds-sys-color-on-primary-container', `color-mix(in srgb, ${brand} 20%, currentColor)`);
            pane.style.setProperty('--ds-sys-color-on-primary', '#ffffff');

            // Semantic UI Status
            pane.style.setProperty('--ds-sys-color-success', success);
            pane.style.setProperty('--ds-sys-color-warning', warning);
            pane.style.setProperty('--ds-sys-color-error', error);
            
            // Backgrounds and Surfaces
            pane.style.setProperty('--ds-sys-color-bg-app', bgApp);
            pane.style.setProperty('--ds-sys-color-surface', surface);
            pane.style.setProperty('--ds-sys-color-on-surface', onSurface);
            pane.style.setProperty('--ds-sys-color-on-surface-variant', onSurfaceVariant);
            // Derive contrasting elevated backgrounds
            pane.style.setProperty('--ds-sys-color-surface-variant', `color-mix(in srgb, ${surface}, #000 4%)`);
            pane.style.setProperty('--ds-sys-color-surface-container', `color-mix(in srgb, ${surface}, #000 6%)`);
            pane.style.setProperty('--ds-sys-color-surface-container-high', `color-mix(in srgb, ${surface}, #000 12%)`);
            pane.style.setProperty('--ds-sys-color-surface-container-highest', `color-mix(in srgb, ${surface}, #000 18%)`);

            // Borders and Geometry
            pane.style.setProperty('--ds-sys-radius-card', radius);
            pane.style.setProperty('--ds-sys-radius-btn', `${Math.max(4, parseInt(radius) / 2)}px`);
            pane.style.setProperty('--ds-sys-border-width', stroke);

            // Force Border Overrides on Components that hardcode them
            pane.style.setProperty('--ds-cmp-btn-sec-border-width', stroke);

            // Spacing
            pane.style.setProperty('--ds-ref-space-base', spacing);

            // Typography (Fallback)
            pane.style.setProperty('--font-primary', font);
            pane.style.setProperty('--font-heading', font);
            pane.style.setProperty('--font-body', bodyFont);

            // Typography (Font Studio Roles)
            if (activeFontConfig && activeFontConfig.assignments) {
                console.log("[ThemeBuilder] activeFontConfig active:", activeFontConfig);
                Object.entries(activeFontConfig.assignments).forEach(([role, instId]) => {
                    const instance = activeFontConfig.instances.find(i => String(i.id) === String(instId));
                    if (instance) {
                        const fontObj = activeFontConfig.fonts.find(f => String(f.id) === String(instance.fontId));
                        if (fontObj) {
                            pane.style.setProperty(`--font-${role}`, `"${fontObj.name}", sans-serif`);
                            const settings = Object.entries(instance.settings).map(([tag, val]) => `"${tag}" ${val}`).join(', ');
                            pane.style.setProperty(`--settings-${role}`, settings);
                            if (role === 'heading' || role === 'hero') {
                                pane.style.setProperty('--font-weight-heading', 'normal');
                            }
                            console.log(`[ThemeBuilder] Applied role: ${role} -> ${fontObj.name} (${settings})`);
                        }
                    } else {
                        // Reset if no instance
                        pane.style.removeProperty(`--font-${role}`);
                        pane.style.removeProperty(`--settings-${role}`);
                    }
                });
            }
 else {
                // Default fallback mappings if no studio config
                pane.style.setProperty('--font-hero', font);
                pane.style.setProperty('--font-nav', font);
                pane.style.setProperty('--font-heading', font);
                pane.style.setProperty('--font-body', bodyFont);
            }

            // Elevation
            pane.style.setProperty('--ds-sys-shadow-card', elevation);
        });
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
  --color-primary-500: ${brandPicker.value};
  --color-secondary-500: ${secondaryPicker ? secondaryPicker.value : '#8b5cf6'};
  --color-tertiary-500: ${tertiaryPicker ? tertiaryPicker.value : '#06b6d4'};
  
  --ds-sys-color-primary-container: color-mix(in srgb, ${brandPicker.value} 15%, transparent);
  --ds-sys-color-on-primary-container: color-mix(in srgb, ${brandPicker.value} 20%, currentColor);
  --ds-sys-color-on-primary: #ffffff;

  /* Semantic UI Status */
  --ds-sys-color-success: ${successPicker ? successPicker.value : '#10b981'};
  --ds-sys-color-warning: ${warningPicker ? warningPicker.value : '#f59e0b'};
  --ds-sys-color-error: ${errorPicker ? errorPicker.value : '#ef4444'};

  /* Backgrounds and Surfaces */
  --ds-sys-color-bg-app: ${bgAppPicker ? bgAppPicker.value : '#f8fafc'};
  --ds-sys-color-surface: ${surfacePicker ? surfacePicker.value : '#ffffff'};
  --ds-sys-color-on-surface: ${onSurfacePicker ? onSurfacePicker.value : '#0f172a'};
  --ds-sys-color-on-surface-variant: ${onSurfaceVariantPicker ? onSurfaceVariantPicker.value : '#64748b'};
  --ds-sys-color-surface-variant: color-mix(in srgb, ${surfacePicker ? surfacePicker.value : '#ffffff'}, #000 4%);
  --ds-sys-color-surface-container: color-mix(in srgb, ${surfacePicker ? surfacePicker.value : '#ffffff'}, #000 6%);
  --ds-sys-color-surface-container-high: color-mix(in srgb, ${surfacePicker ? surfacePicker.value : '#ffffff'}, #000 12%);
  --ds-sys-color-surface-container-highest: color-mix(in srgb, ${surfacePicker ? surfacePicker.value : '#ffffff'}, #000 18%);

  /* Typography (Framework) */
  --font-primary: ${fontPicker.value};
  --font-heading: ${fontPicker.value};
  --font-body: ${bodyFontPicker.value};

  /* Typography (Font Studio Roles) */
${(() => {
    if (!activeFontConfig || !activeFontConfig.assignments) return '  /* No Font Studio assignments active */';
    let fontVars = '';
    Object.entries(activeFontConfig.assignments).forEach(([role, instId]) => {
        const instance = activeFontConfig.instances.find(i => i.id == instId);
        if (instance) {
            const fontObj = activeFontConfig.fonts.find(f => f.id == instance.fontId);
            if (fontObj) {
                fontVars += `  --font-${role}: "${fontObj.name}", sans-serif;\n`;
                const settings = Object.entries(instance.settings).map(([tag, val]) => `"${tag}" ${val}`).join(', ');
                fontVars += `  --settings-${role}: ${settings};\n`;
            }
        }
    });
    return fontVars;
})()}
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

    if (btnSave && themeNameInput) {
        btnSave.addEventListener('click', () => {
            const name = themeNameInput.value.trim() || 'Custom Theme';
            const css = generateCSS();
            // Pass activeFontConfig to be bundled with the theme
            saveCustomTheme(name, css, activeFontConfig);
            
            themeNameInput.value = '';
            
            if (window.triggerToast) {
                window.triggerToast('success', `Theme "${name}" saved! It is now available in the global dropdown.`);
            }
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
