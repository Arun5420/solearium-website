import "./TeamSection.css";

const team = [
  {
    id: 1,
    name: "Arun Mittal",
    role: "Co-founder & CEO",
    bio: "Not generic comfort—clinically informed, precise correction",
    avatar: "/media/arun.png",
    linkedIn: "https://www.linkedin.com/in/arunkrmittal",
  },
  {
    id: 2,
    name: "Aryan Balotiya",
    role: "Co-founder & CEO",
    bio: "Future of unique biomechanical footprints",
    avatar: "/media/Aryan.jpeg",
    linkedIn: "https://www.linkedin.com/in/aryan-balotiya-09819722b",
  },
  {
    id: 3,
    name: "Prashant Rewar",
    role: "Technical Director",
    bio: "Evidence based thresholds for early warnings.",
    avatar: "/media/Prashant.png",
    linkedIn: "https://www.linkedin.com/in/prashant-rewar-b8785225b",
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
          {team.map(({ id, name, role, bio, avatar, linkedIn }, index) => (
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
                <a href={linkedIn} className="team-section__social-link" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                {/* <a href="#" className="team-section__social-link"><img src="/icons/insta.svg" alt="Instagram" /></a> */}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}