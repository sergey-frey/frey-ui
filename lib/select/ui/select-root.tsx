import "../styles/select.scss";

import type { PropsWithChildren, ReactNode } from "react";
import type { ISelectConfigContextType } from "../types";

import { normalizeUnit } from "../../utils";
import { SelectConfigProvider } from "../model/select-config-context";
import {
  SelectProvider,
  type SelectProviderProps,
} from "../model/select-context";
import {
  SelectSlotsProvider,
  type SelectSlotsProviderProps,
} from "../model/select-slots-context";
import { DefaultSelectIndicator } from "../ui/_default-select-indicator";
import { type SelectVariantsProps, selectVariants } from "./select-variants";

export type SelectRootProps = PropsWithChildren<
  SelectProviderProps &
    SelectSlotsProviderProps &
    Partial<ISelectConfigContextType>
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
