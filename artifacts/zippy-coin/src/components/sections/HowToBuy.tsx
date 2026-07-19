import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Get a Wallet",
    desc: "Download Phantom or Solflare wallet. They're like digital backpacks for your chaotic meme coins.",
    color: "bg-primary text-white"
  },
  {
    num: "02",
    title: "Load up SOL",
    desc: "Buy some Solana (SOL) on an exchange and send it to your shiny new wallet address.",
    color: "bg-accent text-foreground"
  },
  {
    num: "03",
    title: "Go to Pump.fun",
    desc: "Head over to pump.fun and search for $ZIPPY. Connect your wallet — it's easier than it looks.",
    color: "bg-card text-foreground"
  },
  {
    num: "04",
    title: "Buy ZIPPY",
    desc: "Hit that buy button, enter how much SOL you want to spend, and welcome to the chaos.",
    color: "bg-secondary text-foreground"
  }
];

export function HowToBuy() {
  return (
    <section className="py-24 px-4 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6">
            How to <span className="text-accent">Buy</span>
          </h2>
          <p className="text-xl font-mono max-w-2xl mx-auto">
            Get your hands on $ZIPPY before it vibrates into another dimension.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className={`p-6 neo-border neo-shadow-lg flex flex-col h-full ${step.color} relative`}
              style={{ borderColor: 'white', boxShadow: '6px 6px 0px 0px white' }}
            >
              <div className="text-6xl font-black mb-4 opacity-50 font-display">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">{step.title}</h3>
              <p className="font-mono text-base flex-grow">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
