import { getSEO } from '@/lib/seo';
import CaseStudy from '@/components/CaseStudy';
import CTASection from '@/components/CTASection';

export const metadata = getSEO({
  title: 'Études de Cas',
  description: 'Découvrez comment nos clients ont transformé leurs opérations grâce à nos agents IA.',
});

export default function EtudesDeCas() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-center">Études de Cas</h1>
      </div>
      <CaseStudy />
      <CTASection />
    </div>
  );
}
