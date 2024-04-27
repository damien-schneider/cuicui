import { notFound } from "next/navigation";
import { getCategory } from "#/src/app/api/categories/getCategories";
import BuggyButton from "#/src/ui/buggy-button";
import { SkeletonCard } from "#/src/ui/skeleton-card";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <div className="space-y-4">
      <h1 className="font-medium text-gray-400/80 text-xl">
        All {category.name}
      </h1>

      <BuggyButton />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
