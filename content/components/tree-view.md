---
title: "Tree View"
description: "A nested, collapsible hierarchy component supporting custom icons. Initializes dynamically from either deeply nested HTML lists or raw JSON objects."
category: "Navigation"
menu:
  main:
    parent: "components"
---

The Aurora Tree View transforms standard representations of nested data into an interactive, animated, and accessible file-tree style component. It perfectly utilizes CSS Grid `0fr / 1fr` hacks for buttery smooth expand/collapse animations regardless of content depth.

---

## 1. Initialized via HTML (Site Menu Example)
You can directly author standard semantic `<ul>` and `<li>` lists. The JS controller automatically injects the carets, padding, and layout wrappers on page load. Use `data-initial-state="expanded"` to render the tree fully open.

In this example, we represent a slice of a site's Navigation hierarchy.
Link tags (`<a>`) inside the `<li>` nodes are preserved so they remain clickable.

{{< demo >}}
<div style="max-width: 300px; padding: 1rem; border-right: 1px solid var(--ds-sys-color-border);">
    <div data-tree-view data-initial-state="expanded">
        <ul>
            <li data-icon="dashboard"><a href="#">Dashboard</a></li>
            <li>Marketing
                <ul>
                    <li data-icon="campaign">Campaigns</li>
                    <li data-icon="mail">Newsletters</li>
                    <li data-icon="bar_chart">Analytics</li>
                </ul>
            </li>
            <li>System Settings
                <ul>
                    <li data-icon="group">Users</li>
                    <li data-icon="security" class="is-active">Security Roles</li>
                    <li data-icon="database">Database Mappings</li>
                </ul>
            </li>
            <li data-icon="logout"><a href="#" style="color: var(--ds-sys-color-error)">Log Out</a></li>
        </ul>
    </div>
</div>
{{< /demo >}}

---

## 2. Initialized via JSON (File System Example)
If your data comes from an API or is too complex to write in HTML, you can drop a `<script type="application/json">` block inside the wrapper. The controller parses the JSON and recursively builds the DOM nodes itself. 

By default, nodes collapse. We map `data-icon` natively across nodes, showcasing how to represent images, videos, and code files.

{{< demo >}}
<div style="max-width: 350px; padding: 1rem; border-right: 1px solid var(--ds-sys-color-border);">
    <div data-tree-view id="jsonTreeDemo">
        <script type="application/json">
        [
            {
                "id": "root",
                "label": "Project Repository",
                "icon": "source_notes",
                "children": [
                    {
                        "id": "src",
                        "label": "src",
                        "children": [
                            {
                                "id": "components",
                                "label": "components",
                                "children": [
                                    { "id": "btn", "label": "Button.tsx", "icon": "code_blocks" },
                                    { "id": "card", "label": "Card.tsx", "icon": "code_blocks" }
                                ]
                            },
                            { "id": "utils", "label": "utils.ts", "icon": "code_blocks" }
                        ]
                    },
                    {
                        "id": "assets",
                        "label": "assets",
                        "children": [
                            { "id": "img1", "label": "hero-bg.jpg", "icon": "image" },
                            { "id": "vid1", "label": "demo-loop.mp4", "icon": "movie" }
                        ]
                    },
                    { "id": "pkg", "label": "package.json", "icon": "data_object" },
                    { "id": "md", "label": "README.md", "icon": "markdown" }
                ]
            }
        ]
        </script>
    </div>
    
    <!-- Action Log -->
    <div id="treeLog" style="margin-top: 2rem; font-size: 0.8rem; color: var(--ds-sys-color-on-surface-variant);">
        <em>Click a file to select it...</em>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const tree = document.getElementById('jsonTreeDemo');
    const log = document.getElementById('treeLog');

    tree.addEventListener('tree:select', (e) => {
        // Only react to leaf nodes (files) to show specific behavior
        if (!e.detail.node.querySelector('ul')) {
            log.innerHTML = `Running logic for file ID: <strong>${e.detail.id}</strong>`;
        }
    });
});
</script>
{{< /demo >}}
