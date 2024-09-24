import { useMouse } from "#/src/ui/cuicui/hooks/use-mouse/hook/use-mouse";

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
      ref={parentRef}
      className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] rounded-[--radius] bg-white/10 p-2 [--radius:theme(borderRadius.2xl)] transform-gpu"
      style={{
        //@ts-ignore : This is a valid css variable
        "--x": `${mouse.elementX}px`,
        "--y": `${mouse.elementY}px`,
        "--spotlight-color-stops": "#d4d4d4,transparent",
        "--spotlight-size": "350px",
        "--radius": "1rem",
      }}
    >
      <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] dark:bg-neutral-800 bg-neutral-100 transform-gpu" />

      <div className="relative rounded-[calc(var(--radius)-4px)] bg-neutral-200 dark:bg-neutral-900 h-40" />
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{content}</p>
      </div>
    </div>
  );
};
