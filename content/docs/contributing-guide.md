# Contributing Guide

> **Category:** Governance · **Status:** Approved · **Last updated:** 2026-03-07

This guide covers how to contribute to Aurora — whether you're adding a new component, proposing a token change, fixing a bug, or improving documentation.

---

## Contents

1. [Before you start](#before-you-start)
2. [Types of contribution](#types-of-contribution)
3. [Adding a new component](#adding-a-new-component)
4. [Modifying an existing component](#modifying-an-existing-component)
5. [Token governance](#token-governance)
6. [Documentation standards](#documentation-standards)
7. [Pull request process](#pull-request-process)
8. [Review criteria](#review-criteria)
9. [Versioning responsibility](#versioning-responsibility)

---

## Before you start

1. **Check the roadmap** — the component may already be planned or in progress. Check open issues and the Phase roadmap before starting work.
2. **Open a proposal issue first** for any new component, token addition, or breaking change. This avoids duplicate work and lets the team validate the approach before implementation.
3. **Discuss in the design channel** before changing visual defaults — colour shifts, radius changes, and shadow adjustments affect the whole system and need design sign-off.

---

## Types of contribution

| Type | Issue required first? | Design review needed? | Notes |
|---|---|---|---|
| New component | Yes | Yes | Use the New Component template |
| New variant | Yes | Yes | — |
| New token | Yes | Yes | Token governance section below |
| Token value change | Yes | Yes | Especially if it affects contrast |
| Bug fix (visual) | No | Recommended | Include before/after screenshots |
| Bug fix (functional) | No | No | Include test case |
| A11y fix | No | No | Reference WCAG criterion |
| Docs update | No | No | — |
| Breaking change | Yes | Yes | Requires MAJOR version bump |

---

## Adding a new component

Every new Aurora component requires **four deliverables** before it can merge:

### 1. Specification (`.md`)

Use the component spec template. Required sections:

```
# Component Name
> Category · Status · Date

## Anatomy
## Variants
## States
## Behaviour
## Accessibility
## Tokens
## Usage guidelines (Do / Don't)
```

**Status values:**
- `Draft` — work in progress, not for use
- `Proposed` — ready for review, awaiting approval
- `Approved` — approved, implementation in progress
- `Stable` — shipped, safe to use
- `Deprecated` — will be removed in next MAJOR version

### 2. Implementation (`.html` demo or framework component)

- Must use Aurora CSS custom properties — no hardcoded colour or spacing values
- Must pass the [accessibility checklist](./a11y-guidelines.md#testing-checklist)
- Must include dark mode support
- Must include `prefers-reduced-motion` support for any animations
- Must be tested at 200% and 400% zoom

### 3. Token additions

Any new component-specific tokens must:
- Follow the naming convention: `--[component]-[property]-[variant/state]`
- Map to semantic tokens, not primitive values
- Be documented in the component spec
- Be listed in the Design Token Reference if they are semantic-tier tokens

**Token naming examples:**

```
--toast-bg              ✅ correct
--toast-background      ❌ verbose
--toast-color-bg        ❌ redundant "color"
--color-toast           ❌ wrong tier prefix

--drawer-size-md        ✅ correct
--drawer-width-medium   ❌ non-standard size name

--tab-indicator-color   ✅ correct
--tabs-indicator-colour ❌ wrong spelling (use US English)
```

### 4. Changelog entry

Add an entry to `changelog.md` under the next unreleased version heading:
```markdown
## [Unreleased]

### Added 🟢
- ComponentName — brief description of variants and key behaviour
```

---

## Modifying an existing component

### Non-breaking changes
- New variants, new states, new optional tokens
- Changelog entry under `Changed`
- Bump MINOR version

### Breaking changes
- Renaming a token, changing required HTML structure, removing a variant
- Must be discussed in a proposal issue before implementation
- Requires a MAJOR version bump
- Old token names must be aliased for one full MINOR version before removal:

```css
/* Deprecated alias — remove in v2.0.0 */
--old-token-name: var(--new-token-name);
```

---

## Token governance

Tokens are the most impactful and most permanent part of the design system. A bad token name ships forever.

### When to add a token

Add a token when a value:
- Appears in **3 or more** component definitions
- Needs to be **independently themeable** (a brand colour, a radius)
- Represents a **design decision** that may change (not a calculation)

Do **not** add a token for:
- One-off values used in a single component
- Values that are always derived from other tokens (`calc(var(--space-4) * 2)`)
- Pure implementation details that designers don't need to control

### Token tiers

Aurora uses a strict three-tier token architecture. Never skip tiers:

```
Primitive  →  Semantic  →  Component
#2563eb    →  --color-brand  →  --button-bg-primary
```

- **Primitive tokens** are never used directly in components. They only feed semantic tokens.
- **Semantic tokens** are used in components. They represent intent (`--color-brand`, `--color-text-primary`).
- **Component tokens** are optional aliases for component-specific overrides.

### Deprecating a token

1. Add a `/* @deprecated: use --new-name instead */` comment
2. Add an alias: `--old-name: var(--new-name)`
3. Add a 🟡 entry to the changelog
4. Remove in the next MAJOR release

---

## Documentation standards

### Writing style
- Use second person ("You can…", not "The user can…" or "One can…")
- Use present tense ("The component renders…" not "The component will render…")
- Use US English spelling (color, center, behavior)
- Prefer active voice
- Keep sentences short — one idea per sentence

### Code examples
- All code examples must be copy-pasteable and functional
- Use actual Aurora token names, not placeholder values
- Show both the do and the don't where relevant

### Screenshots and demos
- Include a dark mode variant for any visual documentation
- Annotate screenshots with token names where helpful

---

## Pull request process

1. **Branch naming:** `feat/component-name`, `fix/issue-description`, `docs/topic`, `chore/description`
2. **PR title:** `[Component] Add drawer component` / `[Token] Rename --z-toast to --toast-z-index` / `[Fix] Correct contrast ratio on tag-warning`
3. **PR description:** Link the proposal issue, summarise changes, include screenshots for visual changes
4. **Self-review checklist before requesting review:**
   - [ ] Accessibility checklist passed
   - [ ] Dark mode tested
   - [ ] 200% zoom tested
   - [ ] Changelog entry added
   - [ ] Tokens follow naming convention
   - [ ] No hardcoded values in component styles
5. **Required reviewers:** 1 design + 1 engineering for new components; 1 engineering for bug fixes

---

## Review criteria

Reviewers check the following:

### Design review
- Visual consistency with existing components
- Token usage correct (no hardcoded values)
- Dark mode looks intentional, not accidental
- Variants are meaningfully differentiated
- Usage guidelines are accurate

### Engineering review
- Semantic HTML used correctly
- ARIA attributes correct and complete
- Keyboard navigation works as specified
- No CSS specificity issues
- No `!important` in component styles (allowed only in utility overrides)
- `prefers-reduced-motion` implemented

### Both reviewers check
- Accessibility checklist complete
- Documentation is accurate and complete
- Changelog entry present
- No breaking changes without MAJOR bump

---

## Versioning responsibility

The **design system maintainer** is responsible for:
- Deciding the version bump level for each release
- Maintaining the changelog
- Communicating breaking changes to consuming teams

Contributors are responsible for:
- Flagging if their change is breaking
- Adding changelog entries
- Not merging without approval
