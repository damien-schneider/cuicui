"use client";
import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "What is CuiCui, and what is its purpose?",
		answer:
			"CuiCui is a high-quality React component library designed to streamline the development of user interfaces by providing ready-to-use elements that developers can easily copy and paste into their projects.",
	},
	{
		question: "What types of components are available in CuiCui?",
		answer:
			"CuiCui offers a variety of components such as cards, navigation bars, quotes, buttons, and more, all styled with Tailwind CSS.",
	},
	{
		question: "How can I integrate CuiCui components into my React project?",
		answer:
			"To integrate CuiCui components, simply copy the desired component's code from the official website and paste it into your React project. Ensure your project is configured with Tailwind CSS for optimal rendering.",
	},
	{
		question: "Is CuiCui an open-source library?",
		answer:
			"Yes, CuiCui is an open-source library. You can view the source code and contribute to the project on GitHub.",
	},
];

export const FullSectionFaq = () => {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-5 w-full ">
				<div
					className="col-span-2 p-12 bg-neutral-50 dark:bg-neutral-900 z-10"
					// style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 18px" }}
				>
					<h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
						Frequently Asked Questions
					</h2>
					<p className="text-neutral-600 dark:text-neutral-300 mb-8 ">
						Here are some common questions about CuiCui. If you have any other
						questions, feel free to reach out to us.
					</p>
				</div>
				<div className="space-y-8 col-span-3 py-12 px-20 bg-white dark:bg-neutral-950 border-t md:border-l md:border-t-0 border-neutral-400/15">
					{faqs.map((faq, index) => (
						<div key={faq.question} className="pb-3">
							<div className="flex justify-between items-center">
								<h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-100 tracking-tight">
									{faq.question}
								</h3>
							</div>

							<p className="text-neutral-700 dark:text-neutral-400 mt-2 leading-6">
								{faq.answer}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
