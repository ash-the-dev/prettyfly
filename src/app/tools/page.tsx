import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs, PageHero, buttonClass } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import SeoTitleChecker from "@/components/tools/SeoTitleChecker";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free Website Tools",
  description: "Free practical website tools including an SEO title checker, plus planned SERP, robots, canonical, redirect, and Core Web Vitals tools.",
  path: "/tools",
});

const upcoming = [
  "Meta Description Preview",
  "SERP Preview",
  "Robots Tester",
  "Canonical Checker",
  "Redirect Checker",
  "Image Size Calculator",
  "Core Web Vitals Explainer",
  "Googlebot Simulator",
];

export default function ToolsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/tools", label: "Tools" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/tools", label: "Tools" },
        ]}
      />
      <PageHero
        eyebrow="Free tools"
        title="Useful tools, not ranking promises."
        description="Interactive checkers that help you inspect titles, technical signals, and page health without inventing fake guarantees."
      />
      <section className="bg-neutral-100 text-black">
        <div className="container-max grid gap-8 py-12 lg:grid-cols-[1fr_320px]">
          <SeoTitleChecker />
          <aside className="space-y-6">
            <div className="rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
              <h2 className="heading-type text-2xl">Coming next</h2>
              <ul className="mt-4 space-y-3">
                {upcoming.map((tool) => (
                  <li key={tool} className="text-sm font-bold text-neutral-700">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-black bg-[#091B36] p-6 text-white shadow-[6px_6px_0_#000]">
              <h2 className="heading-type text-2xl">Need a broader check?</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                These tools stay free and educational. For ongoing monitoring, Commit Happens can help when it fits the problem.
              </p>
              <Link href="/guides" className={`${buttonClass} mt-5`}>
                Explore the Guides
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
