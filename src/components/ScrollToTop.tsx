'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Set by popstate (browser back / forward) just before the router re-renders,
// and cleared as soon as the pathname effect has seen it.
let cameFromHistoryNav = false;

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    cameFromHistoryNav = true;
  });
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Back / forward positions are restored by Next.js itself. Overriding them
    // dropped mobile users at the top of the list they had just scrolled
    // through — back is the primary way people navigate on a phone.
    if (cameFromHistoryNav) {
      cameFromHistoryNav = false;
      return;
    }

    // Let in-page anchors (e.g. /#about) land on their target.
    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}
