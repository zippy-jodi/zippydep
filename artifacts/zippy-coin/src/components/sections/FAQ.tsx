import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "What is Zippy?",
    a: "Zippy is a high-speed, high-chaos meme coin on the Solana blockchain. It represents the unfiltered energy of the internet."
  },
  {
    q: "Why Solana?",
    a: "Because Zippy moves too fast for slow chains. We need blazing fast transactions and low fees to match our mascot's resting heart rate."
  },
  {
    q: "Is there a presale?",
    a: "No presales, no VC allocations, no BS. 100% fair launch on Pump.fun — everyone gets in at the same time."
  },
  {
    q: "What's the tokenomics?",
    a: "50% burned forever on launch, 20% liquidity, 15% marketing, 10% team locked, 5% community. Half the supply gone from day one — Zippy doesn't mess around."
  },
  {
    q: "How high can Zippy go?",
    a: "We don't give financial advice, but we've seen Zippy vibrate through solid matter. Do with that information what you will."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase">WTFAQ</h2>
          <p className="font-mono text-lg mt-2">(Frequently Asked Questions)</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card neo-border neo-shadow overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none bg-white hover:bg-muted transition-colors"
              >
                <span className="font-bold text-xl md:text-2xl uppercase pr-4">{faq.q}</span>
                <motion.span 
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  className="text-3xl font-black text-primary"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t-4 border-foreground bg-secondary/20"
                  >
                    <p className="p-6 font-mono text-lg leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
