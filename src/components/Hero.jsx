export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-media">
        <img src="/images/hero-storefront.jpg" alt="Concept rendering of the Stone Union storefront, a warm brick facade opening onto a Brooklyn sidewalk with a studio, gallery shelves, and café visible inside." />
        <div className="hero-scrim" />
      </div>

      <div className="wrap hero-content">
        <p className="eyebrow">A Stone Arts Destination · New York City</p>
        <h1 className="hero-title">
          Stone <em>Union</em>
        </h1>
        <p className="hero-tag">Studios&nbsp;+&nbsp;Gallery&nbsp;+&nbsp;Café</p>
        <p className="lede hero-lede">
          Creating a home for stone in New York City — a professional-grade shared
          studio, a gallery devoted exclusively to the medium, and a café that makes
          the whole thing a daily destination.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn">Join us in building it</a>
          <a href="#what-is" className="btn btn-ghost">See the concept ↓</a>
        </div>
      </div>

      <div className="hero-foot">
        <div className="wrap hero-foot-inner">
          <span>Nick Leavens, Founder</span>
          <span className="dim">·</span>
          <a href="mailto:nick.leavens@gmail.com">nick.leavens@gmail.com</a>
          <span className="dim">·</span>
          <a href="tel:19175996835">917.599.6835</a>
        </div>
      </div>
    </header>
  );
}
