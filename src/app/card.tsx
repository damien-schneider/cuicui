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
      <p className="text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-neutral-800 dark:text-neutral-300 absolute">
        Coming Soon
      </p>
    );
  }
  if (category?.previewCategory?.previewImage) {
    return (
      <Image
        className="object-cover w-full h-48"
        width={600}
        height={400}
        alt={`${category.name} preview`}
        src={category.previewCategory.previewImage}
      />
    );
  }
  if (category?.previewCategory?.component) {
    return (
      <div
        className={cn(
          "pointer-events-none select-none flex justify-center items-center w-full h-full",
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
