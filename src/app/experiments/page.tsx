import type { Metadata } from "next";

import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { getAllExperiments } from "@/lib/mdx";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Experiments",
  description: "Transparent website experiments about SEO, performance, discovery, backlinks, and technical fixes without invented results.",
  path: "/experiments",
});

export default function ExperimentsPage() {
  const experiments = getAllExperiments();

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/experiments", label: "Experiments" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/experiments", label: "Experiments" },
        ]}
      />
      <PageHero
        eyebrow="Experiments"
        title="Website experiments, with receipts."
        description="We will publish results only when there is something real to show. No fake charts, no invented ranking wins, no suspiciously tidy miracles."
      />
      <section className="bg-white text-black">
        <div className="container-max py-14 md:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {experiments.map((experiment) => (
              <article key={experiment.slug} className="rounded-2xl border-2 border-black bg-neutral-100 p-6 shadow-[6px_6px_0_#000]">
                <p className="eyebrow text-[#A51C83]">{experiment.status}</p>
                <h2 className="mt-4 heading-type text-3xl">{experiment.title}</h2>
                <p className="mt-4 leading-7 text-neutral-700">
                  {experiment.description}
                </p>
                <a href={`/experiments/${experiment.slug}`} className="mt-5 inline-block font-bold text-[#A51C83] underline-offset-4 hover:underline">
                  View the methodology
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
