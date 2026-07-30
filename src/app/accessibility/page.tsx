import type { Metadata } from "next";

import { CategoryPage } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { categories, getCategory } from "@/lib/content";
import { getGuidesByCategory } from "@/lib/mdx";
import { breadcrumbJsonLd, categoryMetadata, collectionJsonLd, faqJsonLd } from "@/lib/seo";

const category = getCategory("accessibility")!;

export const metadata: Metadata = categoryMetadata(category);

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionJsonLd(category),
          breadcrumbJsonLd([
            { href: "/", label: "Home" },
            { href: "/accessibility", label: "Accessibility" },
          ]),
          faqJsonLd(category.questions),
        ]}
      />
      <CategoryPage
        category={category}
        articles={getGuidesByCategory("accessibility")}
        relatedCategories={category.related.map((slug) => categories.find((item) => item.slug === slug)!).filter(Boolean)}
      />
    </>
  );
}
