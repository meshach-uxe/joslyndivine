"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One shared observer that reveals any `.reveal-up` element as it scrolls into
 * view (adds `.is-in`, then stops watching — reveals never reverse). Mounted
 * once in the root layout; re-scans on route change so client-navigated pages
 * animate too. Server components opt in with the class + an optional
 * `--reveal-delay` for stagger — no need to become client components.
 *
 * Fallbacks: no IntersectionObserver → reveal everything immediately. No JS at
 * all → a <noscript> style in the layout reveals everything.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-up:not(.is-in)")
    );
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
