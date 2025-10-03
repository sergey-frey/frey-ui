import { PropsWithChildren, ReactNode } from "react";
import { SelectProvider, SelectProviderProps } from "../model/select-context";
import {
  SelectSlotsProvider,
  SelectSlotsProviderProps,
} from "../model/select-slots-context";
import { DefaultSelectIndicator } from "../ui/_default-select-indicator";
import { SelectVariantsProps, selectVariants } from "./select-variants";

import { normalizeUnit } from "../../utils";

import "../styles/select.scss";
import { SelectConfigContextType } from "../types";
import { SelectConfigProvider } from "../model/select-config-context";

export type SelectRootProps = PropsWithChildren<
  SelectProviderProps &
    SelectSlotsProviderProps &
    Partial<SelectConfigContextType>
> &
  SelectVariantsProps & {
    className?: string;
    selectedItemIndicator?: ReactNode;
  };

export const SelectRoot = ({
  children,
  size,
  isOpen,
  value,
  selectedItemIndicator = <DefaultSelectIndicator />,
  className,
  onValueChange,
  onOpenChange,
  isInvertedBehavior = false,
  contentScrollShadowHeight = "1rem",
  topScrollShadowThreshold = 10,
  bottomScrollShadowThreshold = 10,
}: SelectRootProps) => {
  const _contentScrollShadowHeight = normalizeUnit(contentScrollShadowHeight);

  return (
    <SelectConfigProvider
      isInvertedBehavior={isInvertedBehavior}
      contentScrollShadowHeight={_contentScrollShadowHeight}
      topScrollShadowThreshold={topScrollShadowThreshold}
      bottomScrollShadowThreshold={bottomScrollShadowThreshold}
    >
      <SelectSlotsProvider selectIndicator={selectedItemIndicator}>
        <SelectProvider
          isOpen={isOpen}
          value={value}
          isInvertedBehavior={isInvertedBehavior}
          onOpenChange={onOpenChange}
          onValueChange={onValueChange}
        >
          <div
            className={selectVariants({ size, isInvertedBehavior, className })}
            style={{
              "--select-content-scroll-shadow-height":
                _contentScrollShadowHeight,
            }}
          >
            {children}
          </div>
        </SelectProvider>
      </SelectSlotsProvider>
    </SelectConfigProvider>
  );
};
