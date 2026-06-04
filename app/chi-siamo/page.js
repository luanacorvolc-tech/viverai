'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ─── HEADER (inline, identico all'app) ───────────────────────────────────────
function Header() {
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
          <Link href="/chi-siamo" className="px-2.5 py-[7px] text-[12.5px] font-semibold text-oliva border-b-2 border-oliva">Chi siamo</Link>
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

// ─── FOOTER (identico all'app) ────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a2d22] to-[#0d1a14] text-[#f0ebe0] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a87a]/40 to-transparent" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] text-[5px] text-[#e8d5a3] opacity-50" style={{animation:'twinkleFooter 5s ease-in-out infinite'}}>✦</div>
        <div className="absolute top-[25%] right-[15%] text-[6px] text-[#a8c4e8] opacity-60" style={{animation:'twinkleFooter 7s ease-in-out infinite 2s'}}>✦</div>
        <div className="absolute top-[60%] left-[25%] text-[4px] text-white opacity-40" style={{animation:'twinkleFooter 6s ease-in-out infinite 1s'}}>✦</div>
        <div className="absolute bottom-[30%] right-[30%] text-[5px] text-[#e8d5a3] opacity-50" style={{animation:'twinkleFooter 8s ease-in-out infinite 3s'}}>✦</div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="text-center mb-14">
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#f5f0e3] mb-3">ViverAI</h2>
          <p className="text-xs sm:text-sm text-[#c9a87a] tracking-[0.25em] uppercase font-light mb-6">piattaforma educativa del verde</p>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-12 h-px bg-[#c9a87a]/40" />
            <span className="text-[#e8a87c]" style={{animation:'twinkleFooter 3s ease-in-out infinite'}}>✦</span>
            <div className="w-12 h-px bg-[#c9a87a]/40" />
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#e0dcc8] max-w-md mx-auto leading-relaxed font-light">
            Vivere con cura.<br /><span className="text-[#c9a87a]">Per Gianluca.</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14 max-w-5xl mx-auto">
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">Esplora</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/blog" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Blog & Rivista</Link></li>
              <li><Link href="/calendario" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Calendario del verde</Link></li>
              <li><Link href="/verdescuola" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">VerdeScuola</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">Community</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/community" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">La community</Link></li>
              <li><Link href="/chi-siamo" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Chi siamo</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">In memoria</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/chi-siamo" className="text-[#f0ebe0] hover:text-[#a8c4e8] transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="text-[#a8c4e8] text-xs group-hover:scale-110 transition-transform">✦</span>
                  Gianluca Corvo
                </Link>
              </li>
              <li className="text-xs text-[#c9a87a]/70 italic pl-5">il nostro BLOB</li>
              <li><Link href="/chi-siamo#dediche" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Lascia una dedica</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87a] mb-5 font-medium">Resta in contatto</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/contatti" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Contatti</Link></li>
              <li><Link href="/cookie" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Cookie</Link></li>
              <li><Link href="/privacy" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Privacy</Link></li>
              <li><Link href="/termini" className="text-[#f0ebe0] hover:text-[#e8a87c] transition-colors duration-300">Termini</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent to-[#c9a87a]/30" />
          <span className="text-[#e8a87c] text-lg" style={{animation:'twinkleFooter 4s ease-in-out infinite'}}>✦</span>
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-l from-transparent to-[#c9a87a]/30" />
        </div>
        <div className="text-center mb-8">
          <p className="text-xs text-[#c9a87a] tracking-[0.25em] uppercase font-light mb-4">Fatto a mano con amore per il verde</p>
          <p className="font-serif italic text-base text-[#f0ebe0] leading-relaxed">Famiglia Corvo · Toia</p>
          <p className="text-xs text-[#c9a87a]/70 italic mt-2">Emidio · Luana · Sofia · Leo · Nello</p>
        </div>
        <div className="text-center pt-8 border-t border-[#c9a87a]/15">
          <p className="text-xs text-[#c9a87a]/60 font-light tracking-wider">© {new Date().getFullYear()} ViverAI — Tutti i diritti riservati</p>
          <p className="text-[10px] text-[#c9a87a]/40 mt-2 italic font-light">Una stella più lucente nel buio ci guida in questa avventura</p>
        </div>
      </div>
      <style>{`@keyframes twinkleFooter{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.2)}}`}</style>
    </footer>
  );
}

// ─── SLIDE DATA ───────────────────────────────────────────────────────────────
const slides = [
  {
    tag: 'IL MANIFESTO',
    title: 'Vivere con cura.',
    body: 'Conoscere la natura come si conosce un amante.\nViverAI è una piattaforma educativa del verde — un luogo lento, fatto a mano, dove i saperi della terra incontrano gli strumenti del nostro tempo.',
    bg: '/images/chi-siamo/slide-01-mano-fiori.png',
    align: 'left',
  },
  {
    tag: 'NEL NOME',
    title: 'VIV-er-AI',
    subtitle: 'Nel nome ViverAI si nasconde anche un\'altra parola: vivai.',
    body: 'Il luogo dove tutto comincia — dove un seme diventa piantina, dove la cura quotidiana fa crescere ciò che ami. ViverAI è dedicato a tutti gli appassionati del verde — dal coltivatore esperto al bambino che pianta il suo primo basilico.\nNessuno escluso.',
    bg: '/images/chi-siamo/slide-02-vivaio.png',
    align: 'center',
  },
  {
    tag: 'COSA SIGNIFICA',
    title: 'Nel nome c\'è tutto',
    body: 'Viver-, vivere. Restare nel mondo, abitarlo con presenza, prendersi cura di ciò che ci dona benessere.\n-AI, l\'intelligenza artificiale. Non come una forza che ci allontana dalla natura, ma come uno strumento gentile che ci aiuta a comprenderla meglio.',
    bg: '/images/chi-siamo/slide-03-pineta.png',
    align: 'center',
  },
  {
    tag: 'UNA DEDICA',
    title: 'Una promessa',
    body: 'E poi c\'è una terza lettura, la più intima. ViverAI è anche una promessa: tu vivrai. Un nome che è anche un voto, una dedica, un modo per non lasciare andare.',
    quote: 'Per mio fratello,\nGianluca Corvo\n— il mio caro BLOB —\nViverAI nasce per onorare mio fratello.',
    bg: '/images/chi-siamo/slide-04-stelle.png',
    align: 'center',
    dark: true,
  },
  {
    tag: 'UNA DEDICA',
    title: 'Una promessa',
    body: 'E poi c\'è una terza lettura, la più intima. ViverAI è anche una promessa: tu vivrai. Un nome che è anche un voto, una dedica, un modo per non lasciare andare.',
    quote: 'Per mio fratello,\nGianluca Corvo\n— il mio caro BLOB —\nViverAI nasce per onorare mio fratello.',
    bg: '/images/chi-siamo/slide-05-gianluca.png',
    align: 'center',
    dark: true,
  },
  {
    tag: 'POLVERE DI STELLE',
    title: 'Gianluca Corvo — BLOB',
    body: 'Il suo nome Gianluca Corvo, per tutti noi semplicemente BLOB — Binary Large Object. Un soprannome che porta dentro l\'informatica, l\'informazione, la materia digitale di cui sempre più siamo fatti tutti.\nCredo che lui continui a vivere in un\'altra forma: nell\'esistenza dell\'informazione, nella rete sottile che attraversa il mondo, nella polvere di stelle di cui siamo composti — e a cui un giorno ritorniamo, come la più lucente nel buio.',
    bg: '/images/chi-siamo/slide-06-ciclamini.png',
    align: 'center',
    dark: true,
  },
  {
    tag: 'RICONGIUNGERSI',
    title: 'Tenerlo vicino',
    body: 'Costruire ViverAI è il mio modo di tenerlo vicino. Di dire al mondo che l\'intelligenza artificiale non deve separarci dalla natura, ma può aiutarci a ricongiungerci con essa — come ci si ricongiunge a chi si è amato.',
    bg: '/images/chi-siamo/slide-07-universo.png',
    align: 'left',
  },
  {
    tag: 'CON CURA',
    title: '✦',
    body: 'Questo progetto è stato fondato e curato da\nEmidio Corvo · Luana Corvo · Sofia Toia · Leo Toia · Nello Toia\ncon amore per la natura, per la famiglia, per il mondo — e per quella stella più lucente nel buio che ci guida in questa avventura.',
    closing: 'Se ami il verde come noi, sei già parte di ViverAI.',
    bg: '/images/chi-siamo/slide-08-famiglia.png',
    align: 'center',
    dark: true,
  },
];

// ─── CINEMATIC SLIDER ─────────────────────────────────────────────────────────
function CinematicSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => {
          const next = (prev + 1) % slides.length;
          return next;
        });
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const s = slides[current];
  const alignClass = s.align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background con transizione */}
      {slides.map((sl, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${sl.bg})`,
            opacity: i === current ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* Overlay scuro sfumato */}
      <div className="absolute inset-0 z-10"
        style={{background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)'}}
      />
      <div className="absolute inset-0 z-10"
        style={{background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)'}}
      />

      {/* Contenuto con fade */}
      <div
        className={`absolute inset-0 z-20 flex flex-col justify-center px-12 sm:px-20 lg:px-32 max-w-4xl ${s.align === 'center' ? 'mx-auto w-full' : ''}`}
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <div className={`flex flex-col ${alignClass} gap-4`}>
          {/* Tag */}
          <span
            className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase px-3 py-1 rounded-full mb-2"
            style={{
              background: 'rgba(201,168,122,0.25)',
              border: '1px solid rgba(201,168,122,0.5)',
              color: '#e8d5a3',
              backdropFilter: 'blur(4px)',
              textShadow: '0 1px 8px rgba(0,0,0,0.8)',
            }}
          >
            {s.tag}
          </span>

          {/* Titolo */}
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)'}}
          >
            {s.title}
          </h1>

          {/* Sottotitolo opzionale */}
          {s.subtitle && (
            <p
              className="font-serif italic text-xl sm:text-2xl text-[#e8d5a3] leading-relaxed max-w-2xl"
              style={{textShadow: '0 1px 12px rgba(0,0,0,0.9)'}}
            >
              {s.subtitle}
            </p>
          )}

          {/* Body */}
          <p
            className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl whitespace-pre-line"
            style={{textShadow: '0 1px 10px rgba(0,0,0,0.9)'}}
          >
            {s.body}
          </p>

          {/* Quote */}
          {s.quote && (
            <blockquote
              className="font-serif italic text-lg sm:text-xl text-[#c9a87a] border-l-2 border-[#c9a87a]/60 pl-5 mt-2 whitespace-pre-line"
              style={{textShadow: '0 1px 12px rgba(0,0,0,0.95)'}}
            >
              {s.quote}
            </blockquote>
          )}

          {/* Closing */}
          {s.closing && (
            <p
              className="text-lg sm:text-xl font-medium text-[#e8d5a3] mt-4"
              style={{textShadow: '0 1px 12px rgba(0,0,0,0.9)'}}
            >
              {s.closing}
            </p>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              background: i === current ? '#c9a87a' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>

      {/* Frecce */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
      >
        ›
      </button>
    </section>
  );
}

// ─── SEZIONE DEDICHE ──────────────────────────────────────────────────────────
function SezioneDediche() {
  const [tipoForm, setTipoForm] = useState('laurea');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [ricordo, setRicordo] = useState('');
  const [inviato, setInviato] = useState(false);

  const handleInvia = () => {
    if (!nome || !email || !ricordo) return;
    const soggetto = tipoForm === 'laurea'
      ? 'Dedica per la laurea in Informatica di Gianluca Corvo (BLOB)'
      : 'Una dedica affettuosa per Gianluca (BLOB)';
    const corpo = `Nome: ${nome}\n\n${ricordo}`;
    window.location.href = `mailto:luana@corvoinformatica.it?subject=${encodeURIComponent(soggetto)}&body=${encodeURIComponent(corpo)}`;
    setInviato(true);
  };

  return (
    <section id="dediche" className="bg-[#f7f4ee] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titolo sezione */}
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#5a7a45] font-medium mb-4">In memoria di Gianluca</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2c3e1f] mb-4">Una dedica può diventare un riconoscimento</h2>
          <p className="text-[#5c6b50] max-w-2xl mx-auto leading-relaxed">
            ViverAI raccoglie ricordi di Gianluca per chiedere all'università la <strong>laurea in Informatica post-mortem</strong> in suo onore. Se hai conosciuto BLOB nel suo lavoro — il suo modo di scrivere codice, di risolvere problemi, di insegnare informatica con dedizione — la tua testimonianza è preziosa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Colonna sinistra: testo ── */}
          <div className="space-y-8">
            {/* Box laurea */}
            <div className="bg-white rounded-2xl p-7 border border-[#c9a87a]/25 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎓</span>
                <h3 className="font-serif text-xl text-[#2c3e1f]">Dedica per la laurea</h3>
              </div>
              <p className="text-sm text-[#5c6b50] leading-relaxed mb-5">
                Hai lavorato con lui? L'hai visto insegnare, programmare, risolvere con dedizione? La tua testimonianza professionale può far la differenza.
              </p>
              <a
                href="mailto:luana@corvoinformatica.it?subject=Dedica%20per%20la%20laurea%20in%20Informatica%20di%20Gianluca%20Corvo%20(BLOB)"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3d6b35] hover:text-[#2c5228] transition-colors"
              >
                <span className="text-[#c9a87a]">✦</span>
                Lascia una dedica per la laurea
                <span className="text-[#c9a87a]">✦</span>
              </a>
            </div>

            {/* Box affettuosa */}
            <div className="bg-white rounded-2xl p-7 border border-[#c9a87a]/25 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌸</span>
                <h3 className="font-serif text-xl text-[#2c3e1f]">Dedica affettuosa</h3>
              </div>
              <p className="text-sm text-[#5c6b50] leading-relaxed mb-5">
                Forse non l'hai conosciuto come informatico, ma come amico, vicino, compagno di scuola, di gioco, di vita. Raccontaci di lui — un sorriso, un gesto, una giornata insieme, lascia una foto per mantenere vivo il suo ricordo.
              </p>
              <a
                href="mailto:luana@corvoinformatica.it?subject=Una%20dedica%20affettuosa%20per%20Gianluca%20(BLOB)"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3d6b35] hover:text-[#2c5228] transition-colors"
              >
                <span className="text-[#c9a87a]">✦</span>
                Lascia una dedica affettuosa
                <span className="text-[#c9a87a]">✦</span>
              </a>
            </div>
          </div>

          {/* ── Colonna destra: form ── */}
          <div className="bg-white rounded-2xl p-7 border border-[#ddd8cc] shadow-sm">
            {inviato ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✦</div>
                <h3 className="font-serif text-xl text-[#2c3e1f] mb-2">Grazie di cuore</h3>
                <p className="text-sm text-[#5c6b50]">Il tuo ricordo è prezioso per noi.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c3e1f] mb-2">Il tuo nome *</label>
                  <input
                    type="text"
                    placeholder="Come ti chiami?"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    className="w-full border border-[#d8d2c4] rounded-xl px-4 py-3 text-sm text-[#2c3e1f] placeholder-[#b0a890] outline-none focus:border-[#5a7a45] transition-colors bg-[#faf9f6]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c3e1f] mb-2">La tua email *</label>
                  <input
                    type="email"
                    placeholder="Per eventuali comunicazioni"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-[#d8d2c4] rounded-xl px-4 py-3 text-sm text-[#2c3e1f] placeholder-[#b0a890] outline-none focus:border-[#5a7a45] transition-colors bg-[#faf9f6]"
                  />
                </div>

                {/* Tipo dedica */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c3e1f] mb-3">Tipo di dedica</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-[#2c3e1f]">
                      <input
                        type="radio"
                        name="tipo"
                        value="laurea"
                        checked={tipoForm === 'laurea'}
                        onChange={() => setTipoForm('laurea')}
                        className="accent-[#3d6b35]"
                      />
                      🎓 Per la laurea
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-[#2c3e1f]">
                      <input
                        type="radio"
                        name="tipo"
                        value="affettuosa"
                        checked={tipoForm === 'affettuosa'}
                        onChange={() => setTipoForm('affettuosa')}
                        className="accent-[#3d6b35]"
                      />
                      🌸 Affettuosa
                    </label>
                  </div>
                </div>

                {/* Ricordo */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c3e1f] mb-2">Il tuo ricordo *</label>
                  <textarea
                    rows={5}
                    placeholder="Racconta un momento, un pensiero, un ricordo di Gianluca..."
                    value={ricordo}
                    onChange={e => setRicordo(e.target.value)}
                    className="w-full border border-[#d8d2c4] rounded-xl px-4 py-3 text-sm text-[#2c3e1f] placeholder-[#b0a890] outline-none focus:border-[#5a7a45] transition-colors bg-[#faf9f6] resize-y"
                  />
                </div>

                {/* Foto */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c3e1f] mb-2">Foto (opzionale)</label>
                  <div
                    className="border-2 border-dashed border-[#c9c3b0] rounded-xl px-4 py-6 text-center cursor-pointer hover:border-[#5a7a45] transition-colors bg-[#faf9f6]"
                    onClick={() => document.getElementById('foto-upload').click()}
                  >
                    <div className="text-2xl mb-2">📷</div>
                    <p className="text-xs text-[#8a8272]">Clicca per aggiungere una foto — si ridimensiona automaticamente</p>
                    <input id="foto-upload" type="file" accept="image/*" className="hidden" />
                  </div>
                </div>

                {/* Bottone */}
                <button
                  onClick={handleInvia}
                  className="w-full bg-[#2c5228] hover:bg-[#1f3d1c] text-white font-semibold text-sm py-4 rounded-xl transition-colors"
                >
                  ✦ Invia la tua dedica ✦
                </button>

                <p className="text-center text-xs text-[#8a8272]">Ogni dedica viene approvata prima di apparire nella galleria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DONAZIONI ────────────────────────────────────────────────────────────────
const donazioni = [
  {
    emoji: '🐾',
    titolo: 'Per gli animali',
    testo: 'In memoria di Nanetta, la gatta che lui chiamava la sua bambina, e di tutti i felini che cercano una mano gentile.',
    border: '#3d6b35',
    hover: '#2c5228',
    link: 'https://www.enpa.it',
  },
  {
    emoji: '🌲',
    titolo: 'Per le piante',
    testo: 'Per la pineta di Castel Fusano — dove BLOB è cresciuto con gli amici "del ponte" — e per ogni albero che il mondo non vuole perdere.',
    border: '#4a8040',
    hover: '#3d6b35',
    link: 'https://www.wwf.it',
  },
  {
    emoji: '💚',
    titolo: 'Per chi soffre d\'ansia',
    testo: 'Gianluca conviveva con gli attacchi di panico. Un suo carissimo amico, "Devil" — a cui va un grazie di cuore — è stato per lui un Angelo che lo ha aiutato a guarire da bambino.',
    border: '#5a9448',
    hover: '#4a8040',
    link: 'https://www.progettoansia.com',
  },
  {
    emoji: '🌿',
    titolo: 'A ViverAI',
    testo: 'Perché questa piattaforma resti gratuita per tutti — educazione del verde accessibile a chiunque voglia vivere con più cura.',
    border: '#c9a87a',
    hover: '#b8935a',
    link: 'mailto:luana@corvoinformatica.it?subject=Donazione%20a%20ViverAI',
    terra: true,
  },
];

function SezioneDonazioniInSuoNome() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2c3e1f] mb-3">In suo nome</h2>
          <p className="font-serif italic text-[#7a8c6a]">Dei piccoli gesti per il mondo</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {donazioni.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: d.terra ? '#fdf8f2' : '#f2f6f0',
                border: `2px solid ${d.border}`,
              }}
            >
              <div className="text-3xl">{d.emoji}</div>
              <h3
                className="font-semibold text-base"
                style={{color: d.border}}
              >
                {d.titolo}
              </h3>
              <p className="text-sm text-[#4a5540] leading-relaxed flex-1">{d.testo}</p>
              <a
                href={d.link}
                className="text-sm font-bold underline underline-offset-4 transition-colors mt-2 inline-block"
                style={{color: d.border}}
                target={d.link.startsWith('http') ? '_blank' : undefined}
                rel={d.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                Dona →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ChiSiamo() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        <CinematicSlider />
        <SezioneDediche />
        <SezioneDonazioniInSuoNome />
      </main>
    </>
  );
}
