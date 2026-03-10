---
title: "Alert Banner"
description: "Sticky, dismissible notifications appearing at the top of the interface."
category: "Typography"
menu:
  main:
    parent: "typography"
---

The `Alert Banner` is specifically designed for high-priority global communications like Breaking News, System Outages, or Cookie Consents.

It sits securely at the top of the viewport (`position: sticky`), ensuring visibility even when scrolling, and features built-in `localStorage` tracking so dismissed banners stay dismissed.

> [!TIP]
> **State Persistence:** Give your banner a unique HTML `id="my-custom-news"`. When a user clicks the dismiss button, `alert-banner.js` will permanently tie that ID to their local browser cache.

## 1. Information / News

The default alert block using primary colors.

{{< demo >}}
<!-- Adding min-height to the demo container purely so the sticky behavior can be witnessed on scroll -->
<div style="height: 300px; overflow-y: auto; position: relative; border: 1px dotted #ccc;">
  
  <div class="alert-banner alert-banner--news" id="demo-banner-news">
    <div class="alert-banner__content">
      <span class="material-symbols-outlined">campaign</span>
      <span><strong>Update 2.5 is live!</strong> Check out the shiny new Typography components we just launched. <a href="#" style="color: inherit; text-decoration: underline;">Read the changelog</a></span>
    </div>
    <button class="alert-banner__close" title="Dismiss" aria-label="Dismiss Alert">
      <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
    </button>
  </div>
  
  <div style="padding: 2rem;">
    <p>Scroll down to see the banner stick to the ceiling!</p>
    <br><br><br><br><br><br><br><br><br><br>
    <p>...It's still there until you dismiss it.</p>
  </div>
</div>
{{< /demo >}}


## 2. Critical Warning

Swap to the `.alert-banner--critical` class for severe outages or billing failures.

{{< demo >}}
<div class="alert-banner alert-banner--critical" id="demo-banner-critical">
  <div class="alert-banner__content">
    <span class="material-symbols-outlined">warning</span>
    <span><strong>Action Required:</strong> Your credit card has expired. Please update your payment method to avoid service interruption.</span>
  </div>
  <button class="alert-banner__close" title="Dismiss" aria-label="Dismiss Alert">
    <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
  </button>
</div>
{{< /demo >}}

## 3. Persistent State Verification

Since we are testing the component, if you dismissed the banners above, they won't come back even if you refresh! 

You must manually clear the internal memory of this page or click the button below to purge the local cache and make them reappear.

{{< demo >}}
<button class="btn btn--primary" onclick="clearBannerMemory()">
  Force Banners to Return
</button>

<script>
  function clearBannerMemory() {
    localStorage.removeItem('aurora-dismissed-demo-banner-news');
    localStorage.removeItem('aurora-dismissed-demo-banner-critical');
    alert("Memory cleared! Refresh the page to see the banners again.");
  }
</script>
{{< /demo >}}
