import Link from "next/link";
import { notFound } from "next/navigation";
import { MainMenuCardContent } from "#/src/app/card";
import MenuSectionWrapper from "#/src/components/main-menus/menu-category-wrapper";
import { MainMenusGradientCard } from "@cuicui/ui/cuicui/other/cursors/dynamic-cards/gradient-card";
import { findSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";

type Props = {
  params: Promise<{ section: string }>;
};

export default async function Page({ params }: Props) {
  const { section: sectionParam } = await params;
  const sectionInList = findSectionBySlug(sectionParam);

  if (!sectionInList) {
    return notFound();
  }

  if (sectionInList.slug !== sectionParam) {
    return notFound();
  }

  if (sectionInList.type === "page") {
    return (
      <>
        <h1 className="header-1">{sectionInList.name} category</h1>
        <p className="caption-md">{sectionInList.description}</p>
        <MenuSectionWrapper key={sectionInList.name} name={sectionInList.name}>
          {sectionInList.pageList.map((category) => {
            return (
              <Link
                href={`/${sectionInList.slug}/${category.slug}`}
                key={category.name}
              >
                <MainMenusGradientCard
                  description={category.description}
                  title={category.name}
                />
              </Link>
            );
          })}
        </MenuSectionWrapper>
      </>
    );
  }
  return (
    <>
      <h1 className="header-1">{sectionInList.name} category</h1>
      <p className="caption-md">{sectionInList.description}</p>
      <MenuSectionWrapper key={sectionInList.name} name={sectionInList.name}>
        {sectionInList.categoriesList.map((category) => {
          return (
            <Link
              href={`/${sectionInList.slug}/${category.slug}`}
              key={category.name}
            >
              <MainMenusGradientCard
                description={category.description}
                title={category.name}
              >
                <MainMenuCardContent category={category} />
              </MainMenusGradientCard>
            </Link>
          );
        })}
      </MenuSectionWrapper>
    </>
  );

  // return notFound();
}
