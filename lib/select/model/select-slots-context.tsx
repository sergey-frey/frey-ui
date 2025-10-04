import type { ISelectSlotsContextType } from "../types";

import {
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useContext,
} from "react";

export const SelectSlotsContext = createContext<ISelectSlotsContextType>({
  selectIndicator: null,
});

export const useSelectSlots = () => useContext(SelectSlotsContext);

export type SelectSlotsProviderProps = PropsWithChildren<{
  selectIndicator?: ReactNode;
}>;

export const SelectSlotsProvider = ({
  children,
  selectIndicator,
}: SelectSlotsProviderProps) => (
  <SelectSlotsContext.Provider value={{ selectIndicator }}>
    {children}
  </SelectSlotsContext.Provider>
);
