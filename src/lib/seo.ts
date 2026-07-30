import type { Metadata } from "next";

import { siteName, siteUrl } from "@/config/site";
import type { Category } from "@/lib/content";
import type { Article, Experiment } from "@/lib/mdx";

const defaultDescription =
  "Plain-English guides for making websites faster, healthier, easier to use, and easier to find.";

export const defaultOgImage = "/opengraph-image";

export function absoluteUrl(path = "/") {
  const base = siteUrl.replace(/\/$/, "");
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName,
      title,
      description,
      images: [{ url: absoluteUrl(defaultOgImage), width: 1200, height: 630, alt: `${siteName} social sharing image` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(defaultOgImage)],
    },
  };
}

export function articleMetadata(article: Article): Metadata {
  const url = absoluteUrl(`/guides/${article.slug}`);

  return {
    ...pageMetadata({
      title: article.title,
      description: article.description,
      path: `/guides/${article.slug}`,
      type: "article",
    }),
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      url,
      siteName,
      title: article.title,
      description: article.description,
      images: [{ url: absoluteUrl(defaultOgImage), width: 1200, height: 630, alt: `${siteName} social sharing image` }],
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [article.author],
    },
  };
}

export function experimentMetadata(experiment: Experiment): Metadata {
  return {
    ...pageMetadata({
      title: experiment.title,
      description: experiment.description,
      path: `/experiments/${experiment.slug}`,
      type: "article",
    }),
    robots: { index: !experiment.noindex, follow: true },
  };
}

export function categoryMetadata(category: Category): Metadata {
  return pageMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/${category.slug}`,
  });
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: organizationJsonLd(),
    inLanguage: "en-US",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    founder: { "@type": "Person", name: "Ash Morales" },
    sameAs: ["https://www.commithappens.com"],
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@type": "Person", name: article.author },
    publisher: organizationJsonLd(),
    mainEntityOfPage: absoluteUrl(`/guides/${article.slug}`),
    image: absoluteUrl(defaultOgImage),
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function collectionJsonLd(category: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.metaTitle,
    description: category.metaDescription,
    url: absoluteUrl(`/${category.slug}`),
  };
}
