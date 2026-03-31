'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '/services' },
    { name: t.nav.about, href: '/a-propos' },
    { name: t.nav.blog, href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter font-display">
          AI<span className="gradient-text">Agent</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="/audit-ia" 
            onClick={() => trackEvent('click_nav_audit')}
            className="gradient-bg text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            {t.nav.audit}
          </Link>
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors ml-2"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="text-gray-300 flex items-center gap-1 text-sm font-medium uppercase"
          >
            <Globe size={18} />
            {language}
          </button>
          <button className="text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel absolute top-full left-0 w-full flex flex-col items-center py-6 gap-4 border-t border-white/10"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-neon-blue transition-colors">
              {link.name}
            </Link>
          ))}
          <Link 
            href="/audit-ia" 
            onClick={() => {
              trackEvent('click_nav_audit_mobile');
              setIsMobileMenuOpen(false);
            }}
            className="gradient-bg text-white px-6 py-3 rounded-full text-base font-semibold mt-2"
          >
            {t.nav.audit}
          </Link>
        </motion.div>
      )}
    </header>
  );
}
