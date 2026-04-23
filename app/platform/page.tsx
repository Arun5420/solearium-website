import type { Metadata } from 'next'
import { ArrowRight, Activity, BarChart3, Zap, Shield, Layers, Database, RefreshCw } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Platform: System Architecture | Sole-arium',
  description:
    'Technical documentation of the Sole-arium four-layer biomechanical correction system: capture, model, design, and manufacture.',
  alternates: { canonical: 'https://solearium.in/platform' },
}

const pipeline = [
  {
    step: '01',
    label: 'Capture',
    icon: Activity,
    what: 'Video-based gait capture',
    signals: ['Gait cycle timing', 'Load transfer patterns', 'Postural deviation'],
    output: 'Structured movement signal set',
  },
  {
    step: '02',
    label: 'Model',
    icon: BarChart3,
    what: 'Biomechanical interpretation layer',
    signals: ['Arch profile inference', 'Pressure distribution mapping', 'Risk identification'],
    output: 'Personal biomechanical model',
  },
  {
    step: '03',
    label: 'Design',
    icon: Zap,
    what: 'Prescription generation',
    signals: ['Correction geometry', 'Material mapping', 'Pressure redistribution targets'],
    output: 'Manufacturing-ready prescription',
  },
  {
    step: '04',
    label: 'Deliver',
    icon: Shield,
    what: 'CNC manufacturing + outcome capture',
    signals: ['Fit accuracy', 'Outcome feedback'],
    output: 'Real-world correction data',
  },
]

