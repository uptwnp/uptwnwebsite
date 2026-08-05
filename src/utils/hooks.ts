'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';

/**
 * Subscribe to a CSS media query without setState-in-effect.
 * Returns `false` during SSR / first paint so markup stays hydration-safe.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Phones & small tablets — matches the 820px breakpoint used across the site. */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 820px)');
}

/**
 * Locks background scrolling while an overlay is open, and restores the exact
 * scroll position on close. On iOS `overflow: hidden` alone is not enough —
 * the body has to be taken out of flow.
 */
export function useBodyScrollLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;

    const { scrollY } = window;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' as ScrollBehavior });
    };
  }, [active]);
}
