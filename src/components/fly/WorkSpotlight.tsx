"use client";

import { useState } from "react";

const projects = [
  {
    id: "aurora",
    title: "Aurora Athletic",
    tag: "E‑commerce pulse",
    blurb: "Modular storytelling, rich product rhythm, checkout that never fights the user.",
    fills: "from-[rgb(var(--accent-rgb)/0.22)] to-[rgb(var(--accent2-rgb)/0.12)]",
  },
  {
    id: "glyph",
    title: "Glyph Records",
    tag: "Editorial drop",
    blurb: "Typography-forward grids, vinyl drop countdowns, and a browsing flow built like a mixtape.",
    fills: "from-[rgb(var(--accent2-rgb)/0.22)] to-[rgb(var(--accent-rgb)/0.1)]",
  },
  {
    id: "orbit",
    title: "Orbit Clinics",
    tag: "Care with clarity",
    blurb: "Accessible scheduling, reassurance-led copy, and component language that feels human.",
    fills: "from-[rgb(var(--accent2-rgb)/0.28)] to-[rgb(var(--accent-rgb)/0.18)]",
  },
];

export default function WorkSpotlight() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <button
        type="button"
        onClick={() => setActive((active + 1) % projects.length)}
        className="group relative overflow-hidden rounded-[2rem] border border-fly-line bg-fly-panel p-8 text-left shadow-card transition hover:border-[rgb(var(--accent-rgb)/0.4)] lg:col-span-7 min-h-[320px]"
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90 transition duration-500 ${p.fills}`}
        />
        <div className="relative flex h-full flex-col justify-between gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fly-muted">Featured build</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-fly-cream">{p.title}</h3>
            <p className="mt-2 text-sm font-semibold text-fly-cream/80">{p.tag}</p>
            <p className="mt-4 max-w-md text-fly-muted leading-relaxed">{p.blurb}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-fly-muted">Tap anywhere to rotate the spotlight</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-fly-void/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-fly-cream">
              Case in orbit
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>
      </button>

      <div className="flex flex-col gap-4 lg:col-span-5">
        {projects.map((proj, i) => (
          <button
            key={proj.id}
            type="button"
            onClick={() => setActive(i)}
            className={[
              "rounded-2xl border px-5 py-4 text-left transition",
              i === active
                ? "border-[rgb(var(--accent-rgb)/0.55)] bg-[rgb(var(--accent-rgb)/0.08)] shadow-glow"
                : "border-fly-line bg-fly-panel/70 hover:border-white/20 hover:bg-fly-panel",
            ].join(" ")}
          >
            <div className="text-sm font-bold text-fly-cream">{proj.title}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-fly-muted">{proj.tag}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
