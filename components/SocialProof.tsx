'use client';

import { motion } from 'motion/react';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SocialProof() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 border-y border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{t.socialProof.title}</p>
        </div>
        
        {/* Logos placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale mb-20">
          <div className="text-2xl font-bold font-display">TechCorp</div>
          <div className="text-2xl font-bold font-display">InnovateHR</div>
          <div className="text-2xl font-bold font-display">GlobalSales</div>
          <div className="text-2xl font-bold font-display">ScaleUp</div>
          <div className="text-2xl font-bold font-display">FutureOps</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.socialProof.stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-display">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
