---
title: "Tooltips"
category: "Molecules"
description: "Contextual information revealed on hover or focus."
menu:
  main:
    parent: "molecules"
---

## Rich Tooltip
We use a data attribute or wrapper to position the tip.

{{< demo >}}
<div style="padding: 2rem; text-align: center;">
  
<section class="card" >
      <h3>Rich Tooltips</h3>
      <p>Using <code>anchor()</code> positioning and the <code>popover</code> API.</p>
      
      <div class="l-cluster" >
        
        <button class="secondary tooltip-trigger" 
                id="btn-basic" 
                style="anchor-name: --anchor-basic">
          Hover for Basic Info
        </button>

        <div class="tooltip" 
             id="tip-basic" 
             popover="manual" 
             style="position-anchor: --anchor-basic"> Simple text tooltip.
        </div>


        <button class="primary tooltip-trigger" 
                id="btn-rich" 
                style="anchor-name: --anchor-rich">
          Hover for Rich HTML
        </button>

        <div class="tooltip tooltip--rich" 
             id="tip-rich" 
             popover="manual" 
             style="position-anchor: --anchor-rich">
          
          <span class="tooltip__title">User Profile</span>
          <div >
            <div class="avatar avatar--sm"><img src="https://i.pravatar.cc/150?u=rich" alt=""></div>
            <div>
              <div >Jane Doe</div>
              <div >Full Stack Dev</div>
            </div>
          </div>
          <div >
            <span class="badge badge--soft badge--success">Online</span>
            <span >Last seen 5m ago</span>
          </div>

        </div>

      </div>
      
      <p >
        <strong>Note:</strong> Requires Chrome/Edge 125+ for Anchor Positioning logic. 
        If it appears in the top-left corner, your browser does not support CSS Anchors yet.
      </p>
        <script>
    (function() {
        const storedTheme = localStorage.getItem('aurora-theme') || 'corporate';
        document.body.setAttribute('data-theme', storedTheme);
    })();

    // --- TOOLTIP CONTROLLER ---
    // CSS handles the positioning (Anchors). 
    // JS handles the lifecycle (Show/Hide popover on hover).
    
    document.querySelectorAll('.tooltip-trigger').forEach(trigger => {
      // Find the tooltip that is linked to this anchor
      // In a real app, you might use data-attributes to link them.
      // Here we assume the ID convention: btn-X -> tip-X
      const tooltipId = trigger.id.replace('btn-', 'tip-');
      const tooltip = document.getElementById(tooltipId);
      
      if(tooltip) {
        trigger.addEventListener('mouseenter', () => tooltip.showPopover());
        trigger.addEventListener('mouseleave', () => tooltip.hidePopover());
        trigger.addEventListener('focus', () => tooltip.showPopover());
        trigger.addEventListener('blur', () => tooltip.hidePopover());
      }
    });
  </script>
    </section>

</div>
{{< /demo >}}
### Implementation Note: Why JavaScript?
While simple tooltips can be done with pure CSS, we use JavaScript here for two critical reasons:

1.  **Top Layer Protection:** We use the native \`popover\` API. This places the tooltip in the browser's **Top Layer**, ensuring it is never cut off (clipped) by parent containers with \`overflow: hidden\` (like a scrolling sidebar or card).
2.  **Hover Support:** The native \`popover\` attribute only supports **Click** interactions (\`popovertarget\`). To make it work on **Hover** (which is standard for tooltips), we use a tiny JavaScript observer to call \`showPopover()\` on \`mouseenter\`.

**Browser Support:** This relies on **CSS Anchor Positioning**, which requires Chrome/Edge 125+.
