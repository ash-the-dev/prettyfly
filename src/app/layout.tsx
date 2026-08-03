import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";

import JsonLd from "@/components/JsonLd";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { siteName, siteUrl } from "@/config/site";
import { organizationJsonLd } from "@/lib/seo";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fontMonoFallback = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Make your website faster, healthier, and easier to find`,
    template: `%s | ${siteName}`,
  },
  description:
    "Plain-English guides for SEO, website performance, website health, analytics, accessibility, uptime, and website growth.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Make your website faster, healthier, and easier to find`,
    description:
      "Plain-English guides for SEO, website performance, website health, analytics, accessibility, uptime, and website growth.",
    siteName,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteName} social sharing image` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Make your website faster, healthier, and easier to find`,
    description: "Plain-English guides for healthier, faster, easier-to-find websites.",
    images: ["/opengraph-image"],
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
  return (
    <html
      lang="en"
      data-fly-palette="magenta"
      className={`${fontSans.variable} ${GeistMono.variable} ${fontMonoFallback.variable}`}
    >
      <body className="min-h-full font-sans antialiased">
        <JsonLd data={organizationJsonLd()} />
        <Script
          src="https://www.commithappens.com/tracker/wip.js"
          strategy="afterInteractive"
          data-site-key="eaba557f-dad4-4cd6-bd48-f004f7f807d4"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VVLT2JVRRE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VVLT2JVRRE');
          `}
        </Script>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <NavBar />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
