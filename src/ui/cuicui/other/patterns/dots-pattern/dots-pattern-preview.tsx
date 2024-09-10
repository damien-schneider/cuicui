import { DotsPattern } from "#/src/ui/cuicui/other/patterns/dots-pattern/dots-pattern";
import { cn } from "#/src/utils/cn";

export function DotsPatternPreview() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <DotsPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
