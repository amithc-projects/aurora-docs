---
title: "Navigation"
category: "Patterns"
description: "Global headers, local sub-navigation, and user identity components."
menu:
  main:
    parent: "patterns"
---

## 1. Profile Status Component
Used in the top-right of the Global Navigation to indicate login state.

{{< demo >}}
<div style="background: #222; padding: 1rem; display: flex; gap: 2rem; justify-content: center; color: white;">
  
  <a href="#" class="profile-status profile-status--anon">
    <div class="profile-status__media">
      <span class="material-symbols-outlined">person</span>
    </div>
    <div class="profile-status__info">
      <span class="profile-status__name">Sign In</span>
    </div>
  </a>

  <a href="#" class="profile-status profile-status--user">
    <div class="profile-status__media">
      <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User Avatar">
    </div>
    <div class="profile-status__info">
      <span class="profile-status__name">Jane Doe</span>
      <span class="profile-status__meta">Premium Member</span>
    </div>
  </a>

</div>
{{< /demo >}}

---

## 2. Global Navigation
The primary masthead. Contains branding, top-level links, search, and identity.

### A. Desktop (Full Width)
Standard view with expanded menu links.

{{< demo >}}
<header class="nav-global">
  <div class="nav-global__container">
    
    <div class="nav-global__left">
      <div style="font-weight:900; font-size:1.2rem; letter-spacing:-1px;">AURORA</div>
      <nav class="nav-global__menu">
        <a href="#" class="nav-link">News</a>
        <a href="#" class="nav-link">Sport</a>
        <a href="#" class="nav-link">Weather</a>
        <a href="#" class="nav-link">iPlayer</a>
        <a href="#" class="nav-link">Sounds</a>
      </nav>
    </div>

    <div class="nav-global__right">
      <div class="search-group">
        <span class="material-symbols-outlined search-icon">search</span>
        <input type="text" class="search-input" placeholder="Search Aurora...">
      </div>
      
      <a href="#" class="profile-status profile-status--user">
        <div class="profile-status__media">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d">
        </div>
      </a>
    </div>

  </div>
</header>
{{< /demo >}}

### B. Mobile (Narrow View)
Simulates a 375px device. The menu collapses into a "Hamburger" icon, and search behavior adapts.

{{< demo >}}
<div style="max-width: 375px; border: 4px solid #333; border-radius: 12px; overflow: hidden; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
  
  <header class="nav-global nav-global--narrow">
    <div class="nav-global__container">
      
      <div class="nav-global__left">
        <button class="nav-toggle">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div style="font-weight:900; font-size:1.2rem;">AURORA</div>
        </div>

      <div class="nav-global__right" style="gap: 0.5rem;">
        <div class="search-group">
          <span class="material-symbols-outlined search-icon">search</span>
          <input type="text" class="search-input" placeholder="">
        </div>
        
        <a href="#" class="profile-status profile-status--anon">
          <div class="profile-status__media">
            <span class="material-symbols-outlined">person</span>
          </div>
        </a>
      </div>

    </div>
  </header>

  <div style="height: 200px; background: #f4f4f4; padding: 1rem;">
    <p style="opacity: 0.5;">Page content...</p>
  </div>
</div>
{{< /demo >}}

---

## 3. Local Navigation (Site Nav)
Used for sub-sections (e.g., News categories).

### A. Desktop (Full Width)
{{< demo >}}
<div class="nav-local">
  <div class="nav-local__container">
    <a href="#" class="nav-local__brand">NEWS</a>
    <nav class="nav-local__menu">
      <a href="#" class="is-active">Home</a>
      <a href="#">Israel-Gaza War</a>
      <a href="#">War in Ukraine</a>
      <a href="#">Climate</a>
      <a href="#">Video</a>
      <a href="#">World</a>
      <a href="#">UK</a>
      <a href="#">Business</a>
      <a href="#">Tech</a>
      <a href="#">Science</a>
    </nav>
  </div>
</div>
{{< /demo >}}

### B. Mobile (Scrollable)
On narrow screens, the menu remains horizontal but becomes scrollable (swipable).

{{< demo >}}
<div style="max-width: 375px; border: 4px solid #333; border-radius: 12px; overflow: hidden; margin: 0 auto;">
  
  <div class="nav-local nav-local--narrow">
    <div class="nav-local__container">
      <a href="#" class="nav-local__brand">NEWS</a>
      <nav class="nav-local__menu">
        <a href="#" class="is-active">Home</a>
        <a href="#">War</a>
        <a href="#">Climate</a>
        <a href="#">Video</a>
        <a href="#">World</a>
        <a href="#">UK</a>
        <a href="#">Business</a>
      </nav>
    </div>
  </div>

  <div style="height: 150px; background: #fff; padding: 1rem;">
    <h2>Top Stories</h2>
    <p>Scroll the red bar above horizontally to see more links.</p>
  </div>
</div>
{{< /demo >}}

---

## 4. Breadcrumbs
Contextual location markers.

{{< demo >}}
<nav aria-label="Breadcrumb">
  <ul class="list list--breadcrumbs list--breadcrumbs-chevron">
    <li><a href="#">Home</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">World</a></li>
    <li><a href="#">US & Canada</a></li>
    <li>Article</li>
  </ul>
</nav>
{{< /demo >}}
