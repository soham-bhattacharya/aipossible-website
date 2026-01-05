'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'AI Ethics Advisory', href: '#services' },
    { label: 'Policy & Compliance', href: '#services' },
    { label: 'AI Governance', href: '#services' },
    { label: 'Training Programs', href: '#services' },
  ],
  company: [
    { label: 'Learning Platform', href: 'https://learn.aipossible.org' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'AI Ethics Blog', href: '#' },
    { label: 'Policy Guides', href: '#' },
    { label: 'Frameworks', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 border-t border-[var(--color-slate)]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="AIPossible Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold">
                AI<span className="gradient-text">Possible</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-dim)] leading-relaxed max-w-xs mb-6">
              Making responsible AI possible for organizations worldwide. 
              Ethics, governance, and policy expertise for the AI age.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a 
                href="https://www.linkedin.com/company/aipossible/posts/?feedView=all" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-slate)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-muted)]">
            © {currentYear} AIPossible. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--color-muted)]">
            <Link href="#" className="hover:text-[var(--color-text-dim)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--color-text-dim)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

