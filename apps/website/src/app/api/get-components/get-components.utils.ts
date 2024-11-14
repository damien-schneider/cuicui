import type { FileSystemNode } from "#/src/app/api/get-components/route";

// Helper function to extract categories from the tree
export function extractCategories(node: FileSystemNode): CategoryType[] {
	const categories: CategoryType[] = [];

	if (
		node.type === "directory" &&
		node.config &&
		node.config.type === "category"
	) {
		const category: CategoryType = {
			slug: node.config.slug,
			name: node.config.name,
			description: node.config.description,
			releaseDateCategory: node.config.releaseDateCategory
				? new Date(node.config.releaseDateCategory)
				: undefined,
			icon: node.config.icon,
			previewCategory: node.config.previewCategory,
			componentList: [],
		};

		if (node.children) {
			for (const child of node.children) {
				const components = extractComponents(child);
				category.componentList.push(...components);
			}
		}

		categories.push(category);
	} else if (node.children) {
		for (const child of node.children) {
			categories.push(...extractCategories(child));
		}
	}

	return categories;
}

// Helper function to extract components from the tree
export function extractComponents(node: FileSystemNode): ComponentType[] {
	const components: ComponentType[] = [];

	if (
		node.type === "directory" &&
		node.config &&
		node.config.type === "component"
	) {
		const component: ComponentType = {
			title: node.config.title,
			description: node.config.description,
			sizePreview: node.config.sizePreview,
			slug: node.config.slug,
			isIframed: node.config.isIframed,
			variantList: [],
			inspiration: node.config.inspiration,
			inspirationLink: node.config.inspirationLink,
		};

		if (node.children) {
			for (const child of node.children) {
				const variants = extractVariants(child);
				component.variantList.push(...variants);
			}
		}

		components.push(component);
	} else if (node.children) {
		for (const child of node.children) {
			components.push(...extractComponents(child));
		}
	}

	return components;
}

// Helper function to extract variants from the tree
export function extractVariants(node: FileSystemNode): VariantType[] {
	const variants: VariantType[] = [];

	if (
		node.type === "directory" &&
		node.config &&
		node.config.type === "variant"
	) {
		const variant: VariantType = {
			name: node.config.name,
			slugPreviewFile: node.config.slugPreviewFile,
			slugComponentFile: node.config.slugComponentFile,
		};

		variants.push(variant);
	} else if (node.children) {
		for (const child of node.children) {
			variants.push(...extractVariants(child));
		}
	}

	return variants;
}

export type VariantType = {
	name: string;
	slugPreviewFile: string;
	slugComponentFile?: string;
};

export type ComponentType = {
	title: string;
	description: string;
	sizePreview: string;
	slug: string;
	isIframed?: boolean;
	variantList: VariantType[];
	inspiration?: string;
	inspirationLink?: string;
};

export type CategoryType = {
	slug: string;
	name: string;
	description: string;
	releaseDateCategory?: Date;
	icon?: string; // Adjusted to string for simplicity
	previewCategory?: {
		component?: string; // Adjusted to string for simplicity
		previewImage?: string;
		previewScale?: number;
	};
	componentList: ComponentType[];
};
