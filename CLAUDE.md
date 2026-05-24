# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for Brandon Main, built with Next.js 16 (App Router, Turbopack) and TypeScript. Deployed on Vercel (Node 22).

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint directly (`eslint`); Next 16 removed the built-in `next lint`

There is no test setup in this repo.

## Architecture

- **App Router** under `src/app/`. `layout.tsx` is the root server layout (sets metadata, loads the Inter font, and globally disables FontAwesome's auto-CSS injection via `config.autoAddCss = false`). `page.tsx` is the single home page.
- **Theming**: `next-themes` drives light/dark mode using the `class` attribute strategy, defaulting to dark. `ThemedLayout` wraps content in the `ThemeProvider` and `ThemeSwitcher` toggles the theme. Both are Client Components, as is `page.tsx` itself. `ThemeSwitcher` gates rendering on a `mounted` flag to avoid hydration mismatch — follow this pattern for any component that reads theme state on first render.
- **Styling**: Tailwind CSS v4 (CSS-first config — there is no `tailwind.config.ts`). Theme and utilities live in `src/app/globals.css`, which loads Tailwind via `@import "tailwindcss"` and uses `@tailwindcss/postcss` in `postcss.config.js`. Note the custom `p-pp-5` padding utility (`5%`), defined there with `@utility`.
- **Icons**: FontAwesome via `@fortawesome/react-fontawesome`.
- **Path alias**: `@/*` maps to `./src/*` (see `tsconfig.json`).

## Conventions

- TypeScript `strict` mode is on.
- ESLint uses flat config (`eslint.config.mjs`, ESLint 9) and spreads `eslint-config-next/core-web-vitals`. `react/no-unescaped-entities` and `@next/next/no-page-custom-font` are intentionally disabled (so apostrophes in JSX prose are allowed); `react-hooks/set-state-in-effect` is disabled inline on the `ThemeSwitcher` mount gate, which is the intended next-themes pattern.
