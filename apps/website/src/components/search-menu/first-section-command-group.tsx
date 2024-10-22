import { LinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { CommandGroup, CommandItem } from "#/src/ui/shadcn/command";

export function FirstSectionCommandGroup({
	closeSearchMenu,
}: Readonly<{ closeSearchMenu: () => void }>) {
	const router = useRouter();
	return (
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
						closeSearchMenu();
					}}
				>
					<LinkIcon className="mr-2 size-3 text-neutral-400" />
					<span>{category.name}</span>
				</CommandItem>
			))}
		</CommandGroup>
	);
}
