import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Everything you need to know about Sole-arium, ABLIP, Smart Insoles, biomechanical intelligence, and who this is for. Honest answers to common questions.',
  alternates: { canonical: 'https://solearium.in/faq' },
}

const faqCategories = [
  {
    category: 'About Sole-arium',
    items: [
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
        question: 'Is Sole-arium built for Indian users specifically?',
        answer: 'Yes, and this is one of our most important differentiators. Indian foot morphology — wider forefoot, different arch distribution, gait patterns shaped by climate and footwear — is different from the Western data that most global brands use. Our models are built on Indian biomechanical data. No other company offering comparable products can credibly say this.',
      },
    ],
  },
  {
    category: 'ABLIP App',
    items: [
      {
        question: 'What does ABLIP measure?',
        answer: 'ABLIP analyses gait patterns, step symmetry, movement asymmetries, arch characteristics, and plantar load distribution proxies from walking video captured by your phone camera. It uses computer vision and AI models trained on Indian biomechanical data. It does not directly measure pressure — that requires the hardware Smart Insoles.',
      },
      {
        question: 'Do I need special hardware or equipment for ABLIP?',
        answer: 'No. ABLIP works on the smartphone you already have. No wearable, no sensor, no specialist equipment. The assessment takes under five minutes and requires only a space to walk and someone to hold the phone (or a stable surface for propped recording).',
      },
      {
        question: 'Is ABLIP a medical device?',
        answer: 'No. ABLIP is a movement analysis tool. It is not a registered medical device and does not diagnose medical conditions. Its outputs are designed to surface biomechanical patterns that may inform clinical conversations — not to replace clinical assessment or provide medical advice.',
      },
      {
        question: 'Can my doctor or physiotherapist use my ABLIP report?',
        answer: 'Yes. The report is designed to be clinician-legible — presenting movement data in a structured format that supports informed clinical conversation. It is not a clinical document, but it is designed to be useful in a clinical context.',
      },
    ],
  },
  {
    category: 'Smart Insoles',
    items: [
      {
        question: 'What do the Smart Insoles track?',
        answer: 'Smart Insoles use embedded sensors to continuously track plantar pressure distribution, temperature at the foot surface, and step symmetry throughout the day. Data streams to the app in real time and builds a longitudinal movement profile.',
      },
      {
        question: 'Do I need Smart Insoles to use Sole-arium?',
        answer: 'No. ABLIP provides meaningful biomechanical intelligence without any hardware. Smart Insoles add continuous monitoring and sensor-grade pressure measurement — they are for users who need longitudinal data, clinical sharing, or more precise ongoing monitoring.',
      },
      {
        question: 'When will Smart Insoles be available?',
        answer: 'Smart Insoles are currently in development and pilot testing. Join the waitlist on our Smart Insoles page to receive early access information before general availability.',
      },
    ],
  },
  {
    category: 'Medical & clinical',
    items: [
      {
        question: 'Is this meant to replace a doctor or physiotherapist?',
        answer: 'No. Sole-arium is a tool designed to surface movement information that is typically invisible — helping you and your care team make more informed decisions. For any medical concern, always consult a qualified clinician. Our outputs are intended to inform, not replace, clinical judgement.',
      },
      {
        question: 'Can Sole-arium help with diabetic foot monitoring?',
        answer: 'The Smart Insoles are designed with diabetic foot monitoring as a primary use case — providing continuous pressure and temperature data, with remote sharing for clinicians. ABLIP provides useful baseline gait assessment. Neither product diagnoses diabetic foot disease or replaces clinical diabetic foot care protocols. They are designed to complement clinical monitoring.',
      },
      {
        question: 'Are there any conditions where I should not use Sole-arium?',
        answer: 'If you have an active foot wound, severe neuropathy, or any condition for which physical assessment or movement assessment could be harmful, consult your clinician before using any Sole-arium product. Our products are designed to support health awareness, not to substitute for medical judgement in complex clinical situations.',
      },
    ],
  },
  {
    category: 'Getting started',
    items: [
      {
        question: 'How do I know which solution is for me?',
        answer: 'Start with an ABLIP assessment. The movement report will indicate what patterns are present and which solution is most relevant — whether that is prescription insoles, ongoing monitoring, or simply awareness. If you are unsure, the contact form on our site lets you describe your situation and our team will advise.',
      },
      {
        question: 'How much does it cost?',
        answer: 'Pricing is available on request and varies by product and use case. Contact us or use the enquiry form to discuss your specific needs.',
      },
      {
        question: 'Is Sole-arium available across India?',
        answer: 'ABLIP is accessible as a phone application across India. Smart Insole and prescription insole delivery is currently available in major cities, with expansion underway. Contact us for delivery availability in your location.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">FAQ</Badge>
            <h1 className="heading-xl mb-6">Common questions, honest answers.</h1>
            <p className="body-lg max-w-2xl">
              Everything you need to know about Sole-arium, our products, and what we can and cannot do.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky nav */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-4">Categories</p>
                {faqCategories.map((cat) => (
                  <a
                    key={cat.category}
                    href={`#${cat.category.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                    className="block text-sm text-bone-muted hover:text-amber transition-colors py-1"
                  >
                    {cat.category}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="lg:col-span-9 space-y-12">
              {faqCategories.map((cat) => (
                <div key={cat.category} id={cat.category.toLowerCase().replace(/[^a-z]+/g, '-')}>
                  <h2 className="heading-sm mb-2 text-amber">{cat.category}</h2>
                  <div className="w-10 h-px bg-amber mb-6" />
                  <FAQAccordion items={cat.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Still have questions?</h2>
          <p className="body-md max-w-md mx-auto mb-8">
            We respond personally to every enquiry. If your question isn&rsquo;t covered here, ask us directly.
          </p>
          <Button href="/contact" size="lg">
            Contact us <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
