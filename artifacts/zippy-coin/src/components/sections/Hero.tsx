import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ZippyMascot } from '../Zippy';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background pt-20 px-4">
      {/* Background Parallax Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      <motion.div style={{ y: y1 }} className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-40" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-foreground rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [45, 90, 45],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <ZippyMascot />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-foreground mb-4">
            Meet <span className="text-primary relative inline-block">
              <span className="relative z-10">ZIPPY</span>
              <motion.span 
                className="absolute inset-0 bg-secondary -z-10 translate-y-2 translate-x-2"
                animate={{ x: [8, 12, 8], y: [8, 6, 8] }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl font-mono text-foreground/80 max-w-2xl mx-auto mb-10 neo-border bg-card p-4 neo-shadow-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          The coin that moves faster than your brain can process. Pure, unfiltered chaotic joy on Solana.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button className="px-8 py-4 text-xl font-bold uppercase bg-primary text-primary-foreground neo-border neo-shadow hover:translate-x-1 hover:translate-y-1 hover:neo-shadow-sm transition-all">
            Buy ZIPPY Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
