"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { href: "/programs", label: "Our work" },
  { href: "/stories", label: "Stories" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/about", label: "About" },
  { href: "/accountability", label: "Accountability" },
];

function PrimaryLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <ul>
      {primaryLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={pathname === href || pathname.startsWith(href + "/") ? "is-current" : undefined}
            onNavigate={onNavigate}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !event.defaultPrevented) {
        setOpen(false);
        toggle.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <div className="site-utility">
        <div className="container site-utility__inner">
          <span>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2" />
            </svg>
            Freetown, Sierra Leone
          </span>
          <a href="mailto:hello@joslyndivine.com">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            hello@joslyndivine.com
          </a>
        </div>
      </div>

      <header
        className="site-header"
        id="nav"
        ref={header}
        onBlur={(event) => {
          if (open && event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
            closeMenu();
          }
        }}
      >
        <div className="container site-header__inner">
          <Link
            href="/"
            className="site-wordmark"
            aria-label="Joslyn Divine Foundation, home"
            aria-current={pathname === "/" ? "page" : undefined}
            onNavigate={closeMenu}
          >
            <span className="site-wordmark__mark" aria-hidden="true" />
            <span className="site-wordmark__text">
              <span className="site-wordmark__name">Joslyn Divine</span>
              <span className="site-wordmark__foundation">Foundation</span>
            </span>
          </Link>

          <nav className="site-header__navigation" aria-label="Primary">
            <PrimaryLinks pathname={pathname} />
          </nav>

          <Link
            href="/donate"
            className="site-header__donate"
            aria-current={pathname === "/donate" ? "page" : undefined}
            onNavigate={closeMenu}
          >
            Donate
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4 12h15m-6-6 6 6-6 6" />
            </svg>
          </Link>

          <button
            type="button"
            className="site-header__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-mobile-navigation"
            onClick={() => setOpen((previous) => !previous)}
            ref={toggle}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        <nav id="site-mobile-navigation" className="site-header__mobile" aria-label="Primary" hidden={!open}>
          <div className="container">
            <PrimaryLinks pathname={pathname} onNavigate={closeMenu} />
          </div>
        </nav>
      </header>
    </>
  );
}
