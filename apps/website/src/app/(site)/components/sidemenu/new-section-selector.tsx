"use client";
import { cn } from "@/cuicui/utils/cn";
import { sectionList } from "@/section-list";
import { BracesIcon, PencilRulerIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sectionLinks = sectionList.map((section) => {
  return {
    title: section.meta.name,
    Icon: <section.meta.icon className="size-4" />,
    href: `/${section.slug}`,
  };
});

const snippetSection = {
  title: "Snippets",
  Icon: <BracesIcon className="size-4" />,
  href: "/snippets",
};

const toolSection = {
  title: "Tools",
  Icon: <PencilRulerIcon className="size-4" />,
  href: "/tools",
};

export default function NewSectionSelector() {
  const pathname = usePathname();

  const sectionItems = [
    ...sectionLinks,
    snippetSection,
    // toolSection
  ];

  return (
    <div className="pt-4 px-3 w-full">
      <div className="grid grid-cols-4 w-full gap-1">
        {sectionItems.map((section) => {
          const isActive = pathname.includes(section.href);
          //TODO Add Tooltips
          return (
            <Link
              href={section.href}
              key={section.title}
              className={cn(
                "flex flex-col items-center p-[3px] text-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-500/20 transition rounded-[20px] relative",
              )}
            >
              {isActive && (
                <div
                  className="absolute inset-0 rounded-[19px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%)",
                  }}
                />
              )}
              <div
                className={cn(
                  "px-3 py-4 bg-neutral-50 border dark:bg-neutral-900 size-full grid place-content-center rounded-[16px] relative z-10",
                  isActive
                    ? "border-none"
                    : "dark:border-none border-neutral-200",
                )}
              >
                {section.Icon}
                {/* <span className="">{section.title}</span> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
