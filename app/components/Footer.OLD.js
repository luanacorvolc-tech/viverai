'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className="bg-ink py-12 px-8 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-base font-light leading-relaxed">
            ❤️ In memoria di <strong style={{ color: '#d4c48a' }}>Gianluca — BLOB</strong> ❤️
          </p>
          <p className="text-white/50 text-sm mt-2 font-light">
            Chi vuole lasciargli una dedica può scrivere{' '}
            <Link href="/memorie" className="text-terra-light font-semibold underline hover:text-white transition-colors">QUI</Link>
          </p>
        </div>
      </section>

      <footer className="bg-cream pt-16 pb-8 px-8 border-t border-oliva-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-[9px] mb-4">
                <div className="flex gap-[2px] items-end">
                  <span className="inline-block bg-oliva-med" style={{width:'14px',height:'18px',borderRadius:'50% 0 50% 0',transform:'rotate(-15deg)'}}></span>
                  <span className="inline-block bg-oliva" style={{width:'11px',height:'14px',borderRadius:'50% 0 50% 0',transform:'rotate(5deg)'}}></span>
                  <span className="inline-block bg-terra" style={{width:'9px',height:'11px',borderRadius:'50% 0 50% 0',transform:'rotate(20deg)'}}></span>
                </div>
                <div>
                  <div className="font-serif text-[22px] font-semibold leading-none">
                    <span className="text-oliva">Viver</span><span className="text-terra">AI</span>
                  </div>
                  <div className="text-[9px] text-ink-light tracking-[0.07em] uppercase mt-[1px]">Piattaforma educativa del verde</div>
                </div>
              </Link>
              <p className="text-ink-med text-sm leading-relaxed">La piattaforma italiana per chi ama il verde, il giardino, la natura e l'arte di vivere bene.</p>
              <div className="flex gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-full bg-oliva text-white flex items-center justify-center text-xs hover:bg-terra transition-colors">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-oliva text-white flex items-center justify-center text-xs hover:bg-terra transition-colors">📷</a>
                <a href="#" className="w-9 h-9 rounded-full bg-oliva text-white flex items-center justify-center text-xs hover:bg-terra transition-colors">▶</a>
                <a href="#" className="w-9 h-9 rounded-full bg-oliva text-white flex items-center justify-center text-xs hover:bg-terra transition-colors">in</a>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-oliva mb-4 uppercase tracking-wider text-sm">Esplora</h4>
              <ul className="space-y-2.5">
                <li><Link href="/blog" className="text-ink-med text-sm hover:text-terra transition-colors">Blog & Rivista</Link></li>
                <li><Link href="/calendario" className="text-ink-med text-sm hover:text-terra transition-colors">Calendario piante</Link></li>
                <li><Link href="/community" className="text-ink-med text-sm hover:text-terra transition-colors">Community</Link></li>
                <li><Link href="/verdescuola" className="text-ink-med text-sm hover:text-terra transition-colors">VerdeScuola</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-oliva mb-4 uppercase tracking-wider text-sm">Community</h4>
              <ul className="space-y-2.5">
                <li><Link href="/community" className="text-ink-med text-sm hover:text-terra transition-colors">Iscriviti</Link></li>
                <li><Link href="/memorie" className="text-ink-med text-sm hover:text-terra transition-colors">In memoria di Gianluca</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-oliva mb-4 uppercase tracking-wider text-sm">Contatti</h4>
              <ul className="space-y-2.5">
                <li><Link href="/contatti" className="text-ink-med text-sm hover:text-terra transition-colors">Contattaci</Link></li>
                <li><Link href="/contatti" className="text-ink-med text-sm hover:text-terra transition-colors">Chi siamo</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-oliva-15 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ink-light text-xs">© 2026 ViverAI · Tutti i diritti riservati</p>
            <div className="flex gap-6 text-xs">
              <Link href="/privacy" className="text-ink-light hover:text-terra transition-colors">Privacy</Link>
              <Link href="/cookie" className="text-ink-light hover:text-terra transition-colors">Cookie</Link>
              <Link href="/termini" className="text-ink-light hover:text-terra transition-colors">Termini</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}