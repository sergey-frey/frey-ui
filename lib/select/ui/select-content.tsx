import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";

import "../styles/select.scss";

export type SelectContentProps = PropsWithChildren<{
  topOffset?: number | string;
}>;

export const SelectContent = ({
  children,
  topOffset = "0.25rem",
}: SelectContentProps) => {
  const _topOffset =
    typeof topOffset === "string" ? topOffset : `${topOffset}px`;

  return (
    <ul
      className="frey-select__content"
      style={{
        "--content-top-offset": _topOffset,
      }}
    >
      {children}
    </ul>
  );
};
