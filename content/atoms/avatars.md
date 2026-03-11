---
title: "Avatars"
category: "Atoms"
description: "User profile images and stacks."
menu:
  main:
    parent: "components-simple"
---



## Avatar Group (Stack)
Used to show multiple users (e.g. "3 people liked this").

{{< demo >}}
<div class="avatar-group">
  <img src="https://i.pravatar.cc/150?img=5" class="avatar" alt="">
  <img src="https://i.pravatar.cc/150?img=6" class="avatar" alt="">
  <img src="https://i.pravatar.cc/150?img=7" class="avatar" alt="">
  <span class="avatar avatar--placeholder">+5</span>
</div>
{{< /demo >}}

## Avatar Sizing

{{< demo >}}
<div class="l-cluster" >
  <div class="avatar avatar--xl"><img src="https://i.pravatar.cc/150?u=a" alt=""></div>
  <div class="avatar avatar--lg"><img src="https://i.pravatar.cc/150?u=b" alt=""></div>
  <div class="avatar avatar--md"><img src="https://i.pravatar.cc/150?u=c" alt=""></div>
  <div class="avatar avatar--sm"><img src="https://i.pravatar.cc/150?u=d" alt=""></div>
  <div class="avatar avatar--xs"><img src="https://i.pravatar.cc/150?u=e" alt=""></div>
</div>
{{< /demo >}}

{{< demo >}}
<div class="l-cluster">
  <div class="avatar" >JD</div>
  <div class="avatar" >AB</div>
  <div class="avatar" >X</div>
</div>
{{< /demo >}}

{{< demo >}}
<div class="l-cluster">
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?u=10" alt="">
    <span class="avatar__status avatar__status--online" title="Online"></span>
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?u=11" alt="">
    <span class="avatar__status avatar__status--busy" title="Busy"></span>
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?u=12" alt="">
    <span class="avatar__status avatar__status--away" title="Away"></span>
  </div>
</div>

{{< /demo >}}
