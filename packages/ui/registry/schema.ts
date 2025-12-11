/**
 * Schema types for the shadcn registry format
 * Uses official shadcn exported types
 */

// Import official shadcn types and schemas
export {
  type RegistryItem,
  type Registry,
  registryItemSchema,
  registrySchema,
  registryItemFileSchema,
  registryItemTypeSchema,
  registryItemTailwindSchema,
  registryItemCssVarsSchema,
  registryItemCssSchema,
  registryItemEnvVarsSchema,
  registryResolvedItemsTreeSchema,
} from 'shadcn/schema';

// Re-export commonly used types for convenience
export type {
  configSchema,
  iconsSchema,
  rawConfigSchema,
  registriesIndexSchema,
  registryBaseColorSchema,
  registryConfigItemSchema,
  registryConfigSchema,
  registryIndexSchema,
  searchResultItemSchema,
  searchResultsSchema,
  stylesSchema,
  workspaceConfigSchema,
} from 'shadcn/schema';