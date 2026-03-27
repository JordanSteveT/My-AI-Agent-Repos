import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Utilise l'URL de l'application définie dans les variables d'environnement, 
  // ou une URL par défaut si elle n'est pas définie.
  const baseUrl = process.env.APP_URL || 'https://www.aiagent.fr';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Vous pouvez ajouter des disallow ici si vous avez des pages privées
      // disallow: '/prive/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
