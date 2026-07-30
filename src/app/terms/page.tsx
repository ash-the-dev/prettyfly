import type { Metadata } from "next";

import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: "Starter terms for using Pretty Fly for a Website educational content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      {/* Starter legal content. Have this page reviewed by qualified counsel before commercial launch or before making compliance claims. */}
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/terms", label: "Terms" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/terms", label: "Terms" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms"
        description="Starter terms for using Pretty Fly for a Website. These should receive legal review before commercial launch."
      />
      <article className="bg-white text-black">
        <div className="reading-width article-prose py-12">
          <p>Last updated: July 29, 2026.</p>
          <h2>Educational content</h2>
          <p>
            Pretty Fly for a Website provides educational information about websites, SEO, performance, accessibility, analytics, monitoring, and growth. The content is not professional legal, financial, or guaranteed SEO advice.
          </p>
          <h2>No guaranteed outcomes</h2>
          <p>
            We do not guarantee rankings, traffic, conversions, uptime, accessibility compliance, or business results. Website outcomes depend on many factors outside this site&apos;s control.
          </p>
          <h2>Accuracy and updates</h2>
          <p>
            We aim to keep guides useful and accurate, but tools, interfaces, standards, and search systems change. Content may become outdated or incomplete.
          </p>
          <h2>External links and related products</h2>
          <p>
            This site links to external references and to Commit Happens, a related project. External websites are responsible for their own content, policies, and services.
          </p>
          <h2>Acceptable use</h2>
          <p>
            Do not use the site to attempt unauthorized access, abuse contact mechanisms, scrape aggressively, or interfere with normal operation.
          </p>
          <h2>Legal review</h2>
          <p>
            These are starter terms, not legal advice. They should be reviewed by qualified counsel before commercial launch.
          </p>
        </div>
      </article>
    </main>
  );
}
