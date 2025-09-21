import { ButtonProps, Button } from "../../button";
import clsx from "clsx";
import { ReactNode, useCallback, useMemo } from "react";
import { useSelect, useSelectActions } from "../model/select-context";

import "../styles/select.scss";

export type SelectTriggerProps = ButtonProps & {
  openIndicator?: ReactNode;
};

export const SelectTrigger = ({
  className,
  openIndicator,
  ...props
}: SelectTriggerProps) => {
  const { isOpen, value, isInvertedBehavior } = useSelect();
  const { open, close } = useSelectActions();

  const handleClick = useCallback(() => {
    if (isOpen) {
      return close();
    }

    open();
  }, [open, close, isOpen]);

  const children = useMemo(() => {
    return value || props.children;
  }, [props.children, value]);

  return (
    <Button
      {...props}
      className={clsx("frey-select__trigger", { open: isOpen }, className)}
      isInvertedBehavior={isInvertedBehavior ?? props.isInvertedBehavior}
      endContent={openIndicator ?? props.endContent}
      onClick={handleClick}
      data-id="select-trigger"
    >
      {children}
    </Button>
  );
};
