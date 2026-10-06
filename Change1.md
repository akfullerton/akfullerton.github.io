# Change 1 — Portfolio redesign plan (`design2`)

## Objective

Redesign the existing, functional static Jekyll portfolio to make it more concise, confident, modern, and Swiss-influenced. Preserve the established site structure and reuse its code wherever practical; do not rebuild the site or introduce unnecessary frameworks.

## Starting conditions

- The existing portfolio and page structure are in place.
- The supplied résumé is the source of truth for experience, dates, metrics, and personal details.
- Keep the site suitable for its existing static-site publishing setup.

## Goals

### 1. Establish a focused visual system

- Use Helvetica Neue, Helvetica, or Arial throughout.
- Use a mostly white or lightly warm-white background, near-black text, and one restrained red accent.
- Build a consistent desktop grid with precise alignment, generous whitespace, and thin horizontal rules.
- Use large, confident typography and create hierarchy through size, weight, spacing, capitalization, and grid placement.
- Favor square corners and minimal decoration.
- Avoid serif typography, decorative italics, rounded cards, shadows, pills, floating elements, unnecessary icons, soft visual treatments, and generic startup or SaaS styling.
- Carry the system consistently across Home, Work, About, and Resume.

### 2. Simplify navigation and shared page elements

- Keep the primary navigation focused on Work, About, Resume, and LinkedIn.
- Make the wordmark return to Home.
- Remove Contact from the primary navigation; retain contact information in About or the footer where appropriate.
- Remove the theme toggle if it distracts from a single, considered light-mode design.
- Do not add sections simply to make the site feel more substantial.

### 3. Make Home communicate the portfolio’s focus quickly

- Lead with Andrew Khoi Fullerton’s name and the metadata “STRATEGY / PRODUCT / OPERATIONS.”
- Use the direct headline: “I make complicated businesses easier to use and easier to run.”
- Keep the supporting background concise: Berkeley Haas, experience across entertainment, technology, and customer strategy, and four years in music talent management.
- Remove the redundant “Current focus / Turning ambiguity into a way forward” section.
- Move quickly from the hero into Selected Work.
- Feature PG&E and Monotone on Home; keep Automagent on Work.
- Give the two selected projects equal visual weight. Use concise roles, specific contributions, and concrete outcomes rather than long paragraphs or generic descriptions.

### 4. Tighten Work and keep claims specific

- Keep the strongest facts while reducing résumé-like repetition.
- Give each role or project a short framing sentence and no more than two to four strong accomplishments.
- Prioritize numbers, decisions, scope, and outcomes. Remove generic responsibility statements and repeated claims about collaboration, strategy, ambiguity, systems, and stakeholders.
- For Monotone, emphasize approximately four years in talent management; coordination across artists, labels, agents, publishers, touring, marketing, publicists, and partners; Spacey Jane’s #1 Australian album, 100M+ streams, and sold-out tours; the Jamie Foxx / Netflix *Day Shift* surprise release; merchandise growth to approximately $400K where relevant; and the operational complexity of the role.
- For PG&E, show that strategy/program work continued after the internship rather than implying the role ended with a summer internship.
- Present Automagent as product exploration grounded in customer discovery and market, product, and workflow definition—not as “in progress.”
- Align Work-page metric numbers vertically with their descriptions.

### 5. Make About personal, concise, and factual

- Replace vague language about “systems behind the experience,” “creative energy,” and “building with intent.”
- Explain the thread from music and artist management, through operating complex projects, to Berkeley Haas and product, technology, and customer strategy.
- Keep the page personal without making it read like a cover letter.
- Keep Outside Work short and more playful. Describe confirmed interests such as Vietnamese cooking and dinner hosting, live music, tennis, and skiing.
- Do not include Travel or “Energy transition” in Outside Work.
- If the Jack White / Jack Black anecdote is used, keep it résumé-accurate: Andrew once saw Jack Black meet Jack White.

### 6. Apply consistent writing and interaction standards

- Prefer concrete language, specific facts, short sentences, strong verbs, numbers, outcomes, and a little personality.
- Avoid generic portfolio language and excessive use of terms such as “intersection,” “ambiguity,” “systems,” “human,” “experiences,” “intentional,” “meaningful,” “dynamic,” “thoughtful,” “strategic,” “passion,” and “storytelling.”
- Let the work demonstrate personality instead of explaining it to the reader.
- Keep interactions subtle: small opacity changes, restrained rule or text movement, and no parallax, cursor gimmicks, floating animations, or large transitions.
- Preserve semantic HTML, keyboard navigation, visible focus, readable contrast, reduced-motion support, and responsive behavior.
- Keep mobile layouts deliberate, readable, and free of horizontal overflow.

## Implementation plan

1. Inspect the existing Jekyll structure and identify content and styles to retain.
2. Establish shared typography, color, spacing, grid, and rule treatments.
3. Simplify the shared header, navigation, and footer/contact treatment.
4. Rewrite the Home hero, remove redundant content, and refine the two selected projects.
5. Compress the Work page while preserving résumé-grounded facts and outcomes.
6. Rewrite About and shorten Outside Work without inventing personal details.
7. Review the Resume page for consistency with the shared visual system and print-friendly use.
8. Check visual consistency, keyboard behavior, reduced motion, readability, and responsive layouts.

## Acceptance criteria

- Home communicates Andrew’s focus within a few seconds and leads quickly to relevant work.
- Home features PG&E and Monotone with clear, specific contributions and outcomes.
- Work emphasizes meaningful scope and results rather than generic duties.
- About clearly connects music management, operating experience, business school, and product/customer strategy.
- The visual system is concise, restrained, accessible, and consistent across the portfolio.
- The existing static Jekyll approach remains intact, without unnecessary frameworks or added sections.
