export const author = "Ash Morales";

export const commitHappens = {
  name: "Commit Happens",
  baseUrl: "https://www.commithappens.com",
  healthChecker: "https://www.commithappens.com/website-health-checker",
  monitoring: "https://www.commithappens.com/website-monitoring",
  performance: "https://www.commithappens.com/website-performance-monitoring",
  seoChecker: "https://www.commithappens.com/free-seo-checker",
  ranking: "https://www.commithappens.com/why-your-site-isnt-ranking",
};

export const navLinks = [
  { href: "/seo", label: "SEO" },
  { href: "/performance", label: "Performance" },
  { href: "/website-health", label: "Website Health" },
  { href: "/analytics", label: "Analytics" },
  { href: "/guides", label: "Guides" },
  { href: "/experiments", label: "Experiments" },
];

export const moreLinks = [
  { href: "/search", label: "Search" },
  { href: "/tools", label: "Tools" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/growth", label: "Growth" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export type CategorySlug = "seo" | "performance" | "website-health" | "analytics" | "accessibility" | "growth";

export type Category = {
  slug: CategorySlug;
  label: string;
  title: string;
  description: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  sections: string[];
  questions: { question: string; answer: string }[];
  related: CategorySlug[];
  commitCallout: {
    heading: string;
    body: string;
    href: string;
    label: string;
  };
};

export const categories: Category[] = [
  {
    slug: "seo",
    label: "SEO",
    title: "SEO that makes sense before it makes you tired.",
    description:
      "Practical SEO guides covering Google indexing, rankings, metadata, internal links, search intent, technical SEO, and Search Console.",
    intro:
      "Learn how search engines discover, understand, and rank your pages. Start with the fundamentals, then work through indexing, content structure, internal links, metadata, and technical SEO.",
    metaTitle: "SEO Guides for Real Websites | Pretty Fly for a Website",
    metaDescription:
      "Practical SEO guides covering Google indexing, rankings, metadata, internal links, search intent, technical SEO, and Search Console.",
    sections: ["Getting indexed", "Understanding rankings", "Writing useful pages", "Technical SEO", "Internal linking", "Search Console"],
    questions: [
      {
        question: "What should I learn first in SEO?",
        answer: "Start with indexing, search intent, page titles, useful content, and internal links before worrying about advanced tactics.",
      },
      {
        question: "Can SEO tools guarantee rankings?",
        answer: "No. Tools can reveal issues and opportunities, but search results depend on relevance, quality, competition, and many other signals.",
      },
      {
        question: "How often should I review SEO basics?",
        answer: "Review important pages monthly and after major content, template, navigation, or technical changes.",
      },
    ],
    related: ["analytics", "website-health", "performance"],
    commitCallout: {
      heading: "Want a plain-English SEO check?",
      body: "Commit Happens can inspect technical SEO problems, surface missing basics, and explain the findings without turning the report into alphabet soup.",
      href: commitHappens.seoChecker,
      label: "Inspect technical SEO problems",
    },
  },
  {
    slug: "performance",
    label: "Performance",
    title: "A faster website is a friendlier website.",
    description:
      "Improve website speed and Core Web Vitals with practical guides to images, JavaScript, fonts, caching, mobile performance, and hosting.",
    intro:
      "Learn what makes websites slow, how Core Web Vitals work, and which performance fixes are worth doing first.",
    metaTitle: "Website Performance Guides | Pretty Fly for a Website",
    metaDescription:
      "Improve website speed and Core Web Vitals with practical guides to images, JavaScript, fonts, caching, mobile performance, and hosting.",
    sections: ["Core Web Vitals", "Image optimization", "JavaScript", "Fonts", "Caching", "Mobile performance"],
    questions: [
      {
        question: "What usually slows a website down?",
        answer: "Large images, too much JavaScript, slow servers, render-blocking fonts, and heavy third-party scripts are common causes.",
      },
      {
        question: "Should I chase a perfect score?",
        answer: "A perfect lab score is less important than a fast, stable experience for real visitors on real devices.",
      },
      {
        question: "Which performance fixes should come first?",
        answer: "Start with images, server response, critical templates, and third-party scripts before polishing tiny optimizations.",
      },
    ],
    related: ["website-health", "accessibility", "seo"],
    commitCallout: {
      heading: "Keep an eye on speed after launch.",
      body: "Commit Happens helps monitor website performance so slowdowns are easier to spot after new scripts, images, or releases go live.",
      href: commitHappens.performance,
      label: "Monitor website performance",
    },
  },
  {
    slug: "website-health",
    label: "Website Health",
    title: "Website problems rarely send a polite warning.",
    description:
      "Learn how to monitor website health, uptime, broken links, SSL, redirects, forms, and technical problems before they cost you visitors.",
    intro:
      "Learn how to detect broken links, downtime, expired certificates, redirect errors, missing pages, failed forms, and other quiet technical problems.",
    metaTitle: "Website Health and Monitoring Guides | Pretty Fly for a Website",
    metaDescription:
      "Learn how to monitor website health, uptime, broken links, SSL, redirects, forms, and technical problems before they cost you visitors.",
    sections: ["Uptime", "Broken links", "Redirects", "SSL", "Forms", "Monitoring routines"],
    questions: [
      {
        question: "What is website health?",
        answer: "Website health is the practical condition of a site: whether it loads, works, can be found, records useful data, and avoids preventable errors.",
      },
      {
        question: "Do small websites need monitoring?",
        answer: "Yes. Small sites still have forms, SSL certificates, links, pages, analytics, and search visibility that can break quietly.",
      },
      {
        question: "How often should I check website health?",
        answer: "Use continuous monitoring for uptime and critical problems, then review broader health weekly or monthly.",
      },
    ],
    related: ["performance", "seo", "analytics"],
    commitCallout: {
      heading: "Run a website health check.",
      body: "Commit Happens checks website health, uptime, SEO, performance, and technical warning signs in one place.",
      href: commitHappens.healthChecker,
      label: "Run a website health check",
    },
  },
  {
    slug: "analytics",
    label: "Analytics",
    title: "Your traffic numbers are trying to tell you something.",
    description:
      "Understand website analytics, Google Search Console, traffic sources, engagement, conversions, clicks, impressions, and reporting.",
    intro:
      "Learn how to interpret traffic, impressions, clicks, engagement, conversions, and Search Console data without drowning in dashboards.",
    metaTitle: "Website Analytics Guides | Pretty Fly for a Website",
    metaDescription:
      "Understand website analytics, Google Search Console, traffic sources, engagement, conversions, clicks, impressions, and reporting.",
    sections: ["Google Search Console", "Traffic sources", "Engagement", "Conversion tracking", "Common reporting mistakes"],
    questions: [
      {
        question: "Which analytics numbers matter most?",
        answer: "The useful numbers depend on the page goal, but impressions, clicks, traffic source, engagement, and conversions usually belong together.",
      },
      {
        question: "Why do Search Console and analytics tools disagree?",
        answer: "They measure different things, use different processing rules, and may be affected by consent, bots, time zones, and attribution.",
      },
      {
        question: "Can analytics explain every visitor decision?",
        answer: "No. Analytics can reveal patterns and friction, but it cannot read minds. Use it with page reviews and real user feedback.",
      },
    ],
    related: ["seo", "growth", "website-health"],
    commitCallout: {
      heading: "Put health signals beside the numbers.",
      body: "Commit Happens helps connect analytics and website health signals so traffic changes are easier to investigate.",
      href: commitHappens.monitoring,
      label: "Monitor website issues",
    },
  },
  {
    slug: "accessibility",
    label: "Accessibility",
    title: "A better website should work for more people.",
    description:
      "Practical website accessibility guides covering keyboard navigation, contrast, forms, headings, alternative text, readability, and interaction design.",
    intro:
      "Learn practical ways to improve readability, keyboard navigation, forms, headings, contrast, alternative text, and accessible interaction design.",
    metaTitle: "Website Accessibility Guides | Pretty Fly for a Website",
    metaDescription:
      "Practical website accessibility guides covering keyboard navigation, contrast, forms, headings, alternative text, readability, and interaction design.",
    sections: ["Keyboard access", "Contrast", "Forms", "Headings", "Alternative text", "Motion and interaction"],
    questions: [
      {
        question: "Is accessibility only about screen readers?",
        answer: "No. It also includes keyboard access, contrast, readable content, forms, motion, structure, and clear interaction states.",
      },
      {
        question: "Can accessibility help everyone?",
        answer: "Yes. Clear labels, readable pages, and predictable navigation help people using many devices and many levels of attention.",
      },
      {
        question: "Where should I start?",
        answer: "Start with headings, labels, color contrast, keyboard navigation, alt text, and form errors.",
      },
    ],
    related: ["performance", "growth", "website-health"],
    commitCallout: {
      heading: "Accessibility is part of website health.",
      body: "Commit Happens focuses on technical website health, while these guides help you make the human experience easier to use and understand.",
      href: commitHappens.healthChecker,
      label: "Check your website health",
    },
  },
  {
    slug: "growth",
    label: "Growth",
    title: "More traffic is useful. Better journeys are better.",
    description:
      "Improve website growth with practical guides to landing pages, calls to action, trust signals, content strategy, and conversion paths.",
    intro:
      "Learn how content, trust, calls to action, landing pages, and conversion paths work together to turn attention into meaningful action.",
    metaTitle: "Website Growth and Conversion Guides | Pretty Fly for a Website",
    metaDescription:
      "Improve website growth with practical guides to landing pages, calls to action, trust signals, content strategy, and conversion paths.",
    sections: ["Landing pages", "Calls to action", "Trust signals", "Content strategy", "Conversion paths", "Retention"],
    questions: [
      {
        question: "Is growth only about more traffic?",
        answer: "No. Growth also depends on whether visitors understand the offer, trust the page, and can take the next step easily.",
      },
      {
        question: "What should a landing page fix first?",
        answer: "Fix the promise, audience match, call to action, proof, speed, mobile layout, and confusing friction before adding more sections.",
      },
      {
        question: "Can content grow a site without being pushy?",
        answer: "Yes. Helpful content can answer real questions, earn trust, and guide people to the next step when it genuinely fits.",
      },
    ],
    related: ["analytics", "seo", "accessibility"],
    commitCallout: {
      heading: "Healthy pages are easier to grow.",
      body: "Commit Happens can help spot the technical issues that quietly undermine content, landing pages, and conversion paths.",
      href: commitHappens.healthChecker,
      label: "Check your website health",
    },
  },
];

export const glossaryEntries = [
  {
    slug: "canonical-url",
    term: "Canonical URL",
    description: "The preferred URL search engines should treat as the main version of a page.",
    body: [
      "A canonical URL helps search engines understand which version of similar or duplicate content should be indexed. It is commonly used when the same content can be reached through tracking parameters, alternate paths, or protocol and host variations.",
      "Canonical tags are hints, not absolute commands. They work best when internal links, sitemap URLs, redirects, and page content all agree.",
    ],
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    description: "Google's user-experience performance metrics for loading, responsiveness, and visual stability.",
    body: [
      "Core Web Vitals are a set of performance metrics intended to reflect real user experience. They help identify pages that load slowly, respond late, or shift around while someone is trying to read or tap.",
      "They are useful diagnostics, but the goal is a faster and more stable experience, not a decorative score.",
    ],
  },
  {
    slug: "noindex",
    term: "Noindex",
    description: "A directive that tells search engines not to include a page in search results.",
    body: [
      "Noindex can be useful for utility pages, private pages, thin duplicates, and pages that should not appear in search. It becomes a problem when applied accidentally to important pages.",
      "Check noindex directives in page HTML, response headers, CMS settings, and SEO plugins.",
    ],
  },
  {
    slug: "uptime",
    term: "Uptime",
    description: "The amount of time a website is reachable and responding successfully.",
    body: [
      "Uptime matters because visitors, search engines, and campaigns cannot use a site that is down. Monitoring uptime helps catch outages faster than manual checks.",
      "Good uptime monitoring should include alerts, status context, and checks from more than one location when possible.",
    ],
  },
  {
    slug: "search-impression",
    term: "Search Impression",
    description: "A recorded appearance of your page in a search result.",
    body: [
      "An impression means a page from your site appeared in search results. It does not necessarily mean the user saw it closely, clicked it, or found it near the top.",
      "Impressions are most useful when paired with clicks, CTR, average position, and the actual query.",
    ],
  },
  {
    slug: "internal-link",
    term: "Internal Link",
    description: "A link from one page on your website to another page on the same website.",
    body: [
      "Internal links help visitors discover related pages and help search engines understand which pages matter. Good internal links use descriptive anchor text and appear where they are genuinely useful.",
      "Important pages should not be orphaned. If no page links to them, both humans and crawlers have a harder time finding them.",
    ],
  },
];

export const contentRoadmap = {
  targets: {
    seo: 50,
    performance: 30,
    websiteHealth: 20,
    analytics: 20,
    accessibility: 15,
    growth: 15,
    experiments: 25,
    glossary: 100,
  },
  seo: [
    "How Long Does SEO Take for a New Website?",
    "What Does Crawled, Currently Not Indexed Mean?",
    "Do Backlinks Still Matter?",
    "How Many Pages Should a Small-Business Website Have?",
    "How to Find Orphan Pages",
    "What Is Search Intent?",
    "When Should You Update an Old Article?",
    "Google Doesn't Hate AI Content. Here's What Actually Matters.",
  ],
  performance: [
    "How to Reduce Largest Contentful Paint",
    "Why Mobile Websites Load More Slowly",
    "How Large Should Website Images Be?",
    "Do Third-Party Scripts Slow Down a Website?",
    "How Fonts Affect Website Performance",
  ],
  websiteHealth: [
    "How to Find Broken Links",
    "What Causes Website Downtime?",
    "How to Test a Contact Form",
    "What Happens When an SSL Certificate Expires?",
    "Website Maintenance Checklist",
    "What to Check After Deploying a Website",
  ],
  analytics: [
    "Search Console Impressions Versus Clicks",
    "Why Website Traffic Suddenly Drops",
    "Direct Traffic Explained",
    "What Is a Good Click-Through Rate?",
    "How to Tell Whether a Landing Page Is Working",
  ],
  accessibility: [
    "Website Accessibility Checklist",
    "How to Write Useful Alt Text",
    "Why Keyboard Navigation Matters",
    "How to Check Website Color Contrast",
    "How to Make Forms Easier to Use",
  ],
  growth: [
    "How to Write a Better Call to Action",
    "Why Visitors Leave a Landing Page",
    "Website Trust Signals That Actually Help",
    "How to Turn an FAQ Into Useful Content",
    "When a Free Tool Can Attract Backlinks",
  ],
};

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
