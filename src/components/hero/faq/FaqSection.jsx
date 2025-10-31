import "./FaqSection.css";

const faqs = [
  {
    id: 1,
    question: "What is Sole-arium and how does it work?",
    answer:
      "Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.",
  },
  {
    id: 2,
    question: "What do the sensors track?",
    answer:
      "Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.",
  },
  {
    id: 3,
    question: "Can clinicians view my data?",
    answer:
      "Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.",
  },
  {
    id: 4,
    question: "Does it help prevent ulcers?",
    answer:
      "Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.Embedded sensors read pressure/temperature and send data to the app for analysis.",
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="hero-shell">
        <header className="section-title">Your <span className="section-eyebrow">questions</span> answered
        </header>
          {/* <h2 className="section-title">Everything you need to launch proactive foot care</h2>
          <p className="section-description">
            Still curious? Explore our most common questions or reach out for a tailored walkthrough.
          </p> */}

        <div className="faq-section__items">
          {faqs.map(({ id, question, answer }) => (
            <details key={id} className="faq-section__item">
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}