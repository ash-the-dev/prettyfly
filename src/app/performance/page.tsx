import type { Metadata } from "next";

import { CategoryPage } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { categories, getCategory } from "@/lib/content";
import { getGuidesByCategory } from "@/lib/mdx";
import { breadcrumbJsonLd, categoryMetadata, collectionJsonLd, faqJsonLd } from "@/lib/seo";

const category = getCategory("performance")!;

export const metadata: Metadata = categoryMetadata(category);

export default function PerformancePage() {
  return (
    <>
      <JsonLd
        data={[
          collectionJsonLd(category),
          breadcrumbJsonLd([
            { href: "/", label: "Home" },
            { href: "/performance", label: "Performance" },
          ]),
          faqJsonLd(category.questions),
        ]}
      />
      <CategoryPage
        category={category}
        articles={getGuidesByCategory("performance")}
        relatedCategories={category.related.map((slug) => categories.find((item) => item.slug === slug)!).filter(Boolean)}
      />
    </>
  );
}
