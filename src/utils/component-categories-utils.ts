import { componentCategories } from "#/src/lib/component-categories";

export const getComponentCategoriesSlug = () => {
  const categories = componentCategories.map((category) => category.slug);
  // Remove the null and undefined values from the array
  return categories.filter(Boolean);
};

export const extractCategoryFromPath = (url: string) => {
  const match = RegExp(/^\/([^/?]+)(?:\/|$)/).exec(url);
  return match ? match[1] : null;
};
