'use client';

import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

const values = [
  {
    icon: <Target className="w-6 h-6 text-neon-blue" />,
    title: "Pragmatisme",
    description: "Nous ne faisons pas de l'IA pour faire de l'IA. Nous créons des solutions qui ont un impact direct et mesurable sur votre rentabilité."
  },
  {
    icon: <Zap className="w-6 h-6 text-neon-purple" />,
    title: "Vélocité",
    description: "Le monde de l'IA évolue vite. Nous déployons des agents fonctionnels en quelques semaines, pas en plusieurs mois."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-neon-blue" />,
    title: "Sécurité & Fiabilité",
    description: "Vos données sont précieuses. Nos agents sont conçus avec les plus hauts standards de sécurité et de confidentialité."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-neon-purple" />,
    title: "Innovation Continue",
    description: "Nous assurons une veille technologique permanente pour que vos agents bénéficient toujours des meilleurs modèles du marché."
  }
];

export default function AboutContent() {
  return (
    <div className="pt-32 pb-10 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-neon-blue mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          À propos de nous
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
        >
          Notre mission : <br className="hidden md:block" />
          <span className="text-gradient">Démocratiser l'IA</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Nous transformons le potentiel théorique de l'intelligence artificielle en 
          <strong className="text-white font-medium"> résultats concrets </strong> 
          pour les PME ambitieuses.
        </motion.p>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Le fossé entre la <span className="text-neon-blue">hype</span> et la réalité
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Tout le monde parle d'Intelligence Artificielle. Pourtant, la majorité des entreprises se contentent d'utiliser ChatGPT comme un simple moteur de recherche amélioré.
              </p>
              <p>
                Chez AIAgent, nous avons fait un constat simple : la vraie valeur de l'IA ne réside pas dans un chat, mais dans <strong className="text-white">l'automatisation de processus métiers complexes</strong>.
              </p>
              <p>
                C'est pourquoi nous concevons des agents IA sur mesure, capables de s'intégrer à vos outils existants (CRM, ERP, boîtes mail) pour exécuter des tâches chronophages en totale autonomie.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-2xl" />
            <div className="glass-panel p-8 rounded-2xl relative border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Notre promesse</h3>
                  <p className="text-gray-400 text-sm">Ce que nous vous apportons</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Réduction drastique des coûts opérationnels",
                  "Élimination des erreurs humaines",
                  "Disponibilité 24/7 de vos processus",
                  "Recentrage de vos équipes sur l'essentiel"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-neon-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Nos Valeurs</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Les principes qui guident chacune de nos collaborations et le développement de nos agents IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
