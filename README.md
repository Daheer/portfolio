# Dahiru Ibrahim Dahiru — Portfolio

Personal portfolio for Dahiru Ibrahim Dahiru, GMNSE: AI engineer, technology founder and product builder focused on African-language AI and digital infrastructure.

Built with Next.js, TypeScript and Tailwind CSS. Supports light, dark and system themes, and exports a static site for the existing GitHub Pages deployment.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000/portfolio. The `/portfolio` base path is configured in `next.config.js`.

## Validation and build

```bash
npx tsc --noEmit
npm run build
```

The static build is written to `out/`. The existing GitHub Actions workflow builds and deploys it when changes are pushed to `main`.

## Updating content

Edit `lib/data.ts` for profile copy, selected projects, professional contributions, education, recognition, skills and social links. Page sections are in `app/page.tsx`.

OrbitalsAI dates remain omitted pending confirmation. University of Maine (Jun 2023–Mar 2024) and NabafatAI (Jun 2024–Present) dates match the original portfolio, restored at Dahiru’s request. Confidential client work and unverified adoption figures are excluded. The original résumé destination is preserved.

Public image paths include `/portfolio/` to match the GitHub Pages base path. Keep those paths and layout metadata aligned if the base path changes.
