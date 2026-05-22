'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[900] border-b border-oliva-15 shadow-[0_1px_20px_rgba(44,42,36,0.07)]">
      <div className="bg-oliva px-8 py-[5px] flex items-center justify-between flex-wrap gap-1.5">
        <div className="flex items-center gap-3.5">
          <a href="#" className="text-[11px] text-white/60 hover:text-white">🔍 Ricerca AI</a>
          <span className="text-white/20 text-[10px]">|</span>
          <a href="#" className="text-[11px] text-white/60 hover:text-white">❤️ Preferiti</a>
          <span className="text-white/20 text-[10px]">|</span>
          <a href="#" className="text-[11px] text-white/60 hover:text-white">🛒 Shop Green</a>
          <span className="text-white/20 text-[10px]">|</span>
          <a href="#" className="text-[11px] text-white/60 hover:text-white">📍 Mappa Verde</a>
          <span className="text-white/20 text-[10px]">|</span>
          <Link href="/calendario" className="text-[11px] text-white/60 hover:text-white">📅 Calendario</Link>
        </div>
        <div className="flex gap-1">
          <span className="text-[10px] px-[9px] py-[3px] rounded-full border border-white/40 text-white bg-white/20">🇮🇹 IT</span>
          <span className="text-[10px] px-[9px] py-[3px] rounded-full border border-white/20 text-white/60">🇬🇧 EN</span>
          <span className="text-[10px] px-[9px] py-[3px] rounded-full border border-white/20 text-white/60">🇫🇷 FR</span>
        </div>
      </div>
      <div className="flex items-center h-[58px] px-8 gap-2 bg-cream">
        <Link href="/" className="flex items-center gap-[9px] flex-shrink-0 mr-2">
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
        <nav className="hidden lg:flex items-center gap-[1px] flex-1 ml-4">
          <Link href="/blog" className="px-2.5 py-[7px] text-[12.5px] text-ink-med rounded hover:text-oliva hover:bg-oliva-10">Blog</Link>
          <Link href="/calendario" className="px-2.5 py-[7px] text-[12.5px] text-ink-med rounded hover:text-oliva hover:bg-oliva-10">Calendario</Link>
          <Link href="/community" className="px-2.5 py-[7px] text-[12.5px] text-ink-med rounded hover:text-oliva hover:bg-oliva-10">Community</Link>
          <Link href="/verdescuola" className="px-2.5 py-[7px] text-[12.5px] text-ink-med rounded hover:text-oliva hover:bg-oliva-10">VerdeScuola</Link>
          <Link href="/memorie" className="px-2.5 py-[7px] text-[12.5px] text-ink-med rounded hover:text-oliva hover:bg-oliva-10">Memorie</Link>
          <Link href="/contatti" className="px-2.5 py-[7px] text-[12.5px] text-ink-med rounded hover:text-oliva hover:bg-oliva-10">Contatti</Link>
        </nav>
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
          <button className="border border-oliva-25 text-ink-med text-xs font-medium px-[14px] py-[7px] rounded-full hover:border-oliva hover:text-oliva">Accedi</button>
          <button className="bg-oliva-med text-white text-xs font-semibold px-[18px] py-[8px] rounded-full hover:bg-oliva">🌿 Iscriviti gratis</button>
        </div>
      </div>
    </header>
  );
}