# Content Roadmap

## Long-term topical authority targets

- 50 SEO guides
- 30 performance guides
- 20 website health guides
- 20 analytics guides
- 15 accessibility guides
- 15 growth guides
- 25 experiments
- 100 glossary entries

## Editorial standard

Pretty Fly for a Website should feel like the Myth Busters of SEO:

- Challenge lazy assumptions
- Document what you measured
- Explain what actually matters
- Prefer memorable, evidence-led angles over generic how-to filler

Examples of the voice we want:

- Google does not automatically hate AI content. Here is what actually matters.
- Why a Search Console position of 39 is not automatically bad.
- Why impressions with zero clicks can be useful.

## Publishing model

Guides, experiments, and future glossary entries should live as MDX files.

- Guides: `content/guides/*.mdx`
- Experiments: `content/experiments/*.mdx`

Adding a complete `.mdx` file with frontmatter should publish the page without changing route code.

## Experiment policy

Do not leave experiment detail pages as empty 404s.

Publish the experiment page with:

- Experiment in Progress banner
- Hypothesis
- Methodology
- What you are measuring
- Expected results window
- `noindex: true` until findings are meaningful

## Interactive tools roadmap

- SEO Title Checker
- Meta Description Preview
- SERP Preview
- Robots Tester
- Canonical Checker
- Redirect Checker
- Image Size Calculator
- Core Web Vitals Explainer
- Googlebot Simulator

## Newsletter

Use Beehiiv or Buttondown. Do not roll a custom newsletter backend.
