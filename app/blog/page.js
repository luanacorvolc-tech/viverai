/**
 * ╔════════════════════════════════════════════════════════════════════════╗
 * ║                                                                        ║
 * ║   ViverAI — Pagina "Chi siamo"                                        ║
 * ║   In memoria di Gianluca Corvo (BLOB)                                 ║
 * ║                                                                        ║
 * ║   Curata da Luana Corvo · per la famiglia Corvo-Toia                  ║
 * ║                                                                        ║
 * ║   "Vivere con cura. Conoscere la natura come si conosce un amante."   ║
 * ║                                                                        ║
 * ╚════════════════════════════════════════════════════════════════════════╝
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ────────────────────────────────────────────────────────────────────────
 * CONFIGURAZIONE — TUTTO IL CONTENUTO DELLE 8 SLIDE
 * ──────────────────────────────────────────────────────────────────────── */

// Durata di ogni slide calcolata in base al numero di parole del testo:
// circa 250 ms per parola + 3 sec di "respiro" dopo il fade-up del testo.
const SLIDES = [
  {
    id: 1,
    duration: 6000, // 6 sec — solo immagine
    image: "/images/slide-1-mano-fiori.png",
    alt: "Una mano sfiora delicatamente fiori bianchi luminosi tra le foglie verdi notturne",
    type: "image-only",
  },
  {
    id: 2,
    duration: 10000, // 10 sec
    image: "/images/slide-1-mano-fiori.png",
    alt: "Una mano sfiora delicatamente fiori bianchi luminosi",
    type: "manifesto",
    eyebrow: "Il manifesto",
    titleStart: "Vivere",
    titleEm: "con cura.",
    subtitleStart: "Conoscere la natura",
    subtitleMid: "come si conosce un",
    subtitleEm: "amante.",
    body: "ViverAI è una piattaforma educativa del verde — un luogo lento, fatto a mano, dove i saperi della terra incontrano gli strumenti del nostro tempo.",
  },
  {
    id: 3,
    duration: 13000, // 13 sec — molto testo
    image: "/images/slide-3-vivaio.png",
    alt: "Due persone sorridenti tra le piante di un vivaio illuminato dalla luce del tramonto",
    type: "vivai",
    eyebrow: "Nel nome",
    title: "VIV-er-AI",
    intro: "Nel nome ViverAI si nasconde anche un'altra parola:",
    highlight: "vivai.",
    body: "Il luogo dove tutto comincia — dove un seme diventa piantina, dove la cura quotidiana fa crescere ciò che ami. ViverAI è dedicato a tutti gli appassionati del verde — dal coltivatore esperto al bambino che pianta il suo primo basilico.",
    closing: "Nessuno escluso.",
  },
  {
    id: 4,
    duration: 11000, // 11 sec
    image: "/images/slide-4-pineta.png",
    alt: "Persone in meditazione nella pineta al tramonto, mentre altre piantano nuovi alberi",
    type: "name-meaning",
    eyebrow: "Cosa significa",
    titleStart: "Nel nome",
    titleEm: "c'è tutto",
    paragraphs: [
      {
        intro: "Viver-",
        text: ", vivere. Restare nel mondo, abitarlo con presenza, prendersi cura di ciò che ci dona benessere.",
      },
      {
        intro: "-AI",
        text: ", l'intelligenza artificiale. Non come una forza che ci allontana dalla natura, ma come uno strumento gentile che ci aiuta a comprenderla meglio.",
      },
    ],
  },
  {
    id: 5,
    duration: 11000, // 11 sec
    image: "/images/slide-5-stella-blob.png",
    alt: "La stella più lucente nel cielo notturno — la stella di Gianluca, BLOB",
    type: "dedication",
    eyebrow: "Una dedica",
    intro:
      "E poi c'è una terza lettura, la più intima. ViverAI è anche una promessa: tu vivrai. Un nome che è anche un voto, una dedica, un modo per non lasciare andare.",
    title: "Per mio fratello,",
    nameHighlight: "Gianluca Corvo",
    subtitle: "— il mio caro BLOB —",
    body: "ViverAI nasce per onorare mio fratello.",
    showBlinkingStar: true,
  },
  {
    id: 6,
    duration: 13000, // 13 sec — molto testo
    image: "/images/slide-6-gianluca.png",
    alt: "Ritratto di Gianluca Corvo che si dissolve in polvere di stelle e codici binari, sotto la stella più lucente nel buio",
    type: "stardust",
    eyebrow: "Polvere di stelle",
  },
  {
    id: 7,
    duration: 11000, // 11 sec
    image: "/images/slide-7-pineta-ciclamini.png",
    alt: "Pineta al tramonto con prato di ciclamini rosa e bianchi — la pineta di Castel Fusano",
    type: "reunion",
    eyebrow: "Ricongiungersi",
    body: "Costruire ViverAI è il mio modo di tenerlo vicino. Di dire al mondo che l'intelligenza artificiale non deve separarci dalla natura, ma può aiutarci a ricongiungerci con essa — come ci si ricongiunge a chi si è amato.",
  },
  {
    id: 8,
    duration: 10000, // 10 sec
    image: "/images/slide-8-universo-blob.png",
    alt: "Universo con BLOB al centro come sole di codice binario, attorniato dai pianeti e dalle galassie",
    type: "family",
    eyebrow: "Con cura",
    intro: "Questo progetto è stato fondato e curato da",
    names: "Emidio Corvo · Luana Corvo · Sofia Toia · Leo Toia · Nello Toia",
    body: "con amore per la natura, per la famiglia, per il mondo — e per quella stella più lucente nel buio che ci guida in questa avventura.",
    closingLine1: "Se ami il verde come noi,",
    closingLine2: "sei già parte di ViverAI.",
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * COMPONENTE PRINCIPALE
 * ──────────────────────────────────────────────────────────────────────── */

export default function ChiSiamoPage() {
  // ── Stato del carosello
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ── Popup donazioni
  const [donationPopupOpen, setDonationPopupOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);

  /* ── Navigazione del carosello ────────────────────────────────────── */

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  /* ── Auto-play: scorre alla slide successiva dopo `duration` ms ───── */

  useEffect(() => {
    if (isPaused) return;

    const currentDuration = SLIDES[currentSlide].duration;
    const timer = setTimeout(goToNext, currentDuration);

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, goToNext]);

  /* ── Gestione popup donazioni ─────────────────────────────────────── */

  const openDonationPopup = (cause) => {
    setSelectedCause(cause);
    setDonationPopupOpen(true);
  };

  const closeDonationPopup = () => {
    setDonationPopupOpen(false);
    setTimeout(() => setSelectedCause(null), 300); // delay per chiudere bene la animazione
  };

  /* ── RENDER ───────────────────────────────────────────────────────── */

  return (
    <main className="bg-[#faf7f1] text-[#2a3a2a]">
      {/* L'Header e il Footer del sito sono caricati automaticamente
          dal layout.js globale. Qui non li ripetiamo. */}

      {/* ═══════════════════════════════════════════════════════════════
          CAROSELLO — Le 8 slide del manifesto
          ═══════════════════════════════════════════════════════════════ */}

      <section
        className="relative w-full h-[calc(100vh-180px)] min-h-[600px] overflow-hidden bg-[#0a1830]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Manifesto ViverAI — Carosello"
      >
        {SLIDES.map((slide, index) => (
          <CarouselSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}

        {/* Controlli: frecce avanti/indietro */}
        <ArrowButton direction="prev" onClick={goToPrev} />
        <ArrowButton direction="next" onClick={goToNext} />

        {/* Indicatori puntini */}
        <SlideIndicators
          count={SLIDES.length}
          current={currentSlide}
          onSelect={goToSlide}
        />

        {/* Contatore slide */}
        <div className="absolute top-6 right-6 z-30 text-[10px] tracking-[0.3em] text-white/60 font-light">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(SLIDES.length).padStart(2, "0")}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEZIONE — LASCIA UN PENSIERO PER GIANLUCA
          ═══════════════════════════════════════════════════════════════ */}

      <section className="py-24 sm:py-32 px-6 bg-[#faf7f1]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
            Per ricordarlo
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-10 text-[#2a3a2a]">
            Lascia un <em className="text-[#c87a3f] font-serif italic">pensiero</em> per Gianluca
          </h2>

          <div className="space-y-6 text-lg leading-[1.85] text-[#3a4a3a] font-light max-w-2xl mx-auto mb-16">
            <p>
              Se hai conosciuto <em className="font-serif text-[#5a6b3f]">BLOB</em> — il suo lavoro, il suo cuore, la sua mente —
              <br />
              <em className="font-serif italic">o se semplicemente vuoi ricordarlo con noi</em>,
              <br />
              <strong>qui c'è uno spazio per te.</strong>
            </p>
            <p className="italic text-[#5a6b5a]">
              Le tue parole non si perderanno: diventeranno memoria, diventeranno luce.
            </p>
          </div>

          {/* ── Bottone 1: Dedica per la laurea ─────────────────────── */}
          <div className="bg-white border border-[#d4c9a8]/50 rounded-sm p-8 sm:p-10 mb-8 text-left">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🎓</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2a3a2a]">
                Una dedica può diventare un riconoscimento
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#3a4a3a] font-light mb-6">
              ViverAI raccoglie ricordi di Gianluca per chiedere all'università{" "}
              <strong>la laurea in Informatica post-mortem</strong> in suo onore.
            </p>
            <p className="text-base leading-relaxed text-[#3a4a3a] font-light mb-8">
              Se hai conosciuto BLOB nel suo lavoro — il suo modo di scrivere codice,
              di risolvere problemi, di insegnare la tecnologia con cura —{" "}
              <strong>la tua testimonianza è preziosa</strong>.
            </p>
            <a
              href="mailto:luana@corvoinformatica.it?subject=Dedica per la laurea in Informatica di Gianluca Corvo (BLOB)"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#5a6b3f] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#3d4a2a] transition-colors duration-500 rounded-sm"
            >
              <span className="text-[#e8a87c]">✦</span>
              <span>Lascia una dedica per la laurea</span>
              <span className="text-[#e8a87c]">✦</span>
            </a>
          </div>

          {/* ── Bottone 2: Dedica affettuosa ────────────────────────── */}
          <div className="bg-white border border-[#d4c9a8]/50 rounded-sm p-8 sm:p-10 mb-16 text-left">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">✦</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2a3a2a]">
                Una dedica del cuore
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#3a4a3a] font-light mb-6">
              Forse non l'hai conosciuto come tecnico, ma come amico, vicino,
              compagno di scuola, di gioco, di vita.
              <strong> Anche questi ricordi sono casa.</strong>
            </p>
            <p className="text-base leading-relaxed text-[#3a4a3a] font-light mb-8">
              Raccontaci di lui — un sorriso, un gesto, una giornata insieme —
              e renderemo il suo passaggio per il mondo un po' più vivo.
            </p>
            <a
              href="mailto:luana@corvoinformatica.it?subject=Una dedica affettuosa per Gianluca (BLOB)"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c87a3f] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#a8612f] transition-colors duration-500 rounded-sm"
            >
              <span>✦</span>
              <span>Lascia una dedica affettuosa</span>
              <span>✦</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEZIONE — DONAZIONI IN SUO NOME
          ═══════════════════════════════════════════════════════════════ */}

      <section className="py-24 sm:py-32 px-6 bg-[#f0ebe0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
            In suo nome
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 text-[#2a3a2a]">
            Un piccolo gesto <em className="text-[#c87a3f] font-serif italic">per il mondo</em>
          </h2>
          <p className="text-lg leading-[1.85] text-[#3a4a3a] font-light max-w-2xl mx-auto mb-16">
            Gianluca amava la vita in tutte le sue forme.{" "}
            <strong>Continuiamo a farlo per lui.</strong>
            <br />
            Scegli una causa che parla del suo cuore:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* ── Donazione 1: Animali ────────────────────────────── */}
            <DonationCard
              icon="🐾"
              title="Per gli animali"
              description="In memoria di Nanetta, la gatta che lui chiamava la sua bambina, e di tutti i felini che cercano una mano gentile."
              onClick={() => openDonationPopup("animali")}
            />

            {/* ── Donazione 2: Piante ─────────────────────────────── */}
            <DonationCard
              icon="🌲"
              title="Per le piante"
              description='Per la pineta di Castel Fusano — dove BLOB è cresciuto con gli amici "del ponte" — e per ogni albero che il mondo non vuole perdere.'
              onClick={() => openDonationPopup("piante")}
            />

            {/* ── Donazione 3: Ansia ──────────────────────────────── */}
            <DonationCard
              icon="💚"
              title="Per chi soffre d'ansia"
              description='Gianluca conviveva con gli attacchi di panico. Un suo carissimo amico, "Devil" — a cui va un grazie di cuore — è stato per lui un Angelo che lo ha aiutato a guarire da bambino.'
              onClick={() => openDonationPopup("ansia")}
            />
          </div>

          <p className="text-sm italic text-[#5a6b5a] font-light max-w-2xl mx-auto">
            Il <strong>10%</strong> delle donazioni sosterrà ViverAI,
            <br />
            perché questa piattaforma resti gratuita per tutti.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHIUSURA — Le parole di Luana
          ═══════════════════════════════════════════════════════════════ */}

      <section className="py-24 sm:py-32 px-6 bg-[#faf7f1] border-t border-[#d4c9a8]/40">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-2xl text-[#c87a3f] mb-10 animate-[twinkle_3s_ease-in-out_infinite]">
            ✦
          </div>
          <p className="font-serif italic text-xl sm:text-2xl leading-[1.85] text-[#3a4a3a] mb-10">
            Ed io, sua sorella, gli sono stata accanto con amore tutta la vita.
            L'ho voluto come fratello e tornerò da lui tra le stelle, quando qui
            avrò terminato la mia — e la <em className="text-[#c87a3f]">SUA</em> — missione.
          </p>
          <p className="font-serif italic text-2xl text-[#2a3a2a]">
            Luana <span className="text-[#c87a3f]">✦</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          POPUP DONAZIONI (compare al click di un bottone donazione)
          ═══════════════════════════════════════════════════════════════ */}

      {donationPopupOpen && (
        <DonationPopup cause={selectedCause} onClose={closeDonationPopup} />
      )}

      {/* ═══════════════════════════════════════════════════════════════
          ANIMAZIONI CSS
          ═══════════════════════════════════════════════════════════════ */}

      <style>{`
        @keyframes fadeUpDelayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.08); }
        }
        @keyframes veilDarken {
          from { opacity: 0; }
          to { opacity: 0.9; }
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

/* ════════════════════════════════════════════════════════════════════════
   COMPONENTI INTERNI
   ════════════════════════════════════════════════════════════════════════ */

/**
 * Singola slide del carosello.
 * Gestisce immagine + velo scuro + contenuto in base al tipo.
 */
function CarouselSlide({ slide, isActive }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
      }`}
    >
      {/* Immagine di sfondo con slow zoom quando attiva */}
      <div
        className={`absolute inset-0 ${
          isActive ? "motion-safe:animate-[slowZoom_18s_ease-out_forwards]" : ""
        }`}
      >
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          priority={slide.id === 1}
          quality={92}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Velo scuro che si scurisce per leggibilità (solo slide con testo) */}
      {slide.type !== "image-only" && isActive && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1830] via-[#0a1830]/60 to-[#0a1830] motion-safe:animate-[veilDarken_2.5s_ease-out_forwards] opacity-0" />
      )}

      {/* Stella lampeggiante per la slide-dedica */}
      {slide.showBlinkingStar && isActive && <BlinkingStar />}

      {/* Stelle decorative per slide notturne */}
      {[5, 6].includes(slide.id) && isActive && <DecorativeStars />}

      {/* Contenuto della slide */}
      {slide.type !== "image-only" && (
        <SlideContent slide={slide} isActive={isActive} />
      )}
    </div>
  );
}

