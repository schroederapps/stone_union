import { useReveal } from "../useReveal.js";

const CIRCLES = [
  { cx: 230, cy: 210, r: 168, num: "1", label: "Studios + Education", sub: "workspaces, classes, workshops", labelX: 90, labelY: 60, anchor: "start" },
  { cx: 390, cy: 210, r: 168, num: "2", label: "Gallery + Retail", sub: "sculpture, objects, furniture, wearables", labelX: 530, labelY: 60, anchor: "end" },
  { cx: 310, cy: 350, r: 168, num: "3", label: "Café", sub: "the daily, public third space", labelX: 310, labelY: 545, anchor: "middle" },
];

export default function VennDiagram() {
  const [ref, visible] = useReveal(0.25);

  return (
    <div ref={ref} className="venn">
      <svg viewBox="0 0 620 600" role="img" aria-label="Three overlapping circles representing Studios and Education, Gallery and Retail, and Café">
        {CIRCLES.map((c, i) => (
          <circle
            key={c.label}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            pathLength={1}
            className="venn-circle"
            style={{ transitionDelay: `${i * 220}ms`, strokeDashoffset: visible ? 0 : 1 }}
          />
        ))}
        <circle cx="310" cy="257" r="3" fill="var(--oxide-bright)" opacity={visible ? 1 : 0} style={{ transition: "opacity 0.6s ease 700ms" }} />
        {CIRCLES.map((c, i) => (
          <g
            key={c.label + "-label"}
            className="venn-label"
            style={{ transitionDelay: `${500 + i * 160}ms`, opacity: visible ? 1 : 0 }}
          >
            <text x={c.labelX} y={c.labelY} textAnchor={c.anchor} className="venn-num">{c.num}</text>
            <text x={c.labelX} y={c.labelY + 22} textAnchor={c.anchor} className="venn-title">{c.label}</text>
            <text x={c.labelX} y={c.labelY + 41} textAnchor={c.anchor} className="venn-sub">{c.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
