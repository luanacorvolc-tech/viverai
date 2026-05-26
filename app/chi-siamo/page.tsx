import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi siamo — ViverAI",
  description:
    "Il manifesto di ViverAI. Una piattaforma educativa del verde nata per onorare mio fratello BLOB, dove i saperi della terra incontrano l'intelligenza artificiale.",
};

export default function ChiSiamoPage() {
  return (
    <main className="bg-[#faf7f1] text-[#2a3a2a] overflow-x-hidden">
      {/* ============ HERO STELLATO ============ */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-stellato.png"
          alt="Cielo stellato con via lattea sopra foreste e montagne"
          fill
          priority
          quality={90}
          className="object-cover scale-105 motion-safe:animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        {/* velo scuro per leggibilità testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1830]/40 via-[#0a1830]/30 to-[#0a1830]/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl motion-safe:animate-[fadeUp_1.6s_ease-out_0.3s_both]">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#e8d5a3] mb-6 font-light">
            Il manifesto
          </p>
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Vivere <em className="text-[#e8a87c] not-italic font-serif italic">con cura</em>.
          </h1>
          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] italic font-light">
            Conoscere la natura
            <br />
            come si conosce un <em className="text-[#e8a87c]">amante</em>.
          </h1>
          <p className="mt-10 text-[#e8e0d0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
            ViverAI è una piattaforma educativa del verde — un luogo lento,
            fatto a mano, dove i saperi della terra incontrano gli strumenti
            del nostro tempo.
          </p>
          <div className="mt-12 flex justify-center motion-safe:animate-[bounce_2s_ease-in-out_infinite]">
            <div className="w-px h-12 bg-[#e8d5a3]/60" />
          </div>
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

      {/* ============ SEZIONE 2 — DEDICA A BLOB (immersiva, cielo notturno) ============ */}
      <section className="relative w-full min-h-[95vh] flex items-center overflow-hidden">
        <Image
          src="/images/stella-blob.png"
          alt="Cielo notturno con una stella luminosa solitaria sopra montagne e foreste"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1c]/30 via-[#050d1c]/50 to-[#050d1c]/80" />

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-24 text-center text-[#f0ebe0]">
          {/* stella che pulsa */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="text-3xl text-[#a8c4e8] motion-safe:animate-[twinkle_3s_ease-in-out_infinite]">
                ✦
              </div>
              <div className="absolute inset-0 text-3xl text-[#a8c4e8] blur-md motion-safe:animate-[twinkle_3s_ease-in-out_infinite] opacity-60">
                ✦
              </div>
            </div>
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a87a] mb-6 font-medium">
            Una dedica
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl mb-14 leading-tight text-[#f0ebe0]">
            Per mio fratello,
            <br />
            <span className="text-[#a8c4e8]">BLOB</span>
          </h2>

          <div className="space-y-6 text-lg sm:text-xl leading-[2] text-[#e0dcc8] font-light">
            <p>ViverAI nasce per onorare mio fratello.</p>
            <p>
              Il suo nome era{" "}
              <span className="font-serif italic text-[#c9a87a]">BLOB</span> —{" "}
              <em className="text-[#a8c4e8]/90">Binary Large Object</em>. Un
              nome che porta dentro l'informatica, l'informazione, la materia
              digitale di cui sempre più siamo fatti tutti.
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
        </div>
      </section>

      {/* ============ SEZIONE 3 — COSA CREDIAMO (con foto mano+fiori) ============ */}
      <section className="relative py-24 sm:py-32 px-6 bg-[#faf7f1]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Immagine */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/mano-fiori.png"
              alt="Una mano sfiora delicatamente fiori bianchi tra le foglie verdi bagnate di rugiada"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Testo */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#7a8a6a] mb-6 font-medium">
              La nostra visione
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-10 text-[#2a3a2a]">
              Cosa <em className="text-[#c87a3f]">crediamo</em>
            </h2>

            <div className="space-y-6 text-base sm:text-lg leading-[1.9] text-[#3a4a3a] font-light">
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
              },
              {
                icon: "📅",
                title: "Calendario del verde",
                desc: "Stagioni, semine, raccolti, lavori del mese — il ritmo della terra.",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "Uno spazio dove condividere dubbi, scoperte, fallimenti, fioriture.",
              },
              {
                icon: "🎓",
                title: "VerdeScuola",
                desc: "Risorse educative per chi insegna e chi impara, dalla scuola alle famiglie.",
              },
              {
                icon: "🌍",
                title: "Mappa Verde",
                desc: "Luoghi, vivai, orti urbani, esperienze da scoprire vicino a te.",
              },
              {
                icon: "🤖",
                title: "Ricerca AI",
                desc: "Uno strumento intelligente per fare domande sul verde, in dialogo con i saperi.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#faf7f1] p-7 rounded-sm border border-[#d4c9a8]/40 hover:border-[#5a6b3f]/40 transition-colors duration-500"
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl mb-3 text-[#2a3a2a]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a6b5a] font-light">
                  {item.desc}
                </p>
              </div>
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

          <p className="font-serif italic text-xl sm:text-2xl text-[#3a4a3a] leading-relaxed">
            Se ami il verde,
            <br />
            sei già parte di ViverAI.
          </p>

          <div className="mt-16">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 border border-[#5a6b3f] text-[#5a6b3f] text-sm tracking-wider uppercase hover:bg-[#5a6b3f] hover:text-white transition-colors duration-500"
            >
              Esplora il blog
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
          to { transform: scale(1.12); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
      `}</style>
    </main>
  );
}
