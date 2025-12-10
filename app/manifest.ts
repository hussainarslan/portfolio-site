import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hussain Arslan - Portfolio",
    short_name: "HA Portfolio",
    description: "AI Engineer & Software Architect Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#161614",
    theme_color: "#161614",
    icons: [
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
