import { promises as fs } from "node:fs";
import path from "node:path";

const UI_ROOT = "../../packages/ui";
const tryExtensions = [
  ".tsx",
  ".ts",
  ".js",
  ".jsx",
  ".css",
  ".json",
  ".mjs",
  ".cjs",
  "/index.tsx",
  "/index.ts",
  "/index.js",
  "/index.jsx",
  "/index.css",
  "/index.json",
];

export async function readFileContent(
  relativeFilePath: string,
): Promise<string> {
  const absolutePath = path.resolve(process.cwd(), UI_ROOT, relativeFilePath);

  // Debug: log the path we're trying to read
  // console.log("Attempting to read file:", absolutePath);

  try {
    const content = await fs.readFile(absolutePath, "utf-8");
    return content;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (err: any) {
    if (err.code === "ENOENT") {
      throw new Error(`File not found: ${absolutePath}`);
    }
    throw new Error(`Error reading file ${absolutePath}: ${err.message}`);
  }
}

async function fileExists(relativeFilePath: string): Promise<boolean> {
  const absolutePath = path.resolve(process.cwd(), UI_ROOT, relativeFilePath);
  try {
    await fs.access(absolutePath);
    return true;
  } catch {
    return false;
  }
}

async function findExistingFile(filePathNoPrefix: string): Promise<{
  filePathWithExtension: string;
  fileName: string;
  fileNameWithoutExtension: string;
}> {
  const pathSegments = filePathNoPrefix.split("/");
  const fileNameWithoutExtension = pathSegments[pathSegments.length - 1];

  for (const ext of tryExtensions) {
    const candidatePath = `${filePathNoPrefix}${ext}`;
    // console.log("Checking for file:", candidatePath);
    if (await fileExists(candidatePath)) {
      const fileName = `${fileNameWithoutExtension}${ext}`;
      return {
        filePathWithExtension: candidatePath,
        fileName,
        fileNameWithoutExtension,
      };
    }
  }

  throw new Error(
    `No suitable file found for: ${filePathNoPrefix} with any of the extensions ${tryExtensions.join(", ")}`,
  );
}

export async function getCuicuiDependenciesInfo(code: string) {
  const importRegex =
    /(import\s+[\s\S]*?from\s+["'](@\/cuicui\/[^"']+)["'];?)/g;
  const results: {
    importLine: string;
    content: string;
    filePathNoPrefix: string;
    filePathWithExtension: string;
    fileName: string;
    fileNameWithoutExtension: string;
  }[] = [];

  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  while ((match = importRegex.exec(code)) !== null) {
    const importLine = match[1];
    const fullPath = match[2];

    const filePathNoPrefix = fullPath.replace(/^@\//, "");

    const { filePathWithExtension, fileName, fileNameWithoutExtension } =
      await findExistingFile(filePathNoPrefix);

    const fileContent = await readFileContent(filePathWithExtension);

    results.push({
      importLine,
      content: fileContent,
      filePathNoPrefix,
      filePathWithExtension,
      fileName,
      fileNameWithoutExtension,
    });
  }

  return results;
}
