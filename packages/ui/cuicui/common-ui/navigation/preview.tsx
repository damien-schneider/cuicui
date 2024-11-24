export default function () {
  return (
    <div className="w-full p-2 bg-neutral-400/15 rounded-2xl flex space-x-4">
      {/* Sidebar */}
      <div className="flex flex-col space-y-2 bg-neutral-400/15 p-2 rounded-xl">
        <div className="w-20 h-4 bg-neutral-400/40 rounded-lg" />
        <div className="w-20 h-4 bg-neutral-400/40 rounded-lg" />
        <div className="w-20 h-4 bg-neutral-400/40 rounded-lg" />
        <div className="w-20 h-4 bg-neutral-400/40 rounded-lg" />
      </div>

      {/* Main Content Area with Top Navigation */}
      <div className="flex flex-col w-full space-y-4">
        {/* Top Navigation Bar */}
        <div className="flex space-x-2">
          <div className="w-full h-6 bg-neutral-400/40 rounded-lg" />
          <div className="w-full h-6 bg-neutral-400/40 rounded-lg" />
          <div className="w-full h-6 bg-neutral-400/40 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
