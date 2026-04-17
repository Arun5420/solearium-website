import type { Metadata } from 'next'
import { ArrowRight, Activity, BarChart3, Zap, Shield, Layers, Database, RefreshCw, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'The Biomechanical Intelligence Platform',
  description:
    'Sole-arium\'s full-stack pipeline: phone-camera gait capture, AI biomechanical modelling, precision prescription, and CAD/CAM manufacture. Built for Indian bodies. Every step improves the system.',
  alternates: { canonical: 'https://solearium.in/platform' },
}

const pipeline = [
  {
    step: '01',
    label: 'Capture',
    title: 'Movement data acquisition',
    icon: Activity,
    color: 'amber',
    body: 'ABLIP uses the phone camera — a device everyone already carries — to capture gait video, standing posture, and dynamic movement patterns. Proprietary computer vision extracts biomechanically relevant signals without requiring a pressure plate, motion-capture lab, or clinical setting.',
    signals: ['Gait cycle analysis', 'Step timing asymmetry', 'Postural deviation', 'Load transfer patterns', 'Visual pressure proxies'],
  },
  {
    step: '02',
    label: 'Model',
    title: 'AI biomechanical modelling',
    icon: BarChart3,
    color: 'teal',
    body: 'Our models are trained on Indian foot and movement data — not adapted from Western population datasets. They translate raw capture signals into a structured biomechanical profile: arch geometry, pronation/supination tendency, pressure concentration zones, and movement risk patterns.',
    signals: ['Indian morphology baseline', 'Plantar pressure inference', 'Arch characterisation', 'Pronation classification', 'Risk signal identification'],
  },
  {
    step: '03',
    label: 'Design',
    title: 'Precision prescription',
    icon: Zap,
    color: 'amber',
    body: 'A prescription is not a product recommendation. It is a structural specification — exactly how much correction, where, and why. Each insole design is unique to its wearer\'s biomechanical profile. No two prescriptions are the same, because no two feet are the same.',
    signals: ['Individualised correction geometry', 'Material hardness mapping', 'Pressure redistribution targets', 'Use-case calibration', 'Medical annotation'],
  },
  {
    step: '04',
    label: 'Deliver',
    title: 'CAD/CAM manufacture',
    icon: Shield,
    color: 'teal',
    body: 'Prescriptions are sent directly to precision CNC manufacturing. No manual shaping. No subjective fitting. The product arrives as specified — and with each pair, the pipeline captures new data on how real-world outcomes compare to predicted correction. This closes the loop.',
    signals: ['Sub-millimetre precision', 'Material consistency', 'Outcome data capture', 'Longitudinal refinement', 'Quality verification'],
  },
]

