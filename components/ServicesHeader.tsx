'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ServicesHeader() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-6">
          {t.servicesPage.subtitle}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
          {t.servicesPage.title1} <br className="hidden md:block" />
          <span className="gradient-text">{t.servicesPage.titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {t.servicesPage.desc}
        </p>
      </div>
    </div>
  );
}
