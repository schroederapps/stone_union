import Reveal from "./Reveal.jsx";

export default function ConceptGallery() {
  return (
    <section id="concept" className="section-pad">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Concept</p>
          <h2 className="headline">Stone Union, imagined</h2>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            Early concept drawings from Schulhof Rashidi Architects (SRA), leading
            architectural planning, space strategy, and the technical approach to
            building systems and compliance.
          </p>
        </Reveal>

        <div className="concept-grid">
          <Reveal delay={80} className="concept-item concept-item-wide">
            <img src="/images/studio-benches.jpg" alt="Concept rendering of individual sculpting stations beneath a skylight, with shelves of finished stone pieces and dust filtration equipment." />
          </Reveal>
          <Reveal delay={160} className="concept-item">
            <img src="/images/architecture-render.jpg" alt="Architectural rendering by Schulhof Rashidi Architects of the William King Museum of Art in Abingdon, Virginia, an example of the firm's cultural-space work." />
            <p className="dim concept-caption">SRA, William King Museum of Art — Abingdon, Virginia</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
