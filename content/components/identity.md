---
title: "Identity"
description: "Avatars, Badges, and User representations."
menu:
  main:
    parent: "components-simple"
---

## Badges
Used for status indicators. Supports **Soft** (Default), **Solid**, and **Outline** variants.

{{< demo >}}
<div class="l-stack">
  <div class="l-cluster">
    <span class="badge badge--soft">Default</span>
    <span class="badge badge--soft badge--primary">Primary</span>
    <span class="badge badge--soft badge--success">Success</span>
    <span class="badge badge--soft badge--warning">Warning</span>
    <span class="badge badge--soft badge--error">Error</span>
  </div>
  <div class="l-cluster">
    <span class="badge badge--solid badge--primary">New</span>
    <span class="badge badge--outline badge--success">Verified</span>
  </div>
</div>
{{< /demo >}}

## Avatars
Handles images, initials, and status indicators.

{{< demo >}}
<div class="l-stack">
  <div class="l-cluster" >
    <div class="avatar avatar--xl"><img src="https://i.pravatar.cc/150?u=a" alt=""></div>
    <div class="avatar avatar--lg"><img src="https://i.pravatar.cc/150?u=b" alt=""></div>
    <div class="avatar avatar--md"><img src="https://i.pravatar.cc/150?u=c" alt=""></div>
    <div class="avatar avatar--sm"><img src="https://i.pravatar.cc/150?u=d" alt=""></div>
  </div>

  <div class="l-cluster">
    <div class="avatar" >JD</div>
    <div class="avatar" >AB</div>
  </div>

  <div class="l-cluster">
    <div class="avatar">
      <img src="https://i.pravatar.cc/150?u=10" alt="">
      <span class="avatar__status avatar__status--online" title="Online"></span>
    </div>
    <div class="avatar">
      <img src="https://i.pravatar.cc/150?u=11" alt="">
      <span class="avatar__status avatar__status--busy" title="Busy"></span>
    </div>
  </div>
</div>
{{< /demo >}}

## Avatar Group
Stacking avatars for teams or participants.

{{< demo >}}
<div class="avatar-group">
  <div class="avatar"><img src="https://i.pravatar.cc/150?u=20" alt=""></div>
  <div class="avatar"><img src="https://i.pravatar.cc/150?u=21" alt=""></div>
  <div class="avatar"><img src="https://i.pravatar.cc/150?u=22" alt=""></div>
  <div class="avatar avatar--more">+5</div>
</div>
{{< /demo >}}
