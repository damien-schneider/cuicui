"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "#/src/utils/cn";
import type { SectionType } from "@cuicui/ui/lib/types/component";

export function GlobalNavItem({
  isMobile,
  href,
  name,
  Icon,
  tag,
  target = "sameWindow",
  ...props
}: Readonly<{
  isMobile?: boolean;
  href: string;
  name: string;
  Icon: ReactNode | null;
  tag?: string | null;
  target?: "newWindow" | "sameWindow";
}> &
  AnchorHTMLAttributes<HTMLAnchorElement>) {
  const segments = useSelectedLayoutSegments();
  const splittedHref = href.split("/");
  const lastSegment = splittedHref[splittedHref.length - 1];

  let isActive = false;
  if (segments) {
    isActive = segments.some((segment) => segment === lastSegment);
  }

  return (
    <Link
      className={cn(
        "group flex items-center justify-between rounded-md border border-transparent px-3 font-medium text-sm",
        isMobile ? "py-2" : "py-0.5",
        isActive
          ? "bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/80"
          : "text-black/40 dark:text-white/40",
      )}
      data-testid={`navigation-link-${name}`}
      href={href}
      title={name}
      target={target === "newWindow" ? "_blank" : undefined}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="transform-gpu text-neutral-400 transition-transform group-hover:scale-125 dark:text-neutral-500">
          {Icon}
        </span>
        <p className="transform-gpu tracking-tighter transition-transform group-hover:translate-x-0.5">
          {name}
        </p>
      </div>
      {tag && (
        <p className="text-xs font-light tracking-tighter px-2 text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded-full">
          {tag}
        </p>
      )}

      {target === "newWindow" && (
        <ArrowUpRightIcon className="size-4 text-black/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/40" />
      )}
    </Link>
  );
}

export const SectionWrapper = ({
  children,
  name,
  className,
  sectionSlug,
}: {
  children: ReactNode;
  name: string;
  className?: string;
  sectionSlug: SectionType["slug"];
}) => {
  const pathName = usePathname();

  if (!pathName.includes(sectionSlug)) {
    return null;
  }

  return (
    <div className={className}>
      <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        <p>{name}</p>
      </div>
      {children}
    </div>
  );
};
