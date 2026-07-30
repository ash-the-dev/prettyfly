import type { Metadata } from "next";

import { ArticleCard, Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { getAllGuides } from "@/lib/mdx";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Guides",
  description: "Practical plain-English guides to SEO, website performance, website health, analytics, accessibility, and growth.",
  path: "/guides",
});

export default function GuidesPage() {
  const articles = getAllGuides();

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/guides", label: "Guides" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/guides", label: "Guides" },
        ]}
      />
      <PageHero
        eyebrow="Guides"
        title="Helpful website advice without the 37-tab panic spiral."
        description="Start with practical explanations, clear checklists, and plain-English next steps for the problems real websites run into."
      />
      <section className="bg-white text-black">
        <div className="container-max py-14 md:py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
