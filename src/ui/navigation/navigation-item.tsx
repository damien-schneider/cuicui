import GradientContainer from "#/src/ui/gradient-container";
import GradientText from "#/src/ui/gradient-text";
import { cn } from "#/src/utils/cn";
import { differenceInDays } from "date-fns";
import { ArrowUpRightIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import type { ReactNode } from "react";

export function GlobalNavItem({
  isMobile,
  href,
  name,
  Icon,
  isComingSoon = false,
  releaseDate,
  updatedDate,
  target = "sameWindow",
}: Readonly<{
  isMobile?: boolean;
  href: string;
  name: string;
  // biome-ignore lint/style/useNamingConvention: <As it is JSX, we have to call it with caps>
  Icon: LucideIcon | null;
  isComingSoon?: boolean;
  releaseDate?: Date | null;
  updatedDate?: Date | null;
  target?: "newWindow" | "sameWindow";
}>) {
  const segments = useSelectedLayoutSegments();
  const splittedHref = href.split("/");
  const lastSegment = splittedHref[splittedHref.length - 1];

  let isActive = false;
  if (segments) {
    isActive = segments.some((segment) => segment === lastSegment);
  }

  const isNew = differenceInDays(new Date(), releaseDate ?? 0) < 21;
  const isUpdated = differenceInDays(new Date(), updatedDate ?? 0) < 14;

  function getTagValue() {
    if (isComingSoon) {
      return "Coming soon";
    }
    if (isNew) {
      return "New";
    }
    if (isUpdated) {
      return "Updated";
    }
    return null;
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
      target={target === "newWindow" ? "_blank" : undefined}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon className="size-4 transform-gpu text-neutral-400 transition-transform group-hover:scale-125 dark:text-neutral-500" />
        )}
        <p className="transform-gpu tracking-tighter transition-transform group-hover:translate-x-0.5">
          {name}
        </p>
      </div>
      {getTagValue() && (
        <GradientContainer
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
          rounded="xs"
        >
          <GradientText className="text-xs">{getTagValue()}</GradientText>
        </GradientContainer>
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
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <div>
      <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        <p>{name}</p>
      </div>
      {children}
    </div>
  );
};
