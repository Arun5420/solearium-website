import "./ProblemCard.css";

const problemCards = [
  {
    id: 1,
    title: "Diabetes-related foot risk (DFU)",
    description: "Hidden pressure hotspots can turn into ulcers without early warning.",
    Icon: "/icons/dfu-icon.svg",
  },
  {
    id: 2,
    title: "Chronic pain & imbalance",
    description: "Poor gait mechanics stress joints and reduce activity.",
    Icon: "/icons/pain-icon.svg",
  },
  {
    id: 3,
    title: "Post-surgery recovery",
    description: "Small overloads can delay healing and lead to setbacks.",
    Icon: "/icons/recovery-icon.svg",
  },
];

export default function ProblemCard() {
  return (
    <section className="problem-card" id="problems">
      <div className="hero-shell">
        <header className="section-title">
          Facing <span className="section-eyebrow">foot pain</span> or <span className="section-eyebrow">slow-healing</span> wounds?
        </header>
        <div className="problem-card__grid">
          {problemCards.map(({ id, title, description, Icon }) => (
            <article key={id} className="problem-card__item">
              <span className="problem-card__icon">
                <img src={Icon} alt="" loading="lazy" />
              </span>
              <h3 className="problem-card__title">{title}</h3>
              <p className="problem-card__description">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
