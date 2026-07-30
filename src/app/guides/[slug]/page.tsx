import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { ReadingProgress, ShareTools } from "@/components/ArticleTools";
import { Breadcrumbs, CommitCallout, FAQList, RelatedArticles } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { mdxComponents } from "@/components/MdxComponents";
import { getCategory } from "@/lib/content";
import { getAllGuides, getGuide, getRelatedGuides } from "@/lib/mdx";
import { absoluteUrl, articleJsonLd, articleMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGuides().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuide(slug);

  if (!article) return {};

  return articleMetadata(article);
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getGuide(slug);

  if (!article) notFound();

  const category = getCategory(article.category)!;
  const related = getRelatedGuides(article);
  const { content } = await compileMDX({
    source: article.content,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/guides", label: "Guides" },
    { href: `/${category.slug}`, label: category.label },
    { href: `/guides/${article.slug}`, label: article.title },
  ];

  return (
    <main className="bg-white text-black">
      <ReadingProgress />
      <JsonLd data={[articleJsonLd(article), breadcrumbJsonLd(breadcrumbs), faqJsonLd(article.faqs)]} />
      <div className="bg-[#070707] text-white">
        <Breadcrumbs items={breadcrumbs} />
        <article className="reading-width py-12 md:py-20">
          <p className="eyebrow text-[#F45BCF]">{category.label}</p>
          <h1 className="heading-type mt-4 text-4xl md:text-6xl">{article.title}</h1>
          <p className="mt-6 font-sans text-xl leading-8 text-white/75">{article.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm text-white/65">
            <Link href={`/author/${article.authorSlug}`} className="underline-offset-4 hover:text-[#F45BCF] hover:underline">
              By {article.author}
            </Link>
            <span aria-hidden="true">•</span>
            <time dateTime={article.published}>Published {article.published}</time>
            <span aria-hidden="true">•</span>
            <span className="font-mono font-bold">{article.readingTime}</span>
          </div>
        </article>
      </div>

      <div className="container-max grid gap-10 py-12 lg:grid-cols-[minmax(0,760px)_320px] lg:items-start">
        <article className="article-prose">
          <nav aria-label="Table of contents" className="rounded-2xl border-2 border-black bg-neutral-100 p-5 text-base">
            <h2 className="heading-type mt-0 text-2xl">Table of contents</h2>
            <ol className="mt-4 space-y-2 pl-5">
              {article.headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`}>{heading.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <p>
            This guide belongs to the{" "}
            <Link href={`/${category.slug}`}>{category.label.toLowerCase()} guides</Link> section and connects to related guides below.
          </p>

          {content}

          {article.commitCallout ? <CommitCallout {...article.commitCallout} /> : null}

          <FAQList faqs={article.faqs} />

          <section className="mt-12">
            <h2>Sources and references</h2>
            <ul>
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <RelatedArticles articles={related} />
        </article>

        <aside className="lg:sticky lg:top-28">
          <div className="rounded-2xl border-2 border-black bg-neutral-100 p-5">
            <h2 className="heading-type text-2xl">Keep reading</h2>
            <div className="mt-4 grid gap-3 font-mono">
              <Link href={`/${category.slug}`} className="font-bold text-[#A51C83] underline-offset-4 hover:underline">
                More {category.label} guides
              </Link>
              {related.map((item) => (
                <Link key={item.slug} href={`/guides/${item.slug}`} className="font-bold text-[#A51C83] underline-offset-4 hover:underline">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <ShareTools title={article.title} url={absoluteUrl(`/guides/${article.slug}`)} />
          </div>
        </aside>
      </div>
    </main>
  );
}
