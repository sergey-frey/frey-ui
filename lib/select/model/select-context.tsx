import "../styles/select.scss";

import type { ISelectActionsContextType, ISelectContextType } from "../types";

import {
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

export const SelectContext = createContext<ISelectContextType>({
  isOpen: false,
  value: "",
});

export const SelectActionsContext = createContext<ISelectActionsContextType>({
  open: () => {},
  close: () => {},
  onValueChange: () => {},
});

export const useSelect = () => useContext(SelectContext);

export const useSelectActions = () => useContext(SelectActionsContext);

export type SelectProviderProps = PropsWithChildren<{
  isOpen: boolean;
  value: string;
  isInvertedBehavior?: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onValueChange: (value: string) => void;
}>;

export const SelectProvider = ({
  children,
  isOpen,
  value,
  onOpenChange,
  onValueChange,
}: SelectProviderProps) => {
  const open = useCallback(() => {
    onOpenChange(true);
  }, [onOpenChange]);

  const close = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  const handleValueChange = useCallback(
    (changedValue: string) => {
      onValueChange(changedValue);
    },
    [onValueChange],
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target && event.target instanceof HTMLElement)) {
        return;
      }

      if (!event.target.closest(".frey-select")) {
        close();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [close]);

  return (
    <SelectContext.Provider value={{ isOpen, value }}>
      <SelectActionsContext.Provider
        value={{ open, close, onValueChange: handleValueChange }}
      >
        {children}
      </SelectActionsContext.Provider>
    </SelectContext.Provider>
  );
};
