const CodeEditor = ({ code, language }: { code: string; language: string }) => {
  return (
    <div className="group hover:-translate-x-1 max-w-md transform-gpu overflow-hidden rounded-2xl border border-neutral-500/15 bg-white shadow-2xs transition-transform dark:bg-neutral-800">
      <div className="flex items-end">
        <span
          className=" pr-0.5 pb-4 pl-2 text-end font-medium text-neutral-400 text-sm tracking-widest dark:text-neutral-500"
          style={{
            writingMode: "sideways-lr",
            textOrientation: "mixed",
          }}
        >
          {language}
        </span>
        <div className="w-full transform-gpu rounded-2xl border-neutral-500/15 border-l bg-white px-4 py-2 shadow-lg shadow-neutral-600/20 transition-transform group-hover:translate-x-1 dark:bg-neutral-800 dark:shadow-neutral-900">
          <pre className="pr-4">
            <code className="code text-neutral-600 text-sm dark:text-neutral-300">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
