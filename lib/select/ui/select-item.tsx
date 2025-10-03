import clsx from "clsx";
import { PropsWithChildren, useCallback, useMemo } from "react";
import { useSelect, useSelectActions } from "../model/select-context";

import "../styles/select.scss";
import { useSelectConfig } from "../model/select-config-context";

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
