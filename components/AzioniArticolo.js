'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function AzioniArticolo({ titolo, slug }) {
  const [salvato, setSalvato] = useState(false)
  const [menuCondividiAperto, setMenuCondividiAperto] = useState(false)
  const [linkCopiato, setLinkCopiato] = useState(false)
  const menuRef = useRef(null)

  // Chiude il menu "Condividi" se si clicca fuori da esso
  useEffect(() => {
    function gestisciClickFuori(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuCondividiAperto(false)
      }
    }
    document.addEventListener('mousedown', gestisciClickFuori)
    return () => document.removeEventListener('mousedown', gestisciClickFuori)
  }, [])

  const urlArticolo = typeof window !== 'undefined'
    ? `${window.location.origin}/blog/${slug}`
    : `/blog/${slug}`

  const copiaLink = async () => {
    try {
      await navigator.clipboard.writeText(urlArticolo)
      setLinkCopiato(true)
      setTimeout(() => setLinkCopiato(false), 2000)
    } catch {
      // Fallback silenzioso se l'API clipboard non è disponibile (es. contesto non sicuro)
    }
  }

  return (
    <div className="flex items-center gap-3 py-6 border-t border-b border-oliva-15 my-10">
      {/* Salva — solo visivo per ora, in attesa del sistema di login utenti */}
      <button
        onClick={() => setSalvato(!salvato)}
        aria-pressed={salvato}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
          salvato
            ? 'bg-oliva text-white border-oliva'
            : 'bg-white text-gray-600 border-gray-200 hover:border-oliva hover:text-oliva'
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill={salvato ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {salvato ? 'Salvato' : 'Salva'}
      </button>

      {/* Condividi — menu a comparsa con social (link da collegare quando le pagine social saranno pronte) */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuCondividiAperto(!menuCondividiAperto)}
          aria-expanded={menuCondividiAperto}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:border-oliva hover:text-oliva transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
            <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
          </svg>
          Condividi
        </button>

        {menuCondividiAperto && (
          <div className="absolute z-20 top-full left-0 mt-2 bg-white rounded-xl shadow-[0_8px_30px_rgba(44,42,36,0.15)] p-2 min-w-[200px]">
            {/* TODO: aggiornare questi href quando le pagine social di ViverAI saranno pubblicate */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.8.8-1.8 1.7V12h3.1l-.5 2.9h-2.6v7A10 10 0 0022 12z"/></svg>
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000"><path d="M18.9 2H22l-7.6 8.7L22.5 22h-6.4l-5-6.6-5.7 6.6H2l8.1-9.3L1.8 2h6.5l4.5 6 6.1-6z"/></svg>
              X (Twitter)
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.4-2 1.5-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3 0-1.5.8-2.2 1-2.5.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.7.8 2 .9.3.2.5.2.6.4.1.2.1.8-.1 1.5z"/></svg>
              WhatsApp
            </a>
            <button
              onClick={copiaLink}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 text-left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
              {linkCopiato ? 'Link copiato ✓' : 'Copia link'}
            </button>
          </div>
        )}
      </div>

      {/* Scopri la membership — CTA principale, più evidente */}
      <Link
        href="/membership"
        className="ml-auto flex items-center gap-2 px-5 py-2 rounded-full bg-terra text-white text-sm font-semibold hover:bg-[#b5663f] transition-colors"
      >
        🌿 Scopri la Membership
      </Link>
    </div>
  )
}