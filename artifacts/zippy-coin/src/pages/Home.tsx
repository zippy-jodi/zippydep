import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Ticker } from '@/components/sections/Ticker';
import { Features } from '@/components/sections/Features';
import { Tokenomics } from '@/components/sections/Tokenomics';
import { HowToBuy } from '@/components/sections/HowToBuy';
import { Roadmap } from '@/components/sections/Roadmap';
import { Community } from '@/components/sections/Community';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <div id="about"><Hero /></div>
      <Ticker />
      <div id="tokenomics"><Tokenomics /></div>
      <div id="how-to-buy"><HowToBuy /></div>
      <div id="roadmap"><Roadmap /></div>
      <div id="community"><Community /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </main>
  );
}
