'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    if (hasSeen) return;
    
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasSeen(true);
      trackEvent('popup_shown');
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasSeen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('lead_magnet_submit');
    setIsOpen(false);
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
            
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
              <Download size={24} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Le Guide Ultime de l'Automatisation IA</h3>
            <p className="text-gray-400 mb-6 text-sm">Découvrez les 5 processus que vos concurrents automatisent déjà pour économiser 20h/semaine.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Votre adresse email pro" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full gradient-bg text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
              >
                Recevoir le guide gratuit
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">100% gratuit. Désinscription à tout moment.</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
