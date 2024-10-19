"use client";
import { catchError } from "@/src/utils/catch-error/catch-error";
import { useState } from "react";

// A mock API function that returns a promise
const fetchData = (withError: boolean) => {
	return new Promise<string>((resolve, reject) => {
		setTimeout(() => {
			if (withError) {
				reject(new Error("An error occurred"));
			} else {
				resolve("Data fetched successfully");
			}
		}, 1000);
	});
};

// React component
export const PreviewCatchError = () => {
	const [data, setData] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const handleFetchData = async (withError: boolean) => {
		setLoading(true);
		const [error, data] = await catchError(fetchData(withError));
		setLoading(false);
		if (error) {
			setError(error.message);
			setData(null);
		} else {
			setData(data);
			setError(null);
		}
	};

	return (
		<div className="cuicui-default-style">
			<h1>Data Fetcher Example</h1>
			<button
				type="button"
				onClick={() => {
					handleFetchData(false);
				}}
			>
				Fetch Data
			</button>
			<button
				type="button"
				onClick={() => {
					handleFetchData(true);
				}}
			>
				Fetch Data with Error
			</button>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					{data && <p>Data: {data}</p>}
					{error && <p>Error: {error}</p>}
				</>
			)}
		</div>
	);
};
