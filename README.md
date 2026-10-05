# Andrew Khoi Fullerton — Portfolio

This repository is the complete static Jekyll site for [akfullerton.github.io](https://akfullerton.github.io).

## Structure

The site is intentionally kept at the repository root for GitHub Pages:

- `index.md`, `about.md`, `experience.md`, and `resume.md` contain page content.
- `_config.yml` contains the Jekyll and site configuration.
- `_layouts` contains the reusable page and home layouts.
- `_includes` contains the shared document head, header, and footer.
- `assets/css` contains the site stylesheet.
- `assets/favicon.svg` is the favicon.
- `sitemap.xml` is generated from the site's pages with Liquid.

There is no backend, database, framework app, contact form service, tracker, or build application.

## Update content

1. Edit the Markdown page you want to change.
2. Keep the YAML front matter between the opening and closing `---` markers.
3. Keep layout and presentation changes in `_layouts`, `_includes`, or `assets/css/style.css`.
4. Use `relative_url` for internal links so the site remains compatible with GitHub Pages base paths.
5. Keep personal email, phone numbers, and résumé source files out of the public repository.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000` in a browser. To build without starting a server:

```sh
bundle exec jekyll build
```

The generated site will be placed in `_site/`.

## Publish with GitHub Pages

In the GitHub repository settings, choose **Pages → Deploy from a branch**, select `main`, and select `/ (root)`. GitHub Pages will build the Jekyll site automatically. The expected user-site URL is `https://akfullerton.github.io`.

## Quality checks

Run `bundle exec jekyll build` before publishing. Check the home, Work, About, and Resume pages at 375px and 1280px widths. Chrome DevTools → Lighthouse can check Performance, Accessibility, Best Practices, and SEO without adding build tooling to the site.