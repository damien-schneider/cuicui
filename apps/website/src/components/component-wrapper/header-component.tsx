import BadgeList from "#/src/components/badge-list";

import type {
  ComponentBadgeSlug,
  FrameworkBadge,
} from "@cuicui/ui/lib/types/component";
import Badge from "#/src/ui/badge";
import { ComponentBadgeList } from "@cuicui/ui/lib/badges.const";

export default function HeaderComponent({
  frameworksBadges,
  componentBadges,
  title,
  description,
}: {
  frameworksBadges?: FrameworkBadge[];
  componentBadges?: ComponentBadgeSlug[];
  title: string;
  description: string;
}) {
  return (
    <>
      {componentBadges && componentBadges.length > 0 && (
        <div className="flex items-center gap-2">
          {ComponentBadgeList.filter((badge) =>
            componentBadges.includes(badge.slug),
          ).map((badge) => (
            <Badge key={badge.slug} size="sm" variant="lime">
              {badge.name}
            </Badge>
          ))}
        </div>
      )}
      <div>
        <h2 className="bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/10 bg-clip-text font-medium text-transparent text-xl sm:text-2xl inline tracking-tighter">
          {title}
        </h2>
        <p className="caption-sm">{description}</p>
      </div>
      {frameworksBadges && frameworksBadges.length > 0 && (
        <BadgeList badgeList={frameworksBadges} title="Used frameworks :" />
      )}
    </>
  );
}
