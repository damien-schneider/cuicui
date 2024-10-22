#!/usr/bin/env node
// chmod +x scripts/generate-package-list-check.js

const fs = require("node:fs");
const path = require("node:path");

// Define the path to package.json
const packageJsonPath = path.resolve(process.cwd(), "package.json");

// Define the output TypeScript file path inside ./src/lib/
const outputDirectory = path.resolve(process.cwd(), "src", "lib");
const outputTsPath = path.join(
	outputDirectory,
	"generated-package-check-list-to-install.ts",
);

const importStatement = `import type { PackageToInstallType } from "#/src/components/steps-to-install/packages";\n`;
const commentStatement =
	"// This is an automated generated file with the ./scripts/generate-package-list-check.ts script\n";

// biome-ignore lint/style/noUnusedTemplateLiteral: <We need template litterals in the final file>
const exportStatementStart = `export const packageCheckListToInstall: PackageToInstallType[] = [`;

// biome-ignore lint/style/noUnusedTemplateLiteral: <We need template litterals in the final file>
const exportStatementEnd = `];\n`;

// Function to escape double quotes in strings
const escapeDoubleQuotes = (str) => str.replace(/"/g, '\\"');

try {
	// Ensure the output directory exists; if not, create it
	if (!fs.existsSync(outputDirectory)) {
		fs.mkdirSync(outputDirectory, { recursive: true });
	}

	// Read and parse package.json
	const packageJsonData = fs.readFileSync(packageJsonPath, "utf-8");
	const packageJson = JSON.parse(packageJsonData);

	// Extract dependencies and devDependencies
	const dependencies = packageJson.dependencies || {};
	const devDependencies = packageJson.devDependencies || {};

	// Combine both dependencies and devDependencies
	const allPackages = { ...dependencies, ...devDependencies };

	// Optionally, you can categorize packages or add comments
	// For simplicity, we'll just list all packages together

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
