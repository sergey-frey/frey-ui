import { InputHTMLAttributes, ReactNode } from "react";
import { inputVariants, InputVariantsProps } from "./input-variants";

import "../styles/input.scss";
import clsx from "clsx";

export type InputProps = InputVariantsProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    isInvalid?: boolean;
    errors?: ReactNode;
    label?: string;
  };

export const Input = ({
  isInvalid,
  size,
  errors,
  label,
  className,
  ...inputProps
}: InputProps) => {
  const hasErrors = Boolean(errors);

  return (
    <div
      className={clsx(
        "frey-input",
        inputVariants({ size, isInvalid, className }),
      )}
    >
      {label && <label className="frey-input__label">{label}</label>}
      <div className="frey-input__container">
        <input {...inputProps} />
      </div>
      {hasErrors && <div className="frey-input__errors">{errors}</div>}
    </div>
  );
};
