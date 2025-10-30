import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';

export function EcosystemPartners() {
  return (
    <section className="relative py-24 px-6 bg-transparent overflow-hidden">
      {/* Glowing green-blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/10 to-blue-500/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Powered by Solana
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Solana Logo and Specs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Solana Logo */}
            <div className="relative mb-8">
              <motion.div
                className="w-48 h-48 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-cyan-400/30 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                {/* Solana Symbol */}
                <svg className="w-32 h-32 relative z-10" viewBox="0 0 397.7 311.7" fill="none">
                  <defs>
                    <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00FFA3" />
                      <stop offset="100%" stopColor="#DC1FFF" />
                    </linearGradient>
                  </defs>
                  <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="url(#solanaGradient)"/>
                  <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="url(#solanaGradient)"/>
                  <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="url(#solanaGradient)"/>
                </svg>
              </motion.div>
              
              {/* Lightning effect */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-12 h-12 rounded-full bg-yellow-400/30 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
              </motion.div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              {[
                { label: 'TPS', value: '65,000+' },
                { label: 'Finality', value: '<1s' },
                { label: 'Fees', value: '~$0.00' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="backdrop-blur-lg bg-white/5 border border-cyan-400/20 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right: Explanation Text and Flow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              ChickChain runs on <span className="text-cyan-400">Solana</span> — the fastest, most scalable blockchain for real-world assets. With <span className="text-cyan-400">65,000+ TPS</span>, <span className="text-emerald-400">sub-second finality</span>, and <span className="text-blue-400">near-zero fees</span>, Solana enables instant tokenization, payments, and traceability for every chicken product.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Its energy efficiency and robust DeFi ecosystem make it ideal for powering transparent, liquid, and sustainable agricultural markets.
            </p>
            
            {/* Token Flow Visualization */}
            <div className="mt-8 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between gap-4">
                {[
                  { icon: '🚜', label: 'Farm' },
                  { icon: '⛓️', label: 'Blockchain' },
                  { icon: '👤', label: 'Consumer' }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-2xl border border-cyan-400/30"
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <span className="text-xs text-gray-400 mt-2">{step.label}</span>
                    </div>
                    
                    {index < 2 && (
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
