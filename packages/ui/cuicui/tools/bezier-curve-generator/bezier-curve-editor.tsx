"use client";

import { BezierEditor } from "bezier-editor";
import { useState } from "react";
import { sleep } from "@/cuicui/utils/sleep/sleep";

type BezierValueType = [number, number, number, number];

export function CuicuiBezierCurveEditor() {
	const [value, setValue] = useState<BezierValueType>([0.25, 0.25, 0.75, 0.75]);
	const [progress, _setProgress] = useState(0);
	const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
	const [timePreviewMs, setTimePreviewMs] = useState(1000);
	const [rerenderCurveEditorCounter, setRerenderCurveEditorCounter] =
		useState(0);
	const rerenderCurveEditor = () =>
		setRerenderCurveEditorCounter((prev) => prev + 1);
	const handlePlay = (value: boolean) => {
		setIsAnimationPlaying(value);
	};

	const _handlePlayOnce = async () => {
		setIsAnimationPlaying(true);
		await sleep(timePreviewMs);
		setIsAnimationPlaying(false);
	};

	const defaultCurves: { name: string; value: BezierValueType }[] = [
		{ name: "Ease", value: [0.25, 0.1, 0.25, 1.0] },
		{ name: "Linear", value: [0.0, 0.0, 1.0, 1.0] },
		{ name: "Ease-In", value: [0.42, 0.0, 1.0, 1.0] },
		{ name: "Ease-Out", value: [0.0, 0.0, 0.58, 1.0] },
		{ name: "Ease-In-Out", value: [0.42, 0.0, 0.58, 1.0] },
	];

	// useEffect(() => {
	//   if (isPlaying) {
	//     const interval = setInterval(() => {
	//       setProgress((prev) => (prev + 0.01) % 1);
	//     }, timePreviewMs / 60);
	//     return () => clearInterval(interval);
	//   }
	//   setProgress(0);
	// }, [isPlaying, timePreviewMs]);

	return (
		<section className="flex flex-col md:flex-row gap-4">
			{/* Éditeur de courbes */}
			<div className="w-full md:w-1/2">
				<BezierEditor
					background="transparent"
					className="rounded-xl bg-white dark:invert dark:bg-neutral-300 dark:-hue-rotate-180 shadow-md m-4 mx-auto"
					defaultValue={value}
					handleColor="#F26378"
					handleStroke={4}
					key={rerenderCurveEditorCounter}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					progress={progress}
					progressColor="#3BC4F2"
					value={value}
				/>
				{/* Champ pour modifier la durée de la transition */}
				<div className="mt-4">
					<label htmlFor="timePreviewMs">Transition duration (ms) :</label>
					<input
						id="timePreviewMs"
						onChange={(e) => setTimePreviewMs(Number(e.target.value))}
						type="number"
						value={timePreviewMs}
					/>
				</div>
				{/* Boutons pour les courbes par défaut */}
				<div className="mt-4">
					<p className="">Default curves :</p>
					<div className="flex flex-wrap gap-2">
						{defaultCurves.map((curve) => (
							<button
								key={curve.name}
								onClick={() => {
									setValue(curve.value);
									rerenderCurveEditor();
								}}
								type="button"
							>
								{curve.name}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="w-full md:w-1/2">
				<h2>Curve Preview</h2>
				<div className="w-full border-neutral-400/15 bg-neutral-400/20 border rounded-2xl p-4">
					<div
						className="w-1/2 h-20 rounded-xl"
						style={{
							transform: isAnimationPlaying
								? "translateX(100%)"
								: "translateX(0)",
							transition: `transform ${timePreviewMs}ms cubic-bezier(${value.join(",")})`,
							backgroundImage:
								"linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
						}}
					/>
				</div>
				{/* Boutons de contrôle */}
				<div className="mt-4 flex w-full gap-3">
					{isAnimationPlaying ? (
						<button
							className="w-full"
							onClick={() => handlePlay(false)}
							type="button"
						>
							Back
						</button>
					) : (
						<button
							className="w-full"
							onClick={() => handlePlay(true)}
							type="button"
						>
							Play once
						</button>
					)}
				</div>
				{/* Affichage des valeurs de la courbe */}
				<div className="mt-4">
					<p className="">Actual curve values :</p>
					<p className="bg-neutral-400/20 p-2 rounded-lg mb-2">
						<span>cubic-bezier(</span>
						{value.map((v) => `${v.toFixed(2)}`).join(", ")}
						<span>)</span>
					</p>
				</div>
				<div className="mt-4">
					<p className="">
						Default ease curve comparison : (0.25, 0.1, 0.25, 1.0)
					</p>
					<div className="w-full border border-neutral-400/15 bg-neutral-400/20 rounded-2xl p-4">
						<div
							className="w-1/2 h-20 rounded-xl"
							style={{
								transform: isAnimationPlaying
									? "translateX(100%)"
									: "translateX(0)",
								transition: `transform ${timePreviewMs}ms cubic-bezier(0.25, 0.1, 0.25, 1.0)`,
								backgroundImage:
									"linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
