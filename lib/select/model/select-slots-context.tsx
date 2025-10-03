import { createContext, PropsWithChildren, ReactNode, useContext } from "react";
import { SelectSlotsContextType } from "../types";

export const SelectSlotsContext = createContext<SelectSlotsContextType>({
  selectIndicator: null,
});

export const useSelectSlots = () => {
  return useContext(SelectSlotsContext);
};

export type SelectSlotsProviderProps = PropsWithChildren<{
  selectIndicator?: ReactNode;
}>;

export const SelectSlotsProvider = ({
  children,
  selectIndicator,
}: SelectSlotsProviderProps) => {
  return (
    <SelectSlotsContext.Provider value={{ selectIndicator }}>
      {children}
    </SelectSlotsContext.Provider>
  );
};
