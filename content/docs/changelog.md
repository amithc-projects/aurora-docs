# Changelog

All notable changes to Aurora Design System are documented here.

Aurora follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

- **MAJOR** — breaking changes to token names, component APIs, or structural markup
- **MINOR** — new components, new token additions, new variants (backwards-compatible)
- **PATCH** — bug fixes, contrast corrections, documentation updates, minor visual tweaks

> Breaking changes are additionally flagged with 🔴, deprecations with 🟡, and new additions with 🟢.

---

## Format

Each release entry follows this structure:

```
## [version] — YYYY-MM-DD

### Breaking changes 🔴
### Deprecated 🟡
### Added 🟢
### Changed
### Fixed
### Removed
### Internal
```

Sections with no entries are omitted.

---

## [1.1.0] — 2026-03-07

### Added 🟢

**Phase 3 components**
- Accordion — default, flush, separated, and icon-left variants; single and multiple expansion modes
- Tag / Chip — label, filter, input (removable), and action variants across six colour scales and three sizes
- Progress Bar — determinate, indeterminate, segmented, and stacked variants across four sizes
- Stepper — horizontal, vertical, compact, and dot variants with complete, current, upcoming, and error states
- Command Palette — fuzzy search, grouped results (Recent / Pages / Actions), keyboard navigation, match highlighting
- Timeline — feed, milestones, alternating, and compact variants; date grouping and expandable items
- Empty States — first-use, no-results, error, warning, and completed types across three container sizes

**Phase 2 components (completing backlog)**
- Bottom Sheet — gesture-driven with snap points (peek 25vh / half 50vh / tall 75vh / full); action sheet, selection, form, and content variants
- Error Pages — 404, 500, 403, 401, 503 (maintenance with live countdown), 429 (rate-limited with retry countdown)

**Tokens**
- `--toast-z-index` renamed from `--z-toast` for consistency — old name retained as alias (see Deprecated)
- `--sheet-snap-duration` and `--sheet-dismiss-velocity` added to Bottom Sheet token set

**Documentation**
- Phase 4 governance documents: A11y Guidelines, Dark Mode Design Decisions, Changelog, Contributing Guide, Browser Support Matrix, Design-Dev Handoff Guide, Icon Usage Guidelines
- Drag & Drop component spec and demo

---

## [1.0.0] — 2025-12-04

Initial public release of Aurora Design System.

### Added 🟢

**Foundations**
- Design Token Reference — primitive, semantic, and component token tiers; full colour, spacing, radius, shadow, z-index, opacity, typography, and motion scales
- Breakpoints & Grid System — 6 breakpoints (xs → 2xl), 12-column grid, layout primitives
- Theming Guide — Corporate and Kids themes; light/dark mode cascade; 8-step new theme creation process

**Phase 1 components**
- Button — primary, secondary, ghost, danger variants; sm/md/lg sizes; loading state
- Input — text, number, email, password, search; validation states; prefix/suffix slots
- Select — single and multi-select; option groups; searchable variant
- Checkbox — single and group; indeterminate state
- Radio — single and group
- Textarea — auto-resize variant
- Form layout — label, helper text, error message, field group
- Card — default, interactive, horizontal, and feature variants
- Badge — semantic colours; sm/md sizes
- Avatar — image, initials, icon; sm/md/lg/xl sizes; group stack
- Link — inline, standalone, external variants

**Phase 2 components**
- Drawer / Side Panel — right (default), left, bottom, top positions; sm/md/lg/xl/full sizes; overlay, push, persistent variants
- Dropdown Menu — action menu, context menu, navigation menu, select menu; full keyboard navigation
- Tabs — line, pill, contained, vertical variants; overflow scroll
- Toast / Notification — success, warning, error, info, loading variants; 6 positions; progress bar; stacking
- Popover — info, form, confirmation, menu variants; auto-positioning
- Pagination — numeric, simple prev/next, compact, load more, cursor-based variants
- Spinner — xs/sm/md/lg/xl sizes; brand, muted, inverted variants
- Skeleton — text, heading, avatar, image, button preset shapes; shimmer animation
- Divider — horizontal, subtle, labelled, vertical variants

**Infrastructure**
- CSS custom property architecture
- `[data-theme]` and `[data-mode]` attribute system
- `prefers-color-scheme` fallback for initial render
- `prefers-reduced-motion` support across all animated components

---

## Versioning notes

### When to bump MAJOR
- Renaming or removing a CSS custom property token
- Changing the `data-*` attribute API (e.g. `data-variant` → `data-type`)
- Changing required HTML structure in a way that breaks existing implementations
- Removing a component or variant

### When to bump MINOR
- Adding a new component
- Adding new tokens
- Adding new variants to existing components
- Adding new data-* attributes (backwards compatible)

### When to bump PATCH
- Fixing a contrast ratio that was below minimum
- Correcting a wrong `aria-*` attribute
- Updating documentation only
- Fixing a visual regression
- Adjusting a token value within an acceptable range (e.g. tweaking a shadow opacity)
