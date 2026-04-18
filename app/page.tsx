import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Activity, Thermometer, Footprints, Shield, Zap, BarChart3, Users, ChevronRight, Briefcase } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Sole-arium — Biomechanical Intelligence for How India Moves',
  description:
    "Most people walk incorrectly for years. Most never find out. Sole-arium is India's first biomechanical intelligence platform — built on Indian morphology data.",
  alternates: { canonical: 'https://solearium.in' },
}

const pipelineSteps = [
  {
    step: '01',
    label: 'Capture',
    title: 'Complete orthopaedic assessment',
    body: 'Gait analysis, plantar pressure mapping, HKA alignment scan, 3D foot scan, and neuropathy assessment — a full clinical measurement battery that most people never access outside a specialist hospital.',
    icon: Activity,
  },
  {
    step: '02',
    label: 'Model',
    title: 'Clinical report + gait simulation',
    body: 'Your data generates two outputs: a detailed clinical report — complete orthopaedic analysis of your movement, yours to keep and share with any doctor — and a precise gait simulation that forms the foundation of your footwear prescription.',
    icon: BarChart3,
  },
  {
    step: '03',
    label: 'Design',
    title: 'Prescribed, then personalised',
    body: 'Your gait simulation drives a precise footwear prescription. A designer then builds your 3D CAD/CAM model — and you choose the aesthetics. Clinical precision and personal design, in one product.',
    icon: Zap,
  },
  {
    step: '04',
    label: 'Deliver',
    title: 'Manufactured to specification',
    body: 'Your finalised design goes directly to CNC precision manufacturing. No manual adjustment, no subjective fitting. What was prescribed is exactly what is made — and delivered to your door.',
    icon: Shield,
  },
]

const useCases = [
  {
    icon: Footprints,
    label: 'Diabetic Foot',
    title: 'Early risk monitoring',
    body: 'Pressure and temperature patterns can indicate ulcer risk before symptoms appear. Early signals. Informed decisions.',
    href: '/solutions/diabetic-foot',
    color: 'teal',
  },
  {
    icon: Activity,
    label: 'Recovery',
    title: 'Post-surgery support',
    body: 'Uneven load after surgery can slow healing. Objective movement data helps guide safer recovery decisions.',
    href: '/solutions/recovery',
    color: 'amber',
  },
  {
    icon: Zap,
    label: 'Performance',
    title: 'Gait efficiency',
    body: 'Energy leaks through every asymmetric stride. Understanding how you move is the first step to moving better.',
    href: '/solutions/performance',
    color: 'teal',
  },
  {
    icon: Users,
    label: 'Everyday Movement',
    title: 'Daily fatigue & gait',
    body: 'Long standing hours, poor footwear, unnoticed load patterns. Most people never think about their gait until it hurts.',
    href: '/solutions/everyday-movement',
    color: 'amber',
  },
  {
    icon: Shield,
    label: 'Structural',
    title: 'Flat feet & overpronation',
    body: 'Generic inserts cannot correct what they have never measured. Individual movement analysis is the foundation of effective support.',
    href: '/solutions/structural-support',
    color: 'teal',
  },
  {
    icon: Briefcase,
    label: 'Occupational',
    title: 'Daily standing pain',
    body: 'Teachers, nurses, factory workers, guards — hours on your feet without proper support creates compounding damage over time.',
    href: '/solutions/everyday-movement',
    color: 'amber',
  },
]

