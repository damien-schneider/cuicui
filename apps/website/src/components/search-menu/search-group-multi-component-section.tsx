import { useRouter } from "next/navigation";
import type { SectionType } from "@/src/lib/types/component";
import { CommandGroup, CommandItem } from "@/src/ui/shadcn/command";

//TODO: Add variant lists
export function SearchGroupComponentSection({
	closeSearchMenu,
	section,
}: Readonly<{ closeSearchMenu: () => void; section: SectionType }>) {
	const router = useRouter();

	if (
		section.type === "multiple-component" ||
		section.type === "single-component"
	) {
		return (
			<CommandGroup heading={`${section.name} category`} key={section.slug}>
				{section.categoriesList.map((category) => {
					const Icon = category.icon;
					return (
						<CommandItem
							key={category.slug}
							onSelect={() => {
								router.push(`/${section.slug}/${category.slug}`);
								closeSearchMenu();
							}}
						>
							{Icon && <Icon className="mr-2 size-3 text-neutral-400" />}

							<span>{category.name}</span>
						</CommandItem>
					);
				})}
			</CommandGroup>
		);
	}

	return null;
}
