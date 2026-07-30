import type { Metadata } from "next";
import Link from "next/link";

import { ArticleCard, buttonClass, secondaryButtonClass, TopicCard } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrackedLink from "@/components/TrackedLink";
import { commitHappens } from "@/lib/content";
import { getAllExperiments, getAllGuides } from "@/lib/mdx";
import { pageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pretty Fly for a Website",
  description: "Make your website faster, healthier, and easier to find with practical SEO, performance, analytics, accessibility, and website-health guides.",
  path: "/",
});

const topicCards = [
  {
    label: "SEO",
    title: "Get found in search",
    description: "Learn how indexing, search intent, page structure, internal links, metadata, and technical SEO work together.",
    href: "/seo",
  },
  {
    label: "Performance",
    title: "Make your site faster",
    description: "Understand Core Web Vitals, image optimization, scripts, caching, fonts, and the things making visitors wait.",
    href: "/performance",
  },
  {
    label: "Website Health",
    title: "Catch quiet website problems",
    description: "Find broken links, missing pages, uptime issues, redirect problems, SSL errors, and technical warning signs.",
    href: "/website-health",
  },
  {
    label: "Analytics",
    title: "Understand what visitors do",
    description: "Learn which numbers matter, what your traffic is telling you, and where people abandon the journey.",
    href: "/analytics",
  },
  {
    label: "Accessibility",
    title: "Build for more people",
    description: "Improve readability, navigation, forms, contrast, keyboard access, and the overall experience for every visitor.",
    href: "/accessibility",
  },
  {
    label: "Growth",
    title: "Turn attention into action",
    description: "Improve landing pages, calls to action, trust signals, content strategy, and conversion paths without sounding desperate.",
    href: "/growth",
  },
];

