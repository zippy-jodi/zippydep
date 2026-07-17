import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "100% Chaotic",
    desc: "Zippy doesn't sleep. Zippy doesn't rest. Zippy just goes up and to the right while vibrating intensely.",
    color: "bg-primary",
    icon: "⚡"
  },
  {
    title: "Zero Taxes",
    desc: "Because math is boring and we're too fast for taxes. Buy, sell, trade—keep all your ZIPPY.",
    color: "bg-secondary",
    icon: "💸"
  },
  {
    title: "Liquidity Locked",
    desc: "Locked tighter than Zippy's grip on an espresso cup. Safe, secure, and ready to send.",
    color: "bg-accent",
    icon: "🔒"
  },
  {
    title: "Community First",
    desc: "No VCs, no presale nonsense. Just a bunch of unhinged internet friends pushing a pink blob to the moon.",
    color: "bg-card",
    icon: "💖"
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase inline-block relative">
            Why <span className="text-primary">Zippy?</span>
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-foreground" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
              className={`p-8 neo-border neo-shadow-lg ${feat.color} ${feat.color === 'bg-card' ? 'text-foreground' : 'text-foreground'}`}
            >
              <div className="text-5xl mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center neo-border shadow-[2px_2px_0px_#111]">
                {feat.icon}
              </div>
              <h3 className="text-3xl font-bold uppercase mb-4">{feat.title}</h3>
              <p className="font-mono text-lg font-medium leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
