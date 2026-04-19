"use client";

const items = [
  "Brand systems",
  "Interface design",
  "Motion & micro-interactions",
  "Next.js builds",
  "Launch rituals",
  "Pretty fly work",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="relative border-y border-fly-line bg-fly-ink/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-fly-void to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-fly-void to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {doubled.map((label, i) => (
          <span key={`${label}-${i}`} className="inline-flex items-center gap-3 px-6 text-sm font-medium text-fly-muted">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "rgb(var(--accent-rgb))", boxShadow: "0 0 12px rgb(var(--accent-rgb) / 0.8)" }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
