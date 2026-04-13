import "./SolutionCard.css";

export default function SolutionCard({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  isComingSoon,
  animationDelay,
}) {
  return (
    <div
      className="solution-card"
      data-animate="reveal-up"
      data-animate-delay={animationDelay}
    >
      <div className="solution-card__header">
        <h3 className="solution-card__title">
          {title} <span className="solution-card__subtitle">{subtitle}</span>
        </h3>
        {isComingSoon && (
          <span className="solution-card__coming-soon">*coming soon</span>
        )}
      </div>
      <p className="solution-card__description">{description}</p>
      <div className="solution-card__content">
      
      <figure className="solution-card__media">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </figure>
      <ul className="solution-card__features">
        {features.map((feature, index) => (
          <li key={index} className="solution-card__feature-item">
            <span className="solution-card__feature-index">{index + 1}</span>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}