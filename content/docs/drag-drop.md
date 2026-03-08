# Drag & Drop

> **Category:** Interaction Patterns · **Status:** Proposed · **Last updated:** 2026-03-07

Drag & Drop is an interaction pattern that allows users to reorder items, move items between containers, or place items onto drop targets. Because it is gesture-exclusive by default, every drag-and-drop interaction in Aurora must have a non-drag alternative.

---

## Contents

1. [Patterns](#patterns)
2. [Anatomy](#anatomy)
3. [States](#states)
4. [Behaviour](#behaviour)
5. [Keyboard alternative](#keyboard-alternative)
6. [Accessibility](#accessibility)
7. [Tokens](#tokens)
8. [Usage guidelines](#usage-guidelines)

---

## Patterns

| Pattern | Description | Examples |
|---|---|---|
| **List reorder** | Drag items within a single ordered list | Exercise order in a workout, playlist |
| **Kanban / board** | Drag cards between columns | Training week planner, status board |
| **Sortable grid** | Drag tiles in a 2D grid | Dashboard widget arrangement |
| **File drop zone** | Drop files from the OS onto a target | Import workout data, upload profile photo |

---

## Anatomy

### Drag item

```
┌─────────────────────────────────┐
│ ⠿  Bench Press          ⋯      │  ← drag handle (⠿) + content + actions
└─────────────────────────────────┘
```

| Part | Element | Token |
|---|---|---|
| Drag handle | `div.drag-handle` | `cursor: grab`, `--color-text-secondary` |
| Item root | `div[draggable]` | `--color-surface-raised`, `--radius-lg` |
| Drag ghost | Cloned element following pointer | `--opacity-80`, `--shadow-xl` |
| Drop indicator | `div.drop-indicator` | `--color-brand`, 2px line |
| Drop zone | `div.drop-zone` | Highlighted border when active |

### Drop indicator

When an item is dragged over a valid drop position, a 2px horizontal line appears between the items to indicate where the dragged item will land.

```
┌─────────────────────────────────┐
│ ⠿  Squat                        │
└─────────────────────────────────┘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← drop indicator (--color-brand)
┌─────────────────────────────────┐
│ ⠿  Romanian Deadlift            │
└─────────────────────────────────┘
```

---

## States

| State | Item appearance | Cursor |
|---|---|---|
| **Default** | Normal | `default` |
| **Handle hover** | Handle colour brightens | `grab` |
| **Dragging** | Source item fades to `--opacity-40`, ghost follows pointer | `grabbing` |
| **Over valid target** | Drop indicator appears | `grabbing` |
| **Over invalid target** | No drop indicator, ghost shows ✗ | `no-drop` |
| **Dropped** | Item animates into new position | `default` |
| **Cancelled** | Ghost returns to origin (Escape during drag) | `default` |

---

## Behaviour

### Initiating drag

- Mouse: `mousedown` on handle → `mousemove` more than 4px threshold → drag begins
- Touch: `touchstart` on handle → `touchmove` more than 4px → drag begins (300ms delay to distinguish from scroll)
- Keyboard: focus item → activate keyboard mode (see Keyboard alternative)

### During drag

- A ghost element (semi-transparent clone) follows the pointer
- The original item's slot is preserved but visually faded
- Drop indicators appear between items as the ghost crosses their midpoint
- Items in the list shift to make room smoothly (CSS transition on `transform: translateY`)
- The ghost does not obscure the drop indicator — it renders above it

### Dropping

- Release mouse/touch over a valid drop zone → item animates into the new position
- Drop animation: `transform: translateY` transition, `--duration-moderate`, `--ease-out`
- The DOM order is updated after the animation completes

### Cancelling

- Press `Escape` during drag → ghost returns to original position, no change
- Drop outside any valid target → same as Escape

### Auto-scroll

When dragging near the top or bottom edge of a scrollable container, the list auto-scrolls at a speed proportional to how close the pointer is to the edge.

---

## Keyboard alternative

**Every drag-and-drop list must have a keyboard reorder mechanism.** Aurora's standard pattern uses a move mode triggered by `Space` on the handle.

### Keyboard reorder flow

1. `Tab` to focus the drag handle of the item to move
2. Press `Space` → item enters "move mode" — handle turns brand-coloured, live region announces "Moving [item name]. Use arrow keys to change position."
3. `↑` / `↓` moves the item one position
4. `Space` again → confirm new position, live region announces "[item name] moved to position 3 of 7"
5. `Escape` → cancel, item returns to original position, live region announces "Move cancelled"

```html
<!-- Move mode announcement -->
<div aria-live="assertive" class="sr-only" id="dnd-announce"></div>
```

### Button alternative for very small screens

As a fallback on mobile, each item can expose up/down arrow buttons:

```
┌───────────────────────────────────────┐
│ Bench Press                  [↑] [↓] │
└───────────────────────────────────────┘
```

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Keyboard alternative | Space + arrow key reorder (see above) |
| Live region | `aria-live="assertive"` announces move mode, position changes, and drop confirmation |
| Drag handle role | `role="button"` with `aria-label="Drag to reorder [item name]"` |
| List role | `role="listbox"` or `role="list"` on the container |
| Item position | `aria-label` includes position: "Bench Press, item 1 of 6" — updated on reorder |
| Draggable | `aria-grabbed` (deprecated in ARIA 1.1 — use live region announcements instead) |
| Touch drag | `touch-action: none` on handle prevents conflict with scroll |
| No drag-only UI | Never hide the keyboard reorder mechanism behind a drag-only affordance |

---

## Tokens

| Token | Default | Description |
|---|---|---|
| `--dnd-ghost-opacity` | `0.8` | Ghost element opacity during drag |
| `--dnd-source-opacity` | `0.4` | Source item opacity during drag |
| `--dnd-indicator-color` | `var(--color-brand)` | Drop position indicator colour |
| `--dnd-indicator-height` | `2px` | Drop position indicator thickness |
| `--dnd-zone-border` | `var(--color-brand)` | Drop zone border when active |
| `--dnd-zone-bg` | `var(--color-brand-subtle)` | Drop zone background when active |
| `--dnd-handle-color` | `var(--color-text-secondary)` | Handle icon colour |
| `--dnd-handle-color-hover` | `var(--color-text-primary)` | Handle icon colour on hover |
| `--dnd-transition` | `var(--duration-moderate) var(--ease-out)` | Reorder animation |

---

## Usage guidelines

### Do
- Always provide a keyboard reorder alternative
- Use drag handles rather than making the entire item draggable — it prevents accidental drags and makes the affordance explicit
- Show the drop indicator between items (not a full drop zone highlight for list reorder)
- Animate items shifting to make room — it communicates the destination clearly
- Announce all state changes via a live region

### Don't
- Don't make drag the only way to reorder — always provide up/down buttons or keyboard mode
- Don't allow drop on invalid targets without visual feedback
- Don't start drag on `mousedown` — wait for `mousemove` threshold to avoid accidental drags
- Don't use the HTML Drag and Drop API for complex interactions — it has significant cross-browser inconsistencies and poor touch support. Use Pointer Events instead.
- Don't animate the ghost element — it should follow the pointer precisely with no lag
