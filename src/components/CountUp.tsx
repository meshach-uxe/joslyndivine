"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  /** The real, final value. Rendered verbatim on the server (SSR / no-JS fallback). */
  to: number;
  /** Static suffix rendered inside the same node, e.g. "%". */
  suffix?: string;
  durationMs?: number;
  className?: string;
};

// Mirrors the --motion-slow cubic-bezier(.2,.8,.2,1) feel.
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a number up from 0 → `to` the first time it scrolls into view.
 * The number is real trust data, so it must survive with no JS and under
 * reduced-motion: the server renders the final value, and if motion is
 * reduced or IntersectionObserver is unavailable we leave it there.
 */
export function CountUp({ to, suffix = "", durationMs = 1000, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.textContent = String(to) + suffix;
      return;
    }

    // Reset to 0 before it's seen (usages are below the fold), so the count is
    // the first thing the eye catches — no final → 0 flash on entry.
    el.textContent = "0" + suffix;

    let raf = 0;
    let started = false;

    const run = (startTime: number) => {
      const tick = (now: number) => {
        const t = Math.min((now - startTime) / durationMs, 1);
        el.textContent = String(Math.round(easeOutCubic(t) * to)) + suffix;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            io.unobserve(el);
            requestAnimationFrame((now) => run(now));
          }
        }
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, suffix, durationMs]);

  return (
    <span ref={ref} className={className}>
      {to}
      {suffix}
    </span>
  );
}
