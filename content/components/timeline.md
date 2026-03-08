---
title: "Timeline"
menu:
  main:
    parent: "components"
---

{{< demo >}}
<div class="demo-wrapper">
  <!-- Feed variant -->
  <div class="section">
    <div class="section-label">Feed — workout activity log</div>

    <div class="timeline-date-group">
      <div class="timeline-date-label">Today</div>
      <div class="timeline">
        <!-- Expandable strength session -->
        <div class="timeline-item">
          <div class="timeline-dot dot-brand">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 8h2m8 0h2M4 8a1 1 0 0 1 1-1h1V5.5a.5.5 0 0 1 1 0V7h2V5.5a.5.5 0 0 1 1 0V7h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1v1.5a.5.5 0 0 1-1 0V9H9v1.5a.5.5 0 0 1-1 0V9H7a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.25"/></svg>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div><div class="timeline-title">Upper Body Strength</div><div class="timeline-subtitle">Push day · Gym</div></div>
              <time class="timeline-time">6:15 AM</time>
            </div>
            <div class="timeline-stats">
              <div class="timeline-stat"><div class="stat-val">52 min</div><div class="stat-label">Duration</div></div>
              <div class="timeline-stat"><div class="stat-val">6</div><div class="stat-label">Exercises</div></div>
              <div class="timeline-stat"><div class="stat-val">18,400</div><div class="stat-label">Volume (kg)</div></div>
              <div class="timeline-stat"><div class="stat-val">💪 PR</div><div class="stat-label">Bench press</div></div>
            </div>
            <button class="timeline-expand" aria-expanded="false" aria-controls="exp1" onclick="toggleExpand(this,'exp1')">
              Show exercises
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="timeline-expanded-body" id="exp1"><div class="timeline-expanded-inner"><div class="timeline-expanded-content">
              <div class="exercise-list">
                <div class="exercise-row"><span class="exercise-name">Bench Press 🏆</span><span class="exercise-sets">4 × 5 @ 100 kg — PR!</span></div>
                <div class="exercise-row"><span class="exercise-name">Incline DB Press</span><span class="exercise-sets">3 × 10 @ 32 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Cable Fly</span><span class="exercise-sets">3 × 15 @ 15 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Overhead Press</span><span class="exercise-sets">4 × 6 @ 65 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Tricep Pushdown</span><span class="exercise-sets">3 × 12 @ 25 kg</span></div>
                <div class="exercise-row"><span class="exercise-name">Lateral Raises</span><span class="exercise-sets">4 × 15 @ 10 kg</span></div>
              </div>
            </div></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-date-group">
      <div class="timeline-date-label">Yesterday</div>
      <div class="timeline">
        <!-- Run -->
        <div class="timeline-item">
          <div class="timeline-dot dot-success">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M10 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 2.5l-2 1.5v2l1.5-1v4h1.5V7.5l1 .5V6L9 5.5z" fill="currentColor"/></svg>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div><div class="timeline-title">Morning Run</div><div class="timeline-subtitle">Easy pace · Outdoor</div></div>
              <time class="timeline-time">7:00 AM</time>
            </div>
            <div class="timeline-stats">
              <div class="timeline-stat"><div class="stat-val">38 min</div><div class="stat-label">Duration</div></div>
              <div class="timeline-stat"><div class="stat-val">6.2 km</div><div class="stat-label">Distance</div></div>
              <div class="timeline-stat"><div class="stat-val">6:08</div><div class="stat-label">Pace /km</div></div>
              <div class="timeline-stat"><div class="stat-val">148</div><div class="stat-label">Avg BPM</div></div>
            </div>
          </div>
        </div>
        <!-- Rest note -->
        <div class="timeline-item">
          <div class="timeline-dot dot-neutral">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div class="timeline-simple">
            <div class="simple-title">Recovery note logged</div>
            <div class="simple-meta">Sleep: 7h 40min · HRV: 68 ms · Readiness: Good</div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-date-group">
      <div class="timeline-date-label">Monday, 2 Mar</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot dot-brand">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 8h2m8 0h2M4 8a1 1 0 0 1 1-1h1V5.5a.5.5 0 0 1 1 0V7h2V5.5a.5.5 0 0 1 1 0V7h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1v1.5a.5.5 0 0 1-1 0V9H9v1.5a.5.5 0 0 1-1 0V9H7a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.25"/></svg>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div><div class="timeline-title">Lower Body Strength</div><div class="timeline-subtitle">Leg day · Gym</div></div>
              <time class="timeline-time">6:00 AM</time>
            </div>
            <div class="timeline-stats">
              <div class="timeline-stat"><div class="stat-val">58 min</div><div class="stat-label">Duration</div></div>
              <div class="timeline-stat"><div class="stat-val">5</div><div class="stat-label">Exercises</div></div>
              <div class="timeline-stat"><div class="stat-val">24,600</div><div class="stat-label">Volume (kg)</div></div>
              <div class="timeline-stat"><div class="stat-val">—</div><div class="stat-label">PRs</div></div>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot" style="background:var(--color-warning-500);width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M8 6v4M8 12h.01" stroke="#fff" stroke-width="1.75" stroke-linecap="round"/></svg>
          </div>
          <div class="timeline-simple">
            <div class="simple-title" style="color:var(--color-warning-text)">Missed evening mobility session</div>
            <div class="simple-meta">Scheduled: 20 min hip flexor routine — not logged</div>
          </div>
        </div>
      </div>
    </div>

    <button class="load-earlier" onclick="this.textContent='Loading…'">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Load earlier activity
    </button>
  </div>

  <!-- Milestones variant -->
  <div class="section">
    <div class="section-label">Milestones — programme journey</div>
    <div class="timeline-milestones">
      <div class="milestone-item">
        <div class="milestone-dot dot-success" style="width:32px;height:32px;background:var(--color-success-500)">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="milestone-card">
          <div class="milestone-title">🏆 100 kg Bench Press</div>
          <div class="milestone-desc">Hit a lifetime personal record after 14 weeks of progressive overload. Previous best was 95 kg.</div>
          <div class="milestone-date">Today · Week 14</div>
        </div>
      </div>
      <div class="milestone-item">
        <div class="milestone-dot" style="width:32px;height:32px;background:var(--color-success-500);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="milestone-card">
          <div class="milestone-title">🎯 Week 8 complete</div>
          <div class="milestone-desc">Halfway through the programme. Volume increased 22% from baseline. Consistency: 94%.</div>
          <div class="milestone-date">18 Jan · Week 8</div>
        </div>
      </div>
      <div class="milestone-item">
        <div class="milestone-dot" style="width:32px;height:32px;background:var(--color-brand);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="milestone-card">
          <div class="milestone-title">🚀 Programme started</div>
          <div class="milestone-desc">Began Upper/Lower Power Hypertrophy block. Starting benchmarks: Bench 85 kg, Squat 120 kg, Deadlift 150 kg.</div>
          <div class="milestone-date">4 Dec · Week 1</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Compact variant -->
  <div class="section">
    <div class="section-label">Compact — daily weight log</div>
    <div class="timeline-compact">
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-brand)"></div><span class="compact-label">82.4 kg</span><span class="compact-time">Today</span></div>
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-neutral-300)"></div><span class="compact-label">82.6 kg</span><span class="compact-time">Yesterday</span></div>
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-neutral-300)"></div><span class="compact-label">82.9 kg</span><span class="compact-time">Mon</span></div>
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-neutral-300)"></div><span class="compact-label">83.1 kg</span><span class="compact-time">Sun</span></div>
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-neutral-300)"></div><span class="compact-label">83.0 kg</span><span class="compact-time">Sat</span></div>
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-neutral-300)"></div><span class="compact-label">83.4 kg</span><span class="compact-time">Fri</span></div>
      <div class="compact-item"><div class="compact-dot" style="background:var(--color-neutral-300)"></div><span class="compact-label">83.2 kg</span><span class="compact-time">Thu</span></div>
    </div>
    <p style="font-size:var(--text-xs);color:var(--color-text-tertiary);margin-top:.875rem">↓ 0.8 kg over 7 days · 7-day avg: 83.0 kg</p>
  </div>
