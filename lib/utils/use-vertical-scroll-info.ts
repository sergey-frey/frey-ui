import { RefObject, useCallback, useEffect, useState } from "react";

interface IOptions<T extends HTMLElement> {
  scrollContainerRef: RefObject<T | null>;
  topThreshold?: number;
  bottomThreshold?: number;
}

export const useVerticalScrollInfo = <T extends HTMLElement>({
  scrollContainerRef,
  topThreshold = 0,
  bottomThreshold = 1,
}: IOptions<T>) => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    setIsScrollAtTop(scrollContainer.scrollTop <= topThreshold);

    setIsScrollAtBottom(
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - bottomThreshold,
    );
  }, [scrollContainerRef]);

  useEffect(() => {
    handleScroll();

    scrollContainerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { isScrollAtTop, isScrollAtBottom };
};
