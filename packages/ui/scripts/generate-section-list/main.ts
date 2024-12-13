#!/usr/bin/env node
// chmod +x scripts/generate-section-list.ts

import fs from "node:fs";
import path from "node:path";
import {
  discoverSections,
  discoverCategories,
  discoverComponentsAndVariants,
  buildContent,
} from "./builders.ts";

const ROOT_DIR = "./cuicui";
const OUTPUT_FILE_NAME = "new-section-list.ts";

console.log(`Starting script in root directory: ${ROOT_DIR}`);

// Discover structure
const sections = discoverSections(ROOT_DIR);
console.log("Discovered sections:", sections);
const categories = discoverCategories(ROOT_DIR, sections);
const { components, variants } = discoverComponentsAndVariants(
  ROOT_DIR,
  categories,
);

const finalContent = buildContent(sections, categories, components, variants);

// Write the file
try {
  fs.writeFileSync(path.join("./", OUTPUT_FILE_NAME), finalContent.trimStart());
  console.log(`'${OUTPUT_FILE_NAME}' generated successfully!`);
} catch (err) {
  console.error(`Error writing to '${OUTPUT_FILE_NAME}':`, err);
  process.exit(1);
}
