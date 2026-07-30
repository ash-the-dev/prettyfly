import type { Metadata } from "next";

import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import SearchClient from "@/components/SearchClient";
import { getSearchDocuments } from "@/lib/mdx";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Search",
  description: "Search Pretty Fly for a Website guides and experiments by title, content, and category.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/search", label: "Search" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/search", label: "Search" },
        ]}
      />
      <PageHero
        eyebrow="Search"
        title="Find the useful bit faster."
        description="Search guide titles, article content, experiment notes, and categories without opening a dozen tabs."
      />
      <section className="bg-neutral-100 text-black">
        <div className="container-max py-12">
          <SearchClient documents={getSearchDocuments()} />
        </div>
      </section>
    </main>
  );
}
