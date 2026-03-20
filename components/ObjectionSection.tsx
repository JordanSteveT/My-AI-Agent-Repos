'use client';

import { motion } from 'motion/react';
import { Shield, Zap, TrendingDown, Lock } from 'lucide-react';

export default function ObjectionSection() {
  const objections = [
    {
      icon: <TrendingDown size={24} />,
      title: "« Ça va coûter trop cher »",
      response: "Nos agents IA sont conçus pour être rentables dès le 3ème mois. Vous ne payez pas pour une technologie, vous investissez dans une réduction de vos coûts opérationnels."
    },
    {
      icon: <Zap size={24} />,
      title: "« C'est trop complexe à intégrer »",
      response: "Nous gérons 100% de l'intégration. Nos agents se connectent à vos outils existants (Slack, CRM, ERP) sans perturber vos processus actuels."
    },
    {
      icon: <Shield size={24} />,
      title: "« Mes employés vont avoir peur »",
      response: "L'IA ne remplace pas vos équipes, elle les augmente. Nous formons vos collaborateurs à utiliser ces outils pour qu'ils se concentrent sur des tâches à haute valeur ajoutée."
    },
    {
      icon: <Lock size={24} />,
      title: "« Mes données ne sont pas en sécurité »",
      response: "Sécurité de niveau entreprise. Vos données restent les vôtres, hébergées en Europe (RGPD) et ne sont jamais utilisées pour entraîner des modèles publics."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ce qui vous retient (et pourquoi vous avez tort)</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objections.map((obj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                {obj.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{obj.title}</h3>
                <p className="text-gray-400 leading-relaxed">{obj.response}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
