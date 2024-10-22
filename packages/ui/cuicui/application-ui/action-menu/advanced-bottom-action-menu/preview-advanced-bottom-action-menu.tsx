// PreviewAdvancedBottomActionMenu.tsx

"use client";

import {
	Archive,
	Layout,
	type LucideIcon,
	Menu,
	MessageCircle,
	PackageOpen,
	Target,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/cuicui/application-ui/action-menu/advanced-bottom-action-menu/custom-tabs-content";
import {} from "./advanced-bottom-action-menu";

// Define types for items
interface Item {
	name: string;
	icon: LucideIcon;
}

interface ItemsGroup {
	name: string;
	items: Item[];
}

const _items: ItemsGroup[] = [
	{
		name: "Developer tools",
		items: [
			{ name: "Layout shifts", icon: Layout },
			{ name: "Interaction Timing", icon: Layout },
			{ name: "Accessibility", icon: Layout },
			{ name: "Bundle size", icon: Layout },
			{ name: "Open graph", icon: Layout },
		],
	},
	{
		name: "Toolbar",
		items: [
			{ name: "Comment", icon: MessageCircle },
			{ name: "Feature flags", icon: MessageCircle },
			{ name: "Draft mode", icon: MessageCircle },
		],
	},
];

const _Icons: Item[] = [
	{ name: "Icons 1", icon: MessageCircle },
	{ name: "Icons 2", icon: PackageOpen },
	{ name: "Icons 3", icon: Archive },
	{ name: "Icons 4", icon: Target },
	{ name: "Icons 5", icon: Menu },
];

export const PreviewAdvancedBottomActionMenu: React.FC = () => {
	const [valueTabOpen, setValueTabOpen] = useState("");
	const triggers = [
		{ name: "Account", value: "account" },
		{ name: "Password", value: "password" },
	];

	const handleOnValueChange = (value: string) => {
		setValueTabOpen(value);
	};

	const checkIfValueIsInTheTriggers = (value: string) => {
		return triggers.some((trigger) => trigger.value === value);
	};

	return (
		<Tabs
			className="w-[400px]"
			onValueChange={handleOnValueChange}
			value={valueTabOpen}
		>
			<TabsList>
				{!checkIfValueIsInTheTriggers(valueTabOpen) &&
					triggers.map((trigger) => (
						<TabsTrigger key={trigger.value} value={trigger.value}>
							{trigger.name}
						</TabsTrigger>
					))}
				<TabsContent value="password">
					Change your password here.
					<button
						className="bg-neutral-500 text-white p-2 rounded-lg"
						onClick={() => setValueTabOpen("")}
						type="button"
					>
						close
					</button>
				</TabsContent>
			</TabsList>
			<TabsContent value="account">
				<button
					className="bg-neutral-500 text-white p-2 rounded-lg"
					onClick={() => setValueTabOpen("")}
					type="button"
				>
					close
				</button>
				Make changes to your account here.
			</TabsContent>
		</Tabs>

		// <MenuRoot>
		//   <MenuContent value="main-menu">
		//     <motion.div className="flex items-center justify-between">
		//       <div className="rounded border border-muted-foreground/80 w-fit bg-neutral-700/80 px-2 text-base text-neutral-400">
		//         Vercel toolbar
		//       </div>
		//       {/* <MenuTrigger value="main-menu">
		//         <button
		//           type="button"
		//           className="border-muted-foreground/80 text-neutral-400 cursor-pointer hover:bg-neutral-700/80 transition-all duration-300 border center h-10 w-10 rounded-full"
		//         >
		//           <X className="h-4 w-4" />
		//         </button>
		//       </MenuTrigger> */}
		//     </motion.div>
		//     <div className="h-14 border-b border-muted-foreground/80">
		//       <input
		//         type="text"
		//         className="h-full w-full bg-transparent outline-none text-xl text-muted-foreground placeholder:text-muted-foreground"
		//         placeholder="What do you need?"
		//       />
		//     </div>
		//     {items.map((itemGroup) => (
		//       <div key={itemGroup.name} className="flex flex-col gap-2">
		//         <p className="text-muted-foreground">{itemGroup.name}</p>
		//         <motion.ul className="flex flex-col gap-2">
		//           {itemGroup.items.map((item) => (
		//             <li
		//               className="flex items-center gap-2 text-xl text-primary-foreground"
		//               key={item.name}
		//             >
		//               <item.icon className="h-5 w-5" />
		//               <span>{item.name}</span>
		//             </li>
		//           ))}
		//         </motion.ul>
		//       </div>
		//     ))}
		//   </MenuContent>

		//   <MenuTrigger value="main-menu">test</MenuTrigger>
		//   <MenuTrigger value="item-2">test2</MenuTrigger>
		// </MenuRoot>
	);
};
