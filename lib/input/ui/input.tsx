import { InputHTMLAttributes, ReactNode, useId } from "react";
import { inputVariants, InputVariantsProps } from "./input-variants";

import "../styles/input.scss";
import clsx from "clsx";

export type InputProps = InputVariantsProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    isInvalid?: boolean;
    errors?: ReactNode;
    label?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
  };

export const Input = ({
  isInvalid,
  size,
  errors,
  label,
  startContent,
  endContent,
  className,
  ...inputProps
}: InputProps) => {
  const hasErrors = Boolean(errors);

  return (
    <label
      className={inputVariants({
        size,
        isInvalid,
        withStartContent: Boolean(startContent),
        className,
      })}
    >
      {label && <div className="frey-input__label">{label}</div>}
      <div className="frey-input__container">
        {startContent && (
          <span className="frey-input__content-container start-content">
            {startContent}
          </span>
        )}
        <input {...inputProps} />
        {endContent && (
          <span className="frey-input__content-container end-content">
            {endContent}
          </span>
        )}
      </div>
      {hasErrors && <div className="frey-input__errors">{errors}</div>}
    </label>
  );
};
