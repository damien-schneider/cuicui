import { BedIcon } from "lucide-react";

export default function SleepCategoryPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center justify-center">
      <div className="size-8 p-1 rounded-full bg-neutral-400/40 inline-flex items-center justify-center">
        <BedIcon className="size-6 text-neutral-400" />
      </div>
    </div>
  );
}
