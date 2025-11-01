import { useEffect, useRef, useState } from "react";
import "./FeaturedOn.css";

// use objects with stable ids so React can keep DOM nodes when we rotate the array
const initialLogos = [
  { id: "logo-0", src: "/icons/sponser.svg" },
  { id: "logo-1", src: "/icons/sponser2.svg" },
  { id: "logo-2", src: "/icons/sponser.svg" },
  { id: "logo-3", src: "/icons/sponser2.svg" },
  { id: "logo-4", src: "/icons/sponser.svg" },
  { id: "logo-5", src: "/icons/sponser2.svg" },
  { id: "logo-6", src: "/icons/sponser.svg" },
];
const VISIBLE = 5;
const TRANSITION_MS = 700;
const INTERVAL_MS = 2200;

export default function FeaturedOn() {
  const [items, setItems] = useState(initialLogos);
  const [animProgress, setAnimProgress] = useState(0); // 0..1
  const animRef = useRef(null);
  const rafRef = useRef(null);
  const intervalRef = useRef(null);

  // For each cycle we render VISIBLE + 1 items (extra for sliding)
  const rendered = [...items.slice(0, VISIBLE), items[VISIBLE % items.length]];

  // compute pixel shift
  const itemWidth = 120; // px
  const gap = 40; // px
  const shift = -(itemWidth + gap);

  const startSlide = () => {
    if (rafRef.current) return; // already animating
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / TRANSITION_MS, 1);
      setAnimProgress(t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // finish: rotate array and reset
        setItems((prev) => {
          const copy = [...prev];
          copy.push(copy.shift());
          return copy;
        });
        setAnimProgress(0);
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    intervalRef.current = setInterval(startSlide, INTERVAL_MS);
    return () => {
      clearInterval(intervalRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const pause = () => {
    clearInterval(intervalRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const resume = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(startSlide, INTERVAL_MS);
  };

  // compute dynamic scale and translateY for each rendered item based on animProgress
  const computeTransformForIndex = (i) => {
    const centerBase = 2; // center index before slide
    const center = centerBase + animProgress; // moves toward next index as progress grows
    const dist = i - center; // positive: to the right

    // mapping distances to scales: dist=0 -> 1.45, dist=1 -> 1.05, dist=2 -> 0.78
    const absd = Math.abs(dist);
    let scale;
    if (absd <= 1) {
      // interpolate between 1.45 and 1.05
      const t = absd; // 0..1
      scale = 1.45 + (1.05 - 1.45) * t;
    } else {
      // interpolate between 1.05 and 0.78 for t in [0,1]
      const t = Math.min((absd - 1) / 1, 1);
      scale = 1.05 + (0.78 - 1.05) * t;
    }

    // translateY: center up, sides down
    const translateY = -8 * Math.max(0, 1 - absd / 2);

    // opacity tweak
    const opacity = absd >= 2 ? 0.6 : 1 - absd * 0.15;

    return { scale, translateY, opacity };
  };

  const onMouseEnter = pause;
  const onMouseLeave = resume;

  return (
    <section className="featured-on" data-animate="reveal-up">
      <header className="section-title" data-animate="reveal-up" data-animate-delay="0.1s">
        <span className="section-eyebrow">Featured</span> on
      </header>

      <div
        className="featured-on__viewport"
        data-animate="scale-in"
        data-animate-delay="0.25s"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="featured-on__list"
          style={{
            transform: `translate3d(${shift * animProgress}px,0,0)`,
            transition: "none",
            willChange: "transform",
          }}
        >
          {rendered.map((item, i) => {
            const { scale, translateY, opacity } = computeTransformForIndex(i);
            return (
              <div key={item.id} className="featured-on__cell" style={{ width: `${itemWidth}px` }}>
                <img
                  className="featured-on__item"
                  src={item.src}
                  alt=""
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}