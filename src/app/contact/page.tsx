import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import { Breadcrumbs, PageHero } from "@/components/Editorial";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Contact Pretty Fly for a Website to report a correction, suggest a guide, ask a question, or send a partnership inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Contact"
        description="Found an error, have a website question, or want to suggest a guide? Send a message."
      />
      <section className="bg-neutral-100 text-black">
        <div className="container-max grid gap-10 py-12 lg:grid-cols-[1fr_520px]">
          <div className="max-w-xl">
            <h2 className="heading-type text-3xl">What to send</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Corrections are especially welcome. Include the page URL, the sentence or section in question, and any source that helps verify the update.
            </p>
            <p className="mt-4 leading-7 text-neutral-700">
              Because no backend is configured, the form opens your email app instead of silently storing messages.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
