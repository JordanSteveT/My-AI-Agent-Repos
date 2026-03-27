import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import LeadMagnetPopup from '@/components/LeadMagnetPopup';
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'AIAgent | Agence IA & Automatisation B2B',
  description: 'Transformez vos processus internes en machines automatisées grâce à des agents IA sur mesure. ROI rapide, gain de temps massif.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-white antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <LeadMagnetPopup />
        <Chatbot />
      </body>
    </html>
  );
}
