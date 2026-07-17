import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Price", value: "$0.0000042" },
  { label: "Market Cap", value: "$4.2M" },
  { label: "Holders", value: "12,847" },
  { label: "24h Change", value: "+69.4%", positive: true },
];

export function Ticker() {
  return (
    <div className="w-full bg-foreground text-background py-4 border-y-4 border-primary overflow-hidden flex whitespace-nowrap relative">
      <motion.div 
        className="flex items-center gap-12 shrink-0 px-6"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {/* Duplicate the items 4 times to ensure seamless infinite scroll */}
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {stats.map((stat, idx) => (
              <div key={`${i}-${idx}`} className="flex items-center gap-3 text-xl font-mono uppercase font-bold">
                <span className="text-secondary">{stat.label}:</span>
                <span className={stat.positive ? "text-accent" : "text-background"}>
                  {stat.value}
                </span>
                <span className="text-primary text-2xl mx-4">★</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
