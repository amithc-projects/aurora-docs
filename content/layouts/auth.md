---
title: "Auth Layout"
description: "Login and Registration screens."
menu:
  main:
    parent: "layouts"
---

## Login Screen
Centered card on a branded background.

{{< demo >}}
<div style="min-height: 500px; background: linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%); display: grid; place-items: center; padding: 1rem;">
  
  <div class="card" style="width: 100%; max-width: 400px; padding: 2.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 2rem;">
      <div style="width: 48px; height: 48px; background: var(--ds-sys-color-primary); border-radius: 8px; margin: 0 auto 1rem auto;"></div>
      <h2>Welcome Back</h2>
      <p style="color: #666;">Please enter your details.</p>
    </div>

    <div class="l-stack" style="gap: 1.5rem;">
      <div class="field">
        <label class="field__label">Email</label>
        <input type="email" class="input" placeholder="name@company.com">
      </div>
      
      <div class="field">
        <label class="field__label">Password</label>
        <input type="password" class="input" value="12345678">
      </div>

      <button class="btn primary" style="width: 100%;">Sign In</button>
      
      <div style="text-align: center; font-size: 0.9rem;">
        <a href="#" style="color: var(--ds-sys-color-primary);">Forgot password?</a>
      </div>
    </div>
  </div>

</div>
{{< /demo >}}
