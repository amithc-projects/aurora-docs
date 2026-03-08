---
title: "Empty States"
menu:
  main:
    parent: "components"
    weight: 97
---

{{< demo >}}
<div class="demo-wrapper">
  <!-- First use -->
  <div class="section">
    <div class="section-label">First use</div>
    <div class="grid-2">
      <div class="panel">
        <div class="empty">
          <div class="empty-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="12" width="32" height="28" rx="3" stroke="currentColor" stroke-width="2"/>
              <path d="M16 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" stroke="currentColor" stroke-width="2"/>
              <path d="M24 22v8M20 26h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="empty-heading">Log your first workout</div>
          <div class="empty-desc">Track sets, reps, and weight to start building your training history.</div>
          <div class="empty-actions">
            <button class="btn btn-brand">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              Log workout
            </button>
            <button class="btn btn-ghost">Browse templates</button>
          </div>
        </div>
      </div>

      <div class="panel empty-dashed" onclick="" role="button" tabindex="0">
        <div class="empty">
          <div class="empty-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2"/>
              <path d="M20 14v12M14 20h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="empty-heading">Add your first exercise</div>
          <div class="empty-desc">Click to add exercises to this workout. Search from 500+ movements.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- No results -->
  <div class="section">
    <div class="section-label">No search results</div>
    <div class="grid-2">
      <div class="panel">
        <div style="padding:.875rem 1rem;border-bottom:1px solid var(--color-border-subtle);display:flex;gap:.5rem;align-items:center">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style="color:var(--color-text-secondary)"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M12 12l2 2" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
          <span style="font-size:var(--text-sm);color:var(--color-text-secondary)">"nordic hamstring curl"</span>
          <button onclick="this.closest('.panel').querySelector('.search-results').style.display='block';this.closest('.panel').querySelector('.empty').style.display='none'" style="margin-left:auto;font-size:var(--text-xs);color:var(--color-brand);background:none;border:none;cursor:pointer">Clear</button>
        </div>
        <div class="empty">
          <div class="empty-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="18" cy="18" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M26 26l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M14 18h8M18 14v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".4"/>
            </svg>
          </div>
          <div class="empty-heading">No exercises found</div>
          <div class="empty-desc">Try a different name or browse by muscle group.</div>
          <div class="empty-actions">
            <button class="btn btn-ghost btn-sm">Browse all exercises</button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div style="padding:.875rem 1rem;border-bottom:1px solid var(--color-border-subtle)">
          <div style="font-size:var(--text-xs);color:var(--color-text-secondary)">Active filters: <strong style="color:var(--color-text-primary)">Cardio · Outdoor · Morning</strong></div>
        </div>
        <div class="empty">
          <div class="empty-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 12h24M14 20h12M20 28h0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <circle cx="32" cy="32" r="6" fill="var(--color-surface-base)" stroke="currentColor" stroke-width="2"/>
              <path d="M30 32h4M32 30v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
            </svg>
          </div>
          <div class="empty-heading">No workouts match</div>
          <div class="empty-desc">Try removing some filters to see more results.</div>
          <div class="empty-actions">
            <button class="btn btn-ghost btn-sm">Clear all filters</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Error -->
  <div class="section">
    <div class="section-label">Error states</div>
    <div class="grid-2">
      <div class="panel empty-bg-danger">
        <div class="empty">
          <div class="empty-icon" style="color:var(--color-danger-500)">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="16" stroke="currentColor" stroke-width="2"/>
              <path d="M22 14v10M22 30h.01" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="empty-heading">Couldn't load workouts</div>
          <div class="empty-desc">We had trouble connecting to the server. Check your connection and try again.</div>
          <div class="empty-actions">
            <button class="btn btn-ghost btn-sm">Retry</button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="empty">
          <div class="empty-icon" style="color:var(--color-warning-500)">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M22 8L38 34H6L22 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M22 20v8M22 32h.01" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="empty-heading">Sync paused</div>
          <div class="empty-desc">Your workout data may be out of date. Reconnect to resume syncing.</div>
          <div class="empty-actions">
            <button class="btn btn-ghost btn-sm">Reconnect</button>
            <button class="btn btn-ghost btn-sm">Work offline</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Completed / inbox zero -->
  <div class="section">
    <div class="section-label">Completed states</div>
    <div class="grid-2">
      <div class="panel empty-bg-success">
        <div class="empty">
          <div class="celebration-ring">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 16l7 7 13-13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="empty-heading" style="color:var(--color-success-text)">All workouts logged!</div>
          <div class="empty-desc">You've completed all 5 planned sessions this week. Great consistency.</div>
          <div class="empty-actions">
            <button class="btn btn-ghost btn-sm">View this week</button>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="empty">
          <div class="empty-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="10" y="8" width="28" height="34" rx="3" stroke="currentColor" stroke-width="2"/>
              <path d="M16 18h16M16 24h16M16 30h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <circle cx="36" cy="36" r="8" fill="var(--color-success-500)"/>
              <path d="M32 36l3 3 5-5" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="empty-heading">Programme complete</div>
          <div class="empty-desc">You've finished the 12-week Strength Foundation programme. Ready to pick your next one?</div>
          <div class="empty-actions">
            <button class="btn btn-brand btn-sm">Browse programmes</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- In-context: table -->
  <div class="section">
    <div class="section-label">In context — table empty state</div>
    <div class="panel">
      <table class="table-demo">
        <thead><tr><th>Exercise</th><th>Sets</th><th>Best set</th><th>Last trained</th></tr></thead>
        <tbody>
          <tr><td colspan="4" style="padding:0;border:none">
            <div class="empty empty-sm">
              <div class="empty-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" stroke-width="1.75"/><path d="M4 13h24M10 8V6M22 8V6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
              </div>
              <div class="empty-heading">No exercises tracked yet</div>
              <div class="empty-desc empty-no-actions">Exercises you log will appear here with your performance history.</div>
            </div>
          </td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Small widget -->
  <div class="section">
    <div class="section-label">Small widget size</div>
    <div class="grid-3">
      <div class="panel" style="max-width:240px">
        <div style="padding:.75rem;border-bottom:1px solid var(--color-border-subtle);font-size:var(--text-xs);font-weight:600;color:var(--color-text-secondary)">RECENT PRs</div>
        <div class="empty empty-sm">
          <div class="empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg></div>
          <div class="empty-heading">No PRs yet</div>
          <div class="empty-desc empty-no-actions">Log workouts to track personal records.</div>
        </div>
      </div>
      <div class="panel" style="max-width:240px">
        <div style="padding:.75rem;border-bottom:1px solid var(--color-border-subtle);font-size:var(--text-xs);font-weight:600;color:var(--color-text-secondary)">THIS WEEK</div>
        <div class="empty empty-sm">
          <div class="empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.75"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg></div>
          <div class="empty-heading">No sessions logged</div>
          <div class="empty-desc empty-no-actions">Start this week with a workout.</div>
        </div>
      </div>
      <div class="panel" style="max-width:240px">
        <div style="padding:.75rem;border-bottom:1px solid var(--color-border-subtle);font-size:var(--text-xs);font-weight:600;color:var(--color-text-secondary)">NOTIFICATIONS</div>
        <div class="empty empty-sm">
          <div class="empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3a7 7 0 0 1 7 7v3l1.7 2.5A1 1 0 0 1 19.8 17H4.2a1 1 0 0 1-.8-1.5L5 13v-3a7 7 0 0 1 7-7zM9.5 17a2.5 2.5 0 0 0 5 0" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg></div>
          <div class="empty-heading">All caught up</div>
          <div class="empty-desc empty-no-actions">No new notifications.</div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
{{< /demo >}}


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
