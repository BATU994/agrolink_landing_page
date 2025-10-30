import { motion } from 'motion/react';
import { Home, Link2, LineChart, QrCode, ArrowRight } from 'lucide-react';

const steps = [
  { icon: Home, label: 'Farm', color: 'emerald' },
  { icon: Link2, label: 'Token', color: 'cyan' },
  { icon: LineChart, label: 'Exchange', color: 'purple' },
  { icon: QrCode, label: 'Consumer', color: 'blue' }
];

export function SolutionSection() {
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
            We Bring the Chicken Supply Chain On-Chain
          </h2>
        </motion.div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/20 flex items-center justify-center mb-4 border border-${step.color}-500/30 backdrop-blur-sm`}>
                  <step.icon className={`w-12 h-12 text-${step.color}-400`} />
                </div>
                <span className="text-lg text-white">{step.label}</span>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-8 h-8 text-emerald-400" />
                </motion.div>
              )}
              
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="md:hidden"
                >
                  <ArrowRight className="w-8 h-8 text-emerald-400 rotate-90" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
