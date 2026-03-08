# Command Palette / Combobox

> **Category:** Overlays · **Status:** Proposed · **Last updated:** 2026-03-07

A Command Palette is a keyboard-driven, searchable overlay that gives users fast access to any action, page, or item in the application without navigating menus. It is the power-user's primary interface, and increasingly expected in modern web apps.

---

## Contents

1. [Anatomy](#anatomy)
2. [Result types](#result-types)
3. [Sections & grouping](#sections--grouping)
4. [Behaviour](#behaviour)
5. [Search algorithm](#search-algorithm)
6. [Keyboard shortcuts](#keyboard-shortcuts)
7. [Accessibility](#accessibility)
8. [Tokens](#tokens)
9. [Usage guidelines](#usage-guidelines)

---

## Anatomy

```
┌─────────────────────────────────────────────────┐
│  Backdrop                                       │
│  ┌───────────────────────────────────────────┐  │
│  │  🔍  Search commands and pages…           │  │  ← Input
│  ├───────────────────────────────────────────┤  │
│  │  Recent                                   │  │  ← Group label
│  │  ⊞  Dashboard                      ↵     │  │  ← Result item
│  │  📄  Token Reference               ↵     │  │
│  ├───────────────────────────────────────────┤  │
│  │  Actions                                  │  │
│  │  ⊕  New component                  ↵     │  │
│  │  ✎  Edit current page              ↵     │  │
│  ├───────────────────────────────────────────┤  │
│  │  [⌘K to open]              [↑↓ navigate] │  │  ← Footer hints
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

| Part | Element | Token |
|---|---|---|
| Backdrop | `div.cmd-backdrop` | `--color-neutral-900` + `--opacity-overlay` |
| Panel | `div.cmd-panel` | `--color-surface-raised`, `--shadow-2xl`, `--radius-xl` |
| Input | `input[type="search"]` | `--color-text-primary`, `--text-base` |
| Input icon | `span.cmd-search-icon` | `--color-text-secondary` |
| Separator | `hr` | `--color-border-subtle` |
| Group label | `p.cmd-group-label` | `--text-xs`, `--color-text-secondary`, uppercase |
| Result item | `div[role="option"]` | `--color-text-primary` |
| Result icon | `span.cmd-item-icon` | `--color-text-secondary` |
| Result label | `span.cmd-item-label` | Matched chars highlighted |
| Result meta | `span.cmd-item-meta` | `--text-xs`, `--color-text-tertiary` |
| Shortcut badge | `kbd` | `--color-surface-sunken`, `--color-border-default` |
| Footer | `div.cmd-footer` | `--color-border-subtle` top border |

---

## Result types

| Type | Icon style | Description |
|---|---|---|
| **Page / route** | Page icon | Navigates to a route |
| **Action** | Verb icon | Triggers a function |
| **Recent** | Clock icon | Previously visited pages or used actions |
| **Setting** | Gear icon | Opens a settings panel or form |
| **Search result** | Search icon | Live search results from data (users, files, etc.) |
| **External link** | Arrow icon | Opens an external URL |

---

## Sections & grouping

Results are grouped by type with labelled sections:
1. **Recent** — shown when input is empty
2. **Pages** — navigation matches
3. **Actions** — command matches
4. **Results** — live data matches (debounced search)

Sections with no matching items are hidden entirely. Empty state shows when all sections are empty.

---

## Behaviour

### Opening
- Global shortcut: `⌘K` (Mac) / `Ctrl+K` (Windows/Linux)
- Optionally triggered by a search button in the navigation bar
- Opens with focus on the input field
- Backdrop appears, page scroll locks

### Querying
- Input is live — results update on every keystroke
- Live data search (users, files, etc.) is debounced at **300ms**
- Minimum 1 character to show live results; 0 characters shows Recent
- Maximum **8 results per group**, **24 results total**

### Navigating
- `ArrowDown` / `ArrowUp` moves the active result
- Reaching the end of a group wraps to the next group (not back to input)
- `Enter` activates the highlighted result
- Mouse hover also highlights results
- Clicking a result activates it

### Closing
- `Escape` closes and returns focus to the element that triggered the palette
- Clicking the backdrop closes
- Activating a result closes (unless the result opens a sub-palette)

### History
- Activated items are stored in session history and shown in the Recent group
- Max 5 recent items, deduplicated by `id`

---

## Search algorithm

Aurora's command palette uses **fuzzy matching** — characters don't need to be contiguous.

Priority order for ranking results:
1. Exact match on label
2. Starts-with match on label
3. Word boundary match (e.g. "tb" matches "**T**oken **B**uilder")
4. Fuzzy character match (characters appear in order, not necessarily adjacent)
5. Match in description/metadata

Matched characters are **highlighted** in the result label using `<mark>` elements styled with `--color-brand-subtle` background.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Open palette |
| `Escape` | Close palette |
| `ArrowDown` | Next result |
| `ArrowUp` | Previous result |
| `Enter` | Activate highlighted result |
| `Tab` | Move to next result (same as ArrowDown) |
| `Shift+Tab` | Move to previous result |
| `⌘Enter` | Open result in new tab (page results only) |

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Combobox role | `role="combobox"` on input |
| Listbox | `role="listbox"` on results container |
| Options | `role="option"` on each result item |
| Expanded state | `aria-expanded="true/false"` on input |
| Active item | `aria-activedescendant` on input pointing to highlighted item `id` |
| Groups | `role="group"` with `aria-label` matching the group label |
| Dialog wrapper | `role="dialog"` on the panel, `aria-label="Command palette"` |
| Backdrop | `aria-hidden="true"` |
| Loading state | `aria-busy="true"` on listbox during async search |
| Modal | `aria-modal="true"` on panel |

---

## Tokens

| Token | Default | Description |
|---|---|---|
| `--cmd-panel-width` | `600px` | Panel width |
| `--cmd-panel-max-height` | `480px` | Results area max height |
| `--cmd-panel-radius` | `var(--radius-xl)` | Panel corner radius |
| `--cmd-panel-shadow` | `var(--shadow-2xl)` | Panel shadow |
| `--cmd-input-height` | `56px` | Input row height |
| `--cmd-item-height` | `44px` | Result item height |
| `--cmd-item-hover-bg` | `var(--color-surface-sunken)` | Hovered/active item background |
| `--cmd-item-active-bg` | `var(--color-brand-subtle)` | Keyboard-selected item background |
| `--cmd-item-active-color`| `var(--color-brand)` | Keyboard-selected item text |
| `--cmd-highlight-bg` | `var(--color-brand-subtle)` | Matched character highlight |
| `--cmd-z-index` | `var(--z-modal)` | Stack level |

---

## Usage guidelines

### Do
- Register `⌘K` / `Ctrl+K` globally, even if there's also a visible search button
- Include both navigation (pages) and actions (verbs) — the palette is most useful when it can do both
- Show recent items when the input is empty — reduces cold-start friction
- Highlight matched characters — it builds trust that the algorithm is working
- Keep result labels short and scannable (≤ 48 characters)

### Don't
- Don't show more than 8 items per group — the palette should feel fast, not like a full search results page
- Don't use the command palette as a replacement for primary navigation
- Don't make all results require typing — Recent and suggested actions reduce the need to type at all
- Don't debounce at more than 300ms — it feels sluggish
