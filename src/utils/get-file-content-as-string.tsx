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

  // Convert relative path to an absolute path in a controlled manner
  const absolutePath = path.resolve(process.cwd(), filePath);

  try {
    const data = await fs.readFile(absolutePath, "utf-8");
    return data;
  } catch (err) {
    throw new Error(
      `Error reading file from path ${absolutePath}: ${JSON.stringify(err)}`,
    );
  }
}

import { componentCategories } from "../lib/component-categories";

function getComponentPath({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }): string {
  let basePath: null | string = null;

  for (const category of componentCategories) {
    for (const item of category.items) {
      if (item.slug === componentSlug) {
        basePath = `${category.slug}/${item.slug}`;
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
    throw new Error(`Path not found for component ${componentSlug}`);
  }

  return `./src/app/(components)/${basePath}/${variantName}.tsx`;
}
