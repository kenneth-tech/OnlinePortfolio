# Minimal Professional Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio to feel simple, professional, readable, and closer to a polished online CV.

**Architecture:** Keep the existing Next.js App Router pages and shared components. Simplify the visual system through shared header, footer, page header, stat card, and page-level Tailwind classes without adding dependencies.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Vitest.

## Global Constraints

- Use the existing `/`, `/projects`, `/experience`, `/skills`, and `/contact` pages.
- Keep the background white and the palette limited to midnight navy plus aquamarine for buttons.
- Remove heavy console/browser-preview styling, large dark sections, and excessive uppercase treatment.
- Keep all six live project links and existing CV content.
- Verify with `npm test`, `npm run lint`, `npm run build`, and route smoke checks.

---

### Task 1: Tests for Minimal Direction

**Files:**
- Modify: `src/__tests__/portfolio.test.tsx`
- Modify: `src/__tests__/brand-theme.test.ts`

**Interfaces:**
- Produces tests that expect a white navbar/footer, no "Portfolio console", a simpler home "Selected work" section, and simpler project showcase labels.

- [x] **Step 1: Update tests**

Add expectations for "Selected work", "Highlights", "Featured project", and clean white chrome.

- [x] **Step 2: Run tests to verify failure**

Run: `npm test`
Expected: FAIL because the current site still has console/dark-heavy styling and old labels.

### Task 2: Shared Components

**Files:**
- Modify: `src/components/site-header.tsx`
- Modify: `src/components/site-footer.tsx`
- Modify: `src/components/page-header.tsx`
- Modify: `src/components/stat-card.tsx`
- Modify: `src/components/animated-button-link.tsx`

**Interfaces:**
- Produces calmer shared UI primitives for every page.

- [x] **Step 1: Simplify shared components**

Use white chrome, smaller typography, plain borders, restrained focus states, and no dark footer/header.

- [x] **Step 2: Run focused tests**

Run: `npm test -- src/__tests__/brand-theme.test.ts`
Expected: PASS after component updates.

### Task 3: Page Redesign

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/experience/page.tsx`
- Modify: `src/app/skills/page.tsx`
- Modify: `src/app/contact/page.tsx`

**Interfaces:**
- Produces simpler, scan-friendly page layouts using existing data arrays.

- [x] **Step 1: Simplify pages**

Remove dark panels, console/browser-preview styling, excessive uppercase text, and heavy shadows. Keep content readable and organized.

- [x] **Step 2: Run tests**

Run: `npm test`
Expected: PASS after page updates.

### Task 4: Verification

**Files:**
- All modified files

**Interfaces:**
- Produces a verified, committed redesign.

- [x] **Step 1: Run final checks**

Run `npm test`, `npm run lint`, `npm run build`, and smoke-test local routes.

- [x] **Step 2: Commit**

Commit with message `style: simplify portfolio design`.
