import { MainMenuCardContent } from "#/src/app/card";
import MenuSectionWrapper from "#/src/components/main-menus/menu-category-wrapper";
import { MainMenusGradientCard } from "#/src/ui/cuicui/other/cursors/dynamic-cards/gradient-card";
import { findSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { section: string };
};

export default function Page({ params }: Readonly<Props>) {
  const section = findSectionBySlug(params.section);
  if (!section) {
    return notFound();
  }
  if (section.slug !== params.section) {
    return notFound();
  }
  if (section.type === "page") {
    return (
      <>
        <h1 className="header-1">{section.name} category</h1>
        <p className="caption-md">{section.description}</p>
        <MenuSectionWrapper name={section.name} key={section.name}>
          {section.pageList.map((category) => {
            return (
              <Link
                href={`/${section.slug}/${category.slug}`}
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
      <h1 className="header-1">{section.name} category</h1>
      <p className="caption-md">{section.description}</p>
      <MenuSectionWrapper name={section.name} key={section.name}>
        {section.categoriesList.map((category) => {
          return (
            <Link
              href={`/${section.slug}/${category.slug}`}
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
