import { HTMLAttributes, ReactNode } from "react";
import {
  accordionVariants,
  AccordionVariantsProps,
} from "./accordion-variants";

import "../styles/accordion.scss";

export type AccordionProps = AccordionVariantsProps &
  HTMLAttributes<HTMLDivElement> & {
    label?: ReactNode;
  };

export const Accordion = ({
  className,
  label,
  children,
  ...accordionProps
}: AccordionProps) => {
  return (
    <div {...accordionProps} className={accordionVariants({ className })}>
      <div className="frey-accordion__label">{label}</div>
      <div className="frey-accordion__content">{children}</div>
    </div>
  );
};
