'use client'

import { useState, useEffect, useRef } from 'react'

// ══════════════════════════════════════════════════════════════
// 8 SLIDE — testi esatti già decisi con Luana
// Immagini: i percorsi /images/XX.jpg corrispondono ai file
// già caricati in public/images/ del progetto viverai
// ══════════════════════════════════════════════════════════════
const SLIDES = [
  {
    // SLIDE 1 — solo immagine, immersiva (mano con fiori di notte)
    img: '/images/01-mano-fiori.jpg',
    fallback: 'linear-gradient(135deg,#0a0f05 0%,#1a2a10 60%,#0a1a0a 100%)',
    titolo: null,
    testo: null,
    durata: 6000,
  },
  {
    // SLIDE 2 — Manifesto principale
    img: '/images/02-verde.jpg',
    fallback: 'linear-gradient(135deg,#0a1a05 0%,#1a3010 70%,#0a2010 100%)',
    etichetta: 'Il nostro manifesto',
    titolo: 'Vivere con cura.',
    testo: 'ViverAI nasce dall\'amore per la natura, per la vita e per chi amiamo.\nUna piattaforma educativa del verde, per tutti coloro che vogliono vivere in modo più consapevole e sostenibile.',
    durata: 9000,
  },
  {
    // SLIDE 3 — Gioco di parole vivai
    img: '/images/03-giardino.jpg',
    fallback: 'linear-gradient(135deg,#0a1505 0%,#1a2810 70%,#0a1808 100%)',
    etichetta: 'Come nasce il nome',
    titolo: 'VIV-er-AI.\nNati nei vivai.',
    testo: 'Vivaio: luogo dove le piante crescono prima di essere messe a dimora.\nCome noi — cresciamo, ci nutriamo di sapere, poi fiorire nel mondo.',
    durata: 10000,
  },
  {
    // SLIDE 4 — Significato del nome completo
    img: '/images/04-natura.jpg',
    fallback: 'linear-gradient(135deg,#050f0a 0%,#0f2a1a 70%,#051a0f 100%)',
    etichetta: 'Nel nome c\'è tutto',
    titolo: 'Viver- + AI\n= Amore Infinito.',
    testo: 'Vivere · Intelligenza Artificiale · Amore Infinito.\nTre anime in una parola sola. Per Gianluca, che le incarnava tutte.',
    durata: 10000,
  },
  {
    // SLIDE 5 — Dedica a Gianluca con stella lampeggiante
    img: '/images/05-gianluca.jpg',
    fallback: 'linear-gradient(135deg,#05050f 0%,#0f0f2a 60%,#050a1a 100%)',
    etichetta: '✦ In memoriam',
    titolo: 'Per mio fratello\nGianluca Corvo.',
    testo: 'BLOB — Binary Large OBject.\nInformatico, poeta del codice, anima generosa.\nQuesto sito è la sua eredità più viva.',
    stellaLampeggia: true,
    durata: 11000,
  },
  {
    // SLIDE 6 — Polvere di stelle (ritratto Gianluca)
    img: '/images/06-stelle.jpg',
    fallback: 'linear-gradient(135deg,#02020a 0%,#0a0a20 60%,#020210 100%)',
    etichetta: 'Polvere di stelle',
    titolo: '«Mio fratello è polvere\ndi stelle brillante.»',
    testo: 'Luce vera che attraversa l\'universo, eterna e luminosa.\nIo e te, un giorno molto lontano, diventeremo la stessa luce\ne splenderemo tutti insieme nel silenzio infinito del cielo.',
    durata: 13000,
  },
  {
    // SLIDE 7 — Ricongiungersi (pineta + ciclamini)
    img: '/images/07-pineta-ciclamini.jpg',
    fallback: 'linear-gradient(135deg,#05100a 0%,#0f2a15 60%,#051a0a 100%)',
    etichetta: 'Ricongiungersi',
    titolo: 'La pineta di\nCastel Fusano.',
    testo: 'Dove Gianluca è cresciuto con gli amici "del ponte".\nDove la natura e i ricordi si mescolano tra i ciclamini e i pini.\nUn posto che continua a respirare per lui.',
    ctaLabel: '✦ Lascia una dedica',
    ctaHref: '#dediche',
    durata: 11000,
  },
  {
    // SLIDE 8 — Firma famiglia (universo con BLOB sole)
    img: '/images/08-universo.jpg',
    fallback: 'linear-gradient(135deg,#020208 0%,#080820 60%,#020210 100%)',
    etichetta: 'Famiglia Corvo · Toia',
    titolo: 'Una stella più lucente\nnel buio ci guida.',
    testo: 'Emidio · Luana · Sofia · Leonardo · Nello\nInsieme a Gianluca, per sempre.',
    ctaLabel: 'Esplora il blog →',
    ctaHref: '/blog',
    durata: 10000,
  },
]

