import Link from "next/link";

import TrackedLink from "@/components/TrackedLink";
import { commitHappens, getCategory, type Category } from "@/lib/content";
import type { Article } from "@/lib/mdx";

export const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-[10px] border-2 border-black bg-[#F45BCF] px-5 py-3 font-mono text-sm font-bold text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] focus:outline-none focus:ring-4 focus:ring-cyan-300";

export const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-[10px] border-2 border-black bg-cyan-300 px-5 py-3 font-mono text-sm font-bold text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] focus:outline-none focus:ring-4 focus:ring-[#F45BCF]/40";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-[#070707] text-white">
      <div className="container-max py-16 md:py-24">
        {eyebrow ? <p className="eyebrow text-[#F45BCF]">{eyebrow}</p> : null}
        <h1 className="heading-type mt-4 max-w-4xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl font-sans text-lg leading-8 text-white/75 md:text-xl">{description}</p>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-max pt-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-white/65">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-white">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="underline-offset-4 hover:text-[#F45BCF] hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const category = getCategory(article.category);

  return (
    <Link
      href={`/guides/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border-2 border-black bg-white p-6 text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_#000] focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
    >
      <div className="label-type flex items-center justify-between gap-3">
        <span className="text-[#A51C83]">{category?.label}</span>
        <span>{article.readingTime}</span>
      </div>
      <h3 className={`heading-type ${compact ? "text-xl" : "text-2xl"} mt-4 leading-snug`}>
        {article.title}
      </h3>
      <p className="mt-3 flex-1 font-sans text-sm leading-6 text-neutral-700">{article.description}</p>
      <span className="mt-6 font-mono font-bold text-[#A51C83] group-hover:text-black">Read the guide</span>
    </Link>
  );
}

export function TopicCard({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border-2 border-black bg-white p-6 text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_#000] focus:outline-none focus:ring-4 focus:ring-cyan-300"
    >
      <p className="label-type text-[#A51C83]">{label}</p>
      <h3 className="heading-type mt-4 text-2xl leading-snug">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-6 text-neutral-700">{description}</p>
      <span className="mt-5 inline-block font-mono font-bold group-hover:text-[#A51C83]">Start here</span>
    </Link>
  );
}

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;

  return (
    <section className="mt-14 border-t-2 border-black pt-8">
      <h2 className="heading-type text-3xl text-black">Related guides</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} compact />
        ))}
      </div>
    </section>
  );
}

export function CommitCallout({
  heading,
  body,
  href = commitHappens.healthChecker,
  label = "Check your website",
}: {
  heading: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <aside className="rounded-2xl border-2 border-black bg-[#091B36] p-6 text-white shadow-[6px_6px_0_#000]">
      <p className="eyebrow text-cyan-300">Tool recommendation</p>
      <h2 className="heading-type mt-3 text-2xl">{heading}</h2>
      <p className="mt-3 font-sans leading-7 text-white/80">{body}</p>
      <TrackedLink
        href={href}
        eventName={href.includes("website-health-checker") ? "website_health_checker_click" : "commit_happens_outbound_click"}
        eventLabel={label}
        className={`${buttonClass} mt-5`}
      >
        {label}
      </TrackedLink>
      <p className="mt-4 text-sm leading-6 text-white/75">
        Pretty Fly for a Website and Commit Happens are related projects. We recommend it where it genuinely fits the problem being discussed.
      </p>
    </aside>
  );
}

export function FAQList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="mt-12">
      <h2 className="heading-type text-3xl text-black">Common questions</h2>
      <div className="mt-6 divide-y-2 divide-black border-y-2 border-black">
        {faqs.map((faq) => (
          <details key={faq.question} className="group bg-white p-5 open:bg-neutral-50">
            <summary className="heading-type cursor-pointer list-none text-xl focus:outline-none focus:ring-4 focus:ring-[#F45BCF]">
              {faq.question}
            </summary>
            <p className="mt-3 font-sans leading-7 text-neutral-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CategoryPage({ category, articles, relatedCategories }: { category: Category; articles: Article[]; relatedCategories: Category[] }) {
  const featured = articles[0];

  return (
    <main>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: `/${category.slug}`, label: category.label },
        ]}
      />
      <PageHero eyebrow="Topic guide" title={category.title} description={category.intro} />
      <section className="bg-white text-black">
        <div className="container-max grid gap-10 py-14 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="heading-type text-3xl">Start here</h2>
            {featured ? (
              <div className="mt-6 max-w-2xl">
                <ArticleCard article={featured} />
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border-2 border-black bg-neutral-100 p-6">
                <p className="eyebrow text-[#A51C83]">Coming soon</p>
                <p className="mt-3 font-sans leading-7 text-neutral-700">
                  A complete guide for this topic is planned. Until then, use the sections and questions on this page as a starting map.
                </p>
              </div>
            )}
            <h2 className="heading-type mt-12 text-3xl">Guides in this category</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {articles.length > 0 ? (
                articles.map((article) => <ArticleCard key={article.slug} article={article} compact />)
              ) : (
                <div className="rounded-2xl border-2 border-black bg-neutral-100 p-6 font-sans text-neutral-700 md:col-span-2">
                  No published guides in this category yet. Draft topics are tracked in the content roadmap and stay out of the sitemap until they are complete.
                </div>
              )}
            </div>
            <FAQList faqs={category.questions} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border-2 border-black bg-neutral-100 p-6">
              <h2 className="heading-type text-2xl">Useful sections</h2>
              <ul className="mt-4 space-y-3">
                {category.sections.map((section) => (
                  <li key={section} className="flex gap-2 font-mono text-sm font-bold">
                    <span aria-hidden="true" className="text-[#F45BCF]">●</span>
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            <CommitCallout {...category.commitCallout} />
            <div className="rounded-2xl border-2 border-black bg-white p-6">
              <h2 className="heading-type text-2xl">Related categories</h2>
              <div className="mt-4 grid gap-3">
                {relatedCategories.map((related) => (
                  <Link key={related.slug} href={`/${related.slug}`} className="font-mono font-bold text-[#A51C83] underline-offset-4 hover:underline">
                    {related.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