const architectureAdvantages = [
  {
    icon: Layers,
    title: 'Vertical integration',
    body: 'Most companies occupy one layer of this pipeline. A clinic captures. A lab models. A factory manufactures. We built all four. This means every design decision benefits from every other layer — and the system can be optimised end-to-end.',
  },
  {
    icon: Database,
    title: 'The Indian data advantage',
    body: 'Our models are built on Indian biomechanical data. Indian foot morphology — wider forefoot, different arch geometry, climate-shaped gait patterns — is systematically different from Western populations. No competitor can claim this. It is a permanent structural advantage.',
  },
  {
    icon: RefreshCw,
    title: 'The compounding data flywheel',
    body: 'Every pair manufactured sends outcome signals back into the model layer. The system does not stay static. It refines. With each user, each step, each correction, the prescriptions become more accurate — and the moat against replication deepens.',
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">The Platform</Badge>
            <h1 className="heading-xl mb-6">
              Biomechanical intelligence<br />
              is a <span className="text-amber">system</span>, not a product.
            </h1>
            <p className="body-lg max-w-2xl mb-10">
              Understanding human movement requires capturing it, modelling it, designing corrections for it, and delivering those corrections with precision. Most companies do one of these. Sole-arium built all four — in a single integrated pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/products/ablip" size="lg">
                Start with ABLIP <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What the platform is */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">What it is</p>
              <h2 className="heading-lg mb-5">The layer between humans and movement.</h2>
              <p className="body-md mb-5">
                Biomechanical intelligence is the ability to understand, interpret, and act on movement data with clinical precision. For a hundred years, this capability existed only in specialist hospitals — accessible to very few, expensive for most, and absent entirely for the majority.
              </p>
              <p className="body-md mb-5">
                The Sole-arium platform makes biomechanical intelligence accessible through software, sensors, and precision manufacture — starting with the foot, because the foot is where movement begins.
              </p>
              <p className="body-md">
                This is not wellness. This is measurement. Everything we do is grounded in what we can observe, model, and verify.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Movement science', sublabel: 'The foundation' },
                { label: 'Computer vision', sublabel: 'The capture layer' },
                { label: 'Indian biomechanics data', sublabel: 'The model layer' },
                { label: 'Precision manufacture', sublabel: 'The output layer' },
              ].map((item) => (
                <div key={item.label} className="card-dark p-5">
                  <p className="text-sm font-semibold text-bone mb-1">{item.label}</p>
                  <p className="text-xs text-bone-muted">{item.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-3">The four-step pipeline</p>
            <h2 className="heading-lg mb-4">Capture → Model → Design → Deliver</h2>
            <p className="body-md">
              Every step in this pipeline is designed to compound. Each layer enriches the next, and outcome data flows back to refine the model.
            </p>
          </div>

          <div className="space-y-6">
            {pipeline.map((step, i) => (
              <div key={step.step} className="card-dark grid grid-cols-1 lg:grid-cols-12 gap-6 items-start p-8">
                <div className="lg:col-span-1 flex items-center justify-between lg:block">
                  <span className={`text-3xl font-bold ${step.color === 'amber' ? 'text-amber' : 'text-teal-light'} opacity-30`}>
                    {step.step}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.color === 'amber' ? 'bg-amber/10' : 'bg-teal/10'}`}>
                      <step.icon size={16} className={step.color === 'amber' ? 'text-amber' : 'text-teal-light'} />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold tracking-widest uppercase ${step.color === 'amber' ? 'text-amber' : 'text-teal-light'}`}>{step.label}</p>
                      <h3 className="text-base font-semibold text-bone">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-bone-muted leading-relaxed">{step.body}</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-3">Signals at this layer</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {step.signals.map((sig) => (
                      <div key={sig} className="flex items-center gap-2 text-xs text-bone-dim">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${step.color === 'amber' ? 'bg-amber' : 'bg-teal-light'}`} />
                        {sig}
                      </div>
                    ))}
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="lg:col-span-12 flex items-center gap-2 text-xs text-bone-muted pt-2 border-t border-ink-border">
                    <ChevronRight size={12} className="text-amber" />
                    <span>Output feeds directly into the next layer</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence loop */}
      <section id="intelligence" className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">The intelligence loop</p>
            <h2 className="heading-lg mb-4">The system learns from every step.</h2>
            <p className="body-md">
              Unlike a physical product that stops learning the moment it is shipped, the Sole-arium platform has a feedback loop. Outcome data from manufactured insoles flows back into the model layer — continuously refining biomechanical predictions and prescription accuracy.
            </p>
          </div>

          <div className="relative">
            {/* Loop visual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['Capture gait data', 'Model biomechanics', 'Prescribe correction', 'Measure outcomes'].map((label, i) => (
                <div key={label} className="relative card-dark text-center p-6">
                  <div className="text-2xl font-bold text-amber opacity-20 mb-2">{i + 1}</div>
                  <p className="text-sm font-medium text-bone">{label}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight size={14} className="text-amber opacity-40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 text-xs text-bone-muted">
                <RefreshCw size={12} className="text-teal-light" />
                Outcome data loops back — the model improves with every pair
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture advantages */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Why this architecture wins</p>
            <h2 className="heading-lg mb-4">Three compounding advantages.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architectureAdvantages.map((adv) => (
              <div key={adv.title} className="card-dark p-8">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                  <adv.icon size={20} className="text-amber" />
                </div>
                <h3 className="text-base font-semibold text-bone mb-3">{adv.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{adv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian bodies section */}
      <section className="section-pad bg-ink-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Built for Indian bodies</p>
              <h2 className="heading-lg mb-5">Indian morphology is not a Western body with adjustments.</h2>
              <p className="body-md mb-5">
                Indian foot morphology is distinct — wider forefoot-to-heel ratio, different arch distribution patterns, gait characteristics shaped by climate, terrain, and traditional footwear. Most global orthotics are designed around Western population data. Applied to Indian feet, they are an approximation at best.
              </p>
              <p className="body-md">
                Sole-arium builds models on Indian biomechanical data. This is not a marketing claim. It is a fundamental technical requirement for clinical accuracy — and it is a permanent structural advantage that no competitor can replicate without building from the ground up.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { stat: 'Different', label: 'Forefoot width distribution vs Western populations' },
                { stat: 'Distinct', label: 'Arch geometry shaped by climate and footwear culture' },
                { stat: 'Native', label: 'Gait patterns influenced by terrain and activity contexts' },
                { stat: 'Unique', label: 'Pathology incidence and expression in Indian foot morphology' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 card-dark p-5">
                  <div className="w-2 h-2 rounded-full bg-teal-light mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-teal-light mr-2">{item.stat}</span>
                    <span className="text-sm text-bone-muted">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 glow-amber opacity-50" aria-hidden="true" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="heading-lg mb-5">Ready to see it in action?</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Start with ABLIP — a five-minute phone-camera assessment that gives you more biomechanical information than most people get in a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products/ablip" size="lg">
              Explore ABLIP <ArrowRight size={18} />
            </Button>
            <Button href="/products/smart-insoles" variant="secondary" size="lg">
              See Smart Insoles
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
