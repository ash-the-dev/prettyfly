import type { Metadata } from "next";

import { CategoryPage } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { categories, getCategory } from "@/lib/content";
import { getGuidesByCategory } from "@/lib/mdx";
import { breadcrumbJsonLd, categoryMetadata, collectionJsonLd, faqJsonLd } from "@/lib/seo";

const category = getCategory("website-health")!;

export const metadata: Metadata = categoryMetadata(category);

export default function WebsiteHealthPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionJsonLd(category),
          breadcrumbJsonLd([
            { href: "/", label: "Home" },
            { href: "/website-health", label: "Website Health" },
          ]),
          faqJsonLd(category.questions),
        ]}
      />
      <CategoryPage
        category={category}
        articles={getGuidesByCategory("website-health")}
        relatedCategories={category.related.map((slug) => categories.find((item) => item.slug === slug)!).filter(Boolean)}
      />
    </>
  );
}
