import { getSEO } from '@/lib/seo';
import BlogContent from '@/components/BlogContent';

export const metadata = getSEO({
  title: 'Blog',
  description: 'Actualités, guides et conseils sur l\'automatisation IA pour les entreprises.',
});

export default function Blog() {
  return <BlogContent />;
}
