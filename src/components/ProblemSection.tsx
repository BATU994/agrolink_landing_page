import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Clock, AlertCircle, TrendingDown, ArrowDown, PackageX } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Slow Payment',
    description: 'Payments are slow and full of middlemen.',
  },
  {
    icon: AlertCircle,
    title: 'Hard to Verify Product Origin',
    description: 'Consumers lack transparency about where their chicken products come from and their journey.',
  },
  {
    icon: TrendingDown,
    title: 'No Easy Investment Access',
    description: 'The agricultural market remains largely inaccessible to everyday investors seeking exposure.',
  },
  {
    icon: ArrowDown,
    title: 'Unfair Profit Distribution',
    description: 'Farmers earn less, while consumers pay more.',
  },
  {
    icon: PackageX,
    title: 'High Product Loss',
    description: 'Up to 20% of products are lost on the way from farm to shelf.',
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
            The Chicken Market Lacks Transparency & Liquidity
          </h2>
        </motion.div>

        {/* Flexbox layout with wrapping */}
        <div className="flex flex-wrap justify-center gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <GlassCard>
                {/* Square container */}
                <div className="flex flex-col items-center justify-center text-center w-56 aspect-square">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-4 border border-red-500/30">
                    <problem.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg mb-2 text-white font-semibold">{problem.title}</h3>
                  <p className="text-gray-400 text-sm px-2">{problem.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
