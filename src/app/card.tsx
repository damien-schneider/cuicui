import Image from "next/image";

import { cn } from "#/src/utils/cn";
import type { CategoryType } from "../lib/types/component";

export const MainMenuCard = ({
  category,
}: {
  category?: CategoryType;
}) => {
  if (category?.comingSoonCategory) {
    return (
      <p className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 font-semibold text-2xl text-neutral-800 dark:text-neutral-300">
        Coming Soon
      </p>
    );
  }
  if (category?.previewCategory?.previewImage) {
    return (
      <Image
        alt={`${category.name} preview`}
        className="h-48 w-full object-cover"
        height={400}
        src={category.previewCategory.previewImage}
        width={600}
      />
    );
  }
  if (category?.previewCategory?.component) {
    return (
      <div
        className={cn(
          "pointer-events-none flex h-full w-full select-none items-center justify-center",
        )}
        style={{
          transform: `scale(${category.previewCategory?.previewScale ?? 0.75})`,
        }}
      >
        {category.previewCategory?.component}
      </div>
    );
  }
};
