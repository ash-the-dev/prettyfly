import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { glossaryEntries } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Glossary",
  description: "Plain-English definitions for SEO, performance, website health, analytics, accessibility, and technical website terms.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/glossary", label: "Glossary" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/glossary", label: "Glossary" },
        ]}
      />
      <PageHero
        eyebrow="Glossary"
        title="Website words, translated."
        description="Short, useful explanations for terms that tend to show up right before someone opens twelve tabs and sighs."
      />
      <section className="bg-white text-black">
        <div className="container-max grid gap-5 py-14 md:grid-cols-2 lg:grid-cols-3">
          {glossaryEntries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/glossary/${entry.slug}`}
              className="rounded-2xl border-2 border-black bg-neutral-100 p-6 shadow-[6px_6px_0_#000] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
            >
              <h2 className="heading-type text-2xl">{entry.term}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{entry.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
