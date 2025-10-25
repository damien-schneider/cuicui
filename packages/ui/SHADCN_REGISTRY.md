# Shadcn Registry Integration for Cuicui UI

This documentation explains how the Cuicui UI components are integrated with the shadcn registry system, allowing components to be easily installed in other projects using the shadcn CLI.

## Overview

The Cuicui UI library now generates a shadcn-compatible registry as part of its build process. This registry allows developers to use the shadcn CLI to add Cuicui components to their projects.

## How It Works

The build process includes the following steps:

1. **Component Discovery**: The `build-shadcn-registry.js` script scans the component directories in the Cuicui UI library, identifying all sections, categories, components, and variants.

2. **Registry Generation**: For each component, the script generates a shadcn-compatible JSON file containing metadata about the component, including:
   - Component name
   - Component files
   - Component variants
   - File paths

3. **Registry Index**: A main `registry.json` file is created that serves as an index for all available components.

## Using the Cuicui Registry

You can use the shadcn CLI to add components from the Cuicui registry to your project:

```bash
# Install a specific component
npx shadcn add button --from=https://raw.githubusercontent.com/damien-schneider/cuicui/main/packages/ui/registry

# Or explore available components
npx shadcn add --from=https://raw.githubusercontent.com/damien-schneider/cuicui/main/packages/ui/registry
```

## Registry Structure

The registry is located in the `packages/ui/registry` directory and includes:

- `registry.json`: Main index file listing all available components
- Individual component JSON files named according to their path structure (e.g., `application-ui-buttons-modern-button.json`)

## Building the Registry

The registry is automatically built as part of the UI build process:

```bash
# Build the entire UI package including the registry
pnpm build

# Or build just the registry
pnpm build-registry
```

You can also use the justfile command:

```bash
just build-ui-registry
```

## Registry Format

Each component file follows the shadcn registry format:

```json
{
  "name": "componentName",
  "type": "components:component",
  "files": [
    {
      "name": "component.tsx",
      "content": "import { ComponentName } from \"@/cuicui/path/to/component\";\nexport { ComponentName };",
      "type": "components:component"
    }
  ],
  "path": "section/category/component",
  "variants": [
    {
      "name": "variantName",
      "path": "section/category/component/variantName"
    }
  ]
}
```

## Additional Resources

- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Shadcn CLI Documentation](https://ui.shadcn.com/docs/cli)