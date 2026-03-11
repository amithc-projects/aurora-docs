---
title: "Government Service"
description: "A high-contrast, accessibility-focused archetype demonstrating a task-oriented Service Homepage and a multi-step Application Form, inspired by Gov.uk and USA.gov."
menu:
  main:
    parent: "archetypes"
---

The Government archetype rejects all superfluous decoration. It prioritizes maximum accessibility (AA/AAA contrast ratios), brutalist typography, and highly legible form densities designed to guide users through complex civic processes without error.

## 1. Service Homepage
A task-oriented layout that forces users immediately into search or rigidly categorized service buckets (Taxes, Visas, Licensing).

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: #f3f2f1; font-family: Helvetica, Arial, sans-serif; color: #0b0c0c;">
  
  <!-- Crown Header -->
  <header style="background: #0b0c0c; color: white; padding: 0.5rem 2rem; display: flex; align-items: center; gap: 1rem; border-bottom: 5px solid #1d70b8;">
    <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 1.5rem; letter-spacing: -0.5px; margin-right: 2rem;">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="white"><path d="M50,10 L80,30 L70,80 L30,80 L20,30 Z M50,10 L50,90 M20,30 L80,30 M30,80 L70,80"/></svg>
      GOV.UK
    </div>
    <div style="margin-left: auto; display: flex; align-items: center;">
      <div style="display: flex; background: white; width: 300px; padding: 2px;">
        <input type="text" placeholder="Search on GOV.UK" style="flex: 1; border: none; padding: 0.5rem; font-size: 1rem; color: black; outline: none;">
        <button style="background: #1d70b8; color: white; border: none; width: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;">
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs Bar -->
  <div style="padding: 1rem 2rem; font-size: 1rem; color: #1d70b8; background: white; border-bottom: 2px solid #b1b4b6;">
    <span style="text-decoration: underline; cursor: pointer;">Home</span> &gt;
    <span style="text-decoration: underline; cursor: pointer;">Driving and transport</span> &gt;
    <span style="font-weight: 700; color: #0b0c0c;">Driving licences</span>
  </div>

  <main style="padding: 3rem 2rem 5rem 2rem; max-width: 960px; margin: 0 auto; background: white;">
    
    <h1 style="font-size: 3rem; font-weight: 700; margin: 0 0 2rem 0; line-height: 1.1;">Renew your driving licence</h1>
    
    <!-- Service Description Container -->
    <div style="font-size: 1.1875rem; line-height: 1.6; max-width: 66%; margin-bottom: 3rem;">
      <p style="margin-bottom: 1.5rem;">Use this service to renew your driving licence if it's expired or about to expire.</p>
      <p style="margin-bottom: 1.5rem;">You must renew your licence every 10 years until you are 70. You will receive a reminder before your current licence ends.</p>
      
      <!-- Warning Inset -->
      <div style="border-left: 5px solid #1d70b8; padding: 1rem 1.5rem; margin: 2rem 0; background: #f3f2f1;">
        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 700;">Check your driving record</h3>
        <p style="margin: 0; font-size: 1rem;">Do not use this service to view or share your driving licence information (for example, to check your penalty points). Use the <a href="#" style="color: #1d70b8; font-weight: 700;">view driving record service</a> instead.</p>
      </div>

      <!-- Call to Action Button -->
      <button style="background: #00703c; color: white; border: none; padding: 0.75rem 1.5rem; font-size: 1.5rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; border-bottom: 4px solid #002d18; box-shadow: 0 2px 0 rgba(0,0,0,0.1); margin-top: 1rem; transition: background 0.2s;" onmouseover="this.style.background='#005a30'" onmouseout="this.style.background='#00703c'">
        Start now
        <svg fill="currentColor" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" height="15" width="13">
          <path d="M0 0h13l-6.5 15z" transform="matrix(0 -1 -1 0 15 13)"></path>
        </svg>
      </button>
      
      <div style="margin-top: 1.5rem; font-size: 1rem;">
        <span style="font-weight: 700;">Not what you're looking for?</span><br>
        <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: #1d70b8; font-weight: 700;">
          <li><a href="#" style="color: inherit;">Renew a licence if you're 70 or over</a></li>
          <li><a href="#" style="color: inherit;">Replace a lost, stolen, or damaged licence</a></li>
          <li><a href="#" style="color: inherit;">Change the address on your licence</a></li>
        </ul>
      </div>

    </div>

  </main>
