import Reveal from "./Reveal.jsx";

const PROGRAM = [
  {
    num: "01",
    title: "Studios + Education",
    items: [
      "Dedicated work areas for professional stone sculpting",
      "Structured classes and workshops, beginner through advanced",
      "Open studio hours that don’t conflict with class sessions",
    ],
  },
  {
    num: "02",
    title: "Gallery + Retail",
    items: [
      "A curated public platform for sculpture, object art, furniture, lighting, and wearable stone",
      "On-site sales and a strong digital presence, including online sales and shipping",
    ],
  },
  {
    num: "03",
    title: "Café",
    items: [
      "A daily anchor for foot traffic and community",
      "Supports longer visits and repeat engagement — the “third space” layer",
    ],
  },
];

export default function Program() {
  return (
    <section id="program" className="section-pad">
      <div className="wrap program-layout">
        <Reveal className="program-media">
          <figure>
            <img src="/images/sculpture-swingstone.jpg" alt="Swingstone, a sculpture by Peter Brooke-Ball in slate and ash on sycamore, showing a dark stone teardrop suspended within a curved wooden arch." />
            <figcaption className="dim">Peter Brooke-Ball, <em>Swingstone</em> — slate, ash on sycamore</figcaption>
          </figure>
        </Reveal>

        <div className="program-text">
          <Reveal>
            <p className="eyebrow">The Program</p>
            <h2 className="headline">A clear functional triad</h2>
          </Reveal>

          <div className="program-list">
            {PROGRAM.map((p, i) => (
              <Reveal key={p.num} delay={i * 100} className="program-item">
                <span className="program-num mono-stat">{p.num}</span>
                <div>
                  <h3 className="program-item-title">{p.title}</h3>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
