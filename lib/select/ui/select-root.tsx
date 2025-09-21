import { PropsWithChildren } from "react";
import { SelectProviderProps, SelectProvider } from "../model/select-context";
import { SelectVariantsProps, selectVariants } from "./select-variants";

import "../styles/select.scss";

export type SelectRootProps = PropsWithChildren<SelectProviderProps> &
  SelectVariantsProps & {
    className?: string;
  };

export const SelectRoot = ({
  children,
  size,
  isOpen,
  value,
  isInvertedBehavior,
  className,
  onValueChange,
  onOpenChange,
}: SelectRootProps) => {
  return (
    <SelectProvider
      isOpen={isOpen}
      value={value}
      isInvertedBehavior={isInvertedBehavior}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <div className={selectVariants({ size, isInvertedBehavior, className })}>
        {children}
      </div>
    </SelectProvider>
  );
};
