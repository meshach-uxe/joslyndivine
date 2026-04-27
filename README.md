# Joslyn Divine Foundation

The frontend for [joslyndivine.com](https://joslyndivine.com) — the Joslyn Divine Foundation, a Sierra Leone NGO supporting children in Kroo Bay and Susan's Bay through education, shelter, and mentorship.

> **Beyond survival. Built for leadership.**

## Locked decisions

Do not relitigate these in PRs:

- **Three Roles model**: Funders invest. Volunteers build. Partners amplify. (Order never changes.)
- **Founder named lead**: Mrs. Ellaline V. Wright-Hook.
- **Founding language**: "Vision 2019. Programs 2022."
- **Four payment channels**: Card/PayPal · Bank · Mobile money (Orange/Africell) · Crypto.
- **English at launch.** Krio in Phase 2 — no i18n routing yet.
- Single H1 per page. Sentence case. Verb-led CTAs.
- No popups, no upsells, no platform-tip toggles, no autoplay carousels, no exit-intent.
- Accessibility floor: WCAG 2.1 AA. Lighthouse Accessibility = 100. axe = zero serious/critical.
- Banned color pairing: white text on `--color-teal` (`#0D9488`) at small sizes.

## Phase

This is the **frontend-only phase**. There is no live donate processor, no CRM, no email platform.

- The donate page renders the full UI (frequency tabs, amount chips, four-channel switcher) **but does not transact**. Clicking "Continue" smooth-scrolls to a "How to give right now" holding section with bank details, mobile money numbers, a crypto wallet, and a `mailto:` to the founder. All marked `[pending]` until the client supplies real values.
- Volunteer and Partner forms POST to **Formspark** if env vars are set. If unset, they render an "endpoint not configured" message rather than failing silently.
- Plausible analytics are gated behind `NEXT_PUBLIC_PLAUSIBLE_ENABLED=true`.

Backend wiring (real donate processor, CRM, email) comes after client approval.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) — used alongside locked design tokens (`src/styles/tokens.css`)
- ESLint + Prettier
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) for sitemap + robots.txt

## Local development

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

Then open http://localhost:3000.

To validate before pushing:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment variables

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPARK_VOLUNTEER_ID` | Formspark form ID for `/get-involved/volunteers`. Empty = form renders "endpoint not configured" message. |
| `NEXT_PUBLIC_FORMSPARK_PARTNER_ID` | Same, for `/get-involved/partners`. |
| `NEXT_PUBLIC_PLAUSIBLE_ENABLED` | Set to `true` to load the Plausible script. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Defaults to `joslyndivine.com`. |

## Structure

```
src/
  app/             — App Router routes (one folder per page)
  components/      — Shared components (Nav, Footer, forms, etc.)
  lib/
    metadata.ts    — Per-route Metadata factory
    routes.ts      — Route table with title + description
    tokens.ts      — TS export of locked tokens
  styles/
    globals.css    — Tailwind import + @font-face + design system classes
    tokens.css     — Locked CSS variables (colors, spacing, type)
public/
  brand/           — 4-colour logo + 4-colour mark SVGs
  fonts/           — Helvetica Now Display/Text/Micro + Avigea
  og/              — Open Graph images (og-default.svg)
  favicons/        — Favicon set (only favicon.svg shipped — see TODO below)
  site.webmanifest — PWA manifest
```

## Pre-launch TODO

Before going live the client (or whoever steers the launch) needs to:

### Replace `[pending]` placeholders

Grep the codebase: `[Name pending]`, `[Bank name pending]`, `[Wallet address pending]`, `[fiscal sponsor pending]`, `[auditor name pending]`, `[number pending]`, `[Number pending]`, `[Account number pending]`, `[SWIFT pending]`, `[fiscal sponsor name pending]`, `[timeline placeholder]`. Concentrated in: `donate`, `about`, `accountability`, `Footer`.

### Generate the favicon set

Tools weren't available on the build machine. To produce the favicon PNGs and `.ico`:

```bash
# Windows: choco install rsvg-convert imagemagick
# macOS:   brew install librsvg imagemagick
# Linux:   sudo apt install librsvg2-bin imagemagick

cd public
rsvg-convert -w 32  -h 32  brand/mark-teal.svg -o favicons/favicon-32.png
rsvg-convert -w 192 -h 192 brand/mark-teal.svg -o favicons/favicon-192.png
rsvg-convert -w 512 -h 512 brand/mark-teal.svg -o favicons/favicon-512.png
rsvg-convert -w 180 -h 180 brand/mark-teal.svg -o favicons/apple-touch-icon.png
magick favicons/favicon-32.png favicons/favicon-192.png favicons/favicon.ico
```

The `favicon.svg` (mark-teal) is already in place, so most modern browsers will render correctly without these PNGs.

### Generate `og-default.png` from the SVG

```bash
rsvg-convert -w 1200 -h 630 public/og/og-default.svg -o public/og/og-default.png
```

Per-page OG variants (`og-donate.png`, `og-funders.png`, etc.) can be added in `public/og/` and referenced via `ogImage` in `src/lib/routes.ts`. Until then every page falls back to `og-default.png`.

### Wire up Formspark

1. Sign up at [formspark.io](https://formspark.io).
2. Create two forms: `JDF Volunteer Applications` and `JDF Partner Enquiries`.
3. Copy the form IDs into Vercel's environment variables as `NEXT_PUBLIC_FORMSPARK_VOLUNTEER_ID` and `NEXT_PUBLIC_FORMSPARK_PARTNER_ID`.
4. Redeploy.

### Plausible analytics (when ready)

1. Sign up at [plausible.io](https://plausible.io), add `joslyndivine.com` as a site.
2. In Vercel, set `NEXT_PUBLIC_PLAUSIBLE_ENABLED=true`.
3. Redeploy.

### Vercel deployment

1. Go to [vercel.com/new](https://vercel.com/new) → Import → select this repo.
2. Framework preset auto-detects as Next.js.
3. Add environment variables (or leave empty for the soft-fail behavior).
4. Deploy. In Project Settings → Domains, add `joslyndivine.com` and `www.joslyndivine.com` and follow Vercel's DNS instructions.

## Accessibility

Target: WCAG 2.1 AA. The CSS reset includes `:focus-visible` outlines, the layout has a working skiplink as the first focusable element, all forms use proper labels and `aria-describedby`, and tokens.css respects `prefers-reduced-motion`.

To report an accessibility issue: <hello@joslyndivine.com>.

## Locked AI-crawler block

`robots.txt` blocks `GPTBot`, `ClaudeBot`, `anthropic-ai`, `CCBot`, `Google-Extended`, `PerplexityBot`, and `Bytespider`. This is a deliberate child-protection-focused choice: publication consent is not training-data consent. Keep it.

## License

MIT. See [LICENSE](LICENSE).

---

Built on Brand Foundation v1.2 + Design System v1.
