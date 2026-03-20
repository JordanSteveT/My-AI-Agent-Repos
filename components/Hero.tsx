'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import DataFlowAnimation from './DataFlowAnimation';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden px-6">
      <DataFlowAnimation />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-neon-blue mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          L&apos;avenir de l&apos;automatisation est là
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Libérez votre entreprise des <span className="text-gradient">tâches répétitives</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Des agents IA 100% autonomes, pas juste des chatbots. Augmentez votre rentabilité et gagnez des centaines d&apos;heures par mois grâce à des assistants intelligents sur mesure.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/audit-ia" className="w-full sm:w-auto px-8 py-4 rounded-full bg-neon-blue text-black font-semibold hover:bg-neon-blue/90 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] transition-all flex items-center justify-center gap-2">
            Réserver un Audit Gratuit <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#demo" className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Voir la Démo en Action
          </a>
        </motion.div>
      </div>
    </section>
  );
}
