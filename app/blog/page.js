import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import HeroSlider from '@/components/HeroSlider'

const CATEGORIE = [
  { label: 'Tutti', value: null, emoji: '🌿' },
  { label: 'Giardinaggio', value: 'Giardinaggio', emoji: '🌹' },
  { label: 'Coltivazione', value: 'Coltivazione', emoji: '🌱' },
  { label: 'Uliveto', value: 'Uliveto', emoji: '🫒' },
  { label: 'Vigneto', value: 'Vigneto', emoji: '🍇' },
  { label: 'Agritech', value: 'Agritech', emoji: '🤖' },
  { label: 'Ambiente', value: 'Ambiente', emoji: '🌍' },
  { label: 'Piante rare', value: 'Piante rare', emoji: '🍋' },
  { label: 'Viaggi', value: 'Viaggi', emoji: '✈️' },
  { label: 'Speciali', value: 'Speciali', emoji: '⭐' },
]

const ORDINAMENTI = [
  { label: 'Novità', value: 'novita', emoji: '✨' },
  { label: 'Più recenti', value: 'recenti', emoji: '🕐' },
  { label: 'Più letti', value: 'letti', emoji: '📖' },
]

export default async function BlogList({ searchParams }) {
  const params = await searchParams
  const categoriaAttiva = params?.categoria || null
  const ordinaAttivo = params?.ordina || 'recenti'

  // SLIDER: sempre gli ultimi 6 articoli pubblicati, a prescindere dal filtro categoria.
  // È un contenuto "vetrina" fisso in cima alla pagina, identico su ogni vista del blog.
  const { data: sliderData } = await supabase
    .from('articoli')
    .select('*')
    .eq('pubblicato', true)
    .order('created_at', { ascending: false })
    .limit(6)

  const sliderArticoli = sliderData || []
  const sliderIds = new Set(sliderArticoli.map((a) => a.id))

  // GRIGLIA: rispetta il filtro categoria selezionato dall'utente.
  let query = supabase
    .from('articoli')
    .select('*')
    .eq('pubblicato', true)

  if (categoriaAttiva) {
    query = query.eq('categoria', categoriaAttiva)
  }

  // TEMPORANEO: "novita" e "letti" ricadono entrambi sull'ordine per data,
  // finché non esistono i campi reali (data pubblicazione vs data creazione,
  // contatore visualizzazioni). Quando li aggiungi, gestisci qui i tre casi.
  query = query.order('created_at', { ascending: false })

  const { data: articoliFiltrati } = await query

  // Nella vista "Tutti" togliamo dalla griglia gli articoli già mostrati nello slider,
  // per non vederli due volte. Con un filtro categoria attivo invece li lasciamo:
  // lo slider è "vetrina globale", la griglia è la vista specifica di quella categoria.
  let listaGrid = articoliFiltrati || []
  if (!categoriaAttiva) {
    listaGrid = listaGrid.filter((a) => !sliderIds.has(a.id))
  }

  const inEvidenza = listaGrid[0] || null
  const resto = listaGrid.slice(1)

  const linkCategoria = (value) => {
    const sp = new URLSearchParams()
    if (value) sp.set('categoria', value)
    if (ordinaAttivo && ordinaAttivo !== 'recenti') sp.set('ordina', ordinaAttivo)
    const qs = sp.toString()
    return `/blog${qs ? `?${qs}` : ''}`
  }

  const linkOrdina = (value) => {
    const sp = new URLSearchParams()
    if (categoriaAttiva) sp.set('categoria', categoriaAttiva)
    sp.set('ordina', value)
    return `/blog?${sp.toString()}`
  }

  return (
    <>
      {/* Hero: slider con gli ultimi 6 articoli, sempre visibile su ogni vista del blog */}
      {sliderArticoli.length > 0 ? (
        <HeroSlider articoli={sliderArticoli} />
      ) : (
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-oliva flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative z-10 px-8 pb-12 max-w-4xl">
            <span className="inline-block bg-white/20 text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
              📰 Blog &amp; Rivista
            </span>
            <h1 className="font-serif text-5xl text-white font-light leading-tight">
              La rivista <em className="text-[#d4c48a] not-italic">italiana del verde</em>
            </h1>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Filtri categoria + ordinamento */}
        <div className="flex flex-wrap gap-2.5 mb-6 pb-6 border-b border-gray-100">
          {CATEGORIE.map((cat) => {
            const attiva = cat.value === categoriaAttiva
            return (
              <Link
                key={cat.label}
                href={linkCategoria(cat.value)}
                className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  attiva
                    ? 'bg-oliva text-white border-oliva'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-oliva hover:text-oliva'
                }`}
              >
                <span>{cat.emoji}</span> {cat.label}
              </Link>
            )
          })}

          <span className="w-px bg-gray-200 mx-1 hidden sm:block" />

          {ORDINAMENTI.map((ord) => {
            const attivo = ord.value === ordinaAttivo
            return (
              <Link
                key={ord.value}
                href={linkOrdina(ord.value)}
                className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  attivo
                    ? 'bg-oliva text-white border-oliva'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-oliva hover:text-oliva'
                }`}
              >
                <span>{ord.emoji}</span> {ord.label}
              </Link>
            )
          })}
        </div>

        {/* Articolo in evidenza */}
        {inEvidenza && (
          <Link href={`/blog/${inEvidenza.slug}`} className="block">
            <article className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] rounded-lg overflow-hidden mb-8 cursor-pointer bg-white shadow-[0_2px_20px_rgba(44,42,36,0.08)] hover:shadow-[0_8px_30px_rgba(44,42,36,0.14)] transition-shadow duration-300 group">
              <div className="relative min-h-[280px] md:min-h-[340px] overflow-hidden">
                {inEvidenza.immagine_copertina && (
                  <img
                    src={inEvidenza.immagine_copertina}
                    alt={inEvidenza.titolo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {inEvidenza.categoria && (
                  <span className="absolute top-4 left-4 bg-terra text-white text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-sm">
                    {inEvidenza.categoria}
                  </span>
                )}
              </div>
              <div className="bg-white p-7 md:p-9 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-gray-400 tracking-wide mb-3">
                    {new Date(inEvidenza.created_at).toLocaleDateString('it-IT', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-oliva font-light leading-tight mb-3">
                    {inEvidenza.titolo}
                  </h2>
                  {inEvidenza.estratto && (
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {inEvidenza.estratto}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#EAF3DE] flex items-center justify-center text-[9px] font-bold text-oliva">
                      {(inEvidenza.autore || 'VA').slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs text-gray-500">{inEvidenza.autore}</span>
                  </div>
                  <span className="text-xs font-semibold text-terra">Leggi tutto →</span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Stato vuoto */}
        {resto.length === 0 && !inEvidenza && (
          <p className="text-center text-gray-400 py-16 text-sm">
            Nessun articolo trovato in questa categoria.
          </p>
        )}

        {/* Griglia degli altri articoli */}
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
          {resto.map((articolo) => (
            <Link key={articolo.id} href={`/blog/${articolo.slug}`} className="block">
              <article className="bg-white rounded-lg overflow-hidden shadow-[0_2px_20px_rgba(44,42,36,0.06)] hover:shadow-[0_8px_24px_rgba(44,42,36,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="relative h-[185px] overflow-hidden">
                  {articolo.immagine_copertina && (
                    <img
                      src={articolo.immagine_copertina}
                      alt={articolo.titolo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {articolo.categoria && (
                    <span className="absolute top-2.5 left-2.5 bg-black/45 backdrop-blur-sm text-white text-[9px] tracking-widest uppercase px-2 py-1 rounded-sm">
                      {articolo.categoria}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-[10px] text-gray-400 mb-1.5">
                    {new Date(articolo.created_at).toLocaleDateString('it-IT')}
                  </div>
                  <h3 className="font-serif text-base text-oliva font-light leading-snug mb-1.5">
                    {articolo.titolo}
                  </h3>
                  {articolo.estratto && (
                    <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                      {articolo.estratto}
                    </p>
                  )}
                </div>
                <div className="px-4 py-2.5 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[11px] text-gray-400">{articolo.autore}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </main>
    </>
  )
}