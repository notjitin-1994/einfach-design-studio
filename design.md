# Einfach Design Studio — Design System

> "Einfach" = German for *simple*. Simplicity isn't where design begins — it's where it ends.

## 1. Brand & Positioning
- **Studio:** Architecture & interior design, Dubai UAE. Domain: `einfachdesignstudio.com`.
- **Voice:** Calm, confident, editorial. No buzzwords. Every line earns its place.
- **Promise:** Help clients make confident design decisions *before* construction begins.

## 2. Design Principles (the "why")
1. **Editorial over decorative** — typography leads; imagery breathes. Whitespace is a feature.
2. **Dark-first, considered** — dark mode is the default; light mode is the equal sibling, not an afterthought.
3. **Restraint with one warm spark** — near-black + cream carry the page; the single red accent is rare and decisive (CTAs, numerals, active states).
4. **Motion with intent** — reveals are slow, quiet, staggered. Nothing bounces. Motion clarifies hierarchy, never decorates.
5. **Numbered, systematic** — process (01–06) and grid rhythm reflect architectural drawing discipline.
6. **Tactile type contrast** — a refined serif for display set against a clean grotesque for UI/body.

## 3. Color Tokens
| Token | Dark (default) | Light |
|---|---|---|
| background | `#000f08` | `#e9e0c9` |
| foreground | `#e9e0c9` | `#000f08` |
| accent | `#fb3640` | `#fb3640` (same) |

**Accent ramp (tints/shades of #fb3640):**
- `--accent-soft`  `#fc6d72`  (lighter, hover glows)
- `--accent`       `#fb3640`  (base)
- `--accent-deep`  `#c92730`  (pressed/active)
- `--accent-glow`  `rgba(251,54,64,0.14)` (halos, focus rings)

Surfaces (translucent foreground overlays for cards/lines):
- `--surface` `rgba(233,224,201,0.06)` dark / `rgba(0,15,8,0.05)` light
- `--border` `rgba(233,224,201,0.14)` dark / `rgba(0,15,8,0.14)` light
- `--muted` ~60% foreground

## 4. Typography
- **Display:** `Fraunces` (variable serif, optical sizing) — hero, section heads, numerals. Tracking tight, weights 300–500.
- **Body/UI:** `Geist` (grotesque) — 400/500. Generous line-height (1.6–1.7 body).
- Scale (clamp, fluid): hero `clamp(2.8rem,8vw,7rem)`, h2 `clamp(2rem,4vw,3.5rem)`, eyebrow `0.8rem` uppercase tracked.
- Numerals set in display serif, tabular where in tables.

## 5. Layout & Rhythm
- Max content width `1280px`; prose `720px`. Section padding `clamp(5rem,10vw,9rem)` vertical.
- 12-col grid; frequent asymmetry (5/7, 7/5). Hairline rules (`--border`) divide sections like drawing sheets.
- Persistent header (blur, translucent) + slim footer. Active nav link marked with accent dot.

## 6. Components (shadcn-style, hand-built)
`SiteHeader`, `SiteFooter`, `ThemeToggle`, `Reveal` (Framer scroll-in), `Eyebrow`, `SectionHeading`, `Button` (primary accent / ghost), `ServiceCard`, `ProcessStep`, `ProjectCard`, `Stat`, `Marquee` (Magic-UI style), `FormField`.

## 7. Motion
- `Reveal`: opacity 0→1, y 24→0, `cubic-bezier(0.22,1,0.36,1)`, 0.7s, stagger 0.08s via viewport once.
- Hover: image scale 1.05 over 0.6s; links underline grow from left.
- Respect `prefers-reduced-motion` (disable transforms).

## 8. Accessibility
- AA contrast on both themes. Focus-visible rings use `--accent`. `aria-` on toggle/menu. Alt text on all imagery. Semantic landmarks.

## 9. Tech Stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 (CSS-first `@theme`) · next-themes (class, dark default) · Framer Motion · lucide-react. No external UI package — components hand-built to spec.

## 10. Pages
`/` Home · `/about` · `/projects` · `/services` · `/contact`.
