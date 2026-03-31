'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { trackEvent } from '@/lib/analytics';
import { Shield, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AuditIA() {
  const { t } = useLanguage();
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
        alert(t.audit.error1);
      }
    } catch (error) {
      console.error("Erreur de soumission:", error);
      alert(t.audit.error2);
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
              {t.audit.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t.audit.title }} />
            <p className="text-xl text-gray-400 mb-8">
              {t.audit.desc}
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.audit.features[0].title}</h3>
                  <p className="text-gray-400 text-sm">{t.audit.features[0].desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.audit.features[1].title}</h3>
                  <p className="text-gray-400 text-sm">{t.audit.features[1].desc}</p>
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
                <h3 className="text-2xl font-bold text-white mb-4">{t.audit.successTitle}</h3>
                <p className="text-gray-400">
                  {t.audit.successDesc}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">{t.audit.formTitle}</h3>
                <p className="text-gray-400 text-sm mb-8">{t.audit.formDesc}</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">{t.audit.labels.firstName}</label>
                      <input required name="prenom" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">{t.audit.labels.lastName}</label>
                      <input required name="nom" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">{t.audit.labels.email}</label>
                    <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">{t.audit.labels.size}</label>
                    <select required name="taille_entreprise" className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option value="">{t.audit.labels.sizeSelect}</option>
                      <option value="1-10">{t.audit.labels.size1}</option>
                      <option value="11-50">{t.audit.labels.size2}</option>
                      <option value="51-200">{t.audit.labels.size3}</option>
                      <option value="200+">{t.audit.labels.size4}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">{t.audit.labels.problem}</label>
                    <textarea required name="probleme" rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600" placeholder={t.audit.labels.problemPlaceholder}></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-bg text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50 flex justify-center items-center"
                  >
                    {isSubmitting ? t.audit.submittingBtn : t.audit.submitBtn}
                  </button>
                  <p className="text-xs text-center text-gray-500">
                    {t.audit.privacy}
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
