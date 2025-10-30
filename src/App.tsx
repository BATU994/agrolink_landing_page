import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { MarketStatsSection } from './components/MarketStatsSection';
import { SolutionSection } from './components/SolutionSection';
import { TokenizationProcess } from './components/TokenizationProcess';
import { BenefitsSection } from './components/BenefitsSection';
import { EcosystemPartners } from './components/EcosystemPartners';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="problem">
        <ProblemSection />
      </div>
      <div id="market">
        <MarketStatsSection />
      </div>
      <div id="solution">
        <SolutionSection />
      </div>
      <div id="process">
        <TokenizationProcess />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="ecosystem">
        <EcosystemPartners />
      </div>
      <div id="cta">
        <FinalCTA />
      </div>
    </div>
  );
}
