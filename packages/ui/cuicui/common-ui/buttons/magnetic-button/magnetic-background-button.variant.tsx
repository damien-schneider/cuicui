import { MagneticBackgroundButton } from "@/cuicui/common-ui/buttons/magnetic-button/magnetic-background-button";
import { BedDoubleIcon, PopcornIcon, TvIcon, WavesIcon } from "lucide-react";

export function PreviewMagneticBackgroundButton() {
  return (
    <div className="flex items-center gap-2 p-2 border border-neutral-400/10 rounded-lg bg-neutral-400/10 overflow-hidden">
      <MagneticBackgroundButton className="flex-col gap-1">
        <BedDoubleIcon className="size-5 text-neutral-400" />
        Rest
      </MagneticBackgroundButton>
      <MagneticBackgroundButton className="flex-col gap-1">
        <TvIcon className="size-5 text-neutral-400" />
        Watch TV
      </MagneticBackgroundButton>
      <MagneticBackgroundButton className="flex-col gap-1">
        <PopcornIcon className="size-5 text-neutral-400" />
        Eat popcorn
      </MagneticBackgroundButton>
      <MagneticBackgroundButton className="flex-col gap-1">
        <WavesIcon className="size-5 text-neutral-400" />
        Go swimming
      </MagneticBackgroundButton>
    </div>
  );
}

export default PreviewMagneticBackgroundButton;
