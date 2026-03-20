import { getSEO } from '@/lib/seo';
import CTASection from '@/components/CTASection';
import ServicesList from '@/components/ServicesList';

export const metadata = getSEO({
  title: 'Nos Services',
  description: 'Découvrez nos solutions d\'automatisation par IA pour le service client, les RH, et les opérations.',
  path: '/services'
});

export default function Services() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-6">
            Expertise & Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Des agents IA pour chaque <br className="hidden md:block" />
            <span className="gradient-text">département stratégique</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nous ne vendons pas de simples chatbots. Nous concevons des employés digitaux sur mesure, capables de raisonner, d'agir sur vos outils et de générer un ROI mesurable.
          </p>
        </div>
      </div>
      
      <ServicesList />
      
      <CTASection />
    </div>
  );
}
