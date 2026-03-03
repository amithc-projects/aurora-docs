/**
 * Aurora Cookie Consent System
 * Handles Granular Consent, Script Gating, and UI Modes.
 */

export function initCookieConsent(config = {}) {
  const defaults = {
    mode: 'banner-bottom', // banner-top, banner-bottom, toast, modal
    policyUrl: '#',
    version: '1.0', // Bump this to force re-consent
    categories: [
      { id: 'necessary', label: 'Strictly Necessary', desc: 'Required for the site to work.', required: true },
      { id: 'analytics', label: 'Analytics', desc: 'Helps us improve our website.' },
      { id: 'marketing', label: 'Marketing', desc: 'Used for targeted advertising.' }
    ]
  };

  const settings = { ...defaults, ...config };
  const STORAGE_KEY = 'aurora_cookie_consent';
  
  // DOM Elements
  let container, backdrop, prefsModal;

  // 1. Check Logic
  function checkConsent() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return showPrompt();

    const data = JSON.parse(saved);
    if (data.version !== settings.version) return showPrompt();

    // Already consented -> Apply scripts
    applyConsent(data.categories);
  }

  // 2. Build UI
  function buildUI() {
    // A. The Backdrop (for modals)
    backdrop = document.createElement('div');
    backdrop.className = 'cookie-backdrop';
    document.body.appendChild(backdrop);

    // B. The Main Prompt
    container = document.createElement('div');
    container.className = 'cookie-consent';
    container.dataset.mode = settings.mode;
    
    container.innerHTML = `
      <div class="cookie-content">
        <span class="cookie-title">🍪 We use cookies</span>
        <p class="cookie-text">
          We use cookies to enhance your experience. 
          <a href="${settings.policyUrl}" style="color:inherit; text-decoration:underline;">Read Policy</a>.
        </p>
      </div>
      <div class="cookie-actions">
        <button class="btn-cookie btn-cookie--secondary js-manage">Manage</button>
        <button class="btn-cookie btn-cookie--primary js-accept">Accept All</button>
      </div>
    `;
    document.body.appendChild(container);

    // C. The Preferences Modal
    prefsModal = document.createElement('div');
    prefsModal.className = 'cookie-prefs';
    prefsModal.innerHTML = `
      <div class="cookie-prefs__header">
        <h3>Cookie Preferences</h3>
        <p>Manage your consent settings below.</p>
      </div>
      <div class="cookie-prefs__list">
        ${settings.categories.map(cat => `
          <div class="cookie-item">
            <div>
              <strong>${cat.label}</strong>
              <div style="font-size:0.85rem; opacity:0.7;">${cat.desc}</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="cat-${cat.id}" ${cat.required ? 'checked disabled' : ''}>
              <span class="slider"></span>
            </label>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:1.5rem; text-align:right; gap:0.5rem; display:flex; justify-content:flex-end;">
        <button class="btn-cookie btn-cookie--secondary js-close-prefs">Cancel</button>
        <button class="btn-cookie btn-cookie--primary js-save-prefs">Save Preferences</button>
      </div>
    `;
    document.body.appendChild(prefsModal);

    // Listeners
    container.querySelector('.js-accept').addEventListener('click', acceptAll);
    container.querySelector('.js-manage').addEventListener('click', openPrefs);
    
    prefsModal.querySelector('.js-close-prefs').addEventListener('click', closePrefs);
    prefsModal.querySelector('.js-save-prefs').addEventListener('click', savePrefs);
  }

  // 3. Actions
  function showPrompt() {
    buildUI(); // Ensure elements exist
    
    // Tiny delay for animation
    setTimeout(() => {
      container.classList.add('is-visible');
      if (settings.mode === 'modal') backdrop.classList.add('is-visible');
    }, 100);
  }

  function hidePrompt() {
    container.classList.remove('is-visible');
    backdrop.classList.remove('is-visible');
    prefsModal.classList.remove('is-open');
  }

  function openPrefs() {
    container.classList.remove('is-visible'); // Hide banner
    backdrop.classList.add('is-visible');     // Show dim
    prefsModal.classList.add('is-open');      // Show modal
  }

  function closePrefs() {
    prefsModal.classList.remove('is-open');
    // If we haven't consented yet, show banner again
    if (!localStorage.getItem(STORAGE_KEY)) {
      container.classList.add('is-visible');
      if (settings.mode !== 'modal') backdrop.classList.remove('is-visible');
    }
  }

  function acceptAll() {
    const allCats = settings.categories.map(c => c.id);
    saveState(allCats);
  }

  function savePrefs() {
    const selected = [];
    settings.categories.forEach(cat => {
      if (cat.required) {
        selected.push(cat.id);
      } else {
        const checkbox = document.getElementById(`cat-${cat.id}`);
        if (checkbox && checkbox.checked) selected.push(cat.id);
      }
    });
    saveState(selected);
  }

  function saveState(categories) {
    const payload = {
      version: settings.version,
      timestamp: new Date().toISOString(),
      categories: categories
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    
    hidePrompt();
    applyConsent(categories);
  }

  // 4. Script Gating (The Magic)
  function applyConsent(allowedCategories) {
    console.log("🍪 Consent Applied:", allowedCategories);
    
    // Find all <script type="text/plain" data-category="...">
    const gatedScripts = document.querySelectorAll('script[type="text/plain"][data-category]');
    
    gatedScripts.forEach(script => {
      const cat = script.dataset.category;
      if (allowedCategories.includes(cat)) {
        // Enable Script: Create a new script tag to execute it
        const newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        if (script.src) newScript.src = script.src;
        if (script.innerHTML) newScript.innerHTML = script.innerHTML;
        
        // Replace old with new
        script.parentNode.insertBefore(newScript, script);
        script.remove(); // Cleanup
        console.log(`✅ Enabled script: ${cat}`);
      }
    });

    // Fire event for GTM or other listeners
    window.dispatchEvent(new CustomEvent('aurora-consent-update', { detail: allowedCategories }));
  }

  // Trigger
  checkConsent();
}
