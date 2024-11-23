"use server";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { parseISO } from "date-fns";
import { promises as fs } from "node:fs";
import path from "node:path";

export default async function InfoMenuList() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/changelogs"),
  );

  let latestChangelogDate = new Date(0);

  for (const file of filenames) {
    const filenameWithoutExtension = file.replace(/\.mdx$/, "");
    const isoDate = parseISO(filenameWithoutExtension);
    if (isoDate > latestChangelogDate) {
      latestChangelogDate = isoDate;
    }
  }

  const today = new Date();
  // is New if latest changelog date is within 7 days
  const isNew = latestChangelogDate
    ? latestChangelogDate > new Date(today.setDate(today.getDate() - 7))
    : false;

  return (
    <SectionWrapper
      sectionSlug=""
      name={firstMenuSection.name}
      className="w-full mt-4"
    >
      <NavigationAnimatedBackground>
        {firstMenuSection.categoryList.map((category, _index) => (
          <li className="block" data-id={category.slug} key={category.slug}>
            <GlobalNavItem
              Icon={null}
              href={category.href ?? `/${category.slug}`}
              isMobile={false}
              name={category.name}
              tag={category.slug === "changelog" && isNew ? "New" : undefined}
              target={category.href ? "newWindow" : "sameWindow"}
            />
          </li>
        ))}
      </NavigationAnimatedBackground>
    </SectionWrapper>
  );
}
