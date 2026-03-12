
---
title: "Range & Date"
description: "Advanced controls for time spans and numeric ranges."
weight: 30
menu:
  main:
    parent: "forms-standard"
---

## 1. Dual-Handle Slider (Range)
Select a minimum and maximum value (e.g., Price Range).

{{< demo >}}
<div class="field">
  <label class="field__label">Price Range ($)</label>
  <div class="range-slider">
    <div class="slider-track"></div>
    
    <input type="range" min="0" max="1000" value="250" id="slider-1" oninput="slideOne()">
    <input type="range" min="0" max="1000" value="750" id="slider-2" oninput="slideTwo()">
    
    <div class="slider-val" id="val-1">250</div>
    <div class="slider-val" id="val-2">750</div>
  </div>
</div>



<script>
  function slideOne() {
    const s1 = document.getElementById("slider-1");
    const s2 = document.getElementById("slider-2");
    const track = document.querySelector(".slider-track");
    const minGap = 50; // Minimum distance between handles

    if (parseInt(s2.value) - parseInt(s1.value) <= minGap) {
      s1.value = parseInt(s2.value) - minGap;
    }
    updateTrack(s1, s2, track);
  }

  function slideTwo() {
    const s1 = document.getElementById("slider-1");
    const s2 = document.getElementById("slider-2");
    const track = document.querySelector(".slider-track");
    const minGap = 50;

    if (parseInt(s2.value) - parseInt(s1.value) <= minGap) {
      s2.value = parseInt(s1.value) + minGap;
    }
    updateTrack(s1, s2, track);
  }

  function updateTrack(s1, s2, track) {
    const min = parseInt(s1.min);
    const max = parseInt(s1.max);
    const percent1 = ((s1.value - min) / (max - min)) * 100;
    const percent2 = ((s2.value - min) / (max - min)) * 100;
    
    // Color the track between the two points
    track.style.background = `linear-gradient(to right, #ddd ${percent1}%, var(--ds-sys-color-primary) ${percent1}%, var(--ds-sys-color-primary) ${percent2}%, #ddd ${percent2}%)`;
    
    // Update text labels
    document.getElementById("val-1").innerText = s1.value;
    document.getElementById("val-1").style.left = percent1 + "%";
    document.getElementById("val-2").innerText = s2.value;
    document.getElementById("val-2").style.left = percent2 + "%";
  }
  
  // Init
  window.addEventListener('load', () => slideOne());
</script>
{{< /demo >}}

## 2. Date Range
Linked start and end dates.

{{< demo >}}
<div class="field">
  <label class="field__label">Event Duration</label>
  <div class="l-grid" style="gap: 1rem; --col-min: 150px;">
    
    <div class="input-group">
      <span class="input-prefix" style="background:transparent; border:none; padding-left:0; font-size:0.9rem; color:#666;">From</span>
      <input type="date" class="input" id="date-start" onchange="validateDates()">
    </div>

    <div class="input-group">
      <span class="input-prefix" style="background:transparent; border:none; padding-left:0; font-size:0.9rem; color:#666;">To</span>
      <input type="date" class="input" id="date-end" onchange="validateDates()">
    </div>
    
  </div>
  <div class="field__hint" id="date-msg" style="color: var(--ds-sys-color-error); display:none;">End date cannot be before start date.</div>
</div>

<script>
  function validateDates() {
    const start = document.getElementById('date-start');
    const end = document.getElementById('date-end');
    const msg = document.getElementById('date-msg');
    
    if(start.value && end.value) {
      if(start.value > end.value) {
        msg.style.display = 'block';
        end.style.borderColor = 'var(--ds-sys-color-error)';
      } else {
        msg.style.display = 'none';
        end.style.borderColor = '';
      }
    }
    // Auto-update min for end date
    if(start.value) end.min = start.value;
  }
</script>
{{< /demo >}}

## 3. Time Duration
A composite picker for precise time spans.

{{< demo >}}
<div class="field">
  <label class="field__label">Estimated Effort</label>
  <div class="duration-picker">
    
    <div class="duration-unit">
      <input type="number" min="0" placeholder="00" class="input" style="text-align:center;">
      <span class="unit-label">Hrs</span>
    </div>
    
    <span class="separator">:</span>
    
    <div class="duration-unit">
      <input type="number" min="0" max="59" placeholder="00" class="input" style="text-align:center;">
      <span class="unit-label">Mins</span>
    </div>

  </div>
</div>


{{< /demo >}}
