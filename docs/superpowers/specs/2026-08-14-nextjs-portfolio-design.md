# Next.js Portfolio Website Design

Date: 2026-08-14

## Goal

Create a modern personal portfolio website using Next.js. The first version should establish a clean project foundation with separate pages for portfolio content, reusable layout pieces, responsive styling, and placeholder content that can be replaced with real details later.

## Scope

The initial site will include:

- Home page at `/`
- Projects page at `/projects`
- Experience page at `/experience`
- Skills page at `/skills`
- Contact page at `/contact`
- Shared navigation, layout, and footer
- Responsive styling suitable for desktop and mobile
- Placeholder portfolio content for easy editing

The initial site will not include a CMS, database, authentication, blog, analytics, or contact form backend. Those can be added later after the core portfolio is working.

## Architecture

Use a standard Next.js App Router project with TypeScript and Tailwind CSS.

Expected structure:

- `src/app/layout.tsx` for global layout and metadata
- `src/app/page.tsx` for the home page
- `src/app/projects/page.tsx` for project showcases
- `src/app/experience/page.tsx` for work and education history
- `src/app/skills/page.tsx` for skills grouped by category
- `src/app/contact/page.tsx` for contact details and calls to action
- `src/components/` for shared UI such as navigation and footer
- `src/data/portfolio.ts` for editable portfolio placeholder data

## User Experience

The site should feel professional, clear, and easy to scan. The home page should introduce the portfolio owner immediately, then direct visitors toward projects, experience, skills, and contact. Navigation should remain simple and visible across pages.

The visual style should be modern but restrained: readable typography, strong spacing, responsive layouts, and a portfolio-focused color palette rather than a generic marketing page. Pages should prioritize the actual content over decorative copy.

## Content Model

Use placeholder content for:

- Name and professional headline
- Short personal introduction
- Featured projects
- Experience entries
- Skill groups
- Contact links

The placeholder content should be easy to locate and replace. Store portfolio entries in `src/data/portfolio.ts` so page components stay focused on layout.

## Error Handling and Empty States

Because the first version uses static placeholder content, there are no runtime data fetch failures to handle. Pages should avoid brittle assumptions and render cleanly even when lists have only a few items.

## Testing and Verification

After setup and implementation:

- Run the project lint command if available
- Run a production build if dependencies install successfully
- Start the local dev server and provide the local URL
- Check that each route loads: `/`, `/projects`, `/experience`, `/skills`, `/contact`

## Open Decisions

Use the recommended foundation: a Next.js App Router portfolio with separate pages, TypeScript, Tailwind CSS, ESLint, shared layout components, and simple placeholder content.
