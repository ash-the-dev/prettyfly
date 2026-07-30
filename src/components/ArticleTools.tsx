"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[120] h-1 w-full bg-transparent" aria-hidden="true">
      <div className="h-full bg-[#F45BCF]" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function ShareTools({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <aside className="rounded-2xl border-2 border-black bg-white p-5 text-black shadow-[6px_6px_0_#000]">
      <h2 className="heading-type text-2xl">Share</h2>
      <div className="mt-4 grid gap-3 font-mono">
        <button
          type="button"
          onClick={copyLink}
          className="min-h-11 rounded-[10px] border-2 border-black bg-[#F45BCF] px-4 font-bold text-black focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
          {copied ? "Copied" : "Copy Link"}
        </button>
        <a className="font-bold text-[#A51C83] underline-offset-4 hover:underline" href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} rel="noopener noreferrer">
          Twitter
        </a>
        <a className="font-bold text-[#A51C83] underline-offset-4 hover:underline" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="font-bold text-[#A51C83] underline-offset-4 hover:underline" href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`} rel="noopener noreferrer">
          Reddit
        </a>
      </div>
    </aside>
  );
}
