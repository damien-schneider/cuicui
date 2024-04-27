import Link from "next/link";
import { componentCategories } from "#/src/lib/component-categories";
import FullComponent from "../components/full-component";
import { Badge1 } from "../components/badges/badge1";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="font-medium text-gray-300 text-xl">Examples</h1>
      <div className="space-y-10 text-white">
        {componentCategories.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-gray-400 text-sm group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
