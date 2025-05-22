import { InputHTMLAttributes, ReactNode } from "react";
import { inputVariants, InputVariantsProps } from "./input-variants";

import "../styles/input.scss";

export type InputProps = InputVariantsProps &
	InputHTMLAttributes<HTMLInputElement> & {
		isInvalid?: boolean;
		errors?: ReactNode;
	};

export const Input = ({ className, isInvalid, ...inputProps }: InputProps) => {
	return (
		<div className={inputVariants({ className })}>
			<input {...inputProps} />
		</div>
	);
};
