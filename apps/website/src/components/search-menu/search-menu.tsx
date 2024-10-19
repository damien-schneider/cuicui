"use client";

import { SearchIcon } from "lucide-react";

import { useState } from "react";
import { FirstSectionCommandGroup } from "@/src/components/search-menu/first-section-command-group";
import { SearchGroupComponentSection } from "@/src/components/search-menu/search-group-multi-component-section";
import { SectionsList } from "@/src/lib/cuicui-components/sections-list";
import { useKeyPress } from "@cuicui/ui/src/hooks/use-key-press/use-key-press";
import {
	CommandDialog,
	CommandEmpty,
	CommandInput,
	CommandList,
} from "@/src/ui/shadcn/command";

export function SearchMenu() {
	const [open, setOpen] = useState(false);

	useKeyPress({
		keyPressItems: [
			{
				keys: ["KeyK", "Meta"],
				event: () => setOpen((prev) => !prev),
			},
			{
				keys: ["KeyK", "Control"],
				event: () => setOpen((prev) => !prev),
			},
		],
		// Important to trigger even on input fields (override default behavior)
		tagsToIgnore: [""],
	});

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

					<FirstSectionCommandGroup closeSearchMenu={() => setOpen(false)} />

					{SectionsList.map((section) => {
						return (
							<SearchGroupComponentSection
								closeSearchMenu={() => setOpen(false)}
								key={section.slug}
								section={section}
							/>
						);
					})}
					{/* {SectionsList.map((section) => {
            if (section.type !== "multiple-component") {
              return;
            }
            return (
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
            );
          })} */}
				</CommandList>
			</CommandDialog>
		</>
	);
}
