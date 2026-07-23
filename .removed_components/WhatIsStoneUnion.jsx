import Reveal from "./Reveal.jsx";
import VennDiagram from "./VennDiagram.jsx";

export default function WhatIsStoneUnion() {
  return (
    <section id="what-is" className="section-pad">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The Opportunity</p>
          <h2 className="headline">What is Stone Union?</h2>
          <p className="lede" style={{ marginTop: "1.5rem" }}>
            Stone Union is a revenue-generating arts destination built around a
            structural gap: there is no professional-grade shared stone studio in
            New York City. It will introduce collectors, designers, and the public
            to the full range of contemporary stone works.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="venn-wrap">
            <VennDiagram />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="plaque why-different">
            <p className="tag" style={{ marginBottom: "1rem" }}>Why we&rsquo;re different</p>
            <p className="lede">
              Stone Union is the first venue to combine a professional stone studio,
              a gallery dedicated exclusively to stone works, and a café that makes
              the space a daily destination — giving artists the infrastructure they
              need, collectors a place to discover, and the public a way in.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
