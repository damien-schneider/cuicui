import { cn } from "@/src/utils/cn/cn";
import type { HTMLAttributes } from "react";

export default function AnimatedNoise({
	opacity,
	className,
	...props
}: { opacity: number } & HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<style>{style}</style>
			<div
				className={cn(
					"absolute bg-noise inset-0 z-40 pointer-events-none select-none",
					className,
				)}
				style={{
					animation: "noise .8s steps(10) infinite",
					backgroundRepeat: "repeat",
					backgroundImage: svgUrlEncoded,
					backgroundSize: "20%",
					opacity,
				}}
				{...props}
			/>
		</>
	);
}

const svgUrlEncoded = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 700 700' width='700' height='700' opacity='1'%3e%3ctitle%3enoise%3c/title%3e%3cdefs%3e%3cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'/%3e%3cfeSpecularLighting surfaceScale='5' specularConstant='0.8' specularExponent='20' lighting-color='white' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3e%3cfeDistantLight azimuth='3' elevation='96'/%3e%3c/feSpecularLighting%3e%3cfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='specularLighting' result='colormatrix'/%3e%3c/filter%3e%3c/defs%3e%3crect width='700' height='700' fill='black'/%3e%3crect width='700' height='700' fill='white' filter='url(%23nnnoise-filter)'/%3e%3c/svg%3e")`;

const style = `
@keyframes noise {
  0%, 100% {
    scale: 2;
    transform: translate(0, 0);
  }
  1%, 9% {
    transform: translate(0px, 0px);
  }
  10%, 20% {
    transform: translate(10px, -20px);
  }
  21%, 30% {
    transform: translate(-15px, 25px);
  }
  31%, 40% {
    transform: translate(20px, -30px);
  }
  41%, 50% {
    transform: translate(-25px, 35px);
  }
  51%, 60% {
    transform: translate(30px, -40px);
  }
  61%, 70% {
    transform: translate(-35px, 45px);
  }
  71%, 80% {
    transform: translate(40px, -50px);
  }
  81%, 90% {
    transform: translate(-45px, 55px);
  }
  91%, 99% {
    transform: translate(50px, -60px);
  }
}
  `;
