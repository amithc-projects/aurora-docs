/**
 * Theme Manager for Aurora Custom Themes
 * Handles saving generated CSS to LocalStorage and injecting it globally.
 */

const STORAGE_KEY = 'aurora_custom_themes';

// Save a new custom theme
export function saveCustomTheme(name, cssText, fontConfig = null) {
    let themes = getCustomThemes();
    const id = 'custom_' + Date.now();
    
    themes.push({
        id: id,
        name: name,
        cssText: cssText,
        fontConfig: fontConfig
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(themes));
    return id;
}

// Get all saved custom themes
export function getCustomThemes() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Failed to parse custom themes", e);
        return [];
    }
}

// Get a specific custom theme
export function getCustomTheme(id) {
    const themes = getCustomThemes();
    return themes.find(t => t.id === id);
}

// Delete a custom theme
export function deleteCustomTheme(id) {
    let themes = getCustomThemes();
    themes = themes.filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(themes));
}

// Inject the raw CSS of a custom theme into the document <head>
export function injectCustomTheme(id) {
    // Clean up any existing injected theme
    clearCustomTheme();
    
    const theme = getCustomTheme(id);
    if (!theme) return false;
    
    // 1. Inject Theme CSS
    const styleEl = document.createElement('style');
    styleEl.id = 'aurora-custom-theme-styles';
    styleEl.textContent = theme.cssText;
    
    // 2. Handle Font Configuration
    if (theme.fontConfig) {
        // Inject Embed Code (Link Tag)
        const fontContainer = document.getElementById('aurora-dynamic-fonts') || document.createElement('div');
        fontContainer.id = 'aurora-dynamic-fonts';
        fontContainer.innerHTML = theme.fontConfig.embedCode || '';
        if (!document.getElementById('aurora-dynamic-fonts')) document.head.appendChild(fontContainer);

        // Generate Role-based CSS
        let fontCSS = '\n/* Font Studio Assignments */\n:root {\n';
        const { assignments, instances, fonts } = theme.fontConfig;
        
        if (assignments && instances && fonts) {
            Object.entries(assignments).forEach(([role, instId]) => {
                const instance = instances.find(i => i.id == instId);
                if (instance) {
                    const font = fonts.find(f => f.id == instance.fontId);
                    if (font) {
                        fontCSS += `  --font-${role}: "${font.name}", sans-serif;\n`;
                        const settings = Object.entries(instance.settings).map(([tag, val]) => `"${tag}" ${val}`).join(', ');
                        fontCSS += `  --settings-${role}: ${settings};\n`;
                    }
                }
            });
        }
        fontCSS += '}\n';
        styleEl.textContent += fontCSS;
    }
    
    document.head.appendChild(styleEl);
    return true;
}

// Remove the injected CSS
export function clearCustomTheme() {
    const existing = document.getElementById('aurora-custom-theme-styles');
    if (existing) {
        existing.remove();
    }
}
