import { SearchIcon } from "lucide-react";

export default function () {
  return (
    <>
      <div className="w-3/4 p-4 bg-neutral-400/15 rounded-xl  flex items-center space-x-4">
        {/* Search Icon */}
        <SearchIcon className="size-6 text-neutral-400/80" />

        {/* Cursor */}
        <div className="bg-neutral-400/80 h-5 rounded-full w-1" />
      </div>
    </>
  );
}
