import { ReactNode } from "react";

export type SelectContextType = {
  isOpen: boolean;
  value: string;
};

export type SelectActionsContextType = {
  open: () => void;
  close: () => void;
  onValueChange: (value: string) => void;
};

export type SelectSlotsContextType = {
  selectIndicator?: ReactNode;
};

export type SelectConfigContextType = {
  isInvertedBehavior: boolean;
  contentScrollShadowHeight: string;
  topScrollShadowThreshold: number;
  bottomScrollShadowThreshold: number;
};
