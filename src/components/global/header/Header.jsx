import "./Header.css";
import SecondaryButton from "../../common/secondary-button/SecondaryButton";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <h1 className="header-title"><img src="/icons/logo.svg" alt="Sole-Arium Logo" /></h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li><a href="#about">Our Product</a></li>
          <li><a href="#teams">Contact Us</a></li>
          <SecondaryButton text="Login" onClick={() => alert("Button clicked!")} />
        </ul>
      </nav>
    </header>
  );
}