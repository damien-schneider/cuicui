/**
 * Schema types for the shadcn registry format
 * Compatible with official shadcn registry structure
 */

import { z } from 'zod';

// Registry item type enum matching shadcn structure
export const registryItemTypeEnum = z.enum([
  "registry:lib", 
  "registry:block", 
  "registry:component", 
  "registry:ui", 
  "registry:hook", 
  "registry:page", 
  "registry:file", 
  "registry:theme", 
  "registry:style", 
  "registry:item", 
  "registry:example", 
  "registry:internal"
]);

// Registry item file type enum
export const registryItemFileTypeEnum = z.enum([
  "registry:file", 
  "registry:page",
  "registry:lib",
  "registry:block", 
  "registry:component", 
  "registry:ui", 
  "registry:hook", 
  "registry:theme", 
  "registry:style", 
  "registry:item", 
  "registry:example", 
  "registry:internal"
]);

// File schema for registry items
export const registryItemFileSchema = z.discriminatedUnion("type", [
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: z.literal("registry:file").or(z.literal("registry:page")),
    target: z.string(),
  }),
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: z.enum([
      "registry:lib", 
      "registry:block", 
      "registry:component", 
      "registry:ui", 
      "registry:hook", 
      "registry:theme", 
      "registry:style", 
      "registry:item", 
      "registry:example", 
      "registry:internal"
    ]),
    target: z.string().optional(),
  }),
]);

// Main registry item schema
export const registryItemSchema = z.object({
  $schema: z.string().optional(),
  extends: z.string().optional(),
  name: z.string(),
  type: registryItemTypeEnum,
  title: z.string().optional(),
  author: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
  categories: z.array(z.string()).optional(),
  meta: z.record(z.string(), z.any()).optional(),
  docs: z.string().optional(),
});

// Registry main schema
export const registrySchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(registryItemSchema),
});

// Export inferred types
export type RegistryItem = z.infer<typeof registryItemSchema>;
export type Registry = z.infer<typeof registrySchema>;
export type RegistryItemFile = z.infer<typeof registryItemFileSchema>;