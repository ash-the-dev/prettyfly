import Link from "next/link";

import TrackedLink from "@/components/TrackedLink";
import { commitHappens } from "@/lib/content";

const learn = [
  ["SEO", "/seo"],
  ["Performance", "/performance"],
  ["Website Health", "/website-health"],
  ["Analytics", "/analytics"],
  ["Accessibility", "/accessibility"],
  ["Growth", "/growth"],
];

const resources = [
  ["Guides", "/guides"],
  ["Experiments", "/experiments"],
  ["Glossary", "/glossary"],
  ["Search", "/search"],
  ["Tools", "/tools"],
  ["About", "/about"],
];

const legal = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Contact", "/contact"],
];

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="heading-type text-base text-white">{title}</h2>
      <ul className="mt-4 space-y-3 font-mono">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="text-sm font-bold text-white/70 underline-offset-4 hover:text-[#F45BCF] hover:underline focus:outline-none focus:ring-4 focus:ring-[#F45BCF]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#070707] text-white">
      <div className="container-max border-t border-white/15 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="heading-type text-2xl">Pretty Fly for a Website</div>
            <p className="mt-4 max-w-md font-sans text-sm leading-6 text-white/70">
              Plain-English guides for making websites faster, healthier, easier to use, and easier to find.
            </p>
            <p className="mt-5 rounded-xl border border-white/20 bg-white/5 p-4 font-sans text-sm leading-6 text-white/75">
              Pretty Fly for a Website and Commit Happens are related projects.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Learn" links={learn} />
            <FooterColumn title="Resources" links={resources} />
            <div>
              <h2 className="heading-type text-base text-white">Related</h2>
              <ul className="mt-4 space-y-3 font-mono">
                <li>
                  <TrackedLink
                    href={commitHappens.baseUrl}
                    eventName="commit_happens_outbound_click"
                    eventLabel="Footer Commit Happens"
                    className="text-sm font-bold text-white/70 underline-offset-4 hover:text-[#F45BCF] hover:underline focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
                  >
                    Commit Happens
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href={commitHappens.healthChecker}
                    eventName="website_health_checker_click"
                    eventLabel="Footer free checker"
                    className="text-sm font-bold text-white/70 underline-offset-4 hover:text-[#F45BCF] hover:underline focus:outline-none focus:ring-4 focus:ring-[#F45BCF]"
                  >
                    Free Website Health Checker
                  </TrackedLink>
                </li>
              </ul>
            </div>
            <FooterColumn title="Legal" links={legal} />
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-white/55">
          © {new Date().getFullYear()} Pretty Fly for a Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
