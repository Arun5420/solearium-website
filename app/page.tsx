import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Activity,
  Thermometer,
  Footprints,
  Shield,
  Zap,
  BarChart3,
  Radar,
  ChevronRight,
  Briefcase,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import HowItWorksVideos from '@/components/sections/HowItWorksVideos'

export const metadata: Metadata = {
  title: 'Sole-arium: Biomechanical Intelligence for How India Moves',
  description:
    "Most people walk incorrectly for years. Most never find out. Sole-arium is India's first biomechanical intelligence platform, built on Indian morphology data.",
  alternates: { canonical: 'https://solearium.in' },
}

const pipelineSteps = [
  {
    step: '01',
    label: 'Capture',
    title: 'Complete orthopaedic assessment',
    body: 'Gait, plantar pressure, alignment, 3D foot scan, neuropathy: all in one session.',
    icon: Activity,
  },
  {
    step: '02',
    label: 'Model',
    title: 'Clinical report + gait simulation',
    body: 'A clinical report you can share, and a simulation that drives the prescription.',
    icon: BarChart3,
  },
  {
    step: '03',
    label: 'Design',
    title: 'Prescribed, then personalised',
    body: 'The simulation defines the footwear. You choose how it looks.',
    icon: Zap,
  },
  {
    step: '04',
    label: 'Deliver',
    title: 'Manufactured to specification',
    body: 'No manual adjustment. No subjective fitting. What was prescribed is what is made.',
    icon: Shield,
  },
]

const useCases = [
  // ── Primary: highest clinical / everyday relevance ──
  {
    icon: Footprints,
    label: 'Diabetic Foot',
    title: 'Early risk monitoring',
    body: 'Pressure and temperature patterns can signal ulcer risk before symptoms appear.',
    href: '/solutions/diabetic-foot',
    color: 'teal',
    primary: true,
  },
  {
    icon: Shield,
    label: 'Structural',
    title: 'Flat feet & overpronation',
    body: 'Inserts cannot correct what they have never measured.',
    href: '/solutions/structural-support',
    color: 'teal',
    primary: true,
  },
  {
    icon: Briefcase,
    label: 'Occupational',
    title: 'Daily standing pain',
    body: 'Teachers, nurses, factory workers, guards. Hours on your feet, compounding load.',
    href: '/solutions/everyday-movement',
    color: 'amber',
    primary: true,
  },
  // ── Secondary ──
  {
    icon: Activity,
    label: 'Recovery',
    title: 'Post-surgery support',
    body: 'Uneven load after surgery can slow healing. Data guides safer recovery.',
    href: '/solutions/recovery',
    color: 'amber',
    primary: false,
  },
  {
    icon: Zap,
    label: 'Performance',
    title: 'Gait efficiency',
    body: 'Asymmetry in stride measurably reduces efficiency.',
    href: '/solutions/performance',
    color: 'teal',
    primary: false,
  },
  // TODO: Create /solutions/preventive-care page
  {
    icon: Radar,
    label: 'Preventive Care',
    title: 'Before symptoms',
    body: 'Movement issues begin long before pain. Baseline measurement reveals risk early.',
    href: '/solutions/preventive-care',
    color: 'amber',
    primary: false,
  },
]

const differentiators = [
  {
    number: '01',
    title: 'Built for Indian bodies',
    body: 'Indian foot morphology: wider forefoot, different arch geometry, climate-shaped gait. Not a Western body with adjustments.',
  },
  {
    number: '02',
    title: 'Clinical precision, without the hospital',
    body: 'Clinical-grade assessment, without specialist queues or high-cost access.',
  },
  {
    number: '03',
    title: 'Compounds with every user',
    body: 'Every assessment refines the model. The more people we serve, the sharper the next prescription.',
  },
]

