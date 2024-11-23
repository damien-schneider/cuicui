#!/usr/bin/env node
// chmod +x scripts/generate-package-list-check.js

import fs from "node:fs";
import path from "node:path";

// Define the paths to package.json files
const packageJsonPath = path.resolve(process.cwd(), "package.json");
const cuicuiPackageJsonPath = path.resolve(
  process.cwd(),
  "../../packages/ui/package.json",
);

// Define the output TypeScript file path inside ./src/lib/
const outputDirectory = path.resolve(process.cwd(), "src", "lib");
const outputTsPath = path.join(
  outputDirectory,
  "generated-package-check-list-to-install.ts",
);

const importStatement = `import type { PackageToInstallType } from "#/src/components/steps-to-install/packages";\n`;
const commentStatement =
  "// This is an automatically generated file with the ./scripts/generate-package-list-check.ts script\n";

// biome-ignore lint/style/noUnusedTemplateLiteral: <We need template literals in the final file>
const exportStatementStart = `export const packageCheckListToInstall: PackageToInstallType[] = [`;

// biome-ignore lint/style/noUnusedTemplateLiteral: <We need template literals in the final file>
const exportStatementEnd = `];\n`;

// Function to escape double quotes in strings
const escapeDoubleQuotes = (str) => str.replace(/"/g, '\\"');

try {
  // Ensure the output directory exists; if not, create it
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  // Read and parse main package.json
  const packageJsonData = fs.readFileSync(packageJsonPath, "utf-8");
  const packageJson = JSON.parse(packageJsonData);

  // Read and parse cuicui ui package.json
  const cuicuiPackageJsonData = fs.readFileSync(cuicuiPackageJsonPath, "utf-8");
  const cuicuiPackageJson = JSON.parse(cuicuiPackageJsonData);

  // Extract dependencies and devDependencies from main package.json
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  // Extract dependencies and devDependencies from cuicui ui package.json
  const cuicuiDependencies = cuicuiPackageJson.dependencies || {};
  const cuicuiDevDependencies = cuicuiPackageJson.devDependencies || {};

  // Combine all dependencies and devDependencies from both package.json files
  const allPackages = {
    ...dependencies,
    ...devDependencies,
    ...cuicuiDependencies,
    ...cuicuiDevDependencies,
  };

  // Generate the checklist array as TypeScript objects
  const packageCheckListToInstall = Object.keys(allPackages).map((pkg) => {
    return `  {
    find: [\`from "${escapeDoubleQuotes(pkg)}"\`],
    packageName: "${pkg}",
  },`;
  });

  // Combine all parts to form the complete TypeScript file content
  const tsFileContent = [
    commentStatement,
    importStatement,
    exportStatementStart,
    ...packageCheckListToInstall,
    exportStatementEnd,
  ].join("\n");

  // Write the TypeScript file
  fs.writeFileSync(outputTsPath, tsFileContent, "utf-8");
} catch (_error) {
  process.exit(1);
}
