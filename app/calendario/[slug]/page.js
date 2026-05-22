import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPianta, piante, mesi, mesiCompleti } from '../../data/piante';

export function generateStaticParams() {
  return piante.map(p => ({ slug: p.slug }));
}

export default async function PiantaDettaglio({ params }) {
  const { slug } = await params;
  const pianta = getPianta(slug);

  if (!pianta) {
    notFound();
  }

  // Piante simili (stessa categoria, escludendo questa)
  const piantSimili = piante.filter(p => p.categoria === pianta.categoria && p.slug !== pianta.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">

        {/* BREADCRUMB */}
        <div className="bg-cream py-4 px-8 border-b border-oliva-15">
          <div className="max-w-5xl mx-auto text-xs text-ink-light">
            <Link href="/" className="hover:text-terra transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/calendario" className="hover:text-terra transition-colors">Calendario</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-med">{pianta.nome}</span>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-beige py-14 px-8 border-b border-oliva-15">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-9xl mb-6">{pianta.emoji}</div>
            <span className="inline-block bg-terra-10 text-terra text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">{pianta.categoria}</span>
            <h1 className="font-serif text-6xl text-oliva font-light leading-tight mb-2">
              {pianta.nome}
            </h1>
            <p className="font-serif text-xl italic text-ink-light">{pianta.scientifico}</p>
          </div>
        </section>

        {/* DESCRIZIONE */}
        <section className="py-12 px-8 bg-white border-b border-oliva-15">
          <div className="max-w-3xl mx-auto">
            <p className="text-ink text-lg leading-relaxed font-light">
              {pianta.descrizione}
            </p>
          </div>
        </section>

        {/* CALENDARIO GRANDE */}
        <section className="py-12 px-8 bg-cream border-b border-oliva-15">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-oliva font-light mb-2 text-center">
              Il <em className="italic text-terra">calendario</em> annuale
            </h2>
            <p className="text-ink-med text-sm text-center mb-8">Quando seminare e quando raccogliere</p>

            <div className="grid grid-cols-6 md:grid-cols-12 gap-2 max-w-4xl mx-auto">
              {mesi.map((mese, i) => {
                const meseNum = i + 1;
                const isSemina = pianta.semina.includes(meseNum);
                const isRaccolta = pianta.raccolta.includes(meseNum);
                let bgColor = '#e8e3d8';
                let textColor = '#9a9488';
                let label = '';
                if (isSemina && isRaccolta) { bgColor = '#8a9e6e'; textColor = '#ffffff'; label = 'S+R'; }
                else if (isSemina) { bgColor = '#b8caa0'; textColor = '#ffffff'; label = 'Semina'; }
                else if (isRaccolta) { bgColor = '#b85c38'; textColor = '#ffffff'; label = 'Raccolta'; }
                return (
                  <div
                    key={i}
                    className="text-center py-3 rounded-lg transition-all hover:scale-105"
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    <p className="text-[10px] uppercase tracking-wider mb-1 opacity-80">{mesiCompleti[i].substring(0, 3)}</p>
                    <p className="text-xl font-serif font-semibold">{mese}</p>
                    {label && <p className="text-[9px] mt-1 opacity-90">{label}</p>}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#b8caa0' }}></span>
                <span className="text-ink-med">Semina</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#b85c38' }}></span>
                <span className="text-ink-med">Raccolta</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#8a9e6e' }}></span>
                <span className="text-ink-med">Entrambi</span>
              </div>
            </div>
          </div>
        </section>

        {/* GRIGLIA INFORMAZIONI */}
        <section className="py-12 px-8 bg-white border-b border-oliva-15">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-cream rounded-2xl p-6 border border-oliva-15">
                <p className="text-3xl mb-3">☀️</p>
                <p className="text-[10px] uppercase tracking-wider text-ink-light mb-2">Esposizione</p>
                <p className="text-ink font-medium">{pianta.esposizione}</p>
              </div>

              <div className="bg-cream rounded-2xl p-6 border border-oliva-15">
                <p className="text-3xl mb-3">💧</p>
                <p className="text-[10px] uppercase tracking-wider text-ink-light mb-2">Irrigazione</p>
                <p className="text-ink-med text-sm leading-relaxed">{pianta.irrigazione}</p>
              </div>

              <div className="bg-cream rounded-2xl p-6 border border-oliva-15">
                <p className="text-3xl mb-3">🌍</p>
                <p className="text-[10px] uppercase tracking-wider text-ink-light mb-2">Terreno</p>
                <p className="text-ink-med text-sm leading-relaxed">{pianta.terreno}</p>
              </div>

              <div className="bg-cream rounded-2xl p-6 border border-oliva-15">
                <p className="text-3xl mb-3">📊</p>
                <p className="text-[10px] uppercase tracking-wider text-ink-light mb-2">Difficoltà</p>
                <p className="text-ink font-medium">{pianta.difficolta}</p>
              </div>

            </div>
          </div>
        </section>

        {/* PARASSITI + ABBINAMENTI */}
        <section className="py-12 px-8 bg-cream border-b border-oliva-15">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-oliva-15">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🐛</span>
                <h3 className="font-serif text-2xl text-oliva font-semibold">Parassiti e malattie</h3>
              </div>
              <p className="text-ink-light text-sm mb-4">Da tenere d'occhio:</p>
              <ul className="space-y-2">
                {pianta.parassiti.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-ink-med">
                    <span className="text-terra">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-oliva-15">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🤝</span>
                <h3 className="font-serif text-2xl text-oliva font-semibold">Abbinamenti ideali</h3>
              </div>
              <p className="text-ink-light text-sm mb-4">Piante amiche da coltivare vicino:</p>
              <div className="flex flex-wrap gap-2">
                {pianta.abbinamenti.map((a, i) => (
                  <span key={i} className="bg-oliva-10 text-oliva px-3 py-1.5 rounded-full text-sm font-medium">
                    {a}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CURIOSITÀ */}
        <section className="py-16 px-8 bg-oliva">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl block mb-4">✨</span>
            <p className="text-[11px] uppercase tracking-[0.16em] text-terra-light mb-3">Lo sapevi?</p>
            <p className="text-white font-serif text-2xl md:text-3xl font-light italic leading-relaxed">
              "{pianta.curiosita}"
            </p>
          </div>
        </section>

        {/* PIANTE SIMILI */}
        {piantSimili.length > 0 && (
          <section className="py-16 px-8 bg-cream">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl text-oliva font-light text-center mb-2">
                Altre <em className="italic text-terra">{pianta.categoria.toLowerCase()}</em>
              </h2>
              <p className="text-ink-med text-center mb-10">Da scoprire nel catalogo</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {piantSimili.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/calendario/${p.slug}`}
                    className="bg-white rounded-2xl p-6 border border-oliva-15 hover:shadow-[0_10px_44px_rgba(44,42,36,0.12)] hover:-translate-y-1 transition-all text-center group block"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{p.emoji}</div>
                    <h4 className="font-serif text-xl text-oliva font-semibold mb-1">{p.nome}</h4>
                    <p className="text-ink-light text-xs italic">{p.scientifico}</p>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/calendario"
                  className="inline-block bg-oliva text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-oliva-med transition-colors"
                >
                  ← Torna al catalogo completo
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}