# Portfolio Site Plan

## Goal

Build a publish-ready personal portfolio for **Andrew Khoi Fullerton** as a static Jekyll user site at `akfullerton.github.io`. The repository root will contain the complete site and will be ready for GitHub Pages to publish from `main` and `/ (root)`.

## Pages and content

- **Home** — direct strategy / product / operations positioning and a numbered index of three selected projects.
- **Work** — concise PG&E, Monotone, and Automagent project summaries, with earlier entertainment roles listed briefly.
- **About** — the transition from music talent management to product and customer strategy, plus a short outside-work note.
- **Resume** — a print-friendly summary of experience and education, without personal email or phone.

Keep statements and metrics grounded in the supplied résumé and redesign brief. Do not invent employers, outcomes, dates, or biography details.

## Visual direction

Use a Swiss-influenced editorial system: Helvetica Neue / Helvetica / Arial, a 12-column grid, black and white with restrained red, bold scale, precise rules, square corners, and generous whitespace. Keep a single light theme. Use semantic HTML, visible focus states, reduced-motion support, and responsive behavior at 375px and 1280px.

## Jekyll structure

- Root-level `index.md`, page Markdown files, `_config.yml`, `_layouts`, `_includes`, and `assets`
- Reusable default/page layouts and shared header/footer/navigation includes
- YAML front matter with content kept in Markdown and design kept in layouts/CSS
- SEO metadata, canonical URL, sitemap, favicon, and GitHub Pages-compatible configuration
- No backend, database, CMS, contact-form service, framework app, tracker, or unnecessary dependency

## Assumptions

- GitHub username: `akfullerton`
- Production URL: `https://akfullerton.github.io`
- LinkedIn is the primary public contact link; GitHub remains in the footer.
- The résumé’s phone number and email address stay private because a public mailto link was declined.
- The two supplied websites guide the visual direction only; their copy, images, and assets will not be copied.

## Verification before delivery

Check that:

1. The repository root contains the full Jekyll site, with no nested application folder.
2. Work, About, Resume, and LinkedIn navigation, internal URL filters, sitemap, favicon, and external links work.
3. The site is suitable for GitHub Pages from `main` and `/ (root)`.
4. Layout and contrast hold at 375px and 1280px.
5. Lighthouse is targeted at 90+ for Performance, Accessibility, Best Practices, and SEO.