export default function HomePage() {
  const Icon01 = pipelineSteps[0].icon
  const Icon02 = pipelineSteps[1].icon
  const Icon03 = pipelineSteps[2].icon
  const Icon04 = pipelineSteps[3].icon

  return (
    <>
      {/* ── HERO ── bg: #0D0D0D */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink">
        {/* Amber glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-glow rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-wide section-pad relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-balance">
              Most movement issues go unmeasured for years.
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-10 text-balance">
              Clinical-grade gait assessment, built for Indian feet. We measure
              plantar pressure, alignment, and 3D foot geometry, translating it
              into a clinical report you can share, and footwear prescribed
              to you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book" size="lg">
                Book Assessment <ArrowRight size={18} />
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Proof line */}
            <p className="mt-8 text-sm text-bone-muted">
              ~5 min assessment · Report yours to keep · Manufactured to specification
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── bg: #111111 */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="heading-lg md:text-[2.5rem] mb-0">
              The damage happens long before the pain.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {[
                {
                  stat: '350M+',
                  label: 'Indians live with musculoskeletal conditions',
                  note: 'Most adapt to it. Most call it age.',
                },
                {
                  stat: '<10%',
                  label: 'reach clinical-grade biomechanical assessment',
                  note: 'Not from lack of need. From lack of access.',
                },
                {
                  stat: '0',
                  label: 'data points most people have about their own gait',
                  note: 'No measurement. No correction. No change.',
                },
              ].map((item) => (
                <div key={item.stat} className="card-dark p-7">
                  <div className="text-4xl font-bold text-amber mb-2">
                    {item.stat}
                  </div>
                  <div className="text-[0.9375rem] font-medium text-bone mb-2 leading-snug">
                    {item.label}
                  </div>
                  <div className="text-xs text-bone-muted italic leading-[1.75]">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src="/media/problem.webp"
                alt="Bare foot close-up illustrating undetected gait issues"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (Platform Pipeline) ── bg: #0D0D0D */}
      <section
        id="platform"
        className="section-pad relative overflow-hidden bg-ink"
      >
        <div className="container-wide relative z-10">
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="heading-lg md:text-[2.5rem] mb-4">
              Capture → Model → Design → Deliver
            </h2>
            <p className="body-md">
              Most companies do one part of this chain. We built all four.
            </p>
          </div>

          {/* Two-column: flow (left) + product (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 lg:items-stretch">
            {/* LEFT — step flow */}
            <div className="lg:col-span-3">
              {/* Mobile: linear stack, no arrows */}
              <div className="flex flex-col gap-3 md:hidden">
                {pipelineSteps.map((step) => (
                  <div key={step.step} className="card-dark">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold tracking-widest text-amber">
                        {step.step}
                      </span>
                      <step.icon size={18} className="text-amber opacity-60" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">
                      {step.label}
                    </p>
                    <h3 className="text-lg font-semibold text-bone mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[0.9375rem] text-bone-muted leading-[1.7]">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* md+: zig-zag grid — Row 1: 01→02, Row 2: 04←03 */}
              <div
                className="hidden md:grid"
                style={{ gridTemplateColumns: '1fr 40px 1fr', gap: 0 }}
              >
                {/* ── Row 1 ── */}
                {/* Step 01 */}
                <div className="card-dark">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-amber">
                      {pipelineSteps[0].step}
                    </span>
                    <Icon01 size={18} className="text-amber opacity-60" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">
                    {pipelineSteps[0].label}
                  </p>
                  <h3 className="text-lg lg:text-xl font-semibold text-bone mb-3">
                    {pipelineSteps[0].title}
                  </h3>
                  <p className="text-[0.9375rem] text-bone-muted leading-[1.7]">
                    {pipelineSteps[0].body}
                  </p>
                </div>
                {/* → arrow — full column width, anchored card-to-card */}
                <div
                  className="flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(232,160,32,0.4))',
                    }}
                  >
                    <line
                      x1="0"
                      y1="8"
                      x2="30"
                      y2="8"
                      stroke="#E8A020"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                    <polyline
                      points="23,3 32,8 23,13"
                      fill="none"
                      stroke="#E8A020"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Step 02 */}
                <div className="card-dark">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-amber">
                      {pipelineSteps[1].step}
                    </span>
                    <Icon02 size={18} className="text-amber opacity-60" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">
                    {pipelineSteps[1].label}
                  </p>
                  <h3 className="text-lg lg:text-xl font-semibold text-bone mb-3">
                    {pipelineSteps[1].title}
                  </h3>
                  <p className="text-[0.9375rem] text-bone-muted leading-[1.7]">
                    {pipelineSteps[1].body}
                  </p>
                </div>

                {/* ── Spacer row — ↓ arrow on right column only ── */}
                <div className="h-8" aria-hidden="true" />
                <div className="h-8" aria-hidden="true" />
                <div
                  className="h-8 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="32"
                    viewBox="0 0 16 32"
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(232,160,32,0.4))',
                    }}
                  >
                    <line
                      x1="8"
                      y1="0"
                      x2="8"
                      y2="24"
                      stroke="#E8A020"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                    <polyline
                      points="3,18 8,26 13,18"
                      fill="none"
                      stroke="#E8A020"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* ── Row 2 — reversed: 04 on left, 03 on right ── */}
                {/* Step 04 */}
                <div className="card-dark">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-amber">
                      {pipelineSteps[3].step}
                    </span>
                    <Icon04 size={18} className="text-amber opacity-60" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">
                    {pipelineSteps[3].label}
                  </p>
                  <h3 className="text-lg lg:text-xl font-semibold text-bone mb-3">
                    {pipelineSteps[3].title}
                  </h3>
                  <p className="text-[0.9375rem] text-bone-muted leading-[1.7]">
                    {pipelineSteps[3].body}
                  </p>
                </div>
                {/* ← arrow — full column width, anchored card-to-card */}
                <div
                  className="flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(232,160,32,0.4))',
                    }}
                  >
                    <line
                      x1="40"
                      y1="8"
                      x2="10"
                      y2="8"
                      stroke="#E8A020"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                    <polyline
                      points="17,3 8,8 17,13"
                      fill="none"
                      stroke="#E8A020"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Step 03 */}
                <div className="card-dark">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-amber">
                      {pipelineSteps[2].step}
                    </span>
                    <Icon03 size={18} className="text-amber opacity-60" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">
                    {pipelineSteps[2].label}
                  </p>
                  <h3 className="text-lg lg:text-xl font-semibold text-bone mb-3">
                    {pipelineSteps[2].title}
                  </h3>
                  <p className="text-[0.9375rem] text-bone-muted leading-[1.7]">
                    {pipelineSteps[2].body}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — animations */}
            <div className="lg:col-span-2 flex flex-col gap-7">
              <HowItWorksVideos />
            </div>
          </div>

          {/* CTA — full width, below both columns */}
          <div className="mt-10 text-center">
            <div className="flex justify-center">
              <Button href="/book" variant="secondary" size="md">
                Book Assessment <ArrowRight size={16} />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ── SOLUTIONS ── bg: #111111 */}
      <section className="section-pad relative overflow-hidden bg-ink-soft">
        <div className="container-wide relative z-10">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Solutions</p>
            <h2 className="heading-lg md:text-[2.5rem] mb-4">Where do you fit?</h2>
            <p className="body-md">
              Six use-cases, from clinical need to everyday load.
            </p>
          </div>

          <p className="text-sm text-bone-muted mb-5">
            Select the condition or use-case closest to your movement.
          </p>

          {/* Two-column layout: cards left, visual stack right */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 items-stretch">
            {/* LEFT — 2×3 solution cards */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {useCases.map((uc) => (
                <Link
                  key={uc.label}
                  href={uc.href}
                  className={`group block rounded-2xl p-6 border transition-all duration-300 bg-ink-card hover:bg-ink-soft ${
                    uc.primary
                      ? 'border-amber/25 hover:border-amber/55 hover:shadow-[0_0_24px_rgba(232,160,32,0.07)]'
                      : 'border-ink-border hover:border-amber/35'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${uc.color === 'teal' ? 'bg-teal/10' : 'bg-amber/10'}`}
                  >
                    <uc.icon
                      size={18}
                      className={
                        uc.color === 'teal' ? 'text-teal-light' : 'text-amber'
                      }
                    />
                  </div>
                  <p className="eyebrow text-[10px] mb-1">{uc.label}</p>
                  <h3
                    className={`text-lg lg:text-xl font-semibold mb-2 ${uc.primary ? 'text-bone' : 'text-bone-dim'}`}
                  >
                    {uc.title}
                  </h3>
                  <p className="text-[0.9375rem] text-bone-muted leading-[1.65]">
                    {uc.body}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-xs font-medium text-bone-muted group-hover:text-amber transition-colors">
                    View solution <ChevronRight size={14} />
                  </div>
                </Link>
              ))}
            </div>

            {/* RIGHT — image · placeholder · CTA stacked to match left height */}
            <div className="flex flex-col gap-4">
              {/* Image 1 — object-top crops the bottom-right watermark */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0">
                <Image
                  src="/media/solution.webp"
                  alt="People moving through Indian streets, diverse everyday movement"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>

              {/* Placeholder — reserved for second image */}
              <div className="rounded-2xl bg-ink-card border border-ink-border aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0" />

              {/* CTA */}
              <div className="bg-ink-card rounded-2xl p-8 border border-dashed border-amber/20 flex flex-col items-center justify-center text-center">
                <p className="text-sm font-medium text-bone mb-4 leading-snug">
                  Not sure? Start with an assessment. The data will guide the next step.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href="/products/ablip" variant="outline" size="sm">
                    View All Solutions
                  </Button>
                  <Button href="/contact" variant="secondary" size="sm">
                    Talk to Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SOLE-ARIUM ── bg: #0D0D0D */}
      <section className="section-pad relative overflow-hidden bg-ink">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-amber-glow rounded-full blur-3xl pointer-events-none opacity-40"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Why Sole-arium</p>
              <h2 className="heading-lg md:text-[2.5rem] mb-4">
                This is infrastructure, not a product.
              </h2>
              <p className="body-md">
                Existing solutions solve one dimension. We built the full stack.
              </p>
            </div>

            <div className="space-y-4">
              {differentiators.map((d) => (
                <div key={d.number} className="card-dark flex gap-5">
                  <span className="text-xs font-bold text-amber opacity-60 mt-1 flex-shrink-0 w-6">
                    {d.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-bone mb-1.5">
                      {d.title}
                    </h3>
                    <p className="text-[0.9375rem] text-bone-muted leading-[1.7]">
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── bg: #0D0D0D with amber glow */}
      <section className="section-pad relative overflow-hidden bg-ink">
        <div className="absolute inset-0 glow-amber" aria-hidden="true" />

        <div className="container-wide relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="heading-lg md:text-[2.5rem] mb-5">Your gait, decoded.</h2>
            <p className="body-md mb-10 max-w-lg mx-auto">
              Book a biomechanical assessment. Decide what to do with the data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book" size="lg">
                Book Assessment <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Us
              </Button>
            </div>
            <p className="text-xs text-bone-muted mt-8">
              Our outputs are intended to inform, not replace, clinical
              assessment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
