import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(["frey-button"], {
	variants: {
		size: {
			m: ["size-m"],
			s: ["size-s"],
		},
		variant: {
			fill: "variant-fill",
			empty: "variant-empty",
		},
		isIconOnly: {
			true: "icon",
			false: "",
		},
		isInvertedBehavior: {
			true: "inverted",
			false: "",
		},
		disabled: {
			true: "disabled",
			false: "",
		},
	},
	defaultVariants: {
		size: "m",
		variant: "empty",
		isIconOnly: false,
		isInvertedBehavior: false,
		disabled: false,
	},
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
