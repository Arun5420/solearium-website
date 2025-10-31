import "./SolutionSection.css";

const steps = [
  {
    id: 1,
    title: "Detect pressure spikes in real time",
    description: "Smart insole sensors track plantar pressure, temperature, and step symmetry all day.",
  },
  {
    id: 2,
    title: "Guide patients with adaptive plans",
    description: "The app flags risk zones and suggests offloading and activity tweaks in plain language.",
  },
  {
    id: 3,
    title: "Coordinate multidisciplinary care",
    description: "Secure sharing with care teams for remote check‑ins and faster interventions.",
  },
];

export default function SolutionSection() {
  return (
    <section className="solution-section" id="solution">
      <header className="section-title">Our <span className="section-eyebrow">solution</span></header>
      <div className="hero-shell solution-section__inner">
        <figure className="solution-section__media">
          <img
            src="/media/insole.png"
            alt="Smart insole illustration"
            loading="lazy"
          />
        </figure>
        <div className="solution-section__content">
          <div className="solution-section__grid">
            {steps.map(({ id, title, description }) => (
              <article key={id} className="solution-section__card">
                <span className="solution-section__index">{id}</span>
                {/* <h3 className="solution-section__card-title">{title}</h3> */}
                <p className="solution-section__card-copy">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}