import AnimatedBackground, {
  type AnimatedBackgroundProps,
} from "#/src/app/(site)/components/sidemenu/animated-background";

export function NavigationSidemenuAnimatedBackground({
  children,
  ...props
}: AnimatedBackgroundProps) {
  return (
    <AnimatedBackground
      className="rounded-lg bg-neutral-400/10  flex z-0 pointer-events-none"
      enableHover={true}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.3,
      }}
      {...props}
    >
      {children}
    </AnimatedBackground>
  );
}
