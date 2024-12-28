import type { MetadataRoute } from "next";
import { sectionList } from "@/section-list";
import { env } from "#/src/env";

export default function sitemap(): MetadataRoute.Sitemap {
  // Google's limit is 50,000 URLs per sitemap

  return [...staticSitemap, ...getComponentsSitemap()];
}

const staticSitemap: MetadataRoute.Sitemap = [
  {
    url: env.NEXT_PUBLIC_SITE_URL,
    lastModified: new Date("2024-08-14"),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${env.NEXT_PUBLIC_SITE_URL}/about`,
    lastModified: new Date("2024-08-14"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${env.NEXT_PUBLIC_SITE_URL}/getting-started`,
    lastModified: new Date("2024-08-14"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

function getComponentsSitemap(): MetadataRoute.Sitemap {
  const componentSitemap: MetadataRoute.Sitemap = [];
  sectionList.flatMap((section) => {
    for (const category of section.categories) {
      if (category.meta.isComingSoon) {
        return;
      }
      if (section.slug && category.slug) {
        componentSitemap.push({
          url: `${env.NEXT_PUBLIC_SITE_URL}/${section.slug}/${category.slug}`,
          lastModified: category.meta.latestUpdateDate,
          changeFrequency: "monthly",
          priority: 0.9,
        });
      }
    }
  });
  return componentSitemap;
}
