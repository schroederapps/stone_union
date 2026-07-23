import Reveal from "./Reveal.jsx";

const CARDS = [
  {
    title: "Dust filtration & air quality",
    items: [
      "SRA is developing a full dust filtration strategy as part of the feasibility study",
      "Mechanical systems are planned early so rooms and workflow can be built around proper containment and ventilation",
    ],
  },
  {
    title: "Operational stewardship",
    items: [
      "Clear material handling and cleanup protocols",
      "Managed deliveries and load-in/load-out via drive-in access",
      "A waste management plan for stone debris and studio operations",
    ],
  },
  {
    title: "Safety & compliance",
    items: [
      "Operating procedures, PPE expectations, and safety training standards",
      "Liability waivers and facility rules for artists and students",
      "A Certificate of Occupancy change handled during build-out, as required",
    ],
  },
];

export default function Operations() {
  return (
    <section id="operations" className="section-pad">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Operations</p>
          <h2 className="headline">Built to operate safely at scale</h2>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            Stone sculpting requires specialized infrastructure that most spaces
            can&rsquo;t support. We&rsquo;ve engineered for this from day one.
          </p>
        </Reveal>

        <div className="grid-3 ops-grid">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="plaque ops-card">
              <img src="/images/rocks-icon.jpg" alt="" className="ops-icon" />
              <h3 className="ops-title">{c.title}</h3>
              <ul>
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
