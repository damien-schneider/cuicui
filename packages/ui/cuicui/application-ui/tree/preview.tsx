import { Folder, FileText } from "lucide-react";

export default function () {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl">
      {/* Tree Root Folder */}
      <div className="flex items-center space-x-2">
        <Folder className="size-5 text-neutral-400/80" />
        <div className="text-sm text-neutral-400/80">Root Folder</div>
      </div>

      {/* Nested Folder */}
      <div className="pl-6 mt-2 flex items-center space-x-2">
        <Folder className="size-5 text-neutral-400/60" />
        <div className="text-sm text-neutral-400/60">Nested Folder</div>
      </div>

      {/* File inside Nested Folder */}
      <div className="pl-12 mt-2 flex items-center space-x-2">
        <FileText className="size-5 text-neutral-400/40" />
        <div className="text-sm text-neutral-400/40">File.txt</div>
      </div>
    </div>
  );
}
