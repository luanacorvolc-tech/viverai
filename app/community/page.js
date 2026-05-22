import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Community() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-oliva-10 text-oliva text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">Community</span>
          <h1 className="font-serif text-6xl text-oliva font-light leading-tight mb-6">
            Condividi il tuo <em className="italic text-terra">verde</em>
          </h1>
          <p className="text-ink-med text-lg font-light leading-relaxed mb-8">
            Pollici verdi che si aiutano a vicenda. Foto, consigli, storie. Il giardinaggio è più bello insieme.
          </p>
          <div className="bg-white rounded-2xl p-12 border border-oliva-15">
            <p className="text-6xl mb-4">👥</p>
            <p className="text-ink-med">La community sta crescendo. Iscriviti per essere tra i primi.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}