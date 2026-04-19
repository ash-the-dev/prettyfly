"use client";

import { useState } from "react";

const steps = [
  {
    n: "01",
    title: "Discovery flight",
    copy: "We unpack your audience, rivals, and quiet superpowers—then map the story the site needs to tell.",
  },
  {
    n: "02",
    title: "Experience design",
    copy: "Wireframes graduate into expressive UI with motion studies and ruthless clarity on every breakpoint.",
  },
  {
    n: "03",
    title: "Engineering lift",
    copy: "We build in Next.js with performance budgets, polished states, and a component kit you can extend.",
  },
  {
    n: "04",
    title: "Launch + applause",
    copy: "QA, analytics handoff, deployment choreography, and a hype doc so your team knows what shipped.",
  },
];

export default function ProcessRail() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {steps.map((s, i) => {
        const isOpen = open === i;
        return (
          <button
            key={s.n}
            type="button"
            onClick={() => setOpen(i)}
            className={[
              "w-full rounded-2xl border text-left transition-all duration-300",
              isOpen
                ? "border-[rgb(var(--accent-rgb)/0.45)] bg-gradient-to-br from-fly-panel via-fly-ink to-fly-void p-6 shadow-glow"
                : "border-fly-line bg-fly-panel/60 p-4 hover:border-white/15 hover:bg-fly-panel",
            ].join(" ")}
          >
            <div className="flex items-start gap-4">
              <span
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-black font-display"
                style={{
                  borderColor: isOpen ? "rgb(var(--accent-rgb) / 0.45)" : "rgba(255,255,255,0.1)",
                  color: isOpen ? "rgb(var(--accent-rgb))" : "rgba(244,241,234,0.45)",
                  background: isOpen ? "rgb(var(--accent-rgb) / 0.12)" : "transparent",
                }}
              >
                {s.n}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-fly-cream md:text-xl">{s.title}</h3>
                  <span className={`text-xs font-bold uppercase tracking-widest ${isOpen ? "text-fly-cream" : "text-fly-muted"}`}>
                    {isOpen ? "Open" : "Expand"}
                  </span>
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fly-muted md:text-base">{s.copy}</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
