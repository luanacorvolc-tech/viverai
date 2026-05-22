'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

const slides = [
  {
    badge: "Articolo della settimana",
    title: "Vivere bene,",
    titleEm: "naturalmente",
    description: "Storie, consigli e ispirazione per uno stile di vita più consapevole. Dalla terra alla tavola, dal giardino all'anima.",
    cta1: "Esplora il calendario",
    cta1Link: "/calendario",
    cta2: "Scopri la community",
    cta2Link: "/community",
    image: "/slide-1.png"
  },
  {
    badge: "Calendario interattivo",
    title: "163 piante,",
    titleEm: "un giardino tuo",
    description: "Scopri quando seminare, quando potare, quando raccogliere. Tutto il sapere contadino digitalizzato per te.",
    cta1: "Apri il calendario",
    cta1Link: "/calendario",
    cta2: "Visita il catalogo",
    cta2Link: "/calendario",
    image: "/slide-2.png"
  },
  {
    badge: "Community",
    title: "Condividi il tuo",
    titleEm: "verde",
    description: "Una community di pollici verdi che si aiutano a vicenda. Foto, consigli, storie. Il giardinaggio è più bello insieme.",
    cta1: "Unisciti alla community",
    cta1Link: "/community",
    cta2: "Scopri i progetti",
    cta2Link: "/community",
    image: "/slide-3.png"
  },
  {
    badge: "In memoria",
    title: "Le radici di",
    titleEm: "Gianluca",
    description: "Un progetto nato da una storia familiare. Dediche, ricordi, e il giardino delle anime — uno spazio per chi non c'è più.",
    cta1: "Leggi la storia",
    cta1Link: "/memorie",
    cta2: "Lascia una dedica",
    cta2Link: "/memorie",
    image: "/slide-4.png"
  }
];

const articoli = [
  { categoria: "Giardinaggio", emoji: "🌹", titolo: "Le rose antiche: bellezza e resistenza", estratto: "Cinque varietà che fioriscono anche con poca cura, perfette per chi inizia.", autore: "Maria Rossi", tempo: "5 min" },
  { categoria: "Coltivazione", emoji: "🌱", titolo: "Il calendario lunare dell'orto", estratto: "Quando seminare, trapiantare, raccogliere seguendo le fasi della luna.", autore: "Carlo Bianchi", tempo: "7 min" },
  { categoria: "AI & Agritech", emoji: "🤖", titolo: "L'agricoltura del futuro è già qui", estratto: "Sensori, droni, intelligenza artificiale: come la tecnologia sta cambiando l'agricoltura.", autore: "Elena Verdi", tempo: "10 min" }
];

