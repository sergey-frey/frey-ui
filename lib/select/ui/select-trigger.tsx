import { ButtonProps, Button } from "../../button";
import clsx from "clsx";
import { ReactNode, useCallback, useMemo } from "react";
import { useSelect, useSelectActions } from "../model/select-context";

import "../styles/select.scss";
import { useSelectSlots } from "../model/select-slots-context";
import { useSelectConfig } from "../model/select-config-context";

export type SelectTriggerProps = ButtonProps;

export const SelectTrigger = ({ className, ...props }: SelectTriggerProps) => {
  const { isOpen, value } = useSelect();
  const { isInvertedBehavior } = useSelectConfig();
  const { selectIndicator } = useSelectSlots();
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
      endContent={selectIndicator ?? props.endContent}
      onClick={handleClick}
      data-id="select-trigger"
    >
      {children}
    </Button>
  );
};
