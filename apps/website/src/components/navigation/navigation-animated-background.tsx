import AnimatedBackground, {
	type AnimatedBackgroundProps,
} from "#/src/components/navigation/animated-background";

export function NavigationAnimatedBackground({
	children,
	...props
}: Readonly<AnimatedBackgroundProps>) {
	return (
		<AnimatedBackground
			className="rounded-lg bg-zinc-400/10  flex z-0 pointer-events-none"
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
