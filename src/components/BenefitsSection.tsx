import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { DollarSign, Search, Zap, Globe } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Liquidity for Farmers',
    description: 'Instant access to capital through tokenized assets and fractional ownership opportunities.',
    gradient: 'from-emerald-500/20 to-green-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: Search,
    title: 'Traceability for Buyers',
    description: 'Complete transparency with immutable records tracking every step from farm to fork.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30'
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Lightning-fast transactions powered by Solana blockchain technology.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30'
  },
  {
    icon: Globe,
    title: 'Kazakhstan Market',
    description: 'Empowering Kazakhstan farmers and investors with blockchain-powered transparency and liquidity.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30'
  }
];

export function BenefitsSection() {
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
            Benefits for Everyone
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 border ${benefit.borderColor}`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-2xl mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 flex-grow">{benefit.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
