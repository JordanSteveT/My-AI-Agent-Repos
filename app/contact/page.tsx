import { getSEO } from '@/lib/seo';

export const metadata = getSEO({
  title: 'Contact',
  description: 'Contactez AIAgent pour discuter de vos projets d\'automatisation.',
});

export default function Contact() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Contactez-nous</h1>
        <p className="text-xl text-gray-400 mb-12">
          Une question ? Un projet spécifique ? Notre équipe est à votre écoute.
        </p>
        <div className="glass-panel p-8 rounded-2xl text-left">
          <p className="text-gray-300 mb-4">Email: contact@aiagent.fr</p>
          <p className="text-gray-300">Téléphone: +237 699 57 27 90</p>
        </div>
      </div>
    </div>
  );
}
