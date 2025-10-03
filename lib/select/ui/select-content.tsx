import { PropsWithChildren, useRef } from "react";

import clsx from "clsx";
import { useVerticalScrollInfo } from "../../utils";
import { useSelect } from "../model/select-context";
import "../styles/select.scss";
import { useSelectConfig } from "../model/select-config-context";

export type SelectContentProps = PropsWithChildren<{
  topOffset?: number | string;
  className?: string;
}>;

export const SelectContent = ({
  children,
  topOffset = "0.25rem",
  className,
}: SelectContentProps) => {
  const { isOpen } = useSelect();
  const { topScrollShadowThreshold, bottomScrollShadowThreshold } =
    useSelectConfig();

  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const { isScrollAtTop, isScrollAtBottom } = useVerticalScrollInfo({
    scrollContainerRef,
    topThreshold: topScrollShadowThreshold,
    bottomThreshold: bottomScrollShadowThreshold,
  });

  const _topOffset =
    typeof topOffset === "string" ? topOffset : `${topOffset}px`;

  const hasTopShadow = !isScrollAtTop && isOpen;
  const hasBottomShadow = !isScrollAtBottom && isOpen;

  return (
    <div
      className={clsx(
        "frey-select__content-container",
        {
          open: isOpen,
        },
        className,
      )}
      style={{
        "--content-top-offset": _topOffset,
      }}
    >
      <ul
        className={clsx("frey-select__content", {
          "has-top-shadow": hasTopShadow,
          "has-bottom-shadow": hasBottomShadow,
        })}
        ref={scrollContainerRef}
      >
        {children}
      </ul>
    </div>
  );
};
