import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VerdeScuola() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-terra-10 text-terra text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">VerdeScuola</span>
          <h1 className="font-serif text-6xl text-oliva font-light leading-tight mb-6">
            Il verde a <em className="italic text-terra">scuola</em>
          </h1>
          <p className="text-ink-med text-lg font-light leading-relaxed mb-8">
            Orti scolastici, FarmBot, didattica per insegnanti. Coltivare le menti con la terra.
          </p>
          <div className="bg-white rounded-2xl p-12 border border-oliva-15">
            <p className="text-6xl mb-4">🎓</p>
            <p className="text-ink-med">I progetti per le scuole saranno presto disponibili qui.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}