import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Learn what Pretty Fly for a Website covers, how guides are created, and how the site relates to Commit Happens.",
  path: "/about",
});

const sections = [
  {
    title: "What we cover",
    body: "We cover SEO, website performance, website health, analytics, accessibility, uptime, content quality, technical maintenance, and website growth.",
  },
  {
    title: "How we create guides",
    body: "Guides are built around practical questions. The goal is to explain what a problem means, how to confirm it, and what to fix first without inventing data or dressing guesses up as certainty.",
  },
  {
    title: "How product recommendations work",
    body: "Commit Happens is recommended only when it directly fits the problem being discussed. Educational content should still be useful without buying or using the product.",
  },
  {
    title: "Corrections and updates",
    body: "Website standards, tools, and search interfaces change. If something is outdated or unclear, send a note through the contact page so it can be reviewed.",
  },
  {
    title: "Author profile",
    body: "Pretty Fly for a Website is created by Ash Morales. Visit the author page for the full article list and profile.",
  },
  {
    title: "Relationship to Commit Happens",
    body: "Pretty Fly for a Website is related to Commit Happens, a website monitoring and intelligence platform. That relationship is disclosed wherever Commit Happens is recommended.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />
      <PageHero
        eyebrow="About"
        title="About Pretty Fly for a Website"
        description="Practical website education for people who would rather understand the next step than decode another dashboard."
      />
      <article className="bg-white text-black">
        <div className="reading-width article-prose py-12 md:py-16">
          <p>
            Pretty Fly for a Website makes SEO, website performance, analytics, accessibility, and technical maintenance easier to understand.
          </p>
          <p>
            The internet contains plenty of advice that is technically correct but almost impossible to use. This site focuses on the next practical step: what the problem means, how to confirm it, and what to fix first.
          </p>
          <p>
            The guides are written for small-business owners, creators, developers, freelancers, and anyone responsible for a website without a giant technical team standing nearby.
          </p>
          <p>
            Pretty Fly for a Website is created by Ash Morales and is related to Commit Happens, a website monitoring and intelligence platform. That relationship is disclosed wherever Commit Happens is recommended.
          </p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.title === "Author profile" ? (
                <p>
                  Pretty Fly for a Website is created by Ash Morales. Visit the{" "}
                  <Link href="/author/ash-morales">Ash Morales author page</Link> for the full article list and profile.
                </p>
              ) : (
                <p>{section.body}</p>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
