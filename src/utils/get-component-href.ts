import type { CategoryItem } from "../lib/types/component";

export function getCategoryHref({
  item,
  parentSlug,
}: {
  item: CategoryItem;
  parentSlug: string | null;
}) {
  if (item.href) {
    return item.href;
  }
  if (parentSlug) {
    return `/${parentSlug}/${item.slug}`;
  }
  return `/${item.slug}`;
}
