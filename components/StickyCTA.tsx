'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <Link
            href="/audit-ia"
            onClick={() => trackEvent('click_sticky_cta_mobile')}
            className="gradient-bg text-white p-4 rounded-full shadow-[0_10px_25px_rgba(59,130,246,0.5)] flex items-center justify-center"
          >
            <Calendar size={24} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
