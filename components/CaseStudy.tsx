'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CaseStudy() {
  const { t } = useLanguage();
  
  const getIcon = (index: number) => {
    if (index === 0) return <Clock size={16} />;
    if (index === 1) return <TrendingUp size={16} />;
    return <DollarSign size={16} />;
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t.caseStudy.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t.caseStudy.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.caseStudy.cases.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{study.company}</h3>
                  <p className="text-blue-400 text-sm font-medium">{study.role}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">{t.caseStudy.problemLabel}</p>
                  <p className="text-gray-300">{study.problem}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">{t.caseStudy.solutionLabel}</p>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-8">
                <p className="text-white font-semibold mb-3">{t.caseStudy.resultsLabel}</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-blue-400">{getIcon(idx)}</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/etudes-de-cas" className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                {t.caseStudy.readMore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
