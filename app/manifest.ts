import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BiteMatch", short_name: "BiteMatch", start_url: "/", display: "standalone", background_color: "#f3f8ff", theme_color: "#f3f8ff",
    icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
