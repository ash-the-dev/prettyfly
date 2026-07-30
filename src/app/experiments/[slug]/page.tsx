import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { ReadingProgress, ShareTools } from "@/components/ArticleTools";
import { Breadcrumbs } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { mdxComponents } from "@/components/MdxComponents";
import { getAllExperiments, getExperiment } from "@/lib/mdx";
import { absoluteUrl, breadcrumbJsonLd, experimentMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllExperiments().map((experiment) => ({ slug: experiment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperiment(slug);

  if (!experiment) return {};

  return experimentMetadata(experiment);
}

export default async function ExperimentDetailPage({ params }: Props) {
  const { slug } = await params;
  const experiment = getExperiment(slug);

  if (!experiment) notFound();

  const { content } = await compileMDX({
    source: experiment.content,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/experiments", label: "Experiments" },
    { href: `/experiments/${experiment.slug}`, label: experiment.title },
  ];

  return (
    <main className="bg-white text-black">
      <ReadingProgress />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <div className="bg-[#070707] text-white">
        <Breadcrumbs items={breadcrumbs} />
        <article className="reading-width py-12 md:py-20">
          <p className="eyebrow text-[#F45BCF]">{experiment.status}</p>
          <h1 className="heading-type mt-4 text-4xl md:text-6xl">{experiment.title}</h1>
          <p className="mt-6 text-xl leading-8 text-white/75">{experiment.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/65">
            <Link href={`/author/${experiment.authorSlug}`} className="underline-offset-4 hover:text-[#F45BCF] hover:underline">
              By {experiment.author}
            </Link>
          </div>
          {experiment.noindex ? (
            <p className="mt-6 rounded-xl border border-white/25 bg-white/10 p-4 text-sm leading-6 text-white/80">
              Experiment in Progress. This page is intentionally marked noindex until it has meaningful findings.
            </p>
          ) : null}
        </article>
      </div>
      <div className="container-max grid gap-10 py-12 lg:grid-cols-[minmax(0,760px)_320px] lg:items-start">
        <article className="article-prose">{content}</article>
        <aside className="lg:sticky lg:top-28">
          <ShareTools title={experiment.title} url={absoluteUrl(`/experiments/${experiment.slug}`)} />
        </aside>
      </div>
    </main>
  );
}
