import { cva, VariantProps } from "class-variance-authority";

export const loaderVariants = cva(["frey-loader"], {
  variants: {
    variant: {
      empty: "variant-empty",
      fill: "variant-fill",
    },
    size: {
      s: "size-s",
      m: "size-m",
      l: "size-l",
    },
  },
  defaultVariants: {
    size: "m",
    variant: "fill",
  },
});

export type LoaderVariantsProps = VariantProps<typeof loaderVariants>;
