import BadgeList from "#/src/components/badge-list";
import { ComponentBadgeList } from "#/src/lib/badges.const";
import type {
  ComponentBadgeSlug,
  FrameworkBadge,
} from "#/src/lib/types/component";
import Badge from "#/src/ui/badge";

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
        <h2 className="header-2">{title}</h2>
        <p className="caption-sm">{description}</p>
      </div>
      {frameworksBadges && frameworksBadges.length > 0 && (
        <BadgeList badgeList={frameworksBadges} title="Used frameworks :" />
      )}
    </>
  );
}
