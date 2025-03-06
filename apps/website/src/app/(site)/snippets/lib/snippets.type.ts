import type { CompileMDXResult } from "next-mdx-remote/rsc";

export type Snippet = {
  subcategory: string;
  slug: string;
  contentString: string;
  compiledContent: CompileMDXResult<Record<string, unknown>>;
  frontmatter: FrontmatterSnippet;
} | null;

export type FrontmatterSnippet = {
  title: string;
  description: string;
  author: string;
  tags: string;
};
