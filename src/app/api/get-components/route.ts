// app/api/get-components/route.ts

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  extractCategories,
  extractComponents,
  extractVariants,
} from "#/src/app/api/get-components/get-components.utils";

export type FileSystemNode = {
  name: string;
  path: string;
  type: "file" | "directory";
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  config?: any;
  children?: FileSystemNode[];
};

function getDirectoryTree(dirPath: string): FileSystemNode {
  const stats = statSync(dirPath);
  const name = dirPath.split("/").pop() ?? dirPath;
  const node: FileSystemNode = {
    name,
    path: dirPath,
    type: stats.isDirectory() ? "directory" : "file",
  };

  if (stats.isDirectory()) {
    // Check for config.json in the directory
    const configPath = join(dirPath, "config.json");
    if (existsSync(configPath)) {
      const configContent = readFileSync(configPath, "utf-8");
      try {
        node.config = JSON.parse(configContent);
      } catch (_error) {
        // Ignore invalid JSON
      }
    }

    // Recursively read children
    node.children = readdirSync(dirPath)
      .filter((childName) => childName !== "config.json") // Exclude config.json from children
      .map((childName) => {
        return getDirectoryTree(join(dirPath, childName));
      });
  }

  return node;
}

export function GET() {
  const basePath = join(process.cwd(), "src/ui/cuicui");
  const tree = getDirectoryTree(basePath);

  // Optionally, you can process the tree to extract categories, components, and variants
  const categories = extractCategories(tree);
  const components = extractComponents(tree);
  const variants = extractVariants(tree);
  return Response.json({ categories, components, variants, tree });
}
