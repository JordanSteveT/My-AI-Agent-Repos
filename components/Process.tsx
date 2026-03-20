export default function Process() {
  const steps = [
    { num: '01', title: 'Audit & Stratégie', desc: 'Analyse approfondie de vos processus chronophages et identification des opportunités de ROI.' },
    { num: '02', title: 'Conception Sur Mesure', desc: 'Entraînement de l\'IA sur vos données spécifiques (FAQ, historique, ton de marque).' },
    { num: '03', title: 'Déploiement', desc: 'Intégration fluide à vos outils existants (WhatsApp, Site web, CRM, Téléphone).' },
    { num: '04', title: 'Optimisation Continue', desc: 'Amélioration constante des performances basée sur l\'analyse des interactions réelles.' },
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Notre méthode de <span className="text-neon-blue">déploiement</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un processus éprouvé pour intégrer l&apos;IA dans votre entreprise sans perturber vos opérations actuelles.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-xl font-display font-bold text-neon-blue mb-6 mx-auto md:mx-0 border-neon-blue/30 shadow-[0_0_15px_rgba(0,209,255,0.1)]">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
