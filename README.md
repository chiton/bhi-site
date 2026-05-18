# BHI Viajes y Turismo

Marketing website for `BHI Viajes y Turismo`, built with Next.js and exported as a static site.

The site includes:
- A main landing page for travel services and contact information
- A `/bus` page with an embedded bus ticketing experience
- An `/apartments` page for temporary rental listings

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- NextUI

## Requirements

- Node.js compatible with the installed dependencies
- `npm ~10.9.0`

This repository uses `npm` and includes a `package-lock.json`.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev`: Start the Next.js development server
- `npm run build`: Install dev dependencies if needed, build the static export, then prune production dependencies
- `npm run build-local`: Run a local Next.js build without the install/prune wrapper
- `npm run start`: Start the Next.js production server
- `npm run lint`: Run ESLint
- `npm run start-out`: Serve the generated static `out/` directory locally

## Routes

- `/`: Main marketing homepage with services, testimonials, and contact information
- `/bus`: Embedded bus ticketing page powered by an external iframe integration
- `/apartments`: Temporary rental listing page

## Environment Variables

The app supports the following public environment variable:

- `NEXT_PUBLIC_SITE_URL`: Base URL used for generated metadata such as `sitemap.xml` and `robots.txt`

If `NEXT_PUBLIC_SITE_URL` is not set, the app falls back to:

```bash
https://bhiviajes.tur.ar
```

## Static Export And Deployment

This project is configured for static export in `next.config.mjs`:

- `output: "export"`
- `images.unoptimized: true`
- `trailingSlash: true`

Implications:

- Production output is generated into the `out/` directory
- The site is intended to be deployed as static files
- Image optimization is disabled to support static hosting
- Routes are emitted with trailing slashes, which the hosting platform should serve correctly

To preview the exported site locally:

```bash
npm run build-local
npm run start-out
```

## Project Structure

- `src/app/layout.tsx`: Root layout, metadata, fonts, and top navigation shell
- `src/app/page.tsx`: Homepage content, service cards, testimonials, and contact section
- `src/app/bus/page.tsx`: External bus sales iframe page
- `src/app/apartments/page.tsx`: Apartment listing page and rental content
- `src/app/sitemap.ts`: Generated sitemap entries
- `src/app/robots.ts`: Generated robots configuration
- `src/components/TopNavBar.tsx`: Main navigation and social links
- `src/components/TestimonialsCarousel.tsx`: Rotating testimonials component
- `src/app/globals.css`: Global styles and shared utility classes

## Content Maintenance

Important business content is currently hardcoded in the app source.

Common update locations:

- Homepage copy, service links, contact details, and footer links: `src/app/page.tsx`
- Bus iframe URL and integration details: `src/app/bus/page.tsx`
- Apartment inventory and amenities: `src/app/apartments/page.tsx`
- Navigation links and social profiles: `src/components/TopNavBar.tsx`

When updating business information, review those files together so navigation, page content, and contact details stay consistent.
