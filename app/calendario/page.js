'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { piante, categorie, mesi, mesiCompleti } from '../data/piante';

function CalendarioPianta({ semina, raccolta, meseAttivo }) {
  return (
    <div className="flex gap-[2px] mt-3">
      {mesi.map((mese, i) => {
        const meseNum = i + 1;
        const isSemina = semina.includes(meseNum);
        const isRaccolta = raccolta.includes(meseNum);
        const isAttivo = meseAttivo === meseNum;
        let bgColor = '#e8e3d8';
        if (isSemina && isRaccolta) bgColor = '#8a9e6e';
        else if (isSemina) bgColor = '#b8caa0';
        else if (isRaccolta) bgColor = '#b85c38';
        return (
          <div
            key={i}
            className="flex-1 text-center text-[9px] font-medium py-1 rounded transition-all"
            style={{
              backgroundColor: bgColor,
              color: bgColor === '#e8e3d8' ? '#9a9488' : '#ffffff',
              outline: isAttivo ? '2px solid #3d4a22' : 'none',
              transform: isAttivo ? 'scale(1.15)' : 'scale(1)'
            }}
          >
            {mese}
          </div>
        );
      })}
    </div>
  );
}

export default function Calendario() {
  const [ricerca, setRicerca] = useState('');
  const [categoriaSelezionata, setCategoriaSelezionata] = useState('Tutti');
  const [meseSelezionato, setMeseSelezionato] = useState(null);

  const pianteFiltrate = useMemo(() => {
    return piante.filter(p => {
      const ricercaLower = ricerca.toLowerCase();
      const matchRicerca = !ricerca || p.nome.toLowerCase().includes(ricercaLower) || p.scientifico.toLowerCase().includes(ricercaLower) || p.categoria.toLowerCase().includes(ricercaLower);
      const matchCategoria = categoriaSelezionata === 'Tutti' || p.categoria === categoriaSelezionata;
      const matchMese = !meseSelezionato || p.semina.includes(meseSelezionato) || p.raccolta.includes(meseSelezionato);
      return matchRicerca && matchCategoria && matchMese;
    });
  }, [ricerca, categoriaSelezionata, meseSelezionato]);

  const filtriAttivi = ricerca || categoriaSelezionata !== 'Tutti' || meseSelezionato;
  const resetFiltri = () => { setRicerca(''); setCategoriaSelezionata('Tutti'); setMeseSelezionato(null); };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">

        <section className="bg-beige py-16 px-8 border-b border-oliva-15">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block bg-terra-10 text-terra text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">Calendario interattivo</span>
            <h1 className="font-serif text-6xl text-oliva font-light leading-tight mb-4">163 piante, <em className="italic text-terra">un giardino tuo</em></h1>
            <p className="text-ink-med text-lg font-light max-w-2xl mx-auto leading-relaxed">Scopri quando seminare, quando raccogliere. Tutto il sapere contadino, organizzato per te.</p>
          </div>
        </section>

        <section className="bg-white py-8 px-8 border-b border-oliva-15 sticky top-[96px] z-30">
          <div className="max-w-7xl mx-auto space-y-5">
            <div className="relative max-w-2xl mx-auto">
              <input type="text" value={ricerca} onChange={(e) => setRicerca(e.target.value)} placeholder="🔍 Cerca una pianta per nome o categoria..." className="w-full px-5 py-3 pr-12 rounded-full bg-cream border border-oliva-15 text-ink text-sm outline-none focus:border-oliva focus:ring-2 focus:ring-oliva/20 transition-all" />
              {ricerca && <button onClick={() => setRicerca('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-light hover:text-terra transition-colors text-lg">✕</button>}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categorie.map(cat => (
                <button key={cat} onClick={() => setCategoriaSelezionata(cat)} className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${categoriaSelezionata === cat ? 'bg-oliva text-white' : 'bg-cream text-ink-med border border-oliva-15 hover:border-oliva hover:text-oliva'}`}>{cat}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center items-center">
              <span className="text-[11px] uppercase tracking-wider text-ink-light mr-2">Mese:</span>
              {mesiCompleti.map((mese, i) => {
                const meseNum = i + 1;
                const attivo = meseSelezionato === meseNum;
                return <button key={meseNum} onClick={() => setMeseSelezionato(attivo ? null : meseNum)} className={`px-2.5 py-1 rounded text-[11px] font-medium tracking-wide transition-all ${attivo ? 'bg-terra text-white' : 'bg-cream text-ink-med border border-oliva-15 hover:border-terra hover:text-terra'}`}>{mesi[i]}</button>;
              })}
            </div>
            {filtriAttivi && <div className="text-center"><button onClick={resetFiltri} className="text-sm text-terra hover:text-oliva font-medium underline transition-colors">✕ Resetta tutti i filtri</button></div>}
          </div>
        </section>

        <section className="bg-cream py-6 px-8 border-b border-oliva-15">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <p className="text-ink-med">
              <span className="font-serif text-3xl text-oliva font-semibold">{pianteFiltrate.length}</span>
              <span className="ml-2 text-sm">piant{pianteFiltrate.length === 1 ? 'a' : 'e'} trovat{pianteFiltrate.length === 1 ? 'a' : 'e'}</span>
              {meseSelezionato && <span className="ml-2 text-sm text-terra italic">per {mesiCompleti[meseSelezionato - 1]}</span>}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#b8caa0' }}></span><span className="text-ink-med">Semina</span></div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#b85c38' }}></span><span className="text-ink-med">Raccolta</span></div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#8a9e6e' }}></span><span className="text-ink-med">Entrambi</span></div>
            </div>
          </div>
        </section>

        <section className="py-12 px-8">
          <div className="max-w-7xl mx-auto">
            {pianteFiltrate.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-oliva-15">
                <p className="text-7xl mb-4 opacity-60">🌵</p>
                <h3 className="font-serif text-2xl text-oliva mb-2">Nessuna pianta trovata</h3>
                <p className="text-ink-med text-sm mb-6">Prova a cambiare i filtri o resettarli</p>
                <button onClick={resetFiltri} className="bg-oliva text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-oliva-med transition-colors">Resetta filtri</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pianteFiltrate.map((pianta, i) => (
                  <Link key={pianta.slug} href={`/calendario/${pianta.slug}`} className="bg-white rounded-2xl p-6 border border-oliva-15 hover:shadow-[0_10px_44px_rgba(44,42,36,0.12)] hover:-translate-y-1 transition-all cursor-pointer group block" style={{ animation: `fadeIn 0.4s ease-out ${i * 0.05}s backwards` }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-6xl group-hover:scale-110 transition-transform">{pianta.emoji}</div>
                      <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-terra bg-terra-10 px-2 py-1 rounded-full">{pianta.categoria}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-oliva font-semibold leading-tight mt-2">{pianta.nome}</h3>
                    <p className="text-ink-light text-xs italic mb-3">{pianta.scientifico}</p>
                    <CalendarioPianta semina={pianta.semina} raccolta={pianta.raccolta} meseAttivo={meseSelezionato} />
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-oliva-15 text-xs">
                      <div><p className="text-ink-light uppercase tracking-wider text-[10px] mb-1">Esposizione</p><p className="text-ink-med">{pianta.esposizione}</p></div>
                      <div><p className="text-ink-light uppercase tracking-wider text-[10px] mb-1">Difficoltà</p><p className="text-ink-med">{pianta.difficolta}</p></div>
                    </div>
                    <span className="mt-4 inline-block text-terra text-sm font-medium group-hover:translate-x-1 transition-transform">Scopri di più →</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
      <style jsx>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </>
  );
}