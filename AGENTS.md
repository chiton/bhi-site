# AGENTS.md

## Commands

- Use `npm`, not yarn/pnpm/bun. `package.json` declares `npm ~10.9.0`.
- Start local dev with `npm run dev`.
- Use `npm run lint` for the fastest verification step.
- Use `npm run build-local` to verify the Next.js production build.
- Avoid using `npm run build` for routine checks: it runs `npm install --production=false` and then `npm prune --production`, so it mutates `node_modules`.

## App Shape

- This is a single Next.js App Router site under `src/app`, exported as a static site.
- Main entrypoints:
  - `/` -> `src/app/page.tsx`
  - `/bus` -> `src/app/bus/page.tsx`
  - `/apartments` -> `src/app/apartments/page.tsx`
- Shared shell lives in `src/app/layout.tsx`.
- Main navigation is in `src/components/TopNavBar.tsx`.
- Testimonials are in `src/components/TestimonialsCarousel.tsx`.

## Static Export Constraints

- `next.config.mjs` sets `output: 'export'`, `images.unoptimized: true`, and `trailingSlash: true`.
- Prefer changes that remain compatible with static export. Do not introduce server-only runtime features unless the export setup is also changed.
- Generated SEO files depend on `NEXT_PUBLIC_SITE_URL`:
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
- If you add or rename public routes, update `src/app/sitemap.ts`.

## Content Gotchas

- Business content is hardcoded in components, not loaded from a CMS or data file.
- Contact details and business links are duplicated across:
  - `src/app/page.tsx`
  - `src/components/TopNavBar.tsx`
- Apartment inventory is hardcoded in `src/app/apartments/page.tsx`.
- The bus page embeds an external iframe with a hardcoded URL/token in `src/app/bus/page.tsx`; treat edits there as integration-sensitive.

## Styling

- Styling is split between Tailwind utility classes in components and custom shared classes in `src/app/globals.css` such as `btn-primary`, `btn-secondary`, `container-custom`, `hero`, and `service-card`.
- Before replacing repeated class names, check whether a matching shared class already exists in `globals.css`.

## Config Quirks

- The active source tree is `src/...`.
- There are duplicate Tailwind/PostCSS config files at the repo root (`tailwind.config.ts` and `tailwind.config.js`, `postcss.config.js` and `postcss.config.mjs`). Verify the existing setup before cleaning up config, since the repo currently works with this mixed state.
