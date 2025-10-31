import "./HeroBanner.css";

const highlights = [
  { id: 1, value: "120+", label: "Clinics partnered" },
  { id: 2, value: "2,400", label: "Daily pressure points tracked" },
  { id: 3, value: "96%", label: "Patient compliance" },
];

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-shell hero-banner__inner">
              <div className="hero-banner__content">
          <span className="hero-banner__title">Future <br /><span className="section-eyebrows">of medical </span><br />Is Here</span>
          {/* <h2 className="section-title">Clinicians stay close to every recovery conversation</h2> */}
          <p className="section-description hero-banner__description">
            AI‑powered insoles that monitor pressure, temperature, and gait—helping prevent foot ulcers and improve mobility every day
          </p>
          <a className="hero-banner__button" href="#book">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}