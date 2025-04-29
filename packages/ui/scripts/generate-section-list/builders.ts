import fs from "node:fs";
import path from "node:path";
import type {
  FoundSection,
  FoundCategory,
  FoundComponent,
  FoundVariant,
} from "./types";
import { toVarName, groupBy } from "./file-utils.ts";

const variantExtensionRegex = /\.variant\.[jt]sx?$/;
const isSection = (fileName: string) => fileName === "section.json";
const isCategory = (fileName: string) => fileName === "category.json";
const isComponent = (fileName: string) => fileName === "component.json";
const isVariant = (fileName: string) =>
  fileName.endsWith(".variant.ts") || fileName.endsWith(".variant.tsx");

const extensionRegex = /\.[jt]sx?$/;

const removeExtension = (fileName: string) =>
  fileName.replace(extensionRegex, "");

/**
 * Discover all sections (level 1).
 * A section directory must contain a "section.ts" file.
 */
export function discoverSections(rootDir: string): FoundSection[] {
  const sections: FoundSection[] = [];
  const sectionDirs = fs.readdirSync(rootDir).filter((f) => {
    const p = path.join(rootDir, f);
    return fs.statSync(p).isDirectory() && !f.startsWith(".");
  });

  for (const section of sectionDirs) {
    const sectionPath = path.join(rootDir, section);
    let files: string[];
    try {
      files = fs.readdirSync(sectionPath);
    } catch {
      continue;
    }
    const sectionFile = files.find((file) => isSection(file));
    if (sectionFile) {
      const sectionData = JSON.parse(
        fs.readFileSync(path.join(sectionPath, sectionFile), "utf-8"),
      );
      sections.push({
        varName: toVarName(section, "section"),
        importPath: `@/cuicui/${section}/section`,
        sectionSlug: section,
        filename: sectionFile,
        pathname: path.join(sectionPath, sectionFile),
        meta: sectionData.meta,
      });
    }
  }

  return sections;
}

/**
 * Given a section, discover categories (level 2).
 * A category directory must contain "category.ts".
 */
export function discoverCategories(
  rootDir: string,
  sections: FoundSection[],
): FoundCategory[] {
  const categories: FoundCategory[] = [];

  for (const sec of sections) {
    const sectionPath = path.join(rootDir, sec.sectionSlug);
    const categoryDirs = fs.readdirSync(sectionPath).filter((f) => {
      const p = path.join(sectionPath, f);
      return fs.statSync(p).isDirectory() && !f.startsWith(".");
    });

    for (const categoryDir of categoryDirs) {
      const categoryPath = path.join(sectionPath, categoryDir);
      let categoryFiles: string[];
      try {
        categoryFiles = fs.readdirSync(categoryPath);
      } catch {
        continue;
      }

      const categoryFile = categoryFiles.find((f) => isCategory(f));
      if (categoryFile) {
        const categoryData = JSON.parse(
          fs.readFileSync(path.join(categoryPath, categoryFile), "utf-8"),
        );
        categories.push({
          varName: toVarName(`${sec.sectionSlug}_${categoryDir}`, "category"),
          importPath: `@/cuicui/${sec.sectionSlug}/${categoryDir}/category`,
          sectionSlug: sec.sectionSlug,
          categorySlug: categoryDir,
          filename: categoryFile,
          pathname: path.join(categoryPath, categoryFile),
          meta: categoryData.meta,
        });
      }
    }
  }

  return categories;
}

/**
 * Given categories, discover components (level 3).
 * A component directory must contain a ".component.ts" file.
 * Variants are files ending with ".variant.ts" or ".variant.tsx".
 */
