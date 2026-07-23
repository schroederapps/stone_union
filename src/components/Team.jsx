import Reveal from "./Reveal.jsx";

const ADVISORY = [
  ["Erika Karp", "President, Green Alpha Investments"],
  ["Aaron Louis", "Museum of Modern Art"],
  ["Naomi Huth", "Cultural Strategist and Curator"],
  ["Justin Leader", "Founder, Human Renaissance"],
  ["Steve Shaheen", "Stone Sculptor and Artist"],
  ["Allen Welch", "Investor / Advisor"],
];

const CONSULTING = [
  ["Joanna Gould", "Capital Investment Consultant"],
  ["Luke Davin", "Café Consultant"],
  ["Ruby Kessler-Karp", "Gallery Consultant"],
];

const DELIVERY = [
  ["DBI Projects", "Owner's Representative", ["Jordan Barr — Principal", "Harry Ross — Senior Project Manager"]],
  ["Schulhof Rashidi Architects", "Architecture & Space Strategy", ["Paul Schulhof — Founding Partner", "Azadeh Rashidi — Founding Partner"]],
];

export default function Team() {
  return (
    <section id="team" className="section-pad team">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Team & Project Partners</p>
          <h2 className="headline">Built by people who&rsquo;ve done this before</h2>
        </Reveal>

        <div className="founder-block">
          <Reveal delay={80} className="founder-photo">
            <img src={`${import.meta.env.BASE_URL}images/founder-nick-leavens.jpg`} alt="Portrait of Nick Leavens, founder of Stone Union, standing in a stone-sculpting studio." />
          </Reveal>
          <Reveal delay={140} className="founder-bio">
            <h3 className="founder-name">Nick Leavens <span className="dim founder-role">— Founder</span></h3>
            <p>
              An entrepreneur, business owner, and artist, Nick is co-owner of
              Black Heart, a worker-owned digital media agency, and founder of
              Incisive, a consulting firm for mission-driven organizations.
            </p>
            <p>
              Over twenty-five years he has founded three successful companies,
              advised six startups, and guided organizations including an
              international impact investment fund managing over $300M in assets.
              A recipient of Australia&rsquo;s Endeavour Fellowship, he is an
              award-winning director and serves on the advisory boards of Black
              Public Media, The Creativity Conference, and Kineastja Films.
            </p>
            <p>
              A North Brooklyn resident for over twenty-three years, he brings
              decades of business leadership and creative direction — now centered
              on his own stone-sculpting practice — to Stone Union and the
              Greenpoint Design District.
            </p>
          </Reveal>
        </div>

        <div className="team-cols">
          <Reveal delay={80}>
            <h3 className="market-col-title">Advisory board</h3>
            <ul className="people-list">
              {ADVISORY.map(([name, role]) => (
                <li key={name}><strong>{name}</strong><span className="dim"> — {role}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <h3 className="market-col-title">Consulting partners</h3>
            <ul className="people-list">
              {CONSULTING.map(([name, role]) => (
                <li key={name}><strong>{name}</strong><span className="dim"> — {role}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="dim team-note">
            This team structure is designed to reduce execution risk, improve
            stakeholder coordination, and ensure Stone Union is built to be a
            stable, long-term ground-floor neighbor.
          </p>
        </Reveal>

        <div className="grid-2 delivery-grid">
          {DELIVERY.map(([org, role, people], i) => (
            <Reveal key={org} delay={i * 100} className="plaque delivery-card">
              <p className="tag">{role}</p>
              <h4 className="delivery-org">{org}</h4>
              <ul>
                {people.map((p) => <li key={p} className="dim">{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
