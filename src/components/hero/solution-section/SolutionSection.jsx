import "./SolutionSection.css";
import SolutionCard from "./SolutionCard.jsx";

const solutions = [
  {
    id: "ablip",
    title: "ABLIP",
    subtitle: "",
    description: "Just Slip it out & Track",
    features: [
      "AI-powered app uses your phone's camera to track your movement, in your hands.",
      "It analyzes the biomechanical data and provides simple, actionable solutions for optimal performance.",
    ],
    imageSrc: "/media/ablip.png",
    imageAlt: "ABLIP mobile application",
    isComingSoon: false,
  },
  {
    id: "solearium",
    title: "Solearium",
    subtitle: "Smart Insoles",
    description: "Just Slip in & Track",
    features: [
      "Smart insole sensors track plantar pressure, temperature, and step symmetry all day.",
      "The app flags risk zones and suggests offloading and activity tweaks in plain language.",
      "Secure sharing with care teams for remote check-ins and faster interventions.",
    ],
    imageSrc: "/media/solearium.png",
    imageAlt: "Solearium Smart Insoles",
    isComingSoon: true,
  },
];

export default function SolutionSection() {
  return (
    <section className="solution-section" id="solution" data-animate="reveal-up">
      <header className="section-title" data-animate="reveal-up" data-animate-delay="0.1s">
        Our <span className="section-eyebrow">solutions</span>
      </header>
      <div className="hero-shell solution-section__inner">
        <div className="solution-section__grid">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              {...solution}
              animationDelay={`${0.2 + index * 0.15}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}