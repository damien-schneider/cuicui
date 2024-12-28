import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/section-list-utils";
import { env } from "#/src/env";

type Props = {
  children: ReactNode;
  params: Promise<{
    section: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section: sectionParam } = await params;
  const sectionInList = newFindSectionBySlug(sectionParam);

  // optionally access and extend (rather than replace) parent metadata

  if (!sectionInList) {
    return {};
  }
  return {
    title: sectionInList.meta.name,
    description: sectionInList.meta.description,
    openGraph: {
      title: sectionInList.meta.name,
      description: sectionInList.meta.description,
    },
    alternates: {
      canonical: `${env.NEXT_PUBLIC_SITE_URL}/${sectionInList.slug}`,
    },
  };
}

export default async function SectionLayout({ params, children }: Props) {
  const { section: sectionParam } = await params;

  const section = newFindSectionBySlug(sectionParam);

  if (!section) {
    return notFound();
  }
  return (
    <>
      <Head>
        <Link
          href={`${env.NEXT_PUBLIC_SITE_URL}/${section.slug}`}
          key="canonical"
          rel="canonical"
        />
      </Head>
      {children}
    </>
  );
}
