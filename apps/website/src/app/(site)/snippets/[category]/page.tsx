import SnippetList from "#/src/app/(site)/snippets/[category]/snippet-list";
import {
  getSnippetsCategories,
  getSnippetsContent,
} from "#/src/app/(site)/snippets/get-snippets-categories";
import type {
  FrontmatterSnippet,
  Snippet,
} from "#/src/app/(site)/snippets/lib/snippets.type";

import { compileMDX } from "next-mdx-remote/rsc";

// Dynamic page component with params
export default async function SnippetsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  // Get all categories, subcategories and snippets
  const categories = await getSnippetsCategories();
  const selectedCategory = categories.find((cat) => cat.slug === category);
  // Get the selected category, subcategory, and snippet from query params
  // Find the selected content based on query params

  const snippetsContentList: Snippet[] = await Promise.all(
    selectedCategory?.subcategories.flatMap((subcategory) =>
      subcategory.snippets.map(async (snippet) => {
        const content = await getSnippetsContent({
          category: selectedCategory.slug,
          subcategory: subcategory.slug,
          snippet: snippet.slug,
        });

        if (content) {
          // To have frontmatter info
          const compiledContent = await compileMDX<FrontmatterSnippet>({
            source: content,
            options: { parseFrontmatter: true },
          });

          return {
            subcategory: subcategory.slug,
            slug: snippet.slug,
            contentString: content,
            compiledContent: compiledContent,
            frontmatter: {
              title: compiledContent.frontmatter.title ?? "",
              description:
                compiledContent.frontmatter.description ?? "No description",
              author: compiledContent.frontmatter.author ?? "Unknown author",
              tags: compiledContent.frontmatter.tags ?? [],
            },
          };
        }

        return null;
      }),
    ) ?? [],
  );

  return <SnippetList snippetsContentList={snippetsContentList} />;
}
