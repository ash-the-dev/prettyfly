"use client";

import { useEffect, useState } from "react";

const palettes = [
  { id: "lime" as const, label: "Neon Park" },
  { id: "magenta" as const, label: "Midnight Pop" },
  { id: "ember" as const, label: "Sunset Grid" },
];

export default function PaletteSwitcher() {
  const [active, setActive] = useState<(typeof palettes)[number]["id"]>("lime");

  useEffect(() => {
    document.documentElement.dataset.flyPalette = active;
  }, [active]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-fly-muted mr-1">Studio mood</span>
      {palettes.map((p) => (
        <button
          key={p.id}
          type="button"
          onClick={() => setActive(p.id)}
          className={[
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-all border",
            active === p.id
              ? "border-[rgb(var(--accent-rgb))] text-fly-cream bg-[rgb(var(--accent-rgb)/0.12)] shadow-glow"
              : "border-fly-line text-fly-muted hover:text-fly-cream hover:border-white/20",
          ].join(" ")}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}
