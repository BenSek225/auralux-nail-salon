# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build (TypeScript errors are ignored — see next.config.mjs)
npm run lint     # ESLint
npm run start    # Serve production build
```

No test suite is configured.

## Architecture

Single-page Next.js app (App Router). All content lives in `app/page.tsx`, which composes seven section components in order: `Navbar → Hero → Gallery → Services → BookingForm → InstagramSection → SiteFooter`. Each section maps to a scroll anchor (`#accueil`, `#creations`, `#services`, `#reservation`, `#contact`).

**Key patterns:**

- **`Reveal`** (`components/reveal.tsx`) — wraps any content to animate it in on scroll via `IntersectionObserver`. Accepts an optional `delay` (ms) for staggered entrances. The CSS classes `.reveal` / `.reveal.is-visible` live in `globals.css`.
- **`Sparkles`** (`components/sparkles.tsx`) — purely decorative floating sparkle effect, used in the Hero.
- **Booking flow** (`components/booking-form.tsx`) — client component; on submit, formats form fields into a pre-written French WhatsApp message and opens `https://wa.me/33662164536?text=…` in a new tab. No backend involved.

## Styling

Tailwind CSS v4 with `@theme inline` in `globals.css` — brand tokens are defined as CSS variables (`--plum`, `--burgundy`, `--gold`, `--gold-soft`, `--ivory`) and then exposed as Tailwind color utilities (`bg-plum`, `text-gold`, etc.).

Custom utilities defined in `globals.css`:
- `.bg-velvet` — layered radial gradient background used on every section
- `.text-gold-gradient` — gold shimmer text effect using `background-clip: text`
- `.sparkle` — `sparkle-float` keyframe animation
- `.reveal` / `.reveal.is-visible` — scroll-triggered fade-in transition

Fonts are loaded in `app/layout.tsx` via `next/font/google` (Playfair Display + Inter) and injected as CSS variables `--font-playfair` / `--font-inter`.

## Hardcoded content to update

All content is inline in components — no CMS or data layer:
- WhatsApp number: `WHATSAPP_NUMBER = '33662164536'` in `booking-form.tsx`
- Instagram handle: `@auralux_by_mrn` in `instagram-section.tsx` and `site-footer.tsx`
- Gallery items and services: arrays defined at the top of `gallery.tsx` and `services.tsx`
- Portfolio images: `public/images/` (4 PNGs — stock photos, to be replaced)

## Real brand assets (`public/images/img/`)

These are the actual salon assets — not yet wired into components:

| File | Description | Recommended use |
|---|---|---|
| `logo-removebg-preview.png` | Real AURALUX logo, transparent background | Replace `auralux-logo.png` in Hero + Navbar |
| `logo.jpeg` | Logo on brand burgundy background | `og:image` meta tag in `app/layout.tsx` |
| `nail.jpeg` | Real creation photo: gold chrome + orange butterfly + gold beads | Add to gallery array in `gallery.tsx` |
| `bg color.jpeg` | Smooth rose-plum-purple gradient | Hero background image or section overlay |
| `coupe ongle.jpeg` | Illustrated nail shape guide (floral, star, shell motifs) | Services section — shape reference visual |
| `video nails.mp4` | Nail art video footage | Hero `<video>` background or standalone Reel section |

All filenames contain spaces or special characters — reference them with quotes in `src` props: `src="/images/img/bg color.jpeg"`.

## Notable config

`next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — TypeScript errors won't block builds, and Next.js image optimization is disabled (images are served as-is from `public/`).