export function discoverComponentsAndVariants(
  rootDir: string,
  categories: FoundCategory[],
): { components: FoundComponent[]; variants: FoundVariant[] } {
  const components: FoundComponent[] = [];
  const variants: FoundVariant[] = [];

  for (const cat of categories) {
    const categoryPath = path.join(rootDir, cat.sectionSlug, cat.categorySlug);
    const componentDirs = fs.readdirSync(categoryPath).filter((f) => {
      const p = path.join(categoryPath, f);
      return fs.statSync(p).isDirectory() && !f.startsWith(".");
    });

    for (const componentDir of componentDirs) {
      const componentPath = path.join(categoryPath, componentDir);
      let componentFiles: string[];
      try {
        componentFiles = fs.readdirSync(componentPath);
      } catch {
        continue;
      }

      const componentFile = componentFiles.find((f) => isComponent(f));
      if (!componentFile) continue;

      const componentData = JSON.parse(
        fs.readFileSync(path.join(componentPath, componentFile), "utf-8"),
      );

      components.push({
        varName: toVarName(
          `${cat.sectionSlug}_${cat.categorySlug}_${componentDir}`,
          "component",
        ),
        importPath: `@/cuicui/${cat.sectionSlug}/${cat.categorySlug}/${componentDir}/component`,
        sectionSlug: cat.sectionSlug,
        categorySlug: cat.categorySlug,
        componentSlug: componentDir,
        filename: componentFile,
        pathname: path.join(componentPath, componentFile),
        meta: componentData.meta,
      });

      // Add variants from the JSON
      for (const variant of componentData.variants) {
        variants.push({
          varName: toVarName(
            `${cat.sectionSlug}_${cat.categorySlug}_${componentDir}_${variant.slug}`,
            "variant",
          ),
          importPath: `@/cuicui/${cat.sectionSlug}/${cat.categorySlug}/${componentDir}/${variant.slug}.variant`,
          sectionSlug: cat.sectionSlug,
          categorySlug: cat.categorySlug,
          componentSlug: componentDir,
          variantSlug: variant.slug,
          filename: `${variant.slug}.variant.tsx`,
          pathname: variant.pathname,
        });
      }
    }
  }

  return { components, variants };
}

/**
 * Build the final structures and generate the content for section-list.ts
 */
export function buildContent(
  sections: FoundSection[],
  categories: FoundCategory[],
  components: FoundComponent[],
  variants: FoundVariant[],
): string {
  // Sort all
  console.log("\n---------- SECTIONS ----------\n");
  console.log(sections);
  console.log("\n---------- CATEGORIES ----------\n");
  console.log(categories);
  console.log("\n---------- COMPONENTS ----------\n");
  console.log(components);
  console.log("\n---------- VARIANTS ----------\n");
  console.log(variants);
  sections.sort((a, b) => a.varName.localeCompare(b.varName));
  categories.sort((a, b) => a.varName.localeCompare(b.varName));
  components.sort((a, b) => a.varName.localeCompare(b.varName));
  variants.sort((a, b) => a.varName.localeCompare(b.varName));

  let imports = "";

  for (const sec of sections) {
    imports += `import ${sec.varName} from "${sec.importPath}";\n`;
  }
  for (const cat of categories) {
    imports += `import ${cat.varName} from "${cat.importPath}";\n`;
  }
  for (const comp of components) {
    imports += `import ${comp.varName} from "${comp.importPath}";\n`;
  }
  for (const v of variants) {
    imports += `import ${v.varName} from "${v.importPath}";\n`;
  }

  imports += `
import type { SectionType } from "@/lib/types/component";`;

  // Grouping
  const categoriesBySection = groupBy(categories, (c) => c.sectionSlug);
  const componentsByCategory = groupBy(
    components,
    (c) => `${c.sectionSlug}/${c.categorySlug}`,
  );
  const variantsByComponent = groupBy(
    variants,
    (v) => `${v.sectionSlug}/${v.categorySlug}/${v.componentSlug}`,
  );

  let content = imports;

  const sectionList: string[] = [];

  for (const sec of sections) {
    // const secPrefix = toVarPrefix(sec.sectionSlug);
    const sectionCategories = categoriesBySection[sec.sectionSlug] || [];

    const categoryObjects = sectionCategories
      .map((cat) => {
        const catComponents =
          componentsByCategory[`${cat.sectionSlug}/${cat.categorySlug}`] || [];

        const componentObjects = catComponents
          .map((comp) => {
            const compVariants =
              variantsByComponent[
                `${comp.sectionSlug}/${comp.categorySlug}/${comp.componentSlug}`
              ] || [];
            const variantsArray: string[] = [];
            for (const v of compVariants) {
              variantsArray.push(`{
        name: "${v.variantSlug}",
        variantComponent: ${v.varName},
        slug: "${v.variantSlug}",
        pathname: "${v.pathname}",
      }`);
            }
            // const variantsArray = compVariants
            //   .map((v) => v.varName)
            //   .join(",\n      ");
            return `{
    meta: ${comp.varName},
    slug: "${comp.componentSlug}",
    variants: [
      ${variantsArray}
    ]
  }`;
          })
          .join(",\n  ");

        return `{
    meta: ${cat.varName},
    slug: "${cat.categorySlug}",
    components: [
      ${componentObjects}
    ]
  }`;
      })
      .join(",\n  ");

    sectionList.push(`{
    meta: ${sec.varName},
    slug: "${sec.sectionSlug}",
    categories: [
      ${categoryObjects}
    ]
  }`);
  }

  content += `

export const sectionList: SectionType[] = [
  ${sectionList.join(",\n  ")}
];
`;

  return content;
}
