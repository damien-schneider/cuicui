import fs from "node:fs";
import path from "node:path";
import { glob } from "glob";

interface ComponentMeta {
  name: string;
  description: string;
  isResizable?: boolean;
  componentBadges?: string[];
  isIframed?: boolean;
  rerenderButton?: boolean;
  inspiration?: string;
  inspirationLink?: string;
  sizePreview?: string;
}

interface ComponentJson {
  meta: ComponentMeta;
  slug: string;
  variants: {
    name: string;
    slug: string;
    pathname: string;
  }[];
}

async function migrateComponent(componentPath: string) {
  // Read the component.ts file
  const componentContent = fs.readFileSync(componentPath, "utf-8");

  // Extract the component meta using regex
  const metaMatch = componentContent.match(
    /export const \w+: ComponentMetaType = ({[\s\S]*?});/,
  );
  if (!metaMatch) return;

  // Safely parse the meta object without using eval
  const metaStr = metaMatch[1]
    .replace(/(\w+):/g, '"$1":') // Convert keys to strings
    .replace(/'/g, '"'); // Convert single quotes to double quotes
  const meta = JSON.parse(metaStr) as ComponentMeta;

  // Get the component directory and slug
  const componentDir = path.dirname(componentPath);
  const slug = path.basename(componentDir);

  // Find variant files
  const variantFiles = fs
    .readdirSync(componentDir)
    .filter((f) => f.endsWith(".variant.ts") || f.endsWith(".variant.tsx"));

  const variants = variantFiles.map((variantFile) => {
    const variantName = path
      .basename(variantFile, path.extname(variantFile))
      .replace(".variant", "");
    return {
      name: variantName.charAt(0).toUpperCase() + variantName.slice(1),
      slug: variantName,
      pathname: `/components/${path.relative("packages/ui/cuicui", componentDir)}/${variantName}`,
    };
  });

  // Create the JSON structure
  const componentJson: ComponentJson = {
    meta,
    slug,
    variants,
  };

  // Write the JSON file
  const jsonPath = path.join(componentDir, "component.json");
  fs.writeFileSync(jsonPath, JSON.stringify(componentJson, null, 2));

  console.log(`Migrated ${componentPath} to ${jsonPath}`);
}

async function migrateAllComponents() {
  const componentFiles = await glob("packages/ui/cuicui/**/component.ts");

  for (const componentFile of componentFiles) {
    await migrateComponent(componentFile);
  }
}

migrateAllComponents().catch(console.error);
