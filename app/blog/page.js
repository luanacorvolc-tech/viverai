import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-oliva-10 text-oliva text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">Blog & Rivista</span>
          <h1 className="font-serif text-6xl text-oliva font-light leading-tight mb-6">
            Le <em className="italic text-terra">storie</em> del verde
          </h1>
          <p className="text-ink-med text-lg font-light leading-relaxed mb-8">
            Articoli, approfondimenti e racconti dal mondo del giardinaggio, della natura e dell'arte di vivere bene.
          </p>
          <div className="bg-white rounded-2xl p-12 border border-oliva-15">
            <p className="text-6xl mb-4">📰</p>
            <p className="text-ink-med">Stiamo curando i primi articoli con cura artigianale. Torna presto.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}