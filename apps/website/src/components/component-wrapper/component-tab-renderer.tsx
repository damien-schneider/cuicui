import * as Tabs from "@radix-ui/react-tabs";

import "./full-component.css";

import { ComponentWrapper } from "#/src/components/component-wrapper/component-wrapper";
import StepToInstall from "#/src/components/steps-to-install/step-to-install";
import type {
	ComponentHeightType,
	ProcessedVariantType,
} from "@cuicui/ui/lib/types/component";
import CodeHighlighter from "#/src/ui/code-highlighter";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "#/src/ui/shadcn/resizable";
import {
	ScrollArea,
	ScrollAreaViewport,
	ScrollBar,
} from "#/src/ui/shadcn/scrollarea";
import { cn } from "#/src/utils/cn";
import { getContainerHeightClass } from "#/src/components/component-wrapper/get-container-height-class";
const tabs = [
	{
		name: "Preview",
		value: "preview",
	},
	{
		name: "Preview Code",
		value: "code-preview",
	},
	{
		name: "Component Code",
		value: "code-component",
	},
];
export default function ComponentTabRenderer({
	// name,
	component,
	previewCode,
	componentCode,
	isResizable,
	rerenderButton,
	isIframed = false,
	size,
	componentParams,
}: {
	isResizable?: boolean;
	rerenderButton?: boolean;
	isIframed?: boolean;
	size: ComponentHeightType;
	componentParams: {
		sectionSlug: string;
		categorySlug: string;
		componentSlug: string;
		variantSlug: string;
	};
} & ProcessedVariantType) {
	return (
		<Tabs.Root defaultValue="preview" id="variants-tabs" itemID="variants-tabs">
			<Tabs.List
				className={cn(
					"flex w-full items-center p-0.5 *:w-full *:py-2 *:data-[state=active]:rounded-lg *:data-[state=active]:border-neutral-500/20 *:data-[state=active]:bg-neutral-400/15 *:data-[state=active]:text-neutral-900",
				)}
			>
				{tabs.map((tab) => {
					if (
						(tab.value === "code-preview" && previewCode) ||
						(tab.value === "code-component" && componentCode) ||
						tab.value === "preview"
					) {
						return (
							<Tabs.Trigger
								className={cn(
									"group relative flex items-center justify-center pt-3 pr-2 pb-2 pl-2 font-medium text-sm tracking-tighter transition-colors",
									// after pseudo element
									"after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:rounded-full",
									// after pseudo element gradient
									"after:bg-gradient-to-r after:from-sky-400 after:via-violet-500 after:to-orange-400 ",
									// after pseudo element animation
									"after:scale-x-0 after:transform-gpu after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100",
									"hover:after:scale-x-50",
								)}
								key={tab.value}
								value={tab.value}
							>
								<span className="w-fit scale-100 transform-gpu bg-gradient-to-br from-neutral-800 to-neutral-400 bg-clip-text p-1 font-medium text-transparent transition-transform group-hover:scale-110 group-data-[state=active]:from-sky-400 group-data-[state=active]:via-violet-500 group-data-[state=active]:to-orange-400 dark:from-neutral-300 dark:to-neutral-600 ">
									{tab.name}
								</span>
							</Tabs.Trigger>
						);
					}
				})}
			</Tabs.List>
			<Tabs.Content value="preview" asChild>
				{isResizable ? (
					<ResizablePanelGroup
						className={cn(
							// "flex h-full w-full items-center justify-center",
							// getContainerChildClassBasedOnSize(size),
						)}
						direction="horizontal"
					>
						<ResizablePanel defaultSize={100}>
							{/* {rerenderButton && <RerenderButton setRender={setRender} />} */}
							{/* <p>
								{`/preview/${componentParams.sectionSlug}/${componentParams.categorySlug}/${componentParams.componentSlug}/${componentParams.variantSlug}`}
							</p>
							<iframe
								className="w-full h-full"
								title="component-preview"
								src={`/preview/${componentParams.sectionSlug}/${componentParams.categorySlug}/${componentParams.componentSlug}/${componentParams.variantSlug}`}
							/> */}
							<ComponentWrapper
								isIframed={isIframed}
								renderButton={rerenderButton}
								size={size}
								// key={render}
							>
								{typeof component === "function"
									? component()
									: (component ?? <p>An error has occured</p>)}
							</ComponentWrapper>
						</ResizablePanel>
						<ResizableHandle
							className="-translate-x-2 z-50"
							withHandle={true}
						/>
						<ResizablePanel defaultSize={0}>
							<div className="flex h-full items-center justify-center" />
						</ResizablePanel>
					</ResizablePanelGroup>
				) : (
					<ComponentWrapper
						isIframed={isIframed}
						renderButton={rerenderButton}
						size={size}
						// key={render}
					>
						{typeof component === "function"
							? component()
							: (component ?? <p>An error has occured</p>)}
					</ComponentWrapper>
				)}
			</Tabs.Content>
			{["code-preview", "code-component"].map((tab) => {
				if (
					(tab === "code-preview" && previewCode) ||
					(tab === "code-component" && componentCode)
				) {
					return (
						<Tabs.Content key={tab} value={tab}>
							<ScrollArea
								// With a dynamic height, the code take its full size wich is a weird behaviour
								className={cn(
									"w-full rounded-md border border-neutral-500/20 bg-neutral-100 dark:bg-neutral-900",

									getContainerHeightClass({ size }),
								)}
							>
								<ScrollAreaViewport className="p-3">
									<ScrollBar orientation="vertical" />
									<ScrollBar orientation="horizontal" />
									{tab === "code-preview" && (
										<CodeHighlighter code={previewCode} />
									)}
									{tab === "code-component" && componentCode && (
										<CodeHighlighter code={componentCode} />
									)}
								</ScrollAreaViewport>
							</ScrollArea>
							{tab === "code-preview" && (
								<StepToInstall code={previewCode ?? ""} />
							)}
							{tab === "code-component" && (
								<StepToInstall code={componentCode ?? ""} />
							)}
						</Tabs.Content>
					);
				}
			})}
		</Tabs.Root>
	);
}
