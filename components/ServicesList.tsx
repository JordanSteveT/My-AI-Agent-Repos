'use client';

import { motion } from 'motion/react';
import { Bot, Users, Zap, LineChart, Database, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ServicesList() {
  const { t } = useLanguage();

  const serviceIcons = [
    <Bot className="text-blue-400" size={32} key="bot" />,
    <Users className="text-purple-400" size={32} key="users" />,
    <Zap className="text-blue-400" size={32} key="zap" />,
    <LineChart className="text-purple-400" size={32} key="chart" />,
    <Database className="text-blue-400" size={32} key="db" />
  ];

  const services = t.servicesPage.items.map((item, index) => ({
    ...item,
    id: `service-${index}`,
    icon: serviceIcons[index]
  }));
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-8 md:p-10 rounded-3xl border-t-4 ${
              index % 2 === 0 ? 'border-blue-500/50' : 'border-purple-500/50'
            } hover:bg-white/[0.02] transition-colors flex flex-col h-full`}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-inner">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>
            
            <div className="space-y-3 mb-8">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="inline-block px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold w-fit">
              {t.servicesPage.roiPrefix}{service.roi}
            </div>
          </motion.div>
        ))}
        
        {/* Carte "Sur Mesure" pour compléter la grille (nombre pair) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="gradient-bg p-8 md:p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-display">{t.servicesPage.customTitle}</h3>
          <p className="text-white/90 mb-8 leading-relaxed max-w-md">
            {t.servicesPage.customDesc}
          </p>
          <a 
            href="/audit-ia" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg"
          >
            {t.servicesPage.customBtn}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
