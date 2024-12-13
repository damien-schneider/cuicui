import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { NEXT_PUBLIC_SITE_URL } from "#/src/lib/site.const";
import { findSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";

type Props = {
  children: ReactNode;
  params: Promise<{
    section: string;
    category: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section: sectionParam } = await params;
  const sectionInList = findSectionBySlug(sectionParam);

  // optionally access and extend (rather than replace) parent metadata

  if (!sectionInList) {
    return {};
  }
  return {
    title: sectionInList.name,
    description: sectionInList.description,
    openGraph: {
      title: sectionInList.name,
      description: sectionInList.description,
    },
    alternates: {
      canonical: `${NEXT_PUBLIC_SITE_URL}/${sectionInList.slug}`,
    },
  };
}

export default async function SectionLayout({ params, children }: Props) {
  const { section: sectionParam } = await params;

  const section = findSectionBySlug(sectionParam);

  if (!section) {
    return notFound();
  }
  return (
    <>
      <Head>
        <Link
          href={`${NEXT_PUBLIC_SITE_URL}/${section.slug}`}
          key="canonical"
          rel="canonical"
        />
      </Head>
      {children}
    </>
  );
}
