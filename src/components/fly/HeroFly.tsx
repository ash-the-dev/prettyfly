"use client";

import { useEffect, useRef, useState } from "react";
import PaletteSwitcher from "./PaletteSwitcher";

export default function HeroFly() {
  const wrap = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setShift({ x: px * 18, y: py * 14 });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="mesh-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl opacity-50 animate-float"
        style={{ background: "rgb(var(--accent-rgb) / 0.25)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full blur-3xl opacity-40 animate-float"
        style={{ background: "rgb(var(--accent2-rgb) / 0.22)", animationDelay: "-4s" }}
      />

      <div className="container-max relative">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-fly-line bg-fly-panel/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-fly-muted backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--accent-rgb))] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(var(--accent-rgb))]" />
            </span>
            Open for collaborations
          </p>

          <h1
            className="mt-8 font-display text-[clamp(2.6rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight"
            style={{ transform: `translate3d(${shift.x}px, ${shift.y}px, 0)` }}
          >
            <span className="block text-fly-cream">Pretty Fly</span>
            <span className="block text-gradient-fly animate-shimmer bg-[length:200%_auto]">for a Website.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fly-muted md:text-xl">
            We are a boutique design studio obsessed with interfaces that feel tactile, confident, and a little
            mischievous. Strategy, art direction, interaction, and code—one crew, one launch.
          </p>

          <div className="mt-8">
            <PaletteSwitcher />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-fly-void transition hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "rgb(var(--accent-rgb))", boxShadow: "0 0 40px -8px rgb(var(--accent-rgb) / 0.6)" }}
            >
              <span className="absolute inset-0 translate-x-[-120%] skew-x-12 bg-white/25 transition group-hover:translate-x-[120%] duration-700" />
              Book a call
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-fly-line bg-fly-panel/50 px-8 py-4 text-sm font-bold uppercase tracking-widest text-fly-cream backdrop-blur-md transition hover:border-[rgb(var(--accent-rgb)/0.45)] hover:bg-fly-panel"
            >
              See the work
            </a>
          </div>
        </div>

        <div
          className="pointer-events-none absolute right-0 top-1/2 hidden w-[min(44vw,520px)] -translate-y-1/2 lg:block"
          style={{ transform: `translate3d(${-shift.x * 0.6}px, ${-shift.y * 0.5}px, 0)` }}
          aria-hidden="true"
        >
          <div className="relative aspect-square rounded-[2.5rem] border border-fly-line bg-gradient-to-br from-fly-panel to-fly-void p-1 shadow-card">
            <div className="flex h-full flex-col justify-between rounded-[2.35rem] bg-fly-ink/90 p-8">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-fly-muted">
                <span>Live canvas</span>
                <span className="rounded-full bg-[rgb(var(--accent-rgb)/0.15)] px-2 py-1 text-[rgb(var(--accent-rgb))]">
                  v2.4
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-[62%] rounded-full bg-white/10" />
                <div className="h-2 w-[84%] rounded-full bg-white/5" />
                <div className="h-2 w-[38%] rounded-full bg-white/10" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 rounded-2xl border border-fly-line bg-[rgb(var(--accent2-rgb)/0.08)]" />
                <div className="h-24 rounded-2xl border border-fly-line bg-[rgb(var(--accent-rgb)/0.08)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
