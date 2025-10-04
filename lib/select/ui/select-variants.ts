import { type VariantProps, cva } from "class-variance-authority";

export const selectVariants = cva(["frey-select"], {
  variants: {
    size: {
      m: "size-m",
    },
    isInvertedBehavior: {
      true: "inverted",
      false: "",
    },
  },
  defaultVariants: {
    size: "m",
    isInvertedBehavior: false,
  },
});

export type SelectVariantsProps = VariantProps<typeof selectVariants>;
