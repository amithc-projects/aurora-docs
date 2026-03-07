---
title: "Countdown Timer"
description: "A highly flexible SVG countdown component with configurable shapes, background fills, and warning animations."
category: "Components"
menu:
  main:
    parent: "components"
    weight: 50
---

## Overview

The Countdown component provides a visual timer with extensive customization options. It supports various shapes, directions, gradients, and warning states. All styling can be overridden via CSS variables, and behavior is controlled via `data-*` attributes.

## Basic Usage

Include the `data-countdown` attribute, and optionally specify the duration in seconds using `data-duration`. The script will automatically initialize it.

{{< demo >}}
<div style="display: flex; justify-content: center; padding: 2rem;">
    <div data-countdown 
         data-duration="30" 
         data-shape="rectangle">
    </div>
</div>
{{< /demo >}}

## Shapes & Styles

The timer supports `rectangle`, `circle`, `triangle`, `heart`, `star`, and `custom` shapes.

{{< demo >}}
<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; padding: 2rem;">
    <!-- Circle with clockwise direction and interval ticks -->
    <div data-countdown 
         data-duration="45" 
         data-shape="circle" 
         data-direction="clockwise"
         data-interval="15" 
         data-interval-ticks="true"></div>

    <!-- Triangle with counter-clockwise direction and no background -->
    <div data-countdown 
         data-duration="45" 
         data-shape="triangle" 
         data-direction="counter-clockwise"
         data-interval="15" 
         data-interval-ticks="true"></div>

    <!-- Heart with fill-v (vertical fill) background style -->
    <div data-countdown 
         data-duration="60" 
         data-shape="heart" 
         data-border-style="none" 
         data-background-style="fill-v"></div>
</div>
{{< /demo >}}

## Background Fills & Animations

{{< demo >}}
<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; padding: 2rem;">
    <!-- Conic Fill -->
    <div data-countdown 
         data-duration="60" 
         data-shape="circle" 
         data-background-style="conic-f"
         data-border-style="empty"></div>

    <!-- Empty Vertical Drop -->
    <div data-countdown 
         data-duration="60" 
         data-shape="rectangle" 
         data-background-style="empty-v"
         data-border-style="empty"></div>

    <!-- Fill Horizontal -->
    <div data-countdown 
         data-duration="60" 
         data-shape="triangle" 
         data-border-style="fill"
         data-background-style="conic-f" 
         data-direction="counter-clockwise"></div>
</div>
{{< /demo >}}

## Warning States

You can trigger special animations when the timer reaches a critical threshold (e.g. 10 seconds). Available styles include `color-only`, `pulse`, `glow`, and `fill-warn`.

{{< demo >}}
<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; padding: 2rem;">
    <!-- Pulse Warning -->
    <div data-countdown 
         data-duration="15" 
         data-shape="rectangle" 
         data-warning-style="pulse" 
         data-warning-threshold="10"></div>

    <!-- Glow Warning -->
    <div data-countdown 
         data-duration="15" 
         data-shape="circle" 
         data-warning-style="glow" 
         data-warning-threshold="10"></div>

    <!-- Flash Fill Warning -->
    <div data-countdown 
         data-duration="15" 
         data-shape="rectangle" 
         data-border-style="empty" 
         data-warning-style="fill-warn" 
         data-warning-threshold="10"></div>
</div>
{{< /demo >}}

## Combined Presets

Mix and match properties to create completely different experiences.

{{< demo >}}
<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; padding: 2rem;">
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--ds-sys-color-on-surface-variant);">Quiz Timer</span>
        <div data-countdown 
             data-duration="90" 
             data-shape="rectangle" 
             data-direction="counter-clockwise" 
             data-warning-style="pulse" 
             data-warning-threshold="10" 
             data-interval="30" 
             data-interval-ticks="true"></div>
    </div>

    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--ds-sys-color-on-surface-variant);">Minimal Monochrome</span>
        <div data-countdown 
             data-duration="60" 
             data-shape="rectangle" 
             data-border-style="fill" 
             data-background-style="none" 
             data-direction="counter-clockwise" 
             data-interval-ticks="false" 
             data-interval-beeps="false"></div>
    </div>

</div>
{{< /demo >}}

## Configuration Settings

You can add any combination of the following `data-*` attributes to adapt the timer.

| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-duration` | Total seconds | `30` |
| `data-shape` | `rectangle`, `circle`, `triangle`, `heart`, `star`, or `custom` | `rectangle` |
| `data-border-style` | `none`, `empty`, or `fill` | `empty` |
| `data-background-style` | `none`, `fill-v`, `empty-v`, `fill-h`, `empty-h`, `conic-f`, `conic-e` | `none` |
| `data-direction` | `clockwise` or `counter-clockwise` | `counter-clockwise` |
| `data-warning-style` | `none`, `color-only`, `pulse`, `fill-warn`, `glow` | `none` |
| `data-warning-threshold` | Seconds remaining to trigger warning UI | `5` |
| `data-interval` | Pacing intervals in seconds (adds ticks & beeps) | `5` |
| `data-interval-ticks` | `true` or `false` to show/hide ticks | `true` |
