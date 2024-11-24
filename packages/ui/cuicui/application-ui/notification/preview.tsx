export default function NotificationCategoryPreview() {
  return (
    <div className="w-32 relative p-4 bg-neutral-400/15 rounded-xl h-8 space-y-4 rounded-tl-none">
      {/* Notification 1 */}
      <div className="absolute -top-2 -left-2 size-3 bg-neutral-400/80 rounded-full">
        <div className="w-full h-full bg-neutral-400/80 rounded-full animate-ping" />
      </div>
    </div>
  );
}
