/**
 * Aurora Wizard Controller (Refactored)
 * Targets direct children to reduce CSS class usage.
 */

export function initWizards() {
  const wizards = document.querySelectorAll('.wizard');
  
  wizards.forEach(wizard => {
    // UPDATED SELECTORS:
    // Steps are LIs inside .wizard__steps
    const steps = wizard.querySelectorAll('.wizard__steps > li');
    
    // Panels are DIVs inside .wizard__content
    const panels = wizard.querySelectorAll('.wizard__content > div');
    
    const btnNext = wizard.querySelector('[data-action="next"]');
    const btnPrev = wizard.querySelector('[data-action="prev"]');
    const btnSubmit = wizard.querySelector('[data-action="submit"]');
    const form = wizard.querySelector('form');
    
    let currentStep = 0;

    function updateState() {
      // 1. Update UI
      steps.forEach((step, index) => {
        step.classList.toggle('is-active', index === currentStep);
        step.classList.toggle('is-complete', index < currentStep);
      });

      panels.forEach((panel, index) => {
        panel.classList.toggle('is-active', index === currentStep);
      });

      // 2. Button Logic
      if (btnPrev) btnPrev.disabled = currentStep === 0;
      
      if (currentStep === steps.length - 1) {
        if (btnNext) btnNext.style.display = 'none';
        if (btnSubmit) btnSubmit.style.display = 'inline-flex';
      } else {
        if (btnNext) {
          btnNext.style.display = 'inline-flex';
          btnNext.textContent = 'Next';
        }
        if (btnSubmit) btnSubmit.style.display = 'none';
      }
    }

    // Next/Prev Listeners
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        // Validation logic here (simplified for demo)
        const currentPanel = panels[currentStep];
        const inputs = currentPanel.querySelectorAll('input, select');
        let valid = true;
        inputs.forEach(i => { if(!i.checkValidity()) { valid = false; i.reportValidity(); } });
        
        if (valid) {
          currentStep++;
          updateState();
        }
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 0) {
          currentStep--;
          updateState();
        }
      });
    }

    updateState();
  });
}
