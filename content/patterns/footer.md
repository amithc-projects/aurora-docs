---
title: "Footer"
category: "Patterns"
description: "Page terminators with links and legal info."
menu:
  main:
    parent: "patterns"
---

## Simple Footer
Standard layout with copyright and links.

{{< demo >}}
<footer style="border-top: 1px solid var(--ds-sys-color-border); padding: 2rem 0; margin-top: 2rem;">
  <div class="l-grid" style="--col-min: 200px; gap: 2rem;">
    
    <div>
      <strong>AURORA</strong>
      <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
        Building the future of digital interfaces.
      </p>
    </div>

    <div>
      <h4>Product</h4>
      <ul style="list-style: none; padding: 0; font-size: 0.9rem; line-height: 1.8;">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Enterprise</a></li>
      </ul>
    </div>

    <div>
      <h4>Legal</h4>
      <ul style="list-style: none; padding: 0; font-size: 0.9rem; line-height: 1.8;">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Security</a></li>
      </ul>
    </div>

  </div>
  <div style="text-align: center; font-size: 0.8rem; color: #999; margin-top: 2rem;">
    &copy; 2025 Aurora Systems. All rights reserved.
  </div>
</footer>
{{< /demo >}}
