'use client';

import { motion } from 'motion/react';
import { Star, Bot, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Star className="w-6 h-6 text-neon-blue" />,
      title: 'Restauration',
      description: 'Ne manquez plus aucune réservation pendant le service.',
      features: ['Gestion des réservations 24/7', 'Réponse automatique aux avis', 'Prise de commande en ligne']
    },
    {
      icon: <Bot className="w-6 h-6 text-neon-purple" />,
      title: 'Hôtellerie',
      description: 'Offrez une expérience premium avant même l\'arrivée.',
      features: ['Conciergerie virtuelle multilingue', 'Check-in/out automatisé', 'Recommandations locales']
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: 'PME & Services',
      description: 'Automatisez votre support et qualifiez vos prospects.',
      features: ['Support client instantané', 'Qualification de leads', 'Prise de rendez-vous automatisée']
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Des solutions sur mesure par <span className="text-gradient">secteur</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chaque industrie a ses propres défis. Nos agents sont entraînés spécifiquement pour répondre aux exigences de votre métier.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
