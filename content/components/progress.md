---
title: "Progress Bar"
description: "Communicates the completion status of an operation with a known percentage or duration."
menu:
  main:
    parent: "components"
---

A Progress Bar communicates the completion status of an operation with a known percentage or duration.

## Determinate (Sizes)

Determinate progress bars have a known completion value. They come in four sizes: `xs` (page loading), `sm` (default), `md` (file uploads), and `lg` (storage meters).

{{< demo >}}
<div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
  <div class="progress-wrap">
    <div class="progress-label-row"><span>xs — page loading</span><span>72%</span></div>
    <div class="progress-track progress-track-xs"><div class="progress-fill" style="width:72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="Page loading"></div></div>
  </div>
  
  <div class="progress-wrap">
    <div class="progress-label-row"><span>sm — default</span><span>45%</span></div>
    <div class="progress-track progress-track-sm"><div class="progress-fill" style="width:45%" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="Progress"></div></div>
  </div>
  
  <div class="progress-wrap">
    <div class="progress-label-row"><span>md — file upload</span><span>83%</span></div>
    <div class="progress-track progress-track-md"><div class="progress-fill" style="width:83%" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"></div></div>
  </div>
  
  <div class="progress-wrap">
    <div class="progress-label-row"><span>lg — storage meter</span><span>91% used</span></div>
    <div class="progress-track progress-track-lg"><div class="progress-fill progress-fill-danger" style="width:91%" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" aria-label="Storage: 91% used"></div></div>
  </div>
</div>
{{< /demo >}}

## Indeterminate

For operations where the duration is unknown, use an indeterminate progress bar. It features a sweeping animation that respects user `prefers-reduced-motion` settings.

{{< demo >}}
<div style="padding: 1rem; width: 100%;">
  <div class="progress-track progress-track-sm progress-indeterminate"><div class="progress-fill" role="progressbar" aria-label="Loading"></div></div>
</div>
{{< /demo >}}

## Segmented

A segmented progress bar divides the progress into discrete steps. Useful for wizards or multi-step forms.

{{< demo >}}
<div style="padding: 1rem;">
  <div class="progress-label-row" style="margin-bottom: 0.5rem;"><span>Complete your profile</span><span>3 of 5</span></div>
  <div class="progress-segmented" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" aria-label="3 of 5 steps complete">
    <div class="progress-segment filled"></div>
    <div class="progress-segment filled"></div>
    <div class="progress-segment filled"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
  </div>
</div>
{{< /demo >}}

## Stacked

Stacked progress bars can show multiple values in a single element. Often used for complex storage metrics.

{{< demo >}}
<div style="padding: 1rem;">
  <div class="progress-label-row"><span>128 GB used of 256 GB</span><span>50%</span></div>
  <div class="progress-stacked progress-track-lg" role="progressbar" aria-label="Disk usage: 50%">
    <div class="stack-segment" style="width:28%; background: var(--ds-sys-color-primary);" title="Apps 72GB"></div>
    <div class="stack-segment" style="width:14%; background: #8b5cf6;" title="Photos 36GB"></div>
    <div class="stack-segment" style="width:8%; background: #22c55e;" title="Music 20GB"></div>
  </div>
  <div style="display: flex; gap: 1rem; margin-top: 0.75rem; flex-wrap: wrap;">
    <span style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-subtle); display: flex; align-items: center; gap: 0.375rem;"><span style="width: 8px; height: 8px; border-radius: 2px; background: var(--ds-sys-color-primary); display: inline-block;"></span>Apps 72 GB</span>
    <span style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-subtle); display: flex; align-items: center; gap: 0.375rem;"><span style="width: 8px; height: 8px; border-radius: 2px; background: #8b5cf6; display: inline-block;"></span>Photos 36 GB</span>
    <span style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-subtle); display: flex; align-items: center; gap: 0.375rem;"><span style="width: 8px; height: 8px; border-radius: 2px; background: #22c55e; display: inline-block;"></span>Music 20 GB</span>
  </div>
</div>
{{< /demo >}}
