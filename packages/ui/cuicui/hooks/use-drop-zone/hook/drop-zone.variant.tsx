"use client";
import { useDropZone } from "@/cuicui/hooks/use-drop-zone";
import { cn } from "@/cuicui/utils/cn";
import { useRef } from "react";

export const DropZoneComponent = () => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { files, isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop: (files) => {
      console.log("Dropped files:", files);
    },
  });

  return (
    <div>
      <div
        ref={dropZoneRef}
        className={cn(
          "border-2 p-8 rounded-2xl border-dashed",
          isOverDropZone
            ? "border-blue-500 bg-neutral-400/0"
            : "border-neutral-500 bg-neutral-400/15",
        )}
      >
        Drop files here
        {files && <div>Dropped {files.length} files</div>}
      </div>
      <p>Here is the filenames dropped:</p>
      <ul>
        {files?.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default DropZoneComponent;
