"use server";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function getFileContentAsString({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }): Promise<string> {
  // Normalize the input path to remove leading slashes or dots
  const filePath = getComponentPath({ componentSlug, variantName });

  if (!filePath) {
    return "An error occurred while trying to get the file path";
  }

  // Convert relative path to an absolute path in a controlled manner
  const absolutePath = path.resolve(process.cwd(), filePath);

  try {
    const data = await fs.readFile(absolutePath, "utf-8");
    return data;
  } catch (err) {
    return `An error occurred while reading file from path ${absolutePath}:
${JSON.stringify(err)}`;
  }
}

import { SectionsList } from "#/src/lib/cuicui-components/sections-list";

function getComponentPath({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }) {
  let basePath: null | string = null;

  for (const section of SectionsList) {
    for (const category of section.categoriesList) {
      if (category.slug === componentSlug) {
        basePath = `${section.slug}/${category.slug}`;

        break;
      }
    }
    if (basePath) {
      break;
    }
  }

  if (!basePath) {
    return null;
  }

  return `./src/ui/cuicui/${basePath}/${variantName}.tsx`;
}
