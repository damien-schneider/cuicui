/**
 * Main registry export
 * This module provides the registry interface for consumption by the site and runtime code
 */

import { registry } from "./registry/index";
import type { RegistryItem } from "./registry/schema";
import { commonUiRegistryItems } from "./registry/collections/common-ui";
import { marketingUiRegistryItems } from "./registry/collections/marketing-ui";
import { applicationUiRegistryItems } from "./registry/collections/application-ui";
import { hooksRegistryItems } from "./registry/collections/hooks";
import { otherRegistryItems } from "./registry/collections/other";
import { utilsRegistryItems } from "./registry/collections/utils";
import { toolsRegistryItems } from "./registry/collections/tools";

// Re-export registry components
export { registry };
export type { RegistryItem };
export { 
  commonUiRegistryItems,
  marketingUiRegistryItems,
  applicationUiRegistryItems,
  hooksRegistryItems,
  otherRegistryItems,
  utilsRegistryItems,
  toolsRegistryItems
};