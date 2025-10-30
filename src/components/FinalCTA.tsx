import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Rocket, FileText } from 'lucide-react';
import logo from 'figma:asset/af2f67e2ee91842878ba388b94cdc64a6f0b63e8.png';

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-950/20 to-purple-950/30" />
      
      {/* Network Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]" />
      
      {/* Subtle Logo Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 opacity-5">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
            Join the Future of Chicken Economy
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be part of the revolution transforming agriculture through blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
            href="https://blockchain-project-git-main-magzhan-skakovs-projects.vercel.app?_vercel_share=Ey1bpTP5XqVeWn5cMloHNTtiH14kfPd1"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-7 text-xl shadow-2xl shadow-emerald-500/50 group"
            >
              <Rocket className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-transform" />
              Launch App
            </Button>
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
