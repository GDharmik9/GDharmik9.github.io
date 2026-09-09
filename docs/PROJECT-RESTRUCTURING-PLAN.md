# Project Restructuring and Performance Plan

## Purpose

Improve the portfolio's folder structure, code reusability, developer experience, and page-load performance without changing existing routes or user-facing behavior.

This plan is intentionally incremental. Each phase must be independently verifiable so that restructuring does not become a large, difficult-to-debug rewrite.

## Current baseline

- Framework: Next.js 15 App Router with TypeScript and Tailwind CSS.
- Deployment: static export for GitHub Pages.
- Active application source: `src/`.
- Main routes:
  - `/`
  - `/projects/[slug]/`
  - `/robots.txt`
  - `/sitemap.xml`
- Static project data is stored in `src/data/projects.ts`.
- Profile data is stored in `src/data/profile.ts`.
- GitHub data is split between `src/lib/github.ts`, `src/components/latest-repos.tsx`, and `src/components/github-analytics.tsx`.
- The homepage currently contains most page sections, contact-form state, and presentation logic in one client component.
- Project detail routes contain both curated case-study rendering and live repository rendering.
- The production build currently succeeds and produces a static export.

## Goals

1. Make responsibilities obvious from folder names.
2. Reduce the amount of code in route files.
3. Separate static server-rendered content from interactive client components.
4. Consolidate GitHub API types, filtering, caching, and fallback behavior.
5. Reduce initial JavaScript and unnecessary hydration.
6. Preserve all existing URLs, static export behavior, and visible functionality.
7. Make future changes easy to test and review.

## Non-goals

- No visual redesign during the restructuring work.
- No changes to the public URL structure.
- No replacement of GitHub Pages static hosting.
- No broad dependency replacement unless bundle measurements justify it.
- No deletion of existing functionality without an explicit decision.

## Target folder structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── robots.txt
│   ├── sitemap.xml
│   └── projects/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── icons/
│   ├── layout/
│   │   ├── footer.tsx
│   │   ├── nav.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── motion/
│   │   ├── reveal.tsx
│   │   └── floating-particles.tsx
│   └── ui/
│       ├── button-link.tsx
│       ├── contact-link.tsx
│       ├── glass-card.tsx
│       ├── section.tsx
│       └── index.ts
│
├── features/
│   ├── contact/
│   │   ├── contact-section.tsx
│   │   └── social-links.tsx
│   ├── github/
│   │   ├── analytics.tsx
│   │   └── repos.tsx
│   ├── home/
│   │   └── hero.tsx
│   ├── profile/
│   │   ├── about.tsx
│   │   ├── achievements.tsx
│   │   ├── experience.tsx
│   │   └── skills.tsx
│   └── projects/
│       └── project-list.tsx
│
├── data/
│   ├── profile.ts
│   └── projects.ts
│
├── lib/
│   ├── github.ts
│   ├── utils.ts
│   └── validation.ts
│
└── types/
    ├── github.ts
    └── project.ts
