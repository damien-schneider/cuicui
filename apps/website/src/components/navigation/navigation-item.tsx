"use client";
import {
  ArrowUpRightIcon,
  ChevronRightIcon,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/src/components/navigation/disclosure";
import GradientContainer from "@/src/ui/gradient-container";
import GradientText from "@/src/ui/gradient-text";
import { cn } from "@/src/utils/cn";
import type { SectionType } from "@/src/lib/types/component";

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
  Icon: LucideIcon | null;
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
      target={target === "newWindow" ? "_blank" : undefined}
      {...props}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon className="size-4 transform-gpu text-neutral-400 transition-transform group-hover:scale-125 dark:text-neutral-500" />
        )}
        <p className="transform-gpu tracking-tighter transition-transform group-hover:translate-x-0.5">
          {name}
        </p>
      </div>
      {tag && (
        <GradientContainer
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
          rounded="xs"
        >
          <GradientText className="text-xs">{tag}</GradientText>
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
  disclosure = true,
  Icon,
  className,
  sectionSlug,
}: {
  children: ReactNode;
  name: string;
  disclosure?: boolean;
  Icon?: LucideIcon;
  className?: string;
  sectionSlug: SectionType["slug"];
}) => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const doesPathNameIncludeSectionSlug = pathName.includes(sectionSlug);
    if (doesPathNameIncludeSectionSlug) {
      setOpen(true);
    }
  }, [pathName, sectionSlug]);
  if (disclosure) {
    return (
      <Disclosure
        onOpenChange={setOpen}
        open={isOpen}
        className={cn("w-full rounded-md has-[:aria-expanded]:my-6")}
      >
        <DisclosureTrigger>
          <button
            className={cn(
              "relative group peer px-3 py-2  text-xs w-full flex font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 justify-between items-center",
              "before:absolute before:inset-0 before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:transform-gpu before:bg-neutral-400/15 before:rounded-lg before:border before:border-neutral-400/15 active:before:bg-neutral-400/30  transition-all aria-expanded:mt-6",
            )}
            type="button"
          >
            <span className="inline-flex gap-2 items-center">
              {Icon && (
                <Icon className="size-4 transform-gpu text-neutral-400 transition-transform group-hover:scale-125 dark:text-neutral-500 " />
              )}

              {name}
            </span>

            <ChevronRightIcon className="size-4 text-black/40 transition-transform dark:text-white/40 group-aria-expanded:rotate-90" />
          </button>
        </DisclosureTrigger>
        <DisclosureContent className="pt-1 peer-aria-expanded:mb-8">
          {children}
        </DisclosureContent>
      </Disclosure>
      // <div>
      //   <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
      //     <p>{name}</p>
      //   </div>
      //   {children}
      // </div>
    );
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
