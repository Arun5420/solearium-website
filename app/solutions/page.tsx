import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Activity, Footprints, Zap, Users, Shield, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Solutions — Find the Right Biomechanical Support',
  description:
    'Sole-arium solutions for diabetic foot monitoring, post-surgery recovery, athletic performance, everyday movement, and structural support. Find what applies to you.',
  alternates: { canonical: 'https://solearium.in/solutions' },
}

const solutions = [
  {
    icon: Footprints,
    label: 'Medical',
    title: 'Diabetic Foot & Risk Monitoring',
    href: '/solutions/diabetic-foot',
    color: 'teal',
    audience: 'For people with diabetes and their care teams',
    problem: 'Plantar pressure concentration and temperature change are measurable precursors to diabetic foot ulcers. Most people have no visibility into these signals until damage has already begun.',
    how: 'Sole-arium surfaces continuous pressure and temperature data, helping individuals and clinicians monitor foot health and make earlier, informed decisions.',
    products: ['Smart Insoles (primary)', 'ABLIP (assessment)'],
  },
  {
    icon: Activity,
    label: 'Rehabilitation',
    title: 'Recovery & Post-Surgery Support',
    href: '/solutions/recovery',
    color: 'amber',
    audience: 'For patients recovering from orthopaedic surgery or injury',
    problem: 'After lower-limb surgery, asymmetric loading — overusing the healthy side, underusing the healing side — is common and often invisible to both patient and clinician.',
    how: 'Continuous step symmetry data provides an objective measure of load distribution during recovery, helping care teams identify unsafe loading patterns before they become setbacks.',
    products: ['Smart Insoles (primary)', 'ABLIP (baseline assessment)'],
  },
  {
    icon: Zap,
    label: 'Performance',
    title: 'Performance & Biomechanical Optimisation',
    href: '/solutions/performance',
    color: 'amber',
    audience: 'For athletes, runners, and performance-focused individuals',
    problem: 'Most athletes optimise training load, nutrition, and technique — but never their gait mechanics. Biomechanical inefficiency costs energy and loads joints asymmetrically.',
    how: 'ABLIP identifies gait inefficiencies and load asymmetries. Smart Insoles track how these patterns change with fatigue and training load. Together, they form a performance intelligence layer.',
    products: ['ABLIP (assessment)', 'Smart Insoles (monitoring)'],
  },
  {
    icon: Users,
    label: 'Everyday',
    title: 'Everyday Movement & Long-Hour Fatigue',
    href: '/solutions/everyday-movement',
    color: 'teal',
    audience: 'For people with active daily lives — standing professions, long commutes, desk fatigue',
    problem: 'Poor gait habits, unsupported arch geometry, and unnoticed load patterns accumulate over years. Most back pain, knee fatigue, and foot discomfort trace back to how people walk — not what they do.',
    how: 'An initial assessment surfaces any gait issues. Prescription insoles correct the underlying load mechanics. The result is less fatigue, better posture, and a more sustainable movement pattern.',
    products: ['ABLIP (assessment)', 'Prescription insoles'],
  },
  {
    icon: Shield,
    label: 'Structural',
    title: 'Structural Support & Gait Issues',
    href: '/solutions/structural-support',
    color: 'teal',
    audience: 'For people with flat feet, overpronation, recurring stress injuries, or diagnosed structural issues',
    problem: 'Structural foot issues place asymmetric loads on every joint above — knees, hips, lumbar spine. Generic inserts address comfort but not the mechanical source of the problem.',
    how: 'Measurement before correction. ABLIP identifies the specific pattern. Prescription insoles are designed to the individual — not to a generic arch type.',
    products: ['ABLIP (assessment + prescription)', 'Smart Insoles (monitoring)'],
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Solutions</Badge>
            <h1 className="heading-xl mb-6">
              Who is this for?
            </h1>
            <p className="body-lg max-w-2xl">
              Biomechanical ignorance is not a medical category — it is a universal gap. Whether you are managing diabetes, recovering from surgery, training seriously, or simply standing at work for eight hours a day, Sole-arium has a relevant solution.
            </p>
          </div>
        </div>
      </section>

      {/* Selector strip */}
      <section className="border-y border-ink-border bg-ink-card">
        <div className="container-wide px-5 md:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                href={sol.href}
                className="flex-shrink-0 text-sm px-4 py-2.5 rounded-full text-bone-muted hover:text-amber hover:bg-amber/5 transition-colors whitespace-nowrap"
              >
                {sol.title.split(' ')[0]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions list */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="space-y-6">
            {solutions.map((sol, i) => (
              <div key={sol.href} className="card-dark p-8 group hover:border-amber/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Icon + label */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${sol.color === 'teal' ? 'bg-teal/10' : 'bg-amber/10'}`}>
                      <sol.icon size={20} className={sol.color === 'teal' ? 'text-teal-light' : 'text-amber'} />
                    </div>
                    <Badge variant={sol.color === 'teal' ? 'teal' : 'amber'}>{sol.label}</Badge>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-11">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <h2 className="heading-sm mb-2">{sol.title}</h2>
                        <p className="text-xs text-bone-muted italic mb-4">{sol.audience}</p>
                        <Link
                          href={sol.href}
                          className="inline-flex items-center gap-1 text-sm font-medium text-amber hover:text-amber-dim transition-colors"
                        >
                          Explore this solution <ChevronRight size={14} />
                        </Link>
                      </div>

                      <div className="lg:col-span-1">
                        <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-2">The problem</p>
                        <p className="text-sm text-bone-dim leading-relaxed">{sol.problem}</p>
                      </div>

                      <div className="lg:col-span-1">
                        <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-2">How Sole-arium helps</p>
                        <p className="text-sm text-bone-dim leading-relaxed mb-4">{sol.how}</p>
                        <div className="space-y-1">
                          {sol.products.map((p) => (
                            <div key={p} className="flex items-center gap-2 text-xs text-bone-muted">
                              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${sol.color === 'teal' ? 'bg-teal-light' : 'bg-amber'}`} />
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Not sure which applies to you?</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Start with an ABLIP assessment. The data will indicate which solution is most relevant to your specific movement profile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products/ablip" size="lg">Start your assessment <ArrowRight size={16} /></Button>
            <Button href="/contact" variant="secondary" size="lg">Talk to our team</Button>
          </div>
        </div>
      </section>
    </>
  )
}
