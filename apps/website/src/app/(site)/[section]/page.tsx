import Link from "next/link";
import { notFound } from "next/navigation";
import { MainMenuCardContent } from "#/src/app/card";
import MenuSectionWrapper from "#/src/components/main-menus/menu-category-wrapper";
import { MainMenusGradientCard } from "@cuicui/ui/cuicui/other/cursors/dynamic-cards/gradient-card";

import { sectionList } from "@/section-list";
import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/section-list-utils";

type Props = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  const paramsArray: {
    section: string;
  }[] = [];
  for (const section of sectionList) {
    paramsArray.push({
      section: section.slug,
    });
  }

  // Return the generated params array
  return paramsArray;
}

export default async function Page({ params }: Props) {
  const { section: sectionParam } = await params;
  const sectionInList = newFindSectionBySlug(sectionParam);

  if (!sectionInList) {
    return notFound();
  }

  return (
    <>
      <h1 className="header-1">{sectionInList.meta.name} category</h1>
      <p className="caption-md">{sectionInList.meta.description}</p>
      <MenuSectionWrapper name={sectionInList.meta.name}>
        {sectionInList.categories.map((category) => {
          return (
            <Link
              href={`/${sectionInList.slug}/${category.slug}`}
              key={category.slug}
            >
              <MainMenusGradientCard
                description={category.meta.description}
                title={category.meta.name}
              >
                <MainMenuCardContent
                  slugCategory={category.slug}
                  isComingSoon={category.meta.comingSoonCategory}
                />
              </MainMenusGradientCard>
            </Link>
          );
        })}
      </MenuSectionWrapper>
    </>
  );
}