// ══════════════════════════════════════════════════════════════
// COLORI DAL LOGO (foglioline verdi + terracotta compatibile)
// ══════════════════════════════════════════════════════════════
const BOX_COLORS = [
  { border: '#2D5016', bg: '#2D501610', text: '#2D5016' },
  { border: '#5a8a3a', bg: '#5a8a3a10', text: '#3d6a1e' },
  { border: '#7CAA2D', bg: '#7CAA2D10', text: '#4a7a10' },
  { border: '#c47c3a', bg: '#c47c3a10', text: '#a05a20' },
]

export default function ChiSiamo() {
  const [slide, setSlide] = useState(0)
  const [fase, setFase] = useState('immagine') // 'immagine' → 'velo' → 'testo'
  const [formData, setFormData] = useState({ nome:'', email:'', tipo:'accademica', testo:'' })
  const [previewUrl, setPreviewUrl] = useState(null)
  const [formSent, setFormSent] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const fileRef = useRef()
  const timerRef = useRef()

  // Logica slide: immagine chiara → velo → testo → prossima slide
  const goToSlide = (idx) => {
    setFase('immagine')
    setSlide(idx)
    setTimeout(() => setFase('velo'), 1500)
    setTimeout(() => setFase('testo'), 3000)
  }

  useEffect(() => {
    goToSlide(0)
  }, [])

  useEffect(() => {
    const cur = SLIDES[slide]
    timerRef.current = setTimeout(() => {
      goToSlide((slide + 1) % SLIDES.length)
    }, cur.durata)
    return () => clearTimeout(timerRef.current)
  }, [slide])

  const handleFile = e => {
    const f = e.target.files[0]
    if (!f) return
    setPreviewUrl(URL.createObjectURL(f))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setFormLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setFormLoading(false)
    setFormSent(true)
    const subject = formData.tipo === 'accademica'
      ? 'Dedica per la laurea in Informatica di Gianluca Corvo (BLOB)'
      : 'Una dedica affettuosa per Gianluca (BLOB)'
    window.open(
      `mailto:luana@corvoinformatica.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formData.testo)}`,
      '_blank'
    )
  }

  const cur = SLIDES[slide]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Lato', sans-serif; background: #faf9f5; color: #2a2a2a; }

        /* ── HERO ── */
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #05050f;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.2s ease;
          animation: kenburns 14s ease-in-out infinite alternate;
        }
        @keyframes kenburns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        .hero-velo {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.08) 30%,
            rgba(0,0,0,0.65) 100%
          );
          transition: opacity 1.5s ease;
        }

        /* Stelle decorative */
        .stars-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .star {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: pulse-star var(--dur, 3s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        @keyframes pulse-star {
          0%,100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.7); }
        }
        .star-blink {
          position: absolute;
          top: 14%;
          right: 10%;
          font-size: 2.2rem;
          animation: blink-star 1.2s ease-in-out infinite;
          z-index: 4;
        }
        @keyframes blink-star {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.2; transform: scale(.7); }
        }

        /* Contenuto hero */
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 28px;
          color: white;
          max-width: 820px;
          transition: opacity 1s ease, transform 1s ease;
        }
        .hero-content.nascosto {
          opacity: 0;
          transform: translateY(16px);
        }
        .hero-content.visibile {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-etichetta {
          display: inline-block;
          font-size: .78rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7CAA2D;
          background: rgba(0,0,0,0.35);
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 18px;
          border: 1px solid rgba(124,170,45,0.4);
        }
        .hero-titolo {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5.5vw, 4.4rem);
          font-weight: 700;
          line-height: 1.18;
          text-shadow: 0 2px 28px rgba(0,0,0,0.6);
          white-space: pre-line;
          margin-bottom: 20px;
        }
        .hero-testo {
          font-size: clamp(.9rem, 2vw, 1.15rem);
          font-weight: 300;
          line-height: 1.75;
          opacity: .9;
          text-shadow: 0 1px 8px rgba(0,0,0,0.5);
          white-space: pre-line;
          margin-bottom: 24px;
        }
        .hero-cta {
          display: inline-block;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.7);
          color: white;
          padding: 11px 28px;
          border-radius: 30px;
          font-size: .9rem;
          font-weight: 700;
          letter-spacing: .5px;
          text-decoration: none;
          transition: background .25s, border-color .25s;
          cursor: pointer;
        }
        .hero-cta:hover {
          background: rgba(255,255,255,0.15);
          border-color: white;
        }

        /* Dots */
        .hero-dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,.35);
          cursor: pointer;
          transition: all .3s;
          border: none;
          padding: 0;
        }
        .dot.active {
          background: white;
          transform: scale(1.35);
        }

        /* Frecce nav */
        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 5;
          transition: background .2s;
        }
        .hero-arrow:hover { background: rgba(0,0,0,0.55); }
        .hero-arrow.left  { left: 18px; }
        .hero-arrow.right { right: 18px; }

        /* ── SEZIONI ── */
        .sez { padding: 44px 20px; }
        .sez-sm { padding: 28px 20px; }
        .cont { max-width: 960px; margin: 0 auto; }
        .cont-wide { max-width: 1080px; margin: 0 auto; }

        /* Ricordarlo */
        .ricordarlo {
          background: #fff;
          text-align: center;
          border-bottom: 1px solid #e8e4d8;
        }
        .ricordarlo h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem,4vw,2.6rem);
          color: #2D5016;
          margin-bottom: 8px;
        }
        .ricordarlo p { font-size: 1.05rem; color: #777; font-weight: 300; }

        /* Dediche */
        .dediche-wrap {
          background: #f5f3ec;
          border-top: 3px solid #2D5016;
        }
        .dediche-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }
        @media(max-width:700px){ .dediche-grid { grid-template-columns: 1fr; } }

        .dbox {
          background: white;
          border-radius: 14px;
          padding: 24px 22px;
          box-shadow: 0 2px 18px rgba(45,80,22,.08);
          border: 1px solid #ddd9c8;
        }
        .dbox h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: #2D5016;
          margin: 8px 0 8px;
        }
        .dbox p { font-size: .87rem; color: #666; line-height: 1.65; margin-bottom: 10px; }
        .dlink {
          display: inline-block;
          color: #5a8a3a;
          font-weight: 700;
          font-size: .82rem;
          letter-spacing: .4px;
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          margin-bottom: 8px;
        }
        .dlink:hover { color: #2D5016; }
        hr.ddiv { border: none; border-top: 1px solid #e0ddd0; margin: 16px 0; }

        /* Form */
        .dform { display: flex; flex-direction: column; gap: 11px; }
        .dform label { font-size: .75rem; font-weight: 700; color: #444; letter-spacing: .3px; }
        .dform input, .dform textarea {
          width: 100%;
          border: 1.5px solid #d0ccbc;
          border-radius: 8px;
          padding: 9px 12px;
          font-family: 'Lato', sans-serif;
          font-size: .88rem;
          color: #2a2a2a;
          background: #faf9f5;
          outline: none;
          transition: border-color .2s;
        }
        .dform input:focus, .dform textarea:focus { border-color: #5a8a3a; }
        .dform textarea { resize: vertical; min-height: 100px; }
        .radio-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .radio-label { display: flex; align-items: center; gap: 6px; font-size: .83rem; cursor: pointer; color: #555; }
        .radio-label input { width: auto; }
        .foto-area {
          border: 2px dashed #b8c9a0;
          border-radius: 10px;
          padding: 14px;
          text-align: center;
          cursor: pointer;
          background: #f8faf4;
          transition: border-color .2s, background .2s;
          font-size: .78rem;
          color: #888;
        }
        .foto-area:hover { border-color: #5a8a3a; background: #eef8e0; }
        .foto-preview { width: 100%; max-height: 140px; object-fit: cover; border-radius: 8px; margin-top: 8px; }
        .btn-invia {
          background: #2D5016;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          font-family: 'Lato', sans-serif;
          font-size: .92rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: .4px;
          transition: background .2s;
        }
        .btn-invia:hover { background: #3d6a1e; }
        .btn-invia:disabled { opacity: .65; cursor: wait; }
        .form-ok {
          text-align: center;
          padding: 28px 14px;
          color: #2D5016;
        }
        .form-ok .big { font-size: 2.2rem; display: block; margin-bottom: 10px; }
        .form-ok h3 { font-family:'Playfair Display',serif; font-size: 1.2rem; margin-bottom: 6px; }
        .form-ok p { font-size: .82rem; color: #777; }
        .form-nota { text-align: center; font-size: .7rem; color: #bbb; margin-top: 4px; }

        /* In suo nome */
        .suo-nome { background: #fff; }
        .sn-head { text-align: center; margin-bottom: 24px; }
        .sn-head h2 {
          font-family:'Playfair Display',serif;
          font-size: clamp(1.4rem,3.5vw,2.2rem);
          color: #2D5016;
          margin-bottom: 4px;
        }
        .sn-head p { font-size: .88rem; color: #aaa; font-style: italic; }
        .gesti-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px,1fr));
          gap: 16px;
        }
        .gbox {
          border-radius: 14px;
          padding: 20px 18px;
          border: 2.5px solid;
          transition: transform .2s, box-shadow .2s;
        }
        .gbox:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,.09); }
        .gbox .em { font-size: 1.7rem; display: block; margin-bottom: 8px; }
        .gbox h4 { font-family:'Playfair Display',serif; font-size: .95rem; margin-bottom: 6px; }
        .gbox p { font-size: .78rem; color: #666; line-height: 1.6; margin-bottom: 12px; }
        .dona-link {
          display: inline-block;
          font-weight: 700;
          font-size: .78rem;
          letter-spacing: .4px;
          text-decoration: none;
          border-bottom: 2px solid currentColor;
          transition: opacity .2s;
        }
        .dona-link:hover { opacity: .7; }

        /* Footer */
        /* ── FOOTER ── */
        .footer {
          background: #162818;
          color: #d4c4a0;
          padding: 64px 40px 32px;
          font-family: 'Lato', sans-serif;
        }

        /* Blocco brand centrale */
        .footer-brand {
          text-align: right;
          margin-bottom: 56px;
          padding-right: 0;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(2.8rem, 6vw, 4.2rem);
          font-weight: 400;
          color: #d4c4a0;
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 10px;
        }
        .footer-piattaforma {
          font-size: .68rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #8aaa70;
          font-weight: 400;
          margin-bottom: 28px;
        }
        .footer-divider {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 14px;
          margin-bottom: 24px;
        }
        .footer-divider-line {
          height: 1px;
          width: 80px;
          background: #8aaa70;
          opacity: .5;
        }
        .footer-divider-stella {
          color: #c4a870;
          font-size: 1.1rem;
        }
        .footer-motto-wrap {
          text-align: right;
        }
        .footer-motto-1 {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.15rem;
          color: #d4c4a0;
          display: block;
          margin-bottom: 4px;
        }
        .footer-motto-2 {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.05rem;
          color: #c4a870;
          display: block;
        }

        /* Colonne link */
        .footer-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1080px;
          margin: 0 auto;
          border-top: 1px solid rgba(138,170,112,.2);
          padding-top: 40px;
        }
        @media(max-width:860px){ .footer-cols { grid-template-columns: 1fr 1fr; } }
        @media(max-width:480px){ .footer-cols { grid-template-columns: 1fr; } }

        .fc h5 {
          font-size: .65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8aaa70;
          margin-bottom: 18px;
          font-weight: 400;
        }
        .fc ul { list-style: none; }
        .fc ul li { margin-bottom: 12px; }
        .fc ul li a {
          color: #c8bca0;
          text-decoration: none;
          font-size: .88rem;
          font-weight: 300;
          transition: color .2s;
          letter-spacing: .2px;
        }
        .fc ul li a:hover { color: #e8dcc0; }
        .fc-blob {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: .82rem;
          color: #c4a870;
          display: block;
          margin-top: -6px;
          margin-bottom: 10px;
        }
        .fc-stella-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .fc-stella-link::before {
          content: '✦';
          color: #c4a870;
          font-size: .7rem;
        }
        .fc-sub { margin-top: 20px; }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1080px;
          margin: 40px auto 0;
          border-top: 1px solid rgba(138,170,112,.15);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-bottom p { font-size: .7rem; opacity: .4; color: #d4c4a0; }
        .footer-bottom .heart { color: #c4a870; }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO — 8 SLIDE CINEMATOGRAFICHE
      ══════════════════════════════════════════ */}
      <section className="hero">
        {/* Background */}
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url('${cur.img}'), ${cur.fallback}`,
            opacity: fase === 'immagine' ? 1 : 1,
          }}
        />

        {/* Velo scuro — appare gradualmente */}
        <div
          className="hero-velo"
          style={{ opacity: fase === 'immagine' ? 0 : 1 }}
        />

        {/* Stelle decorative */}
        <div className="stars-layer">
          {[
            {s:3,t:12,l:15,dur:3.2,del:.5},
            {s:2,t:22,l:72,dur:2.8,del:1.2},
            {s:4,t:55,l:28,dur:4,del:.3},
            {s:2,t:68,l:80,dur:3.5,del:2},
            {s:3,t:38,l:88,dur:2.5,del:.8},
            {s:2,t:18,l:50,dur:3.8,del:1.6},
            {s:3,t:78,l:42,dur:3,del:.1},
            {s:2,t:60,l:8,dur:4.2,del:2.3},
            {s:2,t:30,l:35,dur:3.1,del:1.8},
            {s:3,t:85,l:65,dur:2.9,del:.6},
          ].map((st,i)=>(
            <span
              key={i}
              className="star"
              style={{
                width:`${st.s}px`,height:`${st.s}px`,
                top:`${st.t}%`,left:`${st.l}%`,
                '--dur':`${st.dur}s`,
                '--delay':`${st.del}s`,
              }}
            />
          ))}
        </div>

        {/* Stella lampeggiante slide 5 */}
        {cur.stellaLampeggia && <span className="star-blink">✦</span>}

        {/* Contenuto testuale */}
        <div className={`hero-content ${fase === 'testo' ? 'visibile' : 'nascosto'}`}>
          {cur.etichetta && <span className="hero-etichetta">{cur.etichetta}</span>}
          {cur.titolo && <h1 className="hero-titolo">{cur.titolo}</h1>}
          {cur.testo && <p className="hero-testo">{cur.testo}</p>}
          {cur.ctaLabel && (
            <a className="hero-cta" href={cur.ctaHref}>{cur.ctaLabel}</a>
          )}
        </div>

        {/* Frecce */}
        <button
          className="hero-arrow left"
          onClick={() => { clearTimeout(timerRef.current); goToSlide((slide - 1 + SLIDES.length) % SLIDES.length) }}
          aria-label="Slide precedente"
        >‹</button>
        <button
          className="hero-arrow right"
          onClick={() => { clearTimeout(timerRef.current); goToSlide((slide + 1) % SLIDES.length) }}
          aria-label="Slide successiva"
        >›</button>

        {/* Dots */}
        <div className="hero-dots">
          {SLIDES.map((_,i) => (
            <button
              key={i}
              className={`dot${i===slide?' active':''}`}
              onClick={() => { clearTimeout(timerRef.current); goToSlide(i) }}
              aria-label={`Slide ${i+1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PER RICORDARLO
      ══════════════════════════════════════════ */}
      <section className="sez-sm ricordarlo" id="dediche">
        <div className="cont">
          <h2>Per ricordarlo</h2>
          <p>Lascia un pensiero per Gianluca</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FORM DEDICHE
      ══════════════════════════════════════════ */}
      <section className="sez dediche-wrap">
        <div className="cont-wide">
          <div className="dediche-grid">

            {/* Testo + link mailto */}
            <div className="dbox">
              <span style={{fontSize:'1.7rem'}}>🎓</span>
              <h3>Una dedica può diventare un riconoscimento</h3>
              <p>
                ViverAI raccoglie ricordi di Gianluca per chiedere all'università la{' '}
                <strong>laurea in Informatica post-mortem</strong> in suo onore.
              </p>
              <p>
                Se hai conosciuto BLOB nel suo lavoro — il suo modo di scrivere codice, di risolvere
                problemi, di insegnare informatica con dedizione — la tua testimonianza è preziosa.
              </p>
              <a
                className="dlink"
                href="mailto:luana@corvoinformatica.it?subject=Dedica%20per%20la%20laurea%20in%20Informatica%20di%20Gianluca%20Corvo%20(BLOB)"
              >✦ Lascia una dedica per la laurea ✦</a>

              <hr className="ddiv" />

              <p>
                Forse non l'hai conosciuto come informatico, ma come amico, vicino, compagno di
                scuola, di gioco, di vita. Raccontaci di lui — un sorriso, un gesto, una giornata
                insieme, lascia una foto per mantenere vivo il suo ricordo.
              </p>
              <a
                className="dlink"
                href="mailto:luana@corvoinformatica.it?subject=Una%20dedica%20affettuosa%20per%20Gianluca%20(BLOB)"
              >✦ Lascia una dedica affettuosa ✦</a>
            </div>

            {/* Form */}
            <div className="dbox">
              {formSent ? (
                <div className="form-ok">
                  <span className="big">✦</span>
                  <h3>Grazie, la tua dedica è arrivata</h3>
                  <p>Dopo l'approvazione comparirà nella galleria dei ricordi di Gianluca.</p>
                </div>
              ) : (
                <form className="dform" onSubmit={handleSubmit}>
                  <div>
                    <label>Il tuo nome *</label>
                    <input required value={formData.nome}
                      onChange={e=>setFormData(d=>({...d,nome:e.target.value}))}
                      placeholder="Come ti chiami?" />
                  </div>
                  <div>
                    <label>La tua email *</label>
                    <input type="email" required value={formData.email}
                      onChange={e=>setFormData(d=>({...d,email:e.target.value}))}
                      placeholder="Per eventuali comunicazioni" />
                  </div>
                  <div>
                    <label>Tipo di dedica</label>
                    <div className="radio-row">
                      <label className="radio-label">
                        <input type="radio" name="tipo" value="accademica"
                          checked={formData.tipo==='accademica'}
                          onChange={e=>setFormData(d=>({...d,tipo:e.target.value}))} />
                        🎓 Per la laurea
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="tipo" value="affettuosa"
                          checked={formData.tipo==='affettuosa'}
                          onChange={e=>setFormData(d=>({...d,tipo:e.target.value}))} />
                        🌸 Affettuosa
                      </label>
                    </div>
                  </div>
                  <div>
                    <label>Il tuo ricordo *</label>
                    <textarea required value={formData.testo}
                      onChange={e=>setFormData(d=>({...d,testo:e.target.value}))}
                      placeholder="Racconta un momento, un pensiero, un ricordo di Gianluca…" />
                  </div>
                  <div>
                    <label>Foto (opzionale)</label>
                    <div className="foto-area" onClick={()=>fileRef.current.click()}>
                      {previewUrl
                        ? <img src={previewUrl} className="foto-preview" alt="anteprima" />
                        : <><span style={{fontSize:'1.5rem'}}>📷</span><p>Clicca per aggiungere una foto — si ridimensiona automaticamente</p></>
                      }
                    </div>
                    <input ref={fileRef} type="file" accept="image/*"
                      style={{display:'none'}} onChange={handleFile} />
                  </div>
                  <button className="btn-invia" type="submit" disabled={formLoading}>
                    {formLoading ? 'Invio in corso…' : '✦ Invia la tua dedica ✦'}
                  </button>
                  <p className="form-nota">Ogni dedica viene approvata prima di apparire nella galleria.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IN SUO NOME
      ══════════════════════════════════════════ */}
      <section className="sez suo-nome">
        <div className="cont-wide">
          <div className="sn-head">
            <h2>In suo nome</h2>
            <p>Dei piccoli gesti per il mondo</p>
          </div>
          <div className="gesti-grid">
            {[
              {
                emoji:'🐾', colore: BOX_COLORS[0],
                titolo:'Per gli animali',
                testo:'In memoria di Nanetta, la gatta che lui chiamava la sua bambina, e di tutti i felini che cercano una mano gentile.',
                href:'mailto:luana@corvoinformatica.it?subject=Donazione%20animali%20in%20memoria%20di%20BLOB',
              },
              {
                emoji:'🌲', colore: BOX_COLORS[1],
                titolo:'Per le piante',
                testo:'Per la pineta di Castel Fusano — dove BLOB è cresciuto con gli amici "del ponte" — e per ogni albero che il mondo non vuole perdere.',
                href:'mailto:luana@corvoinformatica.it?subject=Donazione%20piante%20in%20memoria%20di%20BLOB',
              },
              {
                emoji:'💚', colore: BOX_COLORS[2],
                titolo:"Per chi soffre d'ansia",
                testo:'Gianluca conviveva con gli attacchi di panico. Un suo carissimo amico, "Devil" — a cui va un grazie di cuore — è stato per lui un Angelo che lo ha aiutato a guarire da bambino.',
                href:'mailto:luana@corvoinformatica.it?subject=Donazione%20salute%20mentale%20in%20memoria%20di%20BLOB',
              },
              {
                emoji:'🌿', colore: BOX_COLORS[3],
                titolo:'A ViverAI',
                testo:'Perché questa piattaforma resti gratuita per tutti — educazione del verde accessibile a chiunque voglia vivere con più cura.',
                href:'mailto:luana@corvoinformatica.it?subject=Donazione%20ViverAI',
              },
            ].map((g,i)=>(
              <div key={i} className="gbox"
                style={{borderColor:g.colore.border, background:g.colore.bg}}>
                <span className="em">{g.emoji}</span>
                <h4 style={{color:g.colore.text}}>{g.titolo}</h4>
                <p>{g.testo}</p>
                <a className="dona-link" href={g.href}
                  style={{color:g.colore.text}}>Dona →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — fedele all'originale
      ══════════════════════════════════════════ */}
      <footer className="footer">

        {/* Blocco brand — allineato a destra come nell'originale */}
        <div className="footer-brand">
          <div className="footer-logo">ViverAI</div>
          <div className="footer-piattaforma">Piattaforma educativa del verde</div>
          <div className="footer-divider">
            <div className="footer-divider-line" />
            <span className="footer-divider-stella">✦</span>
            <div className="footer-divider-line" />
          </div>
          <div className="footer-motto-wrap">
            <span className="footer-motto-1">Vivere con cura.</span>
            <span className="footer-motto-2">Per Gianluca.</span>
          </div>
        </div>

        {/* 4 colonne link */}
        <div className="footer-cols">

          <div className="fc">
            <h5>Esplora</h5>
            <ul>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/blog">Blog & Rivista</a></li>
              <li><a href="#">Chatbot AI</a></li>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/calendario">Calendario del verde</a></li>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/verdescuola">VerdeScuola</a></li>
            </ul>
          </div>

          <div className="fc">
            <h5>Community</h5>
            <ul>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/community">La community</a></li>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/chi-siamo">Chi siamo</a></li>
            </ul>
          </div>

          <div className="fc">
            <h5>In memoria</h5>
            <ul>
              <li>
                <a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/chi-siamo"
                   className="fc-stella-link">Gianluca Corvo</a>
                <span className="fc-blob">il nostro BLOB</span>
              </li>
              <li><a href="#dediche">Lascia una dedica</a></li>
              <li><a href="#">La galleria</a></li>
            </ul>
          </div>

          <div className="fc">
            <h5>Resta in contatto</h5>
            <ul>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/contatti">Contatti</a></li>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/cookie">Cookie</a></li>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/privacy">Privacy</a></li>
              <li><a href="https://viverai-git-main-luana-corvo-s-projects.vercel.app/termini">Termini</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ViverAI — Luana Corvo. Tutti i diritti riservati.</p>
          <p>Fatto con <span className="heart">♥</span> per Gianluca Corvo (BLOB)</p>
        </div>

      </footer>
    </>
  )
}
