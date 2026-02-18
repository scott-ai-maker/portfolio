# Scott Gordon Portfolio

<p>
	<a href="https://nextjs.org"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs"></a>
	<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white"></a>
	<a href="https://react.dev/"><img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white"></a>
	<a href="https://tailwindcss.com/"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
</p>

Production-ready portfolio website for Scott Gordon, showcasing AI engineering projects, cloud architecture work, and practical DevOps leadership.

Live portfolio themes include:

- AI systems and machine learning implementation
- Cloud-native platform engineering and DevOps modernization
- Technical writing that explains complex ideas in plain language

## Quick Links

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Content Workflow](#content-workflow)
- [Image Pipeline (Homepage Gallery)](#image-pipeline-homepage-gallery)
- [SEO, Discovery, and Metadata](#seo-discovery-and-metadata)
- [Deployment Notes](#deployment-notes)

## Overview

This repository powers a content-driven portfolio site with:

- A branded home page with custom responsive visual assets
- Structured pages for About, Projects, Experience, Skills, Blog, and Articles
- SEO metadata, Open Graph/Twitter previews, sitemap, robots rules, and RSS feed output
- Type-safe codebase using TypeScript + React + Next.js

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS, custom reusable components
- **Content:** Markdown/MDX files + TypeScript metadata modules
- **Parsing/feeds:** remark, cheerio, feed
- **Image tooling:** sharp (asset generation pipeline)
- **Language/tooling:** TypeScript, ESLint, PostCSS

## Highlights

- **App Router architecture** with route-level metadata and strong SEO defaults
- **Content-first publishing** for both concise blog posts and long-form technical articles
- **Custom responsive artwork pipeline** using SVG source + generated WebP/PNG assets
- **Production deployment hardening** via security headers and environment-driven canonical URLs

## Project Structure

```text
src/
	app/
		layout.tsx              # root layout + global metadata
		page.tsx                # home page
		about/                  # about page
		projects/               # project portfolio page
		experience/             # experience page
		skills/                 # skills page
		blog/                   # blog index + per-post routes
		articles/               # long-form article content
		sitemap.ts              # dynamic sitemap
		robots.ts               # robots policy
		feed.xml/route.ts       # RSS feed endpoint
	components/               # shared UI components
	lib/
		site.ts                 # canonical site config
		seo.ts                  # metadata helpers
		blogPosts.ts            # blog post metadata registry
		articles.ts             # article filesystem loader
public/
	images/                   # logos, photos, responsive gallery assets
scripts/
	generate-gallery-assets.mjs
```

## Getting Started

### Prerequisites

- Node.js 20+ (project config targets Node 20.18.x in Azure SWA config)
- npm 10+

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Typical Contributor Flow

1. Pull latest changes and install dependencies: `npm install`
2. Start local dev: `npm run dev`
3. Make content or UI updates
4. Validate quality gates: `npm run lint` and `npm run typecheck`
5. Build locally before publishing: `npm run build`

## Available Scripts

- `npm run dev` – start local dev server
- `npm run build` – production build
- `npm run start` – run production server locally
- `npm run lint` – run ESLint checks
- `npm run typecheck` – run TypeScript checks (`tsc --noEmit`)
- `npm run clean` – clear build artifacts and npm cache
- `npm run generate:gallery-assets` – regenerate responsive homepage gallery assets

## Environment Variables

Create a local `.env.local` file for runtime metadata and verification tags.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (for production) | Canonical base URL used by metadata, sitemap, and feed |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console verification token |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | Bing Webmaster verification token |

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-token
NEXT_PUBLIC_BING_SITE_VERIFICATION=your-bing-token
```

## Content Workflow

### Blog Posts

Blog index metadata is managed in:

- `src/lib/blogPosts.ts`

Each blog post page is a route at:

- `src/app/blog/<slug>/page.tsx`

Recommended workflow:

1. Add metadata entry in `blogPosts.ts`
2. Add matching route folder and `page.tsx`
3. Export route-level `metadata` using `buildBlogPostMetadata` from `src/lib/seo.ts`

### Articles

Long-form article content lives under:

- `src/app/articles/<slug>/`

Notes:

- The article loader in `src/lib/articles.ts` currently reads `page.md`
- Existing `page.mdx` files can coexist, but are not consumed by `getAllArticles()` unless loader behavior is extended

## Image Pipeline (Homepage Gallery)

Custom source artwork:

- `public/images/photos/image-1.svg`
- `public/images/photos/image-2.svg`
- `public/images/photos/image-3.svg`

Generated responsive outputs:

- WebP: `352w`, `576w`
- PNG fallback: `352w`, `576w`

Regenerate assets after editing source SVG files:

```bash
npm run generate:gallery-assets
```

Generator implementation:

- `scripts/generate-gallery-assets.mjs`

## SEO, Discovery, and Metadata

- Global metadata and social previews are defined in `src/app/layout.tsx`
- Canonical site settings live in `src/lib/site.ts`
- Blog metadata helper is in `src/lib/seo.ts`
- Dynamic sitemap is generated by `src/app/sitemap.ts`
- Robots policy is generated by `src/app/robots.ts`
- RSS is served from `src/app/feed.xml/route.ts`

## Deployment Notes

This repository includes `staticwebapp.config.json` with:

- SPA-style route rewrites
- Security-related global headers (CSP, HSTS, frame/options policies)
- Node runtime pinning for Azure Static Web Apps

For deployment platforms (Azure SWA, Vercel, etc.), ensure `NEXT_PUBLIC_SITE_URL` is set to the production domain.

## Known Follow-ups

- `src/app/feed.xml/route.ts` still contains inherited placeholder author metadata and should be aligned to Scott Gordon branding.
- `src/lib/articles.ts` currently loads `page.md` files; if you want MDX as the canonical format, extend loader logic accordingly.

## Quality and Maintenance Best Practices

- Run `npm run typecheck` and `npm run lint` before publishing
- Keep `src/lib/blogPosts.ts` in sync with `/src/app/blog/<slug>` routes
- Keep social links and profile metadata current in `src/lib/site.ts`
- Regenerate gallery image assets whenever source SVG artwork changes
- Review feed metadata in `src/app/feed.xml/route.ts` when updating branding

## License

ISC (per `package.json`).
