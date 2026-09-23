'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

const AUTOPLAY_INTERVAL = 6000 // millisecondi tra un cambio automatico e il successivo

export default function HeroSlider({ articoli }) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback(
    (index) => {
      if (!articoli || articoli.length === 0) return
      const total = articoli.length
      // gestisce indici negativi o oltre il limite, facendo "girare" il carosello
      const next = ((index % total) + total) % total
      setCurrent(next)
    },
    [articoli]
  )

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay: avanza automaticamente, ma si resetta ogni volta che "current" cambia
  // (quindi anche un click manuale ridà il tempo pieno prima del prossimo cambio automatico)
  useEffect(() => {
    if (!articoli || articoli.length <= 1) return
    const timer = setInterval(() => {
      goNext()
    }, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [current, articoli, goNext])

  if (!articoli || articoli.length === 0) {
    return null
  }

  const slide = articoli[current]

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-oliva flex items-end group">
      {/* Immagine di sfondo della slide corrente */}
      {slide.immagine_copertina && (
        <img
          key={slide.id}
          src={slide.immagine_copertina}
          alt={slide.titolo}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
      )}

      {/* Ombreggiatura per leggibilità del testo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Contenuto testuale */}
      <div className="relative z-10 px-8 pb-16 max-w-4xl">
        {slide.categoria && (
          <span className="inline-block bg-white/20 text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            {slide.categoria}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight mb-4">
          {slide.titolo}
        </h1>
        {slide.estratto && (
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6 max-w-2xl line-clamp-3">
            {slide.estratto}
          </p>
        )}
        <Link
          href={`/blog/${slide.slug}`}
          className="inline-block bg-white text-oliva font-medium text-sm tracking-wide uppercase px-6 py-3 rounded-full hover:bg-[#d4c48a] hover:text-white transition"
        >
          Leggi l'articolo
        </Link>
      </div>

      {/* Freccette di navigazione manuale, visibili sempre su mobile e al passaggio del mouse su desktop */}
      {articoli.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Slide precedente"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition opacity-70 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Slide successiva"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition opacity-70 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Pallini di navigazione */}
      {articoli.length > 1 && (
        <div className="absolute bottom-5 right-8 z-20 flex gap-2">
          {articoli.map((a, index) => (
            <button
              key={a.id}
              onClick={() => goTo(index)}
              aria-label={`Vai alla slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? 'w-7 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
