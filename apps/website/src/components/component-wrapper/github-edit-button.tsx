import Link from "next/link";
import type {
  CategoryType,
  ComponentType,
  SectionType,
} from "@cuicui/ui/lib/types/component";
import { env } from "#/src/env";

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
      href={`${env.NEXT_PUBLIC_CUICUI_GITHUB_URL}/tree/main/packages/ui/cuicui/${sectionSlug}/${categorySlug}/${componentSlug ? componentSlug : ""}`}
      className="text-sm text-neutral-500 hover:text-neutral-500/50 hover:underline font-medium tracking-tight"
      title={`Edit ${componentSlug ?? categorySlug} on Github`}
    >
      Edit on Github
    </Link>
  );
}
