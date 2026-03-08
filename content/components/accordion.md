---
title: "Accordion"
description: "Expandable sections with robust ARIA semantics and pure CSS animations."
category: "Components"
menu:
  main:
    parent: "components"
    weight: 20
---

## Default (Multiple Open)
By default, accordions allow multiple panels to be open simultaneously (`data-mode="multiple"` is implied). 

{{< demo >}}
<div class="accordion">
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="true" aria-controls="p1" id="t1">
        What is a design token?
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel is-open" id="p1" role="region" aria-labelledby="t1">
      <div class="accordion-body">
        <div class="accordion-inner">A design token is a named value that stores a design decision — a colour, spacing value, border radius, or shadow. Tokens allow design and code to share a single source of truth.</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p2" id="t2">
        How does theme switching work?
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p2" role="region" aria-labelledby="t2">
      <div class="accordion-body">
        <div class="accordion-inner">Aurora uses <code>data-theme</code> and <code>data-mode</code> attributes on the <code>&lt;html&gt;</code> element. Each theme overrides a set of semantic CSS tokens without touching component markup.</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p3" id="t3">
        Can I create a custom theme?
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p3" role="region" aria-labelledby="t3">
      <div class="accordion-body">
        <div class="accordion-inner">Yes. See the <strong>Theming Guide</strong> for step-by-step instructions. You need to define a brand colour ramp, wire semantic tokens, and optionally override typography and radius defaults. Light and dark mode variants of your brand colours are both required.</div>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Single Open Mode
Add the `data-mode="single"` attribute to the container to ensure only one item can be open at a time.

{{< demo >}}
<div class="accordion" data-mode="single">
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p4" id="t4">
        Strength
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p4" role="region" aria-labelledby="t4">
      <div class="accordion-body">
        <div class="accordion-inner">
          Upper body, lower body, and full-body strength protocols. Progressive overload templates for intermediate and advanced lifters.
          <div class="stat-row">
            <div class="stat-pill"><strong>24</strong> programmes</div>
            <div class="stat-pill"><strong>3–5</strong> days/week</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="true" aria-controls="p5" id="t5">
        Cardio
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel is-open" id="p5" role="region" aria-labelledby="t5">
      <div class="accordion-body">
        <div class="accordion-inner">
          Running, cycling, rowing and HIIT protocols. Heart rate zone training with auto-calculated targets based on your fitness data.
          <div class="stat-row">
            <div class="stat-pill"><strong>18</strong> programmes</div>
            <div class="stat-pill"><strong>2–6</strong> days/week</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Flush Variant
Add the `.accordion-flush` class to remove the outer borders and corner radii. Useful when embedding the accordion inside another card or container.

{{< demo >}}
<div class="accordion accordion-flush">
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p6" id="t6">
        Notifications
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p6" role="region" aria-labelledby="t6">
      <div class="accordion-body">
        <div class="accordion-inner">Configure email, push, and in-app notification preferences per category.</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p7" id="t7">
        Privacy
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p7" role="region" aria-labelledby="t7">
      <div class="accordion-body">
        <div class="accordion-inner">Control data sharing, activity visibility, and third-party integrations.</div>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

## Separated Variant
Add the `.accordion-separated` class to remove borders and replace them with individual box-shadows and spatial gaps between items. This example also demonstrates embedding icons inside the trigger using `.trigger-content` and `.trigger-slot`.

{{< demo >}}
<div class="accordion accordion-separated">
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p8" id="t8">
        <div class="trigger-content">
          <div class="trigger-slot">
            <span class="material-symbols-outlined">history</span>
          </div>
          Workout history
        </div>
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p8" role="region" aria-labelledby="t8">
      <div class="accordion-body">
        <div class="accordion-inner">View and export your full workout history. Filter by date range, workout type, or personal records.</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3>
      <button class="accordion-trigger" aria-expanded="false" aria-controls="p9" id="t9">
        <div class="trigger-content">
          <div class="trigger-slot">
            <span class="material-symbols-outlined">trending_up</span>
          </div>
          Progress metrics
        </div>
        <span class="material-symbols-outlined accordion-icon">expand_more</span>
      </button>
    </h3>
    <div class="accordion-panel" id="p9" role="region" aria-labelledby="t9">
      <div class="accordion-body">
        <div class="accordion-inner">Track volume, intensity, frequency, and recovery scores over time. Compare against your baseline and training goals.</div>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}
