/**
 * Registry index and utilities
 * Provides the main registry interface for shadcn CLI integration
 */

import type { Registry, RegistryItem } from "./schema";
import { commonUiRegistryItems } from "./collections/common-ui";
import { marketingUiRegistryItems } from "./collections/marketing-ui";
import { applicationUiRegistryItems } from "./collections/application-ui";
import { hooksRegistryItems } from "./collections/hooks";
import { otherRegistryItems } from "./collections/other";
import { utilsRegistryItems } from "./collections/utils";
import { toolsRegistryItems } from "./collections/tools";

/**
 * Main registry - combines all collections using official shadcn structure
 */
export const registry: Registry = {
  name: "@cuicui/ui",
  homepage: "https://cuicui.day",
  items: [
    ...commonUiRegistryItems,
    ...marketingUiRegistryItems,
    ...applicationUiRegistryItems,
    ...hooksRegistryItems,
    ...otherRegistryItems,
    ...utilsRegistryItems,
    ...toolsRegistryItems,
  ],
};

/**
 * Get a specific component by name
 */
export function getRegistryItem(name: string): RegistryItem | undefined {
  return registry.items.find((item: RegistryItem) => item.name === name);
}

/**
 * Get all registry items
 */
export function getAllRegistryItems(): RegistryItem[] {
  return registry.items;
}

/**
 * Get items by category
 */
export function getRegistryItemsByCategory(category: string): RegistryItem[] {
  return registry.items.filter(
    (item: RegistryItem) => item.categories?.some((cat: string) => cat.toLowerCase() === category.toLowerCase()),
  );
}

/**
 * Get items by type
 */
export function getRegistryItemsByType(type: string): RegistryItem[] {
  return registry.items.filter((item: RegistryItem) => item.type === type);
}

/**
 * Search registry items by name or description
 */
export function searchRegistryItems(query: string): RegistryItem[] {
  const lowercaseQuery = query.toLowerCase();
  return registry.items.filter(
    (item: RegistryItem) =>
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.description?.toLowerCase().includes(lowercaseQuery),
  );
}

/**
 * Export all registry items as a module for consumption
 */
export default registry;