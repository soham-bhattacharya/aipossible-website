'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { icon: '📚', text: 'Comprehensive AI ethics curriculum' },
  { icon: '🌍', text: 'Global policy frameworks (US, EU, Middle East)' },
  { icon: '🎓', text: 'Self-paced learning with expert insights' },
  { icon: '📋', text: 'Templates, checklists & playbooks' },
  { icon: '🏆', text: 'Certification upon completion' },
  { icon: '🤝', text: 'Community of practice access' },
];

export default function LearnCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learn" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent opacity-50" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/30 mb-6"
              >
                <span className="text-lg">🎯</span>
                <span className="text-sm font-medium text-[var(--color-cyan)]">
                  Learning Platform
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Master <span className="gradient-text">AI Ethics & Policy</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-[var(--color-text-dim)] leading-relaxed mb-8"
              >
                Explore our dedicated learning platform for comprehensive AI ethics 
                and policy education. Perfect for professionals, policymakers, and 
                teams building responsible AI systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="https://learn.aipossible.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Visit Learning Platform
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a 
                  href="#contact"
                  className="btn-secondary"
                >
                  Request Team Access
                </a>
              </motion.div>
            </div>

            {/* Right - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-slate)]/30 border border-[var(--color-muted)]/10"
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-sm text-[var(--color-text-dim)]">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-4 right-4 opacity-10">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="50" stroke="var(--color-cyan)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="60" cy="60" r="35" stroke="var(--color-cyan)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="60" cy="60" r="20" stroke="var(--color-cyan)" strokeWidth="1" strokeDasharray="4 4"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

