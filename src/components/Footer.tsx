import Link from "next/link";
import { PHOTOS } from "@/lib/photography";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__columns">
          <div className="site-footer__brand">
            <div className="site-wordmark">
              <span className="site-wordmark__mark" aria-hidden="true" />
              <span className="site-wordmark__text">
                <span className="site-wordmark__name">Joslyn Divine</span>
                <span className="site-wordmark__foundation">Foundation</span>
              </span>
            </div>
            <p>A Freetown-based charity supporting children in Kroo Bay and Susan&rsquo;s Bay through education, shelter, and mentorship.</p>
          </div>
          <div>
            <h2>About JDF</h2>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/accountability">Accountability</Link></li>
              <li><Link href="/programs">Our work</Link></li>
              <li><Link href="/stories">Stories</Link></li>
            </ul>
          </div>
          <div>
            <h2>Get involved</h2>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/get-involved/funders">Become monthly</Link></li>
              <li><Link href="/get-involved/volunteers">Volunteer</Link></li>
              <li><Link href="/get-involved/partners">Partner with us</Link></li>
            </ul>
          </div>
          <div>
            <h2>Stay in touch</h2>
            <ul>
              <li><a href="mailto:hello@joslyndivine.com">hello@joslyndivine.com</a></li>
              <li><a href="https://www.instagram.com/joslyndivine" rel="noopener">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/joslyndivine" rel="noopener">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@joslyndivine" rel="noopener">YouTube</a></li>
            </ul>
          </div>
        </div>
        <details className="site-footer__credits">
          <summary>Photography credits</summary>
          <p>Stock photographs illustrate our work. They do not depict JDF participants, staff, or locations.</p>
          <ul>
            {Object.values(PHOTOS).map((photo) => (
              <li key={photo.src}><a href={photo.source} rel="noopener">{photo.subject} — {photo.photographer}</a></li>
            ))}
          </ul>
          <p>Used under the <a href="https://www.pexels.com/license/" rel="noopener">Pexels License</a> and <a href="https://unsplash.com/license" rel="noopener">Unsplash License</a>.</p>
        </details>
        <div className="site-footer__legal">
          <span>Sierra Leone NGO Reg. [number pending] · US 501(c)(3) via [fiscal sponsor pending] · &copy; 2026 Joslyn Divine Foundation.</span>
          <a href="mailto:hello@joslyndivine.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
