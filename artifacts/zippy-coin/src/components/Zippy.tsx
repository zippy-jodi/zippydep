import React from 'react';
import { motion } from 'framer-motion';

export function ZippyMascot({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`relative inline-block ${className}`}
      animate={{ 
        y: [0, -20, 0, 15, 0],
        rotate: [0, -5, 5, -2, 0],
        scale: [1, 1.05, 0.95, 1.02, 1]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg 
        width="240" 
        height="240" 
        viewBox="0 0 240 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[8px_8px_0px_rgba(26,11,46,1)]"
      >
        {/* Main Body */}
        <circle cx="120" cy="120" r="90" fill="#FF0080" stroke="#1A0B2E" strokeWidth="8" />
        
        {/* Swirl/Belly */}
        <path d="M70 140C90 170 150 170 170 140" stroke="#1A0B2E" strokeWidth="8" strokeLinecap="round" />
        <path d="M120 160C120 160 130 175 140 160" stroke="#1A0B2E" strokeWidth="6" strokeLinecap="round" />
        
        {/* Cheeks */}
        <circle cx="65" cy="130" r="15" fill="#FF80BF" />
        <circle cx="175" cy="130" r="15" fill="#FF80BF" />

        {/* Big Eye (Left) */}
        <circle cx="85" cy="95" r="35" fill="white" stroke="#1A0B2E" strokeWidth="8" />
        <motion.circle 
          cx="85" cy="95" r="15" fill="#1A0B2E"
          animate={{ x: [-2, 2, -2], y: [-2, 2, -2] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="78" cy="88" r="6" fill="white" />
        
        {/* Small Eye (Right) */}
        <circle cx="155" cy="90" r="25" fill="white" stroke="#1A0B2E" strokeWidth="8" />
        <motion.circle 
          cx="155" cy="90" r="10" fill="#1A0B2E"
          animate={{ x: [1, -1, 1], y: [1, -1, 1] }}
          transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="151" cy="85" r="4" fill="white" />

        {/* Flailing Left Arm */}
        <motion.g
          style={{ originX: "30px", originY: "120px" }}
          animate={{ rotate: [0, -25, 15, -20, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M30 120 Q -10 90 20 60" 
            stroke="#1A0B2E" 
            strokeWidth="8" 
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
        
        {/* Flailing Right Arm */}
        <motion.g
          style={{ originX: "210px", originY: "120px" }}
          animate={{ rotate: [0, 25, -15, 20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M210 120 Q 250 90 220 60" 
            stroke="#1A0B2E" 
            strokeWidth="8" 
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        {/* Tiny Legs */}
        <motion.path 
          d="M90 205 L 80 230" 
          stroke="#1A0B2E" 
          strokeWidth="8" 
          strokeLinecap="round"
          animate={{ rotate: [0, 15, 0] }}
          style={{ originX: "90px", originY: "205px" }}
          transition={{ duration: 0.2, repeat: Infinity }}
        />
        <motion.path 
          d="M150 205 L 160 230" 
          stroke="#1A0B2E" 
          strokeWidth="8" 
          strokeLinecap="round"
          animate={{ rotate: [0, -15, 0] }}
          style={{ originX: "150px", originY: "205px" }}
          transition={{ duration: 0.25, repeat: Infinity }}
        />

        {/* Lightning Bolt Antenna */}
        <path d="M120 30 L 130 10 L 110 10 L 120 -10" stroke="#1A0B2E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="#E8FF00" transform="translate(0, 15)" />

        {/* Action Lines / Sparkles */}
        <motion.path d="M40 30 L 20 10" stroke="#00FFCC" strokeWidth="6" strokeLinecap="round" animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }} />
        <motion.path d="M200 30 L 220 10" stroke="#E8FF00" strokeWidth="6" strokeLinecap="round" animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }} />
        <motion.path d="M20 180 L 5 195" stroke="#FF4500" strokeWidth="6" strokeLinecap="round" animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }} />
        <motion.path d="M220 180 L 235 195" stroke="#00FFCC" strokeWidth="6" strokeLinecap="round" animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }} />

      </svg>
    </motion.div>
  );
}
