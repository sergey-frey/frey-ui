import "../styles/select.scss";

import clsx from "clsx";
import { useCallback, useMemo } from "react";

import { Button, type ButtonProps } from "../../button";
import { useSelectConfig } from "../model/select-config-context";
import { useSelect, useSelectActions } from "../model/select-context";
import { useSelectSlots } from "../model/select-slots-context";

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

  const children = useMemo(
    () => value || props.children,
    [props.children, value],
  );

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
