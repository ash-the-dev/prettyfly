# Pretty Fly for a Website

Plain-English guides for making websites faster, healthier, easier to use, and easier to find.

Live site: [https://prettyflyforawebsite.com](https://prettyflyforawebsite.com)

Pretty Fly is an editorial/resource website built with **Next.js** and **MDX**. It publishes practical SEO, performance, website-health, analytics, accessibility, and growth content—not a boutique design-studio portfolio.

## What the site includes

- **Guides** — MDX articles under `content/guides/`
- **Experiments** — documented SEO/website experiments under `content/experiments/`
- **Category hubs** — SEO, performance, website health, analytics, accessibility, growth
- **Search** — client-side search across guides and experiments
- **Author pages** — e.g. `/author/ash-morales`
- **Tools** — lightweight browser tools (starting with the SEO Title Checker)
- **Glossary** — plain-English definitions for common website terms
- **SEO plumbing** — metadata, canonicals, sitemap, robots, Open Graph, and web manifest
- **Analytics** — Google Analytics (`gtag`) and Commit Happens tracker with conversion events

## Tech stack

- Next.js (App Router)
- React
- MDX via `next-mdx-remote` + `gray-matter`
- Tailwind CSS v3 + PostCSS + Autoprefixer
- TypeScript

## Local development

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run lint
npm run typecheck
npm run build
```

## Publishing content

- [HOW_TO_PUBLISH.md](./HOW_TO_PUBLISH.md) — how to add a guide MDX file
- [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) — editorial standards and related project boundaries with Commit Happens

New guides and experiments are picked up automatically for routes, sitemap entries, search indexing, and category listings when frontmatter is complete.

## Related project

Pretty Fly for a Website and [Commit Happens](https://www.commithappens.com) are related projects. Pretty Fly hosts educational/editorial content; Commit Happens hosts product and commercial monitoring tools. Cross-links appear only where they help the reader.
