import {
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useState,
} from "react";

import {
  type AccordionVariantsProps,
  accordionVariants,
} from "./accordion-variants";

import "../styles/accordion.scss";

import { DefaultAccordionIndicator } from "./default-accordion-indicator";

export type AccordionProps = AccordionVariantsProps &
  HTMLAttributes<HTMLDivElement> & {
    label?: ReactNode;
    isOpen: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    indicator?: ReactNode;
  };

export const Accordion = ({
  className,
  label,
  isOpen,
  size,
  onOpenChange,
  indicator = <DefaultAccordionIndicator />,
  children,
  ...accordionProps
}: AccordionProps) => {
  const [contentHeight, setContentHeight] = useState(0);

  const contentRef = useCallback(
    (el: HTMLDivElement) => {
      if (isOpen) {
        setContentHeight(el?.scrollHeight);
      } else {
        setContentHeight(0);
      }
    },
    [isOpen, children],
  );

  const handleOpenChange = () => {
    onOpenChange?.(!isOpen);
  };

  return (
    <div
      {...accordionProps}
      className={accordionVariants({ isOpen, size, className })}
    >
      <button
        type="button"
        className="frey-accordion__trigger"
        onClick={handleOpenChange}
      >
        {label}

        <span className="frey-accordion__indicator">{indicator}</span>
      </button>
      <div
        ref={contentRef}
        className="frey-accordion__content"
        style={{ height: contentHeight }}
      >
        {children}
      </div>
    </div>
  );
};
