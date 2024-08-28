"use client";
import Link from "next/link";
// import GradientContainer from "../ui/gradient-container";

import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { MainMenuCard } from "./card";

export default function HomePage() {
  return (
    <div className="space-y-8 px-4 my-8">
      <h1 className="header-1">CuiCui - Copy Paste quality React component</h1>
      <p className="caption-md ">
        CuiCui is a modern UI copy paste library that helps you build beautiful
        websites and applications. Its name "CuiCui" is for Quick UI.
      </p>
      <div className="space-y-10 text-white">
        <h2 className="header-2">Explore the component categories</h2>

        <div className="space-y-5">
          <h3 className="uppercase-title">{firstMenuSection.name}</h3>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 transform-gpu">
            {firstMenuSection.categoryList.map((category) => {
              return (
                <Link
                  href={`/${category.slug}`}
                  key={category.name}
                  className="group hover:scale-[1.01] hover:-translate-y-[2px] transition-all active:scale-95 rounded-[20px] overflow-hidden"
                >
                  <MainMenuCard
                    nameIfNotCategory={category.name}
                    descriptionIfNotCategory={category.description}
                    target={category.href ? "_blank" : "_self"}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {SectionsList.map((section) => (
          <div key={section.name} className="space-y-5">
            <h3 className="uppercase-title">{section.name}</h3>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 transform-gpu">
              {section.categoriesList.map((category) => {
                return (
                  <Link
                    href={`/${section.slug}/${category.slug}`}
                    key={category.name}
                    className="group hover:scale-[1.01] hover:-translate-y-[2px] transition-all active:scale-95 rounded-[20px] overflow-hidden"
                  >
                    <MainMenuCard category={category} />
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
