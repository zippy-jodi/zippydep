import React from 'react';
import { motion } from 'framer-motion';

const roadmap = [
  {
    phase: "Phase 1: The Awakening",
    items: ["Website Launch", "Token Creation", "Social Media Takeover", "1,000 Holders"],
    status: "active"
  },
  {
    phase: "Phase 2: Chaos Mode",
    items: ["CoinGecko & CMC Listings", "Community Giveaways", "Zippy Merch Store", "10,000 Holders"],
    status: "upcoming"
  },
  {
    phase: "Phase 3: Hyper-speed",
    items: ["CEX Listings", "Zippy NFT Collection", "Secret Utilities", "100,000 Holders"],
    status: "upcoming"
  }
];

export function Roadmap() {
  return (
    <section className="py-24 px-4 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-[4px_4px_0px_#111]">
            Roadmap
          </h2>
          <div className="mt-4 inline-block bg-foreground text-secondary px-6 py-2 font-mono font-bold uppercase neo-border">
            Subject to rapid change
          </div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-foreground">
          {roadmap.map((milestone, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-foreground bg-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[2px_2px_0px_#111] z-10">
                <div className={`w-3 h-3 rounded-full ${milestone.status === 'active' ? 'bg-primary animate-pulse' : 'bg-foreground'}`} />
              </div>
              
              {/* Content Box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card text-foreground p-6 neo-border neo-shadow-lg transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-black uppercase mb-4 bg-accent inline-block px-3 py-1 neo-border">
                  {milestone.phase}
                </h3>
                <ul className="space-y-3 font-mono">
                  {milestone.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">→</span>
                      <span className="font-medium text-lg leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
