import Link from "next/link";
import { CUICUI_GITHUB_URL } from "@/lib/site.const";
import ColorConverter from "@/cuicui/tools/color-converter/components/color-converter";

export function PageColorConverter() {
	return (
		<>
			{/* Header Section */}
			<header className="cuicui-default-style mb-12 mt-6">
				<h1>RGB, HSL, HEX & Tailwind Class Converter</h1>
				<p>
					Convert between RGB, HSL, HEX, and Tailwind classes effortlessly with{" "}
					<strong>CuiCui</strong>.
				</p>
			</header>
			<ColorConverter />

			<div className="cuicui-default-style mt-40">
				{/* How It Works Section */}
				<section>
					<h2>How Does CuiCui Work?</h2>
					<ol>
						<li>
							<strong>Select Conversion Type:</strong> Choose the desired
							conversion direction (e.g., RGB to Tailwind, HEX to HSL).
						</li>
						<li>
							<strong>Input Color Code:</strong> Enter your color value in the
							designated input field. Formats can include RGB, HSL, HEX, or
							Tailwind classes.
						</li>
						<li>
							<strong>Instant Conversion:</strong> CuiCui utilizes the Delta E
							algorithm to accurately measure color differences and find the
							closest matching Tailwind color.
						</li>
						<li>
							<strong>Copy & Compare:</strong> Easily copy the converted color
							code by clicking the clipboard icon or using keyboard shortcuts.
							Visually compare the original and converted colors to ensure
							accuracy.
						</li>
						<li>
							<strong>Visibility Check:</strong> CuiCui highlights whether the
							color difference is noticeable to the human eye by evaluating if
							the Delta E score exceeds the threshold of 1.
						</li>
					</ol>
				</section>

				{/* Open Source Section */}
				<section>
					<h2>Open Source</h2>
					<p>
						<strong>CuiCui</strong> is open-sourced! Contribute to the project
						or customize it to fit your needs by visiting our{" "}
						<Link href={CUICUI_GITHUB_URL} title="CuiCui GitHub Repository">
							GitHub repository
						</Link>
						.
					</p>
				</section>
			</div>
		</>
	);
}
