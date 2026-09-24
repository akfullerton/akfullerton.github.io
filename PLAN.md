# Portfolio Site Plan

## Goal

Build a publish-ready personal portfolio for **Andrew Khoi Fullerton** as a static Jekyll user site at `akfullerton.github.io`. The repository root will contain the complete site and will be ready for GitHub Pages to publish from `main` and `/ (root)`.

## Pages and content

- **Home** — concise positioning around strategy, technology, entertainment, and energy transition, with links into the site.
- **About** — education, interests, tools, language, and a short narrative based only on the supplied résumé.
- **Work Experience** — PG&E Strategy & Innovation, Monotone, Inc., and prior entertainment experience, with supplied outcomes and metrics preserved accurately.
- **Contact** — LinkedIn link and a clear invitation to connect; no public email address or phone number.

No employers, clients, achievements, metrics, projects, or biography details will be invented. Anything still needed for the finished presentation, such as an optional portrait, will remain a clearly labeled placeholder or be omitted.

## Visual direction

Use a clean, modern single-column layout with editorial typography, generous spacing, strong hierarchy, and restrained visual elements. The reference sites suggest an art-directed but usable feel: confident type, clear section rhythm, and a limited palette rather than a conventional résumé template.

Implement both light and dark themes with accessible contrast. Use semantic HTML, visible focus states, responsive behavior at 375px and 1280px, and a minimal theme-toggle script with a no-JavaScript-friendly default.

## Jekyll structure

- Root-level `index.md`, page Markdown files, `_config.yml`, `_layouts`, `_includes`, and `assets`
- Reusable default/page layouts and shared header/footer/navigation includes
- YAML front matter with content kept in Markdown and design kept in layouts/CSS
- SEO metadata, canonical URL, sitemap, favicon, and GitHub Pages-compatible configuration
- No backend, database, CMS, contact-form service, framework app, tracker, or unnecessary dependency

## Assumptions

- GitHub username: `akfullerton`
- Production URL: `https://akfullerton.github.io`
- LinkedIn is the public contact link.
- The résumé’s phone number and email address stay private because a public mailto link was declined.
- The two supplied websites guide the visual direction only; their copy, images, and assets will not be copied.

## Verification before delivery

Check that:

1. The repository root contains the full Jekyll site, with no nested application folder.
2. Navigation, internal URL filters, sitemap, favicon, and external links work.
3. The site is suitable for GitHub Pages from `main` and `/ (root)`.
4. Layout and contrast hold at 375px and 1280px.
5. Lighthouse is targeted at 90+ for Performance, Accessibility, Best Practices, and SEO.