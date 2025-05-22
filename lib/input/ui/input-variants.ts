import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva(["frey-input"], {
	variants: {},
});

export type InputVariantsProps = VariantProps<typeof inputVariants>;
