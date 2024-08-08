import { cn } from "../utils/cn";

export default ({
  children,
  classNameParent,
  classNameChild,
  classNameBlur,
  rounded = "md",
  background = "glassy",
  border = true,
  gradientDirection = "to-br",
}: Readonly<{
  children: React.ReactNode;
  classNameParent?: string;
  classNameChild?: string;
  classNameBlur?: string;
  rounded?: "xs" | "sm" | "md" | "lg" | "full" | "none";
  background?: "glassy" | "solid";
  gradientDirection?:
    | "to-t"
    | "to-b"
    | "to-l"
    | "to-r"
    | "to-tl"
    | "to-tr"
    | "to-bl"
    | "to-br";
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

  function getGradientDirection(
    gradientDirectionValue: typeof gradientDirection,
  ) {
    switch (gradientDirectionValue) {
      case "to-t":
        return "bg-gradient-to-t";
      case "to-b":
        return "bg-gradient-to-b";
      case "to-l":
        return "bg-gradient-to-l";
      case "to-r":
        return "bg-gradient-to-r";
      case "to-tl":
        return "bg-gradient-to-tl";
      case "to-tr":
        return "bg-gradient-to-tr";
      case "to-bl":
        return "bg-gradient-to-bl";
      case "to-br":
        return "bg-gradient-to-br";
      default:
        return "bg-gradient-to-b";
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
          "absolute blur-2xl -inset-2 -z-10 opacity-10 pointer-events-none rounded-[inherit]",
          // getGradientDirection(gradientDirection),
          classNameBlur,
        )}
        style={{
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
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
