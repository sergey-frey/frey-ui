import clsx from "clsx";
import { PropsWithChildren, type ReactNode } from "react";
import { Button, type ButtonProps } from "../../button/ui/button";
import { selectVariants, type SelectVariantsProps } from "./select-variants";

import "../styles/select.scss";

export type SelectRootProps = PropsWithChildren<{}> & SelectVariantsProps;
export type SelectTriggerProps = ButtonProps & {
  openIndicator?: ReactNode;
};
export type SelectContentProps = PropsWithChildren<{
  topOffset?: number | string;
}>;
export type SelectItemProps = PropsWithChildren<{}>;

const SelectRoot = ({ children, size }: SelectRootProps) => {
  return <div className={selectVariants({ size })}>{children}</div>;
};

const SelectTrigger = ({
  className,
  openIndicator,
  ...props
}: SelectTriggerProps) => {
  return (
    <Button
      {...props}
      className={clsx("frey-select__trigger", className)}
      endContent={openIndicator ?? props.endContent}
    />
  );
};

const SelectContent = ({
  children,
  topOffset = "0.2rem",
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

const SelectItem = ({ children }: SelectItemProps) => {
  return <li className="frey-select__item">{children}</li>;
};

export { SelectContent, SelectItem, SelectRoot, SelectTrigger };
