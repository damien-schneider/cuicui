"use client";

import { LinkIcon, SearchIcon } from "lucide-react";
import * as React from "react";

import { useRouter } from "next/navigation";

import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "#/src/ui/shadcn/command";

export function SearchMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="group mt-2 flex w-full transform-gpu items-center justify-between rounded-lg border border-transparent bg-neutral-500/10 p-2 text-muted-foreground text-sm transition-all hover:bg-neutral-500/20"
        onClick={() => setOpen((open) => !open)}
        type="button"
      >
        <p className="inline font-medium text-neutral-500 text-sm">
          <SearchIcon className="mr-2 inline size-5" />
          <span className="transform-gpu transition-all group-hover:ml-0.5">
            Search
          </span>
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-neutral-50 px-1.5 font-medium font-mono text-neutral-500 text-xs tracking-tighter opacity-100 dark:bg-neutral-950">
          ⌘ K
        </kbd>
      </button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Info">
            {firstMenuSection.categoryList.map((category) => (
              <CommandItem
                key={category.slug}
                onSelect={() => {
                  if (category.href) {
                    window.open(category.href, "_blank");
                    return;
                  }
                  router.push(`/${category.slug}`);
                  setOpen(false);
                }}
              >
                <LinkIcon className="mr-2 size-3 text-neutral-400" />
                <span>{category.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          {SectionsList.map((section) => (
            <CommandGroup
              heading={`${section.name} category`}
              key={section.slug}
            >
              {section.categoriesList.map((category) => {
                const Icon = category.icon;
                return (
                  <CommandItem
                    key={category.slug}
                    onSelect={() => {
                      router.push(`/${section.slug}/${category.slug}`);
                      setOpen(false);
                    }}
                  >
                    {Icon && <Icon className="mr-2 size-3 text-neutral-400" />}

                    <span>{category.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
          {SectionsList.map((section) => (
            <CommandGroup
              heading={`${section.name} components`}
              key={section.slug}
            >
              {section.categoriesList.map((category) => {
                return category.componentList?.map((component) => {
                  const Icon = category.icon;
                  return (
                    <CommandItem
                      key={component.slug}
                      onSelect={() => {
                        router.push(
                          `/${section.slug}/${category.slug}#${component.slug}`,
                        );
                        setOpen(false);
                      }}
                    >
                      {Icon && (
                        <Icon className="mr-1 size-2 text-neutral-400" />
                      )}

                      <span>{component.title}</span>
                    </CommandItem>
                  );
                });
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
