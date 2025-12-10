/**
 * Common UI components registry collection
 * Maps cuicui components to shadcn registry format
 */

import type { RegistryItem } from "../schema";

/**
 * Modern Simple Input component
 */
export const modernSimpleInputRegistryItem: RegistryItem = {
  name: "modern-simple-input",
  description: "A simple input that can be used in any project with any artistic style.",
  dependencies: ["react", "clsx", "tailwind-merge"],
  files: [
    {
      path: "components/ui/modern-simple-input.tsx",
      type: "components",
      content: `import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ModernSimpleInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-xl border px-3 py-2 text-sm ring-0 focus:ring-0 transition focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          // Colors
          "border-neutral-400/20 bg-white hover:bg-white/50 dark:bg-neutral-800 dark:hover:bg-neutral-800/50",
          " placeholder:text-neutral-400 focus-visible:border-neutral-400/50",
          // File
          "file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
ModernSimpleInput.displayName = "Modern Simple Input";

export { ModernSimpleInput };`,
    },
  ],
  meta: {
    category: "inputs",
    subcategory: "common-ui",
    tags: ["input", "form", "field", "common"],
    slug: "modern-simple-input",
    aliases: ["input", "simple-input"],
    demoUrl: "https://cuicui.day/components/modern-simple-input",
    docsUrl: "https://cuicui.day/docs/components/modern-simple-input",
    installation: {
      package: "@cuicui/ui",
      import: 'import { ModernSimpleInput } from "@cuicui/ui/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input"',
      command: "pnpm add @cuicui/ui",
    },
    examples: [
      {
        name: "Basic Input",
        description: "A simple input with placeholder",
        code: `<ModernSimpleInput placeholder="Type something..." />`,
        language: "tsx",
      },
      {
        name: "Controlled Input",
        description: "Input with React state management",
        code: `const [value, setValue] = useState("");
return (
  <ModernSimpleInput
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Type something..."
  />
);`,
        language: "tsx",
      },
    ],
    related: ["input-field", "text-area", "select"],
  },
  type: "components",
};

/**
 * File Dropzone component
 */
export const droppableFileRegistryItem: RegistryItem = {
  name: "droppable-file",
  description: "A file input with drag and drop functionality for better user experience.",
  dependencies: ["react", "motion", "lucide-react"],
  files: [
    {
      path: "components/ui/droppable-file.tsx",
      type: "components",
      content: `"use client";
import { AnimatePresence, motion } from "motion/react";
import { File, Trash2, Upload } from "lucide-react";
import type React from "react";
import { type DragEvent, useRef, useState } from "react";

interface FileWithPreview extends File {
  preview: string;
}

export function FileDropzone() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFiles = (fileList: File[]) => {
    const newFiles = fileList.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleDeleteFile = (fileToDelete: FileWithPreview) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
    URL.revokeObjectURL(fileToDelete.preview);
  };

  return (
    <div className="h-60 w-96 p-8">
      <motion.div
        className={\`relative size-full cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-colors \${
          isDragActive
            ? "border-blue-500 bg-blue-500/5"
            : "border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
        }\`}
        onClick={handleButtonClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <input
          accept="image/*,application/pdf"
          className="hidden"
          multiple={true}
          onChange={handleFileInputChange}
          ref={fileInputRef}
          type="file"
        />
        <AnimatePresence>
          {isDragActive ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className=" pointer-events-none select-none"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Upload className="pointer-events-none mx-auto size-8 select-none text-blue-500" />
              <p className="pointer-events-none mt-2 select-none text-blue-500 text-sm">
                Drop files here...
              </p>
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Upload className="mx-auto size-8 text-neutral-400 dark:text-neutral-500" />
              <p className="mt-2 text-balance font-medium text-neutral-400 text-sm tracking-tighter dark:text-neutral-500">
                Drag and drop files here, or click to select
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 space-y-2"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            {files.map((file) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center rounded-lg bg-neutral-400/10 p-1"
                exit={{ opacity: 0, x: 20 }}
                initial={{ opacity: 0, x: -20 }}
                key={file.name}
              >
                {file.type.startsWith("image/") ? (
                  <img
                    alt={file.name}
                    className="mr-2 size-10 rounded-xs object-cover"
                    src={file.preview}
                  />
                ) : (
                  <File className="mr-2 size-10 text-neutral-500" />
                )}
                <span className="flex-1 truncate text-neutral-600 text-xs tracking-tighter dark:text-neutral-400">
                  {file.name}
                </span>
                <Trash2
                  className="mr-2 size-5 cursor-pointer text-red-500 transition-colors hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteFile(file);
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FileDropzone;`,
    },
  ],
  meta: {
    category: "inputs",
    subcategory: "common-ui",
    tags: ["file", "upload", "drag-drop", "input"],
    slug: "droppable-file",
    aliases: ["file-upload", "file-input", "dropzone"],
    demoUrl: "https://cuicui.day/components/droppable-file",
    docsUrl: "https://cuicui.day/docs/components/droppable-file",
    installation: {
      package: "@cuicui/ui",
      import: 'import { DroppableFile } from "@cuicui/ui/cuicui/common-ui/inputs/droppable-file"',
      command: "pnpm add @cuicui/ui",
    },
    examples: [
      {
        name: "Basic File Drop",
        description: "Simple drag and drop file input",
        code: `<DroppableFile onFilesSelected={(files) => console.log(files)} />`,
        language: "tsx",
      },
    ],
    related: ["modern-simple-input", "file-input", "upload"],
  },
  type: "components",
};

/**
 * Common UI registry items collection
 */
export const commonUiRegistryItems: RegistryItem[] = [
  modernSimpleInputRegistryItem,
  droppableFileRegistryItem,
];