import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "In memoria di Gianluca — ViverAI",
  description: "Un progetto nato nel ricordo di Gianluca 'Blob', programmatore, fratello, metà di un'anima."
};

export default function Memorie() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ink text-white">

        {/* APERTURA */}
        <section className="relative pt-24 pb-16 px-8 overflow-hidden">
          {/* Decorazione floreale di sfondo, molto soft */}
          <div className="absolute top-10 right-10 text-[20rem] opacity-[0.03] select-none pointer-events-none">🌿</div>
          <div className="absolute bottom-0 left-10 text-[14rem] opacity-[0.03] select-none pointer-events-none">🕊️</div>

          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block text-terra-light text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              In memoria di
            </span>
            <h1 className="font-serif font-light leading-[1.05] mb-6">
              <span className="block text-5xl md:text-6xl mb-2" style={{ color: '#d4c48a' }}>Gianluca</span>
              <em className="block text-3xl md:text-4xl italic text-white/70">"Blob"</em>
            </h1>
            <p className="text-white/50 text-sm tracking-[0.15em] uppercase">
              11 maggio 2024
            </p>
          </div>
        </section>

        {/* SEPARATORE FLOREALE */}
        <div className="flex justify-center pb-12">
          <div className="flex items-center gap-4 opacity-40">
            <span className="block h-px w-16 bg-white/20"></span>
            <span className="text-terra-light text-xl">❀</span>
            <span className="block h-px w-16 bg-white/20"></span>
          </div>
        </div>

        {/* LA DEDICA */}
        <section className="px-8 pb-20">
          <article className="max-w-2xl mx-auto">
            <div className="font-serif text-xl md:text-2xl font-light leading-[1.85] text-white/90 space-y-6">
              <p>
                Gianluca <em className="italic" style={{ color: '#d4c48a' }}>"Blob"</em> era mio fratello,
                la mia metà, una presenza unica nella mia vita.
              </p>
              <p>
                Era un programmatore geniale e stimato, capace di vedere nell'informatica
                non solo un lavoro, ma <em className="italic" style={{ color: '#d4c48a' }}>una forma di pensiero, conoscenza e futuro.</em>
              </p>
              <p>
                Era buono, ironico, profondo, e con lui ho condiviso una complicità rara,
                fatta di filosofia, risate, lacrime e amore.
              </p>
              <p className="pt-4">
                ViverAI nasce anche nel suo ricordo, come <em className="italic" style={{ color: '#d4c48a' }}>piccolo seme</em> di memoria,
                tecnologia e vita.
              </p>
            </div>

            <p className="text-right text-white/50 text-sm italic mt-12 font-serif">
              — Luana
            </p>
          </article>
        </section>

        {/* SEPARATORE */}
        <div className="flex justify-center py-8">
          <div className="flex items-center gap-4 opacity-40">
            <span className="block h-px w-16 bg-white/20"></span>
            <span className="text-terra-light text-xl">❀</span>
            <span className="block h-px w-16 bg-white/20"></span>
          </div>
        </div>

        {/* SPAZIO FOTO (placeholder) */}
        <section className="px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-terra-light mb-6">Album</p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-12">
              <p className="text-6xl mb-4 opacity-40">🖼️</p>
              <p className="text-white/40 text-sm italic font-serif">
                Uno spazio per le sue fotografie, presto.
              </p>
            </div>
          </div>
        </section>

        {/* DEDICHE */}
        <section className="px-8 py-16 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-terra-light mb-4">Il Giardino delle Anime</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
              Lascia una <em className="italic" style={{ color: '#d4c48a' }}>dedica</em>
            </h2>
            <p className="text-white/60 text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
              Chi ha conosciuto Gianluca può lasciare qui un pensiero, un ricordo, una parola.
              Le dediche saranno raccolte con cura, lette e custodite.
            </p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-4xl mb-3 opacity-50">✍️</p>
              <p className="text-white/40 text-sm italic font-serif mb-4">
                Lo spazio per le dediche aprirà presto.
              </p>
              <p className="text-white/30 text-xs">
                Stiamo preparando il modulo con la cura che merita.
              </p>
            </div>
          </div>
        </section>

        {/* CHIUSURA */}
        <section className="px-8 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-3xl block mb-6 opacity-60">🌱</span>
            <p className="font-serif text-xl md:text-2xl font-light italic text-white/80 leading-relaxed">
              "Ogni pianta che cresce porta con sé<br />
              un pezzo di chi l'ha amata."
            </p>
            <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-8">
              ViverAI · nato anche per lui
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}