export default function Home() {
  const guides = getAllGuides();
  const featured = guides.filter((article) => article.featured).slice(0, 6);
  const latestGuides = guides.slice(0, 4);
  const popularGuides = guides.filter((guide) => guide.popular).slice(0, 4);
  const recentlyUpdated = [...guides].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 4);
  const featuredChecklist = guides.find((guide) => guide.checklist);
  const experiments = getAllExperiments().slice(0, 4);

  return (
    <main className="overflow-hidden bg-[#070707]">
      <JsonLd data={websiteJsonLd()} />
      <section className="bg-[#070707] text-white">
        <div className="container-max grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_460px] lg:items-center">
          <div>
            <p className="eyebrow text-[#F45BCF]">The Myth Busters of SEO, performance, and website health.</p>
            <h1 className="mt-5 max-w-4xl heading-type text-5xl md:text-7xl">
              Make your website pretty fly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Challenge lazy assumptions, verify what is actually happening, and fix the problems that quietly cost you visitors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#featured-guides" className={buttonClass}>Learn Something Useful</a>
              <TrackedLink
                href={commitHappens.healthChecker}
                eventName="website_health_checker_click"
                eventLabel="Homepage hero secondary"
                className={secondaryButtonClass}
              >
                Fix Your Website
              </TrackedLink>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
              Practical guides, real experiments, original diagrams, and plain-English fixes for websites that deserve better.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-black bg-white p-5 text-black shadow-[10px_10px_0_#000]">
            <div className="flex items-center justify-between border-b-2 border-black pb-4">
              <div>
                <p className="eyebrow text-[#A51C83]">Website health snapshot</p>
                <h2 className="heading-type text-2xl">Needs attention</h2>
              </div>
              <span className="rounded-[10px] border-2 border-black bg-cyan-300 px-3 py-1 text-xs font-bold">Live-ish</span>
            </div>
            <div className="mt-5 grid gap-4">
              {[
                ["SEO score", "74", "Titles need work"],
                ["Uptime", "99.9%", "Looks calm"],
                ["Performance", "Needs work", "Large hero image"],
                ["Broken links", "3", "Check redirects"],
                ["Search impressions", "Rising", "Clicks lagging"],
              ].map(([label, value, note]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] gap-4 rounded-2xl border-2 border-black bg-neutral-100 p-4">
                  <div>
                    <p className="font-mono text-sm font-bold">{label}</p>
                    <p className="mt-1 font-sans text-sm text-neutral-600">{note}</p>
                  </div>
                  <div className="metric-type text-2xl text-[#A51C83]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 text-black">
        <div className="container-max py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="heading-type text-4xl">What does your website need help with?</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Pick the problem that sounds most familiar. We will skip the jargon and show you where to start.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topicCards.map((card) => (
              <TopicCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container-max py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#A51C83]">Editorial promise</p>
            <h2 className="mt-3 heading-type text-4xl">Not another pile of SEO articles.</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Pretty Fly for a Website is built to challenge assumptions with evidence: why a position of 39 is not automatically bad, why impressions with zero clicks can be useful, and why tools never guarantee rankings.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/guides" className={buttonClass}>Explore the Guides</Link>
              <Link href="/tools" className={secondaryButtonClass}>Browse free tools</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-guides" className="bg-neutral-100 text-black">
        <div className="container-max py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="heading-type text-4xl">Featured field guides</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              No 9,000-word detours before answering the question. Just useful explanations and practical steps.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 text-black">
        <div className="container-max grid gap-8 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-[#A51C83]">Latest guides</p>
            <h2 className="mt-3 heading-type text-4xl">Fresh field notes for healthier websites.</h2>
            <div className="mt-8 grid gap-4">
              {latestGuides.map((guide) => (
                <ArticleCard key={guide.slug} article={guide} compact />
              ))}
            </div>
          </div>
          <div className="grid gap-8">
            <div>
              <p className="eyebrow text-[#A51C83]">Popular guides</p>
              <div className="mt-4 grid gap-3">
                {popularGuides.map((guide) => (
                  <a key={guide.slug} href={`/guides/${guide.slug}`} className="block rounded-xl border-2 border-black bg-white p-4 font-mono font-bold shadow-[4px_4px_0_#000] hover:-translate-y-0.5">
                    {guide.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-[#A51C83]">Recently updated</p>
              <div className="mt-4 grid gap-3">
                {recentlyUpdated.map((guide) => (
                  <a key={guide.slug} href={`/guides/${guide.slug}`} className="block rounded-xl border-2 border-black bg-white p-4 font-mono font-bold shadow-[4px_4px_0_#000] hover:-translate-y-0.5">
                    {guide.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#091B36] text-white">
        <div className="container-max grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="heading-type text-4xl">Your website probably will not dramatically explode.</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              It may quietly slow down, lose rankings, break a form, stop recording conversions, or send visitors to a missing page. Those smaller failures are often the expensive ones.
            </p>
            <a href="/website-health" className={`${buttonClass} mt-8`}>Learn about website health</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Search visibility slips", "Important pages slow down", "Forms stop working", "Links and redirects break"].map((item) => (
              <div key={item} className="rounded-2xl border-2 border-black bg-white p-5 heading-type text-2xl text-black shadow-[6px_6px_0_#000]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 text-black">
        <div className="container-max py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="heading-type text-4xl">Newest experiments, with receipts</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              We test assumptions, track what changes, and publish what actually happened.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experiments.map((experiment) => (
              <article key={experiment.slug} className="rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
                <p className="eyebrow text-[#A51C83]">{experiment.status}</p>
                <h3 className="mt-4 heading-type text-2xl">{experiment.title}</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {experiment.description}
                </p>
                <a href={`/experiments/${experiment.slug}`} className="mt-5 inline-block font-bold text-[#A51C83] underline-offset-4 hover:underline">
                  Follow the experiment
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredChecklist ? (
        <section className="bg-white text-black">
          <div className="container-max py-16 md:py-24">
            <div className="grid gap-8 rounded-3xl border-2 border-black bg-cyan-300 p-8 shadow-[10px_10px_0_#000] lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow">Featured checklist</p>
                <h2 className="mt-3 heading-type text-4xl">{featuredChecklist.title}</h2>
                <p className="mt-4 text-lg leading-8">{featuredChecklist.description}</p>
              </div>
              <a href={`/guides/${featuredChecklist.slug}`} className={buttonClass}>Open the checklist</a>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white text-black">
        <div className="container-max py-16 md:py-24">
          <div className="rounded-3xl border-2 border-black bg-[#091B36] p-8 text-white shadow-[10px_10px_0_#000] md:p-12">
            <p className="eyebrow text-cyan-300">Tool recommendation</p>
            <h2 className="mt-4 max-w-3xl heading-type text-4xl">Would you rather check the website than memorize the checklist?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
              Commit Happens monitors website health, SEO, performance, uptime, analytics, and technical issues in one place. It translates the findings into language normal humans can use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink href={commitHappens.healthChecker} eventName="website_health_checker_click" eventLabel="Homepage callout primary" className={buttonClass}>
                Check your website
              </TrackedLink>
              <TrackedLink href={commitHappens.monitoring} eventName="commit_happens_outbound_click" eventLabel="Homepage callout secondary" className={secondaryButtonClass}>
                See how Commit Happens works
              </TrackedLink>
            </div>
            <p className="mt-6 rounded-xl border border-white/25 bg-white/10 p-4 text-sm leading-6 text-white/80">
              Pretty Fly for a Website and Commit Happens are related projects. We recommend it where it genuinely fits the problem being discussed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 text-black">
        <div className="container-max py-16 md:py-24">
          <div className="grid gap-8 rounded-3xl border-2 border-black bg-white p-8 shadow-[10px_10px_0_#000] md:grid-cols-[1fr_420px] md:p-12">
            <div>
              <h2 className="heading-type text-4xl">One useful website lesson at a time.</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-700">
                Get practical SEO, performance, and website-health advice without a daily avalanche of marketing fluff.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </main>
  );
}
