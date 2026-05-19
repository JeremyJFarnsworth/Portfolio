@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: this is Next.js 16 + React 19 + Tailwind v4

All three are newer than most training data and have breaking changes from prior majors. Before writing non-trivial code, consult the bundled docs at `node_modules/next/dist/docs/` (App Router docs live under `01-app/`). Heed deprecation notices from the dev server.

Specific gotchas vs. older conventions:
- **Tailwind v4** uses a CSS-first config — no `tailwind.config.js`. Theme tokens are declared inside `@theme inline { ... }` in [src/app/globals.css](src/app/globals.css), and PostCSS is wired via `@tailwindcss/postcss` in [postcss.config.mjs](postcss.config.mjs). Add new design tokens as CSS variables under `:root` and surface them through `@theme inline`.
- **ESLint v9** uses the flat-config format in [eslint.config.mjs](eslint.config.mjs) (`defineConfig` + `globalIgnores`), not `.eslintrc`. The lint script is just `eslint` — no `next lint` wrapper.
- **Turbopack** is the dev bundler (`next dev` uses it by default in this version). If something behaves oddly only in dev, suspect Turbopack before assuming a code issue.

## Common commands

```bash
npm run dev        # start dev server on http://localhost:3000 (Turbopack)
npm run build      # production build
npm start          # serve the production build (run after `npm run build`)
npm run lint       # ESLint (flat config)
npx tsc --noEmit   # type-check only; there is no dedicated script
```

There is no test runner configured yet. If adding one, wire it into `package.json` scripts and update this file.

## Architecture

This is a single-page personal portfolio. There is one route ([src/app/page.tsx](src/app/page.tsx)) that composes section components in a fixed order: `Hero → About → Skills → Experience → Education → Projects`, wrapped by `SiteHeader` / `SiteFooter`.

- **Content lives in [src/lib/resume.ts](src/lib/resume.ts)** — `profile`, `skillGroups`, `experience`, `education`, `projects`. To update resume content (a new job, a new project, etc.), edit this file, not the components. The section components are dumb renderers over these exports; types (`ExperienceEntry`, `EducationEntry`, `Project`) are co-located with the data.
- **Section wrapper convention**: every content section under [src/components/](src/components/) renders inside the shared [Section](src/components/Section.tsx) component, which provides the `id` (used for nav anchors), the eyebrow/title header, and consistent spacing. The nav anchors in [SiteHeader.tsx](src/components/SiteHeader.tsx) (`#about`, `#skills`, …) must stay in sync with each section's `id`.
- **App Router** under [src/app/](src/app/). [src/app/layout.tsx](src/app/layout.tsx) is the root layout; it loads Geist via `next/font/google` and exposes the fonts as the `--font-geist-sans` / `--font-geist-mono` CSS variables consumed by Tailwind's `@theme inline` block. The body is a flex column so the footer can sit at the bottom.
- **Path alias**: `@/*` resolves to `src/*` (see [tsconfig.json](tsconfig.json)). Prefer it over deep relative imports.
- **Styling**: Tailwind utilities first, with theme tokens (`bg-background`, `text-foreground`, `font-sans`, `font-mono`) backed by CSS variables in [src/app/globals.css](src/app/globals.css). Dark mode is currently driven by `prefers-color-scheme`, not a class toggle — change that here if a manual theme switch is needed. Components pair light/dark variants explicitly with `dark:` utilities; the accent color is `sky-600` / `sky-400`.
- **Static assets** in [public/](public/) are served from the site root (e.g. `/next.svg`).
- **Generated**: `.next/` and `next-env.d.ts` are build/tooling artifacts — do not edit by hand. ESLint and Git ignore them.
