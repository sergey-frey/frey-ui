import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonVariants, ButtonVariantsProps } from "./button-variants";

import "../styles/button.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantsProps & {
    startContent?: ReactNode;
    endContent?: ReactNode;
  };

export const Button = ({
  size,
  variant,
  isIconOnly,
  isInvertedBehavior,
  startContent,
  endContent,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonVariants({
        size,
        variant,
        isIconOnly,
        isInvertedBehavior,
        disabled: props.disabled,
        className,
      })}
    >
      {startContent && (
        <span className="frey-button__content-container start-content">
          {startContent}
        </span>
      )}
      {children}
      {endContent && (
        <span className="frey-button__content-container end-content">
          {endContent}
        </span>
      )}
    </button>
  );
};
