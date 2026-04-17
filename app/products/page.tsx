import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Smartphone, Layers, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Products — ABLIP App & Smart Insoles',
  description:
    'Sole-arium\'s two product surfaces: ABLIP, the AI gait analysis app, and Smart Insoles with continuous biomechanical sensing. Two products. One system.',
  alternates: { canonical: 'https://solearium.in/products' },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="amber" className="mb-6">Products</Badge>
            <h1 className="heading-xl mb-6">Two surfaces. One system.</h1>
            <p className="body-lg max-w-2xl mx-auto">
              ABLIP brings movement intelligence to your phone. Smart Insoles bring continuous sensing to every step. Together, they form the most complete picture of your biomechanics available outside a specialist clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ABLIP */}
            <div className="card-dark p-8 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="amber" className="mb-3">Available Now</Badge>
                  <h2 className="heading-md">ABLIP</h2>
                  <p className="text-sm text-bone-muted mt-1">AI-powered gait analysis via phone camera</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={24} className="text-amber" />
                </div>
              </div>

              <p className="body-md mb-6">
                No lab. No specialist equipment. No hospital visit. ABLIP uses your smartphone camera and computer vision to capture your gait, analyse your movement patterns, and deliver a biomechanical report that most people never get to see about themselves.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Gait cycle analysis',
                  'Load distribution mapping',
                  'Movement asymmetry detection',
                  'Personalised report',
                  'Prescription-ready output',
                  'No hardware required',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-bone-dim">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8 p-5 bg-ink rounded-xl border border-ink-border">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber">Ideal for</p>
                {[
                  'Anyone wanting to understand their movement',
                  'Diabetic foot monitoring (with clinician guidance)',
                  'Recovery and rehabilitation support',
                  'Performance and gait optimisation',
                ].map((use) => (
                  <div key={use} className="flex items-start gap-2 text-sm text-bone-dim">
                    <ChevronRight size={14} className="text-amber mt-0.5 flex-shrink-0" />
                    {use}
                  </div>
                ))}
              </div>

              <Button href="/products/ablip" size="md">
                Explore ABLIP <ArrowRight size={16} />
              </Button>
            </div>

            {/* Smart Insoles */}
            <div className="card-dark p-8 relative group">
              <div className="absolute top-6 right-6">
                <Badge variant="ghost">Coming Soon</Badge>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="teal" className="mb-3">Hardware + Firmware</Badge>
                  <h2 className="heading-md">Smart Insoles</h2>
                  <p className="text-sm text-bone-muted mt-1">Continuous biomechanical sensing</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Layers size={24} className="text-teal-light" />
                </div>
              </div>

              <p className="body-md mb-6">
                ABLIP gives you assessments. Smart Insoles give you continuous intelligence. Embedded pressure sensors, temperature monitors, and step symmetry tracking run throughout the day — building a longitudinal picture of your biomechanics that no snapshot assessment can provide.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Real-time pressure mapping',
                  'Temperature monitoring',
                  'Step symmetry tracking',
                  'Remote sharing capability',
                  'Longitudinal data',
                  'App integration',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-bone-dim">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-light mt-1.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8 p-5 bg-ink rounded-xl border border-ink-border">
                <p className="text-xs font-semibold tracking-widest uppercase text-teal-light">Ideal for</p>
                {[
                  'Diabetic foot monitoring with continuous data',
                  'Post-surgery recovery tracking',
                  'Performance athletes needing longitudinal data',
                  'Clinicians monitoring patients remotely',
                ].map((use) => (
                  <div key={use} className="flex items-start gap-2 text-sm text-bone-dim">
                    <ChevronRight size={14} className="text-teal-light mt-0.5 flex-shrink-0" />
                    {use}
                  </div>
                ))}
              </div>

              <Button href="/products/smart-insoles" variant="secondary" size="md">
                Join Waitlist <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-pad">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Comparison</p>
            <h2 className="heading-md mb-4">How to choose</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink-border">
                  <th className="text-left py-3 pr-6 text-bone-muted font-medium w-1/3">Capability</th>
                  <th className="text-center py-3 px-4 text-amber font-semibold">ABLIP</th>
                  <th className="text-center py-3 px-4 text-teal-light font-semibold">Smart Insoles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-border">
                {[
                  ['Gait pattern analysis', true, true],
                  ['Pressure distribution mapping', 'Inferred', true],
                  ['Hardware required', false, true],
                  ['Continuous / always-on monitoring', false, true],
                  ['Temperature monitoring', false, true],
                  ['Remote clinician sharing', false, true],
                  ['Works with phone only', true, false],
                  ['Prescription generation', true, true],
                  ['Longitudinal tracking', 'Limited', true],
                ].map(([cap, ablip, insole]) => (
                  <tr key={cap as string}>
                    <td className="py-3 pr-6 text-bone-dim">{cap as string}</td>
                    <td className="py-3 px-4 text-center">
                      {ablip === true ? <span className="text-amber">✓</span> : ablip === false ? <span className="text-bone-muted opacity-40">—</span> : <span className="text-bone-muted text-xs">{ablip as string}</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {insole === true ? <span className="text-teal-light">✓</span> : insole === false ? <span className="text-bone-muted opacity-40">—</span> : <span className="text-bone-muted text-xs">{insole as string}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Not sure where to start?</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Begin with ABLIP. It requires nothing but your phone, takes five minutes, and gives you a complete picture of how you move.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products/ablip" size="lg">Explore ABLIP <ArrowRight size={16} /></Button>
            <Button href="/contact" variant="secondary" size="lg">Talk to our team</Button>
          </div>
        </div>
      </section>
    </>
  )
}
