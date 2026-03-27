'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { trackEvent } from '@/lib/analytics';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export default function AuditIA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('audit_form_submit');
    
    const formData = new FormData(e.currentTarget);
    // Clé d'accès Web3Forms via variable d'environnement
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!accessKey) {
      console.warn("Clé Web3Forms manquante. Simulation de l'envoi.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        trackEvent('audit_form_success');
      }, 1500);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Nouveau lead : Demande d'Audit IA !");
    formData.append("from_name", "AIAgent Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        trackEvent('audit_form_success');
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur de soumission:", error);
      alert("Erreur de connexion. Veuillez vérifier votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-blue-900/20 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Value Proposition */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-6">
              Audit Stratégique Offert 
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Découvrez combien de temps l'IA peut vous faire gagner
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              En 30 minutes, nous analysons vos processus actuels et vous livrons une feuille de route claire pour automatiser vos tâches les plus chronophages.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Rapide & Concret</h3>
                  <p className="text-gray-400 text-sm">Pas de blabla théorique. Nous identifions 3 processus à automatiser immédiatement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">100% Confidentiel</h3>
                  <p className="text-gray-400 text-sm">Vos données et processus restent strictement confidentiels (NDA sur demande).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Demande confirmée !</h3>
                <p className="text-gray-400">
                  Notre équipe va vous contacter d'ici 24h pour planifier votre audit gratuit.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Réservez votre créneau</h3>
                <p className="text-gray-400 text-sm mb-8">Remplissez ce formulaire pour que nous puissions préparer notre échange.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Prénom</label>
                      <input required name="prenom" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Nom</label>
                      <input required name="nom" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email professionnel</label>
                    <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Taille de l'entreprise</label>
                    <select required name="taille_entreprise" className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option value="">Sélectionnez...</option>
                      <option value="1-10">1 à 10 employés</option>
                      <option value="11-50">11 à 50 employés</option>
                      <option value="51-200">51 à 200 employés</option>
                      <option value="200+">Plus de 200 employés</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Quel est votre problème principal actuel ?</label>
                    <textarea required name="probleme" rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600" placeholder="Ex: Mon équipe support passe 4h par jour à répondre aux mêmes questions..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-bg text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50 flex justify-center items-center"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Demander mon audit gratuit'}
                  </button>
                  <p className="text-xs text-center text-gray-500">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
