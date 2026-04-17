import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Activity, Thermometer, Footprints, Shield, Zap, BarChart3, Users, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Sole-arium — Biomechanical Intelligence for How India Moves',
  description:
    'Most people walk incorrectly for years. Most never find out. Sole-arium is India\'s biomechanical intelligence platform — AI-powered gait analysis and smart insoles built for Indian bodies.',
  alternates: { canonical: 'https://solearium.in' },
}

const trustSignals = [
  { label: 'IIT Delhi', sublabel: 'Research roots' },
  { label: 'Evidence-informed', sublabel: 'Clinical approach' },
  { label: 'Built for Indian bodies', sublabel: 'Native morphology data' },
  { label: 'Full-stack pipeline', sublabel: 'Capture → Deliver' },
]

const pipelineSteps = [
  {
    step: '01',
    label: 'Capture',
    title: 'Movement analysis',
    body: 'ABLIP uses your phone camera to capture gait patterns, load distribution, and movement asymmetries without specialized equipment.',
    icon: Activity,
  },
  {
    step: '02',
    label: 'Model',
    title: 'AI biomechanical modelling',
    body: 'Our models — trained on Indian foot morphology data — interpret what the capture reveals about your specific biomechanical profile.',
    icon: BarChart3,
  },
  {
    step: '03',
    label: 'Design',
    title: 'Precision prescription',
    body: 'Each insole is prescribed to your exact pressure distribution, arch geometry, and movement patterns. Not your shoe size. Your foot.',
    icon: Zap,
  },
  {
    step: '04',
    label: 'Deliver',
    title: 'Manufactured & refined',
    body: 'CAD/CAM precision manufacturing. And with each pair, the system learns. Every step improves the model for every user.',
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
  {
    number: '03',
    title: 'Full-stack integration',
    body: 'Camera capture, AI modelling, prescription, and precision manufacture are all in one pipeline. Most companies do one of these. We do all four, and they compound.',
  },
  {
    number: '04',
    title: 'Data that compounds',
    body: 'Every pair we make teaches the system something. The more Indian biomechanical data we collect, the more accurate our models become for everyone. This advantage grows over time.',
  },
]

const howItWorks = [
  { step: '1', title: 'Scan with your phone', body: 'Download ABLIP. Use your phone camera to capture your gait and standing posture in minutes.' },
  { step: '2', title: 'Receive your movement report', body: 'Get a detailed breakdown of your biomechanical profile — pressure patterns, asymmetries, risk signals.' },
  { step: '3', title: 'Get prescribed insoles', body: 'If insoles are appropriate, they are designed to your exact foot profile and delivered to your door.' },
  { step: '4', title: 'Your data works for you', body: 'With continued use, your profile becomes more precise. The system learns. Your correction improves.' },
]

const homepageFAQs = [
  {
    question: 'What does Sole-arium actually do?',
    answer: 'Sole-arium is a biomechanical intelligence platform. We combine phone-camera gait analysis (ABLIP) with AI-powered movement modelling to understand how you move — then design smart insoles precisely matched to your foot\'s actual pressure distribution and movement patterns. Think of it as clinical-grade biomechanical assessment, without the hospital queue.',
  },
  {
    question: 'Is this only for people with foot pain or injury?',
    answer: 'No. While Sole-arium is especially valuable for diabetic foot monitoring, recovery support, and structural issues, it is equally relevant for runners, athletes, people with desk jobs, and anyone who wants to understand their movement. Most people have never received any data about how they walk. That is the gap we address.',
  },
  {
    question: 'How is this different from regular insoles?',
    answer: 'Generic insoles are sized to shoe numbers. They cannot correct what they have never measured. Sole-arium insoles are prescribed to your exact plantar pressure map and biomechanical profile — the difference between a standard lens and a prescription lens. One is a guess. The other is specific.',
  },
  {
    question: 'Do I need the hardware insoles to use Sole-arium?',
    answer: 'No. ABLIP, our phone-camera application, works without any hardware. It provides movement analysis and a biomechanical report. The smart insoles are a separate product for users who need continuous monitoring or more precise correction.',
  },
  {
    question: 'Is Sole-arium meant to replace a doctor?',
    answer: 'Sole-arium is not a medical device and does not replace clinical judgement. It is a tool designed to surface movement information that is typically invisible — helping you and your care team make more informed decisions. For any medical concern, always consult a qualified clinician.',
  },
  {
    question: 'Is this built for Indian users specifically?',
    answer: 'Yes, and this is one of our most important differentiators. Indian foot morphology — wider forefoot, different arch distribution, gait patterns shaped by climate and footwear — is different from the Western data that most global brands use. Our models are built on Indian biomechanical data.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        {/* Scan lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[20, 35, 65, 80].map((pct) => (
            <div key={pct} className="absolute left-0 right-0 h-px bg-amber/5" style={{ top: `${pct}%` }} />
          ))}
        </div>

        <div className="container-wide section-pad relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="amber" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block animate-pulse-slow" />
              Biomechanical Intelligence — India
            </Badge>

            <h1 className="heading-xl mb-6 text-balance">
              Most people walk incorrectly
              <br className="hidden sm:block" />
              <span className="text-amber"> for years.</span>
              <br className="hidden sm:block" />{' '}
              Most never find out.
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-10 text-balance">
              Sole-arium is India&rsquo;s biomechanical intelligence platform. AI-powered gait analysis and smart insoles, built for Indian bodies — delivering clinical-grade precision without the hospital queue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/products/ablip" size="lg">
                Explore ABLIP <ArrowRight size={18} />
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See the Platform
              </Button>
            </div>

            {/* Data readout strip */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink-border rounded-2xl overflow-hidden max-w-2xl mx-auto">
              {[
                { value: '8,000+', label: 'Steps/day analysed' },
                { value: '3-axis', label: 'Pressure mapping' },
                { value: '< 5 min', label: 'Full assessment' },
                { value: 'Indian data', label: 'Native morphology' },
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

      {/* ── TRUST STRIP ── */}
      <section className="border-y border-ink-border bg-ink-card">
        <div className="container-wide px-5 md:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustSignals.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                <span className="text-sm font-medium text-bone">{s.label}</span>
                <span className="hidden sm:inline text-xs text-bone-muted">— {s.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="heading-lg mb-4">
              The body signals dysfunction long before it hurts.
            </h2>
            <p className="body-md">
              Overpronation shifts load to the knee. Asymmetric gait creates hip imbalance. Pressure concentration in diabetic feet precedes ulcers by weeks. This information exists in every step you take. Until now, no one was reading it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="text-sm font-medium text-bone mb-2">{item.label}</div>
                <div className="text-xs text-bone-muted italic">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM PIPELINE ── */}
      <section id="platform" className="section-pad bg-ink-soft relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">The platform</p>
            <h2 className="heading-lg mb-4">Capture. Model. Design. Deliver.</h2>
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
                <p className="text-sm text-bone-muted leading-relaxed">{step.body}</p>
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-amber opacity-40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/platform" variant="secondary">
              Explore the Full Platform <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">Products</p>
            <h2 className="heading-lg mb-4">Two surfaces. One system.</h2>
            <p className="body-md">
              ABLIP brings movement intelligence to your phone. Smart Insoles bring continuous sensing to every step. Together, they form the most complete biomechanical picture available without specialist equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ABLIP */}
            <div className="card-dark group hover:border-amber/40 transition-all duration-300 p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="amber" className="mb-3">Mobile Application</Badge>
                  <h3 className="heading-sm">ABLIP</h3>
                  <p className="text-xs text-bone-muted mt-1">AI-powered gait analysis via phone camera</p>
                </div>
                <PhoneIcon />
              </div>
              <p className="body-sm mb-6">
                Point. Capture. Understand. ABLIP uses your phone camera to analyse your gait, map your plantar load distribution, and surface movement patterns that most people never learn about themselves. No special hardware. No clinic visit. A complete biomechanical report in under five minutes.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Gait pattern analysis', 'Load distribution mapping', 'Movement asymmetry detection', 'Personalised movement report'].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-bone-dim">
                    <span className="w-1 h-1 rounded-full bg-teal-light mt-1.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Button href="/products/ablip" variant="outline" size="sm">
                Learn about ABLIP <ArrowRight size={14} />
              </Button>
            </div>

            {/* Smart Insoles */}
            <div className="card-dark group hover:border-amber/40 transition-all duration-300 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="ghost">Coming Soon</Badge>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="teal" className="mb-3">Hardware + Firmware</Badge>
                  <h3 className="heading-sm">Smart Insoles</h3>
                  <p className="text-xs text-bone-muted mt-1">Continuous biomechanical sensing</p>
                </div>
                <InsoleIcon />
              </div>
              <p className="body-sm mb-6">
                Where ABLIP gives you snapshots, Smart Insoles give you the full picture. Embedded sensors track plantar pressure, temperature gradients, and step symmetry continuously — every hour, every day. For diabetic monitoring, post-surgery recovery, and serious performance optimisation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Real-time pressure mapping', 'Temperature monitoring', 'Step symmetry tracking', 'Remote clinician sharing'].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-bone-dim">
                    <span className="w-1 h-1 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Button href="/products/smart-insoles" variant="secondary" size="sm">
                Join Waitlist <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Solutions</p>
            <h2 className="heading-lg mb-4">Who is this for?</h2>
            <p className="body-md">
              Biomechanical ignorance is not a medical condition — it is a universal gap. Sole-arium addresses five distinct movement contexts, from clinical need to everyday performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <Link key={uc.href} href={uc.href} className="card-dark-hover group block">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${uc.color === 'teal' ? 'bg-teal/10' : 'bg-amber/10'}`}>
                  <uc.icon size={18} className={uc.color === 'teal' ? 'text-teal-light' : 'text-amber'} />
                </div>
                <p className="eyebrow text-[10px] mb-1">{uc.label}</p>
                <h3 className="text-base font-semibold text-bone mb-2">{uc.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{uc.body}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-medium text-bone-muted group-hover:text-amber transition-colors">
                  Learn more <ChevronRight size={14} />
                </div>
              </Link>
            ))}

            {/* Solutions CTA card */}
            <div className="card-dark border-dashed border-amber/20 flex flex-col items-center justify-center text-center p-8">
              <p className="text-sm font-medium text-bone mb-2">Not sure which applies to you?</p>
              <p className="text-xs text-bone-muted mb-4">Start with a movement assessment and let the data guide the recommendation.</p>
              <Button href="/solutions" variant="outline" size="sm">View All Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SOLE-ARIUM ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-glow rounded-full blur-3xl pointer-events-none opacity-50" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Why Sole-arium</p>
              <h2 className="heading-lg mb-4">
                This is not a product company. It is infrastructure.
              </h2>
              <p className="body-md mb-8">
                Every competitor addresses part of the problem. Scholl sells comfort. A local orthotist applies clinical skill without data. A hospital provides precision without access. None of them can do what we do — because no one built the full stack.
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
                    <p className="text-sm text-bone-muted leading-relaxed">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA INTELLIGENCE MOAT ── */}
      <section className="section-pad bg-ink-soft relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="eyebrow mb-3">Data intelligence</p>
            <h2 className="heading-lg mb-4">Every step improves the system.</h2>
            <p className="body-md">
              Your foot lands approximately 8,000 times a day. Each landing is a data point. With enough of them — from enough Indian feet — our models don&rsquo;t just describe your movement. They predict where it&rsquo;s heading and correct it earlier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Activity, title: 'More users → better models', body: 'Every Indian foot we analyse makes our biomechanical models more accurate for the next one. The data advantage compounds.' },
              { icon: BarChart3, title: 'More steps → better prescriptions', body: 'Longitudinal movement data reveals patterns that single assessments miss. Seasonal change, fatigue, load shift over time.' },
              { icon: Shield, title: 'Better models → more impact', body: 'As the system matures, it surfaces risk earlier, corrects more precisely, and supports more complex biomechanical decisions.' },
            ].map((item) => (
              <div key={item.title} className="card-dark text-center p-8">
                <div className="w-12 h-12 rounded-2xl bg-amber/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={22} className="text-amber" />
                </div>
                <h3 className="text-base font-semibold text-bone mb-3">{item.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="heading-lg mb-4">From your phone to your prescription.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-ink-border z-10" aria-hidden="true">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber opacity-40" />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-bone mb-2">{step.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH / CREDIBILITY ── */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Research foundation</p>
              <h2 className="heading-lg mb-5">Built on evidence. Validated on Indian feet.</h2>
              <p className="body-md mb-6">
                Sole-arium&rsquo;s biomechanical models are not adapted from Western research. They are built from Indian morphological data — recognising that Indian foot geometry, gait patterns, and common pathologies reflect different structural realities.
              </p>
              <p className="body-md mb-8">
                Our clinical approach is evidence-informed, our claims are bounded by what the data supports, and our outputs are designed to help — not replace — clinical judgement.
              </p>
              <Button href="/research" variant="secondary">
                Read our Research Approach <ArrowRight size={16} />
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { label: 'IIT Delhi', detail: 'Research and development foundation' },
                { label: 'Max Healthcare', detail: 'Clinical advisory relationship [Pending verification]' },
                { label: 'Evidence-informed thresholds', detail: 'Outputs bounded by peer-reviewed literature' },
                { label: 'Responsible claims', detail: 'We state what we can measure. We do not overstate outcomes.' },
                { label: 'Indian morphology data', detail: 'Models trained on Indian foot geometry, not Western proxies' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-ink-border bg-ink-card">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-light mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-bone">{item.label}</p>
                    <p className="text-xs text-bone-muted mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow mb-3">The team</p>
            <h2 className="heading-md mb-4">Built by people who understand the body and the technology.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { role: 'Clinical Research', detail: 'Biomechanics and musculoskeletal assessment expertise rooted in IIT Delhi research' },
              { role: 'AI & Product', detail: 'Machine learning engineers and product designers building for Indian health realities' },
              { role: 'Hardware & Manufacturing', detail: 'CAD/CAM precision manufacturing with tight feedback loops to clinical design' },
            ].map((t) => (
              <div key={t.role} className="card-dark text-center p-6">
                <div className="w-10 h-10 rounded-full bg-amber/10 mx-auto mb-4 flex items-center justify-center">
                  <Users size={18} className="text-amber" />
                </div>
                <p className="text-sm font-semibold text-bone mb-2">{t.role}</p>
                <p className="text-xs text-bone-muted leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/company" variant="ghost">
              Meet the full team <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="eyebrow mb-3">FAQ</p>
              <h2 className="heading-md mb-4">Common questions.</h2>
              <p className="body-sm mb-6">
                If you have a question that isn&rsquo;t covered here, our team responds to every inquiry.
              </p>
              <Button href="/faq" variant="secondary" size="sm">
                See all FAQs
              </Button>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={homepageFAQs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 glow-amber" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
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

function PhoneIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="rgba(232,160,32,0.1)" />
      <rect x="13" y="8" width="14" height="24" rx="3" stroke="#E8A020" strokeWidth="1.5" />
      <circle cx="20" cy="28" r="1.5" fill="#E8A020" fillOpacity="0.6" />
      <line x1="17" y1="12" x2="23" y2="12" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function InsoleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="rgba(26,122,106,0.1)" />
      <path d="M12 28C12 28 14 20 16 16C18 12 22 10 25 11C28 12 29 16 28 21C27 25 24 28 20 29C17 30 12 28 12 28Z" stroke="#1A7A6A" strokeWidth="1.5" />
      <path d="M16 22C18 20 22 20 24 22" stroke="#E8A020" strokeWidth="1" strokeLinecap="round" />
      <circle cx="18" cy="17" r="1" fill="#E8A020" fillOpacity="0.6" />
      <circle cx="22" cy="25" r="1" fill="#E8A020" fillOpacity="0.6" />
    </svg>
  )
}
