import type { MetadataRoute } from "next";
import { SectionsList } from "@cuicui/ui";

export const port = process.env.PORT ?? 3000;

export const HOST =
  process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:${port}`;
export default function sitemap(): MetadataRoute.Sitemap {
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
  {
    url: `${HOST}/about`,
    lastModified: new Date("2024-08-14"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${HOST}/getting-started`,
    lastModified: new Date("2024-08-14"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

function getComponentsSitemap(): MetadataRoute.Sitemap {
  const componentSitemap: MetadataRoute.Sitemap = [];
  SectionsList.flatMap((section) => {
    if (
      section.type === "multiple-component" ||
      section.type === "single-component"
    ) {
      for (const category of section.categoriesList) {
        if (category.comingSoonCategory) {
          return;
        }
        if (section.slug && category.slug) {
          componentSitemap.push({
            url: `${HOST}/${section.slug}/${category.slug}`,
            lastModified: category.releaseDateCategory,
            changeFrequency: "monthly",
            priority: 0.9,
          });
        }
      }
    }
  });
  return componentSitemap;
}
