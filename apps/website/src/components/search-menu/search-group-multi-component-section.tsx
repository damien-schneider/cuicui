import { useRouter } from "next/navigation";
import type { SectionType } from "@cuicui/ui/lib/types/component";
import { CommandGroup, CommandItem } from "#/src/ui/shadcn/command";
import Link from "next/link";
import type {
  CategoryType,
  PageCategoryType,
  SingleComponentCategoryType,
} from "@/lib/types/component";

export function SearchGroupComponentSection({
  closeSearchMenu,
  section,
}: Readonly<{ closeSearchMenu: () => void; section: SectionType }>) {
  const router = useRouter();

  return (
    <CommandGroup heading={`${section.name} category`} key={section.slug}>
      {section.type === "multiple-component" &&
        section.categoriesList.map((category) => (
          <MultipleComponentSearchItems
            category={category}
            sectionSlug={section.slug}
            closeSearchMenu={closeSearchMenu}
            key={category.slug}
          />
        ))}
      {section.type === "single-component" &&
        section.categoriesList.map((category) => {
          return (
            <SingleComponentSearchItems
              category={category}
              sectionSlug={section.slug}
              closeSearchMenu={closeSearchMenu}
              key={category.slug}
            />
          );
        })}
      {section.type === "page" &&
        section.pageList.map((category) => {
          return (
            <PageComponentSearchItems
              sectionSlug={section.slug}
              category={category}
              closeSearchMenu={closeSearchMenu}
              key={category.slug}
            />
          );
        })}
    </CommandGroup>
  );
}

const MultipleComponentSearchItems = ({
  category,
  sectionSlug,
  closeSearchMenu,
}: {
  category: CategoryType;
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
        asChild
      >
        <Link href={`/${sectionSlug}/${category.slug}`}>
          {category.icon && (
            <category.icon className="mr-2 size-3 text-neutral-400" />
          )}

          <span>{category.name}</span>
        </Link>
      </CommandItem>

      {category.componentList?.map((component) => {
        return (
          <CommandItem
            key={component.slug}
            // value={`${component.name}`}
            onSelect={() => {
              router.push(`/${sectionSlug}/${category.slug}#${component.slug}`);
              closeSearchMenu();
            }}
            className="ml-8 my-0.5 h-8"
            asChild
          >
            <Link href={`/${sectionSlug}/${category.slug}#${component.slug}`}>
              {/* {category.icon && (
								<category.icon className="mr-2 size-3 text-neutral-400" />
							)} */}

              <span>{component.name}</span>
            </Link>
          </CommandItem>
        );
      })}
    </>
  );
};

const SingleComponentSearchItems = ({
  category,
  sectionSlug,
  closeSearchMenu,
}: {
  category: SingleComponentCategoryType;
  sectionSlug: string;
  closeSearchMenu: () => void;
}) => {
  const router = useRouter();

  return (
    <CommandItem
      key={category.slug}
      onSelect={() => {
        router.push(`/${sectionSlug}/${category.slug}`);
        closeSearchMenu();
      }}
      value={`${sectionSlug} ${category.slug}`}
      asChild
    >
      <Link href={`/${sectionSlug}/${category.slug}`}>
        {category.icon && (
          <category.icon className="mr-2 size-3 text-neutral-400" />
        )}

        <span>{category.name}</span>
      </Link>
    </CommandItem>
  );
};

const PageComponentSearchItems = ({
  sectionSlug,
  category,
  closeSearchMenu,
}: {
  sectionSlug: string;
  category: PageCategoryType;
  closeSearchMenu: () => void;
}) => {
  const router = useRouter();

  return (
    <CommandItem
      key={category.slug}
      onSelect={() => {
        router.push(`/${category.slug}`);
        closeSearchMenu();
      }}
      value={`${sectionSlug} ${category.slug}`}
      asChild
    >
      <Link href={`/${category.slug}`}>
        {category.icon && (
          <category.icon className="mr-2 size-3 text-neutral-400" />
        )}

        <span>{category.name}</span>
      </Link>
    </CommandItem>
  );
};
