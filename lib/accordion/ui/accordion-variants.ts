import { cva, VariantProps } from "class-variance-authority";

export const accordionVariants = cva(["frey-accordion"], {
  variants: {
    size: {
      m: "size-m",
      s: "size-s",
    },
    isOpen: {
      true: "open",
      false: "",
    },
  },

  defaultVariants: {
    size: "m",
  },
});

export type AccordionVariantsProps = VariantProps<typeof accordionVariants>;
