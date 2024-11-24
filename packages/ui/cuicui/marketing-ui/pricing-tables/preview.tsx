// PricingTablesCategoryPreview.tsx

export default function PricingTablesCategoryPreview() {
  return (
    <div className="w-full flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Basic Plan */}
      <div className="flex flex-col w-full items-center p-4 bg-neutral-400/20 rounded-lg shadow">
        <div className="w-full h-6 bg-neutral-400 rounded-lg mb-4" />
        <div className="w-16 h-4 bg-neutral-400 rounded-lg mb-2" />
        <div className="w-20 h-4 bg-neutral-400 rounded-lg " />
      </div>

      {/* Pro Plan */}
      <div className="flex flex-col w-full items-center p-4 bg-neutral-400/20 rounded-lg shadow">
        <div className="w-full h-6 bg-neutral-400 rounded-lg mb-4" />
        <div className="w-16 h-4 bg-neutral-400 rounded-lg mb-2" />
        <div className="w-20 h-4 bg-neutral-400 rounded-lg " />
      </div>
    </div>
  );
}
