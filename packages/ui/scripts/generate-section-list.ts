#!/usr/bin/env node
// chmod +x scripts/generate-section-list.ts

import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = "./cuicui";
const OUTPUT_FILE_NAME = "section-list.ts";

console.log(`Starting script in root directory: ${ROOT_DIR}`);

let items: string[];

try {
  items = fs.readdirSync(ROOT_DIR);
  console.log(`Items found in root directory: ${items.join(", ")}`);
} catch (err) {
  console.error(`Error reading root directory '${ROOT_DIR}':`, err);
  process.exit(1);
}

// Filter to get only directories, excluding those that start with '.'
const sections = items.filter((f) => {
  const sectionPath = path.join(ROOT_DIR, f);
  try {
    const stat = fs.statSync(sectionPath);
    const isDir = stat.isDirectory();
    const isHidden = f.startsWith(".");
    return isDir && !isHidden;
  } catch {
    return false;
  }
});

console.log(`Sections (directories) found: ${sections.join(", ")}`);

interface FoundItem {
  varName: string;
  importPath: string;
}

interface FoundSection extends FoundItem {
  sectionName: string;
}

interface FoundCategory extends FoundItem {
  sectionName: string;
  categoryName: string;
}

interface FoundComponent extends FoundItem {
  sectionName: string;
  categoryName: string;
  componentName: string;
}

interface FoundVariant extends FoundItem {
  sectionName: string;
  categoryName: string;
  componentName: string;
  variantName: string;
}

const foundSections: FoundSection[] = [];
const foundCategories: FoundCategory[] = [];
const foundComponents: FoundComponent[] = [];
const foundVariants: FoundVariant[] = [];

for (const section of sections) {
  const sectionPath = path.join(ROOT_DIR, section);

  let files: string[] = [];
  try {
    files = fs.readdirSync(sectionPath);
  } catch {
    console.warn(`Cannot read section directory: ${sectionPath}`);
    continue;
  }

  // Find section meta
  const sectionFile = files.find((f) => f === "section.ts");
  if (!sectionFile) {
    console.log(
      `No section file found in '${section}'. Skipping this section.`,
    );
    continue;
  }

  const sectionVarName = toVarName(section, "section");
  const sectionWithoutExt = sectionFile.replace(/\.ts$/, "");
  const sectionImportPath = `@/cuicui/${section}/${sectionWithoutExt}`;

  foundSections.push({
    varName: sectionVarName,
    importPath: sectionImportPath,
    sectionName: section,
  });

  // Find categories
  const categoryDirs = listSubdirectories(sectionPath);
  for (const categoryDir of categoryDirs) {
    const categoryPath = path.join(sectionPath, categoryDir);
    let categoryFiles: string[] = [];
    try {
      categoryFiles = fs.readdirSync(categoryPath);
    } catch {
      console.warn(`Cannot read category directory: ${categoryPath}`);
      continue;
    }

    const categoryFile = categoryFiles.find((f) => f === "category.ts");
    if (!categoryFile) {
      // No category file here, skip
      continue;
    }

    const categoryVarName = toVarName(`${section}_${categoryDir}`, "category");
    const categoryWithoutExt = categoryFile.replace(/\.ts$/, "");
    const categoryImportPath = `@/cuicui/${section}/${categoryDir}/${categoryWithoutExt}`;

    foundCategories.push({
      varName: categoryVarName,
      importPath: categoryImportPath,
      sectionName: section,
      categoryName: categoryDir,
    });

    // Find components inside this category
    const componentDirs = listSubdirectories(categoryPath);
    for (const componentDir of componentDirs) {
      const componentPath = path.join(categoryPath, componentDir);
      let componentFiles: string[] = [];
      try {
        componentFiles = fs.readdirSync(componentPath);
      } catch {
        console.warn(`Cannot read component directory: ${componentPath}`);
        continue;
      }

      // Find a *.component.ts file
      const componentFile = componentFiles.find((f) =>
        f.endsWith(".component.ts"),
      );
      if (!componentFile) {
        // No component file, skip
        continue;
      }

      const componentVarName = toVarName(
        `${section}_${categoryDir}_${componentDir}`,
        "component",
      );
      const componentWithoutExt = componentFile.replace(/\.ts$/, "");
      const componentImportPath = `@/cuicui/${section}/${categoryDir}/${componentDir}/${componentWithoutExt}`;

      foundComponents.push({
        varName: componentVarName,
        importPath: componentImportPath,
        sectionName: section,
        categoryName: categoryDir,
        componentName: componentDir,
      });

      // Find variants (preview files)
      const variantFiles = componentFiles.filter((f) =>
        f.endsWith(".preview.ts"),
      );
      for (const variantFile of variantFiles) {
        const variantName = variantFile.replace(/\.preview\.ts$/, "");
        // variantName might be something like "preview-variant1"
        const cleanVariantName = variantName.replace(/^preview\-/, ""); // remove prefix if exists
        const variantVarName = toVarName(
          `${section}_${categoryDir}_${componentDir}_${cleanVariantName}`,
          "preview",
        );
        const variantWithoutExt = variantFile.replace(/\.ts$/, "");
        const variantImportPath = `@/cuicui/${section}/${categoryDir}/${componentDir}/${variantWithoutExt}`;

        foundVariants.push({
          varName: variantVarName,
          importPath: variantImportPath,
          sectionName: section,
          categoryName: categoryDir,
          componentName: componentDir,
          variantName: cleanVariantName,
        });
      }
    }
  }
}

