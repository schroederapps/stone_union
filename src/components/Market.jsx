import Reveal from "./Reveal.jsx";

export default function Market() {
  return (
    <section id="market" className="section-pad market">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The Market</p>
          <h2 className="headline">The market is there. No one is serving it.</h2>
        </Reveal>

        <div className="grid-2 market-grid">
          <Reveal delay={80}>
            <div className="market-col">
              <h3 className="market-col-title">The studio gap</h3>
              <p className="dim">
                New York has no shared stone studio — the industrial infrastructure
                the medium demands is beyond any individual artist, leaving a cohort
                of talented sculptors unable to work at scale.
              </p>
              <p className="dim">
                Ceramics studios have demonstrated sustained demand for exactly this
                format and thrived across New York for a decade. Stone is the
                natural next frontier — with almost no entry points currently
                available.
              </p>
              <div className="market-stat">
                <span className="mono-stat">$575&ndash;$2,600</span>
                <span className="dim">/month, Stone Union&rsquo;s proportional membership range</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="market-col">
              <h3 className="market-col-title">The gallery gap</h3>
              <p className="dim">
                There is no gallery in the city devoted exclusively to stone as a
                medium. In 2024, 81% of contemporary works sold for under
                $5,000 — the accessible range Stone Union&rsquo;s gallery is built for.
              </p>
              <p className="dim">
                The collectible design market is estimated at $4 billion globally,
                growing 8&ndash;10% annually through 2030. Stone sits at the
                intersection of fine art and collectible design: rigorous, tactile,
                permanent, and increasingly sought after as an undervalued
                alternative to traditional fine art.
              </p>
              <div className="market-stat">
                <span className="mono-stat">81%</span>
                <span className="dim">of 2024 contemporary sales were under $5,000</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="plaque market-banner">
            <span className="mono-stat">$57.5B</span>
            <p className="dim">
              The global art market reached an estimated $57.5 billion in 2024.
              Dealers with under $250K in turnover — precisely Stone Union&rsquo;s
              launch profile — grew 17% that year, their second consecutive year
              of growth. <strong className="chalk-text">Stone Union is not competing within an
              existing category. It is creating one.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
