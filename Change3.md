# Change 3: Simplify navigation and sharpen the home page

## Goal
Why this change matters: the top nav feels cluttered now that a Contact page exists, the page numbers don't match the nav order, the Index page doesn't read as a different kind of page, and the home headline feels generic.

## Planned changes
1. Remove LinkedIn from the top nav (it stays in the footer and on the Contact page).
2. Reorder the nav to: About, Work, Resume, Contact, Index.
3. Style the Index nav link with the site's existing accent color so it stands apart from the main pages.
4. Renumber the page eyebrows to match the nav: About / 01, Work / 02, Resume / 03, Contact / 04. Index has no number.
5. Replace the home headline with "I bring the moving parts together." and the subline with: I’ve spent my career getting people, plans, and ideas to work as one, first in artist management and live entertainment, now in business and customer experience strategy.

## Files affected
- `_includes/header.html` — remove LinkedIn from the nav, set the requested order, and identify the Index link for its accent styling.
- `assets/css/style.css` — style the Index nav link using the existing accent variable and verify contrast and responsive behavior.
- `resume.md` — change the Resume eyebrow from 04 to 03.
- `contact.md` — change the Contact eyebrow from 05 to 04.
- `index.md` — replace the home headline and supporting subline with the requested copy.

The About / 01 and Work / 02 eyebrows already match the requested order, and Index has no page number, so those page files do not need edits. The footer and Contact-page LinkedIn link remain unchanged.

## Success criteria
- The nav shows About, Work, Resume, Contact, Index in that order, and every link works.
- The Index link uses the accent color with accessible contrast in light and dark themes.
- The page numbers match the nav order.
- The new headline and subline display correctly.
- The layout works at 375px and 1280px, with no new dependencies or JavaScript.

## Out of scope
Anything not listed above, including other page content, the footer, and the Selected work section.
