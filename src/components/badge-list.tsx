import React from "react";
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
      <p className="text-sm text-neutral-400">{title}</p>
      <div className="flex flex-wrap items-center gap-2 mt-1">
        {badgeList?.map((badge) => (
          <Badge variant="neutral" size="sm" key={badge}>
            {badge}
          </Badge>
        ))}
      </div>
    </>
  );
}
