import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { NEXT_PUBLIC_SITE_URL } from "#/src/lib/site.const";
import {
  newFindCategoryBySlug,
  newFindSectionBySlug,
} from "#/src/utils/section-category-components-utils/section-list-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    section: string;
    category: string;
  }>;
}) {
  const { section: sectionParam, category: categoryParam } = await params;
  const section = newFindSectionBySlug(sectionParam);
  if (!section) {
    return {};
  }

  const category = newFindCategoryBySlug({
    sectionSlug: sectionParam,
    categorySlug: categoryParam,
  });

  if (category) {
    return {
      title: `${category.meta.name} React Components`,
      description: `${category.meta.description}. Advanced ${category.meta.name} React components using tailwind CSS. Just copy paste amazing UI and UX.`,
      openGraph: {
        title: `${category.meta.name} React Components`,
        description: `${category.meta.description}. Advanced ${category.meta.name} React components using tailwind CSS. Just copy paste amazing UI and UX.`,
      },
      alternates: {
        canonical: `${NEXT_PUBLIC_SITE_URL}/${section.slug}/${category.slug}`,
      },
      robots: "all",
    };
  }
  return {};
}

export default async function CategoryLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: Promise<{
    section: string;
    category: string;
  }>;
}) {
  const { section: sectionParam, category: categoryParam } = await params;

  const sectionInList = newFindSectionBySlug(sectionParam);
  if (!sectionInList) {
    return notFound();
  }
  const categoryInList = newFindCategoryBySlug({
    sectionSlug: sectionParam,
    categorySlug: categoryParam,
  });
  if (!categoryInList) {
    return notFound();
  }
  return (
    <div>
      <Head>
        <Link
          href={`${NEXT_PUBLIC_SITE_URL}/${sectionInList.slug}/${categoryInList.slug}`}
          key="canonical"
          rel="canonical"
        />
        <meta content="all" name="robots" />
      </Head>
      <h1 className="bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/10 bg-clip-text font-medium text-transparent text-3xl sm:text-5xl inline tracking-tighter">
        {categoryInList.meta.name} components
      </h1>
      {children}
    </div>
  );
}
