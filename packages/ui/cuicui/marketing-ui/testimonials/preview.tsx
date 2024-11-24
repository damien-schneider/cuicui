// testimonialsCategoryPreview.tsx
import { Quote, User } from "lucide-react";

export default function TestimonialsCategoryPreview() {
  return (
    <div className="w-2/3 p-4 bg-neutral-400/15 rounded-xl flex flex-col space-y-4">
      {/* Quote Icon */}
      <Quote className="size-6 text-neutral-400/80" />

      {/* Testimonial Text Placeholders */}
      <div className="space-y-2">
        <div className="w-full h-3 bg-neutral-400/80 rounded-full" />
        <div className="w-5/6 h-3 bg-neutral-400/80 rounded-full" />
      </div>

      {/* User Avatar Placeholder */}
      <div className="flex items-center space-x-2">
        <User className="size-5 text-neutral-400/80" />
        <div className="w-1/2 h-2 bg-neutral-400/80 rounded-full" />
      </div>
    </div>
  );
}
