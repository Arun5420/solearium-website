import "./TeamSection.css";

const team = [
  {
    id: 1,
    name: "Arun Mittal",
    role: "Co-founder & CEO",
    bio: "Evidence‑based thresholds for early warnings",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Arun Mittal",
    role: "Co-founder & CEO",
    bio: "Evidence‑based thresholds for early warnings.",
    avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Arun Mittal",
    role: "Co-founder & CEO",
    bio: "Evidence‑based thresholds for early warnings.",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section" id="team" data-animate="reveal-up">
      <header className="section-title" data-animate="reveal-up" data-animate-delay="0.1s">Our <span className="section-eyebrow">team</span>
      </header>
      <div className="hero-shell">
        {/* <h2 className="section-title">A multidisciplinary team focused on movement health</h2>
        <p className="section-description">
          Biomedical engineers, clinicians, and product designers unite to support every partner clinic with rapid iteration and real-world outcomes.
        </p> */}

        <div className="team-section__grid">
          {team.map(({ id, name, role, bio, avatar }, index) => (
            <article
              key={id}
              className="team-section__card"
              data-animate="reveal-up"
              data-animate-delay={`${0.25 + index * 0.1}s`}
            >
              <div
                className="team-section__avatar"
                data-animate="scale-in"
                data-animate-delay={`${0.3 + index * 0.1}s`}
              >
                <img src={avatar} alt={name} loading="lazy" />
              </div>
              <h3>{name}</h3>
              <span className="team-section__role">{role}</span>
              <p>{bio}</p>
              <footer
                className="team-section__socials"
                data-animate="reveal-up"
                data-animate-delay={`${0.45 + index * 0.1}s`}
              >
                {/* Social media links can be added here */}
                <a href="#" className="team-section__social-link"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
                <a href="#" className="team-section__social-link"><img src="/icons/insta.svg" alt="Instagram" /></a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}