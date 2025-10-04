import type { ReactNode } from "react";

export interface ISelectContextType {
  isOpen: boolean;
  value: string;
}

export interface ISelectActionsContextType {
  open: () => void;
  close: () => void;
  onValueChange: (value: string) => void;
}

export interface ISelectSlotsContextType {
  selectIndicator?: ReactNode;
}

export interface ISelectConfigContextType {
  isInvertedBehavior: boolean;
  contentScrollShadowHeight: string;
  topScrollShadowThreshold: number;
  bottomScrollShadowThreshold: number;
}
