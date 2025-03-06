"use server";
import { GlobalNavItem } from "#/src/app/(site)/components/sidemenu/navigation-item";
import { cn } from "@/cuicui/utils/cn";
import { getSidemenuItems } from "#/src/app/(site)/components/sidemenu/sidemenu-items-list";
import Portal from "#/src/ui/portal";
import { NavigationSidemenuAnimatedBackground } from "#/src/app/(site)/components/sidemenu/navigation-animated-background";

export default async function NavigationMenu({
  section,
  isMobile,
  className,
}: {
  section: string;
  isMobile?: boolean;
  className?: string;
}) {
  // function getClosestUpdatedComponentDate(dateList: (Date | null)[]) {
  //   return dateList.reduce((acc, date) => {
  //     if (!date) {
  //       return acc;
  //     }
  //     if (!acc) {
  //       return date;
  //     }
  //     return date > acc ? date : acc;
  //   }, null);
  // }

  const sidemenuContent = await getSidemenuItems(section);

  if (!sidemenuContent) {
    return null;
  }

  return (
    <Portal containerId="sidemenu-container">
      <nav className={cn("mt-5 mb-12 px-1 min-h-full", className)}>
        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <p>{sidemenuContent?.title}</p>
        </div>
        <NavigationSidemenuAnimatedBackground>
          {sidemenuContent.items.map((item) => (
            <li key={item.name} className="block" data-id={item.name}>
              <GlobalNavItem
                Icon={item.Icon}
                href={item.href}
                isMobile={isMobile}
                name={item.name}
                tag={item.tag}
                target="sameWindow"
              />
            </li>
          ))}
        </NavigationSidemenuAnimatedBackground>
      </nav>
    </Portal>
  );
}
