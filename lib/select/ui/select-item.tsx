import clsx from "clsx";
import { PropsWithChildren, useCallback, useMemo } from "react";
import { useSelect, useSelectActions } from "../model/select-context";

import "../styles/select.scss";

export type SelectItemProps = PropsWithChildren<{
  value: string;
}>;

export const SelectItem = ({ children, value }: SelectItemProps) => {
  const { isOpen } = useSelect();
  const { onValueChange, close } = useSelectActions();

  const handleClick = useCallback(() => {
    onValueChange(value);
    close();
  }, [onValueChange, close, value]);

  return (
    <li
      className={clsx("frey-select__item", { open: isOpen })}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};
