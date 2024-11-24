export default function QrCodeCategoryPreview() {
  return (
    <div className="w-32 h-32 p-4 bg-neutral-400/15 rounded-xl flex items-center justify-center">
      {/* QR Code */}
      <div className="w-20 h-20 bg-neutral-400/40 grid grid-cols-5 grid-rows-5 gap-0.5 p-1 rounded-lg">
        {[...new Array(25)].map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`qr-code-${i}`}
            className={"w-full h-full bg-neutral-400 rounded"}
            style={{
              opacity: `${Math.floor(Math.random() * 90) + 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
