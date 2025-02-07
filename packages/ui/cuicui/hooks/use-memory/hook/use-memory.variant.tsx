"use client"
import useMemory from '@/cuicui/hooks/use-memory';

function MemoryDemo() {
  const { isSupported, memory } = useMemory({ interval: 1000, immediate: true });

  const size = (v: number) => {
    const kb = v / 1024 / 1024;
    return `${kb.toFixed(2)} MB`;
  };

  if (!isSupported || !memory) {
    return (
      <div>
        Your browser does not support performance memory API
      </div>
    );
  }

  return (
    <div className="inline-grid grid-cols-2 gap-x-4 gap-y-2">
      <div className="opacity-50">Used</div>
      <div>{size(memory.usedJSHeapSize)}</div>

      <div className="opacity-50">Allocated</div>
      <div>{size(memory.totalJSHeapSize)}</div>

      <div className="opacity-50">Limit</div>
      <div>{size(memory.jsHeapSizeLimit)}</div>
    </div>
  );
}

export default MemoryDemo;
