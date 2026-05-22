import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contatti() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-oliva-10 text-oliva text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">Contatti</span>
          <h1 className="font-serif text-6xl text-oliva font-light leading-tight mb-6">
            Scrivici <em className="italic text-terra">due righe</em>
          </h1>
          <p className="text-ink-med text-lg font-light leading-relaxed mb-8">
            Per collaborazioni, segnalazioni, partnership editoriali o anche solo per dirci ciao.
          </p>
          <div className="bg-white rounded-2xl p-12 border border-oliva-15">
            <p className="text-6xl mb-4">✉️</p>
            <p className="text-ink-med">Il modulo contatti completo sarà presto attivo.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}