</div>

</div>
{{< /demo >}}

> **Category:** Components · **Status:** Proposed · **Last updated:** 2026-03-07

A Timeline is a vertically ordered sequence of events, activities, or milestones displayed in chronological or reverse-chronological order. It is especially well-suited to activity feeds, workout history, training logs, and progress tracking.

---

## Contents

1. [Anatomy](#anatomy)
2. [Variants](#variants)
3. [Item types](#item-types)
4. [Behaviour](#behaviour)
5. [Tokens](#tokens)
6. [Usage guidelines](#usage-guidelines)

---

## Anatomy

```
  │
  ●  ← Step dot (--color-brand)
  │
  │   ┌────────────────────────────────┐
  │   │ Title               Timestamp  │
  │   │ Description                    │
  │   │ [Optional content / media]     │
  │   └────────────────────────────────┘
  │
  ●
  │
```

| Part | Element | Token |
|---|---|---|
| Track | `div.timeline-track` | `--color-border-subtle` |
| Dot | `div.timeline-dot` | Variant-specific fill |
| Dot icon | `svg` inside dot | White icon on coloured dot |
| Card | `div.timeline-card` | `--color-surface-raised`, `--shadow-sm` |
| Timestamp | `time.timeline-time` | `--text-xs`, `--color-text-secondary` |
| Title | `p.timeline-title` | `--text-sm`, `--font-weight-medium` |
| Description | `p.timeline-description` | `--text-sm`, `--color-text-secondary` |
| Group label | `div.timeline-date-label` | `--text-xs`, uppercase, `--color-text-secondary` |

---

## Variants

| Variant | Description |
|---|---|
| **Feed** (default) | Reverse-chronological activity feed. Newest items at top. Compact density. |
| **Milestones** | Forward-chronological. Larger dots, richer card content. For progress journeys. |
| **Alternating** | Cards alternate left and right of the track. Decorative — desktop only. |
| **Compact** | Dot only, no card — just label and timestamp on a single line. High-density logs. |

---

## Item types

| Type | Dot colour | Icon | Use |
|---|---|---|---|
| **Default** | Brand | — | General events |
| **Success** | Success green | Checkmark | Completed workouts, achievements |
| **Warning** | Warning amber | Triangle | Missed sessions, low activity |
| **Danger** | Danger red | X | Failures, injuries, blocked |
| **Info** | Info blue | Info | Notes, annotations |
| **Neutral** | Neutral grey | — | System events, low-signal entries |
| **Custom** | Any | Any | Domain-specific (e.g. trophy for PRs) |

---

## Behaviour

### Grouping
Items can be grouped by date with a floating date label between groups:
```
Today
  ● Morning run — 5.2 km
  ● Strength session — 45 min

Yesterday
  ● Rest day
```

### Load more
Long timelines paginate via a "Load earlier" button at the bottom, appending older items without replacing current content.

### Expandable items
Rich items (e.g. workout summaries) can have an expand/collapse toggle to show full stats without navigating away.

### Connectors
The track line between dots is dashed for upcoming/future events and solid for past events.

---

## Tokens

| Token | Default | Description |
|---|---|---|
| `--timeline-track-color` | `var(--color-border-subtle)` | Connector line colour |
| `--timeline-track-width` | `2px` | Connector line thickness |
| `--timeline-dot-size` | `12px` | Default dot diameter |
| `--timeline-dot-size-lg` | `32px` | Icon dot diameter |
| `--timeline-dot-bg` | `var(--color-brand)` | Default dot fill |
| `--timeline-card-bg` | `var(--color-surface-raised)` | Card background |
| `--timeline-card-border` | `var(--color-border-subtle)` | Card border |
| `--timeline-card-radius` | `var(--radius-lg)` | Card corner radius |
| `--timeline-gap` | `var(--space-6)` | Gap between items |
| `--timeline-track-offset` | `16px` | Horizontal offset of track from left edge |

---

## Usage guidelines

### Do
- Use reverse-chronological order (newest first) for activity feeds.
- Group items by date when density is high.
- Use coloured dots to communicate event type at a glance — particularly useful in fitness contexts where workout types (cardio, strength, rest) need quick scanning.
- Use the compact variant for dense logs (daily step counts, weight entries).

### Don't
- Don't use a timeline for navigational steps — use a Stepper.
- Don't show more than 20 items without pagination.
- Don't mix alternating and feed variants in the same view.

