import { getSnippetsCategories } from "#/src/app/(site)/snippets/get-snippets-categories";
import { MainMenusGradientCard } from "@/cuicui/other/cursors/dynamic-cards/gradient-card";
import Link from "next/link";
import { snippetsCategoryIcons } from "#/src/app/(site)/snippets/lib/snippets-icons";
import MenuCategoryList from "#/src/components/main-menus/menu-category-wrapper";

// Dynamic page component with params
export default async function SnippetsPage() {
  // Get all categories, subcategories and snippets
  const categories = await getSnippetsCategories();

  //TODO Add to the cuicui lib
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <MenuCategoryList
      title="Snippets"
      description="A collection of code snippets for various programming languages and frameworks. Credits to quicksnip.dev for the initial snippets"
    >
      {categories.map((category) => (
        <Link href={`/snippets/${category.slug}`} key={category.slug}>
          <MainMenusGradientCard title={capitalizeFirstLetter(category.slug)}>
            <div className="flex items-center justify-center size-full gap-2 py-4 px-12 *:size-12 *:saturate-0 *:rounded-md *:fill-neutral-400">
              {snippetsCategoryIcons[
                category.slug as keyof typeof snippetsCategoryIcons
              ] ?? null}
            </div>
            {/* {getCategoryPreviewBySlug(category)} */}
          </MainMenusGradientCard>
        </Link>
      ))}
    </MenuCategoryList>
  );
}
