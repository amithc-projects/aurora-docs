/**
 * Theme Manager for Aurora Custom Themes
 * Handles saving generated CSS to LocalStorage and injecting it globally.
 */

const STORAGE_KEY = 'aurora_custom_themes';

// Save a new custom theme
export function saveCustomTheme(name, cssText) {
    let themes = getCustomThemes();
    const id = 'custom_' + Date.now();
    
    themes.push({
        id: id,
        name: name,
        cssText: cssText
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
    
    const styleEl = document.createElement('style');
    styleEl.id = 'aurora-custom-theme-styles';
    styleEl.textContent = theme.cssText;
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
