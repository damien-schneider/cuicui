"use server";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function getFileContentAsString({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }): Promise<string> {
  // Normalize the input path to remove leading slashes or dots
  const filePath = getComponentPath({ componentSlug, variantName });
  // console.log("\nHere is the filePath found :\n", filePath);

  if (!filePath) {
    //TODO Write a test for this by looping through the categoriesList and checking that the code get from the file is not "An error occurred while trying to get the file path"
    console.error(`Path not found for component ${componentSlug}`);
    return "An error occurred while trying to get the file path";
    // throw new Error(`Path not found for component ${componentSlug}`);
  }

  // Convert relative path to an absolute path in a controlled manner
  const absolutePath = path.resolve(process.cwd(), filePath);

  try {
    const data = await fs.readFile(absolutePath, "utf-8");
    return data;
  } catch (err) {
    // throw new Error(
    //   `Error reading file from path ${absolutePath}: ${JSON.stringify(err)}`,
    // );
    return `Error reading file from path ${absolutePath}:
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
        // console.log(
        //   "\nHere is the basePath found where slug = slug:\n",
        //   basePath,
        // );
        break;
      }
    }
    if (basePath) {
      break;
    }
  }

  if (!basePath) {
    return null;
    // throw new Error(`Path not found for component ${componentSlug}`);
  }

  return `./src/app/(components)/${basePath}/${variantName}.tsx`;
}
