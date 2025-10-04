import type { ISelectConfigContextType } from "../types";

import { type PropsWithChildren, createContext, useContext } from "react";

export const SelectConfigContext = createContext<ISelectConfigContextType>({
  isInvertedBehavior: false,
  contentScrollShadowHeight: "1rem",
  topScrollShadowThreshold: 10,
  bottomScrollShadowThreshold: 10,
});

export const useSelectConfig = () => useContext(SelectConfigContext);

type SelectConfigProviderProps = PropsWithChildren<{
  isInvertedBehavior: boolean;
  contentScrollShadowHeight: string;
  topScrollShadowThreshold: number;
  bottomScrollShadowThreshold: number;
}>;

export const SelectConfigProvider = ({
  children,
  ...props
}: SelectConfigProviderProps) => (
  <SelectConfigContext.Provider value={props}>
    {children}
  </SelectConfigContext.Provider>
);
