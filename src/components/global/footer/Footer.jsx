import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/icons/logo.svg" alt="Sole-Arium logo" className="footer-logo" />
          <span className="footer__brand-name"></span>
        </div>
        <div className="footer__column">
          <h4 className="footer__heading">Sitemap</h4>
          <ul className="footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Abouts</a></li>
            <li><a href="/growers">Growers</a></li>
            <li><a href="/merchants">Merchants</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__heading">Socials</h4>
          <ul className="footer__list">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__heading">Head Office</h4>
          <address className="footer__contact">
            Xilliams Corner Wine © 2017<br />
            1112 A Market St # Ste B22,<br />
            Charlottesville, CA 45565
          </address>
          <a href="mailto:solearium@gmail.com" className="footer__contact">solearium@gmail.com</a>
          <a href="tel:1234567890" className="footer__contact">(123) 456-7890</a>
        </div>
      </div>
      <div className="footer__bottom">
        © 2025 Sole-Arium. All rights reserved.
      </div>
    </footer>
  );
}
