import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://www.aiagent.fr';

  // Liste de toutes les routes publiques de votre site
  const routes = [
    '',
    '/services',
    '/a-propos',
    '/blog',
    '/contact',
    '/audit-ia',
  ];

  const sitemapRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    // La page d'accueil change plus souvent et a une priorité plus élevée
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapRoutes;
}
