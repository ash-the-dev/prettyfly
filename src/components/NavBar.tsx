"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-[80] transition-all duration-300",
        scrolled ? "border-b border-fly-line bg-fly-void/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="container-max relative z-[90] flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="grid h-10 w-10 place-items-center rounded-2xl border border-fly-line bg-fly-panel/80 text-sm font-black font-display transition group-hover:border-[rgb(var(--accent-rgb)/0.45)] group-hover:shadow-glow"
            style={{ color: "rgb(var(--accent-rgb))" }}
          >
            PF
          </span>
          <span className="hidden min-[420px]:block">
            <span className="block font-display text-sm font-bold leading-tight text-fly-cream">Pretty Fly</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-fly-muted">
              for a Website
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-fly-muted transition hover:text-fly-cream"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[rgb(var(--accent-rgb))] transition group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-fly-line bg-fly-panel/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-fly-cream backdrop-blur-md transition hover:border-[rgb(var(--accent-rgb)/0.45)] sm:inline-flex"
          >
            Start
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-fly-line bg-fly-panel/80 text-fly-cream md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[70] bg-fly-void/95 backdrop-blur-md transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-max flex min-h-[calc(100dvh-5rem)] flex-col justify-center gap-8 pb-24 pt-8">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-bold text-fly-cream transition hover:text-[rgb(var(--accent-rgb))]"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-max items-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-fly-void"
            style={{ background: "rgb(var(--accent-rgb))" }}
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
