/**
 * Registry index and utilities
 * Provides the main registry interface for shadcn CLI integration
 */

import type { RegistryIndex, RegistryItem } from "./schema";
import { commonUiRegistryItems } from "./collections/common-ui";
import { marketingUiRegistryItems } from "./collections/marketing-ui";
import { applicationUiRegistryItems } from "./collections/application-ui";
import { hooksRegistryItems } from "./collections/hooks";
import { otherRegistryItems } from "./collections/other";
import { utilsRegistryItems } from "./collections/utils";
import { toolsRegistryItems } from "./collections/tools";

/**
 * Main registry index - combines all collections
 */
export const registryIndex: RegistryIndex = {
  items: [
    ...commonUiRegistryItems,
    ...marketingUiRegistryItems,
    ...applicationUiRegistryItems,
    ...hooksRegistryItems,
    ...otherRegistryItems,
    ...utilsRegistryItems,
    ...toolsRegistryItems,
  ],
  meta: {
    name: "@cuicui/ui",
    description: "Animated React components and utilities with Motion, Tailwind, and shadcn/ui",
    version: "0.0.0",
    sourceUrl: "https://github.com/cuicui-day/cuicui",
    homepage: "https://cuicui.day",
    license: "MIT",
  },
};

/**
 * Get a specific component by name
 */
export function getRegistryItem(name: string): RegistryItem | undefined {
  return registryIndex.items.find((item) => item.name === name);
}

/**
 * Get all registry items
 */
export function getAllRegistryItems(): RegistryItem[] {
  return registryIndex.items;
}

/**
 * Get items by category
 */
export function getRegistryItemsByCategory(category: string): RegistryItem[] {
  return registryIndex.items.filter(
    (item) => item.meta?.category?.toLowerCase() === category.toLowerCase(),
  );
}

/**
 * Get items by tag
 */
export function getRegistryItemsByTag(tag: string): RegistryItem[] {
  return registryIndex.items.filter((item) => item.meta?.tags?.includes(tag));
}

/**
 * Search registry items by name or description
 */
export function searchRegistryItems(query: string): RegistryItem[] {
  const lowercaseQuery = query.toLowerCase();
  return registryIndex.items.filter(
    (item) =>
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery),
  );
}

/**
 * Export all registry items as a module for consumption
 */
export default registryIndex;