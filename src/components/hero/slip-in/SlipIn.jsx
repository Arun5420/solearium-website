import "./SlipIn.css";

export default function SlipIn() {
  return (
    <section className="slip-in" id="slip" data-animate="reveal-up">
      <div className="hero-shell slip-in__inner" data-animate="scale-in" data-animate-delay="0.25s">
        <div className="slip-in__content" data-animate="reveal-up" data-animate-delay="0.4s">
          <span className="slip-in__title" data-animate="reveal-up" data-animate-delay="0.55s">
            Just <br /><span className="section-eyebrows">slip in</span><br />& <span className="section-eyebrows">track</span>
          </span>
          {/* <h2 className="section-title">Clinicians stay close to every recovery conversation</h2>
          <p className="section-description">
            Schedule secure telehealth check-ins, review pressure trends together, and adjust programs instantly. Our specialists partner with your team to keep every patient stride on course.
          </p> */}
          {/* <a className="slip-in__button" href="#book">
            Book appointment
          </a> */}
        </div>
      </div>
    </section>
  );
}