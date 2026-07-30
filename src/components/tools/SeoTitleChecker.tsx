"use client";

import { useMemo, useState } from "react";

export default function SeoTitleChecker() {
  const [title, setTitle] = useState("Why Is My Website Getting Impressions but No Clicks?");

  const analysis = useMemo(() => {
    const length = title.trim().length;
    const pixelEstimate = Math.round(length * 8.2);
    const notes: string[] = [];

    if (length < 30) notes.push("This title is short. It may leave useful space unused.");
    if (length >= 30 && length <= 60) notes.push("This length is usually safe for desktop SERP display.");
    if (length > 60) notes.push("This title may get truncated in some search results.");
    if (!/[a-z]/i.test(title)) notes.push("Add readable words instead of symbols alone.");
    if (/best|guaranteed|number one|#1/i.test(title)) notes.push("Avoid exaggerated claims that do not help searchers decide.");
    if (/\b(why|how|what|when)\b/i.test(title)) notes.push("Question-style titles can make the page job obvious.");

    return { length, pixelEstimate, notes };
  }, [title]);

  return (
    <div className="rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
      <h2 className="heading-type text-3xl">SEO Title Checker</h2>
      <p className="mt-3 font-sans leading-7 text-neutral-700">
        Check length, truncation risk, and whether the title makes the page job obvious. This is a practical preview, not a ranking guarantee.
      </p>
      <label htmlFor="seo-title" className="mt-6 block font-mono font-bold">
        Title
      </label>
      <input
        id="seo-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="mt-2 min-h-12 w-full rounded-[10px] border-2 border-black px-4 font-sans focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
      />
      <div className="mt-6 rounded-2xl border-2 border-black bg-neutral-100 p-4">
        <p className="label-type text-neutral-500">SERP preview</p>
        <p className="mt-3 font-mono text-xl font-semibold text-[#1a0dab]">{title || "Your title appears here"}</p>
        <p className="mt-1 font-mono text-sm text-[#006621]">https://prettyflyforawebsite.com/guides/example</p>
        <p className="mt-2 font-sans text-sm text-neutral-700">A useful description would appear under the title when Google chooses to show it.</p>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-black bg-cyan-300 p-4">
          <dt className="label-type">Characters</dt>
          <dd className="metric-type mt-2 text-3xl">{analysis.length}</dd>
        </div>
        <div className="rounded-xl border-2 border-black bg-[#F45BCF] p-4">
          <dt className="label-type">Approx. pixels</dt>
          <dd className="metric-type mt-2 text-3xl">{analysis.pixelEstimate}</dd>
        </div>
      </dl>
      <ul className="mt-5 space-y-2">
        {analysis.notes.map((note) => (
          <li key={note} className="rounded-xl border-2 border-black bg-neutral-50 px-4 py-3 font-sans text-sm font-semibold">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
