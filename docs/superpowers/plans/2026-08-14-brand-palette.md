# Brand Palette Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved brand colors across the existing Next.js portfolio.

**Architecture:** Define the four approved colors as global Tailwind theme tokens in `src/app/globals.css`, then replace page/component color utilities with those tokens. Keep content, routing, and data structures unchanged.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Vitest.

## Global Constraints

- Use `#321E48` as the deep purple brand ink.
- Use `#43637E` as the muted blue secondary color.
- Use `#65DCD5` as the aqua accent color.
- Use `#D9FFF4` as the mint surface color.
- Do not change portfolio content, routes, data shape, or project dependencies for this styling task.
- Verify with `npm test`, `npm run lint`, `npm run build`, and route checks.

---

### Task 1: Add Brand Theme Tokens

**Files:**
- Modify: `src/app/globals.css`
- Test: `src/__tests__/brand-theme.test.ts`

**Interfaces:**
- Consumes: existing Tailwind global stylesheet
- Produces: CSS variables and Tailwind color tokens named `brand-ink`, `brand-muted`, `brand-accent`, and `brand-surface`

- [ ] **Step 1: Write failing theme test**

Create `src/__tests__/brand-theme.test.ts` that reads `src/app/globals.css` and asserts the four approved hex colors exist.

- [ ] **Step 2: Verify red**

Run `npm test`; expected failure because `#321E48`, `#43637E`, `#65DCD5`, and `#D9FFF4` are not yet defined in global CSS.

- [ ] **Step 3: Add CSS tokens**

Add `--brand-ink`, `--brand-muted`, `--brand-accent`, and `--brand-surface` in `:root`, expose them in `@theme inline`, and update selection color.

- [ ] **Step 4: Verify green**

Run `npm test`; expected pass.

---

### Task 2: Replace Page and Component Color Utilities

**Files:**
- Modify: `src/components/site-header.tsx`
- Modify: `src/components/site-footer.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/experience/page.tsx`
- Modify: `src/app/skills/page.tsx`
- Modify: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: brand Tailwind tokens from Task 1
- Produces: UI styled with the approved brand palette

- [ ] **Step 1: Replace old accent utilities**

Replace teal/amber accents with `brand-accent`, `brand-muted`, and `brand-surface`.

- [ ] **Step 2: Replace dark neutral emphasis**

Use `brand-ink` for headings, footer background, primary text, and strong contrast moments.

- [ ] **Step 3: Verify no old accent classes remain**

Run `rg "teal|amber" src/app src/components`; expected no matches.

- [ ] **Step 4: Verify app**

Run `npm test`, `npm run lint`, `npm run build`, and HTTP checks for `/`, `/projects`, `/experience`, `/skills`, `/contact`.
