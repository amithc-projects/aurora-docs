---
title: "Documentation Portal"
description: "A dual-view archetype demonstrating a Documentation Homepage and a Component Specification Page, inspired by Tailwind CSS and React docs."
menu:
  main:
    parent: "archetypes"
    identifier: "docs"
---

The Documentation Portal archetype features two structures: a clean, lightweight landing page optimized for search, and an intricate three-column layout (Sidebar Toolbar, Main Content, "On this page" Outline) for technical reading.

## 1. Documentation Homepage
A stripped-down, lightweight view designed specifically to guide users immediately into the search function or primary Quick Start guides.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-bg-app); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Global Navigation -->
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border);">
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div style="font-weight: 800; font-size: 1.2rem; letter-spacing: -0.5px; color: var(--ds-sys-color-primary);">Aurora Docs</div>
      <nav style="display: flex; gap: 1.5rem; font-size: 0.9rem; font-weight: 500;">
        <span style="color: var(--ds-sys-color-primary); cursor: pointer;">Docs</span>
        <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Components</span>
        <span style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">Blog</span>
      </nav>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 1rem; border-radius: 999px; background: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-border); cursor: pointer;">
        <span class="material-symbols-outlined" style="font-size: 1.1rem; color: var(--ds-sys-color-on-surface-variant);">search</span>
        <span style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-variant);">Search documentation...</span>
        <span style="font-size: 0.75rem; background: var(--ds-sys-color-surface-container-highest); padding: 2px 6px; border-radius: 4px; color: var(--ds-sys-color-on-surface); margin-left: 1rem;">⌘K</span>
      </div>
      <span class="material-symbols-outlined" style="color: var(--ds-sys-color-on-surface-variant); cursor: pointer;">dark_mode</span>
    </div>
  </header>

  <!-- Hero Section -->
  <section style="padding: 5rem 2rem; text-align: center; background: linear-gradient(180deg, var(--ds-sys-color-surface-container-highest) 0%, var(--ds-sys-color-bg-app) 100%);">
    <h1 style="font-size: 3rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface);">
      Rapidly build modern websites.
    </h1>
    <p style="font-size: 1.25rem; color: var(--ds-sys-color-on-surface-variant); max-width: 600px; margin-inline: auto; margin-bottom: 2.5rem;">
      A utility-first CSS framework and component library packed with classes that can be composed to build any design, directly in your markup.
    </p>
    <div style="display: flex; justify-content: center; gap: 1rem;">
      <button class="btn btn-primary" style="padding: 0.75rem 2rem; border-radius: 8px;">Get Started</button>
      <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--ds-sys-color-surface-container-high); border-radius: 8px; border: 1px solid var(--ds-sys-color-border); font-family: monospace; color: var(--ds-sys-color-on-surface-variant);">
        <span>$</span><span style="color: var(--ds-sys-color-on-surface);">npm install aurora-ui</span>
        <span class="material-symbols-outlined" style="font-size: 1rem; cursor: pointer; margin-left: 0.5rem;">content_copy</span>
      </div>
    </div>
  </section>

  <!-- Quick Links Grid -->
  <section style="padding: 2rem 2rem 5rem 2rem;">
    <div class="l-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; max-width: 1000px; margin: 0 auto;">
      
      <div style="padding: 1.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: 12px; background: var(--ds-sys-color-surface); cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <div style="width: 40px; height: 40px; border-radius: 8px; background: var(--ds-sys-color-primary-container); color: var(--ds-sys-color-on-primary-container); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <span class="material-symbols-outlined">menu_book</span>
        </div>
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);">Core Concepts</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem; line-height: 1.5; margin: 0;">Learn the fundamental philosophy, utility classes, and naming conventions behind the engine.</p>
      </div>

      <div style="padding: 1.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: 12px; background: var(--ds-sys-color-surface); cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(56, 189, 248, 0.1); color: #38bdf8; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <span class="material-symbols-outlined">widgets</span>
        </div>
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);">Component Library</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.9rem; line-height: 1.5; margin: 0;">Explore 50+ pre-built, accessible components including dialogs, select menus, and data tables.</p>
      </div>

    </div>
  </section>
