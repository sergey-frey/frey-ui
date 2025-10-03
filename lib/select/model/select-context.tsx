import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { SelectActionsContextType, SelectContextType } from "../types";

import "../styles/select.scss";

export const SelectContext = createContext<SelectContextType>({
  isOpen: false,
  value: "",
});

export const SelectActionsContext = createContext<SelectActionsContextType>({
  open: () => {},
  close: () => {},
  onValueChange: () => {},
});

export const useSelect = () => {
  return useContext(SelectContext);
};

export const useSelectActions = () => {
  return useContext(SelectActionsContext);
};

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
    (value: string) => {
      onValueChange(value);
    },
    [onValueChange],
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target || !(event.target instanceof HTMLElement)) {
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
