import { useRouter } from "next/navigation";
import type {
  NewSectionType,
  NewCategoryType,
} from "@cuicui/ui/lib/types/component";
import { CommandGroup, CommandItem } from "#/src/ui/shadcn/command";
import Link from "next/link";

export function SearchGroupComponentSection({
  closeSearchMenu,
  section,
}: Readonly<{ closeSearchMenu: () => void; section: NewSectionType }>) {
  const router = useRouter();

  return (
    <CommandGroup heading={`${section.meta.name} category`} key={section.slug}>
      {section.categories.map((category) => (
        <MultipleComponentSearchItems
          category={category}
          sectionSlug={section.slug}
          closeSearchMenu={closeSearchMenu}
          key={category.slug}
        />
      ))}
    </CommandGroup>
  );
}

const MultipleComponentSearchItems = ({
  category,
  sectionSlug,
  closeSearchMenu,
}: {
  category: NewCategoryType;
  sectionSlug: string;
  closeSearchMenu: () => void;
}) => {
  const router = useRouter();

  return (
    <>
      <CommandItem
        key={category.slug}
        // value={`${sectionSlug} ${category.name}`}
        onSelect={() => {
          router.push(`/${sectionSlug}/${category.slug}`);
          closeSearchMenu();
        }}
        // className="ml-4"
        asChild={true}
      >
        <Link href={`/${sectionSlug}/${category.slug}`}>
          <category.meta.icon className="mr-2 size-3 text-neutral-400" />

          <span>{category.meta.name}</span>
        </Link>
      </CommandItem>

      {category.components?.map((component) => {
        return (
          <CommandItem
            key={component.slug}
            // value={`${component.name}`}
            onSelect={() => {
              router.push(`/${sectionSlug}/${category.slug}#${component.slug}`);
              closeSearchMenu();
            }}
            className="ml-8 my-0.5 h-8"
            asChild={true}
          >
            <Link href={`/${sectionSlug}/${category.slug}#${component.slug}`}>
              {/* {category.icon && (
								<category.icon className="mr-2 size-3 text-neutral-400" />
							)} */}

              <span>{component.meta.name}</span>
            </Link>
          </CommandItem>
        );
      })}
    </>
  );
};