</div>
{{< /demo >}}

---

## 2. Specification Reading View
The technical reading view introduces a rigid 3-column architecture designed to keep navigation (left) and context (right) permanently visible while the primary document (center) scrolls independently.

{{< demo >}}
<div style="display: flex; flex-direction: column; width: 100%; height: 600px; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-bg-app); font-family: var(--ds-sys-font-family-base);">
  
  <!-- Condensed Header -->
  <header style="flex-shrink: 0; height: 56px; display: flex; justify-content: space-between; align-items: center; padding: 0 1.5rem; background: var(--ds-sys-color-surface); border-bottom: 1px solid var(--ds-sys-color-border); z-index: 10;">
    <div style="font-weight: 700; font-size: 1rem; color: var(--ds-sys-color-on-surface);">Aurora Docs</div>
    <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.75rem; border-radius: 6px; background: var(--ds-sys-color-surface-container-low); border: 1px solid var(--ds-sys-color-border); color: var(--ds-sys-color-on-surface-variant); font-size: 0.85rem; width: 250px;">
      <span class="material-symbols-outlined" style="font-size: 1rem;">search</span> Search...
    </div>
  </header>

  <!-- 3-Column Layout -->
  <div style="display: grid; grid-template-columns: 240px minmax(0, 1fr) 200px; flex: 1; overflow: hidden;">
    
    <!-- Left Navigation -->
    <aside style="border-right: 1px solid var(--ds-sys-color-border); overflow-y: auto; padding: 1.5rem; background: var(--ds-sys-color-surface-container-lowest);">
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--ds-sys-color-on-surface); margin-bottom: 0.75rem; letter-spacing: 0.5px;">Getting Started</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
          <span style="color: var(--ds-sys-color-on-surface-variant);">Installation</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Configuration</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Dark Mode</span>
        </div>
      </div>
      <div>
        <h4 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--ds-sys-color-on-surface); margin-bottom: 0.75rem; letter-spacing: 0.5px;">Components</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
          <span style="color: var(--ds-sys-color-primary); font-weight: 500;">Accordion</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Alert</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Button</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Card</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Dropdown</span>
          <span style="color: var(--ds-sys-color-on-surface-variant);">Modal</span>
        </div>
      </div>
    </aside>

    <!-- Main Content Document -->
    <main style="padding: 2.5rem 3rem; overflow-y: auto; background: var(--ds-sys-color-bg-app);">
      <div style="font-size: 0.85rem; color: var(--ds-sys-color-primary); font-weight: 600; margin-bottom: 0.5rem;">Components</div>
      <h1 style="font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; margin-top: 0; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface);">Accordion</h1>
      <p style="font-size: 1.1rem; color: var(--ds-sys-color-on-surface-variant); margin-bottom: 2rem; line-height: 1.6;">A vertically stacked set of interactive headings that each reveal a section of content.</p>
      
      <!-- Interactive Playground Container -->
      <div style="border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <div style="padding: 2rem; background: var(--ds-sys-color-surface-container-lowest); display: flex; justify-content: center; align-items: center;">
          
          <!-- Literal Accordion Mock -->
          <div style="width: 100%; max-width: 400px; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; background: var(--ds-sys-color-surface);">
            <div style="padding: 1rem; border-bottom: 1px solid var(--ds-sys-color-border); display: flex; justify-content: space-between; font-weight: 500;">
              Is it accessible?
              <span class="material-symbols-outlined" style="font-size: 1.2rem;">expand_more</span>
            </div>
            <div style="padding: 1rem; border-bottom: 1px solid var(--ds-sys-color-border); display: flex; justify-content: space-between; font-weight: 500;">
              Is it styled?
              <span class="material-symbols-outlined" style="font-size: 1.2rem;">expand_more</span>
            </div>
            <div style="padding: 1rem; display: flex; justify-content: space-between; font-weight: 500;">
              Can it be animated?
              <span class="material-symbols-outlined" style="font-size: 1.2rem;">expand_more</span>
            </div>
          </div>

        </div>
        <div style="background: #1e1e1e; padding: 1rem; color: #d4d4d4; font-family: monospace; font-size: 0.85rem; overflow-x: auto;">
          <div style="margin-bottom: 0.5rem;"><span style="color: #569cd6;">&lt;details</span> <span style="color: #9cdcfe;">class=</span><span style="color: #ce9178;">"accordion"</span><span style="color: #569cd6;">&gt;</span></div>
          <div style="margin-left: 1rem; margin-bottom: 0.5rem;"><span style="color: #569cd6;">&lt;summary&gt;</span>Is it accessible?<span style="color: #569cd6;">&lt;/summary&gt;</span></div>
          <div style="margin-left: 1rem; margin-bottom: 0.5rem;">Yes. It adheres to the WAI-ARIA design pattern.</div>
          <div><span style="color: #569cd6;">&lt;/details&gt;</span></div>
        </div>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1rem; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 0.5rem;">Installation</h2>
      <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.6;">Run the following cli command or copy and paste the component code into your project.</p>
      
      <!-- Props Table -->
      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1rem; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 0.5rem;">API Reference</h2>
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
        <thead>
          <tr style="border-bottom: 2px solid var(--ds-sys-color-border);">
            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Prop</th>
            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Type</th>
            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Default</th>
          </tr>
        </thead>
        <tbody style="color: var(--ds-sys-color-on-surface-variant);">
          <tr style="border-bottom: 1px solid var(--ds-sys-color-border);">
            <td style="padding: 0.75rem 0.5rem; color: var(--ds-sys-color-primary); font-family: monospace;">type</td>
            <td style="padding: 0.75rem 0.5rem; font-family: monospace;">'single' | 'multiple'</td>
            <td style="padding: 0.75rem 0.5rem;">'single'</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--ds-sys-color-border);">
            <td style="padding: 0.75rem 0.5rem; color: var(--ds-sys-color-primary); font-family: monospace;">collapsible</td>
            <td style="padding: 0.75rem 0.5rem; font-family: monospace;">boolean</td>
            <td style="padding: 0.75rem 0.5rem;">false</td>
          </tr>
        </tbody>
      </table>

    </main>

    <!-- Right Outline (Scrollspy) -->
    <aside style="border-left: 1px solid var(--ds-sys-color-border); padding: 2rem 1.5rem; overflow-y: auto; background: var(--ds-sys-color-surface-container-lowest);">
      <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--ds-sys-color-on-surface); margin-bottom: 1rem;">On this page</h4>
      <div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.85rem; border-left: 2px solid var(--ds-sys-color-border); padding-left: 1rem;">
        <span style="color: var(--ds-sys-color-primary); margin-left: -17px; border-left: 2px solid var(--ds-sys-color-primary); padding-left: 15px; font-weight: 500;">Usage</span>
        <span style="color: var(--ds-sys-color-on-surface-variant);">Installation</span>
        <span style="color: var(--ds-sys-color-on-surface-variant);">Interactive Demo</span>
        <span style="color: var(--ds-sys-color-on-surface-variant);">API Reference</span>
        <span style="color: var(--ds-sys-color-on-surface-variant); margin-left: 1rem;">Props</span>
        <span style="color: var(--ds-sys-color-on-surface-variant); margin-left: 1rem;">Events</span>
        <span style="color: var(--ds-sys-color-on-surface-variant);">Accessibility</span>
      </div>
    </aside>

  </div>
</div>
{{< /demo >}}
