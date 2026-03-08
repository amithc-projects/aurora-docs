# Timeline

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

---
---

# Empty States

> **Category:** Patterns · **Status:** Proposed · **Last updated:** 2026-03-07

An Empty State is shown when a container has no content to display. It communicates why the space is empty, sets expectations, and — where appropriate — provides a clear next action.

---

## Types

| Type | Trigger | Primary action |
|---|---|---|
| **First use** | User has never added content | CTA to add first item |
| **No results** | Search / filter returns zero matches | Suggest clearing filters |
| **Error** | Content failed to load | Retry button |
| **No access** | User lacks permission | Contact admin link |
| **Completed** | All tasks done / inbox zero | Celebrate + show summary |

---

## Anatomy

```
        [Illustration / Icon]

           Heading
      Supporting description

         [Primary action]
       [Secondary action]
```

| Part | Required | Token |
|---|---|---|
| Illustration or icon | Recommended | 80–120px, `--color-text-secondary` for icon |
| Heading | Yes | `--text-lg`, `--font-weight-semibold` |
| Description | Recommended | `--text-sm`, `--color-text-secondary`, max 2 sentences |
| Primary CTA | Situational | Standard button — only when there's a clear next action |
| Secondary CTA | Optional | Ghost button or link |

---

## Sizes

| Size | Context | Max width |
|---|---|---|
| `sm` | Table cell, widget, card | 240px |
| `md` | Panel, sidebar, modal body | 320px |
| `lg` | Full page, main content area | 480px |

---

## Tokens

| Token | Default |
|---|---|
| `--empty-icon-size` | `64px` |
| `--empty-icon-color` | `var(--color-text-secondary)` |
| `--empty-gap` | `var(--space-3)` |
| `--empty-max-width-sm` | `240px` |
| `--empty-max-width-md` | `320px` |
| `--empty-max-width-lg` | `480px` |

---

## Writing guidelines

| Element | Guidance |
|---|---|
| Heading | State what's missing, not what happened. "No workouts yet" not "Empty" |
| Description | Explain why and what to do. "Add your first workout to start tracking your progress." |
| CTA | Use a specific verb. "Add workout" not "Get started" |
| Error empty state | Explain what failed and what the user can do. "We couldn't load your data. Check your connection and try again." |

---

## Usage guidelines

### Do
- Show empty states immediately when a container loads with no content — never show a blank space.
- Match the empty state size to the container size.
- For "no results" states, show what search or filters are active so the user can understand why results are empty.
- For first-use states, be encouraging and specific — "Log your first run" is better than "No data".

### Don't
- Don't show a full-page empty state inside a small widget — use the `sm` variant.
- Don't use the same empty state for every situation — first-use, no-results, and error states need different messages.
- Don't include a CTA in error states if the user can't resolve it (e.g. a server error) — just explain and offer a retry.
