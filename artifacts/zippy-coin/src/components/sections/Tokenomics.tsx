import React from 'react';
import { motion } from 'framer-motion';

const tokenomicsData = [
  { label: 'Liquidity', value: 50, color: 'hsl(330 100% 55%)' },
  { label: 'Community', value: 20, color: 'hsl(60 100% 50%)' },
  { label: 'Marketing', value: 15, color: 'hsl(180 100% 50%)' },
  { label: 'Team Locked', value: 10, color: 'hsl(30 100% 90%)' },
  { label: 'Burned Forever', value: 5, color: 'hsl(260 50% 10%)' },
];

export function Tokenomics() {
  // SVG Donut chart math
  let currentAngle = 0;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="py-24 px-4 bg-secondary text-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4">Tokenomics</h2>
          <p className="text-2xl font-mono font-bold bg-white inline-block px-6 py-2 neo-border neo-shadow-sm">
            Total Supply: 1,000,000,000 ZIPPY
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Animated Donut Chart */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90 drop-shadow-[8px_8px_0px_#111]">
              {tokenomicsData.map((item, i) => {
                const strokeDasharray = `${(item.value / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -currentAngle;
                currentAngle += (item.value / 100) * circumference;

                return (
                  <motion.circle
                    key={i}
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke={item.color}
                    strokeWidth="40"
                    strokeDasharray={strokeDasharray}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                  />
                );
              })}
              <circle cx="100" cy="100" r="58" fill="hsl(60 100% 50%)" />
              <text x="100" y="105" textAnchor="middle" fill="#111" className="font-display font-black text-2xl uppercase">Zippy</text>
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            {tokenomicsData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between bg-card p-4 neo-border neo-shadow-sm hover:translate-x-2 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 neo-border" style={{ backgroundColor: item.color }} />
                  <span className="font-bold text-xl uppercase">{item.label}</span>
                </div>
                <span className="font-mono text-xl font-bold bg-foreground text-background px-3 py-1 neo-border">
                  {item.value}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
