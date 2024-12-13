import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { NEXT_PUBLIC_SITE_URL } from "#/src/lib/site.const";
import { findCategoryBySlug } from "#/src/utils/section-category-components-utils/find-category-by-slug";
import { findSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    section: string;
    category: string;
  }>;
}): Promise<Metadata> {
  const { section: sectionParam, category: categoryParam } = await params;
  const section = findSectionBySlug(sectionParam);
  if (!section) {
    return {};
  }

  if (section.type === "page") {
    const page = section.pageList.find((page) => page.slug === categoryParam);
    if (page) {
      return {
        title: page.name,
        description: page.description,
        openGraph: {
          title: page.name,
          description: page.description,
        },
        alternates: {
          canonical: `${NEXT_PUBLIC_SITE_URL}/${section.slug}/${page.slug}`,
        },
        robots: "all",
      };
    }
    return {};
  }

  const category = findCategoryBySlug(section, categoryParam);
  if (category) {
    return {
      title: `${category.name} React Components`,
      description: `${category.description}. Advanced ${category.name} React components using tailwind CSS. Just copy paste amazing UI and UX.`,
      openGraph: {
        title: `${category.name} React Components`,
        description: `${category.description}. Advanced ${category.name} React components using tailwind CSS. Just copy paste amazing UI and UX.`,
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

  const section = findSectionBySlug(sectionParam);
  if (!section) {
    return notFound();
  }
  const category = findCategoryBySlug(section, categoryParam);
  if (!category) {
    return notFound();
  }
  return (
    <>
      <Head>
        <Link
          href={`${NEXT_PUBLIC_SITE_URL}/${section.slug}/${category.slug}`}
          key="canonical"
          rel="canonical"
        />
        <meta content="all" name="robots" />
      </Head>
      <h1 className="bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/10 bg-clip-text font-medium text-transparent text-3xl sm:text-5xl inline tracking-tighter">
        {category.name} components
      </h1>
      {children}
    </>
  );
}
