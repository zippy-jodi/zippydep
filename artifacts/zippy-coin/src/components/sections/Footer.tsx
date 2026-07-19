import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "TBA — Coming Soon 🔒";

  const handleCopy = () => {
    if (contractAddress.includes("Coming Soon")) return;
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-foreground text-background py-16 px-4 border-t-8 border-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.img
          src="/logo.png"
          alt="Zippy"
          className="h-32 w-auto mb-8"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        <div className="mb-12 w-full max-w-xl">
          <p className="font-bold uppercase text-xl mb-4 text-primary">Contract Address</p>
          <div 
            onClick={handleCopy}
            className="flex items-center justify-between bg-card text-foreground p-4 neo-border neo-shadow cursor-pointer hover:bg-secondary transition-colors"
          >
            <span className="font-mono font-bold text-lg truncate flex-1 text-left px-2">
              {contractAddress}
            </span>
            <span className="bg-foreground text-background px-4 py-2 font-bold uppercase neo-border text-sm shrink-0">
              {copied ? "Copied!" : "Copy"}
            </span>
          </div>
        </div>

        <div className="bg-background/10 p-6 neo-border border-background text-sm font-mono max-w-3xl text-left md:text-center text-background/80 leading-relaxed mb-8">
          <strong className="text-white block mb-2">DISCLAIMER:</strong>
          $ZIPPY is a meme coin created for entertainment purposes only. It has no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only. Cryptocurrency is highly volatile, please don't buy this with your rent money.
        </div>

        <div className="text-background/50 font-mono text-sm">
          © {new Date().getFullYear()} Zippy Coin on Solana. All chaotic rights reserved.
        </div>
      </div>
    </footer>
  );
}
