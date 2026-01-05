'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '50+', label: 'Organizations Advised' },
  { value: '12', label: 'Industry Sectors' },
  { value: '3', label: 'Continents Served' },
  { value: '100%', label: 'Commitment to Ethics' },
];

const values = [
  {
    title: 'Human-Centered',
    description: 'AI should augment human capabilities, not replace human judgment where it matters most.',
  },
  {
    title: 'Transparent',
    description: 'We believe in explainable AI and clear communication about capabilities and limitations.',
  },
  {
    title: 'Accountable',
    description: 'Clear ownership and responsibility chains for AI decisions and outcomes.',
  },
  {
    title: 'Inclusive',
    description: 'AI systems should work equitably for all, regardless of background or circumstance.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div 
        className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.3) 0%, transparent 70%)',
        }}
      />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-[var(--color-cyan)] mb-6"
            >
              About Us
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Bridging <span className="gradient-text">AI Innovation</span> with Ethical Responsibility
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--color-text-dim)] leading-relaxed mb-6"
            >
              AIPossible is a boutique consultancy committed to responsible AI. We blend 
              deep domain knowledge in artificial intelligence with expertise in ethics, 
              governance, and public policy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--color-text-dim)] leading-relaxed mb-8"
            >
              Our mission is to help organizations harness the power of AI while 
              safeguarding people and society. Whether you&apos;re starting your AI journey 
              or strengthening existing systems, we ensure your innovations align with 
              ethical principles and regulatory requirements.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-dim)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Values */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold mb-6 text-[var(--color-text-dim)]"
            >
              Our Core Values
            </motion.h3>
            
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-5 hover:border-[var(--color-cyan)]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-electric)]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path 
                        d="M6 10L9 13L14 7" 
                        stroke="var(--color-cyan)" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-cyan)] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-dim)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

