/**
 * Schema types for the shadcn registry format
 * Based on https://ui.shadcn.com/docs/registry
 */

export type RegistryItem = {
  /** Unique identifier for the item */
  name: string;
  /** Short description of the component */
  description: string;
  /** File dependencies of the component */
  dependencies?: string[];
  /** Files that make up the component */
  files: RegistryFile[];
  /** Component metadata */
  meta?: RegistryItemMeta;
  /** Registry type */
  type?: "components" | "ui" | "example";
};

export type RegistryFile = {
  /** Path to the file */
  path: string;
  /** Content of the file (optional for binary files) */
  content?: string;
  /** File type */
  type: "components" | "styles" | "ui" | "lib" | "util";
  /** Target directory (optional) */
  target?: string;
};

export type RegistryItemMeta = {
  /** Component category */
  category?: string;
  /** Component subcategory */
  subcategory?: string;
  /** Component tags */
  tags?: string[];
  /** Component slug */
  slug?: string;
  /** Component aliases */
  aliases?: string[];
  /** Component demo URL */
  demoUrl?: string;
  /** Component docs URL */
  docsUrl?: string;
  /** Installation instructions */
  installation?: {
    /** Package name */
    package: string;
    /** Import path */
    import: string;
    /** Installation command */
    command?: string;
  };
  /** Code examples */
  examples?: RegistryExample[];
  /** Related components */
  related?: string[];
};

export type RegistryExample = {
  /** Example name */
  name: string;
  /** Example description */
  description?: string;
  /** Example code */
  code: string;
  /** Example language */
  language?: string;
  /** Example sandbox URL */
  sandboxUrl?: string;
  /** Example demo URL */
  demoUrl?: string;
};

/**
 * Registry index structure
 */
export type RegistryIndex = {
  /** Registry items */
  items: RegistryItem[];
  /** Registry metadata */
  meta: {
    /** Registry name */
    name: string;
    /** Registry description */
    description: string;
    /** Registry version */
    version: string;
    /** Registry source URL */
    sourceUrl?: string;
    /** Registry homepage */
    homepage?: string;
    /** Registry license */
    license?: string;
  };
};

/**
 * Registry collection structure
 */
export type RegistryCollection = {
  /** Collection name */
  name: string;
  /** Collection description */
  description: string;
  /** Collection items */
  items: string[];
  /** Collection metadata */
  meta?: {
    /** Collection icon */
    icon?: string;
    /** Collection color */
    color?: string;
    /** Collection tags */
    tags?: string[];
  };
};