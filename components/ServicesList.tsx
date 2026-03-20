'use client';

import { motion } from 'motion/react';
import { Bot, Users, Zap, LineChart, Database, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'support',
    title: "Support Client Autonome",
    icon: <Bot className="text-blue-400" size={32} />,
    description: "Transformez votre service client avec un agent IA capable de comprendre le contexte, de consulter votre base de données et de résoudre 70% des tickets de niveau 1 instantanément, 24/7.",
    benefits: ["Temps de réponse < 2 secondes", "Satisfaction client en hausse", "Désengorgement de vos équipes"],
    roi: "Réduction de 40% des coûts de support"
  },
  {
    id: 'rh',
    title: "Assistant RH & Recrutement",
    icon: <Users className="text-purple-400" size={32} />,
    description: "Automatisez le tri des CVs, la pré-qualification des candidats par chat ou voix, et l'onboarding administratif. Ne perdez plus de temps sur le sourcing, concentrez-vous sur l'humain.",
    benefits: ["Tri de 1000+ CVs en quelques minutes", "Entretiens de pré-qualification 24/7", "Génération automatique de synthèses"],
    roi: "15h gagnées par semaine par recruteur"
  },
  {
    id: 'ops',
    title: "Optimisation Opérationnelle",
    icon: <Zap className="text-blue-400" size={32} />,
    description: "Fini la saisie manuelle. Nos agents extraient les données de vos factures, contrats et emails (OCR/NLP), mettent à jour votre ERP/CRM et génèrent des rapports automatiquement.",
    benefits: ["Zéro erreur de saisie", "Traitement de documents en masse", "Synchronisation API temps réel"],
    roi: "Processus 10x plus rapides"
  },
  {
    id: 'sales',
    title: "Génération de Leads & Ventes",
    icon: <LineChart className="text-purple-400" size={32} />,
    description: "Un agent IA qui qualifie vos visiteurs web, personnalise vos séquences d'emails à grande échelle en analysant le profil de vos prospects, et prend des rendez-vous directement dans votre agenda.",
    benefits: ["Hyper-personnalisation à l'échelle", "Qualification des leads 24/7", "Augmentation des taux de conversion"],
    roi: "+35% de rendez-vous qualifiés"
  },
  {
    id: 'knowledge',
    title: "Copilote Interne d'Entreprise",
    icon: <Database className="text-blue-400" size={32} />,
    description: "Un assistant virtuel connecté à tout votre savoir d'entreprise (Notion, Google Drive, Slack). Vos employés posent une question et obtiennent la réponse exacte sourcée instantanément.",
    benefits: ["Recherche d'information instantanée", "Onboarding des nouveaux accéléré", "Sécurité des données garantie"],
    roi: "2h économisées par employé / semaine"
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
