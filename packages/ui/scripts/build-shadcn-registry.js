#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directories
const ROOT_DIR = path.join(__dirname, '../cuicui');
const REGISTRY_OUTPUT_DIR = path.join(__dirname, '../registry');

// Ensure registry directory exists
if (!fs.existsSync(REGISTRY_OUTPUT_DIR)) {
  fs.mkdirSync(REGISTRY_OUTPUT_DIR, { recursive: true });
}

/**
 * Discover all sections (level 1)
 */
function discoverSections(rootDir) {
  const items = fs.readdirSync(rootDir);
  
  return items.filter(item => {
    const sectionPath = path.join(rootDir, item);
    try {
      const stats = fs.statSync(sectionPath);
      const isDir = stats.isDirectory();
      const isHidden = item.startsWith('.');
      return isDir && !isHidden;
    } catch (err) {
      console.warn(`Unable to access '${sectionPath}':`, err);
      return false;
    }
  });
}

/**
 * Discover categories (level 2)
 */
function discoverCategories(rootDir, section) {
  const sectionPath = path.join(rootDir, section);
  const items = fs.readdirSync(sectionPath);
  
  return items.filter(item => {
    const categoryPath = path.join(sectionPath, item);
    try {
      const stats = fs.statSync(categoryPath);
      const isDir = stats.isDirectory();
      const isHidden = item.startsWith('.');
      return isDir && !isHidden;
    } catch (err) {
      console.warn(`Unable to access '${categoryPath}':`, err);
      return false;
    }
  });
}

/**
 * Discover components (level 3)
 */
function discoverComponents(rootDir, section, category) {
  const categoryPath = path.join(rootDir, section, category);
  const items = fs.readdirSync(categoryPath);
  
  return items.filter(item => {
    const componentPath = path.join(categoryPath, item);
    try {
      const stats = fs.statSync(componentPath);
      const isDir = stats.isDirectory();
      const isHidden = item.startsWith('.');
      return isDir && !isHidden && fs.existsSync(path.join(componentPath, 'component.ts'));
    } catch (err) {
      console.warn(`Unable to access '${componentPath}':`, err);
      return false;
    }
  });
}

/**
 * Discover variants for a component
 */
function discoverVariants(rootDir, section, category, component) {
  const componentPath = path.join(rootDir, section, category, component);
  const items = fs.readdirSync(componentPath);
  
  return items.filter(item => 
    item.endsWith('.variant.ts') || item.endsWith('.variant.tsx')
  );
}

/**
 * Create shadcn component registration
 */
function createShadcnRegistry() {
  const sections = discoverSections(ROOT_DIR);
  console.log(`Discovered ${sections.length} sections`);
  
  const components = [];
  
  // Process all components
  for (const section of sections) {
    const categories = discoverCategories(ROOT_DIR, section);
    
    for (const category of categories) {
      const componentList = discoverComponents(ROOT_DIR, section, category);
      
      for (const component of componentList) {
        // Format component name for shadcn
        const componentName = component.replace(/-([a-z])/g, g => g[1].toUpperCase());
        
        console.log(`Processing: ${section}/${category}/${component}`);
        
        const variants = discoverVariants(ROOT_DIR, section, category, component);
        
        // Create component registry entry
        const registryEntry = {
          name: componentName,
          type: "components:component",
          files: [
            {
              name: "component.tsx",
              content: `import { ${componentName} } from "@/cuicui/${section}/${category}/${component}/${component}";
export { ${componentName} };`,
              type: "components:component"
            }
          ],
          dependencies: [],
          registryDependencies: [],
          path: `${section}/${category}/${component}`,
          variants: variants.map(variant => {
            const variantName = variant.replace('.variant.tsx', '').replace('.variant.ts', '');
            return {
              name: variantName,
              path: `${section}/${category}/${component}/${variantName}`
            };
          })
        };
        
        // Add component to list
        components.push({
          name: componentName,
          registryPath: `${section}-${category}-${component}`,
          data: registryEntry
        });
      }
    }
  }
  
  console.log(`Total components processed: ${components.length}`);
  
  // Create index file
  const indexData = {
    name: "@cuicui/ui",
    version: "0.0.0",
    components: components.map(c => ({
      name: c.name,
      path: c.registryPath
    }))
  };
  
  // Write index file
  fs.writeFileSync(
    path.join(REGISTRY_OUTPUT_DIR, 'registry.json'),
    JSON.stringify(indexData, null, 2)
  );
  
  // Write individual component files
  for (const component of components) {
    fs.writeFileSync(
      path.join(REGISTRY_OUTPUT_DIR, `${component.registryPath}.json`),
      JSON.stringify(component.data, null, 2)
    );
  }
  
  console.log(`Successfully created shadcn registry in ${REGISTRY_OUTPUT_DIR}`);
  console.log(`Created registry.json and ${components.length} component files`);
}

// Run the function
createShadcnRegistry();