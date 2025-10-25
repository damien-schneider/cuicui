# Cuicui UI Components Registry

This directory contains the shadcn-compatible registry files for all components in the Cuicui UI library.

## How to Use

You can use these components with the shadcn CLI by pointing to this registry:

```bash
# Add a component from the Cuicui registry
npx shadcn add button --from=https://raw.githubusercontent.com/damien-schneider/cuicui/main/packages/ui/registry
```

## Registry Structure

- `registry.json` - Main index file containing information about all available components
- Individual component files named by their path structure (e.g., `application-ui-buttons-modern-button.json`)

## Available Components

The registry includes all components from the Cuicui UI library, organized by:

- Application UI
- Common UI
- Marketing UI
- Hooks
- Other components
- Utilities

## Build Process

This registry is automatically generated during the build process using the `build-registry` script in the `package.json` file.