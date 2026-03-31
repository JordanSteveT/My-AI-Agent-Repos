import { getSEO } from '@/lib/seo';
import CTASection from '@/components/CTASection';
import ServicesList from '@/components/ServicesList';
import ServicesHeader from '@/components/ServicesHeader';

export const metadata = getSEO({
  title: 'Nos Services',
  description: 'Découvrez nos solutions d\'automatisation par IA pour le service client, les RH, et les opérations.',
  path: '/services'
});

export default function Services() {
  return (
    <div className="pt-24">
      <ServicesHeader />
      
      <ServicesList />
      
      <CTASection />
    </div>
  );
}
