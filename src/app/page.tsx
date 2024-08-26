"use client";
import Link from "next/link";
import { componentCategories } from "#/src/lib/component-categories";
// import GradientContainer from "../ui/gradient-container";

import { getCategoryHref } from "../utils/get-component-href";
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
        {componentCategories.map((section) => (
          <div key={section.name} className="space-y-5">
            <h3 className="uppercase-title">{section.name}</h3>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 transform-gpu">
              {section.items.map((item) => {
                const href = getCategoryHref({
                  parentSlug: section.slug,
                  item: item,
                });
                return (
                  <Link
                    href={href}
                    key={item.name}
                    className="group hover:scale-[1.01] hover:-translate-y-[2px] transition-all active:scale-95 rounded-[20px] overflow-hidden"
                  >
                    <MainMenuCard item={item} />
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
