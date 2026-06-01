import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a2d22] to-[#0d1a14] text-[#f0ebe0] overflow-hidden">
      {/* Bordo decorativo superiore */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a87a]/40 to-transparent" />

      {/* Stelle decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] text-[5px] text-[#e8d5a3] animate-[twinkleFooter_5s_ease-in-out_infinite] opacity-50">✦</div>
        <div className="absolute top-[25%] right-[15%] text-[6px] text-[#a8c4e8] animate-[twinkleFooter_7s_ease-in-out_infinite_2s] opacity-60">✦</div>
        <div className="absolute top-[60%] left-[25%] text-[4px] text-white animate-[twinkleFooter_6s_ease-in-out_infinite_1s] opacity-40">✦</div>
        <div className="absolute bottom-[30%] right-[30%] text-[5px] text-[#e8d5a3] animate-[twinkleFooter_8s_ease-in-out_infinite_3s] opacity-50">✦</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        {/* ============ Marchio + Citazione ============ */}
        <div className="text-center mb-14">
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#f5f0e3] mb-3">
            ViverAI
          </h2>
          <p className="text-xs sm:text-sm text-[#c9a87a] tracking-[0.25em] uppercase font-light mb-6">
            piattaforma educativa del verde
          </p>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-12 h-px bg-[#c9a87a]/40" />
            <span className="text-[#e8a87c] animate-[twinkleFooter_3s_ease-in-out_infinite]">✦</span>
            <div className="w-12 h-px bg-[#c9a87a]/40" />
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#e0dcc8] max-w-md mx-auto leading-relaxed font-light">
            Vivere con cura.
            <br />
            <span className="text-[#c9a87a]">Per Gianluca.</span>
          </p>
        </div>

        {/* ============ Colonne link ============ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14 max-w-5xl mx-auto">
          {/* Colonna 1 — Esplora */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">
              Esplora
            </h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/blog" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Blog & Rivista</Link></li>
              <li><Link href="/calendario" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Calendario del verde</Link></li>
              <li><Link href="/verdescuola" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">VerdeScuola</Link></li>
            </ul>
          </div>

          {/* Colonna 2 — Community */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">
              Community
            </h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/community" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">La community</Link></li>
              <li><Link href="/chi-siamo" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Chi siamo</Link></li>
            </ul>
          </div>

          {/* Colonna 3 — In memoria */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">
              In memoria
            </h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/chi-siamo" className="text-[#f0ebe0] hover:text-[#a8c4e8] transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="text-[#a8c4e8] text-xs group-hover:scale-110 transition-transform">✦</span>
                  Gianluca Corvo
                </Link>
              </li>
              <li className="text-xs text-[#c9a87a]/70 italic pl-5">il nostro BLOB</li>
              <li><Link href="/chi-siamo" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Lascia una dedica</Link></li>
            </ul>
          </div>

          {/* Colonna 4 — Contatti */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">
              Resta in contatto
            </h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/contatti" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Contatti</Link></li>
              <li><Link href="/cookie" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Cookie</Link></li>
              <li><Link href="/privacy" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Privacy</Link></li>
              <li><Link href="/termini" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Termini</Link></li>
            </ul>
          </div>
        </div>

        {/* ============ Separatore decorativo ============ */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent to-[#c9a87a]/30" />
          <span className="text-[#e8a87c] text-lg animate-[twinkleFooter_4s_ease-in-out_infinite]">✦</span>
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-l from-transparent to-[#c9a87a]/30" />
        </div>

        {/* ============ Firma famiglia ============ */}
        <div className="text-center mb-8">
          <p className="text-xs text-[#c9a87a] tracking-[0.25em] uppercase font-light mb-4">
            Fatto a mano con amore per il verde
          </p>
          <p className="font-serif italic text-base text-[#f0ebe0] leading-relaxed">
            Famiglia Corvo · Toia
          </p>
          <p className="text-xs text-[#c9a87a]/70 italic mt-2">
            Emidio · Luana · Sofia · Leo · Nello
          </p>
        </div>

        {/* ============ Copyright ============ */}
        <div className="text-center pt-8 border-t border-[#c9a87a]/15">
          <p className="text-xs text-[#c9a87a]/60 font-light tracking-wider">
            © {new Date().getFullYear()} ViverAI — Tutti i diritti riservati
          </p>
          <p className="text-[10px] text-[#c9a87a]/40 mt-2 italic font-light">
            Una stella più lucente nel buio ci guida in questa avventura
          </p>
        </div>
      </div>

      <style>{`
        @keyframes twinkleFooter {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
    </footer>
  );
}
