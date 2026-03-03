---
title: "Ultimate Gallery"
description: "Responsive gallery with mixed media (Video/YouTube)."
category: "Components"
menu:
  main:
    parent: "components"
---

## 1. Mixed Media Playlist (Video)
Includes native MP4s and YouTube embeds.

{{< demo >}}
<div class="gallery" data-mode="grid" style="--gallery-item-min: 220px;">
  <ul>
    
    <li>
      <a href="https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4" 
         data-caption="Ocean Waves (MP4)">
        <div class="gallery__play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <img src="https://images.pexels.com/videos/855564/free-video-855564.jpg?auto=compress&cs=tinysrgb&w=600" loading="lazy">
      </a>
    </li>

    <li>
      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" 
         data-caption="Costa Rica (YouTube)">
        <div class="gallery__play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <img src="https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg" loading="lazy">
      </a>
    </li>

    <li>
      <a href="https://picsum.photos/id/1015/1200/800" data-caption="Standard Image">
        <img src="https://picsum.photos/id/1015/300/300" loading="lazy">
      </a>
    </li>

    <li>
      <a href="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" 
         data-caption="Forest Walk (MP4)">
        <div class="gallery__play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        <img src="https://images.pexels.com/videos/3209828/free-video-3209828.jpg?auto=compress&cs=tinysrgb&w=600" loading="lazy">
      </a>
    </li>

  </ul>
</div>
{{< /demo >}}

## 2. Standard Grid (20 Items)
Uniform square crop. Uses `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))`.

{{< demo >}}
<div class="gallery" data-mode="grid">
  <ul>
    <li><a href="https://picsum.photos/id/100/1000/1000"><img src="https://picsum.photos/id/100/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/101/1000/1000"><img src="https://picsum.photos/id/101/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/102/1000/1000"><img src="https://picsum.photos/id/102/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/103/1000/1000"><img src="https://picsum.photos/id/103/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/104/1000/1000"><img src="https://picsum.photos/id/104/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/106/1000/1000"><img src="https://picsum.photos/id/106/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/107/1000/1000"><img src="https://picsum.photos/id/107/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/108/1000/1000"><img src="https://picsum.photos/id/108/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/109/1000/1000"><img src="https://picsum.photos/id/109/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/110/1000/1000"><img src="https://picsum.photos/id/110/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/111/1000/1000"><img src="https://picsum.photos/id/111/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/112/1000/1000"><img src="https://picsum.photos/id/112/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/113/1000/1000"><img src="https://picsum.photos/id/113/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/114/1000/1000"><img src="https://picsum.photos/id/114/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/115/1000/1000"><img src="https://picsum.photos/id/115/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/116/1000/1000"><img src="https://picsum.photos/id/116/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/117/1000/1000"><img src="https://picsum.photos/id/117/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/118/1000/1000"><img src="https://picsum.photos/id/118/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/119/1000/1000"><img src="https://picsum.photos/id/119/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/120/1000/1000"><img src="https://picsum.photos/id/120/300/300" loading="lazy"></a></li>
  </ul>
</div>
{{< /demo >}}

## 3. Masonry Grid (20 Items)
Pinterest type variable height.

{{< demo >}}
<div class="gallery" data-mode="masonry">
  <ul>
    <li><a href="https://picsum.photos/id/200/600/800"><img src="https://picsum.photos/id/200/300/400" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/201/600/400"><img src="https://picsum.photos/id/201/300/200" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/202/600/900"><img src="https://picsum.photos/id/202/300/450" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/203/600/300"><img src="https://picsum.photos/id/203/300/150" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/204/600/600"><img src="https://picsum.photos/id/204/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/206/600/800"><img src="https://picsum.photos/id/206/300/400" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/208/600/400"><img src="https://picsum.photos/id/208/300/200" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/209/600/700"><img src="https://picsum.photos/id/209/300/350" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/210/600/500"><img src="https://picsum.photos/id/210/300/250" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/211/600/300"><img src="https://picsum.photos/id/211/300/150" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/212/600/800"><img src="https://picsum.photos/id/212/300/400" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/213/600/600"><img src="https://picsum.photos/id/213/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/214/600/900"><img src="https://picsum.photos/id/214/300/450" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/215/600/400"><img src="https://picsum.photos/id/215/300/200" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/216/600/600"><img src="https://picsum.photos/id/216/300/300" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/217/600/800"><img src="https://picsum.photos/id/217/300/400" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/218/600/500"><img src="https://picsum.photos/id/218/300/250" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/219/600/700"><img src="https://picsum.photos/id/219/300/350" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/220/600/400"><img src="https://picsum.photos/id/220/300/200" loading="lazy"></a></li>
    <li><a href="https://picsum.photos/id/221/600/800"><img src="https://picsum.photos/id/221/300/400" loading="lazy"></a></li>
  </ul>
</div>
{{< /demo >}}
