import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block font-display">
              AI<span className="gradient-text">Agent</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformez vos processus internes en machines automatisées grâce à des agents IA sur mesure. L'avantage concurrentiel ultime pour les PME ambitieuses.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Automatisation Service Client</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Agents IA RH & Recrutement</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Optimisation Opérationnelle</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Génération de Leads IA</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/etudes-de-cas" className="hover:text-white transition-colors">Études de cas</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AIAgent. Tous droits réservés.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-xs text-gray-400">in</div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-xs text-gray-400">tw</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
