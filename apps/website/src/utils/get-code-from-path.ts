import { promises as fs } from "node:fs";
import path from "node:path";

export async function readFileContent(
  relativeFilePath: string,
): Promise<string> {
  const absolutePath = path.resolve(
    process.cwd(),
    "../../packages/ui",
    relativeFilePath,
  );

  try {
    const content = await fs.readFile(absolutePath, "utf-8");
    return content;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (err: any) {
    if (err.code === "ENOENT") {
      // File does not exist
      throw new Error(`File not found: ${absolutePath}`);
    }
    // Other types of errors (permissions, etc.)
    throw new Error(`Error reading file ${absolutePath}: ${err.message}`);
  }
}

// Example usage:
// readFileContent("cuicui/application-ui/authentication/half-sided-glassmorphism/default.variant.tsx")
//   .then(content => {
//     console.log("File content:", content);
//   })
//   .catch(err => {
//     console.error(err);
//   });
