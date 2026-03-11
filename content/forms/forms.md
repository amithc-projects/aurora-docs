---
title: "Forms & Inputs"
category: "Forms"
description: "Input fields, selection controls, and layout patterns."
menu:
  main:
    parent: "forms-standard"
---

## Fieldset Grouping

{{< demo >}}
 <section class="section">
      <h2 class="section-title">2. Fieldset Grouping</h2>
      
      <fieldset class="form-group">
        <legend>Shipping Address</legend>
        
        <div class="l-grid" style="--col-min: 200px; gap: 1rem;">
          <div class="field">
            <label class="field__label">Street</label>
            <input class="input" type="text" required>
          </div>
          <div class="field">
            <label class="field__label">City</label>
            <input class="input" type="text" required>
          </div>
        </div>
        
        <div class="l-grid" style="--col-min: 150px; gap: 1rem;">
          <div class="field">
            <label class="field__label">State</label>
            <input class="input" type="text" required>
          </div>
          <div class="field">
            <label class="field__label">Zip Code</label>
            <input class="input" type="text" inputmode="numeric" pattern="[0-9]*" required>
            <div class="field__error"><span>Numeric only.</span></div>
          </div>
        </div>
      </fieldset>
    </section>

{{< /demo >}}

## Selection Controls
Checkboxes, Radios, and Switches.

{{< demo >}}
<div class="l-stack">
  <div class="l-cluster">
    <label class="checkbox">
      <input type="checkbox" checked> <span>Remember me</span>
    </label>
    <label class="radio">
      <input type="radio" name="plan" checked> <span>Monthly</span>
    </label>
    <label class="radio">
      <input type="radio" name="plan"> <span>Yearly</span>
    </label>
  </div>

  <label class="switch" style="display: flex; align-items: center; gap: 1rem; cursor: pointer;">
    <div style="position: relative; width: 48px; height: 24px; background: #ddd; border-radius: 99px;">
      <div style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>
    </div>
    <span>Enable Notifications</span>
  </label>
</div>
{{< /demo >}}

## Validation
Error states slide in without layout shift.
Try typing an invalid email below. Notice the error slides in without jumping the layout.

{{< demo >}}

      
      <div class="card" style="padding: 2rem;">
        <form onsubmit="return false;" novalidate>
          
          <div class="field">
            <label class="field__label" for="email">Email Address</label>
            <input class="input" type="email" id="email" placeholder="you@example.com" required>
            <div class="field__hint">We'll never share your email.</div>
            <div class="field__error">
              <span>Please enter a valid email address containing '@'.</span>
            </div>
          </div>

          <div class="field">
            <label class="field__label" for="pass">Password</label>
            <input class="input" type="password" id="pass" pattern=".{8,}" required placeholder="••••••••">
            <div class="field__error">
              <span>Password must be at least 8 characters.</span>
            </div>
          </div>

          <div class="field">
            <label class="field__label" for="role">Role</label>
            <select class="select" id="role" required>
              <option value="" disabled selected>Select a role...</option>
              <option value="dev">Developer</option>
              <option value="des">Designer</option>
            </select>
            <div class="field__error">
              <span>Please select a role.</span>
            </div>
          </div>

          <button class="primary">Submit Form</button>
        </form>
      </div>
{{< /demo >}}


## Multi-Step Wizard

{{< demo >}}
 <section class="section">
      <h2 class="section-title">3. Multi-Step Wizard</h2>
      
      <div class="wizard card" style="padding: 2rem;">
        
        <div class="wizard__steps">
          <div class="wizard__step is-active" data-step="1">1</div>
          <div class="wizard__step" data-step="2">2</div>
          <div class="wizard__step" data-step="3">3</div>
        </div>

        <form id="wizard-form">
          <div class="wizard__panel is-active" data-panel="1">
            <h3>Step 1: Account Info</h3>
            <div class="field">
              <label class="field__label">Username</label>
              <input class="input" type="text" required placeholder="Choose a username">
            </div>
          </div>

          <div class="wizard__panel" data-panel="2">
            <h3>Step 2: Personal Details</h3>
            <div class="field">
              <label class="field__label">Full Name</label>
              <input class="input" type="text" required>
            </div>
            <div class="field">
              <label class="field__label">Bio</label>
              <textarea class="textarea"></textarea>
            </div>
          </div>

          <div class="wizard__panel" data-panel="3">
            <h3>Step 3: Review</h3>
            <p>Everything looks good! Click Finish to submit.</p>
          </div>

          <div class="wizard__footer">
            <button type="button" class="secondary" id="wiz-prev" disabled>Back</button>
            <button type="button" class="primary" id="wiz-next">Next</button>
          </div>
        </form>

      </div>
      
    </section>
    <script>
     // --- Simple Wizard Logic (For Demo) ---
    const wizNext = document.getElementById('wiz-next');
    const wizPrev = document.getElementById('wiz-prev');
    let currentStep = 1;
    const totalSteps = 3;

    function updateWizard() {
      // 1. Panels
      document.querySelectorAll('.wizard__panel').forEach(p => {
        p.classList.toggle('is-active', parseInt(p.dataset.panel) === currentStep);
      });

      // 2. Steps Indicator
      document.querySelectorAll('.wizard__step').forEach(s => {
        const stepNum = parseInt(s.dataset.step);
        s.classList.toggle('is-active', stepNum === currentStep);
        s.classList.toggle('is-complete', stepNum < currentStep);
      });

      // 3. Buttons
      wizPrev.disabled = currentStep === 1;
      wizNext.textContent = currentStep === totalSteps ? 'Finish' : 'Next';
    }

    wizNext.addEventListener('click', () => {
      // Basic check: is current step valid?
      const currentPanel = document.querySelector(`.wizard__panel[data-panel="${currentStep}"]`);
      const inputs = currentPanel.querySelectorAll('input, select, textarea');
      let valid = true;
      inputs.forEach(i => { if (!i.checkValidity()) { i.reportValidity(); valid = false; } });
      
      if (valid) {
        if (currentStep < totalSteps) {
          currentStep++;
          updateWizard();
        } else {
          alert('Wizard Complete!');
        }
      }
    });

    wizPrev.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizard();
      }
    });
  </script>
    {{< /demo >}}