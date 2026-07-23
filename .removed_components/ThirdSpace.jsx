import Reveal from "./Reveal.jsx";

export default function ThirdSpace() {
  return (
    <section id="third-space" className="third-space">
      <div className="third-space-media">
        <img src={`${import.meta.env.BASE_URL}images/studio-table.jpg`} alt="Concept rendering of the Stone Union studio, sculptors gathered around a long communal work table beneath a skylight, surrounded by shelves of tools and finished stone pieces." />
        <div className="hero-scrim" />
        <div className="wrap third-space-caption">
          <Reveal>
            <p className="eyebrow">A Cultural Third Space</p>
            <h2 className="headline">More than a studio. More than a gallery.</h2>
          </Reveal>
        </div>
      </div>

      <div className="wrap section-pad third-space-body">
        <div className="grid-2">
          <Reveal>
            <p className="lede">
              Anchored by a café, Stone Union becomes a welcoming space for
              collectors, artists, designers, and the public — supporting informal
              interaction between makers and admirers, and hosting talks, openings,
              private events, and collaborations.
            </p>
            <p className="dim" style={{ marginTop: "1.2rem" }}>
              This social layer increases foot traffic, sales, visibility, and
              long-term engagement.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="third-space-figure">
              <img src={`${import.meta.env.BASE_URL}images/henry-moore.jpg`} alt="Henry Moore, Recumbent Figure, 1938, carved in green Hornton stone." />
              <figcaption className="dim">Henry Moore, <em>Recumbent Figure</em>, 1938 — green Hornton stone</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
