---
title: "Cookie Consent"
description: "GDPR-ready consent manager with script gating and multiple layouts."
category: "Components"
menu:
  main:
    parent: "components"
---

## The Consent System
This component handles the UI, state management, and **Script Gating**.

### Features:
1.  **Granular Control:** Users can toggle Analytics/Marketing separately.
2.  **Script Gating:** Scripts with `type="text/plain"` are only executed *after* consent.
3.  **Versioning:** Bumping the version number forces re-consent.

### Interactive Demo
Click the buttons below to **reset your local storage** and trigger different layouts.

{{< demo >}}
<div >
  <button class="btn" onclick="triggerCookie('banner-bottom')">Test: Bottom Banner</button>
  <button class="btn" onclick="triggerCookie('banner-top')">Test: Top Banner</button>
  <button class="btn" onclick="triggerCookie('toast')">Test: Corner Toast</button>
  <button class="btn" onclick="triggerCookie('modal')">Test: Center Modal</button>
</div>

<script type="text/plain" data-category="analytics">
  console.log("🚀 ANALYTICS SCRIPT FIRED! (Consent Granted)");
  alert("Analytics Script Executed!");
</script>

<script type="module">
  import { initCookieConsent } from "/js/components/cookie-consent.js";

  // Expose for demo buttons
  window.triggerCookie = (mode) => {
    localStorage.removeItem('aurora_cookie_consent'); // Reset
    document.querySelectorAll('.cookie-consent, .cookie-backdrop, .cookie-prefs').forEach(e => e.remove()); // Cleanup DOM
    
    initCookieConsent({
      mode: mode,
      policyUrl: '/privacy-policy',
      version: '1.2'
    });
  };
</script>
{{< /demo >}}

### How to Gate Scripts
To block a script (like Google Analytics) until consent is given, change `type="text/javascript"` to `type="text/plain"` and add the `data-category`:

```html
<script type="text/plain" data-category="analytics" async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXX"></script>

<script type="text/plain" data-category="analytics">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXX');
</script>
```
