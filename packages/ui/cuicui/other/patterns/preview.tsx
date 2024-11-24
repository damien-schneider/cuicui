export default function PatternsCategoryPreview() {
  return (
    <div className="w-32 h-20 p-4 bg-neutral-400/15 rounded-xl grid grid-cols-4 gap-1">
      {/* Pattern Circles */}
      {[...new Array(16)].map((_, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`pattern-circle-${i}`}
          className="w-full h-full bg-neutral-400/40 rounded-full"
        />
      ))}
    </div>
  );
}