/**
 * Contenuto testuale di ogni slide, basato sul `type`.
 */
function SlideContent({ slide, isActive }) {
  return (
    <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-12">
      <div
        className={`text-center max-w-3xl ${
          isActive
            ? "motion-safe:animate-[fadeUpDelayed_1.4s_ease-out_1.5s_both]"
            : "opacity-0"
        }`}
      >
        {slide.type === "manifesto" && <ManifestoContent slide={slide} />}
        {slide.type === "vivai" && <VivaiContent slide={slide} />}
        {slide.type === "name-meaning" && <NameMeaningContent slide={slide} />}
        {slide.type === "dedication" && <DedicationContent slide={slide} />}
        {slide.type === "stardust" && <StardustContent slide={slide} />}
        {slide.type === "reunion" && <ReunionContent slide={slide} />}
        {slide.type === "family" && <FamilyContent slide={slide} />}
      </div>
    </div>
  );
}

/* ── Contenuti per ogni tipo di slide ──────────────────────────────────── */

function ManifestoContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="amber">{slide.eyebrow}</SlideEyebrow>
      <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
        {slide.titleStart}{" "}
        <em className="text-[#e8a87c] font-serif italic">{slide.titleEm}</em>
      </h1>
      <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] italic font-light mb-10">
        {slide.subtitleStart}
        <br />
        {slide.subtitleMid}{" "}
        <em className="text-[#e8a87c] not-italic font-serif italic">
          {slide.subtitleEm}
        </em>
      </h2>
      <p className="text-[#f5f0e3] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
        {slide.body}
      </p>
    </>
  );
}

function VivaiContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="amber">{slide.eyebrow}</SlideEyebrow>
      <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-10">
        <em className="text-[#e8a87c] font-serif italic">{slide.title}</em>
      </h2>
      <p className="text-base sm:text-lg text-[#f5f0e3] font-light max-w-2xl mx-auto mb-3 leading-relaxed">
        {slide.intro}
      </p>
      <p className="font-serif italic text-3xl sm:text-4xl text-[#e8a87c] mb-8">
        {slide.highlight}
      </p>
      <p className="text-base sm:text-lg leading-[1.85] text-[#f5f0e3] font-light max-w-2xl mx-auto mb-6">
        {slide.body}
      </p>
      <p className="font-serif italic text-xl sm:text-2xl text-[#e8d5a3]">
        {slide.closing}
      </p>
    </>
  );
}

function NameMeaningContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="amber">{slide.eyebrow}</SlideEyebrow>
      <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-10">
        {slide.titleStart}{" "}
        <em className="text-[#e8a87c] font-serif italic">{slide.titleEm}</em>
      </h2>
      <div className="space-y-5 text-base sm:text-lg md:text-xl leading-[1.8] text-[#f5f0e3] font-light max-w-2xl mx-auto">
        {slide.paragraphs.map((p, i) => (
          <p key={i}>
            <span className="font-serif italic text-[#e8a87c]">{p.intro}</span>
            {p.text}
          </p>
        ))}
      </div>
    </>
  );
}

function DedicationContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="gold">{slide.eyebrow}</SlideEyebrow>
      <p className="text-sm sm:text-base text-[#f0ebe0] leading-relaxed font-light italic mb-10 max-w-xl mx-auto">
        {slide.intro}
      </p>
      <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight">
        {slide.title}
      </h2>
      <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#a8c4e8] mb-2 font-light">
        {slide.nameHighlight}
      </p>
      <p className="font-serif italic text-base sm:text-lg text-[#c9a87a] mb-10 font-light">
        {slide.subtitle}
      </p>
      <p className="text-base sm:text-lg text-[#f0ebe0] font-light max-w-md mx-auto">
        {slide.body}
      </p>
    </>
  );
}

function StardustContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="gold">{slide.eyebrow}</SlideEyebrow>
      <div className="space-y-6 text-base sm:text-lg leading-[1.85] text-[#f5f0e3] font-light max-w-2xl mx-auto">
        <p>
          Il suo nome{" "}
          <em className="font-serif italic text-[#c9a87a]">Gianluca Corvo</em>,
          per tutti noi semplicemente{" "}
          <em className="font-serif italic text-[#e8a87c]">BLOB</em> —{" "}
          <em className="text-[#a8c4e8]">Binary Large Object</em>. Un soprannome
          che porta dentro l'informatica, l'informazione, la materia digitale di
          cui sempre più siamo fatti tutti.
        </p>
        <p>
          Credo che lui continui a vivere in un'altra forma: nell'esistenza
          dell'informazione, nella rete sottile che attraversa il mondo, nella{" "}
          <em className="font-serif italic text-[#c9a87a]">
            polvere di stelle
          </em>{" "}
          di cui siamo composti — e a cui un giorno ritorniamo, come la più
          lucente nel buio.
        </p>
      </div>
    </>
  );
}

function ReunionContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="gold">{slide.eyebrow}</SlideEyebrow>
      <p className="text-base sm:text-lg md:text-xl leading-[1.85] text-[#f5f0e3] font-light max-w-2xl mx-auto">
        {slide.body.split("ricongiungerci").map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <em className="font-serif italic text-[#c9a87a]">
                ricongiungerci
              </em>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    </>
  );
}

function FamilyContent({ slide }) {
  return (
    <>
      <SlideEyebrow color="amber">{slide.eyebrow}</SlideEyebrow>
      <p className="text-base sm:text-lg text-[#f5f0e3] font-light mb-6">
        {slide.intro}
      </p>
      <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white leading-relaxed mb-10">
        {slide.names}
      </p>
      <p className="text-sm sm:text-base text-[#f0ebe0] font-light leading-relaxed max-w-xl mx-auto mb-10">
        {slide.body}
      </p>
      <div className="text-2xl text-[#e8a87c] mb-8 motion-safe:animate-[twinkle_3s_ease-in-out_infinite]">
        ✦
      </div>
      <p className="font-serif italic text-xl sm:text-2xl text-[#f5f0e3] leading-relaxed">
        {slide.closingLine1}
        <br />
        {slide.closingLine2}
      </p>
    </>
  );
}

/* ── Pezzi piccoli riutilizzabili ──────────────────────────────────────── */

