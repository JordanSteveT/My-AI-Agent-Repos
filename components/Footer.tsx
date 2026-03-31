'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block font-display">
              AI<span className="gradient-text">Agent</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.solutions}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.s1}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.s2}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.s3}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.s4}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/a-propos" className="hover:text-white transition-colors">{t.footer.c1}</Link></li>
              <li><Link href="/etudes-de-cas" className="hover:text-white transition-colors">{t.footer.c2}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t.footer.c3}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.footer.c4}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{t.footer.l1}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.footer.l2}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.footer.l3}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AIAgent. {t.footer.rights}</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-xs text-gray-400">in</div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-xs text-gray-400">tw</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
