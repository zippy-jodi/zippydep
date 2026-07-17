import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';

export function Community() {
  return (
    <section className="py-24 px-4 bg-accent text-foreground relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-6">
            Join the Chaos
          </h2>
          <p className="text-xl font-mono bg-white p-4 neo-border inline-block neo-shadow">
            Don't just watch Zippy vibrate. Vibrate with us.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a 
            href="https://t.me/zippycoin" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-[#0088cc] text-white py-5 px-8 text-2xl font-bold uppercase neo-border neo-shadow-lg hover:neo-shadow-sm transition-shadow"
          >
            <FaTelegramPlane size={32} />
            Telegram
          </motion.a>
          
          <motion.a 
            href="https://twitter.com/zippycoin" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-black text-white py-5 px-8 text-2xl font-bold uppercase neo-border neo-shadow-lg hover:neo-shadow-sm transition-shadow"
          >
            <FaTwitter size={32} />
            Twitter / X
          </motion.a>

          <motion.a 
            href="https://discord.gg/zippycoin" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-[#5865F2] text-white py-5 px-8 text-2xl font-bold uppercase neo-border neo-shadow-lg hover:neo-shadow-sm transition-shadow"
          >
            <FaDiscord size={32} />
            Discord
          </motion.a>
        </div>
      </div>
    </section>
  );
}
