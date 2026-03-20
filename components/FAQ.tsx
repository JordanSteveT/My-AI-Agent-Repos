'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour déployer un agent IA ?",
      answer: "En moyenne, un agent IA sur mesure est déployé en 3 à 4 semaines. Cela inclut l'audit, le développement, les tests et la formation de vos équipes."
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer: "Nous utilisons les meilleurs modèles du marché (GPT-4, Claude 3, Gemini) que nous connectons à vos outils via des architectures sur mesure (LangChain, n8n, Make) pour garantir performance et sécurité."
    },
    {
      question: "Faut-il des compétences techniques en interne ?",
      answer: "Absolument pas. Nous livrons des solutions clés en main. Vous interagissez avec l'agent en langage naturel, comme avec un employé humain."
    },
    {
      question: "Quel est le ROI moyen ?",
      answer: "Nos clients constatent un ROI positif entre 2 et 4 mois. En moyenne, un agent IA permet d'économiser l'équivalent d'un demi-poste à temps plein sur des tâches répétitives."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Questions Fréquentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden glass-panel">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 text-blue-400 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
