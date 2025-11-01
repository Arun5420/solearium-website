import { useEffect } from "react";

export function useScrollAnimations({
  rootMargin = "0px 0px 10% 0px",
  threshold = 0.1,
  once = true,
} = {}) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-animate]"));
    if (!elements.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    let frameId = null;
    const pending = new Map();

    let observer;

    const flush = () => {
      frameId = null;
      pending.forEach((isIntersecting, element) => {
        const shouldRepeat =
          element.dataset.animateRepeat === "true" || once === false;

        if (isIntersecting) {
          element.classList.add("is-visible");
          if (!shouldRepeat && observer) {
            observer.unobserve(element);
          }
        } else if (shouldRepeat) {
          element.classList.remove("is-visible");
        }
      });
      pending.clear();
    };

    const scheduleFlush = () => {
      if (frameId !== null) {
        return;
      }
      frameId = requestAnimationFrame(flush);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          pending.set(target, isIntersecting);
        });
        scheduleFlush();
      },
      { rootMargin, threshold }
    );

    elements.forEach((element) => {
      const delay = element.dataset.animateDelay;
      const duration = element.dataset.animateDuration;
      const ease = element.dataset.animateEase;

      if (delay) {
        element.style.setProperty("--animate-delay", delay);
      }
      if (duration) {
        element.style.setProperty("--animate-duration", duration);
      }
      if (ease) {
        element.style.setProperty("--animate-ease", ease);
      }

      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      pending.clear();
    };
  }, [rootMargin, threshold, once]);
}
