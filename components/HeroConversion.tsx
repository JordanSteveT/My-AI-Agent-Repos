'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function HeroConversion() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-6">
            {t.heroConversion.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-display leading-tight">
            {t.heroConversion.title1} <br className="hidden md:block" />
            <span className="gradient-text">{t.heroConversion.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.heroConversion.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/audit-ia"
              onClick={() => trackEvent('click_hero_audit')}
              className="w-full sm:w-auto gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2"
            >
              {t.heroConversion.cta1} <ArrowRight size={20} />
            </Link>
            <Link 
              href="/services"
              onClick={() => trackEvent('click_hero_services')}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              {t.heroConversion.cta2}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {t.heroConversion.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-500" /> {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
