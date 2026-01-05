'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="6" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
        <defs>
          <linearGradient id="grad1" x1="5" y1="5" x2="35" y2="35">
            <stop offset="0%" stopColor="#00d4aa"/>
            <stop offset="100%" stopColor="#00b4d8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI Ethics Advisory',
    description: 'Embed ethical principles into your AI systems. We help you navigate fairness, transparency, accountability, and bias mitigation to build AI that people trust.',
    features: ['Bias Assessment', 'Fairness Audits', 'Ethical Framework Design'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="8" width="30" height="24" rx="3" stroke="url(#grad2)" strokeWidth="2" fill="none"/>
        <path d="M12 16H28M12 22H22" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="28" r="6" stroke="url(#grad2)" strokeWidth="2" fill="none"/>
        <path d="M34 26L30 30" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="grad2" x1="5" y1="8" x2="35" y2="32">
            <stop offset="0%" stopColor="#00d4aa"/>
            <stop offset="100%" stopColor="#00b4d8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Policy & Compliance',
    description: 'Navigate complex AI regulations with confidence. We guide your organization through EU AI Act, NIST AI RMF, and evolving global standards.',
    features: ['Regulatory Mapping', 'Compliance Roadmaps', 'Policy Development'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 5V15L28 20L20 25V35" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M8 15L20 8L32 15" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M8 25L20 32L32 25" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="20" r="3" fill="url(#grad3)"/>
        <defs>
          <linearGradient id="grad3" x1="8" y1="5" x2="32" y2="35">
            <stop offset="0%" stopColor="#00d4aa"/>
            <stop offset="100%" stopColor="#00b4d8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI Governance',
    description: 'Build robust governance structures that promote transparency and human oversight. From board-level strategy to operational controls.',
    features: ['Governance Frameworks', 'Risk Management', 'Oversight Models'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="12" cy="12" r="4" stroke="url(#grad4)" strokeWidth="2" fill="none"/>
        <circle cx="28" cy="12" r="4" stroke="url(#grad4)" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="28" r="4" stroke="url(#grad4)" strokeWidth="2" fill="none"/>
        <circle cx="28" cy="28" r="4" stroke="url(#grad4)" strokeWidth="2" fill="none"/>
        <path d="M16 12H24M12 16V24M28 16V24M16 28H24" stroke="url(#grad4)" strokeWidth="2"/>
        <circle cx="20" cy="20" r="3" fill="url(#grad4)"/>
        <defs>
          <linearGradient id="grad4" x1="8" y1="8" x2="32" y2="32">
            <stop offset="0%" stopColor="#00d4aa"/>
            <stop offset="100%" stopColor="#00b4d8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Strategy & Implementation',
    description: 'From vision to execution. We help you develop AI strategies that align with business goals while maintaining ethical integrity throughout.',
    features: ['AI Roadmapping', 'Use Case Assessment', 'Implementation Support'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 32V18L20 8L32 18V32" stroke="url(#grad5)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <rect x="15" y="22" width="10" height="10" stroke="url(#grad5)" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="15" r="2" fill="url(#grad5)"/>
        <defs>
          <linearGradient id="grad5" x1="8" y1="8" x2="32" y2="32">
            <stop offset="0%" stopColor="#00d4aa"/>
            <stop offset="100%" stopColor="#00b4d8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Training & Capacity Building',
    description: 'Empower your teams with AI literacy. We deliver customized training programs on AI ethics, governance, and responsible deployment.',
    features: ['Executive Workshops', 'Team Training', 'Custom Curricula'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 30L18 22L24 28L34 18" stroke="url(#grad6)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="10" cy="30" r="2" fill="url(#grad6)"/>
        <circle cx="18" cy="22" r="2" fill="url(#grad6)"/>
        <circle cx="24" cy="28" r="2" fill="url(#grad6)"/>
        <circle cx="34" cy="18" r="2" fill="url(#grad6)"/>
        <rect x="6" y="8" width="28" height="26" rx="3" stroke="url(#grad6)" strokeWidth="2" fill="none"/>
        <defs>
          <linearGradient id="grad6" x1="6" y1="8" x2="34" y2="34">
            <stop offset="0%" stopColor="#00d4aa"/>
            <stop offset="100%" stopColor="#00b4d8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Vendor & Procurement',
    description: 'Make informed decisions when selecting AI vendors. We provide evaluation frameworks and procurement guidance for responsible AI acquisition.',
    features: ['Vendor Assessment', 'RFP Development', 'Due Diligence'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-[var(--color-cyan)] mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Multi-Faceted <span className="gradient-text">AI Consulting</span>
          </h2>
          <p className="text-lg text-[var(--color-text-dim)] max-w-2xl mx-auto">
            From ethics and governance to policy and implementation—we provide 
            comprehensive guidance for your AI journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="service-card group"
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-slate)]/50 text-[var(--color-text-dim)] border border-[var(--color-muted)]/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

