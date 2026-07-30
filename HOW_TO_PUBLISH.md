# How to Publish a Guide

1. Create `content/guides/your-slug.mdx`.
2. Add frontmatter:

```yaml
---
title: "Your Title"
description: "One useful sentence."
slug: "your-slug"
published: "2026-07-29"
updated: "2026-07-29"
author: "Ash Morales"
authorSlug: "ash-morales"
category: "seo"
readingTime: "10 min read"
featured: false
popular: false
checklist: false
related:
  - "why-website-gets-impressions-but-no-clicks"
sources:
  - label: "Authoritative source"
    href: "https://example.com"
faqs:
  - question: "Useful question?"
    answer: "Useful answer."
---
```

4. Write the article body in Markdown/MDX.
5. Include at least one diagram where it helps:

```mdx
<FlowDiagram steps="Google discovers page | Crawler visits | Indexed | Ranks | Gets impressions | Gets clicks" />
```

6. Deploy. The guide route, sitemap entry, search index, and category listing are generated automatically.

No route file changes are required for new published guides.
