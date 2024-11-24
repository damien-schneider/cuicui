#!/usr/bin/env node
// chmod +x scripts/generate-preview-categories.mjs

import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = "./cuicui"; // Adjust this if your script is not in the root directory
const GENERATED_FILE_NAME = "categories-previews-list.ts";

console.log(`Starting script in root directory: ${ROOT_DIR}`);

// Read all items in the root directory
let items;
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
    const isDir = fs.statSync(sectionPath).isDirectory();
    const isHidden = f.startsWith(".");
    return isDir && !isHidden;
  } catch (err) {
    console.warn(`Unable to access '${sectionPath}':`, err);
    return false;
  }
});

console.log(`Sections (directories) found: ${sections.join(", ")}`);

let imports = "";
let objectEntries = "";

for (const section of sections) {
  console.log(`Processing section: ${section}`);
  const sectionPath = path.join(ROOT_DIR, section);

  let categories;
  try {
    categories = fs.readdirSync(sectionPath).filter((f) => {
      const categoryPath = path.join(sectionPath, f);
      try {
        const isDir = fs.statSync(categoryPath).isDirectory();
        const isHidden = f.startsWith(".");
        return isDir && !isHidden;
      } catch (err) {
        console.warn(`Unable to access '${categoryPath}':`, err);
        return false;
      }
    });
    console.log(`  Categories found in '${section}': ${categories.join(", ")}`);
  } catch (err) {
    console.error(`Error reading section directory '${sectionPath}':`, err);
    continue; // Skip to the next section
  }

  for (const category of categories) {
    console.log(`------ Processing category: ${category} ------\n\n`);
    const categoryPath = path.join(sectionPath, category);
    const previewFilePath = path.join(categoryPath, "preview.tsx");

    if (fs.existsSync(previewFilePath)) {
      console.log("------ Found preview file ------");
      console.log(`------ ${previewFilePath} ------`);
      console.log("--------------------------------\n\n");

      const importName = `${section}_${category}_preview`.replace(/[-]/g, "_");
      const relativePath = path
        .relative(ROOT_DIR, previewFilePath)
        .replace(/\\/g, "/");

      const relativePathWithoutExtension = relativePath.replace(
        /\.[^/.]+$/,
        "",
      );

      imports += `import ${importName} from './cuicui/${relativePathWithoutExtension}';\n`;
      objectEntries += `  '${category}': ${importName},
`;
    } else {
      console.warn(`⚠️⚠️⚠️⚠️⚠️Preview file does not exist: ${previewFilePath}⚠️⚠️⚠️⚠️⚠️`);
    }
  }
}

const output = `${imports}

export const categoriesPreviewsList = {
${objectEntries}
};
`;

try {
  fs.writeFileSync(GENERATED_FILE_NAME, output);
} catch (err) {
  console.error(`Error writing to '${GENERATED_FILE_NAME}':`, err);
  process.exit(1);
}
