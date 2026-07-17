import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'How to Buy', href: '#how-to-buy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Community', href: '#community' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-background border-b-4 border-foreground shadow-[0_4px_0_0_hsl(260_50%_10%)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false); }}
            className="flex items-center gap-2 group"
          >
            <motion.img
              src="/logo.png"
              alt="Zippy"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className="relative px-3 py-1.5 font-bold text-sm uppercase font-display text-foreground group"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ y: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {link.label}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 bg-secondary border-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="nav-hover"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.a
            href="#how-to-buy"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#how-to-buy'); }}
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-bold text-sm uppercase border-2 border-foreground shadow-[3px_3px_0_0_hsl(260_50%_10%)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-display"
            whileTap={{ scale: 0.97 }}
          >
            Buy Now
          </motion.a>

          {/* Hamburger Button */}
          <motion.button
            data-testid="button-hamburger"
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] border-2 border-foreground bg-card shadow-[3px_3px_0_0_hsl(260_50%_10%)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            whileTap={{ scale: 0.93 }}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              className="block w-5 h-[3px] bg-foreground origin-center"
              animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-5 h-[3px] bg-foreground"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-[3px] bg-foreground origin-center"
              animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="fixed top-16 left-0 right-0 z-40 bg-background border-b-4 border-foreground md:hidden overflow-y-auto max-h-[calc(100dvh-4rem)]"
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.35, ease: [0.32, 0, 0.16, 1] }}
            >
              <nav className="px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="flex items-center justify-between px-4 py-4 font-display font-black text-2xl uppercase border-2 border-foreground bg-card shadow-[4px_4px_0_0_hsl(260_50%_10%)] hover:bg-secondary hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, type: 'spring', stiffness: 300, damping: 24 }}
                  >
                    <span>{link.label}</span>
                    <span className="text-primary text-xl">→</span>
                  </motion.a>
                ))}

                <motion.a
                  href="#how-to-buy"
                  data-testid="link-mobile-buy"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#how-to-buy'); }}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-5 bg-primary text-primary-foreground font-display font-black text-2xl uppercase border-2 border-foreground shadow-[4px_4px_0_0_hsl(260_50%_10%)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + navLinks.length * 0.055, type: 'spring', stiffness: 300, damping: 24 }}
                >
                  Buy ZIPPY Now
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
