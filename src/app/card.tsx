import Image from "next/image";
import type {
  CategoryType,
  SingleComponentCategoryType,
} from "../lib/types/component";

export const MainMenuCardContent = ({
  category,
  sectionSlug,
}: {
  category: CategoryType | SingleComponentCategoryType;
  sectionSlug: string;
}) => {
  if (category?.comingSoonCategory) {
    return (
      <p className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 font-semibold text-2xl text-neutral-800 dark:text-neutral-300">
        Coming Soon
      </p>
    );
  }

  return (
    <>
      <Image
        alt={`${category.name} preview`}
        className="h-48 w-full object-cover hidden dark:block"
        height={400}
        src={`/preview-images/dark-${sectionSlug}-${category.slug}.png`}
        width={600}
      />
      <Image
        alt={`${category.name} preview`}
        className="h-48 w-full object-cover dark:hidden"
        height={400}
        src={`/preview-images/light-${sectionSlug}-${category.slug}.png`}
        width={600}
      />
    </>
  );
};
