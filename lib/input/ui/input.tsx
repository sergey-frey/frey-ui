import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
  useCallback,
} from "react";

import { type InputVariantsProps, inputVariants } from "./input-variants";

import "../styles/input.scss";

export type InputProps = InputVariantsProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    isInvalid?: boolean;
    errors?: ReactNode;
    label?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    onValueChange?: (value: string) => void;
  };

export const Input = ({
  isInvalid,
  size,
  errors,
  label,
  startContent,
  endContent,
  className,
  onChange,
  onValueChange,
  ...inputProps
}: InputProps) => {
  const hasErrors = Boolean(errors);

  const handleValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onValueChange?.(e.target.value);
    },
    [onChange, onValueChange],
  );

  return (
    <label
      className={inputVariants({
        size,
        isInvalid,
        withStartContent: Boolean(startContent),
        withEndContent: Boolean(endContent),
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
        <input {...inputProps} onChange={handleValueChange} />
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