const designDecisions = [
  {
    icon: Layers,
    title: 'Vertical integration',
    body: 'Capture → model → design → manufacture in one system. Eliminates dependency gaps between layers.',
  },
  {
    icon: Database,
    title: 'Data ownership',
    body: 'First-party biomechanical dataset. Improves with every assessment.',
  },
  {
    icon: RefreshCw,
    title: 'Closed-loop feedback',
    body: 'Outcome data feeds model continuously. System improves over time.',
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Orienting context */}
      <section className="pt-16 md:pt-24 pb-4 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-lg">
            <p className="text-sm text-bone-muted opacity-60 leading-relaxed">
              The Sole-arium platform is a four-layer biomechanical correction system.
            </p>
            <p className="text-sm text-bone-muted opacity-60 leading-relaxed mt-1">
              This page documents how each layer works and how they connect.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — System Pipeline */}
      <section id="pipeline" className="py-10 md:py-14 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <h2 className="heading-lg mb-3">The biomechanical pipeline</h2>
            <p className="body-md text-bone-muted">
              A structured system that captures, models, and delivers movement correction.
            </p>
          </div>

          <div className="space-y-3">
            {pipeline.map((step, i) => (
              <div key={step.step} className="card-dark p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                <div className="lg:col-span-1">
                  <span className="text-2xl font-bold text-amber opacity-20">{step.step}</span>
                </div>

                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center bg-amber/10">
                      <step.icon size={14} className="text-amber" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-amber">{step.label}</p>
                  </div>
                  <p className="text-xs font-semibold tracking-wide uppercase text-bone-muted mb-1.5">What</p>
                  <p className="text-sm text-bone">{step.what}</p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-wide uppercase text-bone-muted mb-2">Signals</p>
                  <ul className="space-y-1.5">
                    {step.signals.map((sig) => (
                      <li key={sig} className="flex items-center gap-2 text-sm text-bone-dim">
                        <span className="w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                        {sig}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-wide uppercase text-bone-muted mb-2">Output</p>
                  <div className="border-l-2 border-amber/40 pl-3">
                    <p className="text-sm text-bone font-medium">{step.output}</p>
                  </div>
                  {i < pipeline.length - 1 && (
                    <p className="text-xs text-bone-muted mt-3 opacity-40">passes to next layer ↓</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Intelligence Loop */}
      <section id="intelligence" className="py-10 md:py-14 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4">The system learns from every outcome</h2>
              <p className="body-md text-bone-muted mb-5">
                Outcome data from manufactured corrections flows back into the model layer, refining prediction accuracy and prescription precision with each cycle.
              </p>
              <ul className="space-y-2">
                {[
                  'Output data flows back into model layer',
                  'Improves prediction accuracy',
                  'Improves prescription precision over time',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-bone-dim">
                    <span className="w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Complete system ring diagram — animated with real node images */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <svg
                  viewBox="0 0 640 400"
                  width="100%"
                  role="img"
                  aria-label="Complete system: Capture, Model, and Deliver nodes connected by a continuous amber ring"
                >
                  <defs>
                    <filter id="ringGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    {/* Clip each node circle so only its visual from the source image shows */}
                    <clipPath id="clipCapture"><circle cx="320" cy="75" r="44" /></clipPath>
                    <clipPath id="clipModel"><circle cx="216" cy="255" r="44" /></clipPath>
                    <clipPath id="clipDeliver"><circle cx="424" cy="255" r="44" /></clipPath>
                    {/* Full ring for dot motion: center (320,195) R=120 */}
                    <path
                      id="ringMotion"
                      d="M 320,75 A 120,120 0 0,1 440,195 A 120,120 0 0,1 320,315 A 120,120 0 0,1 200,195 A 120,120 0 0,1 320,75"
                    />
                  </defs>

                  {/* Subtle background grid */}
                  <g opacity="0.05" stroke="#E8A020" strokeWidth="0.5">
                    <line x1="0" y1="100" x2="640" y2="100" />
                    <line x1="0" y1="160" x2="640" y2="160" />
                    <line x1="0" y1="220" x2="640" y2="220" />
                    <line x1="0" y1="280" x2="640" y2="280" />
                    <line x1="0" y1="340" x2="640" y2="340" />
                    <line x1="100" y1="0" x2="100" y2="400" />
                    <line x1="190" y1="0" x2="190" y2="400" />
                    <line x1="280" y1="0" x2="280" y2="400" />
                    <line x1="370" y1="0" x2="370" y2="400" />
                    <line x1="460" y1="0" x2="460" y2="400" />
                    <line x1="550" y1="0" x2="550" y2="400" />
                  </g>

                  {/* Amber ring: 3 arcs connecting the nodes (R=120, node gap ≈22°) */}
                  {/* CAPTURE(270°) → DELIVER(30°): 292° → 8° */}
                  <path
                    d="M 365,83.8 A 120,120 0 0,1 438.8,211.7"
                    stroke="#E8A020" strokeWidth="2" fill="none" filter="url(#ringGlow)"
                  >
                    <animate attributeName="stroke-opacity" values="0.55;0.95;0.55" dur="4s" repeatCount="indefinite" />
                  </path>
                  {/* DELIVER(30°) → MODEL(150°): 52° → 128° */}
                  <path
                    d="M 393.9,289.6 A 120,120 0 0,1 246.1,289.6"
                    stroke="#E8A020" strokeWidth="2" fill="none" filter="url(#ringGlow)"
                  >
                    <animate attributeName="stroke-opacity" values="0.55;0.95;0.55" dur="4s" begin="1.33s" repeatCount="indefinite" />
                  </path>
                  {/* MODEL(150°) → CAPTURE(270°): 172° → 248° */}
                  <path
                    d="M 201.2,211.7 A 120,120 0 0,1 275,83.8"
                    stroke="#E8A020" strokeWidth="2" fill="none" filter="url(#ringGlow)"
                  >
                    <animate attributeName="stroke-opacity" values="0.55;0.95;0.55" dur="4s" begin="2.66s" repeatCount="indefinite" />
                  </path>

                  {/* ── CAPTURE node (top, cx=320, cy=75) ── */}
                  {/* scale=0.2: source CAPTURE center (800,210) maps to SVG (320,75) */}
                  <image
                    href="/images/system-diagram.jpeg"
                    x="160" y="33" width="320" height="206"
                    clipPath="url(#clipCapture)"
                    preserveAspectRatio="none"
                  />
                  <circle cx="320" cy="75" r="44" fill="none" stroke="#E8A020" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="75" r="44" fill="none" stroke="#E8A020" strokeWidth="1">
                    <animate attributeName="r" values="44;56;44" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.28;0;0.28" dur="3.5s" repeatCount="indefinite" />
                  </circle>

                  {/* ── MODEL node (bottom-left, cx=216, cy=255) ── */}
                  {/* scale=0.2: source MODEL center (523,690) maps to SVG (216,255) */}
                  <image
                    href="/images/system-diagram.jpeg"
                    x="111" y="117" width="320" height="206"
                    clipPath="url(#clipModel)"
                    preserveAspectRatio="none"
                  />
                  <circle cx="216" cy="255" r="44" fill="none" stroke="#E8A020" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3.5s" begin="1.16s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="216" cy="255" r="44" fill="none" stroke="#E8A020" strokeWidth="1">
                    <animate attributeName="r" values="44;56;44" dur="3.5s" begin="1.16s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.28;0;0.28" dur="3.5s" begin="1.16s" repeatCount="indefinite" />
                  </circle>

                  {/* ── DELIVER node (bottom-right, cx=424, cy=255) ── */}
                  {/* scale=0.2: source DELIVER center (1077,690) maps to SVG (424,255) */}
                  <image
                    href="/images/system-diagram.jpeg"
                    x="209" y="117" width="320" height="206"
                    clipPath="url(#clipDeliver)"
                    preserveAspectRatio="none"
                  />
                  <circle cx="424" cy="255" r="44" fill="none" stroke="#E8A020" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3.5s" begin="2.33s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="424" cy="255" r="44" fill="none" stroke="#E8A020" strokeWidth="1">
                    <animate attributeName="r" values="44;56;44" dur="3.5s" begin="2.33s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.28;0;0.28" dur="3.5s" begin="2.33s" repeatCount="indefinite" />
                  </circle>

                  {/* ── Labels (enlarged for readability) ── */}
                  {/* CAPTURE — upper right of node */}
                  <text x="376" y="57" textAnchor="start" fill="#E2E2E2" fontSize="22" fontWeight="700" letterSpacing="2" fontFamily="ui-monospace, monospace">CAPTURE</text>
                  <text x="376" y="79" textAnchor="start" fill="#787878" fontSize="18" fontFamily="ui-sans-serif, system-ui">signal acquisition</text>

                  {/* MODEL — lower left */}
                  <text x="40" y="346" textAnchor="start" fill="#E2E2E2" fontSize="22" fontWeight="700" letterSpacing="2" fontFamily="ui-monospace, monospace">MODEL</text>
                  <text x="40" y="368" textAnchor="start" fill="#787878" fontSize="18" fontFamily="ui-sans-serif, system-ui">predictive modelling</text>

                  {/* DELIVER — lower right */}
                  <text x="458" y="346" textAnchor="start" fill="#E2E2E2" fontSize="22" fontWeight="700" letterSpacing="2" fontFamily="ui-monospace, monospace">DELIVER</text>
                  <text x="458" y="368" textAnchor="start" fill="#787878" fontSize="18" fontFamily="ui-sans-serif, system-ui">prescribed output</text>

                  {/* Animated dot traveling the ring */}
                  <circle r="4.5" fill="#E8A020">
                    <animateMotion dur="5s" repeatCount="indefinite" calcMode="linear">
                      <mpath href="#ringMotion" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0.95;0.4;0.95" dur="5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Indian Data Layer */}
      <section className="py-10 md:py-14 px-5 md:px-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-lg mb-4">Built on Indian biomechanical data</h2>
              <p className="body-md text-bone-muted mb-3">
                Indian foot morphology presents distinct characteristics: wider forefoot patterns, different arch geometry, and gait shaped by climate, terrain, and footwear culture.
              </p>
              <p className="body-md text-bone-muted mb-3">
                Western datasets are insufficient for Indian morphology. Most global orthotics training data is built on Western population samples, making it systematically misaligned with the Indian baseline.
              </p>
              <p className="body-md text-bone-muted">
                The model layer is trained on Indian data. This is a technical requirement for clinical accuracy.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-3">Signal differences</p>
              <div className="space-y-2">
                {[
                  { label: 'Forefoot width distribution', desc: 'Wider ratio compared to Western population norms' },
                  { label: 'Arch geometry variation', desc: 'Different arch profiles by region, climate, and footwear history' },
                  { label: 'Gait patterns by terrain', desc: 'Floor surface, footwear culture, and activity context shape patterns' },
                  { label: 'Pathology differences', desc: 'Incidence and expression vary from Western epidemiological data' },
                ].map((item) => (
                  <div key={item.label} className="card-dark p-4">
                    <p className="text-sm font-semibold text-bone mb-0.5">{item.label}</p>
                    <p className="text-xs text-bone-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — System Design Decisions */}
      <section className="py-10 md:py-14 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <h2 className="heading-lg">System design decisions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {designDecisions.map((d) => (
              <div key={d.title} className="card-dark p-6">
                <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                  <d.icon size={18} className="text-amber" />
                </div>
                <h3 className="text-sm font-semibold text-bone mb-2">{d.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="py-10 md:py-14 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg font-medium text-bone mb-6">Start with a movement assessment.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/products/ablip" size="sm">
                Start with ABLIP <ArrowRight size={15} />
              </Button>
              <Button href="/book/you" variant="secondary" size="sm">
                Book Full Assessment <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
