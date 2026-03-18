---
title: "Report an Issue"
description: "A functional form page for reporting a community issue."
menu:
  main:
    parent: "gov"
---

This page demonstrates a map-based reporting form, typical in local government digital services.

{{< demo >}}
<div style="padding: 2rem; background: #fff; font-family: Helvetica, Arial, sans-serif; color: #0b0c0c; border: 1px solid var(--ds-sys-color-border); border-radius: 8px;">
  <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">Report a local issue</h1>
  <p style="font-size: 1.1875rem; margin-bottom: 2rem;">Use this service to report problems like potholes, graffiti, or broken streetlights.</p>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
    <div>
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; font-weight: 700; font-size: 1.1875rem; margin-bottom: 0.5rem;">Issue Type</label>
        <select style="width: 100%; padding: 0.5rem; font-size: 1rem; border: 2px solid #0b0c0c;">
          <option>Pothole</option>
          <option>Graffiti</option>
          <option>Broken Streetlight</option>
          <option>Other</option>
        </select>
      </div>
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; font-weight: 700; font-size: 1.1875rem; margin-bottom: 0.5rem;">Description</label>
        <textarea style="width: 100%; height: 100px; padding: 0.5rem; font-size: 1rem; border: 2px solid #0b0c0c;"></textarea>
      </div>
      <button style="background: #00703c; color: white; border: none; padding: 0.75rem 1.5rem; font-size: 1.5rem; font-weight: 700; cursor: pointer; border-bottom: 4px solid #002d18;">Submit Report</button>
    </div>
    
    <div style="background: #f3f2f1; border: 2px solid #b1b4b6; display: flex; justify-content: center; align-items: center; min-height: 300px;">
      <span style="color: #505a5f; font-weight: 700;">Interactive Map View</span>
    </div>
  </div>
</div>
{{< /demo >}}
