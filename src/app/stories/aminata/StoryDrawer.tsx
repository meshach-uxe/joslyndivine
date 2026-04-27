"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function StoryDrawer() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissedRef.current) return;
      const h = document.documentElement;
      const pct = (window.scrollY + window.innerHeight) / h.scrollHeight;
      setVisible(pct > 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <aside
      className={`drawer ${visible ? "is-visible" : ""}`}
      aria-label="Donate drawer"
      aria-hidden={!visible}
    >
      <div className="container drawer__row">
        <div className="drawer__copy">
          <p className="drawer__title">If Aminata&rsquo;s story moved you</p>
          <p className="drawer__sub">Become a monthly partner. Cancel any time, no questions.</p>
        </div>
        <Link href="/donate?freq=monthly&amt=30&program=education" className="btn btn--primary drawer__cta">
          Become a monthly partner
        </Link>
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          aria-label="Close donate drawer"
          onClick={() => {
            dismissedRef.current = true;
            setDismissed(true);
          }}
        >
          Close
        </button>
      </div>
    </aside>
  );
}
