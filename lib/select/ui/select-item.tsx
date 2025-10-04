import "../styles/select.scss";

import clsx from "clsx";
import { type PropsWithChildren, useCallback } from "react";

import { useSelectConfig } from "../model/select-config-context";
import { useSelect, useSelectActions } from "../model/select-context";

export type SelectItemProps = PropsWithChildren<{
  value: string;
}>;

export const SelectItem = ({ children, value }: SelectItemProps) => {
  const { isOpen } = useSelect();
  const { isInvertedBehavior } = useSelectConfig();
  const { onValueChange, close } = useSelectActions();

  const handleClick = useCallback(() => {
    onValueChange(value);
    close();
  }, [onValueChange, close, value]);

  return (
    <li
      role="option"
      className={clsx("frey-select__item", {
        open: isOpen,
        inverted: isInvertedBehavior,
      })}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};
