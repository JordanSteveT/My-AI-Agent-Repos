'use client';

import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutContent() {
  const { t } = useLanguage();

  const valuesIcons = [
    <Target className="w-6 h-6 text-neon-blue" key="target" />,
    <Zap className="w-6 h-6 text-neon-purple" key="zap" />,
    <ShieldCheck className="w-6 h-6 text-neon-blue" key="shield" />,
    <Lightbulb className="w-6 h-6 text-neon-purple" key="lightbulb" />
  ];

  const values = t.about.valuesItems.map((item, index) => ({
    ...item,
    icon: valuesIcons[index]
  }));
  return (
    <div className="pt-32 pb-10 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-neon-blue mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          {t.about.subtitle}
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
        >
          {t.about.title1} <br className="hidden md:block" />
          <span className="text-gradient">{t.about.titleHighlight}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.about.desc }}
        />
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display" dangerouslySetInnerHTML={{ __html: t.about.storyTitle }} />
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.about.storyP1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.about.storyP2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.about.storyP3 }} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-2xl" />
            <div className="glass-panel p-8 rounded-2xl relative border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.about.promiseTitle}</h3>
                  <p className="text-gray-400 text-sm">{t.about.promiseSubtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {t.about.promiseItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-neon-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t.about.valuesTitle}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.about.valuesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
