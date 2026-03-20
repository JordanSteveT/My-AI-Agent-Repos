import { getSEO } from '@/lib/seo';
import AboutContent from '@/components/AboutContent';

export const metadata = getSEO({
  title: 'À Propos',
  description: 'Découvrez l\'équipe derrière AIAgent et notre mission d\'automatiser les entreprises.',
});

export default function APropos() {
  return <AboutContent />;
}
