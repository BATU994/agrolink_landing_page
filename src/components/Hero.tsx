import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import logo from "figma:asset/af2f67e2ee91842878ba388b94cdc64a6f0b63e8.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/30 to-transparent" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span className="text-emerald-400">
              Powered by Solana
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
            Tokenizing the Chicken Economy on Solana
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Every chicken product — from egg to breast — becomes
            a liquid on-chain asset.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
            href="https://blockchain-project-git-main-magzhan-skakovs-projects.vercel.app?_vercel_share=Ey1bpTP5XqVeWn5cMloHNTtiH14kfPd1"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-lg shadow-emerald-500/50"
            >
              Get Started
            </Button>
            </a>
          </div>
        </motion.div>

        {/* Floating Logo Illustration */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a
            href="https://blockchain-project-git-main-magzhan-skakovs-projects.vercel.app?_vercel_share=Ey1bpTP5XqVeWn5cMloHNTtiH14kfPd1"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative w-full max-w-2xl mx-auto h-64 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center p-8 transition-transform hover:scale-[1.02]">
              <img
                src={logo}
                alt="Agrolink ChickChain"
                className="max-h-full object-contain z-10 relative"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 blur-xl" />
            </div>
          </a>

        </motion.div>
      </div>
    </section>
  );
}