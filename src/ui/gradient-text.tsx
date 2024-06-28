import { cn } from "../utils/cn";

export default ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <p
      className={cn(
        "from-sky-400 via-violet-500 to-orange-400 bg-clip-text text-transparent bg-gradient-to-br font-medium text-xl tracking-tighter",
        className,
      )}
    >
      {children}
    </p>
  );
};
