import fs from "node:fs";
import path from "node:path";
import type {
  FoundSection,
  FoundCategory,
  FoundComponent,
  FoundVariant,
} from "./types";
import { toVarName, toVarPrefix, groupBy } from "./file-utils.ts";

const isSection = (fileName: string) => fileName === "section.ts";
const isCategory = (fileName: string) => fileName === "category.ts";
// const isComponent = (fileName: string) => fileName.endsWith(".component.ts");
const isComponent = (fileName: string) => fileName === "component.ts";
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
      const sectionVarName = toVarName(section, "section");
      const withoutExt = removeExtension(sectionFile);
      const importPath = `@/cuicui/${section}/${withoutExt}`;
      sections.push({
        varName: sectionVarName,
        importPath,
        sectionName: section,
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
    const sectionPath = path.join(rootDir, sec.sectionName);
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
        const categoryVarName = toVarName(
          `${sec.sectionName}_${categoryDir}`,
          "category",
        );
        const withoutExt = removeExtension(categoryFile);
        const importPath = `@/cuicui/${sec.sectionName}/${categoryDir}/${withoutExt}`;

        categories.push({
          varName: categoryVarName,
          importPath,
          sectionName: sec.sectionName,
          categoryName: categoryDir,
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
    const categoryPath = path.join(rootDir, cat.sectionName, cat.categoryName);
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
      if (!componentFile) {
        // Not a component directory
        continue;
      }

      const componentVarName = toVarName(
        `${cat.sectionName}_${cat.categoryName}_${componentDir}`,
        "component",
      );
      const componentWithoutExt = removeExtension(componentFile);
      const componentImportPath = `@/cuicui/${cat.sectionName}/${cat.categoryName}/${componentDir}/${componentWithoutExt}`;

      components.push({
        varName: componentVarName,
        importPath: componentImportPath,
        sectionName: cat.sectionName,
        categoryName: cat.categoryName,
        componentName: componentDir,
      });

      // Find variants
      const variantFiles = componentFiles.filter((f) => isVariant(f));
      for (const variantFile of variantFiles) {
        const variantName = variantFile.replace(/\.variant\.tsx?$/, "");
        const variantVarName = toVarName(
          `${cat.sectionName}_${cat.categoryName}_${componentDir}_${variantName}`,
          "variant",
        );
        const variantWithoutExt = removeExtension(variantFile);
        const variantImportPath = `@/cuicui/${cat.sectionName}/${cat.categoryName}/${componentDir}/${variantWithoutExt}`;

        variants.push({
          varName: variantVarName,
          importPath: variantImportPath,
          sectionName: cat.sectionName,
          categoryName: cat.categoryName,
          componentName: componentDir,
          variantName: variantName,
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
import type { NewSectionType } from "@/lib/types/component";
`;

  // Grouping
  const categoriesBySection = groupBy(categories, (c) => c.sectionName);
  const componentsByCategory = groupBy(
    components,
    (c) => `${c.sectionName}/${c.categoryName}`,
  );
  const variantsByComponent = groupBy(
    variants,
    (v) => `${v.sectionName}/${v.categoryName}/${v.componentName}`,
  );

  let content = imports;

  const sectionList: string[] = [];

  for (const sec of sections) {
    const secPrefix = toVarPrefix(sec.sectionName);
    const sectionCategories = categoriesBySection[sec.sectionName] || [];

    const categoryObjects = sectionCategories
      .map((cat) => {
        const catComponents =
          componentsByCategory[`${cat.sectionName}/${cat.categoryName}`] || [];

        const componentObjects = catComponents
          .map((comp) => {
            const compVariants =
              variantsByComponent[
                `${comp.sectionName}/${comp.categoryName}/${comp.componentName}`
              ] || [];
            const variantsArray = compVariants
              .map((v) => v.varName)
              .join(",\n      ");
            return `{
    meta: ${comp.varName},
    variants: [
      ${variantsArray}
    ]
  }`;
          })
          .join(",\n  ");

        return `{
    meta: ${cat.varName},
    components: [
      ${componentObjects}
    ]
  }`;
      })
      .join(",\n  ");

    sectionList.push(`{
    meta: ${sec.varName},
    categories: [
      ${categoryObjects}
    ]
  }`);
  }

  content += `

export const sectionList: NewSectionType[] = [
  ${sectionList.join(",\n  ")}
];
`;

  return content;
}
