import type { Registry, RegistryItem } from "shadcn/registry";
import { BatteryChargingIcon, type LucideIcon } from "lucide-react";
// Extended type for the registry items to include component and icon as lucideIcon type.

export type ExtendedRegistryItem = RegistryItem & {
	icon?: LucideIcon;
};

export type ExtendedRegistry = Registry & {
	icon?: LucideIcon;
	items: ExtendedRegistryItem[];
};

export const hooksRegistry: ExtendedRegistry = {
	name: "hooks",
	homepage: "https://cuicui.day",
	items: [
		{
			name: "use-battery",
			type: "registry:block",
			title: "Use Battery",
			description: "A hook to get battery informations",
			author: "Damien Schneider",
			icon: BatteryChargingIcon,
			files: [
				{
					path: "src/use-battery/index.tsx",
					type: "registry:hook",
				},
			],
		},
		{
			name: "use-bluetooth",
			type: "registry:block",
			title: "Use Bluetooth",
			description:
				"A hook to interact with Bluetooth devices via Web Bluetooth API",
			author: "Damien Schneider",
			files: [
				{
					path: "src/use-bluetooth/index.ts",
					type: "registry:hook",
				},
			],
		},
		{
			name: "use-click-outside",
			type: "registry:block",
			title: "Use Click Outside",
			description: "A hook to detect clicks outside of a specified element",
			author: "Damien Schneider",
			files: [
				{
					path: "src/use-click-outside/index.ts",
					type: "registry:hook",
				},
			],
		},
		{
			name: "use-event-listener",
			type: "registry:block",
			title: "Use Event Listener",
			description:
				"A hook to add event listeners to DOM elements with proper cleanup",
			author: "Damien Schneider",
			files: [
				{
					path: "src/use-event-listener/index.ts",
					type: "registry:hook",
				},
			],
		},
		{
			name: "use-isomorphic-layout-effect",
			type: "registry:block",
			title: "Use Isomorphic Layout Effect",
			description:
				"A hook that uses useLayoutEffect on the client and useEffect on the server",
			author: "Damien Schneider",
			files: [
				{
					path: "src/use-isomorphic-layout-effect/index.ts",
					type: "registry:component",
				},
			],
		},
	],
};
