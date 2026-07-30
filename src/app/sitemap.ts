import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";
import { categories, glossaryEntries } from "@/lib/content";
import { getIndexableExperiments, getIndexableGuides } from "@/lib/mdx";

/**
 * Full App Router sitemap for prettyflyforawebsite.com.
 * Includes every publicly indexable route. Draft guides and noindex
 * experiments are excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "/",
    "/seo",
    "/performance",
    "/website-health",
    "/analytics",
    "/accessibility",
    "/growth",
    "/guides",
    "/experiments",
    "/glossary",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/search",
    "/tools",
    "/author/ash-morales",
  ];

  // Keep category routes derived from content config so new categories stay in sync.
  const categoryRoutes = categories.map((category) => `/${category.slug}`);
  const uniqueStatic = Array.from(new Set([...staticRoutes, ...categoryRoutes]));

  const guideRoutes = getIndexableGuides().map((article) => `/guides/${article.slug}`);
  const experimentRoutes = getIndexableExperiments().map((experiment) => `/experiments/${experiment.slug}`);
  const glossaryRoutes = glossaryEntries.map((entry) => `/glossary/${entry.slug}`);

  const routes = [...uniqueStatic, ...guideRoutes, ...experimentRoutes, ...glossaryRoutes];

  return routes.map((route) => ({
    url: route === "/" ? `${base}/` : `${base}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/guides/") ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route.startsWith("/guides/") ? 0.8 : route.startsWith("/glossary/") ? 0.6 : 0.7,
  }));
}
