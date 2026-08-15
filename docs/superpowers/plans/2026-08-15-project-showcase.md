# Project Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Replace the generic projects page with a professional showcase for six live website projects.

**Architecture:** Keep project content in `src/data/portfolio.ts` and render it through the existing server-rendered `/projects` page. Use Tailwind utilities only, matching the current white, midnight navy, and aquamarine palette.

**Tech Stack:** Next.js App Router, React Server Components, TypeScript, Tailwind CSS, Vitest.

## Global Constraints

- Read the local Next.js docs in `node_modules/next/dist/docs/` before code edits.
- Use the App Router `page.tsx` route convention.
- Keep aquamarine scoped to buttons and approved button interactions.
- Avoid new dependencies.
- Verify with `npm test`, `npm run lint`, `npm run build`, and route smoke checks.

---

### Task 1: Project Data

**Files:**
- Modify: `src/data/portfolio.ts`
- Test: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Produces: `projects: Project[]` with `title`, `description`, `impact`, `stack`, `links`, `category`, `year`, `role`, and `url`.
- Consumes: Existing pages use `Project` and `projects`.

- [x] **Step 1: Write the failing test**

```tsx
expect(projects).toHaveLength(6)
expect(projects.map((project) => project.url)).toEqual(
  expect.arrayContaining([
    "https://www.followmetothesea.com/",
    "https://www.877junkyjo.com/",
    "https://new-abs-website.vercel.app/",
    "https://www.sandseamedia.com/",
    "https://www.therapycloud.com/",
    "https://www.sydenpro.org/",
  ]),
)
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm test -- src/__tests__/portfolio.test.tsx`
Expected: FAIL because the current project list has three generic entries.

- [x] **Step 3: Update project type and data**

Add the new fields to `Project` and replace the generic projects with the six live project entries.

- [x] **Step 4: Run test to verify it passes**

Run: `npm test -- src/__tests__/portfolio.test.tsx`
Expected: PASS.

### Task 2: Projects Page Showcase

**Files:**
- Modify: `src/app/projects/page.tsx`
- Test: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Consumes: `projects[0]` as the featured project and `projects.slice(1)` for the grid.
- Produces: A `/projects` page with summary stats, featured case study, project grid, and external links.

- [x] **Step 1: Write the failing test**

```tsx
render(<ProjectsPage />)
expect(screen.getByText("6 Live Projects")).toBeInTheDocument()
expect(screen.getByText("Featured case study")).toBeInTheDocument()
expect(screen.getAllByRole("link", { name: "Visit site" })).toHaveLength(6)
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm test -- src/__tests__/portfolio.test.tsx`
Expected: FAIL because the current page has only a simple three-card index.

- [x] **Step 3: Redesign the page**

Render a top summary band, a large first project panel, and a responsive grid for the remaining projects.

- [x] **Step 4: Run test to verify it passes**

Run: `npm test -- src/__tests__/portfolio.test.tsx`
Expected: PASS.

