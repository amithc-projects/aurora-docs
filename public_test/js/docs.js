document.addEventListener('DOMContentLoaded', () => {
  
  // --- A. THEME SWITCHER ---
  const themeSelect = document.getElementById('theme-select');
  const modeSelect = document.getElementById('mode-select');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('aurora-theme') || 'corporate';
  const savedMode = localStorage.getItem('aurora-mode') || 'light';

  html.setAttribute('data-theme', savedTheme);
  html.setAttribute('data-mode', savedMode);
  
  if(themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.addEventListener('change', (e) => {
      html.setAttribute('data-theme', e.target.value);
      localStorage.setItem('aurora-theme', e.target.value);
    });
  }

  if(modeSelect) {
    modeSelect.value = savedMode;
    modeSelect.addEventListener('change', (e) => {
      html.setAttribute('data-mode', e.target.value);
      localStorage.setItem('aurora-mode', e.target.value);
    });
  }

  // --- B. COPY BUTTON ---
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const wrapper = btn.closest('.demo-source');
      const codeElement = wrapper.querySelector('code');
      if (!codeElement) return;

      try {
        await navigator.clipboard.writeText(codeElement.innerText); // Use innerText to capture edits
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px">check</span> Copied!';
        btn.style.color = '#4ade80';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    });
  });

  // --- C. VIEW CODE TOGGLE ---
  document.querySelectorAll('.btn-toggle-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.demo-source');
      const content = wrapper.querySelector('.code-content');
      const btnText = btn.querySelector('.btn-text');
      
      const isHidden = content.hidden;
      if (isHidden) {
        content.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        btnText.textContent = 'Hide Code';
        btn.style.color = 'white';
      } else {
        content.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btnText.textContent = 'View Code';
        btn.style.color = '';
      }
    });
  });

  // --- D. LIVE EDITING LOGIC (NEW) ---
  const liveCodes = document.querySelectorAll('.live-code');

  liveCodes.forEach(codeBlock => {
    codeBlock.addEventListener('input', () => {
      // 1. Find the parent wrapper
      const wrapper = codeBlock.closest('.demo-wrapper');
      
      // 2. Find the sibling preview container
      const preview = wrapper.querySelector('.demo-preview');
      
      // 3. Inject the code directly
      // innerText preserves line breaks correctly from the <pre> block
      preview.innerHTML = codeBlock.innerText;
    });
  });

  // --- E. GLOBAL MODAL TRIGGERS ---
  // Looks for any button with data-open-modal="ID"
  document.body.addEventListener('click', (e) => {
    // 1. Check if clicked element is a trigger
    const trigger = e.target.closest('[data-open-modal]');
    if (!trigger) return;

    // 2. Find the modal
    const modalId = trigger.getAttribute('data-open-modal');
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.showModal();
    } else {
      console.warn(`Modal with ID "${modalId}" not found.`);
    }
  });

  // Optional: Global "Close" buttons inside modals
  // Looks for any button with data-close-modal
  document.body.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-close-modal]');
    if (!closeBtn) return;
    
    const modal = closeBtn.closest('dialog');
    if (modal) modal.close();
  });

  // Optional: Click backdrop to close
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  });

});
