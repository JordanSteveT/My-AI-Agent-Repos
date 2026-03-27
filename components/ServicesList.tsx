'use client';

import { motion } from 'motion/react';
import { Bot, Users, Zap, LineChart, Database, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'support',
    title: "Service Client 24/7",
    icon: <Bot className="text-blue-400" size={32} />,
    description: "Un assistant virtuel qui répond instantanément aux questions de vos clients (suivi de commande, horaires, retours) et résout les problèmes courants sans intervention humaine.",
    benefits: ["Réponse immédiate aux clients", "Plus de clients satisfaits", "Moins d'appels téléphoniques à gérer"],
    roi: "Jusqu'à 40% de temps gagné au support"
  },
  {
    id: 'rh',
    title: "Aide au Recrutement",
    icon: <Users className="text-purple-400" size={32} />,
    description: "Automatisez le tri des CV et les premiers échanges avec les candidats. Ne perdez plus de temps à lire des centaines de profils qui ne correspondent pas à vos critères.",
    benefits: ["Tri automatique des candidatures", "Premiers entretiens par chat", "Résumés clairs des meilleurs profils"],
    roi: "Des heures de lecture de CV évitées"
  },
  {
    id: 'ops',
    title: "Saisie de Données Automatique",
    icon: <Zap className="text-blue-400" size={32} />,
    description: "Fini la copie manuelle. Notre système lit vos factures, contrats et emails, puis range les informations directement dans vos logiciels de gestion.",
    benefits: ["Plus d'erreurs de copie", "Traitement instantané des documents", "Mise à jour automatique de vos logiciels"],
    roi: "Fini la paperasse ennuyeuse"
  },
  {
    id: 'sales',
    title: "Prospection Intelligente",
    icon: <LineChart className="text-purple-400" size={32} />,
    description: "Un assistant qui accueille les visiteurs sur votre site web, comprend leurs besoins et leur propose de prendre rendez-vous directement dans votre agenda.",
    benefits: ["Accueil personnalisé de chaque visiteur", "Prise de rendez-vous automatique", "Plus de clients potentiels identifiés"],
    roi: "Votre site web devient un vrai commercial"
  },
  {
    id: 'knowledge',
    title: "Assistant pour vos Employés",
    icon: <Database className="text-blue-400" size={32} />,
    description: "Un moteur de recherche interne intelligent. Vos employés posent une question (ex: 'Quelle est la procédure pour les congés ?') et obtiennent la réponse exacte immédiatement.",
    benefits: ["Trouver l'information en 2 secondes", "Formation des nouveaux plus rapide", "Fini les questions répétitives entre collègues"],
    roi: "Vos employés gagnent un temps précieux"
  }
];

export default function ServicesList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-8 md:p-10 rounded-3xl border-t-4 ${
              index % 2 === 0 ? 'border-blue-500/50' : 'border-purple-500/50'
            } hover:bg-white/[0.02] transition-colors flex flex-col h-full`}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-inner">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>
            
            <div className="space-y-3 mb-8">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="inline-block px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold w-fit">
              ROI attendu : {service.roi}
            </div>
          </motion.div>
        ))}
        
        {/* Carte "Sur Mesure" pour compléter la grille (nombre pair) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="gradient-bg p-8 md:p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-display">Un besoin spécifique ?</h3>
          <p className="text-white/90 mb-8 leading-relaxed max-w-md">
            Nous développons des agents IA sur mesure pour répondre aux défis uniques de votre industrie. Discutons de votre cas d'usage.
          </p>
          <a 
            href="/audit-ia" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Parler à un expert
          </a>
        </motion.div>
      </div>
    </div>
  );
}