```

The structure is a target state, not a requirement to move every file in one change. Small components should only be extracted when doing so improves ownership or reuse.

## Implementation phases

### Phase 0: Protect the baseline

Before changing source files:

- Preserve the current branch and working tree state.
- Record the current route list and generated static pages.
- Run the existing type-check and production build.
- Capture the current first-load JavaScript sizes from the build output.
- Keep a clean commit or checkpoint before each migration phase.

### Phase 1: Tooling and documentation hygiene

Make validation reflect source code rather than generated artifacts.

Tasks:

- Configure ESLint to ignore `.next`, `out`, `node_modules`, and other generated files.
- Fix real source lint errors rather than suppressing them.
- Remove unnecessary `@ts-nocheck` directives from route files.
- Fix JSX escaping and unused imports.
- Update `README.md` references from old root paths to `src/data`, `src/components`, and `src/lib`.
- Add or document standard validation commands:
  - type checking
  - linting
  - production build
  - optional audit

Exit criteria:

- Lint reports only source-file issues.
- `npm run typecheck` passes.
- `npm run build` passes.
- No route names or generated paths change.

### Phase 2: Separate static and interactive code

The homepage should become primarily server-rendered. Only components requiring browser APIs, state, effects, or animation should be client components.

Tasks:

- Remove the homepage-level `'use client'` directive where possible.
- Extract contact form state and submission behavior into `features/home/contact-form.tsx`.
- Keep GitHub analytics as a client island with a static fallback.
- Keep latest repositories as a client island with a static/loading state.
- Keep theme provider and theme toggle client-side.
- Move animation wrappers into focused motion components.

Safety requirements:

- Preserve all existing form fields and success/error states.
- Preserve the existing FormSubmit endpoint and fallback email behavior.
- Preserve theme switching and hydration suppression behavior.
- Preserve all anchor IDs used by navigation.

Expected result:

- Less homepage hydration.
- Smaller initial client bundle.
- Static content can render without waiting for browser-side APIs.

### Phase 3: Split route files into feature components

Reduce route files to composition, metadata, and route-specific data loading.

Homepage extraction order:

1. Hero
2. About
3. Skills
4. Projects list
5. GitHub analytics section
6. Experience
7. Achievements
8. Contact
9. Footer

Project-page extraction order:

1. Shared project header
2. Project facts
3. Case-study content
4. Repository detail content
5. Architecture diagram section
6. Feature and learning lists

Keep shared primitives in `components/ui`. Keep domain-specific presentation in `features/`.

### Phase 4: Consolidate GitHub data access

Create one typed GitHub access layer with clear server/build-time and browser responsibilities.

Responsibilities:

- GitHub response types.
- User and repository endpoint construction.
- Repository filtering and sorting.
- Slug generation.
- Browser cache handling.
- Static fallback handling.
- Error handling and rate-limit behavior.

Avoid duplicate requests where possible. Analytics and latest repositories should share request and cache logic instead of independently requesting the same repository list.

The public UI must continue to work when:

- GitHub is unavailable.
- GitHub rate limits are reached.
- local storage is unavailable.
- a repository has incomplete metadata.

### Phase 5: Optimize loading performance

Apply performance changes only after the component boundaries are stable.

Tasks:

- Lazy-load Mermaid because it is needed only on project case-study pages.
- Avoid loading Mermaid on the homepage.
- Replace decorative particle animation with CSS where visual quality remains equivalent.
- Respect `prefers-reduced-motion`.
- Defer GitHub refreshes until idle time or section visibility when appropriate.
- Keep static fallback content available immediately.
- Avoid blocking above-the-fold content on external API requests.
- Use optimized image handling when real project screenshots are added.
- Measure bundle output after every performance change.

Performance targets:

- No increase in homepage first-load JavaScript.
- Reduce homepage hydration work.
- Reduce project-page JavaScript by loading Mermaid only when needed.
- Maintain or improve Core Web Vitals on mobile.

Targets should be verified with build output and browser measurements rather than assumed from source structure alone.

### Phase 6: Documentation and maintainability

Update project documentation after the source structure stabilizes.

Document:

- Where routes belong.
- Where reusable UI primitives belong.
- Where feature-specific components belong.
- Where static profile and project data belong.
- Where external API logic belongs.
- How to add a new project case study.
- How to run validation locally.
- How static export and GitHub Pages deployment work.

## Non-breaking migration rules

For every file move or extraction:

1. Prefer `git mv` so file history is preserved.
2. Preserve existing export names during the first migration.
3. Preserve all route paths and trailing-slash behavior.
4. Preserve existing data shapes until presentation migration is complete.
5. Do not combine folder restructuring with visual redesign.
6. Run type-checking after each logical change.
7. Run a production build before merging each phase.
8. Compare generated files under `out/` before and after route changes.
9. Manually verify the homepage, project pages, theme switching, contact form, GitHub fallbacks, and Mermaid diagrams.
10. Never overwrite unrelated uncommitted work.

## Validation checklist

### Static checks

- [ ] `npm run typecheck`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run audit` when dependency changes are made

### Route checks

- [ ] Homepage loads at `/`.
- [ ] Curated project pages load at `/projects/<slug>/`.
- [ ] Live repository pages still resolve.
- [ ] Unknown projects still use the not-found behavior.
- [ ] Sitemap and robots files remain available.
- [ ] GitHub Pages static export still contains `CNAME` and `.nojekyll`.

### Functional checks

- [ ] Navigation anchors work.
- [ ] Theme toggle works.
- [ ] Contact form validation works.
- [ ] Contact success and error states work.
- [ ] GitHub fallback data renders when requests fail.
- [ ] Latest repository filtering remains unchanged.
- [ ] Mermaid diagrams render on case-study pages.
- [ ] Reduced-motion users receive an acceptable experience.

### Performance checks

- [ ] Compare homepage first-load JavaScript before and after.
- [ ] Compare project-page first-load JavaScript before and after.
- [ ] Confirm Mermaid is not loaded on the homepage.
- [ ] Confirm external GitHub requests do not block first paint.
- [ ] Check mobile layout and interaction performance.

## Rollback strategy

Each phase should be merged as a separate commit or pull request. If a phase introduces a regression:

1. Revert only that phase.
2. Keep the previous validated structure.
3. Identify whether the issue is routing, server/client boundaries, data loading, or styling.
4. Add a focused fix and rerun the complete validation checklist.

Do not roll back unrelated performance or documentation improvements together with a feature migration.

## Recommended execution order

1. Phase 0: baseline checkpoint.
2. Phase 1: lint and documentation hygiene.
3. Phase 2: server/client boundary cleanup.
4. Phase 3: feature component extraction.
5. Phase 4: GitHub data consolidation.
6. Phase 5: measured performance optimization.
7. Phase 6: final documentation and cleanup.
