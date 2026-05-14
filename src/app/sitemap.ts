import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bhiviajes.tur.ar"
).replace(/\/$/, "");

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/apartments",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/bus",
    changeFrequency: "monthly",
    priority: 0.6,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "/" : `${route.path}/`}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
