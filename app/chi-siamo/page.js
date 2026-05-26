import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Chi siamo — ViverAI | In memoria di Gianluca Corvo (BLOB)",
  description:
    "Il manifesto di ViverAI. Una piattaforma educativa del verde nata per onorare Gianluca Corvo, soprannominato BLOB (Binary Large Object). Dove i saperi della terra incontrano l'intelligenza artificiale.",
  keywords: [
    "Gianluca Corvo",
    "BLOB",
    "Binary Large Object",
    "ViverAI",
    "in memoria di Gianluca Corvo",
    "manifesto ViverAI",
    "Luana Corvo",
    "piattaforma educativa del verde",
    "giardinaggio AI",
    "natura intelligenza artificiale",
  ],
  openGraph: {
    title: "Chi siamo — ViverAI | In memoria di Gianluca Corvo (BLOB)",
    description:
      "ViverAI nasce per onorare Gianluca Corvo (BLOB). Una piattaforma educativa del verde dove i saperi della terra incontrano l'intelligenza artificiale.",
    type: "website",
    images: ["/images/stella-blob.png"],
  },
};

export default function ChiSiamoPage() {
  return (
    <main className="bg-[#faf7f1] text-[#2a3a2a] overflow-x-hidden">
      {/* ============ HERO STELLARE CON DISSOLVENZA ============ */}
      <section className="relative w-full h-[100vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Immagine 1: cielo stellato (fade lento) */}
        <div className="absolute inset-0 motion-safe:animate-[heroFadeOne_18s_ease-in-out_infinite]">
          <Image
            src="/images/hero-stellato.png"
            alt="Cielo stellato con via lattea sopra foreste e montagne"
            fill
            priority
            quality={90}
            className="object-cover scale-105 motion-safe:animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
            sizes="100vw"
          />
        </div>

        {/* Immagine 2: mano-fiori (fade lento opposto) */}
        <div className="absolute inset-0 motion-safe:animate-[heroFadeTwo_18s_ease-in-out_infinite] opacity-0">
          <Image
            src="/images/mano-fiori.png"
            alt="Una mano sfiora delicatamente fiori bianchi tra le foglie verdi bagnate di rugiada"
            fill
            quality={90}
            className="object-cover scale-105"
            sizes="100vw"
          />
        </div>

        {/* Velo scuro per leggibilità testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1830]/55 via-[#0a1830]/40 to-[#0a1830]/75 z-10" />

        {/* Stelle decorative pulsanti */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-[12%] left-[18%] text-[6px] text-[#e8d5a3] motion-safe:animate-[twinkle_4s_ease-in-out_infinite] opacity-80">✦</div>
          <div className="absolute top-[18%] right-[22%] text-[8px] text-[#f5e6c8] motion-safe:animate-[twinkle_6s_ease-in-out_infinite_1s] opacity-70">✦</div>
          <div className="absolute top-[8%] left-[48%] text-[5px] text-[#ffffff] motion-safe:animate-[twinkle_5s_ease-in-out_infinite_2s] opacity-60">✦</div>
          <div className="absolute top-[28%] left-[8%] text-[7px] text-[#a8c4e8] motion-safe:animate-[twinkle_7s_ease-in-out_infinite_3s] opacity-75">✦</div>
          <div className="absolute top-[15%] right-[12%] text-[10px] text-[#f5e6c8] motion-safe:animate-[twinkle_5s_ease-in-out_infinite] opacity-90" style={{ textShadow: '0 0 12px rgba(245, 230, 200, 0.6)' }}>✦</div>
          <div className="absolute top-[35%] left-[78%] text-[5px] text-[#e8d5a3] motion-safe:animate-[twinkle_6s_ease-in-out_infinite_2.5s] opacity-70">✦</div>
          <div className="absolute top-[22%] left-[35%] text-[4px] text-[#ffffff] motion-safe:animate-[twinkle_8s_ease-in-out_infinite_1.5s] opacity-50">✦</div>
          <div className="absolute top-[42%] right-[8%] text-[6px] text-[#a8c4e8] motion-safe:animate-[twinkle_4s_ease-in-out_infinite_0.5s] opacity-80">✦</div>
        </div>

        {/* Contenuto testo */}
        <div className="relative z-20 text-center px-6 max-w-4xl motion-safe:animate-[fadeUp_1.6s_ease-out_0.3s_both]">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#e8d5a3] mb-6 font-light">
            Il manifesto
          </p>
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Vivere <em className="text-[#e8a87c] not-italic font-serif italic">con cura</em>.
          </h1>
          <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] italic font-light mb-10">
            Conoscere la natura
            <br />
            come si conosce un <em className="text-[#e8a87c]">amante</em>.
          </h2>
          <p className="text-[#e8e0d0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
            ViverAI è una piattaforma educativa del verde — un luogo lento,
            fatto a mano, dove i saperi della terra incontrano gli strumenti
            del nostro tempo.
          </p>

          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <div className="w-6 h-[2px] bg-[#e8a87c]"></div>
              <div className="w-2 h-[2px] bg-[#e8d5a3] opacity-50"></div>
              <div className="w-2 h-[2px] bg-[#e8d5a3] opacity-30"></div>
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#e8d5a3]/70 font-light mt-2">
              scorri per leggere il manifesto
            </p>
          </div>
        </div>

        {/* Indicatore di scorrimento in basso */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 motion-safe:animate-[bounce_2s_ease-in-out_infinite]">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#e8d5a3]/60" />
        </div>
      </section>

      {/* ============ SEZIONE 1 — NEL NOME C'È TUTTO ============ */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
            Cosa significa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-12 text-[#2a3a2a]">
            Nel nome <em className="text-[#c87a3f]">c'è tutto</em>
          </h2>

          <div className="space-y-8 text-lg sm:text-xl leading-[1.85] text-[#3a4a3a] font-light">
            <p>
              <span className="font-serif italic text-[#5a6b3f]">Viver-</span>,
              vivere. Restare nel mondo, abitarlo con presenza, prendersi cura
              di ciò che ci dona benessere.
            </p>
            <p>
              <span className="font-serif italic text-[#5a6b3f]">-AI</span>,
              l'intelligenza artificiale. Non come una forza che ci allontana
              dalla natura, ma come uno strumento gentile che ci aiuta a
              comprenderla meglio.
            </p>
            <p className="pt-4 border-t border-[#d4c9a8]/40">
              E poi c'è una terza lettura, la più intima.{" "}
              <span className="font-serif italic text-[#5a6b3f]">ViverAI</span>{" "}
              è anche una promessa:{" "}
              <em className="font-serif text-[#c87a3f]">tu vivrai</em>. Un nome
              che è anche un voto, una dedica, un modo per non lasciare andare.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SEZIONE 2 — DEDICA A GIANLUCA CORVO (BLOB) ============ */}
      <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
        <Image
          src="/images/stella-blob.png"
          alt="Cielo notturno con una stella luminosa solitaria — la stella di Gianluca Corvo, BLOB"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1c]/40 via-[#050d1c]/55 to-[#050d1c]/80" />

        {/* Stelle pulsanti aggiuntive */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[15%] text-[5px] text-[#a8c4e8] motion-safe:animate-[twinkle_5s_ease-in-out_infinite] opacity-70">✦</div>
          <div className="absolute top-[25%] right-[20%] text-[7px] text-[#c9a87a] motion-safe:animate-[twinkle_4s_ease-in-out_infinite_1s] opacity-80">✦</div>
          <div className="absolute top-[60%] left-[10%] text-[6px] text-[#a8c4e8] motion-safe:animate-[twinkle_6s_ease-in-out_infinite_2s] opacity-75">✦</div>
          <div className="absolute top-[70%] right-[15%] text-[4px] text-[#ffffff] motion-safe:animate-[twinkle_7s_ease-in-out_infinite_3s] opacity-60">✦</div>
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-24 text-center text-[#f0ebe0]">
          {/* Stella centrale pulsante */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="text-4xl text-[#a8c4e8] motion-safe:animate-[twinkle_3s_ease-in-out_infinite]">
                ✦
              </div>
              <div className="absolute inset-0 text-4xl text-[#a8c4e8] blur-md motion-safe:animate-[twinkle_3s_ease-in-out_infinite] opacity-60">
                ✦
              </div>
            </div>
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a87a] mb-6 font-medium">
            Una dedica
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight text-[#f0ebe0]">
            Per mio fratello,
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#a8c4e8] mb-2 font-light">
            Gianluca Corvo
          </p>
          <p className="font-serif italic text-lg sm:text-xl text-[#c9a87a] mb-14 font-light">
            — il mio caro <span className="text-[#e8a87c]">BLOB</span> —
          </p>

          <div className="space-y-6 text-lg sm:text-xl leading-[2] text-[#e0dcc8] font-light">
            <p>ViverAI nasce per onorare mio fratello.</p>
            <p>
              Il suo nome era{" "}
              <span className="font-serif italic text-[#c9a87a]">
                Gianluca Corvo
              </span>
              , per tutti noi semplicemente{" "}
              <span className="font-serif italic text-[#e8a87c]">BLOB</span> —{" "}
              <em className="text-[#a8c4e8]/90">Binary Large Object</em>. Un
              soprannome che porta dentro l'informatica, l'informazione, la
              materia digitale di cui sempre più siamo fatti tutti.
            </p>
            <p>
              Credo che lui continui a vivere in un'altra forma:
              nell'esistenza dell'informazione, nella rete sottile che
              attraversa il mondo, nella{" "}
              <span className="font-serif italic text-[#c9a87a]">
                polvere di stelle
              </span>{" "}
              di cui siamo composti — e a cui un giorno ritorniamo, come la
              più lucente nel buio.
            </p>
            <p>
              Costruire ViverAI è il mio modo di tenerlo vicino. Di dire al
              mondo che l'intelligenza artificiale non deve separarci dalla
              natura, ma può aiutarci a{" "}
              <span className="font-serif italic text-[#c9a87a]">
                ricongiungerci
              </span>{" "}
              con essa — come ci si ricongiunge a chi si è amato.
            </p>
          </div>

          {/* Invito alla pagina memorie */}
          <div className="mt-16 pt-10 border-t border-[#c9a87a]/30">
            <p className="text-base sm:text-lg text-[#e0dcc8] font-light mb-6 leading-relaxed italic">
              Se anche tu hai conosciuto Gianluca,
              <br />
              o vuoi semplicemente lasciargli una dedica,
            </p>
            <Link
              href="/memorie"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#c9a87a]/60 text-[#e8d5a3] text-sm tracking-[0.15em] uppercase hover:bg-[#c9a87a]/10 hover:border-[#e8a87c] hover:text-[#e8a87c] transition-all duration-500 rounded-sm group"
            >
              <span className="text-[#e8a87c] group-hover:scale-110 transition-transform duration-500">
                ✦
              </span>
              <span>Lascia una dedica</span>
              <span className="text-[#e8a87c] group-hover:scale-110 transition-transform duration-500">
                ✦
              </span>
            </Link>
            <p className="mt-4 text-xs text-[#c9a87a]/70 font-light tracking-wider">
              vai alla pagina Memorie
            </p>
          </div>
        </div>
      </section>

      {/* ============ SEZIONE 3 — COSA CREDIAMO ============ */}
      <section className="relative py-24 sm:py-32 px-6 bg-[#faf7f1]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
            La nostra visione
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-12 text-[#2a3a2a]">
            Cosa <em className="text-[#c87a3f]">crediamo</em>
          </h2>

          <div className="space-y-8 text-lg sm:text-xl leading-[1.85] text-[#3a4a3a] font-light text-left">
            <p>
              Crediamo che la natura sia un'
              <span className="font-serif italic text-[#5a6b3f]">amante</span>,
              non un'estranea: va conosciuta, ascoltata, rispettata.
            </p>
            <p>
              Crediamo che la conoscenza del verde debba essere{" "}
              <span className="font-serif italic text-[#5a6b3f]">
                accessibile a chiunque
              </span>
              , dal balcone di città al grande orto, dal bambino curioso
              all'anziano custode di antichi saperi.
            </p>
            <p>
              Crediamo che la tecnologia — quando è gentile — possa diventare
              uno strumento di cura. Non un muro tra noi e il mondo vivente,
              ma una finestra in più per guardarlo.
            </p>
            <p>
              Crediamo che vivere in modo{" "}
              <span className="font-serif italic text-[#5a6b3f]">
                sostenibile
              </span>{" "}
              non sia una rinuncia, ma un ritorno a casa.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SEZIONE 4 — COSA TROVERAI QUI ============ */}
      <section className="py-24 sm:py-32 px-6 bg-[#f0ebe0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
              Le forme in cui ci fai trovare
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#2a3a2a]">
              Cosa <em className="text-[#c87a3f]">troverai</em> qui
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📖",
                title: "Blog & Rivista",
                desc: "Articoli curati con cura artigianale, scritti per accompagnare, non per riempire spazio.",
                href: "/blog",
              },
              {
                icon: "📅",
                title: "Calendario del verde",
                desc: "Stagioni, semine, raccolti, lavori del mese — il ritmo della terra.",
                href: "/calendario",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "Uno spazio dove condividere dubbi, scoperte, fallimenti, fioriture.",
                href: "/community",
              },
              {
                icon: "🎓",
                title: "VerdeScuola",
                desc: "Risorse educative per chi insegna e chi impara, dalla scuola alle famiglie.",
                href: "/verdescuola",
              },
              {
                icon: "🌟",
                title: "Memorie",
                desc: "Lo spazio dedicato a Gianluca e a chi vogliamo continuare a ricordare.",
                href: "/memorie",
              },
              {
                icon: "🤖",
                title: "Ricerca AI",
                desc: "Uno strumento intelligente per fare domande sul verde, in dialogo con i saperi.",
                href: "#",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-[#faf7f1] p-7 rounded-sm border border-[#d4c9a8]/40 hover:border-[#5a6b3f]/40 hover:shadow-md transition-all duration-500 block"
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl mb-3 text-[#2a3a2a]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a6b5a] font-light">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEZIONE 5 — FIRMA ============ */}
      <section className="py-24 sm:py-32 px-6 bg-[#faf7f1] border-t border-[#d4c9a8]/40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
            Con cura
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#3a4a3a] mb-10 font-light">
            Questo progetto è stato fondato e curato da
          </p>

          <p className="font-serif italic text-4xl sm:text-5xl text-[#2a3a2a] mb-4">
            Luana Corvo
          </p>

          <p className="text-sm sm:text-base text-[#5a6b5a] mb-16 font-light leading-relaxed max-w-md mx-auto">
            con amore per la natura, per la famiglia, per il mondo — e per
            quella stella più lucente nel buio che mi guida.
          </p>

          <div className="text-2xl text-[#c87a3f] mb-10 motion-safe:animate-[twinkle_3s_ease-in-out_infinite]">
            ✦
          </div>

          <p className="font-serif italic text-xl sm:text-2xl text-[#3a4a3a] leading-relaxed mb-16">
            Se ami il verde,
            <br />
            sei già parte di ViverAI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 border border-[#5a6b3f] text-[#5a6b3f] text-sm tracking-wider uppercase hover:bg-[#5a6b3f] hover:text-white transition-colors duration-500"
            >
              Esplora il blog
            </Link>
            <Link
              href="/memorie"
              className="inline-block px-8 py-3 border border-[#c87a3f] text-[#c87a3f] text-sm tracking-wider uppercase hover:bg-[#c87a3f] hover:text-white transition-colors duration-500"
            >
              In memoria di Gianluca
            </Link>
          </div>
        </div>
      </section>

      {/* ============ Animazioni CSS ============ */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes heroFadeOne {
          0%, 35% { opacity: 1; }
          50%, 85% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes heroFadeTwo {
          0%, 35% { opacity: 0; }
          50%, 85% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </main>
  );
}
