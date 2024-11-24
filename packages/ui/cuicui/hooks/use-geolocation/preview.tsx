import { MapPin } from "lucide-react";

export default function UseGeoLocationPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center">
      {/* Map Pin Icon */}
      <MapPin className="size-6 text-neutral-400/80" />
    </div>
  );
}
