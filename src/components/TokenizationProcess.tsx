import { motion } from 'motion/react';
import { FileCheck, Coins, TrendingUp, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'Chicken products are registered',
    description: 'Farm products enter the blockchain registry with full traceability'
  },
  {
    icon: Coins,
    title: 'Smart contracts mint asset tokens',
    description: 'Each product becomes a unique digital token on Solana'
  },
  {
    icon: TrendingUp,
    title: 'Tokens traded or staked on Solana',
    description: 'Instant liquidity through decentralized exchanges'
  },
  {
    icon: ShieldCheck,
    title: 'Consumers verify authenticity',
    description: 'Complete transparency from farm to table via blockchain'
  }
];

export function TokenizationProcess() {
  return (
    <section className="relative py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            How Tokenization Works
          </h2>
        </motion.div>
        
        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center border-4 border-slate-950 relative z-10">
                    <span className="text-white text-xl">{index + 1}</span>
                  </div>
                </div>
                
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
