import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export default function UseKonamiCodePreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex space-x-1">
      <ArrowUp className="size-4 text-neutral-400/80" />
      <ArrowUp className="size-4 text-neutral-400/80" />
      <ArrowDown className="size-4 text-neutral-400/80" />
      <ArrowDown className="size-4 text-neutral-400/80" />
      <ArrowLeft className="size-4 text-neutral-400/80" />
      <ArrowRight className="size-4 text-neutral-400/80" />
      <ArrowLeft className="size-4 text-neutral-400/80" />
      <ArrowRight className="size-4 text-neutral-400/80" />
    </div>
  );
}
