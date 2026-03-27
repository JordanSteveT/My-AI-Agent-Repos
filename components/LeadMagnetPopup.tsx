'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, CheckCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (hasSeen) return;
    
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasSeen(true);
      trackEvent('popup_shown');
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasSeen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('lead_magnet_submit');
    
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!accessKey) {
      console.warn("Clé Web3Forms manquante. Simulation de l'envoi.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsOpen(false), 2000);
      }, 1500);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Nouveau lead : Téléchargement du Guide IA !");
    formData.append("from_name", "AIAgent Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsOpen(false), 2000);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#12121a] border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
          >
            <button 
              onClick={() => {
                setIsOpen(false);
                trackEvent('popup_closed');
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Guide envoyé !</h3>
                <p className="text-gray-400 text-sm">
                  Vérifiez votre boîte mail, le guide devrait arriver d'ici quelques minutes.
                </p>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <Download size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Le Guide Pratique de l'Automatisation</h3>
                <p className="text-gray-400 mb-6 text-sm">Découvrez 5 tâches simples que vous pouvez automatiser dès aujourd'hui pour gagner plusieurs heures par semaine.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Votre adresse email pro" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bg text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Recevoir le guide gratuit'}
                  </button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">100% gratuit. Désinscription à tout moment.</p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
