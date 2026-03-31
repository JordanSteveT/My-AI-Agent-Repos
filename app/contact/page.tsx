'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">{t.contact.title}</h1>
        <p className="text-xl text-gray-400 mb-12">
          {t.contact.desc}
        </p>
        <div className="glass-panel p-8 rounded-2xl text-left">
          <p className="text-gray-300 mb-4">{t.contact.email}</p>
          <p className="text-gray-300">{t.contact.phone}</p>
        </div>
      </div>
    </div>
  );
}
