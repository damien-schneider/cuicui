import Link from "next/link";
import type {
  CategoryType,
  ComponentType,
  SectionType,
} from "#/src/lib/types/component";
import { CUICUI_GITHUB_URL } from "#/src/lib/site.const";
export default function GithubEditButton({
  sectionSlug,
  categorySlug,
  componentSlug,
}: {
  sectionSlug: SectionType["slug"];
  categorySlug: CategoryType["slug"];
  componentSlug?: ComponentType["slug"];
}) {
  return (
    <Link
      // Example : https://github.com/damien-schneider/cuicui/tree/main/src/ui/cuicui/other/creative-effects/animated-noise
      href={`${CUICUI_GITHUB_URL}/tree/main/src/ui/cuicui/${sectionSlug}/${categorySlug}/${componentSlug ? componentSlug : ""}`}
      className="text-sm text-neutral-500 hover:text-neutral-500/50 hover:underline font-medium tracking-tight"
    >
      Edit on Github
    </Link>
  );
}
