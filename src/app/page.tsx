import NavBar from "@/components/NavBar";
import CursorGlow from "@/components/fly/CursorGlow";
import HeroFly from "@/components/fly/HeroFly";
import MarqueeStrip from "@/components/fly/MarqueeStrip";
import ProcessRail from "@/components/fly/ProcessRail";
import TiltCard from "@/components/fly/TiltCard";
import WorkSpotlight from "@/components/fly/WorkSpotlight";

const services = [
  {
    title: "Brand-forward UI",
    desc: "Art direction, type systems, and interface kits that feel unmistakably yours—not a template in disguise.",
    chip: "Design",
  },
  {
    title: "Interaction + motion",
    desc: "Scroll choreography, hover physics, and micro-moments that reward curiosity without slowing the story.",
    chip: "Motion",
  },
  {
    title: "Next.js engineering",
    desc: "Fast, accessible builds with clean component boundaries and a launch checklist your future self will love.",
    chip: "Build",
  },
];

const stats = [
  { label: "Avg. lift in perceived polish", value: "∞", hint: "unscientific but true" },
  { label: "Handoffs without chaos", value: "100%", hint: "docs, tokens, and sanity" },
  { label: "Meetings that could’ve been emails", value: "0", hint: "we respect the calendar" },
];

export default function Home() {
  return (
    <main className="relative min-h-full overflow-x-hidden">
      <CursorGlow />
      <NavBar />
      <HeroFly />
      <MarqueeStrip />

      {/* STATS */}
      <section className="container-max py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-fly-line bg-fly-panel/50 p-6 transition hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.35)] hover:shadow-glow"
            >
              <div className="font-display text-4xl font-black text-fly-cream md:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm font-semibold text-fly-cream">{s.label}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-fly-muted">{s.hint}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-max py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--accent-rgb))]">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fly-cream md:text-5xl">We make the internet less boring.</h2>
          <p className="mt-4 text-lg text-fly-muted">
            Three lanes, infinite combinations—pick a sprint or let us orchestrate the whole runway.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <TiltCard key={s.title} className="h-full">
              <div className="flex h-full flex-col rounded-[1.75rem] border border-fly-line bg-gradient-to-b from-fly-panel to-fly-ink/90 p-6 shadow-card transition hover:border-[rgb(var(--accent-rgb)/0.35)]">
                <span className="inline-flex w-max rounded-full border border-fly-line px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-fly-muted">
                  {s.chip}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-fly-cream">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fly-muted">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fly-cream">
                  <span className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--accent-rgb))] to-transparent" />
                  Dive in
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-max py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--accent2-rgb))]">Selected energy</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-fly-cream md:text-5xl">Work that moves pixels and people.</h2>
            <p className="mt-4 text-fly-muted">
              Tap the hero card to cycle concepts—each one is a sandbox for how we think about rhythm, contrast, and story.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-fly-line bg-fly-panel/70 px-5 py-3 text-xs font-bold uppercase tracking-widest text-fly-cream transition hover:border-[rgb(var(--accent-rgb)/0.45)]"
          >
            Pitch your project
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-12">
          <WorkSpotlight />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container-max py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-fly-muted">Flight plan</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-fly-cream md:text-5xl">Transparent, theatrical, on time.</h2>
            <p className="mt-4 text-fly-muted">
              No black-box agency mystery—just a crew that prototypes loudly, documents generously, and ships like we mean it.
            </p>
            <div className="mt-8 hidden rounded-3xl border border-fly-line bg-fly-panel/60 p-6 lg:block">
              <p className="font-display text-lg font-bold text-fly-cream">“Make it pretty fly.”</p>
              <p className="mt-2 text-sm text-fly-muted">— Someone cool, probably you after launch</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ProcessRail />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-max pb-8 pt-8 md:pb-16 md:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-fly-line bg-gradient-to-br from-fly-panel via-fly-ink to-fly-void p-8 shadow-card md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full blur-3xl opacity-50"
            style={{ background: "rgb(var(--accent2-rgb) / 0.25)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full blur-3xl opacity-40"
            style={{ background: "rgb(var(--accent-rgb) / 0.2)" }}
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--accent-rgb))]">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-fly-cream md:text-4xl">Tell us what you’re dreaming in HTML.</h2>
              <p className="mt-4 text-fly-muted">
                Drop the messy notes—we love messy notes. Expect a thoughtful reply within two business days with next steps
                and a ballpark.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-fly-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb))]" />
                  Remote-first studio, timezone friendly
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent2-rgb))]" />
                  Workshops available for teams who like sticky notes
                </li>
              </ul>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-fly-muted">
                  Name
                  <input
                    name="name"
                    className="rounded-2xl border border-fly-line bg-fly-void/60 px-4 py-3 text-sm font-medium text-fly-cream outline-none transition placeholder:text-fly-muted/50 focus:border-[rgb(var(--accent-rgb)/0.55)] focus:ring-2 focus:ring-[rgb(var(--accent-rgb)/0.2)]"
                    placeholder="Jordan Lee"
                  />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-fly-muted">
                  Email
                  <input
                    name="email"
                    type="email"
                    className="rounded-2xl border border-fly-line bg-fly-void/60 px-4 py-3 text-sm font-medium text-fly-cream outline-none transition placeholder:text-fly-muted/50 focus:border-[rgb(var(--accent-rgb)/0.55)] focus:ring-2 focus:ring-[rgb(var(--accent-rgb)/0.2)]"
                    placeholder="you@studio.co"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-fly-muted">
                Project / brand
                <input
                  name="project"
                  className="rounded-2xl border border-fly-line bg-fly-void/60 px-4 py-3 text-sm font-medium text-fly-cream outline-none transition placeholder:text-fly-muted/50 focus:border-[rgb(var(--accent-rgb)/0.55)] focus:ring-2 focus:ring-[rgb(var(--accent-rgb)/0.2)]"
                  placeholder="New marketing site, rebrand, product UI..."
                />
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-fly-muted">
                The dream brief
                <textarea
                  name="message"
                  rows={4}
                  className="resize-none rounded-2xl border border-fly-line bg-fly-void/60 px-4 py-3 text-sm font-medium text-fly-cream outline-none transition placeholder:text-fly-muted/50 focus:border-[rgb(var(--accent-rgb)/0.55)] focus:ring-2 focus:ring-[rgb(var(--accent-rgb)/0.2)]"
                  placeholder="Links, references, deadlines, budget ballparks—everything helps."
                />
              </label>
              <button
                type="button"
                className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-fly-void transition hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
                style={{ background: "rgb(var(--accent-rgb))", boxShadow: "0 0 50px -12px rgb(var(--accent-rgb) / 0.55)" }}
              >
                <span className="absolute inset-0 translate-y-full bg-white/20 transition group-hover:translate-y-0" />
                <span className="relative">Send it skyward</span>
              </button>
              <p className="text-xs text-fly-muted">
                Form is front-end only for now—wire it to Formspree, Resend, or a route when you are ready to catch real leads.
              </p>
            </form>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-fly-line pt-10 text-sm text-fly-muted md:flex-row md:items-center">
          <div>
            <div className="font-display text-base font-bold text-fly-cream">Pretty Fly for a Website</div>
            <div className="mt-1">© {new Date().getFullYear()} All rights reserved. Built with Next.js.</div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#services" className="transition hover:text-[rgb(var(--accent-rgb))]">
              Services
            </a>
            <a href="#work" className="transition hover:text-[rgb(var(--accent-rgb))]">
              Work
            </a>
            <a href="#contact" className="transition hover:text-[rgb(var(--accent-rgb))]">
              Contact
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
