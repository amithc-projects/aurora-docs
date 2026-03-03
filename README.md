# Aurora Docs

This folder contains the documentation site for a design system, built using **Hugo** (a fast static site generator).

## What is in this folder?
This folder is a complete Hugo project for the Aurora Design System documentation. It includes:
- `content/`: Markdown files that make up the pages of the documentation site.
- `layouts/`: HTML templates and partials used to render the web pages and components.
- `static/`: Static assets like CSS, JavaScript, and images that are served directly.
- `assets/`: Processed assets (like SCSS/CSS) that Hugo builds.
- `hugo.toml`: The main configuration file for the Hugo site.
- Helper scripts (e.g., `add_accordion.sh`, `add_css_filter.sh`) for scaffolding components.

## How do I use it?
You can use this project to write and manage the documentation for the design system. 
You can author new pages by adding or editing Markdown files (`.md`) in the `content/` directory. If you want to change the layout or create new reusable component structures, you can modify the HTML templates inside the `layouts/` directory.

To add new components or pages, you can also use the included shell scripts like `./add_accordion.sh` or `./add_css_filter.sh`.

## How do I preview the components?
To preview the documentation and the components locally:
1. Ensure you have [Hugo](https://gohugo.io/) installed on your machine.
2. Open your terminal, navigate to this directory (`/Users/acabraal/anitgravity/aurora-docs`), and run the following command:
   ```bash
   hugo server
   ```
3. Open your web browser and go to `http://localhost:1313`. The site will automatically reload when you make changes to the files.

## How is Hugo used?
Hugo is used as a static site generator for this documentation. It takes the Markdown content from the `content/` directory, applies the HTML templates found in the `layouts/` directory, and bundles the static assets (from `static/` and `assets/`) to generate a complete, fast static website. It supports raw HTML in Markdown (configured in `hugo.toml`), which allows interactive component demos to be embedded directly into the documentation pages.

## Is the source code for the actual components in this folder?
Yes, the source code for the actual components is located in this folder. 
- **HTML structure/templates** for components can be found in `layouts/partials/` and `layouts/shortcodes/`.
- **CSS styles** are grouped in `static/css/` and `assets/css/`.
- **JavaScript logic** for interactive components (like accordions, galleries, configurators) is located in `static/js/components/` and `static/js/`.
