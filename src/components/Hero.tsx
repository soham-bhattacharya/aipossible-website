'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-cyan)]/30"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
              <span className="text-sm font-mono text-[var(--color-text-dim)]">
                AI Consulting & Advisory
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              Making{' '}
              <span className="gradient-text">Responsible AI</span>
              {' '}Possible for Everyone
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-[var(--color-text-dim)] max-w-xl leading-relaxed"
            >
              We partner with organizations to navigate AI ethics, governance, and policy. 
              From strategy to implementation, we ensure your AI initiatives are fair, 
              transparent, accountable, and compliant with evolving regulations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-8 border-t border-[var(--color-slate)]"
            >
              <p className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider mb-4">
                Aligned with Global Standards
              </p>
              <div className="flex flex-wrap gap-4">
                {['NIST AI RMF', 'ISO/IEC 42001', 'EU AI Act', 'OECD Principles'].map((standard, i) => (
                  <motion.span
                    key={standard}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg glass text-[var(--color-text-dim)]"
                  >
                    {standard}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Logo & Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div 
                className="absolute inset-0 blur-3xl opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 212, 170, 0.4) 0%, rgba(0, 180, 216, 0.2) 50%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
              />
              
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: 'scale(1.3)' }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="1"
                    strokeDasharray="20 10"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4aa" />
                      <stop offset="100%" stopColor="#00b4d8" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Main logo */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 40px rgba(0, 212, 170, 0.2)',
                    '0 0 60px rgba(0, 212, 170, 0.4)',
                    '0 0 40px rgba(0, 212, 170, 0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden"
              >
                <Image
                  src="/logo.jpeg"
                  alt="AIPossible - Making AI Possible"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Orbiting elements */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: 'var(--gradient-brand)',
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  initial={{
                    x: '-50%',
                    y: '-50%',
                    translateX: 160,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

