'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-16 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Prêt à scaler sans recruter ?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Réservez votre audit IA gratuit de 30 minutes. Nous analyserons vos processus et identifierons exactement où l'IA peut vous faire gagner du temps et de l'argent.
          </p>
          <Link 
            href="/audit-ia"
            onClick={() => trackEvent('click_bottom_cta')}
            className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          >
            Réserver mon audit gratuit <ArrowRight size={20} />
          </Link>
          <p className="mt-6 text-sm text-gray-500">Seulement 5 audits disponibles ce mois-ci.</p>
        </motion.div>
      </div>
    </section>
  );
}
