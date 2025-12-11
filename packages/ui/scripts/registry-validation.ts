#!/usr/bin/env node
/**
 * Registry validation script for cuicui components
 * Validates registry structure and ensures shadcn CLI compatibility
 */

import fs from "node:fs";
import path from "node:path";

interface ValidationError {
  file: string;
  line?: number;
  message: string;
  severity: "error" | "warning";
}

interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
}

const REGISTRY_PATH = "./registry";
const COLLECTIONS_PATH = path.join(REGISTRY_PATH, "collections");
const SCHEMA_PATH = path.join(REGISTRY_PATH, "schema.ts");
const INDEX_PATH = path.join(REGISTRY_PATH, "index.ts");

/**
 * Validate registry schema exists and is properly structured
 */
function validateSchema(): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!fs.existsSync(SCHEMA_PATH)) {
    errors.push({
      file: SCHEMA_PATH,
      message: "Registry schema file missing",
      severity: "error",
    });
    return { isValid: false, errors, warnings };
  }

  // Check for required schema types (updated for official shadcn imports)
  const schemaContent = fs.readFileSync(SCHEMA_PATH, "utf-8");
  
  // Check that we're using official shadcn imports
  if (!schemaContent.includes('from \'shadcn/schema\'') && !schemaContent.includes('from "shadcn/schema"')) {
    errors.push({
      file: SCHEMA_PATH,
      message: "Schema should import from official shadcn package",
      severity: "error",
    });
  }
  
  // Check for shadcn exports being re-exported
  const hasShadcnExports = 
    schemaContent.includes('export {') && 
    (schemaContent.includes('RegistryItem') || schemaContent.includes('type RegistryItem')) &&
    (schemaContent.includes('Registry') || schemaContent.includes('type Registry'));
    
  if (!hasShadcnExports) {
    errors.push({
      file: SCHEMA_PATH,
      message: "Missing re-exports of official shadcn types",
      severity: "error",
    });
  }

  return { isValid: errors.length === 0, errors, warnings };
}

/**
 * Validate registry index exists and has proper structure
 */
function validateIndex(): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!fs.existsSync(INDEX_PATH)) {
    errors.push({
      file: INDEX_PATH,
      message: "Registry index file missing",
      severity: "error",
    });
    return { isValid: false, errors, warnings };
  }

  try {
    const indexContent = fs.readFileSync(INDEX_PATH, "utf-8");
    
    // Check for main export (should be 'registry' now)
    if (!indexContent.includes("export const registry")) {
      errors.push({
        file: INDEX_PATH,
        message: "registry export missing",
        severity: "error",
      });
    }

    // Check for homepage field
    if (!indexContent.includes("homepage:")) {
      errors.push({
        file: INDEX_PATH,
        message: "Registry homepage missing",
        severity: "error",
      });
    }

    // Check for items array
    if (!indexContent.includes("items:")) {
      errors.push({
        file: INDEX_PATH,
        message: "Registry items array missing",
        severity: "error",
      });
    }
  } catch (err) {
    errors.push({
      file: INDEX_PATH,
      message: `Failed to read index file: ${err}`,
      severity: "error",
    });
  }

  return { isValid: errors.length === 0, errors, warnings };
}

/**
 * Validate all collection files
 */
function validateCollections(): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!fs.existsSync(COLLECTIONS_PATH)) {
    errors.push({
      file: COLLECTIONS_PATH,
      message: "Collections directory missing",
      severity: "error",
    });
    return { isValid: false, errors, warnings };
  }

  const collectionFiles = fs.readdirSync(COLLECTIONS_PATH)
    .filter(file => file.endsWith(".ts"));

  if (collectionFiles.length === 0) {
    errors.push({
      file: COLLECTIONS_PATH,
      message: "No collection files found",
      severity: "error",
    });
  }

  for (const file of collectionFiles) {
    const filePath = path.join(COLLECTIONS_PATH, file);
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      
      // Check for registry items export
      if (!content.includes("RegistryItem")) {
        warnings.push({
          file: filePath,
          message: "File doesn't import or use RegistryItem type",
          severity: "warning",
        });
      }

      // Check for items array export
      if (!content.includes("export const") && !content.includes("items")) {
        warnings.push({
          file: filePath,
          message: "File doesn't export any registry items",
          severity: "warning",
        });
      }
    } catch (err) {
      errors.push({
        file: filePath,
        message: `Failed to read collection file: ${err}`,
        severity: "error",
      });
    }
  }

  return { isValid: errors.length === 0, errors, warnings };
}

/**
 * Validate components.json exists and is properly formatted
 */
function validateComponentsJson(): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  // Look for components.json in the repo root, not the package root
  const repoRoot = path.join(process.cwd(), "..", "..");
  const componentsJsonPath = path.join(repoRoot, "components.json");
  
  if (!fs.existsSync(componentsJsonPath)) {
    errors.push({
      file: componentsJsonPath,
      message: "components.json file missing in repo root",
      severity: "error",
    });
    return { isValid: false, errors, warnings };
  }

  try {
    const content = fs.readFileSync(componentsJsonPath, "utf-8");
    const config = JSON.parse(content);

    // Check for required shadcn schema fields
    const requiredFields = ["$schema", "style", "typescript", "tailwind", "aliases"];
    for (const field of requiredFields) {
      if (!(field in config)) {
        errors.push({
          file: componentsJsonPath,
          message: `Missing required field: ${field}`,
          severity: "error",
        });
      }
    }

    // Check for registry URL
    if (!config.registryUrl) {
      warnings.push({
        file: componentsJsonPath,
        message: "registryUrl field recommended for CLI integration",
        severity: "warning",
      });
    }
  } catch (err) {
    errors.push({
      file: componentsJsonPath,
      message: `Failed to parse components.json: ${err}`,
      severity: "error",
    });
  }

  return { isValid: errors.length === 0, errors, warnings };
}

/**
 * Main validation function
 */
function validateRegistry() {
  console.log("🔍 Validating cuicui registry structure...\n");

  const results = [
    validateSchema(),
    validateIndex(),
    validateCollections(),
    validateComponentsJson(),
  ];

  const allErrors: ValidationError[] = [];
  const allWarnings: ValidationError[] = [];

  results.forEach(result => {
    allErrors.push(...result.errors);
    allWarnings.push(...result.warnings);
  });

  // Print results
  console.log("📋 Validation Results:\n");

  if (allErrors.length === 0) {
    console.log("✅ No errors found!");
  } else {
    console.log("❌ Errors found:");
    allErrors.forEach(error => {
      console.log(`  • ${error.file}: ${error.message}`);
    });
    console.log();
  }

  if (allWarnings.length > 0) {
    console.log("⚠️  Warnings:");
    allWarnings.forEach(warning => {
      console.log(`  • ${warning.file}: ${warning.message}`);
    });
    console.log();
  }

  const isValid = allErrors.length === 0;
  console.log(isValid ? "🎉 Registry validation passed!" : "💥 Registry validation failed!");

  return { isValid, errors: allErrors, warnings: allWarnings };
}

// Run validation
const result = validateRegistry();
process.exit(result.isValid ? 0 : 1);