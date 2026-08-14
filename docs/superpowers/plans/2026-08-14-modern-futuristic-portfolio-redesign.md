# Modern Futuristic Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the existing portfolio pages into a more engaging, professional, subtly futuristic layout.

**Architecture:** Keep the Next.js App Router structure and portfolio data unchanged. Add small reusable layout components for repeated page headers and stat cards, then update the home and interior pages with stronger hierarchy, structured cards, and navy/aquamarine brand styling.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Vitest, React Testing Library.

## Global Constraints

- Keep existing routes: `/`, `/projects`, `/experience`, `/skills`, `/contact`.
- Keep white page background.
- Use midnight navy `#0B1D3A` for headings, navigation, borders, text, and panels.
- Use aquamarine `#7FFFD4` only for primary button styling.
- Do not add new dependencies or external assets.
- Do not change the portfolio content meaning or data shape unless required for display.
- Verify with `npm test`, `npm run lint`, `npm run build`, and route checks.

---

## File Structure

- Modify `src/__tests__/portfolio.test.tsx` for new home and page landmark assertions.
- Create `src/components/page-header.tsx` for consistent interior page headers.
- Create `src/components/stat-card.tsx` for compact metrics and hero stats.
- Modify `src/app/page.tsx` for the upgraded hero and profile console.
- Modify `src/app/projects/page.tsx` for richer project cards.
- Modify `src/app/experience/page.tsx` for timeline styling.
- Modify `src/app/skills/page.tsx` for cleaner skill grouping.
- Modify `src/app/contact/page.tsx` for a stronger contact panel.

---

### Task 1: Add Redesign Tests

**Files:**
- Modify: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Consumes: existing page components
- Produces: tests asserting visible redesign landmarks

- [ ] **Step 1: Add home redesign assertions**

Add assertions that the home page renders `Portfolio console`, `4+ Years`, `Web + Multimedia`, and `Remote-ready`.

- [ ] **Step 2: Add interior redesign assertions**

Add assertions that projects render `Project index`, experience renders `Career timeline`, skills renders `Capability matrix`, and contact renders `Availability signal`.

- [ ] **Step 3: Verify red**

Run `npm test`; expected failure because these redesigned landmarks do not exist yet.

---

### Task 2: Add Reusable Layout Components

**Files:**
- Create: `src/components/page-header.tsx`
- Create: `src/components/stat-card.tsx`

**Interfaces:**
- Produces `PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string })`
- Produces `StatCard({ label, value, detail }: { label: string; value: string; detail: string })`

- [ ] **Step 1: Create page header**

Implement a reusable header with uppercase eyebrow, large title, description, and subtle navy divider.

- [ ] **Step 2: Create stat card**

Implement a compact card for numeric/profile metrics with strong value text and quiet detail copy.

---

### Task 3: Redesign Home Page

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `profile`, `projects`, `skillGroups`, `FeaturedProjectCard`, `StatCard`
- Produces: home route with hero, stats, and profile console

- [ ] **Step 1: Update hero**

Render role badges, large profile headline, summary, primary CTA using `bg-brand-button`, secondary CTA with navy outline, and stat cards.

- [ ] **Step 2: Update profile console**

Render `Portfolio console`, featured project, core skills, and contact signal in a bordered navy-accented panel.

- [ ] **Step 3: Verify task**

Run `npm test`; expected redesigned home tests pass.

---

### Task 4: Redesign Interior Pages

**Files:**
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/experience/page.tsx`
- Modify: `src/app/skills/page.tsx`
- Modify: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: `PageHeader`, portfolio data
- Produces: redesigned interior routes

- [ ] **Step 1: Projects page**

Use `PageHeader` with `Project index`, then render project cards with numbered labels, stronger spacing, stack tags, and impact callouts.

- [ ] **Step 2: Experience page**

Use `PageHeader` with `Career timeline`, then render timeline entries with left rail markers and education in a separate panel.

- [ ] **Step 3: Skills page**

Use `PageHeader` with `Capability matrix`, then render skill cards with category numbers and dense skill tags.

- [ ] **Step 4: Contact page**

Use `PageHeader` with `Availability signal`, then render email and phone as strong action rows.

- [ ] **Step 5: Verify task**

Run `npm test`; expected all redesign tests pass.

---

### Task 5: Final Verification

**Files:**
- Review all modified files

**Interfaces:**
- Produces verified, committed redesign

- [ ] **Step 1: Run tests**

Run `npm test`.

- [ ] **Step 2: Run lint**

Run `npm run lint`.

- [ ] **Step 3: Run production build**

Run `npm run build`.

- [ ] **Step 4: Check routes**

Run HTTP checks for `/`, `/projects`, `/experience`, `/skills`, and `/contact`.

- [ ] **Step 5: Commit**

Commit with message `feat: redesign portfolio layout`.
