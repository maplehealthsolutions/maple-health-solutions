# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev       # Start development server at http://localhost:3000
pnpm build     # Production build
pnpm lint      # Run ESLint
```

No test runner is configured yet.

## Stack

- **Next.js 16.2.2** with the App Router (`app/` directory)
- **React 19.2.4**
- **Tailwind CSS v4** (configured via `@tailwindcss/postcss` — v4 uses a PostCSS plugin, not a Tailwind config file)
- **TypeScript**
- Package manager: **pnpm** (see `pnpm-workspace.yaml`)

## Key Architecture Notes

- All routes live under `app/` using the App Router file conventions (`layout.tsx`, `page.tsx`, etc.)
- Global styles are in `app/globals.css`
- Next.js 16 and React 19 contain breaking changes from prior versions. Before writing any Next.js or React code, read the relevant guide in `node_modules/next/dist/docs/` to understand current APIs and conventions.
