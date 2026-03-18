---
title: "Credits & Dependencies"
description: "Acknowledgments for open-source software and third-party content providers."
menu:
  main:
    parent: "overview"
    weight: 95
---

Aurora Design System is built upon and benefits from the tremendous work of the open-source community. Below is a comprehensive list of technical libraries and content APIs utilized across our documentation and archetype showcases.

## Technical Dependencies (OSS)

These libraries power the core functionality, interactive components, and builds of the design system:

- **[Hugo](https://gohugo.io/)**: The world’s fastest framework for building websites. Powers our entire static documentation site.
- **[Apache ECharts](https://echarts.apache.org/)**: A powerful, interactive charting and data visualization library. Sourced via `esm.sh` for all our dashboard and chart components.
- **[MapLibre GL JS](https://maplibre.org/)**: A WebGL-powered map rendering library used by our interactive `AuroraMap` component.
- **[html5-qrcode](https://github.com/mebjas/html5-qrcode)**: A lightweight HTML5 QR code scanner library used in our camera-based scanning components.
- **[EasyQRCodeJS](https://github.com/ushelp/EasyQRCodeJS)**: A robust cross-browser QR code generation library used for rendering dynamic codes in the UI.
- **[Playwright](https://playwright.dev/)**: Used internally for our end-to-end component testing and automated thumbnail generation.

## Content Dependencies (Media & APIs)

To make our component showcases and archetypes feel realistic, we source placeholder data, imagery, and media from the following invaluable public services:

- **[Unsplash](https://unsplash.com/)**: High-resolution, royalty-free photography. Used extensively for hero banners, card thumbnails, and image hotspots.
- **[Pravatar](https://i.pravatar.cc/)**: An open-source API for generating placeholder user avatars, used across our identity and discussion components.
- **[Picsum Photos](https://picsum.photos/)**: A fast image placeholder service used for generic layout testing and the image splitter component.
- **[DummyJSON](https://dummyjson.com/)**: A free REST API providing mock product and user data, utilized in our Data Tables and Faceted Search patterns.
- **[Carto Basemaps](https://carto.com/basemaps/)**: Open-source, Light (Positron) and Dark (Dark Matter) map tiles used as the visual foundation for our interactive mapping component.
- **[IP-API](http://ip-api.com/)**: A geolocation API used by our Map component to demonstrate IP-based auto-centering (`data-auto-locate="ip"`).
- **Blender Open Movies**: We use sample `.mp4` files (such as *Big Buck Bunny*, *Elephants Dream*, *Sintel*, and *Tears of Steel*) hosted by Google Cloud to demonstrate our custom Video Player layouts.
- **[MDN Web Docs](https://developer.mozilla.org/)**: Sample `.mp3` audio files are used to demonstrate our media playback capabilities.
