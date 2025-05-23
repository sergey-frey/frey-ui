import { cva, VariantProps } from "class-variance-authority";

export const accordionVariants = cva(["frey-accordion"], {
  variants: {},
});

export type AccordionVariantsProps = VariantProps<typeof accordionVariants>;
