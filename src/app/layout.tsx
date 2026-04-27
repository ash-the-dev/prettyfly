import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import Script from "next/script";

import { siteName, siteUrl } from "@/config/site";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Website design studio`,
    template: `%s | ${siteName}`,
  },
  description:
    "A boutique website design studio. Bold interfaces, crisp motion, and builds that feel alive—from first sketch to launch.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Website design studio`,
    description:
      "We design and build unforgettable sites: strategy, art direction, interaction design, and fast modern engineering.",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Website design studio`,
    description: "Bold web design and development. Your brand, elevated and in motion.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    description:
      "Website design and creative development studio specializing in distinctive brand-led interfaces and performant launches.",
    areaServed: "Worldwide",
  };

  return (
    <html lang="en" data-fly-palette="lime" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.commithappens.com/tracker/wip.js"
          strategy="afterInteractive"
          data-site-key="eaba557f-dad4-4cd6-bd48-f004f7f807d4"
        />
        {children}
      </body>
    </html>
  );
}
