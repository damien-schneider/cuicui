export default function BadgeCategoryPreview() {
  return (
    <div className="flex space-x-2 p-4 bg-neutral-400/15 rounded-xl">
      {/* Badge 1 */}
      <div className="px-2 py-1 bg-neutral-400/80 rounded-full" />
      {/* Badge 2 */}
      <div className="px-2 py-1 bg-neutral-400/60 rounded-full" />
      {/* Badge 3 */}
      <div className="px-2 py-1 bg-neutral-400/40 rounded-full" />
    </div>
  );
}
