# Modern Futuristic Portfolio Redesign

Date: 2026-08-14

## Goal

Make the existing portfolio website feel more engaging, polished, and professional while keeping the current Next.js routes, portfolio content, and two-color brand direction.

## Visual Direction

Use a modern editorial layout with subtle futuristic cues. The design should feel credible for recruiters and clients, not like a flashy landing page.

Color usage:

- Midnight navy `#0B1D3A` for navigation, headings, strong text, borders, panels, and most interface details.
- Aquamarine `#7FFFD4` only for primary button styling.
- White for the page background and main surfaces.
- Navy opacity tints for soft panels, chips, dividers, and hover states.

## Home Page

Upgrade the home page into a stronger portfolio entry point:

- Large modern headline using the profile name and role.
- Compact role/status badges.
- Primary calls to action for projects and contact.
- Quick stats showing experience, specialty, and work style.
- A right-side profile console with featured project and core skills.

## Interior Pages

Keep the existing separate routes:

- `/projects`
- `/experience`
- `/skills`
- `/contact`

Improve each page with stronger section headers, more structured spacing, better card hierarchy, and subtle interface details. Experience should read like a professional timeline. Skills should be easier to scan. Contact should feel like a polished action panel, not a placeholder.

## Typography and Layout

Use the existing Next.js font setup, but make typography feel more modern through scale, uppercase labels, tighter structured sections, and deliberate spacing. Do not introduce a new font dependency for this pass.

## Testing and Verification

Update tests to cover key redesign landmarks:

- Home page renders quick stats and profile console.
- Experience page renders timeline section details.
- Contact page still renders email and phone links.
- Brand test continues to enforce white background, midnight navy, and aquamarine button-only usage.

Run `npm test`, `npm run lint`, `npm run build`, and route checks for `/`, `/projects`, `/experience`, `/skills`, and `/contact`.
