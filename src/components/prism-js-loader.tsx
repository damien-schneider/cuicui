"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "../styles/prism-js-custom.css";
import "prismjs/components/prism-typescript";

export default function PrismLoader() {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return <div className="hidden" />;
}
