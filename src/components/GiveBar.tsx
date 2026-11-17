"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Surfaces that already carry their own, better-targeted ask — never double-ask.
// /donate is the destination; /stories/aminata has its own StoryDrawer + peak CTA.
const HIDDEN_PREFIXES = ["/donate", "/stories/aminata"];

/**
 * A slim, dismissible "partner from $30/mo" pill that appears once the hero has
 * scrolled away and hides again near the foot of the page (where the donate
 * preview lives), plus a hairline amber scroll-progress bar. Keeps the monthly
 * ask reachable through a long read without nagging.
 */
export function GiveBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [progress, setProgress] = useState(0);

  const hidden = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (hidden) return;
    if (sessionStorage.getItem("givebar-dismissed") === "1") {
      setDismissed(true);
      return;
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        setProgress(p);
        // Appear after ~one viewport (hero gone); retreat near the bottom where
        // the full donate ask already sits.
        setVisible(window.scrollY > window.innerHeight * 0.8 && p < 0.9);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hidden, pathname]);

  if (hidden || dismissed) return null;

  return (
    <>
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className={`givebar ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
        <Link
          href="/donate?freq=monthly&amt=30"
          className="btn btn--primary btn--sm givebar__cta"
          tabIndex={visible ? 0 : -1}
        >
          Partner from $30/mo <span className="cta-arrow" aria-hidden="true">&rarr;</span>
        </Link>
        <button
          type="button"
          className="givebar__close"
          aria-label="Dismiss donate bar"
          tabIndex={visible ? 0 : -1}
          onClick={() => {
            sessionStorage.setItem("givebar-dismissed", "1");
            setDismissed(true);
          }}
        >
          &times;
        </button>
      </div>
    </>
  );
}