// Sort all found items
foundSections.sort((a, b) => a.varName.localeCompare(b.varName));
foundCategories.sort((a, b) => a.varName.localeCompare(b.varName));
foundComponents.sort((a, b) => a.varName.localeCompare(b.varName));
foundVariants.sort((a, b) => a.varName.localeCompare(b.varName));

// Build imports
let imports = "";
for (const sec of foundSections) {
  imports += `import ${sec.varName} from "${sec.importPath}";\n`;
}
for (const cat of foundCategories) {
  imports += `import ${cat.varName} from "${cat.importPath}";\n`;
}
for (const comp of foundComponents) {
  imports += `import ${comp.varName} from "${comp.importPath}";\n`;
}
for (const v of foundVariants) {
  imports += `import ${v.varName} from "${v.importPath}";\n`;
}

imports += `
import type {
  NewComponentType,
  NewSectionType,
  NewCategoryType,
} from "@/lib/types/component";
`;

// Group by section
const categoriesBySection = groupBy(foundCategories, (c) => c.sectionName);
const componentsByCategory = groupBy(
  foundComponents,
  (c) => `${c.sectionName}/${c.categoryName}`,
);
const variantsByComponent = groupBy(
  foundVariants,
  (v) => `${v.sectionName}/${v.categoryName}/${v.componentName}`,
);

// For each section, we create a `<sectionVarPrefix>_categories` array
// For each category, we create a `<sectionVarPrefix>_<categoryName>_components` array
// For each component, we directly inline the variants array (no separate variable)

let content = imports;

// Create arrays for categories and components
for (const sec of foundSections) {
  const secPrefix = toVarPrefix(sec.sectionName);
  const sectionCategories = categoriesBySection[sec.sectionName] || [];

  // For each category in this section, create components array
  for (const cat of sectionCategories) {
    const catComponents =
      componentsByCategory[`${cat.sectionName}/${cat.categoryName}`] || [];

    // For each component, create variants array inline
    const componentsArray = catComponents
      .map((comp) => {
        const compVariants =
          variantsByComponent[
            `${comp.sectionName}/${comp.categoryName}/${comp.componentName}`
          ] || [];
        return `{
    meta: ${comp.varName},
    variants: [
      ${compVariants.map((v) => v.varName).join(",\n      ")}
    ]
  }`;
      })
      .join(",\n  ");

    const categoryArrayVar = toVarName(
      `${cat.sectionName}_${cat.categoryName}`,
      "components",
    );
    content += `

export const ${categoryArrayVar}: NewComponentType = [
  ${componentsArray}
];`;
  }

  // Now create the categories array for this section
  const categoriesArray = sectionCategories
    .map((cat) => {
      const categoryComponentsVar = toVarName(
        `${cat.sectionName}_${cat.categoryName}`,
        "components",
      );
      return `{
    meta: ${cat.varName},
    components: ${categoryComponentsVar}
  }`;
    })
    .join(",\n  ");

  const categoriesArrayVar = `${secPrefix}_categories`;
  content += `

export const ${categoriesArrayVar}: NewCategoryType = [
  ${categoriesArray}
];`;
}

// Finally, create the sectionList
const sectionList = foundSections
  .map((sec) => {
    const secPrefix = toVarPrefix(sec.sectionName);
    const categoriesArrayVar = `${secPrefix}_categories`;
    return `{
    meta: ${sec.varName},
    categories: ${categoriesArrayVar}
  }`;
  })
  .join(",\n  ");

content += `

export const newSectionList: NewSectionType = [
  ${sectionList}
];
`;

// Write the file
try {
  fs.writeFileSync(OUTPUT_FILE_NAME, content.trimStart());
  console.log(`'${OUTPUT_FILE_NAME}' generated successfully!`);
} catch (err) {
  console.error(`Error writing to '${OUTPUT_FILE_NAME}':`, err);
  process.exit(1);
}

function listSubdirectories(dir: string): string[] {
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return entries.filter((f) => {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    return stat.isDirectory() && !f.startsWith(".");
  });
}

// Convert a path like application-ui to a var prefix: application_ui
function toVarPrefix(name: string): string {
  return name.split("-").join("_");
}

// Convert full pattern into var name
// typeSuffix could be "section", "category", "component", "preview", "components"
function toVarName(base: string, typeSuffix: string): string {
  return `${base.split("-").join("_")}_${typeSuffix}`;
}

function groupBy<T>(arr: T[], keyFn: (x: T) => string): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const k = keyFn(item);
      if (!acc[k]) {
        acc[k] = [];
      }
      acc[k].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}
