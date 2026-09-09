# Local Development Setup

## Requirements

- Node.js 22 or newer
- npm 10 or newer
- Git

The GitHub Pages workflow uses Node.js 22, so using the same major version locally avoids environment differences.

## Install dependencies

From the repository root:

```text
npm install
```

The project does not require environment variables for the current static portfolio. Do not commit local `.env` files or secrets.

## Start development

```text
npm run dev
```

Open <http://localhost:3000>.

The development server provides hot reload. Stop it with `Ctrl+C`.

## Validate changes

Run the same checks used by deployment:

```text
npm run typecheck
npm run lint
npm run build
```

The production build creates a static site in `out/`.

## Preview the static export

After building, serve the `out/` directory with any static HTTP server. For example:

```text
npx serve out
```

Opening the files directly with `file://` is not recommended because static routes and browser APIs may behave differently without HTTP hosting.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run typecheck` | Run TypeScript validation |
| `npm run lint` | Run ESLint against source and configuration files |
| `npm run build` | Generate the static export in `out/` |
| `npm run audit` | Check dependency advisories |

## Where to make changes

- Routes and route metadata: `src/app/`
- Reusable UI: `src/components/`
- Page/domain features: `src/features/`
- Editable portfolio content: `src/data/`
- API and utility code: `src/lib/`
- Static public files and custom domain: `public/`
- Deployment workflow: `.github/workflows/deploy.yml`

## GitHub Pages deployment

Deployment runs automatically when changes are pushed to `main`:

1. GitHub Actions installs dependencies with `npm ci`.
2. TypeScript and ESLint checks run.
3. The dependency audit runs as an informational step.
4. Next.js generates the static export in `out/`.
5. The workflow uploads `out/` to GitHub Pages.
6. GitHub Pages deploys the artifact.

The custom domain is defined by `public/CNAME`. Keep that file when changing deployment configuration.

## Dependency audit note

The audit command currently reports advisories in transitive dependencies, including issues associated with the current Next.js and Mermaid dependency versions. The workflow reports these findings without blocking deployment so that a dependency upgrade can be tested separately. Do not use `npm audit fix --force` without reviewing the resulting package upgrades and running the full validation suite.
