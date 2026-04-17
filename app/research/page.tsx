import type { Metadata } from 'next'
import { ArrowRight, FlaskConical, Shield, BarChart3, Database } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Research & Clinical Approach',
  description:
    'Sole-arium\'s biomechanical intelligence is evidence-informed, built on Indian morphology data, and designed with responsible claims. Our research approach, data philosophy, and validation roadmap.',
  alternates: { canonical: 'https://solearium.in/research' },
}

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="teal" className="mb-6">Research</Badge>
            <h1 className="heading-xl mb-6">
              Biomechanical intelligence<br />
              <span className="text-teal-light">built on evidence.</span>
            </h1>
            <p className="body-lg max-w-2xl">
              Sole-arium&rsquo;s clinical and research approach is grounded in evidence-informed biomechanics, Indian morphology data, and a commitment to claiming only what we can measure and verify. This page explains our methodology, data philosophy, and the boundaries of our outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Research foundation */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Our foundation</p>
              <h2 className="heading-lg mb-5">Evidence-informed. Not evidence-adjacent.</h2>
              <p className="body-md mb-5">
                There is a meaningful distinction between citing research to justify a product and building a product grounded in research methodology. Sole-arium operates with the latter approach — our thresholds, classifications, and output language are informed by peer-reviewed biomechanics literature.
              </p>
              <p className="body-md mb-5">
                We are also honest about the limits of current evidence. Where our outputs are inferences rather than direct measurements, we say so. Where clinical validation is still underway, we say that too.
              </p>
              <p className="body-md">
                We believe the most credible thing a health-adjacent company can do is state clearly what it knows, what it infers, and what it does not yet know.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: FlaskConical, label: 'R&D foundation', title: 'IIT Delhi', detail: 'Sole-arium&rsquo;s research and development is rooted in IIT Delhi, where biomechanical research, materials science, and AI engineering converge.' },
                { icon: Shield, label: 'Clinical advisory', title: 'Max Healthcare', detail: 'Clinical advisory relationship with Max Healthcare. [Pending formal verification — placeholder to be replaced with confirmed details.]' },
                { icon: BarChart3, label: 'Data methodology', title: 'Evidence-informed thresholds', detail: 'Our biomechanical classifications and risk thresholds draw on peer-reviewed literature in plantar pressure measurement, gait analysis, and diabetic foot care.' },
                { icon: Database, label: 'Data advantage', title: 'Indian morphology data', detail: 'Our models are trained on Indian foot and movement data — not adapted from Western population studies. This is both a research requirement and a commercial differentiator.' },
              ].map((item) => (
                <div key={item.title} className="card-dark flex gap-4 p-5">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-teal-light" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-teal-light mb-0.5">{item.label}</p>
                    <h3 className="text-sm font-semibold text-bone mb-1">{item.title}</h3>
                    <p className="text-sm text-bone-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Indian movement data matters */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">Indian movement data</p>
            <h2 className="heading-lg mb-6">Why Indian biomechanical data is a research requirement, not a marketing position.</h2>

            <div className="space-y-6">
              <div className="card-dark p-7">
                <h3 className="text-base font-semibold text-bone mb-3">The morphological reality</h3>
                <p className="body-md">
                  Indian foot morphology differs from Western populations in measurable, clinically relevant ways. Forefoot-to-heel width ratios, arch geometry, and gait characteristics shaped by cultural footwear practices and terrain are systematically different. Applying Western biomechanical models to Indian feet is not a minor approximation — it is a source of systematic error in both assessment and correction.
                </p>
              </div>

              <div className="card-dark p-7">
                <h3 className="text-base font-semibold text-bone mb-3">The data gap</h3>
                <p className="body-md">
                  The majority of published biomechanical research — gait laboratories, pressure plate studies, orthotic efficacy trials — is conducted on Western, predominantly Caucasian subjects. This is not malicious. It reflects where the research infrastructure exists. But it means that Indian practitioners applying this research to Indian patients are working with an imperfect evidence base. Sole-arium is building the Indian-specific dataset that this field requires.
                </p>
              </div>

              <div className="card-dark p-7">
                <h3 className="text-base font-semibold text-bone mb-3">Our commitment</h3>
                <p className="body-md">
                  As we scale, our Indian biomechanical dataset will become one of the most comprehensive available. We intend to contribute to the published research base — not just use existing research. This is part of our long-term mission to advance biomechanical science for populations that have been underrepresented in it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data interpretation philosophy */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">Data interpretation philosophy</p>
            <h2 className="heading-lg mb-4">What we measure. What we infer. What we do not claim.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Directly measured',
                color: 'teal',
                items: [
                  'Step timing and cadence (ABLIP)',
                  'Gait symmetry metrics (ABLIP)',
                  'Plantar pressure distribution (Smart Insoles)',
                  'Temperature at foot surface (Smart Insoles)',
                ],
              },
              {
                label: 'Inferred from measurement',
                color: 'amber',
                items: [
                  'Arch type characterisation (ABLIP)',
                  'Pronation/supination tendency (ABLIP)',
                  'Load distribution proxies (ABLIP)',
                  'Risk pattern signals (both products)',
                ],
              },
              {
                label: 'Not claimed',
                color: 'ghost',
                items: [
                  'Medical diagnosis of any condition',
                  'Certainty of future injury or ulceration',
                  'Replacement of clinical assessment',
                  'Treatment efficacy guarantees',
                ],
              },
            ].map((column) => (
              <div key={column.label} className="card-dark p-7">
                <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${column.color === 'teal' ? 'text-teal-light' : column.color === 'amber' ? 'text-amber' : 'text-bone-muted'}`}>
                  {column.label}
                </p>
                <div className="space-y-2">
                  {column.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-bone-dim">
                      <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${column.color === 'teal' ? 'bg-teal-light' : column.color === 'amber' ? 'bg-amber' : 'bg-bone-muted'}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation roadmap */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">Validation roadmap</p>
            <h2 className="heading-md mb-6">What is still being validated.</h2>
            <div className="space-y-4">
              {[
                { status: 'In progress', label: 'ABLIP accuracy validation', detail: 'Comparative studies between ABLIP outputs and clinical pressure plate measurements, underway with institutional partners. [Results to be published on this page when available.]' },
                { status: 'Planned', label: 'Longitudinal diabetic foot monitoring study', detail: 'A structured study examining whether continuous Smart Insole monitoring correlates with earlier identification of ulcer-precursor states. Timeline to be confirmed.' },
                { status: 'Planned', label: 'Indian morphology database publication', detail: 'Formal documentation of our Indian foot morphology dataset, intended for contribution to the published biomechanical literature.' },
                { status: 'Ongoing', label: 'Prescription outcome tracking', detail: 'All prescription insoles are linked to outcome data collection (with user consent) — building the feedback loop that improves prescription accuracy over time.' },
              ].map((item) => (
                <div key={item.label} className="card-dark flex gap-4 p-5">
                  <Badge variant={item.status === 'In progress' ? 'teal' : item.status === 'Ongoing' ? 'amber' : 'ghost'} className="flex-shrink-0 self-start">
                    {item.status}
                  </Badge>
                  <div>
                    <h3 className="text-sm font-semibold text-bone mb-1">{item.label}</h3>
                    <p className="text-sm text-bone-muted leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Research enquiries welcome.</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            We collaborate with clinicians, researchers, and institutions interested in Indian biomechanical data and movement intelligence.
          </p>
          <Button href="/contact?type=research" size="lg">
            Get in touch <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
