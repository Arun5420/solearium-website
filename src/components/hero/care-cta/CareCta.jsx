import "./CareCta.css";

export default function CareCta() {
  return (
    <section className="care-cta" id="care">
      <div className="hero-shell care-cta__inner">
        <div className="care-cta__content">
          <span className="care-cta__title">Care you <br /><span className="section-eyebrows">need</span><br />We Provide<br /><span className="section-eyebrows">Best</span></span>
          {/* <h2 className="section-title">Clinicians stay close to every recovery conversation</h2>
          <p className="section-description">
            Schedule secure telehealth check-ins, review pressure trends together, and adjust programs instantly. Our specialists partner with your team to keep every patient stride on course.
          </p> */}
          <div className="care-cta__divider">
          <a className="care-cta__button" href="#book">
            Book appointment
          </a>
          <p className="care-cta__subtext">
            Book doctor in one tap, review color‑coded risk maps, and send offloading advice without an in‑person visit
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}