import { useMouse } from "@/cuicui/hooks/use-mouse";

export const CardMouseHighlightingBorder = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="relative transform-gpu overflow-hidden rounded-(--radius) bg-white/10 p-2 [--radius:var(--radius-2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]"
      ref={parentRef}
      style={{
        //@ts-ignore : This is a valid css variable
        "--x": `${mouse.elementX}px`,
        "--y": `${mouse.elementY}px`,
        "--spotlight-color-stops": "#d4d4d4,transparent",
        "--spotlight-size": "350px",
        "--radius": "1rem",
      }}
    >
      <div className="absolute inset-px transform-gpu rounded-[calc(var(--radius)-1px)] bg-neutral-100 dark:bg-neutral-800" />

      <div className="relative h-40 rounded-[calc(var(--radius)-4px)] bg-neutral-200 dark:bg-neutral-900" />
      <div className="relative px-4 pt-4 pb-2">
        <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-300">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{content}</p>
      </div>
    </div>
  );
};