const differentiators = [
  {
    number: '01',
    title: 'Built for Indian bodies',
    body: 'Indian foot morphology — wider forefoot, different arch geometry, climate-shaped gait — is not a Western body with adjustments. Our models are trained on Indian data. No competitor can say this.',
  },
  {
    number: '02',
    title: 'Clinical precision, without the hospital',
    body: 'Biomechanical correction has historically required specialist queues and import prices. We designed a system that delivers clinical-grade assessment directly to you.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── bg: #0D0D0D */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: '#0D0D0D' }}>
        {/* Amber glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-wide section-pad relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-balance">
              Most people walk incorrectly
              <br className="hidden sm:block" />
              <span className="text-amber"> for years.</span>
              <br className="hidden sm:block" />{' '}
              Most never find out.
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-10 text-balance">
              India&rsquo;s first biomechanical intelligence platform — focused on understanding and correcting how you move, built on Indian morphology data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/products/ablip" size="lg">
                Understand How You Move <ArrowRight size={18} />
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Stats strip */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-border rounded-2xl overflow-hidden max-w-2xl mx-auto">
              {[
                { value: '8,000+', label: 'Steps/day analysed' },
                { value: '3-axis', label: 'Pressure mapping' },
                { value: 'Fully custom', label: 'Orthopaedic precision' },
              ].map((stat) => (
                <div key={stat.label} className="bg-ink-card px-4 py-4 text-center">
                  <div className="text-lg font-bold text-amber">{stat.value}</div>
                  <div className="text-xs text-bone-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── bg: #111111 */}
      <section className="section-pad" style={{ background: '#111111' }}>
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="heading-lg mb-0">
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
                  <div className="text-4xl font-bold text-amber mb-2">{item.stat}</div>
                  <div className="text-sm font-medium text-bone mb-2 leading-snug">{item.label}</div>
                  <div className="text-xs text-bone-muted italic leading-[1.75]">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
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
      <section id="platform" className="section-pad relative overflow-hidden" style={{ background: '#0D0D0D' }}>
        <div className="container-wide relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="heading-lg mb-4">Capture → Model → Design → Deliver</h2>
            <p className="body-md">
              Most companies do one part of this chain. We built all four — and they compound. The result is a system that gets measurably better with every user.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step, i) => (
              <div key={step.step} className="card-dark relative group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-amber">{step.step}</span>
                  <step.icon size={18} className="text-amber opacity-60" />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">{step.label}</p>
                <h3 className="text-base font-semibold text-bone mb-3">{step.title}</h3>
                <p className="text-sm text-bone-muted leading-[1.75]">{step.body}</p>
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-amber opacity-40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-bone-dim mt-10 max-w-2xl mx-auto leading-[1.75]">
            The result: fully customised orthopaedic footwear, made precisely for your foot. Delivered to your door.
          </p>

          <div className="mt-12 rounded-2xl overflow-hidden relative mx-auto" style={{ maxWidth: 600, aspectRatio: '4/3' }}>
            <Image
              src="/media/product.webp"
              alt="Sole-arium custom orthopaedic footwear product"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 600px"
            />
          </div>

          <div className="mt-10 text-center">
            <Button href="/platform" variant="secondary">
              Explore the Full Platform <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── bg: #111111 */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#111111' }}>
        <div className="container-wide relative z-10">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Solutions</p>
            <h2 className="heading-lg mb-4">Who is this for?</h2>
            <p className="body-md">
              Most people have never received a single data point about how they move. Sole-arium addresses six distinct movement realities — from clinical need to everyday performance.
            </p>
          </div>

          <div className="mb-10 rounded-2xl overflow-hidden relative" style={{ aspectRatio: '16/6' }}>
            <Image
              src="/media/solution.webp"
              alt="People moving through Indian streets — diverse everyday movement"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <Link key={uc.label} href={uc.href} className="card-dark-hover group block">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${uc.color === 'teal' ? 'bg-teal/10' : 'bg-amber/10'}`}>
                  <uc.icon size={18} className={uc.color === 'teal' ? 'text-teal-light' : 'text-amber'} />
                </div>
                <p className="eyebrow text-[10px] mb-1">{uc.label}</p>
                <h3 className="text-base font-semibold text-bone mb-2">{uc.title}</h3>
                <p className="text-sm text-bone-muted leading-[1.75]">{uc.body}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-medium text-bone-muted group-hover:text-amber transition-colors">
                  Learn more <ChevronRight size={14} />
                </div>
              </Link>
            ))}

            {/* Solutions CTA card */}
            <div className="card-dark border-dashed border-amber/20 flex flex-col items-center justify-center text-center p-8">
              <p className="text-sm font-medium text-bone mb-2">Not sure which applies to you?</p>
              <p className="text-xs text-bone-muted mb-4 leading-[1.75]">Start with a movement assessment and let the data guide the recommendation.</p>
              <Button href="/solutions" variant="outline" size="sm">View All Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SOLE-ARIUM ── bg: #0D0D0D */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0D0D0D' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-glow rounded-full blur-3xl pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Why Sole-arium</p>
              <h2 className="heading-lg mb-4">
                This is not a product company. It is infrastructure.
              </h2>
              <p className="body-md mb-8">
                Every existing solution addresses part of the problem. Some offer comfort without precision. Some offer clinical skill without accessibility. Some offer precision without scale. None of them built the full stack.
              </p>

              <Button href="/platform" size="md">
                See the Full Architecture <ArrowRight size={16} />
              </Button>
            </div>

            <div className="space-y-4">
              {differentiators.map((d) => (
                <div key={d.number} className="card-dark flex gap-5">
                  <span className="text-xs font-bold text-amber opacity-60 mt-1 flex-shrink-0 w-6">{d.number}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-bone mb-1.5">{d.title}</h3>
                    <p className="text-sm text-bone-muted leading-[1.75]">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── bg: #0D0D0D with amber glow */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0D0D0D' }}>
        <div className="absolute inset-0 glow-amber" aria-hidden="true" />

        {/* IMAGE_PLACEHOLDER: CTA */}
        <div
          className="absolute inset-0 rounded-none"
          style={{ background: 'rgba(255,255,255,0)', border: 'none' }}
          aria-hidden="true"
        >
          {/* IMAGE_PLACEHOLDER_CTA */}
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="heading-lg mb-5">
              Your gait, decoded.
            </h2>
            <p className="body-md mb-10 max-w-lg mx-auto">
              Start with a biomechanical assessment. Understand how you move. Then decide what to do with that understanding.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/products/ablip" size="lg">
                Start with ABLIP <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Us
              </Button>
            </div>
            <p className="text-xs text-bone-muted mt-8">
              Sole-arium is not a diagnostic device. Outputs are intended to inform, not replace, clinical assessment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
