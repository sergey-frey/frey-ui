import { HTMLAttributes } from "react";
import { loaderVariants, LoaderVariantsProps } from "./loader-variants";

import "../styles/loader.scss";

export type LoaderProps = LoaderVariantsProps & HTMLAttributes<HTMLDivElement>;

export const Loader = ({ size, variant, className }: LoaderProps) => {
  return <div className={loaderVariants({ size, variant, className })} />;
};
