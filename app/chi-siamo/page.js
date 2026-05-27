"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Le 5 slide del manifesto
const slides = [
  {
    id: 1,
    image: "/images/slide-1-mano-fiori.png",
    alt: "Una mano sfiora delicatamente fiori bianchi tra le foglie verdi bagnate di rugiada",
    eyebrow: "Il manifesto",
    title: ["Vivere", "con cura."],
    subtitle: ["Conoscere la natura", "come si conosce un", "amante."],
    body: "ViverAI è una piattaforma educativa del verde — un luogo lento, fatto a mano, dove i saperi della terra incontrano gli strumenti del nostro tempo.",
    veil: "from-[#0a1830]/40 via-[#0a1830]/35 to-[#0a1830]/70",
  },
  {
    id: 2,
    image: "/images/slide-2-pineta.png",
    alt: "Persone in meditazione nella pineta al tramonto, mentre altre piantano nuovi alberi",
    eyebrow: "Cosa significa",
    title: ["Nel nome", "c'è tutto"],
    paragraphs: [
      { intro: "Viver-", text: ", vivere. Restare nel mondo, abitarlo con presenza, prendersi cura di ciò che ci dona benessere." },
      { intro: "-AI", text: ", l'intelligenza artificiale. Non come una forza che ci allontana dalla natura, ma come uno strumento gentile che ci aiuta a comprenderla meglio." },
    ],
    veil: "from-[#0a1830]/50 via-[#0a1830]/40 to-[#0a1830]/75",
  },
  {
    id: 3,
    image: "/images/slide-3-stella-blob.png",
    alt: "La stella più lucente nel cielo notturno — la stella di Gianluca, BLOB",
    eyebrow: "Una dedica",
    intro: "E poi c'è una terza lettura, la più intima. ViverAI è anche una promessa: tu vivrai. Un nome che è anche un voto, una dedica, un modo per non lasciare andare.",
    title: ["Per mio fratello,"],
    nameHighlight: "Gianluca Corvo",
    subtitle: "— il mio caro BLOB —",
    body: "ViverAI nasce per onorare mio fratello.",
    veil: "from-[#050d1c]/40 via-[#050d1c]/45 to-[#050d1c]/75",
    showBlinkingStar: true,
  },
  {
    id: 4,
    image: "/images/slide-4-gianluca.png",
    alt: "Ritratto di Gianluca Corvo che si dissolve in polvere di stelle e codici binari, sotto la stella più lucente nel buio",
    eyebrow: "Polvere di stelle",
    body1: "Il suo nome Gianluca Corvo, per tutti noi semplicemente BLOB — Binary Large Object. Un soprannome che porta dentro l'informatica, l'informazione, la materia digitale di cui sempre più siamo fatti tutti.",
    body2: "Credo che lui continui a vivere in un'altra forma: nell'esistenza dell'informazione, nella rete sottile che attraversa il mondo, nella polvere di stelle di cui siamo composti — e a cui un giorno ritorniamo, come la più lucente nel buio.",
    veil: "from-[#050d1c]/55 via-[#050d1c]/50 to-[#050d1c]/75",
  },
  {
    id: 5,
    image: "/images/slide-5-stella-foresta.png",
    alt: "La stella più lucente nel buio sopra una foresta di more selvatiche e felci, simbolo della ricongiunzione tra natura e cielo",
    eyebrow: "Ricongiungersi",
    body: "Costruire ViverAI è il mio modo di tenerlo vicino. Di dire al mondo che l'intelligenza artificiale non deve separarci dalla natura, ma può aiutarci a ricongiungerci con essa — come ci si ricongiunge a chi si è amato.",
    inviteText: ["Se anche tu hai conosciuto Gianluca,", "o vuoi semplicemente lasciargli una dedica,"],
    ctaText: "Lascia una dedica",
    ctaSubtitle: "vai alla pagina Memorie",
    ctaHref: "/memorie",
    veil: "from-[#050d1c]/50 via-[#050d1c]/45 to-[#0a1830]/70",
  },
];

const SLIDE_DURATION = 9000; // 9 secondi per slide (abbastanza per leggere)

