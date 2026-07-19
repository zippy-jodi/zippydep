import { motion } from 'framer-motion';

export function ComingSoon() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground text-background overflow-hidden"
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Zippy"
          className="h-36 w-auto mb-8"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Coming Soon text */}
        <motion.h1
          className="text-6xl md:text-8xl font-black uppercase text-white mb-4 leading-none"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          Coming
          <span className="block text-primary drop-shadow-[4px_4px_0px_hsl(60_100%_50%)]">
            Soon
          </span>
        </motion.h1>

        <p className="font-mono text-lg text-white/70 mb-10 max-w-md">
          Zippy is warming up. Something chaotic is about to happen on Solana.
        </p>

        {/* Twitter link */}
        <motion.a
          href="https://x.com/ZippyCoinMeme"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-black text-white px-8 py-4 text-xl font-bold uppercase border-4 border-white shadow-[6px_6px_0px_0px_hsl(330_100%_55%)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
          Follow @ZippyCoinMeme
        </motion.a>
      </div>
    </motion.div>
  );
}
