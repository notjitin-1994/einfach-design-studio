# Einfach Design Studio — Website

First draft of the marketing site for **Einfach Design Studio**, an architecture
and interior design practice (UAE & India). Domain: `einfachdesignstudio.com`.

## Stack
- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (CSS-first `@theme` tokens)
- next-themes (class strategy, **dark mode by default**)
- Framer Motion (scroll reveals)
- lucide-react (icons)

## Design
See [`design.md`](./design.md) for the full design system: color tokens,
typography, motion, and component principles.

**Palette**

The palette is anchored by an onyx black (`#0a0a0a`) and a warm cream (`#e9e0c9`), with a single warm red accent (`#990000`).

| Token | Dark (default) | Light |
|---|---|---|---
| Background | Onyx black `#0a0a0a` | Warm cream `#e9e0c9` |
| Foreground | Warm cream `#e9e0c9` | Onyx black `#0a0a0a` |
| Accent | Warm red `#990000` | Warm red `#990000` |

- **Onyx black `#0a0a0a`** is used as the dark-mode background *and* the light-mode text color.
- **Warm red `#990000`** (`rgb(153, 0, 0)`) is the brand accent for CTAs, active states, numerals, and emphasis.

## Pages
`/` Home · `/about` · `/projects` (filterable, dummy data) · `/services` · `/contact` (form)

## Develop
```bash
cd C:\Users\midhu\Downloads\einfach-design-studio
npm run dev
```
Then open http://localhost:3000

## Build & typecheck
```bash
npm run build     # production build + typecheck
npx tsc --noEmit  # typecheck only
```

## Notes
- The favicon / logo uses `public/eds-logo-icon.png`.
- The Projects page ships with 9 dummy projects (3 per category) using
  placeholder imagery and copy — ready to swap for real work.
- The contact form is front-end only (success state) — wire it to an API or
  email service when ready.
