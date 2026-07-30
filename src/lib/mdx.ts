import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

import matter from "gray-matter";

import type { CategorySlug } from "@/lib/content";

const root = process.cwd();
const guidesDirectory = path.join(root, "content", "guides");
const experimentsDirectory = path.join(root, "content", "experiments");

export type Source = {
  label: string;
  href: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CommitCalloutData = {
  heading: string;
  body: string;
  href: string;
  label: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  author: string;
  authorSlug: string;
  category: CategorySlug;
  readingTime: string;
  featured: boolean;
  popular: boolean;
  checklist: boolean;
  draft: boolean;
  noindex: boolean;
  related: string[];
  sources: Source[];
  faqs: FAQ[];
  commitCallout?: CommitCalloutData;
  content: string;
  headings: { id: string; title: string }[];
  searchText: string;
};

export type Experiment = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  author: string;
  authorSlug: string;
  category: "experiments";
  status: string;
  noindex: boolean;
  week?: number;
  related: string[];
  content: string;
  headings: { id: string; title: string }[];
  searchText: string;
};

function mdxFiles(directory: string) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"));
}

function slugFromFile(file: string) {
  return file.replace(/\.mdx$/, "");
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(content: string) {
  return [...content.matchAll(/^##\s+(.+)$/gm)].map((match) => {
    const title = match[1].trim();
    return { id: slugify(title), title };
  });
}

function stripMdx(content: string) {
  return content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[`*_#[\]()>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readGuide(file: string): Article {
  const source = fs.readFileSync(path.join(guidesDirectory, file), "utf8");
  const { data, content } = matter(source);
  const slug = String(data.slug ?? slugFromFile(file));

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    published: String(data.published),
    updated: String(data.updated),
    author: String(data.author),
    authorSlug: String(data.authorSlug ?? "ash-morales"),
    category: data.category as CategorySlug,
    readingTime: String(data.readingTime ?? "8 min read"),
    featured: Boolean(data.featured),
    popular: Boolean(data.popular),
    checklist: Boolean(data.checklist),
    draft: Boolean(data.draft),
    noindex: Boolean(data.noindex),
    related: Array.isArray(data.related) ? data.related.map(String) : [],
    sources: Array.isArray(data.sources) ? (data.sources as Source[]) : [],
    faqs: Array.isArray(data.faqs) ? (data.faqs as FAQ[]) : [],
    commitCallout: data.commitCallout as CommitCalloutData | undefined,
    content,
    headings: extractHeadings(content),
    searchText: stripMdx(content),
  };
}

function readExperiment(file: string): Experiment {
  const source = fs.readFileSync(path.join(experimentsDirectory, file), "utf8");
  const { data, content } = matter(source);
  const slug = String(data.slug ?? slugFromFile(file));

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    published: String(data.published),
    updated: String(data.updated),
    author: String(data.author),
    authorSlug: String(data.authorSlug ?? "ash-morales"),
    category: "experiments",
    status: String(data.status ?? "Experiment in Progress"),
    noindex: Boolean(data.noindex),
    week: typeof data.week === "number" ? data.week : undefined,
    related: Array.isArray(data.related) ? data.related.map(String) : [],
    content,
    headings: extractHeadings(content),
    searchText: stripMdx(content),
  };
}

export const getAllGuides = cache(() =>
  mdxFiles(guidesDirectory)
    .map(readGuide)
    .filter((guide) => !guide.draft)
    .sort((a, b) => b.published.localeCompare(a.published)),
);

export const getAllExperiments = cache(() =>
  mdxFiles(experimentsDirectory).map(readExperiment).sort((a, b) => {
    if (a.week && b.week) return a.week - b.week;
    return b.published.localeCompare(a.published);
  }),
);

export function getIndexableGuides() {
  return getAllGuides().filter((guide) => !guide.noindex);
}

export function getIndexableExperiments() {
  return getAllExperiments().filter((experiment) => !experiment.noindex);
}

export function getGuide(slug: string) {
  return getAllGuides().find((guide) => guide.slug === slug);
}

export function getExperiment(slug: string) {
  return getAllExperiments().find((experiment) => experiment.slug === slug);
}

export function getGuidesByCategory(slug: CategorySlug) {
  return getAllGuides().filter((guide) => guide.category === slug);
}

export function getRelatedGuides(article: Article) {
  return article.related.map(getGuide).filter((item): item is Article => Boolean(item));
}

export function getSearchDocuments() {
  const guideDocs = getAllGuides().map((guide) => ({
    type: "Guide",
    title: guide.title,
    description: guide.description,
    href: `/guides/${guide.slug}`,
    category: guide.category,
    searchText: `${guide.title} ${guide.description} ${guide.searchText}`,
  }));

  const experimentDocs = getAllExperiments().map((experiment) => ({
    type: "Experiment",
    title: experiment.title,
    description: experiment.description,
    href: `/experiments/${experiment.slug}`,
    category: "experiments",
    searchText: `${experiment.title} ${experiment.description} ${experiment.searchText}`,
  }));

  return [...guideDocs, ...experimentDocs];
}
