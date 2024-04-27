import { getCategory } from "#/src/app/api/categories/getCategories";
import { HooksClient } from "#/src/app/hooks/_components/router-context";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <div className="space-y-9">
      <h1 className="font-medium text-gray-400/80 text-xl">
        All {category.name}
      </h1>

      <HooksClient />
    </div>
  );
}
