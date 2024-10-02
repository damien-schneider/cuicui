"use server";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function getFileContentAsString({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }): Promise<string> {
  // Normalize the input path to remove leading slashes or dots

  const filePath = getComponentPath({
    componentSlug,
    variantName,
  });

  if (!filePath) {
    return "An error occurred while trying to get the file path";
  }

  // Convert relative path to an absolute path in a controlled manner
  const absolutePathWithoutExtension = path.resolve(
    process.cwd(),
    `${filePath}`,
  );
  let fileContent = await GetFileContentFromPathWithoutExtension(
    absolutePathWithoutExtension,
    "ts",
  );
  if (!fileContent) {
    fileContent = await GetFileContentFromPathWithoutExtension(
      absolutePathWithoutExtension,
      "tsx",
    );
  }

  if (fileContent) {
    return fileContent;
  }
  return `An error occurred while reading file from path ${absolutePathWithoutExtension}`;
}

async function GetFileContentFromPathWithoutExtension(
  path: string,
  extension: "ts" | "tsx",
) {
  const pathWithExtension = `${path}.${extension}`;

  try {
    const data = await fs.readFile(pathWithExtension, "utf-8");
    return data;
  } catch (_err) {
    return null;
  }
}

import { SectionsList } from "#/src/lib/cuicui-components/sections-list";

function getComponentPath({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }) {
  let basePath: null | string = null;

  for (const section of SectionsList) {
    if (section.type === "page") {
      continue;
    }
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

  return `./src/ui/cuicui/${basePath}/${variantName}`;
}
