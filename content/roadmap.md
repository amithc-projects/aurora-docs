---
title: "Roadmap"
description: "Future architecture, archetypes, and missing component manifest for the Aurora Design System."
menu:
  main:
    weight: 90
---

This document outlines the strategic roadmap to prove the flexibility of the Aurora Design System by constructing seven distinct "Microsite" archetypes. 

By defining the page trees and component requirements for each archetype, we can systematically deduce and build the missing primitives in our design system.

---

## 1. SaaS Product Site
**Archetype Examples:** [Stripe](https://stripe.com), [Linear](https://linear.app), [Slack](https://slack.com)

### Page Tree & Component Mapping
* **Marketing Homepage**
  * *Components:* Mega Menu (Global Nav), Hero Section, Feature Grids, Testimonials Carousel, Pricing Cards.
* **Application Dashboard**
  * *Components:* Navigation Rail (Left), Global Nav (Top), Metric/Stat Cards, Data Tables (with sorting/pagination), Line/Bar Charts.

---

## 2. Documentation Portal
**Archetype Examples:** [Tailwind CSS Docs](https://tailwindcss.com/docs), [React Docs](https://react.dev)

### Page Tree & Component Mapping
* **Documentation Homepage**
  * *Components:* Global Search Input, Hero section, Quick Link Cards.
* **Component Specification Page**
  * *Components:* Side Navigation (Accordion), Code Syntax Highlighters, Interactive Playgrounds/Iframes, "On this page" Scrollspy (Right outline), API Properties Table.

---

## 3. E-commerce Store
**Archetype Examples:** [Nike](https://nike.com), [Apple Store](https://apple.com)

### Page Tree & Component Mapping
* **Storefront Homepage**
  * *Components:* Main Nav (with Cart indicator), Promotional Banners, Product Carousels.
* **Product Listing Page (PLP)**
  * *Components:* Filter Sidebar (Checkboxes, Range Sliders, Accordions), Product Cards, Pagination.
* **Product Detail Page (PDP)**
  * *Components:* Image Gallery/Zoom, Quantity Stepper, Radio Groups (Color/Size selection), Accordions (Product Specs), Star Ratings, Slide-out Cart Drawer.

---

## 4. News / Editorial Site
**Archetype Examples:** [BBC News](https://bbc.co.uk), [The Verge](https://theverge.com), [NY Times](https://nytimes.com)

### Page Tree & Component Mapping
* **Editorial Homepage**
  * *Components:* Flyout Hierarchy Menus, Masonry/Magazine Grid Layout, Breaking News Alert Banner (Sticky).
* **Article Page**
  * *Components:* Rich Typography Engine, Avatar/Byline, Blockquotes, Inline Image Captions, Share Buttons (Sticky Sidebar).

---

## 5. Streaming / Media UI
**Archetype Examples:** [Netflix](https://netflix.com), [Spotify](https://spotify.com)

### Page Tree & Component Mapping
* **Browse Interface**
  * *Components:* Infinite Horizontal Carousels, Auto-playing Video Hero, Dark-mode forced tokens.
* **Detail Modal / Player**
  * *Components:* Fullscreen Modal/Overlay, Custom Video/Audio Player UI, Progress Trackers, Play/Pause/Volume Controls.

---

## 6. Government Service
**Archetype Examples:** [Gov.uk](https://gov.uk), [USA.gov](https://usa.gov)

### Page Tree & Component Mapping
* **Service Homepage**
  * *Components:* High-contrast Main Nav, Prominent Search, Task-oriented Link Lists, Breadcrumbs.
* **Multi-Step Application Form**
  * *Components:* Step Progress Indicator (Stepper), Complex Form Inputs (Date Pickers, File Uploads with Drag & Drop), Form Validation Messages, Help Tooltips / Callouts.

---

## 7. System Monitoring Dashboard
**Archetype Examples:** [Datadog](https://datadoghq.com), [Grafana](https://grafana.com)

### Page Tree & Component Mapping
* **Real-time Overview**
  * *Components:* Status Badges (Red/Green/Yellow), Live TimeSeries Charts (Canvas/SVG), Gauge Charts.
* **Logs & Alerts Explorer**
  * *Components:* Splittable Layout Panes (Resizable Columns), High-density Data Grids, Command Palette (for quick jump navigation), Toast Notifications stream.

---

## 📦 Missing Component Backlog
*Derived from the requirements above. Items already built (like Navigation, Toasts) are omitted.*

### Layouts & Composition
- [x] Masonry / Complex Grid Engine (News)
- [x] Splittable Layout Panes / Resizable Columns (Dashboard)
- [x] "On this page" Table of Contents Scrollspy (Docs)

### Complex UI
- [x] Image Gallery with Lightbox/Zoom (E-commerce)
- [x] Infinite Horizontal Carousel (Streaming)
- [x] Video/Audio Player Custom UI Wrapper (Streaming)
- [x] Command Palette / Omni-Search Overlay (Docs/Dashboard)
- [x] Interactive Step Progress Indicator (Government)

### Data Display
- [x] Data Grids / Complex Tables (Sorting, Filtering, Pagination) (SaaS, Dashboard)
- [x] Rich Text Editor (CMS, Dashboard)
- [x] Metric / Stat Cards (SaaS, Dashboard)
- [x] Pricing Cards (SaaS)
- [x] Star Rating Component (E-commerce)

### Advanced Form Inputs
- [x] Range Multi-Slider (E-commerce Filters)
- [x] Advanced Date Picker / Calendar (Government)
- [ ] Quantity Stepper (E-commerce)
- [ ] File Upload with Drag & Drop Zone (Government)

### Typography & Informational
- [x] Code Syntax Highlighter / Block (Docs)
- [x] Breaking News / Sticky Alert Banner (News)