export default function ChiSiamoPage() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (i) => setCurrent(i);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="bg-[#0a1830] text-white overflow-hidden">
      {/* ============ SLIDER A SCHERMO INTERO ============ */}
      <section
        className="relative w-full h-[calc(100vh-80px)] min-h-[640px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Manifesto ViverAI — Carosello"
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Immagine sfondo con slow zoom */}
            <div className={`absolute inset-0 ${index === current ? "motion-safe:animate-[slowZoom_15s_ease-out_forwards]" : ""}`}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={92}
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Velo gradient per leggibilità */}
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.veil}`} />

            {/* Stella lampeggiante grande (solo slide 3 - Gianluca) */}
            {slide.showBlinkingStar && (
              <div className="absolute top-[14%] right-[14%] z-10 pointer-events-none">
                <div className="relative">
                  <div className="text-5xl md:text-6xl text-white motion-safe:animate-[bigTwinkle_2s_ease-in-out_infinite]" style={{ textShadow: "0 0 24px rgba(255, 255, 255, 0.9), 0 0 48px rgba(168, 196, 232, 0.6)" }}>
                    ✦
                  </div>
                  <div className="absolute inset-0 text-5xl md:text-6xl text-[#a8c4e8] blur-lg motion-safe:animate-[bigTwinkle_2s_ease-in-out_infinite] opacity-70">
                    ✦
                  </div>
                </div>
              </div>
            )}

            {/* Stelle decorative pulsanti (tutte le slide notturne) */}
            {slide.id !== 1 && slide.id !== 2 && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[15%] text-[6px] text-[#e8d5a3] motion-safe:animate-[twinkle_4s_ease-in-out_infinite] opacity-80">✦</div>
                <div className="absolute top-[30%] left-[8%] text-[5px] text-white motion-safe:animate-[twinkle_5s_ease-in-out_infinite_1s] opacity-70">✦</div>
                <div className="absolute top-[60%] right-[10%] text-[7px] text-[#a8c4e8] motion-safe:animate-[twinkle_6s_ease-in-out_infinite_2s] opacity-75">✦</div>
                <div className="absolute top-[75%] left-[12%] text-[4px] text-white motion-safe:animate-[twinkle_5s_ease-in-out_infinite_3s] opacity-60">✦</div>
                <div className="absolute top-[40%] right-[28%] text-[5px] text-[#e8d5a3] motion-safe:animate-[twinkle_7s_ease-in-out_infinite_1.5s] opacity-70">✦</div>
              </div>
            )}

            {/* CONTENUTO SLIDE */}
            <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-12">
              <div
                className={`text-center max-w-3xl ${
                  index === current ? "motion-safe:animate-[fadeUp_1.4s_ease-out_0.5s_both]" : ""
                }`}
              >
                {/* SLIDE 1 — Vivere con cura */}
                {slide.id === 1 && (
                  <>
                    <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#e8d5a3] mb-8 font-light">
                      {slide.eyebrow}
                    </p>
                    <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
                      {slide.title[0]}{" "}
                      <em className="text-[#e8a87c] font-serif italic">{slide.title[1]}</em>
                    </h1>
                    <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] italic font-light mb-10">
                      {slide.subtitle[0]}
                      <br />
                      {slide.subtitle[1]}{" "}
                      <em className="text-[#e8a87c] not-italic font-serif italic">{slide.subtitle[2]}</em>
                    </h2>
                    <p className="text-[#e8e0d0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
                      {slide.body}
                    </p>
                  </>
                )}

                {/* SLIDE 2 — Nel nome c'è tutto */}
                {slide.id === 2 && (
                  <>
                    <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#e8d5a3] mb-6 font-light">
                      {slide.eyebrow}
                    </p>
                    <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-10">
                      {slide.title[0]}{" "}
                      <em className="text-[#e8a87c] font-serif italic">{slide.title[1]}</em>
                    </h2>
                    <div className="space-y-5 text-base sm:text-lg md:text-xl leading-[1.8] text-[#f0ebe0] font-light max-w-2xl mx-auto">
                      {slide.paragraphs.map((para, i) => (
                        <p key={i}>
                          <span className="font-serif italic text-[#e8a87c]">{para.intro}</span>
                          {para.text}
                        </p>
                      ))}
                    </div>
                  </>
                )}

                {/* SLIDE 3 — Per mio fratello Gianluca */}
                {slide.id === 3 && (
                  <>
                    <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#c9a87a] mb-6 font-light">
                      {slide.eyebrow}
                    </p>
                    <p className="text-sm sm:text-base text-[#e0dcc8] leading-relaxed font-light italic mb-10 max-w-xl mx-auto">
                      {slide.intro}
                    </p>
                    <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight">
                      {slide.title[0]}
                    </h2>
                    <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#a8c4e8] mb-2 font-light">
                      {slide.nameHighlight}
                    </p>
                    <p className="font-serif italic text-base sm:text-lg text-[#c9a87a] mb-10 font-light">
                      {slide.subtitle}
                    </p>
                    <p className="text-base sm:text-lg text-[#e0dcc8] font-light max-w-md mx-auto">
                      {slide.body}
                    </p>
                  </>
                )}

                {/* SLIDE 4 — Ritratto Gianluca */}
                {slide.id === 4 && (
                  <>
                    <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#c9a87a] mb-8 font-light">
                      {slide.eyebrow}
                    </p>
                    <div className="space-y-6 text-base sm:text-lg leading-[1.85] text-[#f0ebe0] font-light max-w-2xl mx-auto">
                      <p>
                        Il suo nome <em className="font-serif italic text-[#c9a87a] not-italic" style={{ fontStyle: "italic" }}>Gianluca Corvo</em>, per tutti noi semplicemente <em className="font-serif italic text-[#e8a87c]">BLOB</em> — <em className="text-[#a8c4e8]">Binary Large Object</em>. Un soprannome che porta dentro l'informatica, l'informazione, la materia digitale di cui sempre più siamo fatti tutti.
                      </p>
                      <p>
                        Credo che lui continui a vivere in un'altra forma: nell'esistenza dell'informazione, nella rete sottile che attraversa il mondo, nella <em className="font-serif italic text-[#c9a87a]">polvere di stelle</em> di cui siamo composti — e a cui un giorno ritorniamo, come la più lucente nel buio.
                      </p>
                    </div>
                  </>
                )}

                {/* SLIDE 5 — Invito Memorie */}
                {slide.id === 5 && (
                  <>
                    <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#c9a87a] mb-8 font-light">
                      {slide.eyebrow}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-[1.85] text-[#f0ebe0] font-light max-w-2xl mx-auto mb-12">
                      Costruire ViverAI è il mio modo di tenerlo vicino. Di dire al mondo che l'intelligenza artificiale non deve separarci dalla natura, ma può aiutarci a <em className="font-serif italic text-[#c9a87a]">ricongiungerci</em> con essa — come ci si ricongiunge a chi si è amato.
                    </p>
                    <div className="border-t border-[#c9a87a]/30 pt-8 max-w-xl mx-auto">
                      <p className="text-sm sm:text-base text-[#e0dcc8] font-light italic leading-relaxed mb-6">
                        {slide.inviteText[0]}
                        <br />
                        {slide.inviteText[1]}
                      </p>
                      <Link
                        href={slide.ctaHref}
                        className="inline-flex items-center gap-3 px-8 py-4 border border-[#c9a87a]/60 text-[#e8d5a3] text-sm tracking-[0.15em] uppercase hover:bg-[#c9a87a]/15 hover:border-[#e8a87c] hover:text-[#e8a87c] transition-all duration-500 rounded-sm group"
                      >
                        <span className="text-[#e8a87c] group-hover:scale-110 transition-transform duration-500">✦</span>
                        <span>{slide.ctaText}</span>
                        <span className="text-[#e8a87c] group-hover:scale-110 transition-transform duration-500">✦</span>
                      </Link>
                      <p className="mt-4 text-xs text-[#c9a87a]/70 font-light tracking-wider">
                        {slide.ctaSubtitle}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ============ CONTROLLI CAROSELLO ============ */}

        {/* Frecce avanti/indietro */}
        <button
          onClick={prev}
          aria-label="Slide precedente"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:bg-black/40 hover:text-white transition-all duration-300 border border-white/10"
        >
          <span className="text-xl">‹</span>
        </button>
        <button
          onClick={next}
          aria-label="Slide successiva"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:bg-black/40 hover:text-white transition-all duration-300 border border-white/10"
        >
          <span className="text-xl">›</span>
        </button>

        {/* Indicatori (puntini) + progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Vai alla slide ${i + 1}`}
              className="group relative h-2 flex items-center"
            >
              <div
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? "w-12 bg-[#e8a87c]"
                    : "w-2 bg-white/40 group-hover:bg-white/70"
                } h-2`}
              />
            </button>
          ))}
        </div>

        {/* Contatore slide */}
        <div className="absolute top-6 right-6 z-30 text-[10px] tracking-[0.3em] text-white/60 font-light">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </section>

      {/* ============ Animazioni CSS ============ */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.08); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
        @keyframes bigTwinkle {
          0%, 100% { opacity: 1; transform: scale(1); filter: brightness(1); }
          50% { opacity: 0.7; transform: scale(1.2); filter: brightness(1.5); }
        }
      `}</style>
    </main>
  );
}
