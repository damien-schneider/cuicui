import { categoriesPreviewsList } from "@/categories-previews-list";
import type { CategoryType } from "@/lib/types/component";
import { HourglassIcon } from "lucide-react";
import { createElement } from "react";

export const getCategoryPreviewBySlug = (category: CategoryType) => {
  if (category.meta.isComingSoon) {
    return (
      <p className="size-full grid place-content-center">
        <div className="w-fit p-4 bg-neutral-400/15 rounded-xl gap-2 flex items-center justify-center text-neutral-400">
          {/* Hourglass Icon */}
          <HourglassIcon className="size-6 " />
          <p className="text-2xl font-semibold">Coming Soon</p>
        </div>
      </p>
    );
  }
  if (!categoriesPreviewsList[category.slug]) {
    return <p>Preview not available</p>;
  }
  return createElement(categoriesPreviewsList[category.slug]);
};
