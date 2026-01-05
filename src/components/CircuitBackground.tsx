'use client';

import { motion } from 'framer-motion';

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main gradient orbs */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.15) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 216, 0.12) 0%, transparent 70%)',
        }}
      />
      
      {/* Circuit lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d4aa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="circuitGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00b4d8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal circuit lines */}
        <motion.path
          d="M0 200 L400 200 L450 250 L800 250 L850 200 L1200 200"
          stroke="url(#circuitGrad1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M1920 400 L1500 400 L1450 450 L1100 450 L1050 400 L700 400"
          stroke="url(#circuitGrad2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.path
          d="M0 600 L300 600 L350 550 L600 550 L650 600 L950 600 L1000 650 L1300 650"
          stroke="url(#circuitGrad1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M1920 800 L1600 800 L1550 750 L1200 750 L1150 800 L800 800"
          stroke="url(#circuitGrad2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 1.2 }}
        />
        
        {/* Circuit nodes */}
        {[
          { cx: 400, cy: 200 },
          { cx: 850, cy: 200 },
          { cx: 1450, cy: 450 },
          { cx: 350, cy: 550 },
          { cx: 950, cy: 600 },
          { cx: 1550, cy: 750 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#00d4aa"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              },
              scale: {
                duration: 0.5,
                delay: 1.5 + i * 0.2,
              }
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}

