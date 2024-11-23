"use client";

import { useFirstVisit } from "@/cuicui/hooks/use-first-visit/use-first-visit";

export const PreviewUseFirstVisit = () => {
  const isFirstVisit = useFirstVisit();

  return (
    <div className="cuicui-default-style">
      <p>{isFirstVisit ? "Your first visit" : "Not your first visit"}</p>
      {!isFirstVisit && (
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("firstVisit");
          }}
        >
          Reset first visit (not in hook)
        </button>
      )}
    </div>
  );
};
