import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export const getSEO = ({ title, description, path = '' }: SEOProps): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aiagent.fr';
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | AIAgent`,
    description,
    openGraph: {
      title: `${title} | AIAgent`,
      description,
      url,
      siteName: 'AIAgent',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AIAgent`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
};
