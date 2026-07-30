import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { glossaryEntries } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return glossaryEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = glossaryEntries.find((item) => item.slug === slug);

  if (!entry) return {};

  return pageMetadata({
    title: `${entry.term} Definition`,
    description: entry.description,
    path: `/glossary/${entry.slug}`,
  });
}

export default async function GlossaryEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = glossaryEntries.find((item) => item.slug === slug);

  if (!entry) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/glossary", label: "Glossary" },
    { href: `/glossary/${entry.slug}`, label: entry.term },
  ];

  return (
    <main className="bg-white text-black">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <div className="bg-[#070707] text-white">
        <Breadcrumbs items={breadcrumbs} />
        <div className="reading-width py-12 md:py-20">
          <p className="eyebrow text-[#F45BCF]">Glossary</p>
          <h1 className="heading-type mt-4 text-5xl">{entry.term}</h1>
          <p className="mt-6 text-xl leading-8 text-white/75">{entry.description}</p>
        </div>
      </div>
      <article className="reading-width article-prose py-12">
        {entry.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
