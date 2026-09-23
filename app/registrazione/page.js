
export default async function RegistrazionePage({ searchParams }) {
  const params = await searchParams
  const piano = params?.piano === 'premium' ? 'premium' : 'free'

  return (
    <>
      <main className="min-h-[60vh] bg-cream flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_2px_20px_rgba(44,42,36,0.08)] p-8 sm:p-10 text-center">
          <span className="inline-block bg-oliva-10 text-oliva text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-5">
            {piano === 'premium' ? '🌿 Membership Premium' : '🌿 Iscrizione gratuita'}
          </span>
          <h1 className="font-serif text-3xl text-oliva font-light leading-tight mb-4">
            Quasi pronti
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            La pagina di registrazione è in costruzione. Prestissimo potrai creare il tuo account
            ViverAI {piano === 'premium' ? 'e attivare la Membership Premium' : 'gratuitamente'} direttamente da qui.
          </p>
          <p className="text-xs text-gray-400">
            Nel frattempo, continua a leggere i nostri articoli sul{' '}
            <a href="/blog" className="text-terra font-medium hover:underline">
              Blog &amp; Rivista
            </a>
            .
          </p>
        </div>
      </main>
    </>
  )
}