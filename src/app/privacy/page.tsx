import type { Metadata } from "next";

import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Starter privacy policy for Pretty Fly for a Website describing the technologies currently used on the site.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      {/* Starter legal content. Have this page reviewed by qualified counsel before commercial launch or before making compliance claims. */}
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="A plain-English starter policy describing what this site currently uses and what still needs formal review."
      />
      <article className="bg-white text-black">
        <div className="reading-width article-prose py-12">
          <p>Last updated: July 29, 2026.</p>
          <h2>What this site is</h2>
          <p>
            Pretty Fly for a Website is an educational website about SEO, website performance, website health, analytics, accessibility, uptime, and website growth.
          </p>
          <h2>Hosting</h2>
          <p>
            The site is built with Next.js and deployed on Vercel. Hosting providers may process standard technical information such as IP address, user agent, requested URL, timestamps, and error logs to deliver and secure the site.
          </p>
          <h2>Analytics and monitoring</h2>
          <p>
            This site includes a Commit Happens tracker script. Commit Happens is a related project and may process website usage and technical health signals to help understand site activity and issues.
          </p>
          <h2>Contact form</h2>
          <p>
            The contact form currently uses a mailto fallback. Messages are sent through your email client rather than stored in a site database. If you email us, your name, email address, topic, and message will be visible in that email conversation.
          </p>
          <h2>Newsletter</h2>
          <p>
            The newsletter section is disabled because no email service is configured. It does not submit or store email addresses.
          </p>
          <h2>Cookies and embedded media</h2>
          <p>
            The site does not intentionally embed videos, ad networks, chat widgets, or social media embeds. The Commit Happens tracker or hosting infrastructure may use technical storage depending on its implementation.
          </p>
          <h2>External links</h2>
          <p>
            This site links to Commit Happens and other reference sources. Those websites have their own privacy practices.
          </p>
          <h2>Legal review</h2>
          <p>
            This is starter privacy copy, not legal advice. It should be reviewed before commercial launch or before making legal compliance claims.
          </p>
        </div>
      </article>
    </main>
  );
}
