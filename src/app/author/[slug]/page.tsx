import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard, Breadcrumbs } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { getAllGuides } from "@/lib/mdx";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "ash-morales" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== "ash-morales") return {};

  return pageMetadata({
    title: "Ash Morales",
    description: "Articles by Ash Morales on SEO, website performance, website health, analytics, accessibility, and growth.",
    path: "/author/ash-morales",
  });
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;

  if (slug !== "ash-morales") notFound();

  const articles = getAllGuides().filter((guide) => guide.authorSlug === "ash-morales");
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/author/ash-morales", label: "Ash Morales" },
  ];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ash Morales",
    url: absoluteUrl("/author/ash-morales"),
    jobTitle: "Writer",
    worksFor: {
      "@type": "Organization",
      name: "Pretty Fly for a Website",
      url: absoluteUrl("/"),
    },
  };

  return (
    <main>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), personJsonLd]} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-[#070707] text-white">
        <div className="container-max py-16 md:py-24">
          <p className="eyebrow text-[#F45BCF]">Author</p>
          <h1 className="heading-type mt-4 text-5xl">Ash Morales</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Ash creates Pretty Fly for a Website and writes plain-English guides about SEO, website performance, analytics, accessibility, technical maintenance, and website health.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/65">
            No invented awards, client counts, or credentials. Just practical explanations, careful caveats, and a strong dislike of fake certainty.
          </p>
        </div>
      </section>
      <section className="bg-white text-black">
        <div className="container-max py-14">
          <h2 className="heading-type text-3xl">Articles by Ash</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
