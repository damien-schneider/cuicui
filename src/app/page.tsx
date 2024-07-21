import Link from "next/link";
import { componentCategories } from "#/src/lib/component-categories";
import GradientContainer from "../ui/gradient-container";

export default function Page() {
  return (
    <div className="space-y-8 px-4 my-8">
      <h1 className="font-medium dark:text-neutral-300 text-neutral-600 text-3xl tracking-tight">
        CuiCui - Copy Paste quality React component
      </h1>
      <p className="text-sm text-neutral-500">
        CuiCui is a modern UI copy paste library that helps you build beautiful
        websites and applications. Its name "CuiCui" is for Quick UI.
      </p>
      <div className="space-y-10 text-white">
        {componentCategories.map((section) => (
          <div key={section.name} className="space-y-5">
            <p className="font-semibold text-neutral-400 text-xs uppercase tracking-wider">
              {section.name}
            </p>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => {
                return (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className="group block rounded-lg"
                  >
                    <GradientContainer
                      rounded="sm"
                      classNameChild="z-30 bg-white"
                      classNameParent="overflow-hidden"
                      classNameBlur="z-20 opacity-0 blur-md group-hover:opacity-5 transition-all duration-150 ease-in-out"
                      background="solid"
                    >
                      <div className=" flex gap-2 flex-col p-2 group-hover:opacity-80 transition-opacity">
                        <h4 className="font-medium dark:text-neutral-300 text-neutral-700 group-hover:translate-x-1 transition-transform">
                          {item.name}
                        </h4>

                        {item.description ? (
                          <p className="text-neutral-500 text-sm">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    </GradientContainer>
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
