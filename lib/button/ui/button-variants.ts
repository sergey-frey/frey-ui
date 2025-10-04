import { type VariantProps, cva } from "class-variance-authority";

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
    withStartContent: {
      true: "with-start-content",
      false: "",
    },
    withEndContent: {
      true: "with-end-content",
      false: "",
    },
  },
  defaultVariants: {
    size: "m",
    variant: "empty",
    isIconOnly: false,
    isInvertedBehavior: false,
    disabled: false,
    withStartContent: false,
    withEndContent: false,
  },
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
