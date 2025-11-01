import "./HeroBanner.css";

const highlights = [
  { id: 1, value: "120+", label: "Clinics partnered" },
  { id: 2, value: "2,400", label: "Daily pressure points tracked" },
  { id: 3, value: "96%", label: "Patient compliance" },
];

export default function HeroBanner() {
  return (
    <section className="hero-banner" data-animate="fade-in" data-animate-duration="1s">
      <video
        className="hero-banner__video"
        src="/media/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-shell hero-banner__inner">
        <div className="hero-banner__content" data-animate="reveal-up" data-animate-delay="0.15s" data-animate-duration="0.9s">
          <span className="hero-banner__title" data-animate="reveal-up" data-animate-delay="0.3s" data-animate-duration="0.9s">
            Future <br /><span className="section-eyebrows">of medical </span><br />Is Here
          </span>
          {/* <h2 className="section-title">Clinicians stay close to every recovery conversation</h2> */}
          <p
            className="section-description hero-banner__description"
            data-animate="reveal-up"
            data-animate-delay="0.45s"
            data-animate-duration="0.85s"
          >
            AI‑powered insoles that monitor pressure, temperature, and gait—helping prevent foot ulcers and improve mobility every day
          </p>
          <a
            className="hero-banner__button"
            href="#book"
            data-animate="reveal-up"
            data-animate-delay="0.6s"
            data-animate-duration="0.8s"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}