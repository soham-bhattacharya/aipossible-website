'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'hello@aipossible.org',
    href: 'mailto:hello@aipossible.org',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: 'Global Reach',
    value: 'US • EU • Middle East',
    href: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Schedule',
    value: 'Book a consultation',
    href: '#contact-form',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      setFormState({ name: '', email: '', organization: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-[var(--color-cyan)] mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Your <span className="gradient-text">AI Journey</span>
          </h2>
          <p className="text-lg text-[var(--color-text-dim)] max-w-2xl mx-auto">
            Ready to build trustworthy AI? Let&apos;s discuss how we can help your 
            organization navigate ethics, governance, and compliance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`glass rounded-xl p-5 ${method.href ? 'cursor-pointer hover:border-[var(--color-cyan)]/30' : ''} transition-all duration-300`}
                onClick={() => method.href && !method.href.startsWith('#') && window.open(method.href, '_blank')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-cyan)]">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-dim)]">
                      {method.label}
                    </div>
                    <div className="font-medium text-[var(--color-text)]">
                      {method.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-sm text-[var(--color-text-dim)] mb-3">Follow us</p>
              <div className="flex gap-3">
                {[
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/aipossible/posts/?feedView=all' },
                  { name: 'Twitter', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="px-4 py-2 rounded-lg glass text-sm text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/30 transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            id="contact-form"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 glass-strong rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-dim)] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-slate)]/50 border border-[var(--color-muted)]/20 text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)]/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-dim)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-slate)]/50 border border-[var(--color-muted)]/20 text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)]/50 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-dim)] mb-2">
                Organization
              </label>
              <input
                type="text"
                value={formState.organization}
                onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-slate)]/50 border border-[var(--color-muted)]/20 text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)]/50 transition-colors"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-dim)] mb-2">
                How can we help?
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-slate)]/50 border border-[var(--color-muted)]/20 text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)]/50 transition-colors resize-none"
                placeholder="Tell us about your AI ethics, governance, or policy needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/30 text-[var(--color-cyan)]'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <p className="text-xs text-center text-[var(--color-muted)]">
              We typically respond within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

