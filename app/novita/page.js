import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default async function SingoloSpecialePage({ params }) {
  const { slug } = await params

  const { data: speciale } = await supabase
    .from('speciali')
    .select('*')
    .eq('slug', slug)
    .eq('pubblicato', true)
    .single()

  if (!speciale) notFound()

  const { data: blocchi } = await supabase
    .from('speciali_blocchi')
    .select('*')
    .eq('speciale_id', speciale.id)
    .order('ordine', { ascending: true })

  const listaBlocchi = blocchi || []

  return (
    <>
      {/* Hero con immagine di copertina dello speciale */}
      <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden bg-oliva flex items-end">
        {speciale.immagine_copertina && (
          <img
            src={speciale.immagine_copertina}
            alt={speciale.titolo}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 pb-12 max-w-4xl">
          {speciale.categoria && (
            <span className="inline-block bg-terra text-white text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-sm mb-4">
              {speciale.categoria}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight mb-3">
            {speciale.titolo}
          </h1>
          {speciale.autore && (
            <p className="text-sm text-white/80 font-light">{speciale.autore}</p>
          )}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Bottone per tornare all'indice degli speciali */}
        <Link
          href="/speciali"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-4 py-2 mb-10 hover:border-oliva hover:text-oliva transition-colors"
        >
          ← Pagine Speciali
        </Link>

        {speciale.descrizione_breve && (
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
            {speciale.descrizione_breve}
          </p>
        )}

        {/* I blocchi della mini-collezione, uno sotto l'altro */}
        <div className="space-y-12">
          {listaBlocchi.map((b) => (
            <section key={b.id}>
              {b.immagine && (
                <img
                  src={b.immagine}
                  alt={b.titolo_blocco}
                  className="w-full rounded-lg mb-5 object-cover max-h-[400px]"
                />
              )}
              {b.titolo_blocco && (
                <h2 className="font-serif text-2xl text-oliva font-light mb-3">
                  {b.titolo_blocco}
                </h2>
              )}
              {b.testo && (
                <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                  {b.testo}
                </p>
              )}
            </section>
          ))}

          {listaBlocchi.length === 0 && (
            <p className="text-center text-gray-400 py-10 text-sm">
              Contenuto in arrivo.
            </p>
          )}
        </div>
      </main>
    </>
  )
}