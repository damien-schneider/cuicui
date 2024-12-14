"use server";
import { sectionList as newSectionList } from "@/new-section-list";
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

function getComponentPath({
  componentSlug,
  variantName,
}: { componentSlug: string; variantName: string }) {
  let basePath: null | string = null;

  for (const section of newSectionList) {
    for (const category of section.categories) {
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

  return `../../packages/ui/cuicui/${basePath}/${variantName}`;
}
