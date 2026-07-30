"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchDocument = {
  type: string;
  title: string;
  description: string;
  href: string;
  category: string;
  searchText: string;
};

const categories = ["all", "seo", "performance", "website-health", "analytics", "accessibility", "growth", "experiments"];

export default function SearchClient({ documents }: { documents: SearchDocument[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return documents.filter((document) => {
      const categoryMatches = category === "all" || document.category === category;
      const queryMatches =
        !normalized ||
        document.title.toLowerCase().includes(normalized) ||
        document.searchText.toLowerCase().includes(normalized);

      return categoryMatches && queryMatches;
    });
  }, [category, documents, query]);

  return (
    <div className="grid gap-8">
      <div className="rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
        <label htmlFor="site-search" className="heading-type text-2xl">
          Search the site
        </label>
        <input
          id="site-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try indexing, Core Web Vitals, average position..."
          className="mt-4 min-h-12 w-full rounded-[10px] border-2 border-black px-4 font-sans text-lg focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
        />
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Category filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`min-h-11 rounded-[10px] border-2 border-black px-4 font-mono text-sm font-bold ${
                category === item ? "bg-[#F45BCF] text-black" : "bg-neutral-100 text-black"
              }`}
            >
              {item === "all" ? "All" : item}
            </button>
          ))}
        </div>
      </div>

      <div aria-live="polite" className="font-mono text-sm font-bold text-neutral-600">
        {results.length} result{results.length === 1 ? "" : "s"}
      </div>

      <div className="grid gap-4">
        {results.map((result) => (
          <Link
            key={result.href}
            href={result.href}
            className="rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
          >
            <p className="eyebrow text-[#A51C83]">{result.type} / {result.category}</p>
            <h2 className="heading-type mt-3 text-2xl">{result.title}</h2>
            <p className="mt-3 font-sans leading-7 text-neutral-700">{result.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
