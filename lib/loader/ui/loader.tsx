import type { HTMLAttributes } from "react";

import { type LoaderVariantsProps, loaderVariants } from "./loader-variants";

import "../styles/loader.scss";

export type LoaderProps = LoaderVariantsProps & HTMLAttributes<HTMLDivElement>;

export const Loader = ({ size, variant, className }: LoaderProps) => (
  <div className={loaderVariants({ size, variant, className })} />
);
