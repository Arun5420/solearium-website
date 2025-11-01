import "./ProcessTimeline.css";

const steps = [
  {
    id: 1,
    title: "Innovative design",
    description: "Evidence-based thresholds for early warnings and progress tracking",
    image: "/media/process.png",
  },
  {
    id: 2,
    title: "Precision manufacturing",
    description: "Evidence-based thresholds for early warnings and progress tracking",
    image: "/media/process.png",
  },
  {
    id: 3,
    title: "Ready to wear",
    description: "Evidence-based thresholds for early warnings and progress tracking",
    image: "/media/process.png",
  },
];

export default function ProcessTimeline() {
  return (<>
    <header className="section-title process-timeline__header" data-animate="reveal-up">
      Our <span className="section-eyebrow">process</span>
    </header>
    <section className="process-timeline" id="process" data-animate="reveal-up" data-animate-delay="0.1s">
      <div className="hero-shell process-timeline__inner">
        <div className="process-timeline__row">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="process-timeline__step-group"
              data-animate="reveal-up"
              data-animate-delay={`${0.25 + idx * 0.15}s`}
            >
              <div
                className="process-timeline__circle-img"
                data-animate="scale-in"
                data-animate-delay={`${0.3 + idx * 0.15}s`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="process-timeline__image"
                  width={240}
                  height={240}
                  loading="lazy"
                />
              </div>
              <div className="process-timeline__text">
                <h3 className="process-timeline__title">{step.title}</h3>
                <p className="process-timeline__desc">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <img
                  src="/icons/tilted-arrow.svg"
                  alt="arrow"
                  className={`process-timeline__arrow process-timeline__arrow--${idx}`}
                  data-animate="reveal-up"
                  data-animate-delay={`${0 + idx * 0.02}s`}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section></>
  );
}