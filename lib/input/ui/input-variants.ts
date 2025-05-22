import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva([], {
  variants: {
    size: {
      m: ["size-m"],
      s: ["size-s"],
    },
    isInvalid: {
      true: "invalid",
      false: "",
    },
  },

  defaultVariants: {
    size: "m",
    isInvalid: false,
  },
});

export type InputVariantsProps = VariantProps<typeof inputVariants>;
