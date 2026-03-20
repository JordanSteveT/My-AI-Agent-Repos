'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function CaseStudy() {
  const cases = [
    {
      company: 'TechCorp Solutions',
      role: 'Service Client',
      problem: 'Équipe débordée par les tickets de niveau 1, temps de réponse > 24h.',
      solution: 'Agent IA de support formé sur la base de connaissances interne.',
      results: [
        { icon: <Clock size={16} />, text: 'Temps de réponse : < 2 min' },
        { icon: <TrendingUp size={16} />, text: '70% des tickets résolus par l\'IA' },
        { icon: <DollarSign size={16} />, text: '45 000€ économisés / an' }
      ]
    },
    {
      company: 'InnovateHR',
      role: 'Recrutement',
      problem: 'Tri manuel de 500+ CVs par semaine, perte des meilleurs profils.',
      solution: 'Agent IA de pré-qualification et de matching de compétences.',
      results: [
        { icon: <Clock size={16} />, text: '15h gagnées par semaine' },
        { icon: <TrendingUp size={16} />, text: 'Qualité des entretiens +40%' },
        { icon: <DollarSign size={16} />, text: 'Coût par recrutement -30%' }
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Des résultats concrets, pas de la science-fiction</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Découvrez comment nos clients ont transformé leurs opérations grâce à nos agents IA.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((study, index) => (
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
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Le problème</p>
                  <p className="text-gray-300">{study.problem}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">La solution AIAgent</p>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-8">
                <p className="text-white font-semibold mb-3">Résultats :</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-blue-400">{result.icon}</span>
                      {result.text}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/etudes-de-cas" className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                Lire l'étude complète <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
