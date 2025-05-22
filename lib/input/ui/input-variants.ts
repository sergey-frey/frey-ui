import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva(["frey-input"], {
  variants: {
    size: {
      m: ["size-m"],
      s: ["size-s"],
    },
    isInvalid: {
      true: "invalid",
      false: "",
    },
    withStartContent: {
      true: "with-start-content",
      false: "",
    },
  },

  defaultVariants: {
    size: "m",
    isInvalid: false,
  },
});

export type InputVariantsProps = VariantProps<typeof inputVariants>;
