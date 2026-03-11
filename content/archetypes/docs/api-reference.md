---
title: "API Reference (v2)"
description: "A child page demonstrating technical API endpoint documentation."
---

This is a demonstration of a child page within the **Documentation Portal** archetype.

{{< demo >}}
<div style="padding: 2rem; background: var(--ds-sys-color-surface-container-lowest); font-family: monospace; border: 1px solid var(--ds-sys-color-border); border-radius: 8px;">
  <h2 style="font-family: var(--ds-sys-font-family-base); margin-top: 0; margin-bottom: 1rem;">Authentication</h2>
  <p style="font-family: var(--ds-sys-font-family-base); color: var(--ds-sys-color-on-surface-variant); margin-bottom: 2rem;">Authenticate your API requests using a Bearer token in the `Authorization` header.</p>
  
  <div style="background: var(--ds-sys-color-surface-container-high); padding: 1rem; border-radius: 4px; border-left: 4px solid var(--ds-sys-color-primary); margin-bottom: 2rem;">
    Authorization: Bearer sk_test_your_secret_key
  </div>

  <h3 style="font-family: var(--ds-sys-font-family-base); color: var(--ds-sys-color-on-surface); margin-bottom: 0.5rem;">GET /v1/customers</h3>
  <div style="background: #111; color: #a5d6ff; padding: 1.5rem; border-radius: 4px; overflow-x: auto; font-size: 0.85rem;">
<pre style="margin: 0;"><code>curl https://api.acme.com/v1/customers \
  -H "Authorization: Bearer sk_test_123" \
  -d limit=3</code></pre>
  </div>
</div>
{{< /demo >}}
