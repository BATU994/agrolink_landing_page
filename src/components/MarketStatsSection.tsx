import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Egg, Beef, BanknoteArrowUp, Tractor } from 'lucide-react';
import { GlassCard } from './GlassCard';

const stats = [
  {
    icon: DollarSign,
    label: 'Kazakhstan Poultry Market Value',
    value: '$500M+',
    subtext: 'Annual market size',
    gradient: 'from-emerald-500/20 to-green-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: BanknoteArrowUp,
    label: 'AgroLink Platform Revenue Model',
    value: '2-5%',
    subtext: 'Transaction fee',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30'
  },
  {
    icon: Egg,
    label: 'Kazakhstan Egg Production Revenue',
    value: '$324M',
    subtext: 'Annual revenue',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30'
  },
  {
    icon: Tractor,
    label: 'Annual turnover per Farm',
    value: '$85,000',
    subtext: 'Annual revenue',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/30'
  }
];

export function MarketStatsSection() {
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
            A Massive Market Opportunity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kazakhstan's chicken and egg market represents billions in untapped potential for blockchain innovation
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 border ${stat.borderColor}`}>
                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                  </div>
                  <div className={`text-4xl mb-2 ${stat.iconColor}`}>
                    {stat.value}
                  </div>
                  <h3 className="text-lg mb-2 text-white">{stat.label}</h3>
                  <p className="text-sm text-gray-400">{stat.subtext}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl px-8 py-6">
            <p className="text-gray-300">
              <span className="text-emerald-400">ChickChain</span> unlocks liquidity and transparency for this{' '}
              <span className="text-white">multi-billion dollar industry</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