const aree = [
  { emoji: "📰", titolo: "Blog & Rivista", descrizione: "Articoli, storie, approfondimenti dal mondo del verde", link: "/blog" },
  { emoji: "📅", titolo: "Calendario", descrizione: "163 piante, semina, potatura, raccolto", link: "/calendario" },
  { emoji: "👥", titolo: "Community", descrizione: "Domande, foto, gruppi tematici per pollici verdi", link: "/community" },
  { emoji: "🎓", titolo: "VerdeScuola", descrizione: "Orti scolastici, FarmBot, didattica per le scuole", link: "/verdescuola" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 9000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev >= 100 ? 100 : prev + (100 / 90));
    }, 100);
    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <>
      <Header />

      <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 96px)', minHeight: '560px' }}>
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={currentSlide}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,5,1,0.85) 0%, rgba(2,5,1,0.25) 50%, transparent 80%), linear-gradient(to right, rgba(2,5,1,0.6) 0%, rgba(2,5,1,0.1) 55%, transparent 85%)' }} />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-16">
          <div className="max-w-2xl" key={`content-${currentSlide}`} style={{ animation: 'slideUp 0.8s ease-out' }}>
            <span className="inline-block bg-terra text-white text-[11px] font-medium tracking-[0.16em] uppercase px-3 py-1 mb-4">{slide.badge}</span>
            <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-4 tracking-tight">
              {slide.title}<br /><em className="italic" style={{ color: '#d4c48a' }}>{slide.titleEm}</em>
            </h1>
            <p className="text-white/75 text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl">{slide.description}</p>
            <div className="flex max-w-xl bg-white/95 rounded-full overflow-hidden shadow-[0_10px_44px_rgba(0,0,0,0.25)] mb-6">
              <input type="text" placeholder="Chiedi all'AI: che pianta scegliere per..." className="flex-1 border-none px-5 py-3 text-sm bg-transparent outline-none" style={{ color: '#2c2a24' }} />
              <button className="bg-oliva-med text-white px-5 py-3 text-sm font-medium hover:bg-oliva transition-colors">Cerca</button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={slide.cta1Link} className="bg-white text-oliva px-6 py-3 rounded-full text-sm font-semibold hover:bg-cream transition-colors">{slide.cta1}</Link>
              <Link href={slide.cta2Link} className="border-[1.5px] border-white/50 text-white px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-colors">{slide.cta2}</Link>
            </div>
          </div>
        </div>
        <div className="absolute top-6 right-8 flex items-baseline gap-1 text-white/60 text-xs tracking-[0.1em] z-10">
          <span className="font-serif text-2xl text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span>/ {String(slides.length).padStart(2, '0')}</span>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => { setCurrentSlide(i); setProgress(0); }} className="rounded-full transition-all" style={{ width: i === currentSlide ? '32px' : '8px', height: '8px', background: i === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.4)' }} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15 z-10">
          <div className="h-full" style={{ width: `${progress}%`, background: '#b85c38', transition: 'width 0.1s linear' }} />
        </div>
      </section>

      <section className="bg-cream py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="inline-block bg-oliva-10 text-oliva text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-3">Blog & Rivista</span>
              <h2 className="font-serif text-5xl text-oliva font-light leading-tight">Ultimi <em className="italic text-terra">articoli</em></h2>
            </div>
            <Link href="/blog" className="text-oliva text-sm font-medium hover:text-terra transition-colors flex items-center gap-2">
              Vedi tutti i recenti <span className="text-base">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articoli.map((articolo, i) => (
              <Link key={i} href="/blog" className="bg-white rounded-2xl overflow-hidden border border-oliva-15 hover:shadow-[0_10px_44px_rgba(44,42,36,0.12)] transition-all cursor-pointer group block">
                <div className="aspect-[4/3] bg-gradient-to-br from-oliva-med to-oliva flex items-center justify-center text-8xl">
                  {articolo.emoji}
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra">{articolo.categoria}</span>
                  <h3 className="font-serif text-2xl text-oliva font-semibold mt-2 mb-3 leading-snug group-hover:text-terra transition-colors">{articolo.titolo}</h3>
                  <p className="text-ink-med text-sm leading-relaxed mb-4">{articolo.estratto}</p>
                  <div className="flex items-center justify-between text-xs text-ink-light pt-4 border-t border-oliva-15">
                    <span>{articolo.autore}</span>
                    <span>{articolo.tempo} di lettura</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-terra-10 text-terra text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-3">Esplora</span>
            <h2 className="font-serif text-5xl text-oliva font-light leading-tight">Tutto il <em className="italic text-terra">verde</em>, in un posto solo</h2>
            <p className="text-ink-med text-lg font-light mt-4 max-w-2xl mx-auto">Quattro mondi che si intrecciano: leggere, coltivare, condividere, imparare.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aree.map((area, i) => (
              <Link key={i} href={area.link} className="bg-white rounded-2xl p-8 text-center border border-oliva-15 hover:-translate-y-1 hover:shadow-[0_10px_44px_rgba(44,42,36,0.12)] transition-all group block">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform inline-block">{area.emoji}</div>
                <h3 className="font-serif text-2xl text-oliva font-semibold mb-3">{area.titolo}</h3>
                <p className="text-ink-med text-sm leading-relaxed">{area.descrizione}</p>
                <span className="inline-block mt-5 text-terra text-sm font-medium group-hover:translate-x-1 transition-transform">Scopri →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-oliva py-24 px-8 overflow-hidden">
        <div className="absolute top-10 right-10 text-[18rem] opacity-[0.05] select-none pointer-events-none">🌿</div>
        <div className="absolute -bottom-10 -left-10 text-[15rem] opacity-[0.05] select-none pointer-events-none">🌻</div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-terra text-white text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">Newsletter</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight mb-4">
            Una storia, un consiglio,<br />
            <em className="italic" style={{ color: '#d4c48a' }}>ogni domenica mattina</em>
          </h2>
          <p className="text-white/70 text-base md:text-lg font-light mb-8 leading-relaxed">
            Iscriviti alla newsletter settimanale di ViverAI. Niente spam, solo bellezza, idee e ispirazione dal mondo del verde.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="La tua email" className="flex-1 px-5 py-3 rounded-full bg-white text-ink text-sm outline-none focus:ring-2 focus:ring-terra" />
            <button className="bg-terra text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-terra-light transition-colors">Iscriviti</button>
          </div>
          <p className="text-white/40 text-xs mt-4">🔒 Rispettiamo la tua privacy. Disiscriviti quando vuoi.</p>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}