'use client';

import { motion } from 'motion/react';
import { Shield, Zap, TrendingDown, Lock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ObjectionSection() {
  const { t } = useLanguage();
  
  const icons = [
    <TrendingDown size={24} key="trending" />,
    <Zap size={24} key="zap" />,
    <Shield size={24} key="shield" />,
    <Lock size={24} key="lock" />
  ];

  const objections = t.objections.items.map((item, index) => ({
    ...item,
    icon: icons[index]
  }));

  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t.objections.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objections.map((obj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                {obj.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{obj.title}</h3>
                <p className="text-gray-400 leading-relaxed">{obj.response}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
