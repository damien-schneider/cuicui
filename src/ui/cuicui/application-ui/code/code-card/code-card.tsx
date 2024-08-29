import React from "react";

const CodeEditor = ({ code }: { code: string }) => {
  return (
    <div className="max-w-md group rounded-2xl shadow-sm bg-white dark:bg-neutral-800 overflow-hidden border border-neutral-500/15 transform-gpu hover:-translate-x-1 transition-transform">
      <div className="flex items-end">
        <span
          className=" text-end  font-medium tracking-widest  pb-4 pl-2 pr-0.5 text-sm  dark:text-neutral-500 text-neutral-400"
          style={{
            writingMode: "sideways-lr",
            textOrientation: "mixed",
          }}
        >
          CSS
        </span>
        <div className="px-4 py-2 w-full bg-white shadow-lg  dark:shadow-neutral-900 dark:bg-neutral-800  shadow-neutral-600/20 group-hover:translate-x-1 transition-transform transform-gpu rounded-2xl  border-l border-neutral-500/15">
          <pre className="pr-4">
            <code className="code dark:text-neutral-300 text-neutral-600 text-sm">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
