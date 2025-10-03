import { createContext, PropsWithChildren, ReactNode, useContext } from "react";
import { SelectConfigContextType } from "../types";

export const SelectConfigContext = createContext<SelectConfigContextType>({
  isInvertedBehavior: false,
  contentScrollShadowHeight: "1rem",
  topScrollShadowThreshold: 10,
  bottomScrollShadowThreshold: 10,
});

export const useSelectConfig = () => {
  return useContext(SelectConfigContext);
};

type SelectConfigProviderProps = PropsWithChildren<{
  isInvertedBehavior: boolean;
  contentScrollShadowHeight: string;
  topScrollShadowThreshold: number;
  bottomScrollShadowThreshold: number;
}>;

export const SelectConfigProvider = ({
  children,
  ...props
}: SelectConfigProviderProps) => {
  return (
    <SelectConfigContext.Provider value={props}>
      {children}
    </SelectConfigContext.Provider>
  );
};
