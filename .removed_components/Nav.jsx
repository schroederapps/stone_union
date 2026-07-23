import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark">Stone Union</a>
        <span className="nav-mid dim">Studios · Gallery · Café</span>
        <a href="#contact" className="btn btn-ghost nav-cta">Get in touch</a>
      </div>
    </nav>
  );
}
