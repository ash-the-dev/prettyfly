import type { MetadataRoute } from "next";

import { siteName, siteUrl } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Pretty Fly",
    description: "Plain-English guides for healthier, faster, easier-to-find websites.",
    start_url: siteUrl,
    display: "standalone",
    background_color: "#070707",
    theme_color: "#F45BCF",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
