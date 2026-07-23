import Reveal from "./Reveal.jsx";

const ITEMS = [
  "Industrial air compressors and specialized stone tools",
  "Proper ventilation, air filtration, and safe work zones",
  "Flexible workspaces for long-term members and short-term projects",
  "A proportional membership model paired with paid classes and workshops",
];

export default function Studio() {
  return (
    <section id="studio" className="studio">
      <div className="studio-media">
        <img src={`${import.meta.env.BASE_URL}images/carving-hands.jpg`} alt="A sculptor's hands guiding a chisel with a mallet into a block of stone on a studio workbench, dust extraction hoses visible in the background." />
      </div>
      <div className="studio-text">
        <Reveal>
          <p className="eyebrow">The Studio</p>
          <h2 className="headline">Professional infrastructure, shared access</h2>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            The Stone Union studio provides artists with what they cannot
            reasonably build alone:
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="studio-list">
            {ITEMS.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={160}>
          <p className="chalk-text studio-close">
            Artists gain the freedom to work at scale — without prohibitive
            upfront costs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
