# AI Activity Atlas

A buildless web app. GitHub Pages serves the main branch root.

## Structure

- `graph.js`: sample node metadata and undirected graph edges. Shared AI nodes retain one identity across projects.
- `app.js`: radial layout, history stack, interruptible requestAnimationFrame interpolation. Default motion: 400 ms, cubic easing; respects reduced motion. New navigation cancels the old animation and continues from current positions.
- `style.css`: responsive touch targets (76 px minimum node diameter), mobile layout, system fonts.
- `index.html`: semantic controls and accessible live announcement.

No external dependencies, secrets, API calls, private business data or actual conversation data. All graph data is fictional operational sample data.

## Validation — 2026-10-31

Chrome: direct circle clicks, center movement and enlargement, related-node expansion, multiple hops via shared Codex node, back, home, and back/home inputs during motion. Responsive checks at 390×844 and 820×1180. GitHub Pages HTTPS page loaded successfully.

Not yet verified: physical iPhone/iPad, Safari engine, native touch latency and frame rate. Responsive Chrome checks do not substitute for Safari device testing.

## Extend

Add nodes and edges in graph.js. Keep graph ingestion separate from rendering. Integrations and automatic updates are deliberately outside this prototype.
