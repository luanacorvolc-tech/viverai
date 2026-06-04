'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

/* ══════════════════════════════════════════════════════
   DATI SLIDE — 8 immagini con testi
   Le immagini vanno in: public/images/chi-siamo/
══════════════════════════════════════════════════════ */
const SLIDES = [
  {
    img: '/images/chi-siamo/slide-01-mano-fiori.png',
    label: null,
    titolo: null,
    testo: null,
    cta: null,
    dur: 5500,
  },
  {
    img: '/images/chi-siamo/slide-02-vivaio.png',
    label: 'Il nostro manifesto',
    titolo: 'Vivere con cura.',
    testo: "ViverAI nasce dall'amore per la natura, per la vita e per chi amiamo.\nUna piattaforma educativa del verde, per tutti coloro che vogliono vivere in modo più consapevole e sostenibile.",
    cta: null,
    dur: 9000,
  },
  {
    img: '/images/chi-siamo/slide-03-pineta.png',
    label: 'Come nasce il nome',
    titolo: 'VIV-er-AI.\nNati nei vivai.',
    testo: 'Vivaio: luogo dove le piante crescono prima di essere messe a dimora.\nCome noi — cresciamo, ci nutriamo di sapere, poi fiorire nel mondo.',
    cta: null,
    dur: 10000,
  },
  {
    img: '/images/chi-siamo/slide-04-stelle.png',
    label: "Nel nome c'è tutto",
    titolo: 'Viver- + AI\n= Amore Infinito.',
    testo: 'Vivere · Intelligenza Artificiale · Amore Infinito.\nTre anime in una parola sola. Per Gianluca, che le incarnava tutte.',
    cta: null,
    dur: 10000,
  },
  {
    img: '/images/chi-siamo/slide-05-gianluca.png',
    label: '✦ In memoriam',
    titolo: 'Per mio fratello\nGianluca Corvo.',
    testo: 'BLOB — Binary Large OBject.\nInformatico, poeta del codice, anima generosa.\nQuesto sito è la sua eredità più viva.',
    cta: null,
    stellaBlink: true,
    dur: 11000,
  },
  {
    img: '/images/chi-siamo/slide-06-ciclamini.png',
    label: 'Polvere di stelle',
    titolo: '«Mio fratello è polvere\ndi stelle brillante.»',
    testo: "Luce vera che attraversa l'universo, eterna e luminosa.\nIo e te, un giorno molto lontano, diventeremo la stessa luce\ne splenderemo tutti insieme nel silenzio infinito del cielo.",
    cta: null,
    dur: 13000,
  },
  {
    img: '/images/chi-siamo/slide-07-universo.png',
    label: 'Ricongiungersi',
    titolo: 'La pineta di\nCastel Fusano.',
    testo: 'Dove Gianluca è cresciuto con gli amici "del ponte".\nDove la natura e i ricordi si mescolano tra i ciclamini e i pini.\nUn posto che continua a respirare per lui.',
    cta: { testo: '✦ Lascia una dedica', href: '#dediche', tipo: 'outline' },
    dur: 11000,
  },
  {
    img: '/images/chi-siamo/slide-08-famiglia.png',
    label: 'Famiglia Corvo · Toia',
    titolo: 'Una stella più lucente\nnel buio ci guida.',
    testo: 'Emidio · Luana · Sofia · Leonardo · Nello\nInsieme a Gianluca, per sempre.',
    cta: { testo: 'Esplora il blog →', href: '/blog', tipo: 'solid' },
    dur: 10000,
  },
]

