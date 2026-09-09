# Ghanshyam Dharmik Portfolio

Premium personal portfolio for **GDharmik9** built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and GitHub Pages static export.

## Highlights

- Modern dark/light portfolio inspired by Vercel, Linear, Stripe, Raycast, and Supabase.
- SEO metadata, Open Graph tags, sitemap, and robots configuration.
- Static project case-study pages generated from curated GitHub repository analysis.
- Client-side GitHub API analytics with static fallback data.
- Accessible responsive UI for mobile, tablet, and desktop.
- GitHub Pages deployment workflow on push to `main` with a high-severity npm audit gate.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm run audit
```

The static site is exported to `out/` via `output: "export"` in `next.config.ts`.

## Deployment

1. Push to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The workflow builds the static Next.js site, copies `CNAME`, uploads `out/`, and deploys to GitHub Pages.
4. The configured custom domain is `dharmik.me`.

## Updating profile data

- Edit `src/data/profile.ts` for personal profile, skills, experience, achievements, and LinkedIn placeholders.
- Edit `src/data/projects.ts` for featured projects and generated case-study copy.
- Add reusable UI primitives under `src/components/ui/` and feature-specific sections under `src/features/`.
- Replace visual placeholders in project pages with screenshots when product images are available.

## Data sources used

Public GitHub pages for `GDharmik9` were reviewed to infer profile details, languages, recent repositories, and repository README content. LinkedIn profile content is represented as editable placeholders because public LinkedIn scraping is commonly gated.
