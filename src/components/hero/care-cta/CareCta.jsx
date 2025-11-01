import "./CareCta.css";

export default function CareCta() {
  return (
    <section className="care-cta" id="care" data-animate="reveal-up">
      <div className="hero-shell care-cta__inner" data-animate="scale-in" data-animate-delay="0.3s">
        <div className="care-cta__content" data-animate="reveal-up" data-animate-delay="0.45s">
          <span className="care-cta__title" data-animate="reveal-up" data-animate-delay="0.55s">
            Care you <br /><span className="section-eyebrows">need</span><br />We Provide<br /><span className="section-eyebrows">Best</span>
          </span>
          {/* <h2 className="section-title">Clinicians stay close to every recovery conversation</h2>
          <p className="section-description">
            Schedule secure telehealth check-ins, review pressure trends together, and adjust programs instantly. Our specialists partner with your team to keep every patient stride on course.
          </p> */}
          <div className="care-cta__divider">
            <a
              className="care-cta__button"
              href="#book"
              data-animate="reveal-up"
              data-animate-delay="0.02s"
              data-animate-duration="0.2s"
            >
              Book appointment
            </a>
            <p
              className="care-cta__subtext"
              data-animate="reveal-up"
              data-animate-delay="0.05s"
            >
              Book doctor in one tap, review color‑coded risk maps, and send offloading advice without an in‑person visit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}