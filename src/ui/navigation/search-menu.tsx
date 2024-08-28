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
  CommandSeparator,
  CommandShortcut,
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
        type="button"
        className="text-sm group text-muted-foreground w-full p-2 bg-neutral-500/10 hover:bg-neutral-500/20 rounded-lg flex items-center justify-between border border-transparent transform-gpu transition-all mt-2"
        onClick={() => setOpen((open) => !open)}
      >
        <p className="inline text-neutral-500 font-medium text-sm">
          <SearchIcon className="size-5 mr-2 inline" />
          <span className="group-hover:ml-0.5 transition-all transform-gpu">
            Search
          </span>
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center bg-neutral-50 dark:bg-neutral-950 gap-1 rounded px-1.5 font-mono text-xs font-medium text-neutral-500 opacity-100 tracking-tighter">
          ⌘ K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
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
            <CommandGroup key={section.slug} heading={section.name}>
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
        </CommandList>
      </CommandDialog>
    </>
  );
}
