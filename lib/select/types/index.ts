export type SelectContextType = {
  isOpen: boolean;
  value: string;
  isInvertedBehavior: boolean;
};

export type SelectActionsContextType = {
  open: () => void;
  close: () => void;
  onValueChange: (value: string) => void;
};
