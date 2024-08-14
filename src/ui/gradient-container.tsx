import { cn } from "#/src/utils/cn";

export default ({
  children,
  classNameParent,
  classNameChild,
  rounded = "md",
  background = "glassy",
  border = true,
}: Readonly<{
  children: React.ReactNode;
  classNameParent?: string;
  classNameChild?: string;
  classNameBlur?: string;
  rounded?: "xs" | "sm" | "md" | "lg" | "full" | "none";
  background?: "glassy" | "solid";
  border?: boolean;
}>) => {
  function getRoundedValue(
    roundedValue: typeof rounded,
    target: "parent" | "child",
  ) {
    if (target === "parent") {
      switch (roundedValue) {
        case "xs":
          return "rounded-[5px]";
        case "sm":
          return "rounded-[10px]";
        case "md":
          return "rounded-[15px]";
        case "lg":
          return "rounded-[20px]";
        case "full":
          return "rounded-full";
        case "none":
          return "";
        default:
          return "rounded-[10px]";
      }
    }
    switch (roundedValue) {
      case "xs":
        return "rounded-[4px]";
      case "sm":
        return "rounded-[9px]";
      case "md":
        return "rounded-[14px]";
      case "lg":
        return "rounded-[19px]";
      case "full":
        return "rounded-full";
      case "none":
        return "";
      default:
        return "rounded-[9px]";
    }
  }

  return (
    <div
      className={cn(
        "relative",
        border && "p-px",
        // getGradientDirection(gradientDirection),
        getRoundedValue(rounded, "parent"),
        classNameParent,
      )}
      style={{
        background: "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
      }}
    >
      <div
        className={cn(
          "rounded-[inherit]",
          background === "solid" && "bg-neutral-50 dark:bg-neutral-950",
          background === "glassy" &&
            "bg-gradient-to-b from-white/95 to-white/90 dark:from-neutral-950/95 dark:to-neutral-950/85",
          getRoundedValue(rounded, "child"),
          classNameChild,
        )}
      >
        {children}
      </div>
    </div>
  );
};
