# Einfach Design Studio — Website

First draft of the marketing site for **Einfach Design Studio**, an architecture
and interior design practice (Dubai, UAE). Domain: `einfachdesignstudio.com`.

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
| Token | Dark (default) | Light |
|---|---|---|
| Background | `#000f08` | `#e9e0c9` |
| Foreground | `#e9e0c9` | `#000f08` |
| Accent | `#fb3640` | `#fb3640` |

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
- The favicon / logo uses `public/einfach-monogram.png`.
- The Projects page ships with 9 dummy projects (3 per category) using
  placeholder imagery and copy — ready to swap for real work.
- The contact form is front-end only (success state) — wire it to an API or
  email service when ready.