export default function ChiSiamo() {
  const [cur, setCur] = useState(0)
  const [visible, setVisible] = useState(false)
  const [formTipo, setFormTipo] = useState('accademica')
  const [formNome, setFormNome] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formTesto, setFormTesto] = useState('')
  const [previewUrl, setPreviewUrl] = useState(null)
  const [formSent, setFormSent] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const fileRef = useRef()
  const timerRef = useRef()

  const goTo = (n) => {
    const idx = ((n % SLIDES.length) + SLIDES.length) % SLIDES.length
    setVisible(false)
    setTimeout(() => {
      setCur(idx)
      setTimeout(() => setVisible(true), 400)
    }, 600)
  }

  useEffect(() => {
    setTimeout(() => setVisible(true), 600)
  }, [])

  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => goTo(cur + 1), SLIDES[cur].dur)
    return () => clearTimeout(timerRef.current)
  }, [cur])

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setPreviewUrl(URL.createObjectURL(f))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setFormLoading(false)
    setFormSent(true)
    const sub = formTipo === 'accademica'
      ? 'Dedica per la laurea in Informatica di Gianluca Corvo (BLOB)'
      : 'Una dedica affettuosa per Gianluca (BLOB)'
    window.open(
      `mailto:luana@corvoinformatica.it?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(formTesto)}`,
      '_blank'
    )
  }

  const s = SLIDES[cur]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        html{scroll-behavior:smooth}
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Lato',sans-serif;background:#faf9f5;color:#2a2a2a}

        /* ── HERO ── */
        .hero{
          position:relative;width:100%;
          height:calc(100vh - 96px);
          min-height:520px;max-height:820px;
          overflow:hidden;background:#050810;
        }
        .hbg{
          position:absolute;inset:0;
          background-size:cover;background-position:center;
          transition:opacity 1.4s ease;
          animation:kb 16s ease-in-out infinite alternate;
        }
        @keyframes kb{from{transform:scale(1)}to{transform:scale(1.06)}}

        /* fade sinistra stile home */
        .hfade{
          position:absolute;inset:0;
          background:linear-gradient(105deg,
            rgba(4,8,16,.88) 0%,
            rgba(4,8,16,.6) 32%,
            rgba(4,8,16,.18) 60%,
            transparent 100%);
          z-index:1;
        }
        /* velo globale che appare piano */
        .hvelo{
          position:absolute;inset:0;
          background:rgba(4,8,16,.3);
          opacity:0;
          transition:opacity 2.4s ease .4s;
          z-index:1;
        }
        .hvelo.on{opacity:1}

        /* stelle */
        .hstars{position:absolute;inset:0;z-index:2;pointer-events:none}
        .hstar{
          position:absolute;border-radius:50%;background:white;
          animation:ps var(--d,3s) ease-in-out infinite;
          animation-delay:var(--dl,0s);
        }
        @keyframes ps{0%,100%{opacity:.25;transform:scale(1)}50%{opacity:.9;transform:scale(1.9)}}

        /* stella lampeggiante Gianluca */
        .hsblink{
          position:absolute;top:11%;right:7%;
          font-size:2.6rem;color:#e8d870;z-index:4;
          animation:sblink 1.4s ease-in-out infinite;
        }
        @keyframes sblink{
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.08;transform:scale(.6)}
        }

        /* contenuto testo */
        .hbody{
          position:absolute;left:0;top:0;bottom:0;width:54%;
          display:flex;flex-direction:column;justify-content:center;
          padding:0 60px;z-index:3;
          opacity:0;transform:translateY(24px);
          transition:opacity 1.1s ease,transform 1.1s ease;
        }
        .hbody.on{opacity:1;transform:translateY(0)}
        .hlabel{
          display:inline-block;
          font-size:.68rem;letter-spacing:2.5px;text-transform:uppercase;
          color:#a8d060;background:rgba(0,0,0,.28);
          border:1px solid rgba(168,208,96,.3);
          padding:5px 13px;border-radius:20px;margin-bottom:18px;width:fit-content;
        }
        .htitle{
          font-family:'Playfair Display',serif;
          font-size:clamp(1.9rem,4.2vw,3.6rem);font-weight:700;
          color:white;line-height:1.18;
          text-shadow:0 2px 28px rgba(0,0,0,.55);
          white-space:pre-line;margin-bottom:16px;
        }
        .htext{
          font-size:clamp(.82rem,1.5vw,1rem);
          color:rgba(255,255,255,.87);line-height:1.82;font-weight:300;
          text-shadow:0 1px 8px rgba(0,0,0,.5);
          white-space:pre-line;margin-bottom:26px;max-width:460px;
        }
        .hcta{
          display:inline-flex;align-items:center;gap:8px;
          padding:11px 26px;border-radius:28px;
          font-size:.86rem;font-weight:600;cursor:pointer;
          width:fit-content;transition:all .25s;
          font-family:'Lato',sans-serif;text-decoration:none;
        }
        .hcta.outline{background:transparent;border:1.5px solid rgba(255,255,255,.62);color:white}
        .hcta.outline:hover{background:rgba(255,255,255,.14);border-color:white}
        .hcta.solid{background:#2D5016;border:1.5px solid #2D5016;color:white}
        .hcta.solid:hover{background:#3d6a1e}

        /* dots */
        .hdots{
          position:absolute;bottom:22px;left:50%;transform:translateX(-50%);
          display:flex;gap:9px;z-index:10;
        }
        .hdot{
          height:7px;width:7px;border-radius:4px;
          background:rgba(255,255,255,.3);border:none;cursor:pointer;
          transition:all .35s;padding:0;
        }
        .hdot.on{background:white;width:26px}
        .harrow{
          position:absolute;top:50%;transform:translateY(-50%);
          background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);
          color:white;width:42px;height:42px;border-radius:50%;
          font-size:1.3rem;cursor:pointer;z-index:10;
          display:flex;align-items:center;justify-content:center;
          transition:background .2s;
        }
        .harrow:hover{background:rgba(255,255,255,.22)}
        .harrow.l{left:18px}.harrow.r{right:18px}
        .hcnt{
          position:absolute;bottom:24px;right:26px;
          font-size:.7rem;color:rgba(255,255,255,.42);letter-spacing:1px;z-index:10;
        }

        /* ── SEZIONI ── */
        .ricordarlo{
          background:white;text-align:center;
          padding:34px 24px;border-bottom:1px solid #e8e4d8;
        }
        .ricordarlo h2{
          font-family:'Playfair Display',serif;
          font-size:clamp(1.6rem,4vw,2.5rem);color:#2D5016;margin-bottom:7px;
        }
        .ricordarlo p{font-size:1rem;color:#999;font-weight:300}

        .dediche{background:#f5f3ec;padding:44px 24px;border-top:3px solid #2D5016}
        .dgrid{
          display:grid;grid-template-columns:1fr 1fr;gap:26px;
          max-width:1000px;margin:0 auto;align-items:start;
        }
        @media(max-width:680px){.dgrid{grid-template-columns:1fr}}
        .dcard{
          background:white;border-radius:14px;padding:26px 22px;
          box-shadow:0 2px 18px rgba(45,80,22,.07);border:1px solid #ddd9c8;
        }
        .dem{font-size:1.8rem;display:block;margin-bottom:8px}
        .dcard h3{font-family:'Playfair Display',serif;font-size:1.08rem;color:#2D5016;margin-bottom:9px}
        .dcard p{font-size:.86rem;color:#666;line-height:1.68;margin-bottom:9px}
        .dlink{
          display:inline-block;color:#5a8a3a;font-weight:700;
          font-size:.8rem;border-bottom:1px solid currentColor;margin-bottom:7px;
          text-decoration:none;
        }
        .dlink:hover{color:#2D5016}
        hr.dd{border:none;border-top:1px solid #e4e0d0;margin:15px 0}
        .dform{display:flex;flex-direction:column;gap:11px}
        .fg label{display:block;font-size:.72rem;font-weight:700;color:#444;margin-bottom:4px}
        .fg input,.fg textarea{
          width:100%;border:1.5px solid #d0ccbc;border-radius:8px;
          padding:9px 12px;font-family:'Lato',sans-serif;font-size:.87rem;
          color:#2a2a2a;background:#faf9f5;outline:none;transition:border-color .2s;
        }
        .fg input:focus,.fg textarea:focus{border-color:#5a8a3a}
        .fg textarea{min-height:96px;resize:vertical}
        .rrow{display:flex;gap:14px;flex-wrap:wrap}
        .rl{display:flex;align-items:center;gap:6px;font-size:.82rem;color:#555;cursor:pointer}
        .rl input{width:auto}
        .fphoto{
          border:2px dashed #b8c9a0;border-radius:9px;padding:14px;
          text-align:center;cursor:pointer;background:#f8faf4;
          font-size:.76rem;color:#999;transition:border-color .2s,background .2s;
        }
        .fphoto:hover{border-color:#5a8a3a;background:#eef7e2}
        .fphoto .fi{font-size:1.5rem;display:block;margin-bottom:4px}
        .fprev{width:100%;max-height:140px;object-fit:cover;border-radius:8px;margin-top:8px}
        .bsend{
          background:#2D5016;color:white;border:none;border-radius:8px;
          padding:12px 20px;font-family:'Lato',sans-serif;font-size:.9rem;
          font-weight:700;cursor:pointer;letter-spacing:.3px;
          transition:background .2s;width:100%;
        }
        .bsend:hover{background:#3d6a1e}
        .bsend:disabled{opacity:.65;cursor:wait}
        .fnota{text-align:center;font-size:.68rem;color:#ccc;margin-top:2px}
        .fok{text-align:center;padding:28px 12px;color:#2D5016}
        .fok .fbig{font-size:2.4rem;display:block;margin-bottom:10px}
        .fok h3{font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:7px}
        .fok p{font-size:.83rem;color:#888}

        .suonome{background:white;padding:44px 24px}
        .snh{text-align:center;margin-bottom:26px}
        .snh h2{font-family:'Playfair Display',serif;font-size:clamp(1.4rem,3.5vw,2.1rem);color:#2D5016;margin-bottom:5px}
        .snh p{font-size:.86rem;color:#bbb;font-style:italic}
        .ggrid{
          display:grid;grid-template-columns:repeat(4,1fr);gap:16px;
          max-width:1080px;margin:0 auto;
        }
        @media(max-width:820px){.ggrid{grid-template-columns:1fr 1fr}}
        @media(max-width:480px){.ggrid{grid-template-columns:1fr}}
        .gcard{
          border-radius:13px;padding:20px 17px;border:2.5px solid;
          transition:transform .2s,box-shadow .2s;
        }
        .gcard:hover{transform:translateY(-4px);box-shadow:0 10px 26px rgba(0,0,0,.09)}
        .ge{font-size:1.75rem;display:block;margin-bottom:9px}
        .gcard h4{font-family:'Playfair Display',serif;font-size:.94rem;margin-bottom:7px}
        .gcard p{font-size:.76rem;color:#666;line-height:1.65;margin-bottom:12px}
        .gdona{
          display:inline-block;font-weight:700;font-size:.78rem;
          letter-spacing:.3px;border-bottom:2px solid currentColor;
          transition:opacity .2s;text-decoration:none;
        }
        .gdona:hover{opacity:.68}

        /* ── FOOTER ── */
        .footer{background:#162818;color:#d4c4a0;padding:62px 48px 30px}
        .fbrand{text-align:right;max-width:1080px;margin:0 auto 50px}
        .flogo{
          font-family:'Playfair Display',serif;font-style:italic;
          font-size:clamp(2.2rem,5vw,3.8rem);font-weight:400;color:#d4c4a0;
          letter-spacing:-1px;line-height:1;margin-bottom:9px;
        }
        .fpiatt{font-size:.63rem;letter-spacing:4px;text-transform:uppercase;color:#8aaa70;margin-bottom:24px}
        .fdiv{display:flex;align-items:center;justify-content:flex-end;gap:14px;margin-bottom:20px}
        .fdline{height:1px;width:76px;background:#8aaa70;opacity:.4}
        .fdstar{color:#c4a870;font-size:1rem}
        .fm1{font-family:'Playfair Display',serif;font-style:italic;font-size:1.08rem;color:#d4c4a0;display:block;text-align:right;margin-bottom:4px}
        .fm2{font-family:'Playfair Display',serif;font-style:italic;font-size:.98rem;color:#c4a870;display:block;text-align:right}
        .fcols{
          display:grid;grid-template-columns:repeat(4,1fr);gap:30px;
          max-width:1080px;margin:0 auto;
          border-top:1px solid rgba(138,170,112,.18);padding-top:38px;
        }
        @media(max-width:820px){.fcols{grid-template-columns:1fr 1fr}}
        @media(max-width:440px){.fcols{grid-template-columns:1fr}}
        .fc h5{font-size:.61rem;letter-spacing:2px;text-transform:uppercase;color:#8aaa70;margin-bottom:17px;font-weight:400}
        .fc ul{list-style:none}
        .fc ul li{margin-bottom:11px}
        .fc ul li a{color:#c8bca0;font-size:.85rem;font-weight:300;transition:color .2s;text-decoration:none}
        .fc ul li a:hover{color:#e8dcc0}
        .fcblob{font-family:'Playfair Display',serif;font-style:italic;font-size:.78rem;color:#c4a870;display:block;margin-top:-5px;margin-bottom:9px}
        .fcstar::before{content:'✦ ';color:#c4a870;font-size:.65rem}
        .fbot{
          max-width:1080px;margin:34px auto 0;
          border-top:1px solid rgba(138,170,112,.13);padding-top:18px;
          display:flex;justify-content:space-between;flex-wrap:wrap;gap:7px;
        }
        .fbot p{font-size:.68rem;opacity:.38;color:#d4c4a0}
        .fheart{color:#c4a870}
      `}</style>

      {/* ══ HERO ══ */}
      <section className="hero">
        {/* Background */}
        <div
          className="hbg"
          style={{ backgroundImage: `url('${s.img}')` }}
        />

        {/* Fade laterale */}
        <div className="hfade" />

        {/* Velo globale */}
        <div className={`hvelo${visible ? ' on' : ''}`} />

        {/* Stelle decorative */}
        <div className="hstars">
          {[
            [2,9,14,3.2,.4],[3,20,78,2.7,1.1],[2,62,22,4,.2],
            [3,72,85,3.6,2],[2,36,92,2.4,.8],[2,16,55,3.9,1.5],
            [3,82,44,2.9,.1],[2,50,7,4.3,2.2],
          ].map(([sz,t,l,d,dl],i) => (
            <span key={i} className="hstar" style={{
              width:`${sz}px`,height:`${sz}px`,
              top:`${t}%`,left:`${l}%`,
              '--d':`${d}s`,'--dl':`${dl}s`,
            }} />
          ))}
        </div>

        {/* Stella lampeggiante slide Gianluca */}
        {s.stellaBlink && <span className="hsblink">✦</span>}

        {/* Testo slide */}
        <div className={`hbody${visible ? ' on' : ''}`}>
          {s.label && <span className="hlabel">{s.label}</span>}
          {s.titolo && <h1 className="htitle">{s.titolo}</h1>}
          {s.testo && <p className="htext">{s.testo}</p>}
          {s.cta && (
            <a href={s.cta.href} className={`hcta ${s.cta.tipo}`}>{s.cta.testo}</a>
          )}
        </div>

        {/* Frecce */}
        <button className="harrow l" onClick={() => { clearTimeout(timerRef.current); goTo(cur - 1) }}>‹</button>
        <button className="harrow r" onClick={() => { clearTimeout(timerRef.current); goTo(cur + 1) }}>›</button>

        {/* Dots */}
        <div className="hdots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hdot${i === cur ? ' on' : ''}`}
              onClick={() => { clearTimeout(timerRef.current); goTo(i) }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Contatore */}
        <span className="hcnt">{cur + 1} / {SLIDES.length}</span>
      </section>

      {/* ══ PER RICORDARLO ══ */}
      <section className="ricordarlo" id="dediche">
        <h2>Per ricordarlo</h2>
        <p>Lascia un pensiero per Gianluca</p>
      </section>

      {/* ══ FORM DEDICHE ══ */}
      <section className="dediche">
        <div className="dgrid">

          {/* Testo + link */}
          <div className="dcard">
            <span className="dem">🎓</span>
            <h3>Una dedica può diventare un riconoscimento</h3>
            <p>ViverAI raccoglie ricordi di Gianluca per chiedere all&apos;università la <strong>laurea in Informatica post-mortem</strong> in suo onore.</p>
            <p>Se hai conosciuto BLOB nel suo lavoro — il suo modo di scrivere codice, di risolvere problemi, di insegnare informatica con dedizione — la tua testimonianza è preziosa.</p>
            <a className="dlink" href="mailto:luana@corvoinformatica.it?subject=Dedica%20per%20la%20laurea%20in%20Informatica%20di%20Gianluca%20Corvo%20(BLOB)">✦ Lascia una dedica per la laurea ✦</a>
            <hr className="dd" />
            <p>Forse non l&apos;hai conosciuto come informatico, ma come amico, vicino, compagno di scuola, di gioco, di vita. Raccontaci di lui — un sorriso, un gesto, una giornata insieme, lascia una foto per mantenere vivo il suo ricordo.</p>
            <a className="dlink" href="mailto:luana@corvoinformatica.it?subject=Una%20dedica%20affettuosa%20per%20Gianluca%20(BLOB)">✦ Lascia una dedica affettuosa ✦</a>
          </div>

          {/* Form */}
          <div className="dcard">
            {formSent ? (
              <div className="fok">
                <span className="fbig">✦</span>
                <h3>Grazie, la tua dedica è arrivata</h3>
                <p>Dopo l&apos;approvazione comparirà nella galleria dei ricordi di Gianluca.</p>
              </div>
            ) : (
              <form className="dform" onSubmit={handleSubmit}>
                <div className="fg">
                  <label>Il tuo nome *</label>
                  <input required value={formNome} onChange={e => setFormNome(e.target.value)} placeholder="Come ti chiami?" />
                </div>
                <div className="fg">
                  <label>La tua email *</label>
                  <input type="email" required value={formEmail} onChange={e => setFormEmail(e.target.value)} placeholder="Per eventuali comunicazioni" />
                </div>
                <div className="fg">
                  <label>Tipo di dedica</label>
                  <div className="rrow">
                    <label className="rl">
                      <input type="radio" name="tipo" value="accademica" checked={formTipo === 'accademica'} onChange={() => setFormTipo('accademica')} />
                      🎓 Per la laurea
                    </label>
                    <label className="rl">
                      <input type="radio" name="tipo" value="affettuosa" checked={formTipo === 'affettuosa'} onChange={() => setFormTipo('affettuosa')} />
                      🌸 Affettuosa
                    </label>
                  </div>
                </div>
                <div className="fg">
                  <label>Il tuo ricordo *</label>
                  <textarea required value={formTesto} onChange={e => setFormTesto(e.target.value)} placeholder="Racconta un momento, un pensiero, un ricordo di Gianluca…" />
                </div>
                <div className="fg">
                  <label>Foto (opzionale)</label>
                  <div className="fphoto" onClick={() => fileRef.current.click()}>
                    {previewUrl
                      ? <img src={previewUrl} className="fprev" alt="anteprima" />
                      : <><span className="fi">📷</span>Clicca per aggiungere una foto</>
                    }
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
                </div>
                <button type="submit" className="bsend" disabled={formLoading}>
                  {formLoading ? 'Invio in corso…' : '✦ Invia la tua dedica ✦'}
                </button>
                <p className="fnota">Ogni dedica viene approvata prima di apparire nella galleria.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ IN SUO NOME ══ */}
      <section className="suonome">
        <div className="snh">
          <h2>In suo nome</h2>
          <p>Dei piccoli gesti per il mondo</p>
        </div>
        <div className="ggrid">
          {[
            { em:'🐾', titolo:'Per gli animali', color:'#2D5016', bg:'#2D501608',
              testo:'In memoria di Nanetta, la gatta che lui chiamava la sua bambina, e di tutti i felini che cercano una mano gentile.',
              href:'mailto:luana@corvoinformatica.it?subject=Donazione%20animali%20in%20memoria%20di%20BLOB' },
            { em:'🌲', titolo:'Per le piante', color:'#3d6a1e', bg:'#5a8a3a08',
              testo:'Per la pineta di Castel Fusano — dove BLOB è cresciuto con gli amici "del ponte" — e per ogni albero che il mondo non vuole perdere.',
              href:'mailto:luana@corvoinformatica.it?subject=Donazione%20piante%20in%20memoria%20di%20BLOB' },
            { em:'💚', titolo:"Per chi soffre d'ansia", color:'#4a7a10', bg:'#7CAA2D08',
              testo:'Gianluca conviveva con gli attacchi di panico. Un suo carissimo amico, "Devil" — a cui va un grazie di cuore — è stato per lui un Angelo che lo ha aiutato a guarire da bambino.',
              href:'mailto:luana@corvoinformatica.it?subject=Donazione%20ansia%20in%20memoria%20di%20BLOB' },
            { em:'🌿', titolo:'A ViverAI', color:'#a05a20', bg:'#c47c3a08',
              testo:'Perché questa piattaforma resti gratuita per tutti — educazione del verde accessibile a chiunque voglia vivere con più cura.',
              href:'mailto:luana@corvoinformatica.it?subject=Donazione%20ViverAI' },
          ].map((g, i) => (
            <div key={i} className="gcard" style={{ borderColor: g.color, background: g.bg }}>
              <span className="ge">{g.em}</span>
              <h4 style={{ color: g.color }}>{g.titolo}</h4>
              <p>{g.testo}</p>
              <a className="gdona" style={{ color: g.color }} href={g.href}>Dona →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="fbrand">
          <div className="flogo">ViverAI</div>
          <div className="fpiatt">Piattaforma educativa del verde</div>
          <div className="fdiv">
            <div className="fdline" />
            <span className="fdstar">✦</span>
            <div className="fdline" />
          </div>
          <span className="fm1">Vivere con cura.</span>
          <span className="fm2">Per Gianluca.</span>
        </div>

        <div className="fcols">
          <div className="fc">
            <h5>Esplora</h5>
            <ul>
              <li><a href="/blog">Blog &amp; Rivista</a></li>
              <li><a href="#">Chatbot AI</a></li>
              <li><a href="/calendario">Calendario del verde</a></li>
              <li><a href="/verdescuola">VerdeScuola</a></li>
            </ul>
          </div>
          <div className="fc">
            <h5>Community</h5>
            <ul>
              <li><a href="/community">La community</a></li>
              <li><a href="/chi-siamo">Chi siamo</a></li>
            </ul>
          </div>
          <div className="fc">
            <h5>In memoria</h5>
            <ul>
              <li>
                <a className="fcstar" href="/chi-siamo">Gianluca Corvo</a>
                <span className="fcblob">il nostro BLOB</span>
              </li>
              <li><a href="#dediche">Lascia una dedica</a></li>
              <li><a href="#">La galleria</a></li>
            </ul>
          </div>
          <div className="fc">
            <h5>Resta in contatto</h5>
            <ul>
              <li><a href="/contatti">Contatti</a></li>
              <li><a href="/cookie">Cookie</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/termini">Termini</a></li>
            </ul>
          </div>
        </div>

        <div className="fbot">
          <p>© {new Date().getFullYear()} ViverAI — Luana Corvo. Tutti i diritti riservati.</p>
          <p>Fatto con <span className="fheart">♥</span> per Gianluca Corvo (BLOB)</p>
        </div>
      </footer>
    </>
  )
}
