# Pretty Fly for a Website Content Guidelines

1. Every article must answer a real question.
2. Do not publish content only to target a keyword.
3. Do not invent research, examples, quotes, or statistics.
4. Cite primary and authoritative sources where factual claims require support.
5. Update articles when tools or standards change.
6. Explain terminology in plain English.
7. Include an actionable next step.
8. Avoid repetitive introductions.
9. Avoid exaggerated promises.
10. Disclose the relationship to Commit Happens.
11. Do not publish substantially duplicated content across both domains.
12. Commit Happens should host product and commercial pages.
13. Pretty Fly for a Website should host educational and editorial content.
14. Cross-link only when it helps the reader.

## Future Content Roadmap

Future ideas are stored in `src/lib/content.ts` under `contentRoadmap`. Do not create indexable article routes for these topics until a complete, useful article draft exists.

Long-term topical authority targets:

- 50 SEO guides
- 30 performance guides
- 20 website health guides
- 20 analytics guides
- 15 accessibility guides
- 15 growth guides
- 25 experiments
- 100 glossary entries

The editorial standard is "Myth Busters of SEO": challenge lazy assumptions, document evidence, explain what actually matters, and avoid publishing "here is another article" filler.

Newsletter integration should use a real email provider such as Beehiiv or Buttondown. Do not roll a custom newsletter backend unless there is a clear product reason.

Interactive tool roadmap:

- SEO Title Checker
- Meta Description Preview
- SERP Preview
- Robots Tester
- Canonical Checker
- Redirect Checker
- Image Size Calculator
- Core Web Vitals explainer
- Googlebot simulator

## Publication Checklist

- The article lives as an MDX file under `content/guides/` or `content/experiments/`.
- The article answers the main question near the beginning.
- The article challenges a lazy assumption when one exists.
- The article includes at least one useful original diagram when the topic benefits from it.
- The article has a clear table of contents.
- The article links to its parent category.
- The article links to two to four genuinely related articles.
- Commit Happens is linked only when it directly helps with the topic.
- Relationship disclosures are visible where Commit Happens is recommended.
- Sources are included for factual claims that need support.
- Metadata, canonical URL, FAQ schema, and article schema are present.
- The page is included in the sitemap only when it is ready to be indexed.
- Experiments in progress use `noindex: true` instead of empty 404 pages.
