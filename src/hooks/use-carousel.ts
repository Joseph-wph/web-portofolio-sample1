'use client';

import { useCallback, useEffect, useState } from 'react';

/** Scroll-snap carousel logic: prev/next buttons + progress for the indicator bar. */
export function useCarousel() {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [state, setState] = useState({
    canPrev: false,
    canNext: true,
    progress: 0,
    ratio: 1,
  });

  const update = useCallback(() => {
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    setState({
      canPrev: element.scrollLeft > 4,
      canNext: element.scrollLeft < max - 4,
      progress: max > 0 ? element.scrollLeft / max : 0,
      ratio:
        element.scrollWidth > 0 ? element.clientWidth / element.scrollWidth : 1,
    });
  }, [element]);

  useEffect(() => {
    if (!element) return;
    element.addEventListener('scroll', update, { passive: true });
    // ResizeObserver fires once on observe(), which also sets the initial state.
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [element, update]);

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      if (!element) return;
      const card = element.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
      const step = (card?.offsetWidth ?? element.clientWidth * 0.8) + gap;
      element.scrollBy({ left: direction * step, behavior: 'smooth' });
    },
    [element]
  );

  return {
    /** Pass to the scroll container: <div ref={carousel.attach}> */
    attach: setElement,
    ...state,
    prev: () => scrollByCard(-1),
    next: () => scrollByCard(1),
  };
}
