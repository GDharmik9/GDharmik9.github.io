# Ghanshyam Dharmik Portfolio

Premium personal portfolio for **GDharmik9** built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and GitHub Pages static export.

## Highlights

- Modern dark/light portfolio inspired by Vercel, Linear, Stripe, Raycast, and Supabase.
- SEO metadata, Open Graph tags, sitemap, and robots configuration.
- Static project case-study pages generated from curated GitHub repository analysis.
- Client-side GitHub API analytics with static fallback data.
- Accessible responsive UI for mobile, tablet, and desktop.
- GitHub Pages deployment workflow on push to `main` with type-checking, linting, a static build, and an informational npm audit report.

## Local development

```text
npm install
npm run dev
```

Open <http://localhost:3000>.

See [`docs/LOCAL-SETUP.md`](docs/LOCAL-SETUP.md) for Node.js requirements, validation commands, static-export preview instructions, and deployment details.

## Production build

```text
npm run typecheck
npm run lint
npm run build
npm run audit
```

The static site is exported to `out/` via `output: "export"` in `next.config.ts`.

## Deployment

1. Push to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The workflow type-checks, lints, audits dependencies, builds the static Next.js site, uploads `out/`, and deploys to GitHub Pages.
4. The configured custom domain is `dharmik.me`.

The custom domain is stored in `public/CNAME`, which is included in the static export. The root of the repository does not need a second `CNAME` file.

## Updating profile data

- Edit `src/data/profile.ts` for personal profile, skills, experience, achievements, and LinkedIn placeholders.
- Edit `src/data/projects.ts` for featured projects and generated case-study copy.
- Add reusable UI primitives under `src/components/ui/` and feature-specific sections under `src/features/`.
- Replace visual placeholders in project pages with screenshots when product images are available.

## Repository hygiene

Generated build output, local development logs, dependency folders, and TypeScript build cache files are ignored. Only `public/CNAME` and `public/.nojekyll` are required for the GitHub Pages artifact.

## Data sources used

Public GitHub pages for `GDharmik9` were reviewed to infer profile details, languages, recent repositories, and repository README content. LinkedIn profile content is represented as editable placeholders because public LinkedIn scraping is commonly gated.
