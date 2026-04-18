import Link from 'next/link'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Overview', href: '/platform' },
    { label: 'How It Works', href: '/platform#pipeline' },
  ],
  Solutions: [
    { label: 'Diabetic Foot', href: '/solutions/diabetic-foot' },
    { label: 'Recovery Support', href: '/solutions/recovery' },
    { label: 'Performance', href: '/solutions/performance' },
    { label: 'Everyday Movement', href: '/solutions/everyday-movement' },
    { label: 'Structural Support', href: '/solutions/structural-support' },
    { label: 'Occupational', href: '/solutions/everyday-movement' },
  ],
  Products: [
    { label: 'All Products', href: '/products' },
    { label: 'ABLIP App', href: '/products/ablip' },
    { label: 'Smart Insoles', href: '/products/smart-insoles' },
  ],
  Company: [
    { label: 'About Us', href: '/company' },
    { label: 'Research', href: '/research' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-ink-border">
      <div className="container-wide section-pad">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <LogoMark />
              <span className="text-base font-bold tracking-tight text-bone group-hover:text-amber transition-colors">
                Sole-arium
              </span>
            </Link>
            <p className="text-sm text-bone-muted leading-relaxed max-w-xs mb-6">
              The biomechanical intelligence layer for how India moves — starting beneath the foot.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:business@sole-arium.com" className="flex items-center gap-2 text-sm text-bone-muted hover:text-amber transition-colors">
                <Mail size={14} />
                business@sole-arium.com
              </a>
              <div className="flex items-start gap-2 text-sm text-bone-muted">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>IIT Delhi, New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="text-xs font-semibold tracking-widest uppercase text-amber mb-4">{section}</p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-bone-muted hover:text-bone-dim transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="border border-ink-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 bg-ink-card">
          <div>
            <p className="text-base font-semibold text-bone mb-1">Ready to understand how you move?</p>
            <p className="text-sm text-bone-muted">Book a biomechanical assessment or join the waitlist.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/products/ablip"
              className="text-sm font-medium text-bone-dim hover:text-amber transition-colors flex items-center gap-1"
            >
              Start with ABLIP <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-dim transition-colors"
            >
              Book Assessment
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-ink-border">
          <p className="text-xs text-bone-muted">
            © {new Date().getFullYear()} Sole-arium Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">Terms of Use</Link>
            <Link href="/faq" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#E8A020" fillOpacity="0.12" />
      <path d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22C18.42 22 22 18.42 22 14" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L22 10M22 6L18 10" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="3" fill="#E8A020" fillOpacity="0.6" />
    </svg>
  )
}
