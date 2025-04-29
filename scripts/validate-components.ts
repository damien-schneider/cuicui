import fs from "node:fs";
import { validate } from "jsonschema";
import { glob } from "glob";

const componentSchema = {
  type: "object",
  properties: {
    meta: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        isResizable: { type: "boolean" },
        componentBadges: { type: "array", items: { type: "string" } },
        isIframed: { type: "boolean" },
        rerenderButton: { type: "boolean" },
        inspiration: { type: "string" },
        inspirationLink: { type: "string" },
        sizePreview: { type: "string", enum: ["xs", "sm", "md", "lg", "xl"] },
      },
      required: ["name", "description"],
    },
    slug: { type: "string" },
    variants: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          slug: { type: "string" },
          pathname: { type: "string" },
        },
        required: ["name", "slug", "pathname"],
      },
    },
  },
  required: ["meta", "slug", "variants"],
};

async function validateComponents() {
  const componentFiles = await glob("packages/ui/cuicui/**/component.json");
  let hasErrors = false;

  for (const file of componentFiles) {
    try {
      const content = JSON.parse(fs.readFileSync(file, "utf-8"));
      const result = validate(content, componentSchema);

      if (!result.valid) {
        hasErrors = true;
        console.error(`Validation failed for ${file}:`);
        result.errors.forEach((error) => {
          console.error(`- ${error.message}`);
        });
      }
    } catch (error) {
      hasErrors = true;
      console.error(`Error reading ${file}:`, error);
    }
  }

  if (hasErrors) {
    process.exit(1);
  }
}

validateComponents().catch(console.error);
