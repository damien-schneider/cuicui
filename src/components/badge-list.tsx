import Badge from "../ui/badge";

export default function BadgeList({
  title,
  badgeList,
}: Readonly<{
  title: string;
  badgeList: string[];
}>) {
  return (
    <>
      <p className="text-neutral-400 text-sm">{title}</p>
      <div className="mt-1 flex flex-wrap items-center gap-2">
        {badgeList?.map((badge) => (
          <Badge key={badge} size="sm" variant="neutral">
            {badge}
          </Badge>
        ))}
      </div>
    </>
  );
}
