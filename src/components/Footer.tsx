import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cols">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-white.svg" alt="Joslyn Divine Foundation" width="160" height="32" />
            <p>A Freetown-based charity supporting children in Kroo Bay and Susan&rsquo;s Bay through education, shelter, and mentorship.</p>
            <div className="footer__amber-rule" />
          </div>
          <div>
            <h4>About JDF</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/accountability">Accountability</Link></li>
              <li><Link href="/programs">Our work</Link></li>
              <li><Link href="/stories">Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get involved</h4>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/get-involved/funders">Become monthly</Link></li>
              <li><Link href="/get-involved/volunteers">Volunteer</Link></li>
              <li><Link href="/get-involved/partners">Partner with us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Stay in touch</h4>
            <ul>
              <li><a href="mailto:hello@joslyndivine.com">hello@joslyndivine.com</a></li>
              <li><a href="https://www.instagram.com/joslyndivine" rel="noopener">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/joslyndivine" rel="noopener">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@joslyndivine" rel="noopener">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>Sierra Leone NGO Reg. [number pending] · US 501(c)(3) via [fiscal sponsor pending] · &copy; 2026 Joslyn Divine Foundation.</span>
          <span>
            <a href="mailto:hello@joslyndivine.com">Contact</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
