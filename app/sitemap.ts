import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const urls = [
    "",
    "/wedding-luts",
    "/wedding-luts#demo",
    "/wedding-luts#cta",
    "/wedding-luts#faq",
    "/legal/terms",
    "/legal/privacy",
    "/legal/refund",
  ];
  const now = new Date();
  return urls.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
