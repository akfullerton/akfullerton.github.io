# Change 2 — Curated INDEX page plan

## Objective

Add a top-level `/index/` page to the portfolio: a personal directory of 25 recommendations, presented as one continuous, carefully typeset list.

## Page design

- Give the page a distinct dark Swiss-inspired visual style: near-black background, warm-white text, muted secondary text, thin rules, and a restrained red accent.
- Keep the page sparse, with an `INDEX` title, the range `001—025`, and the kicker “A PERSONAL INDEX.”
- Use Helvetica Neue, Helvetica, or Arial, with hierarchy from scale, weight, spacing, capitalization, and alignment.
- Present the recommendations as one continuous numbered list. Do not use cards, images, category sections, filters, or a mood-board layout.
- Arrange each desktop row as number, category, title and metadata, descriptor, and external-link arrow, aligned to a shared grid.
- Make each entire row an external link that opens in a new tab with `noopener noreferrer`.
- Reveal the descriptor and arrow subtly on hover and keyboard focus. On mobile, place the descriptor below the title and keep rows easy to tap without horizontal overflow.
- Use semantic list and link markup, visible focus states, readable contrast, and reduced-motion support.
- End with `025 ITEMS / UPDATED 2026` and `MORE SOON.`

## Shared navigation

- Add an INDEX link at the far right of the shared navigation, after LinkedIn.
- Mark INDEX as the active page when `/index/` is open.

## Data and curation

Store entries in reusable structured data. Each entry should contain a sequential number, category, title, optional metadata, a concise descriptor, and a direct URL.

Use these recommendations in this order:

1. **RECORD — Continuum** · John Mayer · “perfect front-to-back album”
2. **RECORD — Here Comes Everybody** · Spacey Jane · “big, sharp, no skips”
3. **RECORD — Light, Dark, Light Again** · Angie McMahon · “beautifully built record”
4. **PRODUCT — Flighty** · iOS · “travel app benchmark”
5. **OBJECT — Tokuten** · Onitsuka Tiger · “better than Sambas”
6. **OBJECT — John Mayer Stratocaster** · Fender · “the best guitar I’ve ever owned”
7. **CLOTHING — GIM CONTEXT** · Seoul · “quiet, precise clothing”
8. **BAR — Nightfly** · Tokyo · “my favorite listening bar”
9. **RESTAURANT — Katsudon-ya Zuicho** · Tokyo · “one of my favorite restaurants”
10. **FOOD — Bún chả** · Hanoi · “smoke, herbs, memory”
11. **HOTEL — Dusit Thani Kyoto** · Kyoto · “favorite day that year”
12. **PLACE — Le Marais** · Paris · “the walkable ideal”
13. **PLACE — Sea Ranch** · California · “my favorite stretch of CA coast”
14. **RESTAURANT — Rintaro** · San Francisco · “Bay Area favorite”
15. **RESTAURANT — Snail Bar** · Oakland · “natural wine, done right”
16. **RESTAURANT — June’s Pizza** · Oakland · “neighborhood pizza benchmark”
17. **RESTAURANT — Dudley Market** · Venice · “beach-neighborhood seafood”
18. **RESTAURANT — Saffy’s** · Los Angeles · “warm, loud, perfect energy”
19. **RESTAURANT — Holbox** · Los Angeles · “seafood worth traveling for”
20. **RESTAURANT — Nón Lá** · New York · “Vietnamese in the East Village”
21. **BAR — Little Branch** · New York · “classic basement cocktail bar”
22. **RESTAURANT — Claud** · New York · “tiny downtown bistro”
23. **RESTAURANT — Pho 75** · Arlington · “the benchmark bowl”
24. **RESTAURANT — Kogiya** · Annandale · “Annandale essential”
25. **RESTAURANT — Le Diplomate** · Washington, DC · “brasserie done exactly right”

Apply these curation requirements:

- Remove Oura Ring and Tokyo Konbini.
- Replace Yosemite with Sea Ranch and link it to `https://www.sonomacounty.com/cities/the-sea-ranch/`.
- Add Nightfly with `https://maps.app.goo.gl/CvtDMdL9uEchtCVV8`.
- Add Katsudon-ya Zuicho with `https://maps.app.goo.gl/W4s3KEypjky1pZ4q7`.
- Use `https://www.seriouseats.com/bun-cha-hanoi-recipe-8421208` for Bún chả.
- Keep the list at 25 entries and number it consecutively from `001` to `025`.

## Implementation plan

1. Add the recommendation data with the specified order, metadata, descriptors, and direct URLs.
2. Add the `/index/` page using the shared site layout and the dedicated dark theme.
3. Add the INDEX navigation link and active-page state.
4. Implement the responsive row layout, link behavior, hover/focus treatment, and footer.
5. Verify the Jekyll build, 25 sequential entries, destinations, mobile layout, keyboard access, and reduced-motion behavior.

## Acceptance criteria

- `/index/` renders exactly 25 recommendations in the specified order and numbering.
- Every row is a complete, safe external link with the requested destination.
- Desktop and mobile layouts remain readable, aligned, accessible, and free of horizontal overflow.
- INDEX-specific styling remains scoped to this page.
- The planning file stays in the repository but is excluded from generated site output.
