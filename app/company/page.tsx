import type { Metadata } from 'next'
import { ArrowRight, Layers, Database, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Company — Why Sole-arium Exists',
  description:
    'Sole-arium was founded on a single insight: clinical-grade biomechanical correction was a privilege. We built the infrastructure to change that — starting beneath the foot.',
  alternates: { canonical: 'https://solearium.in/company' },
}

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[300px] bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Company</Badge>
            <h1 className="heading-xl mb-6">
              We are not building<br />
              <span className="text-amber">a better insole.</span>
            </h1>
            <p className="body-lg max-w-2xl">
              We are building the layer between humans and movement — starting beneath the foot. This is the founding belief, and it shapes everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Founding insight */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">The founding insight</p>
              <h2 className="heading-lg mb-5">Most people walk incorrectly their entire lives — and never find out.</h2>
              <p className="body-md mb-5">
                The pain in the knee. The tired back. The evening ache after a long day on your feet. Most people adapt to these. They call it age. They call it bad luck. They stop running. They avoid long walks.
              </p>
              <p className="body-md mb-5">
                It isn&rsquo;t age. It isn&rsquo;t bad luck. It is biomechanics — measurable, correctable, preventable, if you have the right system.
              </p>
              <p className="body-md">
                For a hundred years, that system existed only inside hospitals, behind specialist queues and costs that most people could not access. Clinical precision was a privilege. Sole-arium was founded to change that.
              </p>
            </div>
            <div className="card-dark p-8 border-amber/20">
              <p className="eyebrow mb-4">Our belief</p>
              <blockquote className="text-lg font-medium text-bone leading-relaxed mb-6">
                &ldquo;350 million Indians have musculoskeletal conditions. Clinical-grade correction reaches fewer than 1 in 10 of them. The reason isn&rsquo;t medical — it&rsquo;s structural. No company had simultaneously solved precision, accessibility, and desirability in the same product. We built the architecture that does.&rdquo;
              </blockquote>
              <p className="text-sm text-bone-muted">— Founding team, Sole-arium</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we are building */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">What we are building</p>
            <h2 className="heading-lg mb-4">Infrastructure, not just products.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: 'Full-stack biomechanical pipeline', body: 'Capture → Model → Design → Deliver. Four layers, one system, complete control over quality at every point. No single-layer company can replicate what an integrated pipeline produces.' },
              { icon: Database, title: 'A compounding data advantage', body: 'Every step we measure makes our models better. Every pair we manufacture sends outcome data back into the system. The advantage grows with every user — this is not a product moat. It is an intelligence moat.' },
              { icon: Globe, title: 'The Indian-data differentiator', body: 'We are building the biomechanical intelligence layer for how India moves. Our models are trained on Indian bodies. Our designs account for Indian morphology. No competitor can credibly claim this.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-8">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-amber" />
                </div>
                <h3 className="text-base font-semibold text-bone mb-3">{item.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this starts under the foot */}
      <section className="section-pad bg-ink-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-glow rounded-full blur-3xl pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">Why we start here</p>
            <h2 className="heading-lg mb-6">The foot is where movement begins.</h2>
            <div className="space-y-4 text-body-md">
              <p className="body-md">The foot is the only part of the body in contact with the ground during walking. Every force that moves a human being passes through it. Every gait aberration, every load asymmetry, every structural compensation originates here and propagates upward.</p>
              <p className="body-md">Starting beneath the foot is not a constraint. It is a strategic choice. The foot is the highest-leverage point in the biomechanical system — the point where understanding and correction have the most downstream effect.</p>
              <p className="body-md">From here, the platform extends. To the ankle. The knee. The hip. The spine. Eventually, to a broader movement intelligence layer that covers the whole body. The foot is our beginning, not our limit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">The team</p>
            <h2 className="heading-lg mb-4">Built by people who understand the body and the technology.</h2>
            <p className="body-md">
              We are engineers, clinicians, designers, and researchers — united by the belief that biomechanical intelligence should be accessible to every Indian.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              {
                name: '[Founder name]',
                role: 'Founder & CEO',
                bio: '[Founder background — IIT Delhi / clinical research / movement science. Placeholder to be replaced with approved biography.]',
              },
              {
                name: '[Co-founder name]',
                role: 'Co-Founder & CTO',
                bio: '[Co-founder background — engineering / AI / product. Placeholder to be replaced with approved biography.]',
              },
              {
                name: '[Clinical lead name]',
                role: 'Head of Clinical Research',
                bio: '[Clinical research lead background — biomechanics / orthopaedics. Placeholder to be replaced with approved biography.]',
              },
            ].map((member) => (
              <div key={member.name} className="card-dark p-7">
                <div className="w-12 h-12 rounded-full bg-ink-border mb-4 flex items-center justify-center">
                  <span className="text-bone-muted text-lg font-bold">{member.name[1] || '?'}</span>
                </div>
                <h3 className="text-base font-semibold text-bone mb-0.5">{member.name}</h3>
                <p className="text-xs text-amber font-medium mb-3">{member.role}</p>
                <p className="text-sm text-bone-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-bone-muted italic">
              [Additional team member profiles to be added. Contact us for partnership and hiring enquiries.]
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Roadmap direction</p>
            <h2 className="heading-lg mb-4">Where we are heading.</h2>
            <p className="body-md">
              This is not the full investor roadmap. It is a directional signal of what Sole-arium is becoming — visible to every visitor who wants to understand the long-term ambition behind the products they see today.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { phase: 'Now', title: 'ABLIP launch + Smart Insoles development', body: 'Building the assessment layer and the continuous monitoring hardware. Establishing the Indian biomechanical data foundation.' },
              { phase: 'Near term', title: 'Precision insole delivery at scale', body: 'Full pipeline from assessment to delivered prescription insole, accessible across major Indian cities. Clinical partnerships and institutional pilots.' },
              { phase: 'Mid term', title: 'Platform expansion across movement contexts', body: 'Extending beyond the foot into ankle, knee, and lower limb monitoring. Expanding use cases from medical into performance and everyday wellness.' },
              { phase: 'Long term', title: 'Biomechanical intelligence as infrastructure', body: 'The default intelligence layer for how India moves. Integration with healthcare systems, insurers, sports federations, and the broader footwear ecosystem.' },
            ].map((item, i) => (
              <div key={item.phase} className="card-dark flex gap-5 p-6">
                <div className="flex-shrink-0 w-16">
                  <Badge variant={i === 0 ? 'amber' : i === 1 ? 'teal' : 'ghost'}>{item.phase}</Badge>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-bone mb-1">{item.title}</h3>
                  <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 glow-amber opacity-40" aria-hidden="true" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="heading-lg mb-5">Want to learn more about Sole-arium?</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Whether you are a potential user, a clinician, an investor, or a partner — we are happy to talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Get in touch <ArrowRight size={16} /></Button>
            <Button href="/research" variant="secondary" size="lg">Read our research approach</Button>
          </div>
        </div>
      </section>
    </>
  )
}