</div>
{{< /demo >}}

---

## 2. Multi-Step Application Form
A linear, highly validated data entry flow. Uses massive typography, stark borders, and unmistakable error highlighting to ensure absolute clarity for citizens of all tech-literacy levels.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: #f3f2f1; font-family: Helvetica, Arial, sans-serif; color: #0b0c0c;">
  
  <header style="background: #0b0c0c; color: white; padding: 0.5rem 2rem; display: flex; align-items: center; border-bottom: 5px solid #1d70b8;">
    <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 1.5rem; letter-spacing: -0.5px;">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="white"><path d="M50,10 L80,30 L70,80 L30,80 L20,30 Z M50,10 L50,90 M20,30 L80,30 M30,80 L70,80"/></svg>
      GOV.UK
    </div>
  </header>

  <main style="padding: 2rem 2rem 5rem 2rem; max-width: 800px; margin: 0 auto; background: white; min-height: 600px;">
    
    <!-- Back Link -->
    <a href="#" style="display: inline-block; color: #0b0c0c; text-decoration: underline; font-size: 1rem; margin-bottom: 2rem;">&lt; Back</a>

    <!-- Error Summary Box -->
    <div style="border: 5px solid #d4351c; padding: 1.5rem; margin-bottom: 3rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 1rem 0;">There is a problem</h2>
      <ul style="margin: 0; padding-left: 1.5rem; color: #d4351c; font-weight: 700; font-size: 1.1875rem;">
        <li><a href="#passport-number" style="color: inherit;">Passport number must be 9 digits long</a></li>
      </ul>
    </div>

    <form style="max-width: 600px;">
      
      <!-- Legend / Step Intro -->
      <fieldset style="border: none; margin: 0; padding: 0;">
        <legend style="display: block; width: 100%; margin-bottom: 2rem;">
          <h1 style="font-size: 3rem; font-weight: 700; margin: 0; line-height: 1.1;">What is your passport number?</h1>
          <p style="font-size: 1.1875rem; color: #505a5f; margin-top: 1rem;">We need this to verify your identity with the Passport Office.</p>
        </legend>
        
        <!-- Field with Error Data -->
        <div style="margin-bottom: 2rem; border-left: 5px solid #d4351c; padding-left: 1rem; margin-left: -1.25rem;">
          
          <label style="display: block; font-weight: 700; font-size: 1.1875rem; margin-bottom: 0.25rem;">Passport number</label>
          <div style="color: #505a5f; margin-bottom: 0.5rem;">For example, 502135326</div>
          
          <!-- Inline Error Message -->
          <span style="display: block; color: #d4351c; font-weight: 700; font-size: 1.1875rem; margin-bottom: 0.5rem;">
            <span style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); border: 0;">Error:</span>
            Passport number must be 9 digits long
          </span>

          <input type="text" id="passport-number" value="1234" style="width: 200px; height: 40px; padding: 5px; border: 2px solid #0b0c0c; outline: 3px solid transparent; font-size: 1.1875rem; line-height: 1.25; appearance: none; border-color: #d4351c;" onfocus="this.style.outline='3px solid #fd0'; this.style.outlineOffset='0'; this.style.boxShadow='inset 0 0 0 2px' " onblur="this.style.outline='3px solid transparent'; this.style.boxShadow='none'">
        </div>

      </fieldset>

      <!-- Submit Action -->
      <button type="submit" style="background: #00703c; color: white; border: none; padding: 0.5rem 1.5rem; font-size: 1.1875rem; font-weight: 400; cursor: pointer; border-bottom: 4px solid #002d18; box-shadow: 0 2px 0 rgba(0,0,0,0.1); margin-top: 1rem; transition: background 0.2s;" onmouseover="this.style.background='#005a30'" onmouseout="this.style.background='#00703c'">
        Save and continue
      </button>

    </form>

  </main>
</div>
{{< /demo >}}
