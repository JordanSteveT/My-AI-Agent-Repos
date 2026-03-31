'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { num: '01', title: t.process.steps[0].title, desc: t.process.steps[0].desc },
    { num: '02', title: t.process.steps[1].title, desc: t.process.steps[1].desc },
    { num: '03', title: t.process.steps[2].title, desc: t.process.steps[2].desc },
    { num: '04', title: t.process.steps[3].title, desc: t.process.steps[3].desc },
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t.process.title1} <span className="text-neon-blue">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-xl font-display font-bold text-neon-blue mb-6 mx-auto md:mx-0 border-neon-blue/30 shadow-[0_0_15px_rgba(0,209,255,0.1)]">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
