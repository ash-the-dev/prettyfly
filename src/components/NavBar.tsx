"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import TrackedLink from "@/components/TrackedLink";
import { buttonClass } from "@/components/Editorial";
import { commitHappens, moreLinks, navLinks } from "@/lib/content";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!open) return;

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-[80] transition-all duration-300",
        scrolled ? "border-b-2 border-black bg-white text-black shadow-[0_8px_0_rgba(0,0,0,0.08)]" : "border-b-2 border-transparent bg-[#070707] text-white",
      ].join(" ")}
    >
      <div className="container-max relative z-[90] flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex min-h-11 items-center gap-3 font-mono" onClick={() => setOpen(false)}>
          <span
            className="grid h-10 w-10 place-items-center rounded-[10px] border-2 border-black bg-[#F45BCF] text-sm font-bold text-black transition group-hover:-rotate-3"
          >
            PF
          </span>
          <span className="hidden min-[420px]:block">
            <span className="block text-sm font-bold leading-tight tracking-[0.02em]">Pretty Fly</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] opacity-70">for a Website</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 py-3 text-sm font-bold underline-offset-4 opacity-75 transition hover:opacity-100 hover:underline focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button
              type="button"
              className="min-h-11 py-3 text-sm font-bold opacity-75 transition hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
            >
              More
            </button>
            <div className="invisible absolute right-0 top-full w-56 translate-y-2 border-2 border-black bg-white p-3 font-mono text-black opacity-0 shadow-[6px_6px_0_#000] transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {moreLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-md px-3 py-3 text-sm font-bold hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-cyan-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <TrackedLink
            href={commitHappens.healthChecker}
            eventName="website_health_checker_click"
            eventLabel="Header CTA"
            className={`${buttonClass} hidden py-2 text-xs sm:inline-flex`}
          >
            Check Your Website
          </TrackedLink>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border-2 border-black bg-white text-black shadow-[4px_4px_0_#000] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[70] bg-[#070707] px-0 text-white transition-opacity lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-max flex min-h-dvh flex-col justify-center gap-4 pb-24 pt-24 font-mono" aria-label="Mobile navigation">
          {[...navLinks, ...moreLinks].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="heading-type min-h-12 text-3xl transition hover:text-[#F45BCF] focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <TrackedLink
            href={commitHappens.healthChecker}
            eventName="website_health_checker_click"
            eventLabel="Mobile nav CTA"
            onClick={() => setOpen(false)}
            className={`${buttonClass} mt-4 w-max`}
          >
            Check Your Website
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
