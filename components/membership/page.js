import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const VANTAGGI_FREE = [
  'Accesso a tutti gli articoli del blog: giardinaggio, agricoltura, nutraceutica, erboristeria, viaggi verdi',
  'Ingresso libero alla community ViverAI: scambia foto, consigli e domande con altri appassionati',
  'Notizie aggiornate su novità del settore verde',
  'Possibilità di partecipare a eventi gratuiti organizzati con vivai e aziende partner',
  'Carta membership ViverAI con sconti dedicati presso i nostri partner',
  'La possibilità di contribuire con donazioni a progetti ambientali',
]

const VANTAGGI_PREMIUM = [
  'Tutto quello incluso nel piano Free',
  'Chatbot AI superspecializzato in piante, coltivazione e cura del verde, sempre a disposizione',
  'Ricerca completa nel nostro database di oltre 10.000 articoli: la grande enciclopedia del verde',
  'Accesso agli Speciali: approfondimenti esclusivi riservati ai membri Premium',
  'Newsletter settimanale personalizzata sulle categorie che ami di più',
]

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        {/* Hero */}
        <div className="relative w-full py-20 px-8 bg-gradient-to-b from-oliva to-[#16240f] text-center overflow-hidden">
          <span className="inline-block bg-white/15 text-white text-xs font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            🌿 Membership ViverAI
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-light leading-tight max-w-2xl mx-auto mb-5">
            Vivi il verde, <em className="text-[#d4c48a] not-italic">a modo tuo</em>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Una community libera e gratuita per chi ama piante, orti e natura — con la possibilità di
            andare oltre, per chi vuole strumenti in più.
          </p>
        </div>

        {/* Piani */}
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Piano Free */}
          <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(44,42,36,0.08)] p-8 sm:p-10 flex flex-col">
            <h2 className="font-serif text-2xl text-oliva font-light mb-1">Free</h2>
            <p className="text-sm text-gray-500 mb-6">Per chiunque ami il verde</p>
            <div className="mb-8">
              <span className="font-serif text-4xl text-oliva font-light">0€</span>
              <span className="text-sm text-gray-400"> / sempre</span>
            </div>
            <ul className="space-y-3 mb-10 flex-1">
              {VANTAGGI_FREE.map((vantaggio) => (
                <li key={vantaggio} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                  <span className="text-oliva mt-0.5 flex-shrink-0">✓</span>
                  {vantaggio}
                </li>
              ))}
            </ul>
            <Link
              href="/registrazione"
              className="text-center bg-oliva-10 text-oliva font-semibold text-sm py-3 rounded-full hover:bg-oliva hover:text-white transition-colors"
            >
              Iscriviti gratis
            </Link>
          </div>

          {/* Piano Premium */}
          <div className="relative bg-[#1a2d22] rounded-2xl shadow-[0_8px_40px_rgba(44,42,36,0.25)] p-8 sm:p-10 flex flex-col text-white overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#d4c48a] text-[#1a2d22] text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-bl-xl">
              Consigliato
            </div>
            <h2 className="font-serif text-2xl text-[#f0ebe0] font-light mb-1">Premium</h2>
            <p className="text-sm text-[#c9a87a] mb-6">Per chi vuole andare oltre</p>
            <div className="mb-8">
              <span className="font-serif text-4xl text-[#f0ebe0] font-light">2,99€</span>
              <span className="text-sm text-white/50"> / anno</span>
              <p className="text-xs text-[#c9a87a]/80 mt-1.5 italic">
                Meno di un caffè all'anno, per tutto questo.
              </p>
            </div>
            <ul className="space-y-3 mb-10 flex-1">
              {VANTAGGI_PREMIUM.map((vantaggio) => (
                <li key={vantaggio} className="flex items-start gap-2.5 text-sm text-[#e0dcc8] leading-relaxed">
                  <span className="text-[#d4c48a] mt-0.5 flex-shrink-0">✦</span>
                  {vantaggio}
                </li>
              ))}
            </ul>
            <Link
              href="/registrazione?piano=premium"
              className="text-center bg-[#d4c48a] text-[#1a2d22] font-semibold text-sm py-3 rounded-full hover:bg-white transition-colors"
            >
              Attiva la Membership Premium
            </Link>
            <p className="text-[11px] text-white/40 text-center mt-4">
              Disdici quando vuoi, nessun rinnovo automatico senza avviso.
            </p>
          </div>

        </div>

        {/* FAQ / Trust */}
        <div className="max-w-3xl mx-auto px-6 pb-20">
          <h3 className="font-serif text-2xl text-oliva font-light text-center mb-8">
            Domande frequenti
          </h3>
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-5 shadow-[0_2px_16px_rgba(44,42,36,0.06)]">
              <p className="font-medium text-oliva text-sm mb-1.5">Perché la Membership Premium costa così poco?</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Crediamo che l'accesso alla conoscenza sul verde debba essere alla portata di tutti.
                Il contributo simbolico ci aiuta a sostenere i costi del database e del chatbot, mantenendo il prezzo il più basso possibile.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-[0_2px_16px_rgba(44,42,36,0.06)]">
              <p className="font-medium text-oliva text-sm mb-1.5">Posso passare da Free a Premium quando voglio?</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Sì, puoi attivare la Membership Premium in qualsiasi momento dal tuo profilo, senza dover ricominciare da capo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-[0_2px_16px_rgba(44,42,36,0.06)]">
              <p className="font-medium text-oliva text-sm mb-1.5">Cosa succede se non rinnovo?</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nessun problema: il tuo account torna semplicemente al piano Free, senza perdere l'accesso alla community e agli articoli.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}