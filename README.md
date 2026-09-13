# Premier Auto Detailing — Master Template

Production-ready auto detailing website template built with Next.js 16, Tailwind CSS v4, and TypeScript.

## Live Demo

https://auto-detailing-template-r7t26b8qb-raine-yens-projects.vercel.app

## Quick Start

```bash
cd auto-detailing-template
npm install
npm run dev          # http://localhost:3000
npm run build         # verify production build
npm run start         # preview production build
```

## Architecture

```
src/
├── app/
│   ├── globals.css   — design tokens, custom classes, fonts
│   ├── layout.tsx    — root layout, SEO, navigation, footer
│   └── page.tsx      — single-page layout (all sections)
├── components/
│   ├── Header.tsx      — sticky nav with logo + links + CTA
│   ├── Hero.tsx        — premium hero with dual CTAs
│   ├── Services.tsx    — 6 service cards with pricing
│   ├── Gallery.tsx     — before/after image gallery
│   ├── Reviews.tsx     — customer testimonials with star ratings
│   ├── About.tsx       — why choose us with value props
│   ├── FAQ.tsx         — collapsible accordion
│   ├── ContactForm.tsx — quote request form (frontend only)
│   ├── MobileCTA.tsx   — sticky call/text bar (mobile only)
│   └── Footer.tsx      — contact info, links, social
├── lib/
│   ├── data.ts         — ALL content lives here (edit this to customize)
│   └── animations.ts   — scroll animation hook (IntersectionObserver)
└── shared/
    └── ThemeProvider.tsx  — placeholder for future theme system
```

## Customization

Everything is controlled from **`src/lib/data.ts`** — change one file to customize:

- Business name, tagline, phone, email, address
- Phone number format for mobile CTA
- Services list with names, prices, descriptions
- Gallery images (replace with real before/after photos)
- Customer reviews
- FAQ questions and answers
- Contact form labels

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Primary accent | `#d4a053` | Gold/amber — buttons, highlights |
| Dark base | `#0f172a` | Charcoal — dark backgrounds |
| Light base | `#ffffff` | White — card backgrounds |
| Headline font | Playfair Display | Premium serif for headings |
| Body font | Inter | Clean sans-serif for readability |

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript** — full type safety
- **Tailwind CSS v4** — CSS-based config
- **Lucide React** — icons
- **Google Fonts** — Inter + Playfair Display

## SEO

- Semantic HTML (header, nav, main, section, footer)
- Open Graph meta tags
- Structured data (JSON-LD LocalBusiness schema)
- Canonical URL
- Robots meta
- Clean URL structure

## Performance

- Next.js Image optimization
- Font loading optimization
- Minimal JavaScript (no heavy frameworks)
- Scroll animations via IntersectionObserver (no libraries)
- Respects `prefers-reduced-motion`

## Deployment

This template deploys to Vercel with zero configuration:

```bash
vercel deploy --prod
```

---

Template version: 1.0.0
Built: 2026-09-13
