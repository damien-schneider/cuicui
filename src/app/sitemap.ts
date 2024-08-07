import type { MetadataRoute } from "next";
import { componentCategories } from "../lib/component-categories";

export const port = process.env.PORT ?? 3000;

export const HOST =
  process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:${port}`;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap

  return [...staticSitemap, ...getComponentsSitemap()];
}

const staticSitemap: MetadataRoute.Sitemap = [
  {
    url: HOST,
    lastModified: new Date("2024-08-14"),
    changeFrequency: "monthly",
    priority: 1,
  },
];

function getComponentsSitemap(): MetadataRoute.Sitemap {
  const componentSitemap: MetadataRoute.Sitemap = [];
  componentCategories.flatMap((section) => {
    for (const item of section.items) {
      if (item.comingSoon) {
        return;
      }
      if (!section.slug && item.slug && !item.href) {
        componentSitemap.push({
          url: `${HOST}/${item.slug}`,
          lastModified: item.releaseDate,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      } else if (section.slug && item.slug) {
        componentSitemap.push({
          url: `${HOST}/${section.slug}/${item.slug}`,
          lastModified: item.releaseDate,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  });
  return componentSitemap;
}
