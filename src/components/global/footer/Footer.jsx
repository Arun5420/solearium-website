import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" data-animate="reveal-up" data-animate-delay="0.05s" data-animate-duration="0.9s">
      <div className="footer__inner">
        <div className="footer__brand" data-animate="reveal-up">
          <img src="/icons/logo.svg" alt="Sole-Arium logo" className="footer-logo" />
          <span className="footer__brand-name"></span>
        </div>
  <div className="footer__column" data-animate="reveal-up" data-animate-delay="0.2s">
          <h4 className="footer__heading">Sitemap</h4>
          <ul className="footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Abouts</a></li>
            <li><a href="/growers">Growers</a></li>
            <li><a href="/merchants">Merchants</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
  <div className="footer__column" data-animate="reveal-up" data-animate-delay="0.4s">
          <h4 className="footer__heading">Socials</h4>
          <div className="footer__social-icons">
            <a href="https://www.linkedin.com/company/sole-arium/" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
  <div className="footer__column" data-animate="reveal-up" data-animate-delay="0.5s">
          <h4 className="footer__heading">Head Office</h4>
          <address className="footer__contact">
            626, Third Floor, PKT- 1, Paschim Puri,<br />
            Paschim Vihar, New Delhi,<br />
             Delhi, India - 110063
          </address>
          <a href="mailto:business@sole-arium.com" className="footer__contact">business@sole-arium.com</a>
        </div>
      </div>
      <div className="footer__bottom" data-animate="reveal-up" data-animate-delay="0.7s">
        © 2025 Sole-Arium. All rights reserved.
      </div>
    </footer>
  );
}
