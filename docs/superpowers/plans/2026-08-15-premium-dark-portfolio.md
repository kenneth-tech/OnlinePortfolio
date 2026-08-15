# Premium Dark Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio UI into a premium dark, futuristic, professional personal portfolio for Mark Kenneth R. Rillamas.

**Architecture:** Keep the existing Next.js App Router pages and shared components. Update global theme tokens, shared chrome, buttons, cards, and page layouts using Tailwind CSS utilities and no new dependencies.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Vitest.

## Global Constraints

- Use Midnight Navy `#071A2F` as the primary background.
- Use Deep Navy `#0B2545` for secondary sections and cards.
- Use Aquamarine `#7FFFD4` as the strategic accent for buttons, borders, highlights, gradients, and interactive elements.
- Use Soft Aquamarine `#B8FFE8` for subtle highlights.
- Use White `#F5FFFC` for primary text.
- Use Muted Blue-Gray `#9AAFC2` for secondary text.
- Keep the UI premium and refined, avoiding excessive neon effects.
- Focus only on visual design and UI; no backend logic or new dependencies.
- Verify with `npm test`, `npm run lint`, `npm run build`, and route smoke checks.

---

### Task 1: Premium Palette Tests

**Files:**
- Modify: `src/__tests__/brand-theme.test.ts`
- Modify: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Produces tests that expect the approved palette, dark chrome, card surface tokens, soft glow button styling, and premium page labels.

- [x] **Step 1: Update tests**

Add source assertions for the premium color tokens and rendered assertions for premium home/projects labels.

- [x] **Step 2: Run failing tests**

Run: `npm test`
Expected: FAIL because the current UI still uses the simplified white design.

### Task 2: Theme and Shared Components

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/site-header.tsx`
- Modify: `src/components/site-footer.tsx`
- Modify: `src/components/page-header.tsx`
- Modify: `src/components/stat-card.tsx`
- Modify: `src/components/animated-button-link.tsx`

**Interfaces:**
- Produces premium dark theme tokens, dark site chrome, refined buttons, glassy cards, and muted text styling.

- [x] **Step 1: Update global color tokens and dark background**

Define the approved palette and body background with subtle grid/gradient texture.

- [x] **Step 2: Update shared components**

Apply dark glass surfaces, thin aquamarine borders, and refined hover/focus states.

- [x] **Step 3: Run focused tests**

Run: `npm test -- src/__tests__/brand-theme.test.ts`
Expected: PASS after shared component updates.

### Task 3: Page UI Redesign

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/experience/page.tsx`
- Modify: `src/app/skills/page.tsx`
- Modify: `src/app/contact/page.tsx`

**Interfaces:**
- Produces dark premium page sections with refined spacing, cards, timelines, project showcases, and contact panels.

- [x] **Step 1: Redesign home and projects**

Create the premium hero, highlights, selected work, project cards, and featured project surfaces.

- [x] **Step 2: Redesign experience, skills, and contact**

Create premium timeline rows, skill cards, and dark contact surfaces.

- [x] **Step 3: Run all tests**

Run: `npm test`
Expected: PASS after page updates.

### Task 4: Verification and Commit

**Files:**
- All modified files

**Interfaces:**
- Produces verified premium dark UI committed to git.

- [x] **Step 1: Run final verification**

Run `npm test`, `npm run lint`, `npm run build`, and smoke-test local routes.

- [x] **Step 2: Commit**

Commit with message `style: add premium dark portfolio UI`.
