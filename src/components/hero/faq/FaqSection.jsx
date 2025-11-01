import { useEffect, useRef } from "react";
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
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const items = Array.from(root.querySelectorAll(".faq-section__item"));

    const cleanups = items.map((item) => {
      const summary = item.querySelector("summary");
      const answer = item.querySelector(".faq-section__answer");
      if (!summary || !answer) {
        return () => {};
      }

      let frameId = null;
      let isAnimating = false;
      let isOpen = item.hasAttribute("open");

      const clearFrame = () => {
        if (frameId !== null) {
          cancelAnimationFrame(frameId);
          frameId = null;
        }
      };

      const setExpandedState = (expanded) => {
        summary.setAttribute("aria-expanded", expanded ? "true" : "false");
      };

      const finishAnimation = () => {
        isAnimating = false;
        clearFrame();
      };

      const handleTransitionEnd = (event) => {
        if (event.propertyName !== "height") {
          return;
        }

        if (isOpen) {
          answer.style.height = "auto";
        } else {
          answer.style.height = "0px";
          item.removeAttribute("open");
        }

        finishAnimation();
      };

      const openItem = () => {
        if (isOpen || isAnimating) {
          return;
        }

        isOpen = true;
        isAnimating = true;
        item.setAttribute("open", "");
        setExpandedState(true);

        answer.style.height = "0px";
        answer.style.opacity = "0";
        answer.style.transform = "translateY(-8px)";

        clearFrame();
        frameId = requestAnimationFrame(() => {
          const targetHeight = answer.scrollHeight;
          if (targetHeight === 0) {
            answer.style.height = "auto";
            answer.style.opacity = "1";
            answer.style.transform = "translateY(0)";
            frameId = null;
            finishAnimation();
            return;
          }
          answer.style.height = `${targetHeight}px`;
          answer.style.opacity = "1";
          answer.style.transform = "translateY(0)";
          frameId = null;
        });
      };

      const closeItem = () => {
        if (!isOpen || isAnimating) {
          return;
        }

        isOpen = false;
        isAnimating = true;
        setExpandedState(false);

        const startHeight = answer.scrollHeight;
        answer.style.height = `${startHeight}px`;
        answer.style.opacity = "1";
        answer.style.transform = "translateY(0)";

        clearFrame();
        frameId = requestAnimationFrame(() => {
          if (startHeight === 0) {
            answer.style.height = "0px";
            answer.style.opacity = "0";
            answer.style.transform = "translateY(-8px)";
            item.removeAttribute("open");
            frameId = null;
            finishAnimation();
            return;
          }
          answer.style.height = "0px";
          answer.style.opacity = "0";
          answer.style.transform = "translateY(-8px)";
          frameId = null;
        });
      };

      const handleSummaryClick = (event) => {
        event.preventDefault();
        if (isOpen) {
          closeItem();
        } else {
          openItem();
        }
      };

      if (isOpen) {
        answer.style.height = "auto";
        answer.style.opacity = "1";
        answer.style.transform = "translateY(0)";
        setExpandedState(true);
      } else {
        item.removeAttribute("open");
        answer.style.height = "0px";
        answer.style.opacity = "0";
        answer.style.transform = "translateY(-8px)";
        setExpandedState(false);
      }

      summary.addEventListener("click", handleSummaryClick);
      answer.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        summary.removeEventListener("click", handleSummaryClick);
        answer.removeEventListener("transitionend", handleTransitionEnd);
        clearFrame();
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="faq-section"
      id="faq"
      data-animate="reveal-up"
      data-animate-delay="0.01s"
    >
      <div className="hero-shell">
        <header
          className="section-title"
          data-animate="reveal-up"
          // data-animate-delay="0.01s"
        >
          Your <span className="section-eyebrow">questions</span> answered
        </header>
        {/* <h2 className="section-title">Everything you need to launch proactive foot care</h2>
        <p className="section-description">
          Still curious? Explore our most common questions or reach out for a tailored walkthrough.
        </p> */}

        <div
          className="faq-section__items"
          data-animate="fade-in"
          data-animate-delay="0.1s"
          data-animate-duration="0.2s"
        >
          {faqs.map(({ id, question, answer }, index) => (
            <details
              key={id}
              className="faq-section__item"
              data-animate="reveal-up"
              data-animate-delay={`${0.2 + index * 0.1}s`}
            >
              <summary>
                <span className="faq-section__question">{question}</span>
                <span className="faq-section__icon" aria-hidden="true" />
              </summary>
              <div className="faq-section__answer">
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}