"use server";
// app/snippets/page.tsx
import { promises as fs } from "node:fs";
import path from "node:path";

type CategoryDirectory = {
  slug: string;
  subcategories: SubcategoryDirectory[];
};

type SubcategoryDirectory = {
  slug: string;
  snippets: Snippet[];
};

type Snippet = {
  slug: string;
  path: string;
};

// Helper function to get all categories, subcategories and snippets
export async function getSnippetsCategories(): Promise<CategoryDirectory[]> {
  const snippetsDirectory = path.join(process.cwd(), "../../packages/snippets");
  const categoryEntries = await fs.readdir(snippetsDirectory, {
    withFileTypes: true,
  });

  const categories = await Promise.all(
    categoryEntries
      .filter((entry) => entry.isDirectory())
      .map(async (category) => {
        const categoryPath = path.join(snippetsDirectory, category.name);
        const subcategoryEntries = await fs.readdir(categoryPath, {
          withFileTypes: true,
        });

        const subcategories = await Promise.all(
          subcategoryEntries
            .filter((entry) => entry.isDirectory())
            .map(async (subcategory) => {
              const subcategoryPath = path.join(categoryPath, subcategory.name);
              const snippetFiles = await fs.readdir(subcategoryPath);

              const snippets = snippetFiles
                .filter((file) => file.endsWith(".md"))
                .map((file) => ({
                  slug: file.replace(".md", ""),
                  path: `${category.name}/${subcategory.name}/${file}`,
                }));

              return {
                slug: subcategory.name,
                snippets,
              };
            }),
        );

        return {
          slug: category.name,
          subcategories,
        };
      }),
  );

  return categories;
}

export async function getSnippetsContent({
  category,
  subcategory,
  snippet,
}: {
  category: string;
  subcategory: string;
  snippet: string;
}) {
  const snippetsDirectory = path.join(process.cwd(), "../../packages/snippets");
  const snippetPath = path.join(
    snippetsDirectory,
    category,
    subcategory,
    `${snippet}.md`,
  );

  try {
    const content = await fs.readFile(snippetPath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error loading snippet: ${snippetPath}`, error);
    return null;
  }
}
