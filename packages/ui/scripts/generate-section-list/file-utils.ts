import fs from "node:fs";
import path from "node:path";

/**
 * Get all subdirectories at a specific directory.
 */
export function listSubdirectories(dir: string): string[] {
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return entries.filter((f) => {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    return stat.isDirectory() && !f.startsWith(".");
  });
}

/**
 * Group an array of items by a key function.
 */
export function groupBy<T>(
  arr: T[],
  keyFn: (x: T) => string,
): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const k = keyFn(item);
      if (!acc[k]) acc[k] = [];
      acc[k].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}

/**
 * Convert a name like "application-ui" to a var prefix "application_ui".
 */
export function toVarPrefix(name: string): string {
  return name.split("-").join("_");
}

/**
 * Convert a base pattern into a var name with a suffix.
 * Example: base="application_ui_alert", typeSuffix="category" => "application_ui_alert_category"
 */
export function toVarName(base: string, typeSuffix: string): string {
  return `${base.split("-").join("_")}_${typeSuffix}`;
}

/**
 * Recursively find directories up to a certain level.
 * level=1: directories under ROOT_DIR that contain a section.ts
 * level=2: categories inside a section directory (look for category.ts)
 * level=3: components inside category directory (component.ts and variants)
 */
export function getDirectoriesAtLevel(dir: string, level: number): string[] {
  // This function can be adapted if you need more complex logic.
  // For simplicity, we just return directories (not filtering by file presence yet).
  if (level < 1) return [];
  if (level === 1) {
    // top-level dirs (sections)
    return listSubdirectories(dir);
  }
  // For level 2 and 3, caller should pass the directory already (like a section dir or category dir)
  return listSubdirectories(dir);
}
