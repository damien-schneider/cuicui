# Project Contribution Guide

## 🛠️ Development Environment Setup

### Prerequisites
- Node.js v20+
- pnpm v9+

### 1. Install Global Dependencies
```bash
pnpm install turbo --global
```

### 2. Configure Environment
1. Copy the environment template:
```bash
cp app/website/.env.template app/website/.env
```
2. Fill in required values in the new `.env` file

### 3. Start Development Server
```bash
pnpm dev
```

## 🧩 Component Development Guide

### Project Structure
Components are organized in a structured hierarchy:
```text
📁 /packages/ui/cuicui
├── 📁 [section_name]
│ ├── 📁 [category_name]
│ │ ├── 📁 [component_name]
│ │ │ ├── 📄 [variant1_name].variant.tsx
│ │ │ ├── 📄 [variant2_name].variant.tsx
│ │ │ └── 📄 component.ts
│ │ └── ...
│ ├── 📁 [category_name]
│ │ ├── 📁 [component_name]
│ │ │ ├── 📄 [variant1_name].variant.tsx
│ │ │ └── 📄 component.ts
│ │ └── ...
│ └── ...
└── ...
```

### Creating a New Component
1. Create component directory:
```bash
mkdir -p packages/ui/cuicui/[section]/[category]/YourComponentName
```
2. Add base component (`component.ts`):
```typescript
// Example component structure
export interface ComponentProps {
  // Type definitions
}

export const BaseComponent = (props: ComponentProps) => {
  // Implementation
}
```
3. Create variants (`*.variant.tsx`):
   ```tsx
   // primary.variant.tsx
   export const PrimaryVariant = (props: ComponentProps) => (
     <BaseComponent {...props} className="primary-style" />
   )
   ```
4. Run the "pre-build" script to generate component exports:
```bash
pnpm pre-build
```

## Commit Message Convention

We are using Gitmoji for our commit messages. You can find the rules at [gitmoji.dev](https://gitmoji.dev/)