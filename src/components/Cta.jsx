import Reveal from "./Reveal.jsx";

export default function Cta() {
  return (
    <section id="contact" className="section-pad cta-section">
      <div className="wrap">
        <Reveal className="plaque cta-plaque">
          <img src="/images/tools-icon.jpg" alt="" className="cta-mark" />
          <p className="eyebrow" style={{ justifyContent: "center" }}>Get Involved</p>
          <h2 className="headline cta-headline">Join us in building Stone Union</h2>
          <p className="lede cta-lede">
            Stone Union represents a rare opportunity: a durable, visible, and
            culturally meaningful platform for stone in New York City.
          </p>
          <div className="cta-actions">
            <a href="mailto:nick.leavens@gmail.com" className="btn">Email Nick Leavens</a>
            <a href="tel:19175996835" className="btn btn-ghost">917.599.6835</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
