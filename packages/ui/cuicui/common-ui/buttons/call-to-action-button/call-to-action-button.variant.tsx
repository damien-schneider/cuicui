import { ArrowRightIcon } from "lucide-react";

export default function Buttont() {
  return (
    <button
      type="button"
      className="group relative flex flex-row items-center p-1 pr-3 text-sm gap-2 rounded-full border border-neutral-400/15 hover:border-neutral-400/30 shadow hover:shadow-sm overflow-hidden focus-visible:outline-none focus-visible:ring-neutral-600 focus-visible:ring-2 focus-visible:rounded-full transition duration-100 bg-neutral-400/5 hover:bg-neutral-400/10"
    >
      <div className="inline-flex items-center bg-brand dark:text-violet-300 text-violet-600 border border-violet-400/20 px-3 rounded-full text-sm py-1 bg-violet-400/20">
        New version
      </div>
      <span className="dark:text-neutral-400 text-neutral-500">
        Check out the new features
      </span>
      <ArrowRightIcon className="dark:text-neutral-400 text-neutral-500 size-5 group-hover:translate-x-1 transition-transform duration-100" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-70 group-hover:opacity-100 transition-opacity overflow-hidden rounded-full from-violet-100 to-violet-300 backdrop-blur-md" />
    </button>
  );
}
