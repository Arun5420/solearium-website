import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Sole-arium',
  description:
    'Get in touch with Sole-arium. Consumer enquiries, clinical partnerships, investor interest, or research collaboration — we respond to every message.',
  alternates: { canonical: 'https://solearium.in/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Contact</Badge>
            <h1 className="heading-xl mb-6">Let&rsquo;s talk.</h1>
            <p className="body-lg max-w-2xl">
              Whether you are a potential user, a clinician, an investor, or an institutional partner — we respond to every message. Tell us what you are looking for and we will direct you to the right person.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="lg:col-span-5 space-y-5">
              {[
                {
                  icon: Mail,
                  color: 'amber' as const,
                  title: 'Email',
                  primary: 'hello@solearium.in',
                  href: 'mailto:hello@solearium.in',
                  secondary: 'For general, product, and clinical enquiries',
                },
                {
                  icon: MapPin,
                  color: 'teal' as const,
                  title: 'Location',
                  primary: 'IIT Delhi, New Delhi — 110016',
                  href: null,
                  secondary: 'India',
                },
                {
                  icon: Clock,
                  color: 'amber' as const,
                  title: 'Response time',
                  primary: '1–2 business days',
                  href: null,
                  secondary: 'We read every message and respond personally',
                },
              ].map((item) => (
                <div key={item.title} className="card-dark p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color === 'amber' ? 'bg-amber/10' : 'bg-teal/10'}`}>
                      <item.icon size={16} className={item.color === 'amber' ? 'text-amber' : 'text-teal-light'} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-bone mb-1">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-bone-dim hover:text-amber transition-colors">
                          {item.primary}
                        </a>
                      ) : (
                        <p className="text-sm text-bone-dim">{item.primary}</p>
                      )}
                      <p className="text-xs text-bone-muted mt-1">{item.secondary}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card-dark p-6">
                <p className="text-sm font-semibold text-bone mb-4">Specific routing</p>
                <div className="space-y-3">
                  {[
                    { type: 'Clinical / institutional', email: 'clinical@solearium.in' },
                    { type: 'Investors / press', email: 'investors@solearium.in' },
                    { type: 'Research collaboration', email: 'research@solearium.in' },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center justify-between text-sm">
                      <span className="text-bone-muted">{item.type}</span>
                      <a href={`mailto:${item.email}`} className="text-amber hover:text-amber-dim transition-colors text-xs">
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
