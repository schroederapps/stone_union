import Reveal from "./Reveal.jsx";

const REVENUE = [
  ["Recurring studio revenue", "proportional memberships + short-term rentals"],
  ["Education revenue", "classes + workshops"],
  ["Gallery revenue", "sales + representation + commissions"],
  ["Retail revenue", "stone design items, sculpting materials, stone sales"],
  ["Community revenue", "events + café sales"],
];

const PHASES = [
  "Construction and permitting sequencing allows early studio activation where feasible",
  "Programs layer in as operations stabilize: artist rentals → classes → gallery + café",
  "The Certificate of Occupancy is the key dependency for the full program",
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="section-pad sustainability">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The Model</p>
          <h2 className="headline">Stability & sustainability</h2>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            Stone Union is built for long-term stability through multiple aligned
            revenue streams and a phased operational ramp.
          </p>
        </Reveal>

        <div className="grid-2 sustain-grid">
          <Reveal delay={80}>
            <h3 className="market-col-title">Diversified, reinforcing revenue</h3>
            <ul className="sustain-list">
              {REVENUE.map(([k, v]) => (
                <li key={k}>
                  <strong>{k}</strong>
                  <span className="dim"> — {v}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="market-col-title">Phased opening reduces risk</h3>
            <ul className="sustain-list">
              {PHASES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <figure className="sustain-figure">
            <img src="/images/spiral-jetty.jpg" alt="Robert Smithson, Spiral Jetty, 1970, a large earthwork sculpture coiling out into water." />
            <figcaption className="dim">Robert Smithson, <em>Spiral Jetty</em>, 1970</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
