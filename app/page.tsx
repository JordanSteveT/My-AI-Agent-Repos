import { getSEO } from '@/lib/seo';
import Hero from '@/components/Hero';
import Demo from '@/components/Demo';
import ServicesSection from '@/components/ServicesSection';
import Process from '@/components/Process';
import SocialProof from '@/components/SocialProof';
import CaseStudy from '@/components/CaseStudy';
import ObjectionSection from '@/components/ObjectionSection';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata = getSEO({
  title: 'Accueil',
  description: 'Agence experte en création d’agents IA sur mesure pour entreprises souhaitant automatiser leurs tâches répétitives à fort potentiel.',
});

export default function Home() {
  return (
    <>
       <Hero /> 
      {/* <SocialProof /> */}
      <Demo />
      <ServicesSection />
      <Process />
      {/* <CaseStudy /> */}
      <ObjectionSection />
      <FAQ />
      <CTASection />
    </>
  );
}
