import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AzioniArticolo from '@/components/AzioniArticolo'

async function getArticolo(slug) {
  const { data } = await supabase
    .from('articoli')
    .select('*')
    .eq('slug', slug)
    .eq('pubblicato', true)
    .single()
  return data
}

export default async function ArticoloPage({ params }) {
  const { slug } = await params
  const articolo = await getArticolo(slug)
  if (!articolo) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-24 px-8">
        <article className="max-w-3xl mx-auto">
          {articolo.categoria && (
            <span className="inline-block bg-oliva-10 text-oliva text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">
              {articolo.categoria}
            </span>
          )}
          <h1 className="font-serif text-5xl text-oliva font-light leading-tight mb-6">
            {articolo.titolo}
          </h1>
          <div className="flex items-center gap-4 text-sm text-ink-med mb-8 pb-8 border-b border-oliva-15">
            <span>{articolo.autore}</span>
            <span>·</span>
            <span>{new Date(articolo.created_at).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          {articolo.immagine_copertina && (
            <img src={articolo.immagine_copertina} alt={articolo.titolo} className="w-full rounded-2xl mb-10 object-cover max-h-96" />
          )}

          {articolo.estratto && (
            <p className="text-xl text-ink-med font-light leading-relaxed mb-8 italic border-l-4 border-terra pl-4">
              {articolo.estratto}
            </p>
          )}

          {/* Corpo dell'articolo: il campo "contenuto" su Supabase è testo in formato Markdown
              (titoli ##, paragrafi separati da riga vuota), quindi va interpretato con react-markdown
              invece di essere stampato come stringa grezza, altrimenti i simboli ## resterebbero visibili. */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-oliva prose-headings:font-light prose-p:text-ink-med prose-p:leading-relaxed">
            <Markdown>{articolo.contenuto}</Markdown>
          </div>

          {/* Pulsanti marketing: Salva, Condividi, Scopri la membership */}
          <AzioniArticolo titolo={articolo.titolo} slug={articolo.slug} />
        </article>
      </main>
      <Footer />
    </>
  )
}