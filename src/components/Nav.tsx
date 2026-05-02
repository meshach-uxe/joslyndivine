"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`} id="nav">
      <div className="container nav__row">
        <Link href="/" className="nav__brand" aria-label="Joslyn Divine Foundation, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nav__brand-full" src="/brand/logo-orange.svg" alt="Joslyn Divine Foundation" width="160" height="32" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nav__brand-mark" src="/brand/mark-orange.svg" alt="Joslyn Divine Foundation" width="32" height="32" />
        </Link>
        <nav aria-label="Primary" className="nav__center">
          <ul className="nav__links">
            <li><Link href="/programs">Our work</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/get-involved">Get involved</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/accountability">Accountability</Link></li>
          </ul>
        </nav>
        <Link href="/donate" className="btn btn--primary nav__cta">Donate</Link>
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      <div id="nav-mobile" className={`nav__mobile container ${open ? "is-open" : ""}`}>
        <ul>
          <li><Link href="/programs" onClick={() => setOpen(false)}>Our work</Link></li>
          <li><Link href="/stories" onClick={() => setOpen(false)}>Stories</Link></li>
          <li><Link href="/get-involved" onClick={() => setOpen(false)}>Get involved</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/accountability" onClick={() => setOpen(false)}>Accountability</Link></li>
        </ul>
      </div>
    </header>
  );
}
