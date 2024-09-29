import { NEXT_PUBLIC_SITE_URL } from "#/src/lib/site.const";
import { findSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";
import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: {
    section: string;
    category: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const section = findSectionBySlug(params.section);

  // optionally access and extend (rather than replace) parent metadata

  if (!section) {
    return {};
  }
  return {
    title: section.name,
    description: section.description,
    openGraph: {
      title: section.name,
      description: section.description,
    },
    alternates: {
      canonical: `${NEXT_PUBLIC_SITE_URL}/${section.slug}`,
    },
  };
}

export default function SectionLayout({ children, params }: Props) {
  const section = findSectionBySlug(params.section);
  if (!section) {
    return notFound();
  }
  return (
    <>
      <Head>
        <Link
          rel="canonical"
          href={`${NEXT_PUBLIC_SITE_URL}/${section.slug}`}
          key="canonical"
        />
      </Head>
      {children}
    </>
  );
}
