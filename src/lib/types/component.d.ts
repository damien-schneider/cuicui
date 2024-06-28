export type Variant = `variant${number}`;

export type VariantComponent = {
  variantName: string;
  component: React.JSX.Element;
  code: string;
};
