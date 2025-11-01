import "./ValueHighlights.css";

const highlights = [
  {
    id: 1,
    title: "Clinical intelligence",
    description: "Evidence‑based thresholds for early warnings and progress tracking",
  },
  {
    id: 2,
    title: "All-day comfort",
    description: "Evidence‑based thresholds for early warnings and progress tracking",
  },
  {
    id: 3,
    title: "Private by design",
    description: "Evidence‑based thresholds for early warnings and progress tracking",
  },
  {
    id: 4,
    title: "Clinical intelligence",
    description: "Evidence‑based thresholds for early warnings and progress tracking",
  },
];

export default function ValueHighlights() {
  return (
    <section className="value-highlights" id="benefits" data-animate="reveal-up">
      <header className="section-title" data-animate="reveal-up" data-animate-delay="0.1s">
        Why <span className="section-eyebrow"> Sole-arium?</span>
      </header>
      <div className="hero-shell value-highlights__inner">
        <div className="value-highlights__content">
          {/* <h2 className="section-title">Intelligent support that powers confident mobility</h2>
          <p className="section-description">
            Whether you are tackling chronic pain, DFU prevention, or post-surgical recovery, Sole-arium equips clinicians with reliable data and patients with effortless routines.
          </p> */}
          <div className="value-highlights__grid">
            {highlights.map(({ id, title, description }, index) => (
              <article
                key={id}
                className="value-highlights__card"
                data-animate="reveal-up"
                data-animate-delay={`${0.2 + index * 0.1}s`}
              >
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="value-highlights__media" data-animate="scale-in" data-animate-delay="0.35s">
          <img
            src="/media/why.png"
            alt="Person holding smart insole"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}