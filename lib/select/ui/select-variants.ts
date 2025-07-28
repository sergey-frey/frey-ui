import { cva, VariantProps } from "class-variance-authority";

export const selectVariants = cva(["frey-select"], {
  variants: {
    size: {
      m: "size-m",
    },
  },
});

export type SelectVariantsProps = VariantProps<typeof selectVariants>;
