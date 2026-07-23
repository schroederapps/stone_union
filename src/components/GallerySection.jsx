import Reveal from "./Reveal.jsx";

const CATEGORIES = ["Sculpture", "Functional objects", "Furniture & lighting", "Wearable stone"];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-pad">
      <div className="wrap program-layout gallery-layout">
        <div className="program-text">
          <Reveal>
            <p className="eyebrow">The Gallery</p>
            <h2 className="headline">The first NYC gallery dedicated to stone</h2>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              There are no gallery spaces in New York devoted exclusively to stone
              art. Stone Union fills that gap — featuring local and international
              artists, and positioning stone as both fine art and collectible
              design, within a city that already drives global taste.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="tag-row">
              {CATEGORIES.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="program-media gallery-media">
          <figure>
            <img src={`${import.meta.env.BASE_URL}images/noguchi.jpg`} alt="Isamu Noguchi, Narrow Gate, 1981, a tall carved basalt sculpture with contrasting rough and finished textures." />
            <figcaption className="dim">Isamu Noguchi, <em>Narrow Gate</em>, 1981 — basalt</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