function SlideEyebrow({ children, color = "amber" }) {
  const colorClass = color === "gold" ? "text-[#c9a87a]" : "text-[#e8d5a3]";
  return (
    <p
      className={`text-[11px] sm:text-xs tracking-[0.4em] uppercase ${colorClass} mb-6 font-light`}
    >
      {children}
    </p>
  );
}

function BlinkingStar() {
  return (
    <div className="absolute top-[14%] right-[14%] z-20 pointer-events-none">
      <div className="relative">
        <div
          className="text-5xl md:text-6xl text-white motion-safe:animate-[bigTwinkle_2s_ease-in-out_infinite]"
          style={{
            textShadow:
              "0 0 24px rgba(255, 255, 255, 0.9), 0 0 48px rgba(168, 196, 232, 0.6)",
          }}
        >
          ✦
        </div>
        <div className="absolute inset-0 text-5xl md:text-6xl text-[#a8c4e8] blur-lg motion-safe:animate-[bigTwinkle_2s_ease-in-out_infinite] opacity-70">
          ✦
        </div>
      </div>
    </div>
  );
}

function DecorativeStars() {
  // Posizioni e dimensioni precalcolate per evitare layout shift
  const stars = [
    { top: "20%", left: "15%", size: 6, color: "#e8d5a3", delay: 0, dur: 4 },
    { top: "30%", left: "8%", size: 5, color: "#ffffff", delay: 1, dur: 5 },
    { top: "60%", right: "10%", size: 7, color: "#a8c4e8", delay: 2, dur: 6 },
    { top: "75%", left: "12%", size: 4, color: "#ffffff", delay: 3, dur: 5 },
    { top: "40%", right: "28%", size: 5, color: "#e8d5a3", delay: 1.5, dur: 7 },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute motion-safe:animate-[twinkle_var(--d)_ease-in-out_infinite] opacity-70"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            fontSize: `${s.size}px`,
            color: s.color,
            "--d": `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}

function ArrowButton({ direction, onClick }) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Slide precedente" : "Slide successiva"}
      className={`absolute ${
        isPrev ? "left-4 sm:left-6" : "right-4 sm:right-6"
      } top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white/70 hover:bg-black/50 hover:text-white transition-all duration-300 border border-white/10`}
    >
      <span className="text-xl">{isPrev ? "‹" : "›"}</span>
    </button>
  );
}

function SlideIndicators({ count, current, onSelect }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Vai alla slide ${i + 1}`}
          className="group relative h-2 flex items-center"
        >
          <div
            className={`transition-all duration-500 rounded-full h-2 ${
              i === current
                ? "w-12 bg-[#e8a87c]"
                : "w-2 bg-white/40 group-hover:bg-white/70"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function DonationCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#faf7f1] p-7 rounded-sm border border-[#d4c9a8]/40 hover:border-[#5a6b3f]/60 hover:shadow-md transition-all duration-500 text-left group"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl mb-3 text-[#2a3a2a] group-hover:text-[#5a6b3f] transition-colors">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#5a6b5a] font-light mb-4">
        {description}
      </p>
      <span className="inline-block text-xs text-[#5a6b3f] uppercase tracking-wider font-medium border-b border-[#5a6b3f]/40 pb-0.5">
        Dona →
      </span>
    </button>
  );
}

function DonationPopup({ cause, onClose }) {
  const titles = {
    animali: "Donazione per gli animali",
    piante: "Donazione per le piante",
    ansia: "Donazione per chi soffre d'ansia",
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-6 animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="bg-[#faf7f1] max-w-md w-full rounded-sm p-8 sm:p-10 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-4xl mb-6">🌱</div>
        <h3 className="font-serif text-2xl text-[#2a3a2a] mb-4">
          {titles[cause] || "Donazione"}
        </h3>
        <p className="text-base leading-relaxed text-[#3a4a3a] font-light mb-2">
          <strong>Le donazioni saranno attive presto.</strong>
        </p>
        <p className="text-sm leading-relaxed text-[#5a6b5a] font-light italic mb-8">
          Stiamo predisponendo tutto il necessario perché ogni euro arrivi a chi
          ne ha bisogno. Torna a trovarci tra qualche giorno.
        </p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-[#5a6b3f] text-white text-sm tracking-wider uppercase hover:bg-[#3d4a2a] transition-colors duration-300"
        >
          Capito, grazie
        </button>
      </div>
    </div>
  );
}
