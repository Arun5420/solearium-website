import "./Hero.css";
import HeroBanner from "../../components/hero/hero-banner/HeroBanner.jsx";
import ProblemCard from "../../components/hero/problem-card/ProblemCard.jsx";
import SolutionSection from "../../components/hero/solution-section/SolutionSection.jsx";
import FeaturedOn from "../../components/hero/featured-on/FeaturedOn.jsx";
import ValueHighlights from "../../components/hero/value-highlights/ValueHighlights.jsx";
import ProcessTimeline from "../../components/hero/process-timeline/ProcessTimeline.jsx";
import CareCta from "../../components/hero/care-cta/CareCta.jsx";
import TeamSection from "../../components/hero/team-section/TeamSection.jsx";
import TestimonialsSection from "../../components/hero/testimonials/TestimonialsSection.jsx";
import FaqSection from "../../components/hero/faq/FaqSection.jsx";
import SlipIn from "../../components/hero/slip-in/SlipIn.jsx";

export default function Hero() {
  return (
    <main className="hero-page">
      <HeroBanner />
      <ProblemCard />
      <SolutionSection />
      <SlipIn />
      <FeaturedOn />
      <ValueHighlights />
      <ProcessTimeline />
      <CareCta />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}