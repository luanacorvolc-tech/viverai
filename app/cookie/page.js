import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cookie() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl text-oliva font-light mb-8">Cookie Policy</h1>
          <p className="text-ink-med leading-relaxed mb-4">
            Questo sito usa cookie tecnici essenziali per il funzionamento. Non usiamo cookie di profilazione.
          </p>
          <p className="text-ink-light italic">Versione preliminare. Documento completo in arrivo.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}