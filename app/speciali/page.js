import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function SpecialiPage() {
  const { data } = await supabase
    .from('speciali')
    .select('*')
    .eq('pubblicato', true)
    .order('created_at', { ascending: false })

  const speciali = data || []

  return (
    <>
      {/* Hero — stesso stile del blog/novità */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-oliva flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 px-8 pb-12 max-w-4xl">
          <span className="inline-block bg-white/20 text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            ⭐ Pagine Speciali
          </span>
          <h1 className="font-serif text-5xl text-white font-light leading-tight">
            Articoli <em className="text-[#d4c48a] not-italic">speciali</em>
          </h1>
          <p className="text-sm text-white/70 font-light mt-2">
            I contenuti esclusivi selezionati e curati dalla redazione ViverAI
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-6 pb-6 border-b border-gray-100">
          <div className="text-[11px] text-terra tracking-widest uppercase font-medium mb-1">
            ⭐ Scelti dalla redazione
          </div>
          <h2 className="font-serif text-2xl text-oliva font-light">
            Articoli <em className="text-terra not-italic">speciali</em>
          </h2>
        </div>

        {speciali.length === 0 && (
          <p className="text-center text-gray-400 py-16 text-sm">
            Nessuno speciale pubblicato al momento.
          </p>
        )}

        {/* Griglia di "copertine a libro", stile slider Netflix ma in formato statico/scrollabile */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
          {speciali.map((s) => (
            <Link key={s.id} href={`/speciali/${s.slug}`} className="block group">
              <article className="relative rounded-md overflow-hidden aspect-[2/3] shadow-[0_4px_20px_rgba(44,42,36,0.15)] hover:shadow-[0_8px_30px_rgba(44,42,36,0.25)] hover:-translate-y-1 transition-all duration-300">
                {s.immagine_copertina && (
                  <img
                    src={s.immagine_copertina}
                    alt={s.titolo}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {s.categoria && (
                  <span className="absolute top-3 left-3 z-10 bg-white/20 backdrop-blur-sm text-white text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                    {s.categoria}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="font-serif text-white text-base font-light leading-snug mb-1 drop-shadow">
                    {s.titolo}
                  </h3>
                  {s.autore && (
                    <p className="text-[11px] text-white/80 drop-shadow">{s.autore}</p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}