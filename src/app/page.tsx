import Link from "next/link";
// import GradientContainer from "../ui/gradient-container";

import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { GradientCard } from "#/src/ui/cuicui/other/cursors/dynamic-cards/gradient-card";
import { MainMenuCard } from "./card";

export default function HomePage() {
  return (
    <div className="my-8 space-y-8 px-4">
      <h1 className="header-1">CuiCui - Copy Paste quality React component</h1>
      <p className="caption-md ">
        CuiCui is a modern UI copy paste library that helps you build beautiful
        websites and applications. Its name "CuiCui" is for Quick UI.
      </p>
      <div className="space-y-10 text-white">
        <h2 className="header-2">Explore the component categories</h2>

        <div className="space-y-5">
          <h3 className="uppercase-title">{firstMenuSection.name}</h3>

          <div className="grid transform-gpu grid-cols-1 gap-5 lg:grid-cols-2">
            {firstMenuSection.categoryList.map((category) => {
              return (
                <Link
                  data-testid={`home-navigation-link-${category.name}`}
                  href={category.href ?? `/${category.slug}`}
                  key={category.name}
                >
                  <GradientCard
                    description={category.description}
                    title={category.name}
                    withArrow={Boolean(category.href)}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {SectionsList.map((section) => (
          <div className="space-y-5" key={section.name}>
            <h3 className="uppercase-title">{section.name}</h3>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.type !== "page" &&
                section.categoriesList.map((category) => {
                  return (
                    <Link
                      href={`/${section.slug}/${category.slug}`}
                      key={category.name}
                    >
                      <GradientCard
                        description={category.description}
                        title={category.name}
                      >
                        <MainMenuCard category={category} />
                      </GradientCard>
                      {/* <MainMenuCard category={category} /> */}
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
