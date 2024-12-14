import Link from "next/link";
import { notFound } from "next/navigation";
import { MainMenuCardContent } from "#/src/app/card";
import MenuSectionWrapper from "#/src/components/main-menus/menu-category-wrapper";
import { MainMenusGradientCard } from "@cuicui/ui/cuicui/other/cursors/dynamic-cards/gradient-card";
import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";
import { sectionList as newSectionList } from "@cuicui/ui/new-section-list";

type Props = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  const paramsArray = [];
  for (const section of newSectionList) {
    paramsArray.push({
      section: section.meta.slug,
    });
  }

  // Return the generated params array
  return paramsArray;
}

export default async function Page({ params }: Props) {
  const { section: sectionParam } = await params;
  const sectionInList = newFindSectionBySlug(sectionParam);
  console.log(sectionInList);

  if (!sectionInList) {
    return notFound();
  }

  // if (sectionInList.type === "page") {
  //   return (
  //     <>
  //       <h1 className="header-1">{sectionInList.name} category</h1>
  //       <p className="caption-md">{sectionInList.description}</p>
  //       <MenuSectionWrapper key={sectionInList.name} name={sectionInList.name}>
  //         {sectionInList.pageList.map((category) => {
  //           return (
  //             <Link
  //               href={`/${sectionInList.slug}/${category.slug}`}
  //               key={category.name}
  //             >
  //               <MainMenusGradientCard
  //                 description={category.description}
  //                 title={category.name}
  //               />
  //             </Link>
  //           );
  //         })}
  //       </MenuSectionWrapper>
  //     </>
  //   );
  // }
  return (
    <>
      <h1 className="header-1">{sectionInList.meta.name} category</h1>
      <p className="caption-md">{sectionInList.meta.description}</p>
      <MenuSectionWrapper name={sectionInList.meta.name}>
        {sectionInList.categories.map((category) => {
          return (
            <Link
              href={`/${sectionInList.meta.slug}/${category.slug}`}
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

  // return notFound();
}
