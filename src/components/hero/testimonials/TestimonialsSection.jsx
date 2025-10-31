import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day.Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day",
    name: "Mirana Marci",
    title: "Consumer",
    avatar: "/icons/Avatar.svg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day.Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day",
    name: "Crystal Maiden",
    title: "Doctor",
    avatar: "/icons/Avatar.svg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day.Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day",
    name: "Dazzle Healer",
    title: "Consumer",
    avatar: "/icons/Avatar.svg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day.Caught a hotspot before it became an ulcer—my clinician adjusted my routine the same day",
    name: "Hearts of Taras",
    title: "Doctor",
    avatar: "/icons/Avatar.svg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="hero-shell">
        <header className="section-title">
          What our <span className="section-eyebrow">client</span> says About Us
        </header>
        <div className="testimonials-section__grid">
          {testimonials.map(({ id, quote, name, title, avatar, rating }) => (
            <article key={id} className="testimonials-section__card">
              <div className="testimonials-section__quote-row">
                <img
                  src="/icons/quotes.svg"
                  alt="Quote"
                  className="testimonials-section__quote-icon"
                  aria-hidden="true"
                />
                <div className="testimonials-section__rating" aria-hidden="true">
                  {"★".repeat(rating)}
                </div>
              </div>
              <p className="testimonials-section__quote">{quote}</p>
              <div className="testimonials-section__author-row">
                <img
                  src={avatar}
                  alt={name}
                  className="testimonials-section__avatar"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div className="testimonials-section__meta">
                  <span className="testimonials-section__name">{name}</span>
                  <span className="testimonials-section__title">{title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}